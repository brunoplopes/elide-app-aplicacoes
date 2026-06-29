package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.RouteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface RouteRepository extends JpaRepository<RouteEntity, UUID> {
    Optional<RouteEntity> findByOrderIdAndDeletedAtIsNull(UUID orderId);
}
