package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.StoreEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
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

    @Query(value = """
        select
          s.id as id,
          s.name as name,
          s.segment as segment,
          s.delivery_fee as "deliveryFee",
          s.minimum_order as "minimumOrder",
          s.open as open,
          s.latitude as latitude,
          s.longitude as longitude,
          st_distance(
            s.location,
            st_setsrid(st_makepoint(cast(:longitude as double precision), cast(:latitude as double precision)), 4326)::geography
          ) as "distanceMeters"
        from stores s
        where s.deleted_at is null
          and s.status = 'ACTIVE'
          and s.open = true
          and st_dwithin(
            s.location,
            st_setsrid(st_makepoint(cast(:longitude as double precision), cast(:latitude as double precision)), 4326)::geography,
            cast(:radiusMeters as double precision)
          )
        order by
          s.location <-> st_setsrid(st_makepoint(cast(:longitude as double precision), cast(:latitude as double precision)), 4326)::geography
        limit :limit
        """, nativeQuery = true)
    java.util.List<NearbyStoreProjection> findNearby(
        @Param("latitude") BigDecimal latitude,
        @Param("longitude") BigDecimal longitude,
        @Param("radiusMeters") int radiusMeters,
        @Param("limit") int limit
    );

    @Query(value = """
        select
          s.id as id,
          s.name as name,
          s.segment as segment,
          s.delivery_fee as "deliveryFee",
          s.minimum_order as "minimumOrder",
          s.open as open,
          s.latitude as latitude,
          s.longitude as longitude,
          st_distance(
            s.location,
            st_setsrid(st_makepoint(cast(:longitude as double precision), cast(:latitude as double precision)), 4326)::geography
          ) as "distanceMeters"
        from stores s
        join store_categories sc on sc.store_id = s.id
        where s.deleted_at is null
          and s.status = 'ACTIVE'
          and s.open = true
          and sc.category_id = :categoryId
          and st_dwithin(
            s.location,
            st_setsrid(st_makepoint(cast(:longitude as double precision), cast(:latitude as double precision)), 4326)::geography,
            cast(:radiusMeters as double precision)
          )
        order by
          s.location <-> st_setsrid(st_makepoint(cast(:longitude as double precision), cast(:latitude as double precision)), 4326)::geography
        limit :limit
        """, nativeQuery = true)
    java.util.List<NearbyStoreProjection> findNearbyByCategory(
        @Param("latitude") BigDecimal latitude,
        @Param("longitude") BigDecimal longitude,
        @Param("radiusMeters") int radiusMeters,
        @Param("limit") int limit,
        @Param("categoryId") UUID categoryId
    );

    Optional<StoreEntity> findFirstByOwnerUsernameAndDeletedAtIsNullOrderByCreatedAtAsc(String username);

    long countByStatus(StoreStatus status);

    long countByOpenTrue();

    interface NearbyStoreProjection {
        UUID getId();

        String getName();

        String getSegment();

        BigDecimal getDeliveryFee();

        BigDecimal getMinimumOrder();

        boolean isOpen();

        BigDecimal getLatitude();

        BigDecimal getLongitude();

        BigDecimal getDistanceMeters();
    }
}
