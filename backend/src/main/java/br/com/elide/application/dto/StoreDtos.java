package br.com.elide.application.dto;

import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.StoreStatus;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public final class StoreDtos {
    private StoreDtos() {
    }

    public record StoreProfileRequest(
        @NotBlank @Size(max = 160) String name,
        @NotBlank @Size(max = 18) String document,
        @NotBlank @Size(max = 80) String segment,
        UUID cityId,
        @NotNull @DecimalMin("0.00") BigDecimal deliveryFee,
        @NotNull @DecimalMin("0.00") BigDecimal minimumOrder,
        boolean open
    ) {
    }

    public record StoreProfileResponse(
        UUID id,
        String name,
        String document,
        String segment,
        StoreStatus status,
        BigDecimal deliveryFee,
        BigDecimal minimumOrder,
        boolean open,
        UUID cityId
    ) {
    }

    public record StoreDocumentRequest(
        @NotBlank @Size(max = 80) String type,
        @NotBlank @Size(max = 500) String fileUrl
    ) {
    }

    public record StoreDocumentResponse(UUID id, String type, String fileUrl, String status, String rejectionReason, Instant createdAt) {
    }

    public record StoreApprovalRequest(@NotNull StoreStatus status, @Size(max = 500) String reason) {
    }

    public record StoreCategoryRequest(@NotBlank @Size(max = 100) String name, @NotBlank @Size(max = 80) String icon, boolean active) {
    }

    public record StoreCategoryResponse(UUID id, String name, String icon, boolean active) {
    }

    public record StoreProductRequest(
        @NotNull UUID categoryId,
        @NotBlank @Size(max = 160) String name,
        @NotBlank @Size(max = 600) String description,
        @NotNull @DecimalMin("0.00") BigDecimal price,
        @Min(0) int stockQuantity,
        boolean active
    ) {
    }

    public record StoreProductResponse(
        UUID id,
        UUID categoryId,
        String name,
        String description,
        BigDecimal price,
        int stockQuantity,
        boolean active
    ) {
    }

    public record StoreStockRequest(@Min(0) int stockQuantity, boolean active) {
    }

    public record StoreAddonRequest(
        @NotBlank @Size(max = 120) String name,
        @NotNull @DecimalMin("0.00") BigDecimal price,
        boolean required,
        @Min(1) int maxQuantity
    ) {
    }

    public record StoreAddonResponse(UUID id, UUID productId, String name, BigDecimal price, boolean required, int maxQuantity) {
    }

    public record StoreHourRequest(@Min(0) @Max(6) int dayOfWeek, @NotNull LocalTime opensAt, @NotNull LocalTime closesAt, boolean active) {
    }

    public record StoreHourResponse(UUID id, int dayOfWeek, LocalTime opensAt, LocalTime closesAt, boolean active) {
    }

    public record StorePromotionRequest(
        @NotBlank @Size(max = 120) String name,
        @NotNull Instant startsAt,
        @NotNull Instant endsAt,
        boolean active
    ) {
    }

    public record StorePromotionResponse(UUID id, String name, Instant startsAt, Instant endsAt, boolean active) {
    }

    public record StoreOrderStatusRequest(@NotNull OrderStatus status) {
    }

    public record StoreOrderResponse(
        UUID id,
        String customerName,
        OrderStatus status,
        String paymentMethod,
        BigDecimal subtotal,
        BigDecimal deliveryFee,
        BigDecimal discount,
        BigDecimal total,
        Instant createdAt
    ) {
    }

    public record StoreFinancialEntryResponse(UUID id, UUID orderId, String type, BigDecimal amount, Instant createdAt) {
    }

    public record StoreFinancialSummaryResponse(BigDecimal revenue, BigDecimal pendingSettlement, BigDecimal averageTicket, long deliveredOrders) {
    }

    public record StoreReviewResponse(UUID id, UUID orderId, String customerName, int rating, String comment, Instant createdAt) {
    }

    public record StoreDashboardResponse(
        long ordersToday,
        BigDecimal revenueToday,
        BigDecimal averageTicket,
        long activeProducts,
        long lowStockProducts,
        double averageRating,
        Map<OrderStatus, Long> ordersByStatus,
        List<StoreProductResponse> topProducts
    ) {
    }

    public record StoreReportResponse(BigDecimal revenue, long orders, BigDecimal averageTicket, Map<OrderStatus, Long> ordersByStatus) {
    }
}
