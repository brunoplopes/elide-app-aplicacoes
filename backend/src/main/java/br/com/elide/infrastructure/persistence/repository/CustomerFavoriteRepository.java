package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CustomerFavoriteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CustomerFavoriteRepository extends JpaRepository<CustomerFavoriteEntity, UUID> {
    List<CustomerFavoriteEntity> findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(String username);

    Optional<CustomerFavoriteEntity> findByUserUsernameAndStoreIdAndDeletedAtIsNull(String username, UUID storeId);

    long countByUserUsernameAndDeletedAtIsNull(String username);
}
