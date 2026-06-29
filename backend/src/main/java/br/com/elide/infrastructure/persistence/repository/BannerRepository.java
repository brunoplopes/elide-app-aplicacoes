package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.OperationalEntities.BannerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BannerRepository extends JpaRepository<BannerEntity, UUID> {
}
