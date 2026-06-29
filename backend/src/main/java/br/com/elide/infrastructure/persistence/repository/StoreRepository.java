package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.StoreEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface StoreRepository extends JpaRepository<StoreEntity, UUID> {
    Page<StoreEntity> findByStatusAndDeletedAtIsNull(StoreStatus status, Pageable pageable);

    @Query("""
        select store from StoreEntity store
        where store.status = :status
          and store.deletedAt is null
          and lower(store.segment) like lower(concat('%', :segment, '%'))
        """)
    Page<StoreEntity> searchApprovedBySegment(@Param("status") StoreStatus status, @Param("segment") String segment, Pageable pageable);

    @Query("""
        select store from StoreEntity store
        where store.status = :status
          and store.deletedAt is null
          and (lower(store.name) like lower(concat('%', :query, '%')) or lower(store.segment) like lower(concat('%', :query, '%')))
        """)
    Page<StoreEntity> searchApprovedByQuery(@Param("status") StoreStatus status, @Param("query") String query, Pageable pageable);

    @Query("""
        select store from StoreEntity store
        where store.status = :status
          and store.deletedAt is null
          and lower(store.segment) like lower(concat('%', :segment, '%'))
          and (lower(store.name) like lower(concat('%', :query, '%')) or lower(store.segment) like lower(concat('%', :query, '%')))
        """)
    Page<StoreEntity> searchApprovedBySegmentAndQuery(@Param("status") StoreStatus status, @Param("segment") String segment, @Param("query") String query, Pageable pageable);

    Optional<StoreEntity> findFirstByOwnerUsernameAndDeletedAtIsNullOrderByCreatedAtAsc(String username);

    long countByStatus(StoreStatus status);

    long countByOpenTrue();
}
