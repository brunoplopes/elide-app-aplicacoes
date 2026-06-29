package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.FinancialEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public interface FinancialEntryRepository extends JpaRepository<FinancialEntryEntity, UUID> {
    List<FinancialEntryEntity> findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID storeId);

    @Query("select coalesce(sum(e.amount), 0) from FinancialEntryEntity e where e.store.id = :storeId and e.deletedAt is null")
    BigDecimal sumByStore(@Param("storeId") UUID storeId);

    List<FinancialEntryEntity> findTop50ByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID courierId);

    @Query("select coalesce(sum(e.amount), 0) from FinancialEntryEntity e where e.courier.id = :courierId and e.deletedAt is null")
    BigDecimal sumByCourier(@Param("courierId") UUID courierId);

    @Query("select coalesce(sum(e.amount), 0) from FinancialEntryEntity e where e.courier.id = :courierId and e.createdAt between :from and :to and e.deletedAt is null")
    BigDecimal sumByCourierBetween(@Param("courierId") UUID courierId, @Param("from") Instant from, @Param("to") Instant to);
}
