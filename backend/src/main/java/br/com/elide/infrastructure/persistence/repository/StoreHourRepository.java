package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.StoreHourEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface StoreHourRepository extends JpaRepository<StoreHourEntity, UUID> {
    List<StoreHourEntity> findByStoreIdAndDeletedAtIsNullOrderByDayOfWeekAsc(UUID storeId);

    Optional<StoreHourEntity> findByStoreIdAndDayOfWeekAndDeletedAtIsNull(UUID storeId, int dayOfWeek);
}
