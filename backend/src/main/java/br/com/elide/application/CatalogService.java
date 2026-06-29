package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.CategoryResponse;
import br.com.elide.application.dto.MarketplaceDtos.ProductResponse;
import br.com.elide.application.dto.MarketplaceDtos.StoreResponse;
import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.repository.CategoryRepository;
import br.com.elide.infrastructure.persistence.repository.ProductRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CatalogService {
    private final CategoryRepository categories;
    private final StoreRepository stores;
    private final ProductRepository products;

    public CatalogService(CategoryRepository categories, StoreRepository stores, ProductRepository products) {
        this.categories = categories;
        this.stores = stores;
        this.products = products;
    }

    @Cacheable("categories")
    public List<CategoryResponse> categories() {
        return categories.findByActiveTrueOrderByNameAsc().stream()
            .map(category -> new CategoryResponse(category.getId(), category.getName(), category.getIcon()))
            .toList();
    }

    public Page<StoreResponse> stores(String segment, String query, Pageable pageable) {
        var cleanSegment = normalize(segment);
        var cleanQuery = normalize(query);
        return storePage(cleanSegment, cleanQuery, pageable)
            .map(store -> new StoreResponse(store.getId(), store.getName(), store.getSegment(), store.getDeliveryFee(), store.getMinimumOrder(), store.isOpen()));
    }

    public Page<ProductResponse> products(UUID storeId, Pageable pageable) {
        return products.findByStoreIdAndActiveTrue(storeId, pageable)
            .map(this::product);
    }

    public Page<ProductResponse> searchProducts(String query, Pageable pageable) {
        var cleanQuery = normalize(query);
        var page = cleanQuery == null
            ? products.findActiveApproved(StoreStatus.APPROVED, pageable)
            : products.searchActiveByQuery(StoreStatus.APPROVED, cleanQuery, pageable);
        return page.map(this::product);
    }

    public ProductResponse product(UUID productId) {
        return product(products.findById(productId).orElseThrow());
    }

    private ProductResponse product(br.com.elide.infrastructure.persistence.ProductEntity product) {
        return new ProductResponse(product.getId(), product.getStore().getId(), product.getCategory().getId(), product.getName(), product.getDescription(), product.getPrice(), product.getStockQuantity());
    }

    private String normalize(String value) {
        return value == null || value.isBlank() ? null : value.trim();
    }

    private Page<br.com.elide.infrastructure.persistence.StoreEntity> storePage(String segment, String query, Pageable pageable) {
        if (segment != null && query != null) {
            return stores.searchApprovedBySegmentAndQuery(StoreStatus.APPROVED, segment, query, pageable);
        }
        if (segment != null) {
            return stores.searchApprovedBySegment(StoreStatus.APPROVED, segment, pageable);
        }
        if (query != null) {
            return stores.searchApprovedByQuery(StoreStatus.APPROVED, query, pageable);
        }
        return stores.findByStatusAndDeletedAtIsNull(StoreStatus.APPROVED, pageable);
    }
}
