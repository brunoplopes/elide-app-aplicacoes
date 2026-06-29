package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CourierDeliveryDecisionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CourierDeliveryDecisionRepository extends JpaRepository<CourierDeliveryDecisionEntity, UUID> {
    Optional<CourierDeliveryDecisionEntity> findByCourierIdAndOrderIdAndDeletedAtIsNull(UUID courierId, UUID orderId);

    List<CourierDeliveryDecisionEntity> findByCourierIdAndAcceptedFalseAndDeletedAtIsNull(UUID courierId);
}
