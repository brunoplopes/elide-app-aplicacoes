package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<ProductEntity, UUID> {
    Page<ProductEntity> findByStoreIdAndActiveTrue(UUID storeId, Pageable pageable);

    @Query("""
        select product from ProductEntity product
        where product.active = true
          and product.deletedAt is null
          and product.store.status = :status
        """)
    Page<ProductEntity> findActiveApproved(@Param("status") StoreStatus status, Pageable pageable);

    @Query("""
        select product from ProductEntity product
        where product.active = true
          and product.deletedAt is null
          and product.store.status = :status
          and (lower(product.name) like lower(concat('%', :query, '%'))
            or lower(product.description) like lower(concat('%', :query, '%'))
            or lower(product.category.name) like lower(concat('%', :query, '%'))
            or lower(product.store.name) like lower(concat('%', :query, '%')))
        """)
    Page<ProductEntity> searchActiveByQuery(@Param("status") StoreStatus status, @Param("query") String query, Pageable pageable);

    Page<ProductEntity> findByStoreIdAndDeletedAtIsNull(UUID storeId, Pageable pageable);

    List<ProductEntity> findTop5ByStoreIdAndDeletedAtIsNullOrderByStockQuantityAsc(UUID storeId);

    long countByStoreIdAndActiveTrueAndDeletedAtIsNull(UUID storeId);

    long countByStoreIdAndStockQuantityLessThanEqualAndDeletedAtIsNull(UUID storeId, int stockQuantity);
}
