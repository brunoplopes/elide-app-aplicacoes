package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.StoreEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface StoreRepository extends JpaRepository<StoreEntity, UUID> {
    Page<StoreEntity> findByStatusAndDeletedAtIsNull(StoreStatus status, Pageable pageable);

    Optional<StoreEntity> findFirstByOwnerUsernameAndDeletedAtIsNullOrderByCreatedAtAsc(String username);

    long countByStatus(StoreStatus status);

    long countByOpenTrue();
}
