package br.com.elide.application.dto;

import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.PaymentMethod;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public final class CustomerDtos {
    private CustomerDtos() {
    }

    public record CustomerProfileResponse(String fullName, String email, String phone, String cpf, BigDecimal walletBalance) {
    }

    public record CustomerProfileRequest(
        @NotBlank @Size(max = 160) String fullName,
        @NotBlank @Email String email,
        @Size(max = 20) String phone,
        @Size(max = 14) String cpf
    ) {
    }

    public record CustomerAddressRequest(
        @NotBlank @Size(max = 80) String label,
        @NotBlank @Size(max = 120) String street,
        @NotBlank @Size(max = 30) String number,
        @NotBlank @Size(max = 80) String district,
        @NotBlank @Size(max = 10) String zipCode,
        UUID cityId,
        BigDecimal latitude,
        BigDecimal longitude
    ) {
    }

    public record CustomerAddressResponse(UUID id, String label, String street, String number, String district, String zipCode, UUID cityId, BigDecimal latitude, BigDecimal longitude) {
    }

    public record FavoriteRequest(@NotNull UUID storeId) {
    }

    public record CustomerFavoriteResponse(UUID id, UUID storeId, String storeName, String segment, BigDecimal deliveryFee, String eta, boolean open) {
    }

    public record CustomerCouponResponse(UUID id, String code, BigDecimal discountValue, boolean active, String description) {
    }

    public record CustomerWalletResponse(BigDecimal balance, List<CustomerWalletEntryResponse> entries) {
    }

    public record CustomerWalletEntryResponse(UUID id, String icon, String title, BigDecimal amount, Instant createdAt) {
    }

    public record CustomerNotificationResponse(UUID id, String title, String message, boolean read, Instant createdAt) {
    }

    public record CustomerReviewRequest(@NotNull UUID orderId, @Min(1) @Max(5) int rating, @NotBlank @Size(max = 800) String comment) {
    }

    public record CustomerReviewResponse(UUID id, UUID orderId, String storeName, int rating, String comment, Instant createdAt) {
    }

    public record CustomerPaymentMethodResponse(UUID id, PaymentMethod type, String label, String last4, boolean defaultMethod) {
    }

    public record CustomerCardRequest(
        @NotBlank @Size(min = 12, max = 24) String cardNumber,
        @NotBlank @Size(max = 120) String holderName,
        @NotBlank @Size(max = 8) String expiry,
        @NotBlank @Size(min = 3, max = 4) String cvv,
        boolean defaultMethod
    ) {
    }

    public record CustomerCashPreference(@NotNull @DecimalMin("0.00") BigDecimal cashAmount, boolean noChange) {
    }

    public record CustomerPixRequest(@NotNull UUID orderId) {
    }

    public record CustomerPixResponse(UUID orderId, BigDecimal total, String pixCode, Instant expiresAt) {
    }

    public record CustomerTrackingResponse(UUID orderId, OrderStatus status, int etaMinutes, int distanceMeters, List<CustomerTrackingStep> steps) {
    }

    public record CustomerTrackingStep(String label, boolean done) {
    }

    public record CustomerSummaryResponse(long orders, long activeCoupons, BigDecimal walletBalance, long favorites) {
    }
}
