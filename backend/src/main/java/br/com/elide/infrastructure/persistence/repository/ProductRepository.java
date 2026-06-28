package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.ProductEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProductRepository extends JpaRepository<ProductEntity, UUID> {
    Page<ProductEntity> findByStoreIdAndActiveTrue(UUID storeId, Pageable pageable);
}

