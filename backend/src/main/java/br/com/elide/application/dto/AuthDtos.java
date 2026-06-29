package br.com.elide.application.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.Set;

public final class AuthDtos {
    private AuthDtos() {
    }

    public record LoginRequest(@NotBlank String username, @NotBlank String password) {
    }

    public record RegisterRequest(
        @NotBlank @Size(max = 120) String username,
        @NotBlank @Email String email,
        @NotBlank @Size(min = 8) String password,
        @NotBlank @Size(max = 160) String fullName
    ) {
    }

    public record ForgotPasswordRequest(@NotBlank String identifier) {
    }

    public record ChangePasswordRequest(
        @NotBlank String currentPassword,
        @NotBlank @Size(min = 8) String newPassword,
        @NotBlank String confirmPassword
    ) {
    }

    public record AuthResponse(
        String accessToken,
        String refreshToken,
        String username,
        String fullName,
        boolean mustChangePassword,
        Set<String> roles
    ) {
    }
}
