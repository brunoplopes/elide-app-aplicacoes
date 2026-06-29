package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CustomerPaymentMethodEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CustomerPaymentMethodRepository extends JpaRepository<CustomerPaymentMethodEntity, UUID> {
    List<CustomerPaymentMethodEntity> findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(String username);
}
