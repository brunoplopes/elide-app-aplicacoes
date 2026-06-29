package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.OperationalEntities.CouponEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CouponRepository extends JpaRepository<CouponEntity, UUID> {
    List<CouponEntity> findByActiveTrueAndDeletedAtIsNullOrderByCodeAsc();
}
