package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.OperationalEntities.FeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FeeRepository extends JpaRepository<FeeEntity, UUID> {
}
