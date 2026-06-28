package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.infrastructure.persistence.ReviewEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ReviewRepository extends JpaRepository<ReviewEntity, UUID> {
    List<ReviewEntity> findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID storeId);

    @Query("select coalesce(avg(r.rating), 0) from ReviewEntity r where r.store.id = :storeId and r.deletedAt is null")
    Double averageRatingByStore(@Param("storeId") UUID storeId);
}
