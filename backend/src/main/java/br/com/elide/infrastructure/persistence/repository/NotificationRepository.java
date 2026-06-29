package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.OperationalEntities.NotificationEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface NotificationRepository extends JpaRepository<NotificationEntity, UUID> {
    List<NotificationEntity> findTop50ByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(String username);
}
