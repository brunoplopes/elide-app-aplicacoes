package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<ProductEntity, UUID> {
    Page<ProductEntity> findByStoreIdAndActiveTrue(UUID storeId, Pageable pageable);

    Page<ProductEntity> findByStoreIdAndDeletedAtIsNull(UUID storeId, Pageable pageable);

    List<ProductEntity> findTop5ByStoreIdAndDeletedAtIsNullOrderByStockQuantityAsc(UUID storeId);

    long countByStoreIdAndActiveTrueAndDeletedAtIsNull(UUID storeId);

    long countByStoreIdAndStockQuantityLessThanEqualAndDeletedAtIsNull(UUID storeId, int stockQuantity);
}
