package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.AddressEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface AddressRepository extends JpaRepository<AddressEntity, UUID> {
    List<AddressEntity> findByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(String username);
}
