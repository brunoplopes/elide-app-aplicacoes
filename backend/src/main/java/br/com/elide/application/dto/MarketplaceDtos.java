package br.com.elide.application.dto;

import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.PaymentMethod;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public final class MarketplaceDtos {
    private MarketplaceDtos() {
    }

    public record CategoryResponse(UUID id, String name, String icon) {
    }

    public record StoreResponse(UUID id, String name, String segment, BigDecimal deliveryFee, BigDecimal minimumOrder, boolean open) {
    }

    public record ProductResponse(UUID id, String name, String description, BigDecimal price, int stockQuantity) {
    }

    public record CreateOrderRequest(
        @NotNull UUID storeId,
        UUID addressId,
        String couponCode,
        @NotNull PaymentMethod paymentMethod,
        @Valid @NotEmpty List<CreateOrderItemRequest> items
    ) {
    }

    public record CreateOrderItemRequest(@NotNull UUID productId, @Min(1) int quantity, String note) {
    }

    public record OrderResponse(UUID id, OrderStatus status, BigDecimal subtotal, BigDecimal deliveryFee, BigDecimal discount, BigDecimal total) {
    }

    public record DashboardResponse(
        BigDecimal revenue,
        long totalOrders,
        long totalUsers,
        long activeStores,
        long activeCouriers,
        List<StatusMetric> ordersByStatus
    ) {
    }

    public record StatusMetric(String label, long value) {
    }
}

