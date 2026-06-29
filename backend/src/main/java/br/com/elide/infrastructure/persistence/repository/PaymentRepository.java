package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.PaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface PaymentRepository extends JpaRepository<PaymentEntity, UUID> {
    Optional<PaymentEntity> findByOrderIdAndDeletedAtIsNull(UUID orderId);
}
