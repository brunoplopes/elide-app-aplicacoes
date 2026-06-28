package br.com.elide.infrastructure.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

@ConfigurationProperties(prefix = "elide.security")
public record SecurityProperties(
    String jwtSecret,
    long accessTokenMinutes,
    long refreshTokenDays,
    List<String> allowedOrigins
) {
}

