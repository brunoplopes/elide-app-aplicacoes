package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CourierDocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CourierDocumentRepository extends JpaRepository<CourierDocumentEntity, UUID> {
    List<CourierDocumentEntity> findByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID courierId);
}
