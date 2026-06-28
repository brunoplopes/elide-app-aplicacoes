package br.com.elide.interfaces.rest;

import br.com.elide.application.StoreManagementService;
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
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/store")
public class StorePortalController {
    private final StoreManagementService stores;

    public StorePortalController(StoreManagementService stores) {
        this.stores = stores;
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public StoreProfileResponse signup(@Valid @RequestBody StoreProfileRequest request) {
        return stores.signup(request);
    }

    @GetMapping("/profile")
    public StoreProfileResponse profile() {
        return stores.profile();
    }

    @PutMapping("/profile")
    public StoreProfileResponse updateProfile(@Valid @RequestBody StoreProfileRequest request) {
        return stores.updateProfile(request);
    }

    @PostMapping("/documents")
    @ResponseStatus(HttpStatus.CREATED)
    public StoreDocumentResponse sendDocument(@Valid @RequestBody StoreDocumentRequest request) {
        return stores.sendDocument(request);
    }

    @GetMapping("/documents")
    public List<StoreDocumentResponse> documents() {
        return stores.documents();
    }

    @PatchMapping("/admin/stores/{storeId}/approval")
    @PreAuthorize("hasAnyRole('ADMIN', 'MASTER_ADMIN')")
    public StoreProfileResponse approveStore(@PathVariable UUID storeId, @Valid @RequestBody StoreApprovalRequest request) {
        return stores.approveStore(storeId, request);
    }

    @GetMapping("/categories")
    public List<StoreCategoryResponse> categories() {
        return stores.categories();
    }

    @PostMapping("/categories")
    @ResponseStatus(HttpStatus.CREATED)
    public StoreCategoryResponse createCategory(@Valid @RequestBody StoreCategoryRequest request) {
        return stores.createCategory(request);
    }

    @GetMapping("/products")
    public Page<StoreProductResponse> products(Pageable pageable) {
        return stores.products(pageable);
    }

    @PostMapping("/products")
    @ResponseStatus(HttpStatus.CREATED)
    public StoreProductResponse createProduct(@Valid @RequestBody StoreProductRequest request) {
        return stores.createProduct(request);
    }

    @PutMapping("/products/{productId}")
    public StoreProductResponse updateProduct(@PathVariable UUID productId, @Valid @RequestBody StoreProductRequest request) {
        return stores.updateProduct(productId, request);
    }

    @PatchMapping("/products/{productId}/stock")
    public StoreProductResponse updateStock(@PathVariable UUID productId, @Valid @RequestBody StoreStockRequest request) {
        return stores.updateStock(productId, request);
    }

    @DeleteMapping("/products/{productId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable UUID productId) {
        stores.deleteProduct(productId);
    }

    @GetMapping("/products/{productId}/addons")
    public List<StoreAddonResponse> addons(@PathVariable UUID productId) {
        return stores.addons(productId);
    }

    @PostMapping("/products/{productId}/addons")
    @ResponseStatus(HttpStatus.CREATED)
    public StoreAddonResponse createAddon(@PathVariable UUID productId, @Valid @RequestBody StoreAddonRequest request) {
        return stores.createAddon(productId, request);
    }

    @PutMapping("/products/{productId}/addons/{addonId}")
    public StoreAddonResponse updateAddon(@PathVariable UUID productId, @PathVariable UUID addonId, @Valid @RequestBody StoreAddonRequest request) {
        return stores.updateAddon(productId, addonId, request);
    }

    @DeleteMapping("/products/{productId}/addons/{addonId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAddon(@PathVariable UUID productId, @PathVariable UUID addonId) {
        stores.deleteAddon(productId, addonId);
    }

    @GetMapping("/hours")
    public List<StoreHourResponse> hours() {
        return stores.hours();
    }

    @PutMapping("/hours")
    public StoreHourResponse upsertHour(@Valid @RequestBody StoreHourRequest request) {
        return stores.upsertHour(request);
    }

    @GetMapping("/promotions")
    public List<StorePromotionResponse> promotions() {
        return stores.promotions();
    }

    @PostMapping("/promotions")
    @ResponseStatus(HttpStatus.CREATED)
    public StorePromotionResponse createPromotion(@Valid @RequestBody StorePromotionRequest request) {
        return stores.createPromotion(request);
    }

    @PutMapping("/promotions/{promotionId}")
    public StorePromotionResponse updatePromotion(@PathVariable UUID promotionId, @Valid @RequestBody StorePromotionRequest request) {
        return stores.updatePromotion(promotionId, request);
    }

    @DeleteMapping("/promotions/{promotionId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePromotion(@PathVariable UUID promotionId) {
        stores.deletePromotion(promotionId);
    }

    @GetMapping("/orders")
    public List<StoreOrderResponse> orders(@RequestParam(required = false) OrderStatus status) {
        return stores.orders(status);
    }

    @PatchMapping("/orders/{orderId}/status")
    public StoreOrderResponse updateOrderStatus(@PathVariable UUID orderId, @Valid @RequestBody StoreOrderStatusRequest request) {
        return stores.updateOrderStatus(orderId, request);
    }

    @GetMapping("/financial/summary")
    public StoreFinancialSummaryResponse financialSummary() {
        return stores.financialSummary();
    }

    @GetMapping("/financial/entries")
    public List<StoreFinancialEntryResponse> financialEntries() {
        return stores.financialEntries();
    }

    @GetMapping("/reports")
    public StoreReportResponse reports(
        @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant from,
        @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Instant to
    ) {
        return stores.reports(from, to);
    }

    @GetMapping("/dashboard")
    public StoreDashboardResponse dashboard() {
        return stores.dashboard();
    }

    @GetMapping("/reviews")
    public List<StoreReviewResponse> reviews() {
        return stores.reviews();
    }
}
