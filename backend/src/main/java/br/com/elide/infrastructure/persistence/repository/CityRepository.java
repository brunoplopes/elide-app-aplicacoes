package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.CityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CityRepository extends JpaRepository<CityEntity, UUID> {
}

