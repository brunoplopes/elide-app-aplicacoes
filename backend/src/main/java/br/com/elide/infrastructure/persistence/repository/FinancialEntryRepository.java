package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.FinancialEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface FinancialEntryRepository extends JpaRepository<FinancialEntryEntity, UUID> {
    List<FinancialEntryEntity> findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID storeId);

    @Query("select coalesce(sum(e.amount), 0) from FinancialEntryEntity e where e.store.id = :storeId and e.deletedAt is null")
    BigDecimal sumByStore(@Param("storeId") UUID storeId);
}
