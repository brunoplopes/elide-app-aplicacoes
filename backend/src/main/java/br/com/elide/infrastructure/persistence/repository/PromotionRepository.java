package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.PromotionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface PromotionRepository extends JpaRepository<PromotionEntity, UUID> {
    List<PromotionEntity> findByStoreIdAndDeletedAtIsNullOrderByStartsAtDesc(UUID storeId);
}
