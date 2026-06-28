package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.StoreDocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface StoreDocumentRepository extends JpaRepository<StoreDocumentEntity, UUID> {
    List<StoreDocumentEntity> findByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID storeId);
}
