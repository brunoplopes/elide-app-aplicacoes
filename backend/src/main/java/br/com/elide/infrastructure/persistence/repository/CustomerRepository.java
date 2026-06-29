package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<CustomerEntity, UUID> {
    Optional<CustomerEntity> findByUserUsername(String username);
}
