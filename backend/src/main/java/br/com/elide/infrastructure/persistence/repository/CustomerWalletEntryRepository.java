package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CustomerWalletEntryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CustomerWalletEntryRepository extends JpaRepository<CustomerWalletEntryEntity, UUID> {
    List<CustomerWalletEntryEntity> findTop50ByUserUsernameAndDeletedAtIsNullOrderByCreatedAtDesc(String username);
}
