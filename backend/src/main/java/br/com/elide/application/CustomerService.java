package br.com.elide.application;

import br.com.elide.application.dto.CustomerDtos.CustomerAddressRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerAddressResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerCardRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerCashPreference;
import br.com.elide.application.dto.CustomerDtos.CustomerCouponResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerFavoriteResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerNotificationResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerPaymentMethodResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerPixResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerProfileRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerProfileResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerReviewRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerReviewResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerSummaryResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerTrackingResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerTrackingStep;
import br.com.elide.application.dto.CustomerDtos.CustomerWalletEntryResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerWalletResponse;
import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.PaymentMethod;
import br.com.elide.domain.model.Enums.PaymentStatus;
import br.com.elide.infrastructure.persistence.AddressEntity;
import br.com.elide.infrastructure.persistence.CustomerEntity;
import br.com.elide.infrastructure.persistence.CustomerFavoriteEntity;
import br.com.elide.infrastructure.persistence.CustomerPaymentMethodEntity;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.PaymentEntity;
import br.com.elide.infrastructure.persistence.ReviewEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.OperationalEntities.NotificationEntity;
import br.com.elide.infrastructure.persistence.repository.AddressRepository;
import br.com.elide.infrastructure.persistence.repository.CityRepository;
import br.com.elide.infrastructure.persistence.repository.CouponRepository;
import br.com.elide.infrastructure.persistence.repository.CustomerFavoriteRepository;
import br.com.elide.infrastructure.persistence.repository.CustomerPaymentMethodRepository;
import br.com.elide.infrastructure.persistence.repository.CustomerRepository;
import br.com.elide.infrastructure.persistence.repository.CustomerWalletEntryRepository;
import br.com.elide.infrastructure.persistence.repository.NotificationRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.PaymentRepository;
import br.com.elide.infrastructure.persistence.repository.ReviewRepository;
import br.com.elide.infrastructure.persistence.repository.RouteRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
public class CustomerService {
    private final UserRepository users;
    private final CustomerRepository customers;
    private final AddressRepository addresses;
    private final CityRepository cities;
    private final StoreRepository stores;
    private final CustomerFavoriteRepository favorites;
    private final CouponRepository coupons;
    private final CustomerWalletEntryRepository walletEntries;
    private final NotificationRepository notifications;
    private final CustomerPaymentMethodRepository paymentMethods;
    private final OrderRepository orders;
    private final PaymentRepository payments;
    private final RouteRepository routes;
    private final ReviewRepository reviews;

    public CustomerService(
        UserRepository users,
        CustomerRepository customers,
        AddressRepository addresses,
        CityRepository cities,
        StoreRepository stores,
        CustomerFavoriteRepository favorites,
        CouponRepository coupons,
        CustomerWalletEntryRepository walletEntries,
        NotificationRepository notifications,
        CustomerPaymentMethodRepository paymentMethods,
        OrderRepository orders,
        PaymentRepository payments,
        RouteRepository routes,
        ReviewRepository reviews
    ) {
        this.users = users;
        this.customers = customers;
        this.addresses = addresses;
        this.cities = cities;
        this.stores = stores;
        this.favorites = favorites;
        this.coupons = coupons;
        this.walletEntries = walletEntries;
        this.notifications = notifications;
        this.paymentMethods = paymentMethods;
        this.orders = orders;
        this.payments = payments;
        this.routes = routes;
        this.reviews = reviews;
    }

    public CustomerProfileResponse profile() {
        var user = currentUser();
        var customer = customer(user);
        return new CustomerProfileResponse(user.getFullName(), user.getEmail(), customer.getPhone(), customer.getCpf(), customer.getWalletBalance());
    }

    @Transactional
    public CustomerProfileResponse updateProfile(CustomerProfileRequest request) {
        var user = currentUser();
        var customer = customer(user);
        user.setFullName(request.fullName());
        user.setEmail(request.email());
        customer.setPhone(request.phone());
        customer.setCpf(request.cpf());
        users.save(user);
        customers.save(customer);
        return profile();
    }

    public CustomerSummaryResponse summary() {
        var username = currentUsername();
        var customer = customer(currentUser());
        return new CustomerSummaryResponse(
            orders.countByCustomerUsernameAndDeletedAtIsNull(username),
            coupons.findByActiveTrueAndDeletedAtIsNullOrderByCodeAsc().size(),
            customer.getWalletBalance(),
            favorites.countByUserUsernameAndDeletedAtIsNull(username)
        );
    }

    public List<CustomerAddressResponse> addresses() {
        return addresses.findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(currentUsername()).stream().map(this::address).toList();
    }

    @Transactional
    public CustomerAddressResponse createAddress(CustomerAddressRequest request) {
        var address = new AddressEntity();
        address.setUser(currentUser());
        applyAddress(address, request);
        return address(addresses.save(address));
    }

