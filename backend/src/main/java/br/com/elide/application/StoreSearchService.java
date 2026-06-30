package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.StoreNearbyResponse;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository.NearbyStoreProjection;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
public class StoreSearchService {
    private final StoreRepository stores;

    public StoreSearchService(StoreRepository stores) {
        this.stores = stores;
    }

    public List<StoreNearbyResponse> nearby(BigDecimal latitude, BigDecimal longitude, int radiusMeters, int limit, UUID categoryId) {
        var result = categoryId == null
            ? stores.findNearby(latitude, longitude, radiusMeters, limit)
            : stores.findNearbyByCategory(latitude, longitude, radiusMeters, limit, categoryId);
        return result.stream().map(this::nearby).toList();
    }

    private StoreNearbyResponse nearby(NearbyStoreProjection store) {
        return new StoreNearbyResponse(
            store.getId(),
            store.getName(),
            store.getSegment(),
            store.getDeliveryFee(),
            store.getMinimumOrder(),
            store.isOpen(),
            store.getLatitude(),
            store.getLongitude(),
            store.getDistanceMeters()
        );
    }
}
