package br.com.elide.infrastructure.persistence.repository;

import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.infrastructure.persistence.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<OrderEntity, UUID> {
    List<OrderEntity> findTop20ByCustomerUsernameOrderByCreatedAtDesc(String username);

    long countByStatus(OrderStatus status);

    @Query(value = "select coalesce(sum(total), 0) from orders where status = 'DELIVERED'", nativeQuery = true)
    BigDecimal sumDeliveredRevenue();
}
