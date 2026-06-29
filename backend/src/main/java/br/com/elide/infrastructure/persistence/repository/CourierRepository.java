package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.CourierStatus;
import br.com.elide.infrastructure.persistence.CourierEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CourierRepository extends JpaRepository<CourierEntity, UUID> {
    long countByStatus(CourierStatus status);

    Optional<CourierEntity> findByUserUsernameAndDeletedAtIsNull(String username);
}
