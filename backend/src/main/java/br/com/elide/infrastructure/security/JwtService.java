package br.com.elide.infrastructure.security;

import br.com.elide.infrastructure.persistence.UserEntity;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class JwtService {
    private final SecurityProperties properties;

    public JwtService(SecurityProperties properties) {
        this.properties = properties;
    }

    public String issueAccessToken(UserEntity user) {
        var roles = user.getRoles().stream()
            .map(role -> role.getName().name())
            .collect(Collectors.toSet());
        var now = Instant.now();
        return Jwts.builder()
            .subject(user.getUsername())
            .claims(Map.of("roles", roles, "mustChangePassword", user.isMustChangePassword()))
            .issuedAt(Date.from(now))
            .expiration(Date.from(now.plusSeconds(properties.accessTokenMinutes() * 60)))
            .signWith(key())
            .compact();
    }

    public String subject(String token) {
        return Jwts.parser()
            .verifyWith(key())
            .build()
            .parseSignedClaims(token)
            .getPayload()
            .getSubject();
    }

    private SecretKey key() {
        var secret = properties.jwtSecret();
        if (secret.length() >= 64) {
            return Keys.hmacShaKeyFor(secret.getBytes());
        }
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode("Y2hhbmdlLXRoaXMtc2VjcmV0LWZvci1sb2NhbC1kZXZlbG9wbWVudC1lbGlkZS1hcHA="));
    }
}

