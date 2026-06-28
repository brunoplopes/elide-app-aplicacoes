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

    public Page<StoreResponse> stores(Pageable pageable) {
        return stores.findByStatusAndDeletedAtIsNull(StoreStatus.APPROVED, pageable)
            .map(store -> new StoreResponse(store.getId(), store.getName(), store.getSegment(), store.getDeliveryFee(), store.getMinimumOrder(), store.isOpen()));
    }

    public Page<ProductResponse> products(UUID storeId, Pageable pageable) {
        return products.findByStoreIdAndActiveTrue(storeId, pageable)
            .map(product -> new ProductResponse(product.getId(), product.getName(), product.getDescription(), product.getPrice(), product.getStockQuantity()));
    }
}