    @Transactional
    public CustomerAddressResponse updateAddress(UUID id, CustomerAddressRequest request) {
        var address = ownedAddress(id);
        applyAddress(address, request);
        return address(addresses.save(address));
    }

    @Transactional
    public void deleteAddress(UUID id) {
        var address = ownedAddress(id);
        address.setDeletedAt(Instant.now());
        addresses.save(address);
    }

    public List<CustomerFavoriteResponse> favorites() {
        return favorites.findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(currentUsername()).stream().map(this::favorite).toList();
    }

    @Transactional
    public CustomerFavoriteResponse addFavorite(UUID storeId) {
        var username = currentUsername();
        var existing = favorites.findByUserUsernameAndStoreIdAndDeletedAtIsNull(username, storeId);
        if (existing.isPresent()) {
            return favorite(existing.get());
        }
        var favorite = new CustomerFavoriteEntity();
        favorite.setUser(currentUser());
        favorite.setStore(stores.findById(storeId).orElseThrow());
        return favorite(favorites.save(favorite));
    }

    @Transactional
    public void removeFavorite(UUID storeId) {
        favorites.findByUserUsernameAndStoreIdAndDeletedAtIsNull(currentUsername(), storeId).ifPresent(favorites::delete);
    }

    public List<CustomerCouponResponse> coupons() {
        return coupons.findByActiveTrueAndDeletedAtIsNullOrderByCodeAsc().stream()
            .map(coupon -> new CustomerCouponResponse(coupon.getId(), coupon.getCode(), coupon.getDiscountValue(), coupon.isActive(), coupon.getCode() + " disponivel para o checkout."))
            .toList();
    }

    public CustomerWalletResponse wallet() {
        var user = currentUser();
        var customer = customer(user);
        var entries = walletEntries.findTop50ByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(user.getUsername()).stream()
            .map(entry -> new CustomerWalletEntryResponse(entry.getId(), entry.getIcon(), entry.getTitle(), entry.getAmount(), entry.getCreatedAt()))
            .toList();
        return new CustomerWalletResponse(customer.getWalletBalance(), entries);
    }

    public List<CustomerReviewResponse> reviews() {
        return reviews.findAll().stream()
            .filter(review -> review.getDeletedAt() == null && review.getUser().getUsername().equals(currentUsername()))
            .map(this::review)
            .toList();
    }

    @Transactional
    public CustomerReviewResponse createReview(CustomerReviewRequest request) {
        var order = ownedOrder(request.orderId());
        var review = new ReviewEntity();
        review.setOrder(order);
        review.setUser(currentUser());
        review.setStore(order.getStore());
        review.setCourier(order.getCourier());
        review.setRating(request.rating());
        review.setComment(request.comment());
        return review(reviews.save(review));
    }

    public List<CustomerNotificationResponse> notifications() {
        return notifications.findTop50ByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(currentUsername()).stream().map(this::notification).toList();
    }

    @Transactional
    public CustomerNotificationResponse markNotificationRead(UUID id) {
        var notification = notifications.findById(id).orElseThrow();
        if (!notification.getUser().getUsername().equals(currentUsername())) {
            throw new IllegalArgumentException("Notification does not belong to current user");
        }
        notification.setRead(true);
        return notification(notifications.save(notification));
    }

    public List<CustomerPaymentMethodResponse> paymentMethods() {
        return paymentMethods.findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(currentUsername()).stream().map(this::paymentMethod).toList();
    }

    @Transactional
    public CustomerPaymentMethodResponse saveCard(CustomerCardRequest request) {
        var method = new CustomerPaymentMethodEntity();
        method.setUser(currentUser());
        method.setType(PaymentMethod.CREDIT_CARD);
        method.setLabel("Cartao " + request.cardNumber().substring(Math.max(0, request.cardNumber().length() - 4)));
        method.setLast4(request.cardNumber().substring(Math.max(0, request.cardNumber().length() - 4)));
        method.setDefaultMethod(request.defaultMethod());
        clearDefaultIfNeeded(method);
        return paymentMethod(paymentMethods.save(method));
    }

    @Transactional
    public CustomerCashPreference saveCashPreference(CustomerCashPreference request) {
        var method = new CustomerPaymentMethodEntity();
        method.setUser(currentUser());
        method.setType(PaymentMethod.CASH);
        method.setLabel(request.noChange() ? "Dinheiro sem troco" : "Troco para R$ " + request.cashAmount());
        method.setDefaultMethod(false);
        paymentMethods.save(method);
        return request;
    }

