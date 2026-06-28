package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.infrastructure.persistence.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<OrderEntity, UUID> {
    List<OrderEntity> findTop20ByCustomerUsernameOrderByCreatedAtDesc(String username);

    List<OrderEntity> findTop50ByStoreIdAndDeletedAtIsNullOrderByCreatedAtDesc(UUID storeId);

    List<OrderEntity> findByStoreIdAndStatusAndDeletedAtIsNullOrderByCreatedAtDesc(UUID storeId, OrderStatus status);

    long countByStatus(OrderStatus status);

    long countByStoreIdAndDeletedAtIsNull(UUID storeId);

    long countByStoreIdAndCreatedAtBetweenAndDeletedAtIsNull(UUID storeId, Instant from, Instant to);

    @Query(value = "select coalesce(sum(total), 0) from orders where status = 'DELIVERED'", nativeQuery = true)
    BigDecimal sumDeliveredRevenue();

    @Query("select coalesce(sum(o.total), 0) from OrderEntity o where o.store.id = :storeId and o.createdAt between :from and :to and o.deletedAt is null")
    BigDecimal sumStoreRevenueBetween(@Param("storeId") UUID storeId, @Param("from") Instant from, @Param("to") Instant to);

    @Query(value = "select coalesce(sum(total), 0) from orders where store_id = :storeId and status = 'DELIVERED' and deleted_at is null", nativeQuery = true)
    BigDecimal sumStoreDeliveredRevenue(@Param("storeId") UUID storeId);

    @Query("select count(o) from OrderEntity o where o.store.id = :storeId and o.status = :status and o.deletedAt is null")
    long countByStoreAndStatus(@Param("storeId") UUID storeId, @Param("status") OrderStatus status);

    @Query(value = "select coalesce(avg(total), 0) from orders where store_id = :storeId and deleted_at is null", nativeQuery = true)
    BigDecimal averageTicketByStore(@Param("storeId") UUID storeId);
}
