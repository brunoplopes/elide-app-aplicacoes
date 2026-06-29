package br.com.elide.application;

import br.com.elide.application.dto.CourierDtos.CourierApprovalRequest;
import br.com.elide.application.dto.CourierDtos.CourierAvailabilityRequest;
import br.com.elide.application.dto.CourierDtos.CourierDashboardResponse;
import br.com.elide.application.dto.CourierDtos.CourierDeclineRequest;
import br.com.elide.application.dto.CourierDtos.CourierDeliveryResponse;
import br.com.elide.application.dto.CourierDtos.CourierDeliveryStatusRequest;
import br.com.elide.application.dto.CourierDtos.CourierDocumentRequest;
import br.com.elide.application.dto.CourierDtos.CourierDocumentResponse;
import br.com.elide.application.dto.CourierDtos.CourierEarningsResponse;
import br.com.elide.application.dto.CourierDtos.CourierFinancialEntryResponse;
import br.com.elide.application.dto.CourierDtos.CourierLocationRequest;
import br.com.elide.application.dto.CourierDtos.CourierLocationResponse;
import br.com.elide.application.dto.CourierDtos.CourierMapResponse;
import br.com.elide.application.dto.CourierDtos.CourierProfileResponse;
import br.com.elide.application.dto.CourierDtos.CourierSignupRequest;
import br.com.elide.domain.model.Enums.CourierStatus;
import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.infrastructure.persistence.CourierDeliveryDecisionEntity;
import br.com.elide.infrastructure.persistence.CourierDocumentEntity;
import br.com.elide.infrastructure.persistence.CourierEntity;
import br.com.elide.infrastructure.persistence.CourierLocationEntity;
import br.com.elide.infrastructure.persistence.FinancialEntryEntity;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.CourierDeliveryDecisionRepository;
import br.com.elide.infrastructure.persistence.repository.CourierDocumentRepository;
import br.com.elide.infrastructure.persistence.repository.CourierLocationRepository;
import br.com.elide.infrastructure.persistence.repository.CourierRepository;
import br.com.elide.infrastructure.persistence.repository.FinancialEntryRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.RoleRepository;
import br.com.elide.infrastructure.persistence.repository.RouteRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CourierService {
    private static final BigDecimal MIN_DELIVERY_EARNING = new BigDecimal("6.00");
    private static final List<OrderStatus> AVAILABLE_RIDE_STATUSES = List.of(OrderStatus.ACCEPTED, OrderStatus.PREPARING, OrderStatus.READY_FOR_PICKUP, OrderStatus.CREATED);
    private static final List<OrderStatus> ACTIVE_DELIVERY_STATUSES = List.of(OrderStatus.ACCEPTED, OrderStatus.PREPARING, OrderStatus.READY_FOR_PICKUP, OrderStatus.OUT_FOR_DELIVERY);

    private final UserRepository users;
    private final RoleRepository roles;
    private final CourierRepository couriers;
    private final CourierDocumentRepository documents;
    private final CourierLocationRepository locations;
    private final CourierDeliveryDecisionRepository decisions;
    private final OrderRepository orders;
    private final FinancialEntryRepository financialEntries;
    private final RouteRepository routes;

    public CourierService(
        UserRepository users,
        RoleRepository roles,
        CourierRepository couriers,
        CourierDocumentRepository documents,
        CourierLocationRepository locations,
        CourierDeliveryDecisionRepository decisions,
        OrderRepository orders,
        FinancialEntryRepository financialEntries,
        RouteRepository routes
    ) {
        this.users = users;
        this.roles = roles;
        this.couriers = couriers;
        this.documents = documents;
        this.locations = locations;
        this.decisions = decisions;
        this.orders = orders;
        this.financialEntries = financialEntries;
        this.routes = routes;
    }

    @Transactional
    public CourierProfileResponse signup(CourierSignupRequest request) {
        var user = currentUser();
        couriers.findByUserUsernameAndDeletedAtIsNull(user.getUsername()).ifPresent(courier -> {
            throw new IllegalArgumentException("User already has a courier profile");
        });
        var courier = new CourierEntity();
        courier.setUser(user);
        courier.setDocument(request.document());
        courier.setVehicleType(request.vehicleType());
        courier.setStatus(CourierStatus.PENDING_DOCUMENTS);
        user.getRoles().add(roles.findByName(RoleName.COURIER).orElseThrow());
        users.save(user);
        return profile(couriers.save(courier));
    }

    public CourierProfileResponse profile() {
        return profile(currentCourier());
    }

    @Transactional
    public CourierDocumentResponse sendDocument(CourierDocumentRequest request) {
        var courier = currentCourier();
        var document = new CourierDocumentEntity();
        document.setCourier(courier);
        document.setType(request.type());
        document.setFileUrl(request.fileUrl());
        document.setStatus("PENDING_REVIEW");
        if (courier.getStatus() == CourierStatus.PENDING_DOCUMENTS || courier.getStatus() == CourierStatus.REJECTED) {
            courier.setStatus(CourierStatus.PENDING_APPROVAL);
            couriers.save(courier);
        }
        return document(documents.save(document));
    }

    public List<CourierDocumentResponse> documents() {
        var courier = currentCourier();
        return documents.findByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId()).stream().map(this::document).toList();
    }

    @Transactional
    public CourierProfileResponse approveCourier(UUID courierId, CourierApprovalRequest request) {
        var courier = couriers.findById(courierId).orElseThrow();
        if (!List.of(CourierStatus.AVAILABLE, CourierStatus.UNAVAILABLE, CourierStatus.REJECTED, CourierStatus.SUSPENDED).contains(request.status())) {
            throw new IllegalArgumentException("Approval status must be AVAILABLE, UNAVAILABLE, REJECTED or SUSPENDED");
        }
        courier.setStatus(request.status());
        documents.findByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId()).forEach(document -> {
            document.setStatus(request.status() == CourierStatus.REJECTED ? "REJECTED" : "APPROVED");
            document.setRejectionReason(request.status() == CourierStatus.REJECTED ? request.reason() : null);
            documents.save(document);
        });
        return profile(couriers.save(courier));
    }

    @Transactional
    public CourierProfileResponse availability(CourierAvailabilityRequest request) {
        var courier = currentCourier();
        if (courier.getStatus() == CourierStatus.SUSPENDED || courier.getStatus() == CourierStatus.REJECTED) {
            throw new IllegalArgumentException("Courier cannot change availability in current status");
        }
        courier.setStatus(request.available() ? CourierStatus.AVAILABLE : CourierStatus.UNAVAILABLE);
        return profile(couriers.save(courier));
    }

    @Transactional
    public CourierLocationResponse updateLocation(CourierLocationRequest request) {
        var courier = currentCourier();
        var location = new CourierLocationEntity();
        location.setCourier(courier);
        activeDelivery(courier).ifPresent(location::setOrder);
        location.setLatitude(request.latitude());
        location.setLongitude(request.longitude());
        location.setHeading(request.heading());
        location.setSpeed(request.speed());
        return location(locations.save(location));
    }

    public CourierMapResponse map() {
        var courier = currentCourier();
        var location = locations.findFirstByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId()).map(this::location).orElse(null);
        var active = activeDelivery(courier).map(this::delivery).orElse(null);
        var polyline = active == null ? null : routes.findByOrderIdAndDeletedAtIsNull(active.id()).map(route -> route.getEncodedPolyline()).orElse(null);
        return new CourierMapResponse(location, active, polyline);
    }

    public List<CourierDeliveryResponse> availableRides() {
        var courier = currentCourier();
        var declined = decisions.findByCourierIdAndAcceptedFalseAndDeletedAtIsNull(courier.getId()).stream()
            .map(decision -> decision.getOrder().getId())
            .collect(Collectors.toSet());
        return orders.findTop50ByCourierIsNullAndStatusInAndDeletedAtIsNullOrderByCreatedAtAsc(AVAILABLE_RIDE_STATUSES).stream()
            .filter(order -> !declined.contains(order.getId()))
            .map(this::delivery)
            .toList();
    }

    @Transactional
    public CourierDeliveryResponse acceptRide(UUID orderId) {
        var courier = currentCourier();
        if (courier.getStatus() != CourierStatus.AVAILABLE) {
            throw new IllegalArgumentException("Courier must be available to accept rides");
        }
        var order = orders.findById(orderId).orElseThrow();
        if (order.getCourier() != null && !order.getCourier().getId().equals(courier.getId())) {
            throw new IllegalArgumentException("Order already assigned to another courier");
        }
        if (!AVAILABLE_RIDE_STATUSES.contains(order.getStatus()) && !ACTIVE_DELIVERY_STATUSES.contains(order.getStatus())) {
            throw new IllegalArgumentException("Order is not available for delivery");
        }
        order.setCourier(courier);
        order.setStatus(OrderStatus.OUT_FOR_DELIVERY);
        saveDecision(courier, order, true, null);
        return delivery(orders.save(order));
    }

    @Transactional
    public void declineRide(UUID orderId, CourierDeclineRequest request) {
        var courier = currentCourier();
        var order = orders.findById(orderId).orElseThrow();
        if (order.getCourier() != null && order.getCourier().getId().equals(courier.getId())) {
            throw new IllegalArgumentException("Assigned delivery cannot be declined");
        }
        saveDecision(courier, order, false, request.reason());
    }

    @Transactional
    public CourierDeliveryResponse updateDeliveryStatus(UUID orderId, CourierDeliveryStatusRequest request) {
        var courier = currentCourier();
        var order = ownedDelivery(courier, orderId);
        if (!List.of(OrderStatus.OUT_FOR_DELIVERY, OrderStatus.DELIVERED, OrderStatus.CANCELLED).contains(request.status())) {
            throw new IllegalArgumentException("Courier can only set OUT_FOR_DELIVERY, DELIVERED or CANCELLED");
        }
        order.setStatus(request.status());
        var saved = orders.save(order);
        if (request.status() == OrderStatus.DELIVERED) {
            createDeliveryEarning(courier, saved);
            courier.setStatus(CourierStatus.AVAILABLE);
            couriers.save(courier);
        }
        return delivery(saved);
    }

    public List<CourierDeliveryResponse> deliveryHistory() {
        var courier = currentCourier();
        return orders.findTop50ByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId()).stream().map(this::delivery).toList();
    }

    public CourierEarningsResponse earnings() {
        var courier = currentCourier();
        return new CourierEarningsResponse(dailyEarnings(courier), monthlyEarnings(courier), statement(courier));
    }

    public CourierDashboardResponse dashboard() {
        var courier = currentCourier();
        var todayStart = Instant.now().truncatedTo(ChronoUnit.DAYS);
        var todayEnd = todayStart.plus(1, ChronoUnit.DAYS);
        return new CourierDashboardResponse(
            profile(courier),
            dailyEarnings(courier),
            monthlyEarnings(courier),
            orders.countByCourierIdAndStatusAndCreatedAtBetweenAndDeletedAtIsNull(courier.getId(), OrderStatus.DELIVERED, todayStart, todayEnd),
            orders.countByCourierIdAndStatusAndDeletedAtIsNull(courier.getId(), OrderStatus.DELIVERED),
            availableRides().size(),
            activeDelivery(courier).map(this::delivery).orElse(null)
        );
    }

    private void saveDecision(CourierEntity courier, OrderEntity order, boolean accepted, String reason) {
        var decision = decisions.findByCourierIdAndOrderIdAndDeletedAtIsNull(courier.getId(), order.getId()).orElseGet(CourierDeliveryDecisionEntity::new);
        decision.setCourier(courier);
        decision.setOrder(order);
        decision.setAccepted(accepted);
        decision.setReason(reason);
        decisions.save(decision);
    }

    private void createDeliveryEarning(CourierEntity courier, OrderEntity order) {
        var exists = financialEntries.findTop50ByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId()).stream()
            .anyMatch(entry -> entry.getOrder() != null && entry.getOrder().getId().equals(order.getId()) && "DELIVERY".equals(entry.getType()));
        if (exists) {
            return;
        }
        var entry = new FinancialEntryEntity();
        entry.setCourier(courier);
        entry.setOrder(order);
        entry.setType("DELIVERY");
        entry.setAmount(order.getDeliveryFee() == null ? MIN_DELIVERY_EARNING : order.getDeliveryFee().max(MIN_DELIVERY_EARNING));
        financialEntries.save(entry);
    }

    private List<CourierFinancialEntryResponse> statement(CourierEntity courier) {
        return financialEntries.findTop50ByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId()).stream().map(this::financialEntry).toList();
    }

    private BigDecimal dailyEarnings(CourierEntity courier) {
        var start = Instant.now().truncatedTo(ChronoUnit.DAYS);
        return financialEntries.sumByCourierBetween(courier.getId(), start, start.plus(1, ChronoUnit.DAYS));
    }

    private BigDecimal monthlyEarnings(CourierEntity courier) {
        var now = Instant.now().atZone(ZoneOffset.UTC);
        var start = now.withDayOfMonth(1).truncatedTo(ChronoUnit.DAYS).toInstant();
        return financialEntries.sumByCourierBetween(courier.getId(), start, now.toInstant());
    }

    private java.util.Optional<OrderEntity> activeDelivery(CourierEntity courier) {
        return orders.findFirstByCourierIdAndStatusInAndDeletedAtIsNullOrderByCreatedAtDesc(courier.getId(), ACTIVE_DELIVERY_STATUSES);
    }

    private OrderEntity ownedDelivery(CourierEntity courier, UUID orderId) {
        var order = orders.findById(orderId).orElseThrow();
        if (order.getCourier() == null || !order.getCourier().getId().equals(courier.getId())) {
            throw new IllegalArgumentException("Delivery does not belong to current courier");
        }
        return order;
    }

    private CourierEntity currentCourier() {
        var username = currentUsername();
        var user = users.findByUsername(username).orElseThrow();
        return couriers.findByUserUsernameAndDeletedAtIsNull(username)
            .or(() -> isAdmin(user)
                ? couriers.findAll().stream().filter(courier -> courier.getDeletedAt() == null).findFirst()
                : java.util.Optional.empty())
            .orElseThrow(() -> new IllegalArgumentException("Current user does not have a courier profile"));
    }

    private UserEntity currentUser() {
        return users.findByUsername(currentUsername()).orElseThrow();
    }

    private String currentUsername() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalArgumentException("Authenticated user required");
        }
        return authentication.getName();
    }

    private boolean isAdmin(UserEntity user) {
        return user.getRoles().stream().anyMatch(role -> Set.of(RoleName.ADMIN, RoleName.MASTER_ADMIN).contains(role.getName()));
    }

    private CourierProfileResponse profile(CourierEntity courier) {
        return new CourierProfileResponse(
            courier.getId(),
            courier.getUser().getFullName(),
            courier.getUser().getEmail(),
            courier.getDocument(),
            courier.getVehicleType(),
            courier.getStatus(),
            courier.getStatus() == CourierStatus.AVAILABLE
        );
    }

    private CourierDocumentResponse document(CourierDocumentEntity document) {
        return new CourierDocumentResponse(document.getId(), document.getType(), document.getFileUrl(), document.getStatus(), document.getRejectionReason(), document.getCreatedAt());
    }

    private CourierLocationResponse location(CourierLocationEntity location) {
        return new CourierLocationResponse(location.getId(), location.getLatitude(), location.getLongitude(), location.getHeading(), location.getSpeed(), location.getCreatedAt());
    }

    private CourierDeliveryResponse delivery(OrderEntity order) {
        var route = routes.findByOrderIdAndDeletedAtIsNull(order.getId());
        return new CourierDeliveryResponse(
            order.getId(),
            order.getStore().getName(),
            order.getCustomer().getFullName(),
            order.getStatus(),
            order.getDeliveryFee(),
            order.getTotal(),
            route.map(value -> Math.max(1, value.getEstimatedSeconds() / 60)).orElse(18),
            route.map(value -> value.getDistanceMeters()).orElse(2200),
            order.getCreatedAt()
        );
    }

    private CourierFinancialEntryResponse financialEntry(FinancialEntryEntity entry) {
        return new CourierFinancialEntryResponse(entry.getId(), entry.getOrder() == null ? null : entry.getOrder().getId(), entry.getType(), entry.getAmount().setScale(2, RoundingMode.HALF_UP), entry.getCreatedAt());
    }
}
