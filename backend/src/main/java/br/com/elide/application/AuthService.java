package br.com.elide.application;

import br.com.elide.application.dto.AuthDtos.AuthResponse;
import br.com.elide.application.dto.AuthDtos.ChangePasswordRequest;
import br.com.elide.application.dto.AuthDtos.ForgotPasswordRequest;
import br.com.elide.application.dto.AuthDtos.LoginRequest;
import br.com.elide.application.dto.AuthDtos.RegisterRequest;
import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.infrastructure.persistence.CustomerEntity;
import br.com.elide.infrastructure.persistence.RefreshTokenEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.CustomerRepository;
import br.com.elide.infrastructure.persistence.repository.RefreshTokenRepository;
import br.com.elide.infrastructure.persistence.repository.RoleRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import br.com.elide.infrastructure.security.JwtService;
import br.com.elide.infrastructure.security.SecurityProperties;
import jakarta.transaction.Transactional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.time.Instant;
import java.util.HexFormat;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserRepository users;
    private final CustomerRepository customers;
    private final RoleRepository roles;
    private final RefreshTokenRepository refreshTokens;
    private final PasswordEncoder passwordEncoder;
    private final SecurityProperties properties;

    public AuthService(
        AuthenticationManager authenticationManager,
        JwtService jwtService,
        UserRepository users,
        CustomerRepository customers,
        RoleRepository roles,
        RefreshTokenRepository refreshTokens,
        PasswordEncoder passwordEncoder,
        SecurityProperties properties
    ) {
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.users = users;
        this.customers = customers;
        this.roles = roles;
        this.refreshTokens = refreshTokens;
        this.passwordEncoder = passwordEncoder;
        this.properties = properties;
    }

    @Transactional
    public AuthResponse registerCustomer(RegisterRequest request) {
        if (users.existsByUsername(request.username())) {
            throw new IllegalArgumentException("Username already exists");
        }
        var role = roles.findByName(RoleName.CUSTOMER).orElseThrow();
        var user = new UserEntity();
        user.setUsername(request.username());
        user.setEmail(request.email());
        user.setFullName(request.fullName());
        user.setPasswordHash(passwordEncoder.encode(request.password()));
        user.getRoles().add(role);
        var saved = users.save(user);
        var customer = new CustomerEntity();
        customer.setUser(saved);
        customers.save(customer);
        return issue(saved);
    }

    @Transactional
    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.username(), request.password()));
        return issue(users.findByUsername(request.username()).orElseThrow());
    }

    @Transactional
    public void forgotPassword(ForgotPasswordRequest request) {
        users.findByUsername(request.identifier())
            .or(() -> users.findByEmail(request.identifier()))
            .ifPresent(user -> {
                user.setMustChangePassword(true);
                users.save(user);
            });
    }

    @Transactional
    public void changePassword(ChangePasswordRequest request) {
        if (!request.newPassword().equals(request.confirmPassword())) {
            throw new IllegalArgumentException("Password confirmation does not match");
        }
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        var user = users.findByUsername(username).orElseThrow();
        if (!passwordEncoder.matches(request.currentPassword(), user.getPasswordHash())) {
            throw new IllegalArgumentException("Current password is invalid");
        }
        user.setPasswordHash(passwordEncoder.encode(request.newPassword()));
        user.setMustChangePassword(false);
        users.save(user);
    }

    private AuthResponse issue(UserEntity user) {
        var refreshToken = UUID.randomUUID() + "." + UUID.randomUUID();
        var entity = new RefreshTokenEntity();
        entity.setUser(user);
        entity.setTokenHash(hash(refreshToken));
        entity.setExpiresAt(Instant.now().plusSeconds(properties.refreshTokenDays() * 86400));
        refreshTokens.save(entity);
        Set<String> roleNames = user.getRoles().stream().map(role -> role.getName().name()).collect(Collectors.toSet());
        return new AuthResponse(jwtService.issueAccessToken(user), refreshToken, user.getUsername(), user.getFullName(), user.isMustChangePassword(), roleNames);
    }

    private String hash(String token) {
        try {
            var digest = MessageDigest.getInstance("SHA-256").digest(token.getBytes(StandardCharsets.UTF_8));
            return HexFormat.of().formatHex(digest);
        } catch (Exception exception) {
            throw new IllegalStateException("Cannot hash token", exception);
        }
    }
}
