package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CourierLocationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CourierLocationRepository extends JpaRepository<CourierLocationEntity, UUID> {
    Optional<CourierLocationEntity> findFirstByCourierIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID courierId);
}