    @Transactional
    public CustomerPixResponse generatePix(UUID orderId) {
        var order = ownedOrder(orderId);
        var payment = payments.findByOrderIdAndDeletedAtIsNull(orderId).orElseGet(PaymentEntity::new);
        payment.setOrder(order);
        payment.setAmount(order.getTotal());
        payment.setStatus(PaymentStatus.PENDING);
        payment.setProvider("PIX");
        payments.save(payment);
        return new CustomerPixResponse(order.getId(), order.getTotal(), "000201ELIDE" + order.getId().toString().replace("-", "") + "BR.GOV.BCB.PIX", Instant.now().plusSeconds(600));
    }

    public CustomerTrackingResponse tracking(UUID orderId) {
        var order = orderId == null
            ? orders.findFirstByCustomerUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(currentUsername()).orElseThrow()
            : ownedOrder(orderId);
        var route = routes.findByOrderIdAndDeletedAtIsNull(order.getId());
        var distance = route.map(value -> value.getDistanceMeters()).orElse(1800);
        var eta = route.map(value -> Math.max(1, value.getEstimatedSeconds() / 60)).orElse(12);
        return new CustomerTrackingResponse(order.getId(), order.getStatus(), eta, distance, trackingSteps(order.getStatus()));
    }

    private void applyAddress(AddressEntity address, CustomerAddressRequest request) {
        address.setLabel(request.label());
        address.setStreet(request.street());
        address.setNumber(request.number());
        address.setDistrict(request.district());
        address.setZipCode(request.zipCode());
        address.setLatitude(request.latitude());
        address.setLongitude(request.longitude());
        address.setCity(request.cityId() == null ? null : cities.findById(request.cityId()).orElseThrow());
    }

    private AddressEntity ownedAddress(UUID id) {
        var address = addresses.findById(id).orElseThrow();
        if (!address.getUser().getUsername().equals(currentUsername())) {
            throw new IllegalArgumentException("Address does not belong to current user");
        }
        return address;
    }

    private OrderEntity ownedOrder(UUID id) {
        var order = orders.findById(id).orElseThrow();
        if (!order.getCustomer().getUsername().equals(currentUsername())) {
            throw new IllegalArgumentException("Order does not belong to current user");
        }
        return order;
    }

    private void clearDefaultIfNeeded(CustomerPaymentMethodEntity method) {
        if (!method.isDefaultMethod()) {
            return;
        }
        paymentMethods.findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(method.getUser().getUsername()).forEach(existing -> {
            existing.setDefaultMethod(false);
            paymentMethods.save(existing);
        });
    }

    private CustomerEntity customer(UserEntity user) {
        return customers.findByUserUsername(user.getUsername()).orElseGet(() -> {
            var customer = new CustomerEntity();
            customer.setUser(user);
            return customers.save(customer);
        });
    }

    private UserEntity currentUser() {
        return users.findByUsername(currentUsername()).orElseThrow();
    }

    private String currentUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    private CustomerAddressResponse address(AddressEntity address) {
        return new CustomerAddressResponse(address.getId(), address.getLabel(), address.getStreet(), address.getNumber(), address.getDistrict(), address.getZipCode(), address.getCity() == null ? null : address.getCity().getId(), address.getLatitude(), address.getLongitude());
    }

    private CustomerFavoriteResponse favorite(CustomerFavoriteEntity favorite) {
        var store = favorite.getStore();
        return new CustomerFavoriteResponse(favorite.getId(), store.getId(), store.getName(), store.getSegment(), store.getDeliveryFee(), "30-45 min", store.isOpen());
    }

    private CustomerNotificationResponse notification(NotificationEntity notification) {
        return new CustomerNotificationResponse(notification.getId(), notification.getTitle(), notification.getMessage(), notification.isRead(), notification.getCreatedAt());
    }

    private CustomerPaymentMethodResponse paymentMethod(CustomerPaymentMethodEntity method) {
        return new CustomerPaymentMethodResponse(method.getId(), method.getType(), method.getLabel(), method.getLast4(), method.isDefaultMethod());
    }

    private CustomerReviewResponse review(ReviewEntity review) {
        return new CustomerReviewResponse(review.getId(), review.getOrder().getId(), review.getStore() == null ? review.getOrder().getStore().getName() : review.getStore().getName(), review.getRating(), review.getComment(), review.getCreatedAt());
    }

    private List<CustomerTrackingStep> trackingSteps(OrderStatus status) {
        return List.of(
            new CustomerTrackingStep("Pedido aceito", status.ordinal() >= OrderStatus.ACCEPTED.ordinal()),
            new CustomerTrackingStep("Em preparo", status.ordinal() >= OrderStatus.PREPARING.ordinal()),
            new CustomerTrackingStep("Saiu para entrega", status.ordinal() >= OrderStatus.OUT_FOR_DELIVERY.ordinal()),
            new CustomerTrackingStep("Chegando", status == OrderStatus.DELIVERED)
        );
    }
}
