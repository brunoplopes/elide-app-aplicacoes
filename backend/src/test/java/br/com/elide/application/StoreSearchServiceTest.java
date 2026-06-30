package br.com.elide.application;

import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository.NearbyStoreProjection;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

class StoreSearchServiceTest {
    private final StoreRepository stores = mock(StoreRepository.class);
    private final StoreSearchService service = new StoreSearchService(stores);

    @Test
    void nearbyWithoutCategoryUsesNearbyQueryAndPreservesRepositoryOrder() {
        var first = projection("Loja A", "Restaurante", "120.5");
        var second = projection("Loja B", "Restaurante", "320.0");
        when(stores.findNearby(new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), 5000, 50)).thenReturn(List.of(first, second));

        var result = service.nearby(new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), 5000, 50, null);

        assertThat(result).extracting("name").containsExactly("Loja A", "Loja B");
        assertThat(result).extracting("distanceMeters").containsExactly(new BigDecimal("120.5"), new BigDecimal("320.0"));
        verify(stores).findNearby(new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), 5000, 50);
        verifyNoMoreInteractions(stores);
    }

    @Test
    void nearbyWithCategoryUsesCategoryQuery() {
        var categoryId = UUID.randomUUID();
        when(stores.findNearbyByCategory(new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), 5000, 50, categoryId)).thenReturn(List.of());

        var result = service.nearby(new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), 5000, 50, categoryId);

        assertThat(result).isEmpty();
        verify(stores).findNearbyByCategory(new BigDecimal("-23.5505000"), new BigDecimal("-46.6333000"), 5000, 50, categoryId);
        verifyNoMoreInteractions(stores);
    }

    private NearbyStoreProjection projection(String name, String segment, String distance) {
        return new NearbyStoreProjection() {
            private final UUID id = UUID.randomUUID();

            @Override
            public UUID getId() {
                return id;
            }

            @Override
            public String getName() {
                return name;
            }

            @Override
            public String getSegment() {
                return segment;
            }

            @Override
            public BigDecimal getDeliveryFee() {
                return new BigDecimal("6.90");
            }

            @Override
            public BigDecimal getMinimumOrder() {
                return new BigDecimal("20.00");
            }

            @Override
            public boolean isOpen() {
                return true;
            }

            @Override
            public BigDecimal getLatitude() {
                return new BigDecimal("-23.5505000");
            }

            @Override
            public BigDecimal getLongitude() {
                return new BigDecimal("-46.6333000");
            }

            @Override
            public BigDecimal getDistanceMeters() {
                return new BigDecimal(distance);
            }
        };
    }
}
