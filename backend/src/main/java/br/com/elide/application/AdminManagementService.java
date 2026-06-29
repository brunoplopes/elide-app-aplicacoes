package br.com.elide.application;

import br.com.elide.application.dto.AdminDtos.AdminApprovalRequest;
import br.com.elide.application.dto.AdminDtos.AdminAuditResponse;
import br.com.elide.application.dto.AdminDtos.AdminBannerRequest;
import br.com.elide.application.dto.AdminDtos.AdminBannerResponse;
import br.com.elide.application.dto.AdminDtos.AdminCategoryRequest;
import br.com.elide.application.dto.AdminDtos.AdminCategoryResponse;
import br.com.elide.application.dto.AdminDtos.AdminCityRequest;
import br.com.elide.application.dto.AdminDtos.AdminCityResponse;
import br.com.elide.application.dto.AdminDtos.AdminCouponRequest;
import br.com.elide.application.dto.AdminDtos.AdminCouponResponse;
import br.com.elide.application.dto.AdminDtos.AdminCourierResponse;
import br.com.elide.application.dto.AdminDtos.AdminFeeRequest;
import br.com.elide.application.dto.AdminDtos.AdminFeeResponse;
import br.com.elide.application.dto.AdminDtos.AdminFinancialEntryResponse;
import br.com.elide.application.dto.AdminDtos.AdminFinancialSummaryResponse;
import br.com.elide.application.dto.AdminDtos.AdminOrderResponse;
import br.com.elide.application.dto.AdminDtos.AdminSettingRequest;
import br.com.elide.application.dto.AdminDtos.AdminSettingResponse;
import br.com.elide.application.dto.AdminDtos.AdminStoreRequest;
import br.com.elide.application.dto.AdminDtos.AdminStoreResponse;
import br.com.elide.application.dto.AdminDtos.AdminUserRequest;
import br.com.elide.application.dto.AdminDtos.AdminUserResponse;
import br.com.elide.application.dto.AdminDtos.AdminUserUpdateRequest;
import br.com.elide.domain.model.Enums.CourierStatus;
import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.CategoryEntity;
import br.com.elide.infrastructure.persistence.CityEntity;
import br.com.elide.infrastructure.persistence.CourierEntity;
import br.com.elide.infrastructure.persistence.FinancialEntryEntity;
import br.com.elide.infrastructure.persistence.OperationalEntities.AuditLogEntity;
import br.com.elide.infrastructure.persistence.OperationalEntities.BannerEntity;
import br.com.elide.infrastructure.persistence.OperationalEntities.CouponEntity;
import br.com.elide.infrastructure.persistence.OperationalEntities.FeeEntity;
import br.com.elide.infrastructure.persistence.OperationalEntities.SystemSettingEntity;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.StoreEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.AuditLogRepository;
import br.com.elide.infrastructure.persistence.repository.BannerRepository;
import br.com.elide.infrastructure.persistence.repository.CategoryRepository;
import br.com.elide.infrastructure.persistence.repository.CityRepository;
import br.com.elide.infrastructure.persistence.repository.CouponRepository;
import br.com.elide.infrastructure.persistence.repository.CourierDocumentRepository;
import br.com.elide.infrastructure.persistence.repository.CourierRepository;
import br.com.elide.infrastructure.persistence.repository.FeeRepository;
import br.com.elide.infrastructure.persistence.repository.FinancialEntryRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.RoleRepository;
import br.com.elide.infrastructure.persistence.repository.StoreDocumentRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.SystemSettingRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class AdminManagementService {
    private final UserRepository users;
    private final RoleRepository roles;
    private final StoreRepository stores;
    private final StoreDocumentRepository storeDocuments;
    private final CourierRepository couriers;
    private final CourierDocumentRepository courierDocuments;
    private final CategoryRepository categories;
    private final CityRepository cities;
    private final CouponRepository coupons;
    private final BannerRepository banners;
    private final FeeRepository fees;
    private final SystemSettingRepository settings;
    private final OrderRepository orders;
    private final FinancialEntryRepository financialEntries;
    private final AuditLogRepository auditLogs;
    private final PasswordEncoder passwordEncoder;

    public AdminManagementService(
        UserRepository users,
        RoleRepository roles,
        StoreRepository stores,
        StoreDocumentRepository storeDocuments,
        CourierRepository couriers,
        CourierDocumentRepository courierDocuments,
        CategoryRepository categories,
        CityRepository cities,
        CouponRepository coupons,
        BannerRepository banners,
        FeeRepository fees,
        SystemSettingRepository settings,
        OrderRepository orders,
        FinancialEntryRepository financialEntries,
        AuditLogRepository auditLogs,
        PasswordEncoder passwordEncoder
    ) {
        this.users = users;
        this.roles = roles;
        this.stores = stores;
        this.storeDocuments = storeDocuments;
        this.couriers = couriers;
        this.courierDocuments = courierDocuments;
        this.categories = categories;
        this.cities = cities;
        this.coupons = coupons;
        this.banners = banners;
        this.fees = fees;
        this.settings = settings;
        this.orders = orders;
        this.financialEntries = financialEntries;
        this.auditLogs = auditLogs;
        this.passwordEncoder = passwordEncoder;
    }

    public List<AdminStoreResponse> stores() {
        return live(stores.findAll()).stream().map(this::store).toList();
    }

    @Transactional
    public AdminStoreResponse createStore(AdminStoreRequest request) {
        var store = new StoreEntity();
        applyStore(store, request);
        audit("CREATE", "STORE");
        return store(stores.save(store));
    }

    @Transactional
    public AdminStoreResponse updateStore(UUID id, AdminStoreRequest request) {
        var store = stores.findById(id).orElseThrow();
        applyStore(store, request);
        audit("UPDATE", "STORE:" + id);
        return store(stores.save(store));
    }

    @Transactional
    public void deleteStore(UUID id) {
        var store = stores.findById(id).orElseThrow();
        store.setDeletedAt(Instant.now());
        stores.save(store);
        audit("DELETE", "STORE:" + id);
    }

    @Transactional
    public AdminStoreResponse approveStore(UUID id, AdminApprovalRequest request) {
        var store = stores.findById(id).orElseThrow();
        var status = StoreStatus.valueOf(request.status());
        if (!Set.of(StoreStatus.APPROVED, StoreStatus.REJECTED, StoreStatus.SUSPENDED, StoreStatus.PENDING_APPROVAL).contains(status)) {
            throw new IllegalArgumentException("Invalid store approval status");
        }
        store.setStatus(status);
        storeDocuments.findByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(id).forEach(document -> {
            document.setStatus(status == StoreStatus.REJECTED ? "REJECTED" : "APPROVED");
            document.setRejectionReason(status == StoreStatus.REJECTED ? request.reason() : null);
            storeDocuments.save(document);
        });
        audit("APPROVE", "STORE:" + id);
        return store(stores.save(store));
    }

    public List<AdminCourierResponse> couriers() {
        return live(couriers.findAll()).stream().map(this::courier).toList();
    }

    @Transactional
    public AdminCourierResponse approveCourier(UUID id, AdminApprovalRequest request) {
        var courier = couriers.findById(id).orElseThrow();
        var status = CourierStatus.valueOf(request.status());
        if (!Set.of(CourierStatus.AVAILABLE, CourierStatus.UNAVAILABLE, CourierStatus.REJECTED, CourierStatus.SUSPENDED, CourierStatus.PENDING_APPROVAL).contains(status)) {
            throw new IllegalArgumentException("Invalid courier approval status");
        }
        courier.setStatus(status);
        courierDocuments.findByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(id).forEach(document -> {
            document.setStatus(status == CourierStatus.REJECTED ? "REJECTED" : "APPROVED");
            document.setRejectionReason(status == CourierStatus.REJECTED ? request.reason() : null);
            courierDocuments.save(document);
        });
        audit("APPROVE", "COURIER:" + id);
        return courier(couriers.save(courier));
    }

    public List<AdminCategoryResponse> categories() {
        return live(categories.findAll()).stream().map(this::category).toList();
    }

    @Transactional
    public AdminCategoryResponse createCategory(AdminCategoryRequest request) {
        var category = new CategoryEntity();
        applyCategory(category, request);
        audit("CREATE", "CATEGORY");
        return category(categories.save(category));
    }

    @Transactional
    public AdminCategoryResponse updateCategory(UUID id, AdminCategoryRequest request) {
        var category = categories.findById(id).orElseThrow();
        applyCategory(category, request);
        audit("UPDATE", "CATEGORY:" + id);
        return category(categories.save(category));
    }

    @Transactional
    public void deleteCategory(UUID id) {
        var category = categories.findById(id).orElseThrow();
        category.setDeletedAt(Instant.now());
        category.setActive(false);
        categories.save(category);
        audit("DELETE", "CATEGORY:" + id);
    }

    public List<AdminBannerResponse> banners() {
        return live(banners.findAll()).stream().map(this::banner).toList();
    }

    @Transactional
    public AdminBannerResponse createBanner(AdminBannerRequest request) {
        var banner = new BannerEntity();
        applyBanner(banner, request);
        audit("CREATE", "BANNER");
        return banner(banners.save(banner));
    }

    @Transactional
    public AdminBannerResponse updateBanner(UUID id, AdminBannerRequest request) {
        var banner = banners.findById(id).orElseThrow();
        applyBanner(banner, request);
        audit("UPDATE", "BANNER:" + id);
        return banner(banners.save(banner));
    }

    @Transactional
    public void deleteBanner(UUID id) {
        var banner = banners.findById(id).orElseThrow();
        banner.setDeletedAt(Instant.now());
        banner.setActive(false);
        banners.save(banner);
        audit("DELETE", "BANNER:" + id);
    }

    public List<AdminCityResponse> cities() {
        return live(cities.findAll()).stream().map(this::city).toList();
    }

    @Transactional
    public AdminCityResponse createCity(AdminCityRequest request) {
        var city = new CityEntity();
        applyCity(city, request);
        audit("CREATE", "CITY");
        return city(cities.save(city));
    }

    @Transactional
    public AdminCityResponse updateCity(UUID id, AdminCityRequest request) {
        var city = cities.findById(id).orElseThrow();
        applyCity(city, request);
        audit("UPDATE", "CITY:" + id);
        return city(cities.save(city));
    }

    @Transactional
    public void deleteCity(UUID id) {
        var city = cities.findById(id).orElseThrow();
        city.setDeletedAt(Instant.now());
        city.setActive(false);
        cities.save(city);
        audit("DELETE", "CITY:" + id);
    }

    public List<AdminCouponResponse> coupons() {
        return live(coupons.findAll()).stream().map(this::coupon).toList();
    }

    @Transactional
    public AdminCouponResponse createCoupon(AdminCouponRequest request) {
        var coupon = new CouponEntity();
        applyCoupon(coupon, request);
        audit("CREATE", "COUPON");
        return coupon(coupons.save(coupon));
    }

    @Transactional
    public AdminCouponResponse updateCoupon(UUID id, AdminCouponRequest request) {
        var coupon = coupons.findById(id).orElseThrow();
        applyCoupon(coupon, request);
        audit("UPDATE", "COUPON:" + id);
        return coupon(coupons.save(coupon));
    }

    @Transactional
    public void deleteCoupon(UUID id) {
        var coupon = coupons.findById(id).orElseThrow();
        coupon.setDeletedAt(Instant.now());
        coupon.setActive(false);
        coupons.save(coupon);
        audit("DELETE", "COUPON:" + id);
    }

    public List<AdminFeeResponse> fees() {
        return live(fees.findAll()).stream().map(this::fee).toList();
    }

    @Transactional
    public AdminFeeResponse createFee(AdminFeeRequest request) {
        var fee = new FeeEntity();
        applyFee(fee, request);
        audit("CREATE", "FEE");
        return fee(fees.save(fee));
    }

    @Transactional
    public AdminFeeResponse updateFee(UUID id, AdminFeeRequest request) {
        var fee = fees.findById(id).orElseThrow();
        applyFee(fee, request);
        audit("UPDATE", "FEE:" + id);
        return fee(fees.save(fee));
    }

    @Transactional
    public void deleteFee(UUID id) {
        var fee = fees.findById(id).orElseThrow();
        fee.setDeletedAt(Instant.now());
        fees.save(fee);
        audit("DELETE", "FEE:" + id);
    }

    public List<AdminUserResponse> admins() {
        return live(users.findAll()).stream().filter(this::hasAdminRole).map(this::user).toList();
    }

    @Transactional
    public AdminUserResponse createAdmin(AdminUserRequest request) {
        if (request.role() != RoleName.ADMIN) {
            throw new IllegalArgumentException("Only ADMIN users can be created from this endpoint");
        }
        if (users.existsByUsername(request.username())) {
            throw new IllegalArgumentException("Username already exists");
        }
        var admin = new UserEntity();
        admin.setUsername(request.username());
        admin.setEmail(request.email());
        admin.setFullName(request.fullName());
        admin.setPasswordHash(passwordEncoder.encode(request.password()));
        admin.setEnabled(request.enabled());
        admin.setMustChangePassword(true);
        admin.getRoles().add(roles.findByName(RoleName.ADMIN).orElseThrow());
        audit("CREATE", "ADMIN:" + request.username());
        return user(users.save(admin));
    }

    @Transactional
    public AdminUserResponse updateAdmin(UUID id, AdminUserUpdateRequest request) {
        var admin = users.findById(id).orElseThrow();
        if (!hasAdminRole(admin)) {
            throw new IllegalArgumentException("User is not an administrator");
        }
        admin.setEmail(request.email());
        admin.setFullName(request.fullName());
        admin.setEnabled(request.enabled());
        admin.setMustChangePassword(request.mustChangePassword());
        audit("UPDATE", "ADMIN:" + id);
        return user(users.save(admin));
    }

    @Transactional
    public AdminUserResponse approveAdmin(UUID id, AdminApprovalRequest request) {
        var admin = users.findById(id).orElseThrow();
        if (!hasAdminRole(admin) || hasRole(admin, RoleName.MASTER_ADMIN)) {
            throw new IllegalArgumentException("Only ADMIN users can be approved here");
        }
        var approved = Boolean.parseBoolean(request.status());
        admin.setEnabled(approved);
        audit(approved ? "APPROVE" : "REJECT", "ADMIN:" + id);
        return user(users.save(admin));
    }

    @Transactional
    public void deleteAdmin(UUID id) {
        var admin = users.findById(id).orElseThrow();
        if (hasRole(admin, RoleName.MASTER_ADMIN)) {
            throw new IllegalArgumentException("MASTER_ADMIN cannot be deleted");
        }
        admin.setEnabled(false);
        admin.setDeletedAt(Instant.now());
        users.save(admin);
        audit("DELETE", "ADMIN:" + id);
    }

    public List<AdminOrderResponse> orders() {
        return live(orders.findAll()).stream()
            .sorted(Comparator.comparing(OrderEntity::getCreatedAt, Comparator.nullsLast(Comparator.reverseOrder())))
            .map(this::order)
            .toList();
    }

    public AdminFinancialSummaryResponse financialSummary() {
        var entries = live(financialEntries.findAll());
        var revenue = orders.sumDeliveredRevenue();
        var courierPayout = entries.stream()
            .filter(entry -> entry.getCourier() != null)
            .map(FinancialEntryEntity::getAmount)
            .reduce(BigDecimal.ZERO, BigDecimal::add);
        return new AdminFinancialSummaryResponse(revenue, courierPayout, revenue.subtract(courierPayout), entries.size());
    }

    public List<AdminFinancialEntryResponse> financialEntries() {
        return live(financialEntries.findAll()).stream()
            .sorted(Comparator.comparing(FinancialEntryEntity::getCreatedAt, Comparator.nullsLast(Comparator.reverseOrder())))
            .map(this::financialEntry)
            .toList();
    }

    public List<AdminSettingResponse> settings() {
        return live(settings.findAll()).stream().map(this::setting).toList();
    }

    @Transactional
    public AdminSettingResponse upsertSetting(AdminSettingRequest request) {
        var setting = settings.findByKeyNameAndDeletedAtIsNull(request.keyName()).orElseGet(SystemSettingEntity::new);
        setting.setKeyName(request.keyName());
        setting.setValue(request.value());
        audit("UPSERT", "SETTING:" + request.keyName());
        return setting(settings.save(setting));
    }

    public List<AdminAuditResponse> auditLogs() {
        return auditLogs.findTop100ByDeletedAtIsNullOrderByCreatedAtDesc().stream().map(this::audit).toList();
    }

    private void applyStore(StoreEntity store, AdminStoreRequest request) {
        store.setName(request.name());
        store.setDocument(request.document());
        store.setSegment(request.segment());
        store.setStatus(request.status());
        store.setDeliveryFee(request.deliveryFee());
        store.setMinimumOrder(request.minimumOrder());
        store.setOpen(request.open());
        store.setCity(request.cityId() == null ? null : cities.findById(request.cityId()).orElseThrow());
        store.setOwner(request.ownerId() == null ? null : users.findById(request.ownerId()).orElseThrow());
    }

    private void applyCategory(CategoryEntity category, AdminCategoryRequest request) {
        category.setName(request.name());
        category.setIcon(request.icon());
        category.setActive(request.active());
    }

    private void applyBanner(BannerEntity banner, AdminBannerRequest request) {
        banner.setTitle(request.title());
        banner.setImageUrl(request.imageUrl());
        banner.setActive(request.active());
    }

    private void applyCity(CityEntity city, AdminCityRequest request) {
        city.setName(request.name());
        city.setState(request.state());
        city.setActive(request.active());
    }

    private void applyCoupon(CouponEntity coupon, AdminCouponRequest request) {
        coupon.setCode(request.code());
        coupon.setDiscountValue(request.discountValue());
        coupon.setActive(request.active());
    }

    private void applyFee(FeeEntity fee, AdminFeeRequest request) {
        fee.setName(request.name());
        fee.setValue(request.value());
        fee.setPercentage(request.percentage());
    }

    private void audit(String action, String resource) {
        var log = new AuditLogEntity();
        users.findByUsername(currentUsername()).ifPresent(log::setActor);
        log.setAction(action);
        log.setResource(resource);
        log.setIpAddress("system");
        auditLogs.save(log);
    }

    private String currentUsername() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        return authentication == null ? "system" : authentication.getName();
    }

    private boolean hasAdminRole(UserEntity user) {
        return hasRole(user, RoleName.ADMIN) || hasRole(user, RoleName.MASTER_ADMIN);
    }

    private boolean hasRole(UserEntity user, RoleName roleName) {
        return user.getRoles().stream().anyMatch(role -> role.getName() == roleName);
    }

    private <T extends br.com.elide.infrastructure.persistence.BaseEntity> List<T> live(List<T> entities) {
        return entities.stream().filter(entity -> entity.getDeletedAt() == null).toList();
    }

    private AdminStoreResponse store(StoreEntity store) {
        return new AdminStoreResponse(store.getId(), store.getName(), store.getDocument(), store.getSegment(), store.getStatus(), store.getDeliveryFee(), store.getMinimumOrder(), store.isOpen(), store.getCity() == null ? null : store.getCity().getId(), store.getCity() == null ? null : store.getCity().getName(), store.getOwner() == null ? null : store.getOwner().getId(), store.getOwner() == null ? null : store.getOwner().getUsername());
    }

    private AdminCourierResponse courier(CourierEntity courier) {
        return new AdminCourierResponse(courier.getId(), courier.getUser().getFullName(), courier.getUser().getEmail(), courier.getDocument(), courier.getVehicleType(), courier.getStatus());
    }

    private AdminCategoryResponse category(CategoryEntity category) {
        return new AdminCategoryResponse(category.getId(), category.getName(), category.getIcon(), category.isActive());
    }

    private AdminBannerResponse banner(BannerEntity banner) {
        return new AdminBannerResponse(banner.getId(), banner.getTitle(), banner.getImageUrl(), banner.isActive());
    }

    private AdminCityResponse city(CityEntity city) {
        return new AdminCityResponse(city.getId(), city.getName(), city.getState(), city.isActive());
    }

    private AdminCouponResponse coupon(CouponEntity coupon) {
        return new AdminCouponResponse(coupon.getId(), coupon.getCode(), coupon.getDiscountValue(), coupon.isActive());
    }

    private AdminFeeResponse fee(FeeEntity fee) {
        return new AdminFeeResponse(fee.getId(), fee.getName(), fee.getValue(), fee.isPercentage());
    }

    private AdminUserResponse user(UserEntity user) {
        return new AdminUserResponse(user.getId(), user.getUsername(), user.getEmail(), user.getFullName(), user.isEnabled(), user.isMustChangePassword(), user.getRoles().stream().map(role -> role.getName().name()).collect(Collectors.toSet()));
    }

    private AdminOrderResponse order(OrderEntity order) {
        return new AdminOrderResponse(order.getId(), order.getCustomer().getFullName(), order.getStore().getName(), order.getCourier() == null ? null : order.getCourier().getUser().getFullName(), order.getStatus(), order.getPaymentMethod(), order.getSubtotal(), order.getDeliveryFee(), order.getDiscount(), order.getTotal(), order.getCreatedAt());
    }

    private AdminFinancialEntryResponse financialEntry(FinancialEntryEntity entry) {
        return new AdminFinancialEntryResponse(entry.getId(), entry.getOrder() == null ? null : entry.getOrder().getId(), entry.getStore() == null ? null : entry.getStore().getName(), entry.getCourier() == null ? null : entry.getCourier().getUser().getFullName(), entry.getType(), entry.getAmount(), entry.getCreatedAt());
    }

    private AdminSettingResponse setting(SystemSettingEntity setting) {
        return new AdminSettingResponse(setting.getId(), setting.getKeyName(), setting.getValue());
    }

    private AdminAuditResponse audit(AuditLogEntity audit) {
        return new AdminAuditResponse(audit.getId(), audit.getActor() == null ? "system" : audit.getActor().getUsername(), audit.getAction(), audit.getResource(), audit.getIpAddress(), audit.getCreatedAt());
    }
}
