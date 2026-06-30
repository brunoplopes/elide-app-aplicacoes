package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.CatalogSearchResponse;
import br.com.elide.application.dto.MarketplaceDtos.CategoryResponse;
import br.com.elide.application.dto.MarketplaceDtos.ProductAddonResponse;
import br.com.elide.application.dto.MarketplaceDtos.ProductResponse;
import br.com.elide.application.dto.MarketplaceDtos.StoreResponse;
import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.repository.CategoryRepository;
import br.com.elide.infrastructure.persistence.repository.ProductAddonRepository;
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
    private final ProductAddonRepository addons;

    public CatalogService(CategoryRepository categories, StoreRepository stores, ProductRepository products, ProductAddonRepository addons) {
        this.categories = categories;
        this.stores = stores;
        this.products = products;
        this.addons = addons;
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
            .map(this::store);
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

    public CatalogSearchResponse search(String query, Pageable pageable) {
        var cleanQuery = normalize(query);
        var categoryResults = cleanQuery == null
            ? categories.findByActiveTrueOrderByNameAsc()
            : categories.findTop20ByActiveTrueAndNameContainingIgnoreCaseOrderByNameAsc(cleanQuery);
        return new CatalogSearchResponse(
            stores(null, cleanQuery, pageable),
            searchProducts(cleanQuery, pageable),
            categoryResults.stream().map(this::category).toList()
        );
    }

    public ProductResponse product(UUID productId) {
        return product(products.findById(productId).orElseThrow());
    }

    private CategoryResponse category(br.com.elide.infrastructure.persistence.CategoryEntity category) {
        return new CategoryResponse(category.getId(), category.getName(), category.getIcon());
    }

    private ProductResponse product(br.com.elide.infrastructure.persistence.ProductEntity product) {
        return new ProductResponse(
            product.getId(),
            product.getStore().getId(),
            product.getCategory().getId(),
            product.getName(),
            product.getDescription(),
            product.getPrice(),
            product.getStockQuantity(),
            addons.findByProductIdAndDeletedAtIsNullOrderByNameAsc(product.getId()).stream().map(this::addon).toList()
        );
    }

    private ProductAddonResponse addon(br.com.elide.infrastructure.persistence.ProductAddonEntity addon) {
        return new ProductAddonResponse(addon.getId(), addon.getName(), addon.getPrice(), addon.isRequired(), addon.getMaxQuantity());
    }

    private StoreResponse store(br.com.elide.infrastructure.persistence.StoreEntity store) {
        return new StoreResponse(store.getId(), store.getName(), store.getSegment(), store.getDeliveryFee(), store.getMinimumOrder(), store.isOpen(), store.getLatitude(), store.getLongitude());
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
