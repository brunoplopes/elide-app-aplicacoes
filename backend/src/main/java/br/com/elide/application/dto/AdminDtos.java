package br.com.elide.application.dto;

import br.com.elide.domain.model.Enums.CourierStatus;
import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.PaymentMethod;
import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.domain.model.Enums.StoreStatus;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Set;
import java.util.UUID;

public final class AdminDtos {
    private AdminDtos() {
    }

    public record AdminStoreRequest(
        @NotBlank @Size(max = 160) String name,
        @NotBlank @Size(max = 18) String document,
        @NotBlank @Size(max = 80) String segment,
        @NotNull StoreStatus status,
        UUID cityId,
        UUID ownerId,
        @NotNull @DecimalMin("0.00") BigDecimal deliveryFee,
        @NotNull @DecimalMin("0.00") BigDecimal minimumOrder,
        boolean open
    ) {
    }

    public record AdminStoreResponse(UUID id, String name, String document, String segment, StoreStatus status, BigDecimal deliveryFee, BigDecimal minimumOrder, boolean open, UUID cityId, String cityName, UUID ownerId, String ownerUsername) {
    }

    public record AdminCategoryRequest(@NotBlank @Size(max = 100) String name, @NotBlank @Size(max = 80) String icon, boolean active) {
    }

    public record AdminCategoryResponse(UUID id, String name, String icon, boolean active) {
    }

    public record AdminBannerRequest(@NotBlank @Size(max = 120) String title, @NotBlank @Size(max = 500) String imageUrl, boolean active) {
    }

    public record AdminBannerResponse(UUID id, String title, String imageUrl, boolean active) {
    }

    public record AdminCityRequest(@NotBlank @Size(max = 120) String name, @NotBlank @Size(min = 2, max = 2) String state, boolean active) {
    }

    public record AdminCityResponse(UUID id, String name, String state, boolean active) {
    }

    public record AdminCouponRequest(@NotBlank @Size(max = 40) String code, @NotNull @DecimalMin("0.00") BigDecimal discountValue, boolean active) {
    }

    public record AdminCouponResponse(UUID id, String code, BigDecimal discountValue, boolean active) {
    }

    public record AdminFeeRequest(@NotBlank @Size(max = 80) String name, @NotNull @DecimalMin("0.00") BigDecimal value, boolean percentage) {
    }

    public record AdminFeeResponse(UUID id, String name, BigDecimal value, boolean percentage) {
    }

    public record AdminSettingRequest(@NotBlank @Size(max = 120) String keyName, @NotBlank @Size(max = 1200) String value) {
    }

    public record AdminSettingResponse(UUID id, String keyName, String value) {
    }

    public record AdminUserRequest(
        @NotBlank @Size(max = 120) String username,
        @NotBlank @Email @Size(max = 180) String email,
        @NotBlank @Size(min = 8, max = 120) String password,
        @NotBlank @Size(max = 160) String fullName,
        @NotNull RoleName role,
        boolean enabled
    ) {
    }

    public record AdminUserUpdateRequest(
        @NotBlank @Email @Size(max = 180) String email,
        @NotBlank @Size(max = 160) String fullName,
        boolean enabled,
        boolean mustChangePassword
    ) {
    }

    public record AdminApprovalRequest(@NotNull String status, @Size(max = 500) String reason) {
    }

    public record AdminUserResponse(UUID id, String username, String email, String fullName, boolean enabled, boolean mustChangePassword, Set<String> roles) {
    }

    public record AdminCourierResponse(UUID id, String fullName, String email, String document, String vehicleType, CourierStatus status) {
    }

    public record AdminOrderResponse(UUID id, String customerName, String storeName, String courierName, OrderStatus status, PaymentMethod paymentMethod, BigDecimal subtotal, BigDecimal deliveryFee, BigDecimal discount, BigDecimal total, Instant createdAt) {
    }

    public record AdminFinancialEntryResponse(UUID id, UUID orderId, String storeName, String courierName, String type, BigDecimal amount, Instant createdAt) {
    }

    public record AdminFinancialSummaryResponse(BigDecimal revenue, BigDecimal courierPayout, BigDecimal platformBalance, long entries) {
    }

    public record AdminAuditResponse(UUID id, String actorUsername, String action, String resource, String ipAddress, Instant createdAt) {
    }
}
