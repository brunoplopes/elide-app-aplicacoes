package br.com.elide.application.dto;

import br.com.elide.domain.model.Enums.CourierStatus;
import br.com.elide.domain.model.Enums.OrderStatus;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public final class CourierDtos {
    private CourierDtos() {
    }

    public record CourierSignupRequest(
        @NotBlank @Size(max = 14) String document,
        @NotBlank @Size(max = 40) String vehicleType
    ) {
    }

    public record CourierProfileResponse(
        UUID id,
        String fullName,
        String email,
        String document,
        String vehicleType,
        CourierStatus status,
        boolean available
    ) {
    }

    public record CourierDocumentRequest(
        @NotBlank @Size(max = 80) String type,
        @NotBlank @Size(max = 500) String fileUrl
    ) {
    }

    public record CourierDocumentResponse(UUID id, String type, String fileUrl, String status, String rejectionReason, Instant createdAt) {
    }

    public record CourierApprovalRequest(@NotNull CourierStatus status, @Size(max = 500) String reason) {
    }

    public record CourierAvailabilityRequest(boolean available) {
    }

    public record CourierLocationRequest(
        @NotNull @DecimalMin("-90.0") BigDecimal latitude,
        @NotNull @DecimalMin("-180.0") BigDecimal longitude,
        BigDecimal heading,
        BigDecimal speed
    ) {
    }

    public record CourierLocationResponse(UUID id, BigDecimal latitude, BigDecimal longitude, BigDecimal heading, BigDecimal speed, Instant createdAt) {
    }

    public record CourierDeliveryResponse(
        UUID id,
        String storeName,
        String customerName,
        OrderStatus status,
        BigDecimal deliveryFee,
        BigDecimal total,
        int etaMinutes,
        int distanceMeters,
        Instant createdAt
    ) {
    }

    public record CourierDeclineRequest(@Size(max = 300) String reason) {
    }

    public record CourierDeliveryStatusRequest(@NotNull OrderStatus status) {
    }

    public record CourierDashboardResponse(
        CourierProfileResponse profile,
        BigDecimal dailyEarnings,
        BigDecimal monthlyEarnings,
        long deliveriesToday,
        long completedDeliveries,
        long availableRides,
        CourierDeliveryResponse activeDelivery
    ) {
    }

    public record CourierFinancialEntryResponse(UUID id, UUID orderId, String type, BigDecimal amount, Instant createdAt) {
    }

    public record CourierEarningsResponse(BigDecimal daily, BigDecimal monthly, List<CourierFinancialEntryResponse> statement) {
    }

    public record CourierMapResponse(CourierLocationResponse location, CourierDeliveryResponse activeDelivery, String encodedPolyline) {
    }
}
