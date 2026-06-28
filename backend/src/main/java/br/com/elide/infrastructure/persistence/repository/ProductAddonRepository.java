package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.ProductAddonEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProductAddonRepository extends JpaRepository<ProductAddonEntity, UUID> {
    List<ProductAddonEntity> findByProductIdAndDeletedAtIsNullOrderByNameAsc(UUID productId);
}
