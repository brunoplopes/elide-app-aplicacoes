package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.RoleName;
import br.com.elide.infrastructure.persistence.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface RoleRepository extends JpaRepository<RoleEntity, UUID> {
    Optional<RoleEntity> findByName(RoleName name);
}

