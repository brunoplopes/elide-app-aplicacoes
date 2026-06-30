package br.com.elide.interfaces.rest;

import br.com.elide.application.StoreSearchService;
import br.com.elide.application.dto.MarketplaceDtos.StoreNearbyResponse;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Validated
@RestController
@RequestMapping({"/api/v1/stores", "/stores"})
public class StoreSearchController {
    private final StoreSearchService stores;

    public StoreSearchController(StoreSearchService stores) {
        this.stores = stores;
    }

    @GetMapping("/nearby")
    public List<StoreNearbyResponse> nearby(
        @RequestParam @NotNull @DecimalMin("-90.0") @DecimalMax("90.0") BigDecimal latitude,
        @RequestParam @NotNull @DecimalMin("-180.0") @DecimalMax("180.0") BigDecimal longitude,
        @RequestParam @Positive int radiusMeters,
        @RequestParam(defaultValue = "50") @Min(1) @Max(100) int limit,
        @RequestParam(required = false) UUID categoryId
    ) {
        return stores.nearby(latitude, longitude, radiusMeters, limit, categoryId);
    }
}
