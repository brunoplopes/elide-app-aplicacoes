package br.com.elide.interfaces.rest;

import br.com.elide.application.AdminDashboardService;
import br.com.elide.application.AdminManagementService;
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
import br.com.elide.application.dto.MarketplaceDtos.DashboardResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    private final AdminDashboardService dashboardService;
    private final AdminManagementService admin;

    public AdminController(AdminDashboardService dashboardService, AdminManagementService admin) {
        this.dashboardService = dashboardService;
        this.admin = admin;
    }

    @GetMapping("/dashboard")
    public DashboardResponse dashboard() {
        return dashboardService.dashboard();
    }

    @GetMapping("/stores")
    public List<AdminStoreResponse> stores() {
        return admin.stores();
    }

    @PostMapping("/stores")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminStoreResponse createStore(@Valid @RequestBody AdminStoreRequest request) {
        return admin.createStore(request);
    }

    @PutMapping("/stores/{storeId}")
    public AdminStoreResponse updateStore(@PathVariable UUID storeId, @Valid @RequestBody AdminStoreRequest request) {
        return admin.updateStore(storeId, request);
    }

    @DeleteMapping("/stores/{storeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStore(@PathVariable UUID storeId) {
        admin.deleteStore(storeId);
    }

    @PatchMapping("/stores/{storeId}/approval")
    public AdminStoreResponse approveStore(@PathVariable UUID storeId, @Valid @RequestBody AdminApprovalRequest request) {
        return admin.approveStore(storeId, request);
    }

    @GetMapping("/couriers")
    public List<AdminCourierResponse> couriers() {
        return admin.couriers();
    }

    @PatchMapping("/couriers/{courierId}/approval")
    public AdminCourierResponse approveCourier(@PathVariable UUID courierId, @Valid @RequestBody AdminApprovalRequest request) {
        return admin.approveCourier(courierId, request);
    }

    @GetMapping("/categories")
    public List<AdminCategoryResponse> categories() {
        return admin.categories();
    }

    @PostMapping("/categories")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminCategoryResponse createCategory(@Valid @RequestBody AdminCategoryRequest request) {
        return admin.createCategory(request);
    }

    @PutMapping("/categories/{categoryId}")
    public AdminCategoryResponse updateCategory(@PathVariable UUID categoryId, @Valid @RequestBody AdminCategoryRequest request) {
        return admin.updateCategory(categoryId, request);
    }

    @DeleteMapping("/categories/{categoryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(@PathVariable UUID categoryId) {
        admin.deleteCategory(categoryId);
    }

    @GetMapping("/banners")
    public List<AdminBannerResponse> banners() {
        return admin.banners();
    }

    @PostMapping("/banners")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminBannerResponse createBanner(@Valid @RequestBody AdminBannerRequest request) {
        return admin.createBanner(request);
    }

    @PutMapping("/banners/{bannerId}")
    public AdminBannerResponse updateBanner(@PathVariable UUID bannerId, @Valid @RequestBody AdminBannerRequest request) {
        return admin.updateBanner(bannerId, request);
    }

    @DeleteMapping("/banners/{bannerId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBanner(@PathVariable UUID bannerId) {
        admin.deleteBanner(bannerId);
    }

    @GetMapping("/cities")
    public List<AdminCityResponse> cities() {
        return admin.cities();
    }

    @PostMapping("/cities")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminCityResponse createCity(@Valid @RequestBody AdminCityRequest request) {
        return admin.createCity(request);
    }

    @PutMapping("/cities/{cityId}")
    public AdminCityResponse updateCity(@PathVariable UUID cityId, @Valid @RequestBody AdminCityRequest request) {
        return admin.updateCity(cityId, request);
    }

    @DeleteMapping("/cities/{cityId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCity(@PathVariable UUID cityId) {
        admin.deleteCity(cityId);
    }

    @GetMapping("/coupons")
    public List<AdminCouponResponse> coupons() {
        return admin.coupons();
    }

    @PostMapping("/coupons")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminCouponResponse createCoupon(@Valid @RequestBody AdminCouponRequest request) {
        return admin.createCoupon(request);
    }

    @PutMapping("/coupons/{couponId}")
    public AdminCouponResponse updateCoupon(@PathVariable UUID couponId, @Valid @RequestBody AdminCouponRequest request) {
        return admin.updateCoupon(couponId, request);
    }

    @DeleteMapping("/coupons/{couponId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCoupon(@PathVariable UUID couponId) {
        admin.deleteCoupon(couponId);
    }

    @GetMapping("/fees")
    public List<AdminFeeResponse> fees() {
        return admin.fees();
    }

    @PostMapping("/fees")
    @ResponseStatus(HttpStatus.CREATED)
    public AdminFeeResponse createFee(@Valid @RequestBody AdminFeeRequest request) {
        return admin.createFee(request);
    }

    @PutMapping("/fees/{feeId}")
    public AdminFeeResponse updateFee(@PathVariable UUID feeId, @Valid @RequestBody AdminFeeRequest request) {
        return admin.updateFee(feeId, request);
    }

    @DeleteMapping("/fees/{feeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFee(@PathVariable UUID feeId) {
        admin.deleteFee(feeId);
    }

    @GetMapping("/admins")
    public List<AdminUserResponse> admins() {
        return admin.admins();
    }

    @PostMapping("/admins")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasRole('MASTER_ADMIN')")
    public AdminUserResponse createAdmin(@Valid @RequestBody AdminUserRequest request) {
        return admin.createAdmin(request);
    }

    @PutMapping("/admins/{adminId}")
    @PreAuthorize("hasRole('MASTER_ADMIN')")
    public AdminUserResponse updateAdmin(@PathVariable UUID adminId, @Valid @RequestBody AdminUserUpdateRequest request) {
        return admin.updateAdmin(adminId, request);
    }

    @PatchMapping("/admins/{adminId}/approval")
    @PreAuthorize("hasRole('MASTER_ADMIN')")
    public AdminUserResponse approveAdmin(@PathVariable UUID adminId, @Valid @RequestBody AdminApprovalRequest request) {
        return admin.approveAdmin(adminId, request);
    }

    @DeleteMapping("/admins/{adminId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize("hasRole('MASTER_ADMIN')")
    public void deleteAdmin(@PathVariable UUID adminId) {
        admin.deleteAdmin(adminId);
    }

    @GetMapping("/orders")
    public List<AdminOrderResponse> orders() {
        return admin.orders();
    }

    @GetMapping("/financial/summary")
    public AdminFinancialSummaryResponse financialSummary() {
        return admin.financialSummary();
    }

    @GetMapping("/financial/entries")
    public List<AdminFinancialEntryResponse> financialEntries() {
        return admin.financialEntries();
    }

    @GetMapping("/settings")
    public List<AdminSettingResponse> settings() {
        return admin.settings();
    }

    @PutMapping("/settings")
    public AdminSettingResponse upsertSetting(@Valid @RequestBody AdminSettingRequest request) {
        return admin.upsertSetting(request);
    }

    @GetMapping("/audit")
    public List<AdminAuditResponse> audit() {
        return admin.auditLogs();
    }

    @GetMapping("/logs")
    public List<AdminAuditResponse> logs() {
        return admin.auditLogs();
    }

    @GetMapping("/master-only")
    @PreAuthorize("hasRole('MASTER_ADMIN')")
    public java.util.Map<String, String> masterOnly() {
        return java.util.Map.of("status", "MASTER_ADMIN access granted");
    }
}
