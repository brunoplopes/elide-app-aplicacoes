package br.com.elide.interfaces.rest;

import br.com.elide.application.CatalogService;
import br.com.elide.application.dto.MarketplaceDtos.CatalogSearchResponse;
import br.com.elide.application.dto.MarketplaceDtos.CategoryResponse;
import br.com.elide.application.dto.MarketplaceDtos.ProductResponse;
import br.com.elide.application.dto.MarketplaceDtos.StoreResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/catalog")
public class CatalogController {
    private final CatalogService catalogService;

    public CatalogController(CatalogService catalogService) {
        this.catalogService = catalogService;
    }

    @GetMapping("/categories")
    public List<CategoryResponse> categories() {
        return catalogService.categories();
    }

    @GetMapping("/stores")
    public Page<StoreResponse> stores(@RequestParam(required = false) String segment, @RequestParam(required = false) String q, Pageable pageable) {
        return catalogService.stores(segment, q, pageable);
    }

    @GetMapping("/stores/{storeId}/products")
    public Page<ProductResponse> products(@PathVariable UUID storeId, Pageable pageable) {
        return catalogService.products(storeId, pageable);
    }

    @GetMapping("/products")
    public Page<ProductResponse> searchProducts(@RequestParam(required = false) String q, Pageable pageable) {
        return catalogService.searchProducts(q, pageable);
    }

    @GetMapping("/search")
    public CatalogSearchResponse search(@RequestParam(required = false) String q, Pageable pageable) {
        return catalogService.search(q, pageable);
    }

    @GetMapping("/products/{productId}")
    public ProductResponse product(@PathVariable UUID productId) {
        return catalogService.product(productId);
    }
}
