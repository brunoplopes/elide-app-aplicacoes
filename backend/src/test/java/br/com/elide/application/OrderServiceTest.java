package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.CreateOrderItemRequest;
import br.com.elide.application.dto.MarketplaceDtos.CreateOrderRequest;
import br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonRequest;
import br.com.elide.application.notification.NotificationService;
import br.com.elide.domain.model.Enums.PaymentMethod;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.ProductAddonEntity;
import br.com.elide.infrastructure.persistence.ProductEntity;
import br.com.elide.infrastructure.persistence.StoreEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.CouponRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.ProductAddonRepository;
import br.com.elide.infrastructure.persistence.repository.ProductRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class OrderServiceTest {
    @AfterEach
    void clearSecurityContext() {
        SecurityContextHolder.clearContext();
    }

    @Test
    void createsOrderWithItemNotesAndAddonsInTotals() {
        var users = mock(UserRepository.class);
        var stores = mock(StoreRepository.class);
        var products = mock(ProductRepository.class);
        var addons = mock(ProductAddonRepository.class);
        var orders = mock(OrderRepository.class);
        var coupons = mock(CouponRepository.class);
        var rabbitTemplate = mock(RabbitTemplate.class);
        var notifications = mock(NotificationService.class);
        var service = new OrderService(users, stores, products, addons, orders, coupons, rabbitTemplate, notifications);

        var customer = new UserEntity();
        customer.setId(UUID.randomUUID());
        customer.setUsername("cliente");
        customer.setFullName("Cliente ELIDE");
        var store = new StoreEntity();
        store.setId(UUID.randomUUID());
        store.setName("Restaurante ELIDE");
        store.setDeliveryFee(new BigDecimal("5.00"));
        var product = new ProductEntity();
        product.setId(UUID.randomUUID());
        product.setStore(store);
        product.setName("Combo");
        product.setDescription("Combo completo");
        product.setPrice(new BigDecimal("20.00"));
        product.setStockQuantity(10);
        product.setActive(true);
        var addon = new ProductAddonEntity();
        addon.setId(UUID.randomUUID());
        addon.setProduct(product);
        addon.setName("Queijo extra");
        addon.setPrice(new BigDecimal("3.00"));
        addon.setMaxQuantity(3);

        SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken("cliente", "secret"));
        when(users.findByUsername("cliente")).thenReturn(Optional.of(customer));
        when(stores.findById(store.getId())).thenReturn(Optional.of(store));
        when(products.findById(product.getId())).thenReturn(Optional.of(product));
        when(addons.findByProductIdAndDeletedAtIsNullOrderByNameAsc(product.getId())).thenReturn(List.of(addon));
        when(orders.save(any(OrderEntity.class))).thenAnswer(invocation -> {
            var order = invocation.<OrderEntity>getArgument(0);
            order.setId(UUID.randomUUID());
            return order;
        });

        var response = service.create(new CreateOrderRequest(
            store.getId(),
            null,
            null,
            PaymentMethod.PIX,
            List.of(new CreateOrderItemRequest(product.getId(), 2, "Sem cebola", List.of(new OrderItemAddonRequest(addon.getId(), 2))))
        ));

        assertThat(response.subtotal()).isEqualByComparingTo("52.00");
        assertThat(response.deliveryFee()).isEqualByComparingTo("5.00");
        assertThat(response.total()).isEqualByComparingTo("57.00");
        assertThat(response.items()).hasSize(1);
        assertThat(response.items().getFirst().note()).isEqualTo("Sem cebola");
        assertThat(response.items().getFirst().addons()).singleElement().satisfies(itemAddon -> {
            assertThat(itemAddon.name()).isEqualTo("Queijo extra");
            assertThat(itemAddon.quantity()).isEqualTo(2);
            assertThat(itemAddon.total()).isEqualByComparingTo("6.00");
        });
    }
}
