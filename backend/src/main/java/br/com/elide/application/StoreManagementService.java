package br.com.elide.application;

import br.com.elide.application.dto.StoreDtos.StoreAddonRequest;
import br.com.elide.application.dto.StoreDtos.StoreAddonResponse;
import br.com.elide.application.dto.StoreDtos.StoreApprovalRequest;
import br.com.elide.application.dto.StoreDtos.StoreCategoryRequest;
import br.com.elide.application.dto.StoreDtos.StoreCategoryResponse;
import br.com.elide.application.dto.StoreDtos.StoreDashboardResponse;
import br.com.elide.application.dto.StoreDtos.StoreDocumentRequest;
import br.com.elide.application.dto.StoreDtos.StoreDocumentResponse;
import br.com.elide.application.dto.StoreDtos.StoreFinancialEntryResponse;
import br.com.elide.application.dto.StoreDtos.StoreFinancialSummaryResponse;
import br.com.elide.application.dto.StoreDtos.StoreHourRequest;
import br.com.elide.application.dto.StoreDtos.StoreHourResponse;
import br.com.elide.application.dto.StoreDtos.StoreOrderResponse;
import br.com.elide.application.dto.StoreDtos.StoreOrderStatusRequest;
import br.com.elide.application.dto.StoreDtos.StoreProductRequest;
import br.com.elide.application.dto.StoreDtos.StoreProductResponse;
import br.com.elide.application.dto.StoreDtos.StoreProfileRequest;
import br.com.elide.application.dto.StoreDtos.StoreProfileResponse;
import br.com.elide.application.dto.StoreDtos.StorePromotionRequest;
import br.com.elide.application.dto.StoreDtos.StorePromotionResponse;
import br.com.elide.application.dto.StoreDtos.StoreReportResponse;
import br.com.elide.application.dto.StoreDtos.StoreReviewResponse;
import br.com.elide.application.dto.StoreDtos.StoreStockRequest;
import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.CategoryEntity;
import br.com.elide.infrastructure.persistence.FinancialEntryEntity;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.ProductAddonEntity;
import br.com.elide.infrastructure.persistence.ProductEntity;
import br.com.elide.infrastructure.persistence.PromotionEntity;
import br.com.elide.infrastructure.persistence.ReviewEntity;
import br.com.elide.infrastructure.persistence.StoreDocumentEntity;
import br.com.elide.infrastructure.persistence.StoreEntity;
import br.com.elide.infrastructure.persistence.StoreHourEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.CategoryRepository;
import br.com.elide.infrastructure.persistence.repository.CityRepository;
import br.com.elide.infrastructure.persistence.repository.FinancialEntryRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.ProductAddonRepository;
import br.com.elide.infrastructure.persistence.repository.ProductRepository;
import br.com.elide.infrastructure.persistence.repository.PromotionRepository;
import br.com.elide.infrastructure.persistence.repository.ReviewRepository;
import br.com.elide.infrastructure.persistence.repository.RoleRepository;
import br.com.elide.infrastructure.persistence.repository.StoreDocumentRepository;
import br.com.elide.infrastructure.persistence.repository.StoreHourRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class StoreManagementService {
    private static final int LOW_STOCK_LIMIT = 5;

    private final UserRepository users;
    private final RoleRepository roles;
    private final CityRepository cities;
    private final StoreRepository stores;
    private final CategoryRepository categories;
    private final ProductRepository products;
    private final ProductAddonRepository addons;
    private final StoreDocumentRepository documents;
    private final StoreHourRepository hours;
    private final PromotionRepository promotions;
    private final OrderRepository orders;
    private final FinancialEntryRepository financialEntries;
    private final ReviewRepository reviews;

    public StoreManagementService(
        UserRepository users,
        RoleRepository roles,
        CityRepository cities,
        StoreRepository stores,
        CategoryRepository categories,
        ProductRepository products,
        ProductAddonRepository addons,
        StoreDocumentRepository documents,
        StoreHourRepository hours,
        PromotionRepository promotions,
        OrderRepository orders,
        FinancialEntryRepository financialEntries,
        ReviewRepository reviews
    ) {
        this.users = users;
        this.roles = roles;
        this.cities = cities;
        this.stores = stores;
        this.categories = categories;
        this.products = products;
        this.addons = addons;
        this.documents = documents;
        this.hours = hours;
        this.promotions = promotions;
        this.orders = orders;
        this.financialEntries = financialEntries;
        this.reviews = reviews;
    }

    @Transactional
    public StoreProfileResponse signup(StoreProfileRequest request) {
        var user = currentUser();
        stores.findFirstByOwnerUsernameAndDeletedAtIsNullOrderByCreatedAtAsc(user.getUsername())
            .ifPresent(store -> {
                throw new IllegalArgumentException("User already owns a store");
            });

        var store = new StoreEntity();
        store.setOwner(user);
        store.setStatus(StoreStatus.PENDING_DOCUMENTS);
        applyProfile(store, request);
        user.getRoles().add(roles.findByName(RoleName.STORE_OWNER).orElseThrow());
        users.save(user);
        return profile(stores.save(store));
    }

    public StoreProfileResponse profile() {
        return profile(currentStore());
    }

    @Transactional
    public StoreProfileResponse updateProfile(StoreProfileRequest request) {
        var store = currentStore();
        applyProfile(store, request);
        return profile(stores.save(store));
    }

    @Transactional
    public StoreDocumentResponse sendDocument(StoreDocumentRequest request) {
        var store = currentStore();
        var document = new StoreDocumentEntity();
        document.setStore(store);
        document.setType(request.type());
        document.setFileUrl(request.fileUrl());
        document.setStatus("PENDING_REVIEW");
        if (store.getStatus() == StoreStatus.PENDING_DOCUMENTS || store.getStatus() == StoreStatus.REJECTED) {
            store.setStatus(StoreStatus.PENDING_APPROVAL);
            stores.save(store);
        }
        return document(documents.save(document));
    }

    public List<StoreDocumentResponse> documents() {
        var store = currentStore();
        return documents.findByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId()).stream().map(this::document).toList();
    }

    @Transactional
    public StoreProfileResponse approveStore(UUID storeId, StoreApprovalRequest request) {
        var store = stores.findById(storeId).orElseThrow();
        if (request.status() != StoreStatus.APPROVED && request.status() != StoreStatus.REJECTED && request.status() != StoreStatus.SUSPENDED) {
            throw new IllegalArgumentException("Approval status must be APPROVED, REJECTED or SUSPENDED");
        }
        store.setStatus(request.status());
        if (request.status() == StoreStatus.REJECTED) {
            documents.findByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId()).forEach(document -> {
                document.setStatus("REJECTED");
                document.setRejectionReason(request.reason());
                documents.save(document);
            });
        }
        if (request.status() == StoreStatus.APPROVED) {
            documents.findByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId()).forEach(document -> {
                document.setStatus("APPROVED");
                document.setRejectionReason(null);
                documents.save(document);
            });
        }
        return profile(stores.save(store));
    }

    public List<StoreCategoryResponse> categories() {
        return categories.findByActiveTrueOrderByNameAsc().stream().map(this::category).toList();
    }

    @Transactional
    public StoreCategoryResponse createCategory(StoreCategoryRequest request) {
        var category = new CategoryEntity();
        category.setName(request.name());
        category.setIcon(request.icon());
        category.setActive(request.active());
        return category(categories.save(category));
    }

    public Page<StoreProductResponse> products(Pageable pageable) {
        var store = currentStore();
        return products.findByStoreIdAndDeletedAtIsNull(store.getId(), pageable).map(this::product);
    }

    @Transactional
    public StoreProductResponse createProduct(StoreProductRequest request) {
        var store = currentStore();
        var product = new ProductEntity();
        product.setStore(store);
        applyProduct(product, request);
        return product(products.save(product));
    }

    @Transactional
    public StoreProductResponse updateProduct(UUID productId, StoreProductRequest request) {
        var product = ownedProduct(productId);
        applyProduct(product, request);
        return product(products.save(product));
    }

    @Transactional
    public StoreProductResponse updateStock(UUID productId, StoreStockRequest request) {
        var product = ownedProduct(productId);
        product.setStockQuantity(request.stockQuantity());
        product.setActive(request.active());
        return product(products.save(product));
    }

    @Transactional
    public void deleteProduct(UUID productId) {
        var product = ownedProduct(productId);
        product.setDeletedAt(Instant.now());
        product.setActive(false);
        products.save(product);
    }

    public List<StoreAddonResponse> addons(UUID productId) {
        var product = ownedProduct(productId);
        return addons.findByProductIdAndDeletedAtIsNullOrderByNameAsc(product.getId()).stream().map(this::addon).toList();
    }

    @Transactional
    public StoreAddonResponse createAddon(UUID productId, StoreAddonRequest request) {
        var product = ownedProduct(productId);
        var addon = new ProductAddonEntity();
        addon.setProduct(product);
        applyAddon(addon, request);
        return addon(addons.save(addon));
    }

    @Transactional
    public StoreAddonResponse updateAddon(UUID productId, UUID addonId, StoreAddonRequest request) {
        ownedProduct(productId);
        var addon = addons.findById(addonId).orElseThrow();
        if (!addon.getProduct().getId().equals(productId)) {
            throw new IllegalArgumentException("Addon does not belong to product");
        }
        applyAddon(addon, request);
        return addon(addons.save(addon));
    }

    @Transactional
    public void deleteAddon(UUID productId, UUID addonId) {
        ownedProduct(productId);
        var addon = addons.findById(addonId).orElseThrow();
        if (!addon.getProduct().getId().equals(productId)) {
            throw new IllegalArgumentException("Addon does not belong to product");
        }
        addon.setDeletedAt(Instant.now());
        addons.save(addon);
    }

    public List<StoreHourResponse> hours() {
        var store = currentStore();
        return hours.findByStoreIdAndDeletedAtIsNullOrderByDayOfWeekAsc(store.getId()).stream().map(this::hour).toList();
    }

    @Transactional
    public StoreHourResponse upsertHour(StoreHourRequest request) {
        if (!request.closesAt().isAfter(request.opensAt())) {
            throw new IllegalArgumentException("Closing time must be after opening time");
        }
        var store = currentStore();
        var hour = hours.findByStoreIdAndDayOfWeekAndDeletedAtIsNull(store.getId(), request.dayOfWeek()).orElseGet(StoreHourEntity::new);
        hour.setStore(store);
        hour.setDayOfWeek(request.dayOfWeek());
        hour.setOpensAt(request.opensAt());
        hour.setClosesAt(request.closesAt());
        hour.setActive(request.active());
        return hour(hours.save(hour));
    }

    public List<StorePromotionResponse> promotions() {
        var store = currentStore();
        return promotions.findByStoreIdAndDeletedAtIsNullOrderByStartsAtDesc(store.getId()).stream().map(this::promotion).toList();
    }

    @Transactional
    public StorePromotionResponse createPromotion(StorePromotionRequest request) {
        var promotion = new PromotionEntity();
        promotion.setStore(currentStore());
        applyPromotion(promotion, request);
        return promotion(promotions.save(promotion));
    }

    @Transactional
    public StorePromotionResponse updatePromotion(UUID promotionId, StorePromotionRequest request) {
        var promotion = ownedPromotion(promotionId);
        applyPromotion(promotion, request);
        return promotion(promotions.save(promotion));
    }

    @Transactional
    public void deletePromotion(UUID promotionId) {
        var promotion = ownedPromotion(promotionId);
        promotion.setDeletedAt(Instant.now());
        promotion.setActive(false);
        promotions.save(promotion);
    }

    public List<StoreOrderResponse> orders(OrderStatus status) {
        var store = currentStore();
        var result = status == null
            ? orders.findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId())
            : orders.findByStoreIdAndStatusAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId(), status);
        return result.stream().map(this::order).toList();
    }

    @Transactional
    public StoreOrderResponse updateOrderStatus(UUID orderId, StoreOrderStatusRequest request) {
        var order = ownedOrder(orderId);
        validateStatusTransition(order.getStatus(), request.status());
        order.setStatus(request.status());
        var saved = orders.save(order);
        if (saved.getStatus() == OrderStatus.DELIVERED) {
            financialEntries.save(financialEntry(saved, "SALE", saved.getTotal()));
        }
        return order(saved);
    }

    public StoreFinancialSummaryResponse financialSummary() {
        var store = currentStore();
        var revenue = orders.sumStoreDeliveredRevenue(store.getId());
        var deliveredOrders = orders.countByStoreAndStatus(store.getId(), OrderStatus.DELIVERED);
        var averageTicket = deliveredOrders == 0 ? BigDecimal.ZERO : revenue.divide(BigDecimal.valueOf(deliveredOrders), 2, RoundingMode.HALF_UP);
        var pending = financialEntries.sumByStore(store.getId());
        return new StoreFinancialSummaryResponse(revenue, pending, averageTicket, deliveredOrders);
    }

    public List<StoreFinancialEntryResponse> financialEntries() {
        var store = currentStore();
        return financialEntries.findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId()).stream().map(this::financialEntry).toList();
    }

    public StoreDashboardResponse dashboard() {
        var store = currentStore();
        var start = Instant.now().truncatedTo(ChronoUnit.DAYS);
        var end = start.plus(1, ChronoUnit.DAYS);
        var ordersToday = orders.countByStoreIdAndCreatedAtBetweenAndDeletedAtIsNull(store.getId(), start, end);
        var revenueToday = orders.sumStoreRevenueBetween(store.getId(), start, end);
        var averageTicket = ordersToday == 0 ? BigDecimal.ZERO : revenueToday.divide(BigDecimal.valueOf(ordersToday), 2, RoundingMode.HALF_UP);
        var byStatus = statusMetrics(store.getId());
        var topProducts = products.findTop5ByStoreIdAndDeletedAtIsNullOrderByStockQuantityAsc(store.getId()).stream().map(this::product).toList();
        return new StoreDashboardResponse(
            ordersToday,
            revenueToday,
            averageTicket,
            products.countByStoreIdAndActiveTrueAndDeletedAtIsNull(store.getId()),
            products.countByStoreIdAndStockQuantityLessThanEqualAndDeletedAtIsNull(store.getId(), LOW_STOCK_LIMIT),
            reviews.averageRatingByStore(store.getId()),
            byStatus,
            topProducts
        );
    }

    public StoreReportResponse reports(Instant from, Instant to) {
        var store = currentStore();
        var start = from == null ? Instant.now().minus(30, ChronoUnit.DAYS) : from;
        var end = to == null ? Instant.now() : to;
        if (!end.isAfter(start)) {
            throw new IllegalArgumentException("Report end must be after start");
        }
        var orderCount = orders.countByStoreIdAndCreatedAtBetweenAndDeletedAtIsNull(store.getId(), start, end);
        var revenue = orders.sumStoreRevenueBetween(store.getId(), start, end);
        var averageTicket = orderCount == 0 ? BigDecimal.ZERO : revenue.divide(BigDecimal.valueOf(orderCount), 2, RoundingMode.HALF_UP);
        return new StoreReportResponse(revenue, orderCount, averageTicket, statusMetrics(store.getId()));
    }

    public List<StoreReviewResponse> reviews() {
        var store = currentStore();
        return reviews.findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(store.getId()).stream().map(this::review).toList();
    }

    private void applyProfile(StoreEntity store, StoreProfileRequest request) {
        store.setName(request.name());
        store.setDocument(request.document());
        store.setSegment(request.segment());
        store.setDeliveryFee(request.deliveryFee());
        store.setMinimumOrder(request.minimumOrder());
        store.setOpen(request.open());
        store.setCity(request.cityId() == null ? null : cities.findById(request.cityId()).orElseThrow());
    }

    private void applyProduct(ProductEntity product, StoreProductRequest request) {
        product.setCategory(categories.findById(request.categoryId()).orElseThrow());
        product.setName(request.name());
        product.setDescription(request.description());
        product.setPrice(request.price());
        product.setStockQuantity(request.stockQuantity());
        product.setActive(request.active());
    }

    private void applyAddon(ProductAddonEntity addon, StoreAddonRequest request) {
        addon.setName(request.name());
        addon.setPrice(request.price());
        addon.setRequired(request.required());
        addon.setMaxQuantity(request.maxQuantity());
    }

    private void applyPromotion(PromotionEntity promotion, StorePromotionRequest request) {
        if (!request.endsAt().isAfter(request.startsAt())) {
            throw new IllegalArgumentException("Promotion end must be after start");
        }
        promotion.setName(request.name());
        promotion.setStartsAt(request.startsAt());
        promotion.setEndsAt(request.endsAt());
        promotion.setActive(request.active());
    }

    private ProductEntity ownedProduct(UUID productId) {
        var store = currentStore();
        var product = products.findById(productId).orElseThrow();
        if (!product.getStore().getId().equals(store.getId())) {
            throw new IllegalArgumentException("Product does not belong to current store");
        }
        return product;
    }

    private PromotionEntity ownedPromotion(UUID promotionId) {
        var store = currentStore();
        var promotion = promotions.findById(promotionId).orElseThrow();
        if (!promotion.getStore().getId().equals(store.getId())) {
            throw new IllegalArgumentException("Promotion does not belong to current store");
        }
        return promotion;
    }

    private OrderEntity ownedOrder(UUID orderId) {
        var store = currentStore();
        var order = orders.findById(orderId).orElseThrow();
        if (!order.getStore().getId().equals(store.getId())) {
            throw new IllegalArgumentException("Order does not belong to current store");
        }
        return order;
    }

    private StoreEntity currentStore() {
        var username = authentication().getName();
        var user = users.findByUsername(username).orElseThrow();
        return stores.findFirstByOwnerUsernameAndDeletedAtIsNullOrderByCreatedAtAsc(username)
            .or(() -> isAdmin(user)
                ? stores.findAll().stream().filter(store -> store.getDeletedAt() == null).findFirst()
                : java.util.Optional.empty())
            .orElseThrow(() -> new IllegalArgumentException("Current user does not have a store"));
    }

    private UserEntity currentUser() {
        return users.findByUsername(authentication().getName()).orElseThrow();
    }

    private Authentication authentication() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalArgumentException("Authenticated user required");
        }
        return authentication;
    }

    private boolean isAdmin(UserEntity user) {
        return user.getRoles().stream().anyMatch(role -> role.getName() == RoleName.ADMIN || role.getName() == RoleName.MASTER_ADMIN);
    }

    private Map<OrderStatus, Long> statusMetrics(UUID storeId) {
        return Arrays.stream(OrderStatus.values()).collect(Collectors.toMap(status -> status, status -> orders.countByStoreAndStatus(storeId, status)));
    }

    private void validateStatusTransition(OrderStatus current, OrderStatus next) {
        if (current == OrderStatus.CANCELLED || current == OrderStatus.REFUNDED || current == OrderStatus.DELIVERED) {
            throw new IllegalArgumentException("Order is already closed");
        }
        if (next == OrderStatus.REFUNDED && current != OrderStatus.REFUND_REQUESTED) {
            throw new IllegalArgumentException("Refund requires REFUND_REQUESTED status first");
        }
    }

    private FinancialEntryEntity financialEntry(OrderEntity order, String type, BigDecimal amount) {
        var entry = new FinancialEntryEntity();
        entry.setStore(order.getStore());
        entry.setOrder(order);
        entry.setType(type);
        entry.setAmount(amount);
        return entry;
    }

    private StoreProfileResponse profile(StoreEntity store) {
        return new StoreProfileResponse(
            store.getId(),
            store.getName(),
            store.getDocument(),
            store.getSegment(),
            store.getStatus(),
            store.getDeliveryFee(),
            store.getMinimumOrder(),
            store.isOpen(),
            store.getCity() == null ? null : store.getCity().getId()
        );
    }

    private StoreDocumentResponse document(StoreDocumentEntity document) {
        return new StoreDocumentResponse(document.getId(), document.getType(), document.getFileUrl(), document.getStatus(), document.getRejectionReason(), document.getCreatedAt());
    }

    private StoreCategoryResponse category(CategoryEntity category) {
        return new StoreCategoryResponse(category.getId(), category.getName(), category.getIcon(), category.isActive());
    }

    private StoreProductResponse product(ProductEntity product) {
        return new StoreProductResponse(
            product.getId(),
            product.getCategory().getId(),
            product.getName(),
            product.getDescription(),
            product.getPrice(),
            product.getStockQuantity(),
            product.isActive()
        );
    }

    private StoreAddonResponse addon(ProductAddonEntity addon) {
        return new StoreAddonResponse(addon.getId(), addon.getProduct().getId(), addon.getName(), addon.getPrice(), addon.isRequired(), addon.getMaxQuantity());
    }

    private StoreHourResponse hour(StoreHourEntity hour) {
        return new StoreHourResponse(hour.getId(), hour.getDayOfWeek(), hour.getOpensAt(), hour.getClosesAt(), hour.isActive());
    }

    private StorePromotionResponse promotion(PromotionEntity promotion) {
        return new StorePromotionResponse(promotion.getId(), promotion.getName(), promotion.getStartsAt(), promotion.getEndsAt(), promotion.isActive());
    }

    private StoreOrderResponse order(OrderEntity order) {
        return new StoreOrderResponse(
            order.getId(),
            order.getCustomer().getFullName(),
            order.getStatus(),
            order.getPaymentMethod().name(),
            order.getSubtotal(),
            order.getDeliveryFee(),
            order.getDiscount(),
            order.getTotal(),
            order.getCreatedAt()
        );
    }

    private StoreFinancialEntryResponse financialEntry(FinancialEntryEntity entry) {
        return new StoreFinancialEntryResponse(entry.getId(), entry.getOrder() == null ? null : entry.getOrder().getId(), entry.getType(), entry.getAmount(), entry.getCreatedAt());
    }

    private StoreReviewResponse review(ReviewEntity review) {
        return new StoreReviewResponse(review.getId(), review.getOrder().getId(), review.getUser().getFullName(), review.getRating(), review.getComment(), review.getCreatedAt());
    }
}
