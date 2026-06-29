package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.OperationalEntities.SystemSettingEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface SystemSettingRepository extends JpaRepository<SystemSettingEntity, UUID> {
    Optional<SystemSettingEntity> findByKeyNameAndDeletedAtIsNull(String keyName);
}
