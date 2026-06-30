package br.com.elide.infrastructure.persistence.repository;

import org.junit.jupiter.api.Test;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

class StoreRepositoryNearbyQueryTest {
    @Test
    void nearbyQueryUsesPostgisFiltersDistanceOrderingAndLimit() throws Exception {
        var sql = query("findNearby", BigDecimal.class, BigDecimal.class, int.class, int.class);

        assertThat(sql)
            .contains("st_distance")
            .contains("st_dwithin")
            .contains("s.deleted_at is null")
            .contains("s.status = 'active'")
            .contains("s.open = true")
            .contains(":radiusmeters")
            .contains("order by")
            .contains("<->")
            .contains("limit :limit");
    }

    @Test
    void nearbyByCategoryQueryJoinsStoreCategoriesAndFiltersCategory() throws Exception {
        var sql = query("findNearbyByCategory", BigDecimal.class, BigDecimal.class, int.class, int.class, UUID.class);

        assertThat(sql)
            .contains("join store_categories sc on sc.store_id = s.id")
            .contains("sc.category_id = :categoryid")
            .contains("st_distance")
            .contains("st_dwithin")
            .contains("s.status = 'active'")
            .contains("s.open = true")
            .contains("limit :limit");
    }

    private String query(String name, Class<?>... parameterTypes) throws Exception {
        var method = StoreRepository.class.getMethod(name, parameterTypes);
        var query = method.getAnnotation(Query.class);
        assertThat(query).isNotNull();
        assertThat(query.nativeQuery()).isTrue();
        return query.value().toLowerCase();
    }
}
