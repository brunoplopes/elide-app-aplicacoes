package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.CreateOrderRequest;
import br.com.elide.application.dto.MarketplaceDtos.OrderResponse;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.OrderItemEntity;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.ProductRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {
    private final UserRepository users;
    private final StoreRepository stores;
    private final ProductRepository products;
    private final OrderRepository orders;
    private final RabbitTemplate rabbitTemplate;

    public OrderService(UserRepository users, StoreRepository stores, ProductRepository products, OrderRepository orders, RabbitTemplate rabbitTemplate) {
        this.users = users;
        this.stores = stores;
        this.products = products;
        this.orders = orders;
        this.rabbitTemplate = rabbitTemplate;
    }

    @Transactional
    public OrderResponse create(CreateOrderRequest request) {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        var customer = users.findByUsername(username).orElseThrow();
        var store = stores.findById(request.storeId()).orElseThrow();
        var order = new OrderEntity();
        order.setCustomer(customer);
        order.setStore(store);
        order.setPaymentMethod(request.paymentMethod());
        order.setDeliveryFee(store.getDeliveryFee());

        request.items().forEach(item -> {
            var product = products.findById(item.productId()).orElseThrow();
            if (!product.isActive() || product.getStockQuantity() < item.quantity()) {
                throw new IllegalArgumentException("Product unavailable: " + product.getName());
            }
            var orderItem = new OrderItemEntity();
            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setQuantity(item.quantity());
            orderItem.setUnitPrice(product.getPrice());
            orderItem.setTotal(product.getPrice().multiply(BigDecimal.valueOf(item.quantity())));
            orderItem.setNote(item.note());
            order.getItems().add(orderItem);
        });

        var subtotal = order.getItems().stream().map(OrderItemEntity::getTotal).reduce(BigDecimal.ZERO, BigDecimal::add);
        order.setSubtotal(subtotal);
        order.setDiscount(BigDecimal.ZERO);
        order.setTotal(subtotal.add(order.getDeliveryFee()).subtract(order.getDiscount()));
        var saved = orders.save(order);
        rabbitTemplate.convertAndSend("elide.orders", "order.created", saved.getId().toString());
        return response(saved);
    }

    public List<OrderResponse> myOrders() {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        return orders.findTop20ByCustomerUsernameOrderByCreatedAtDesc(username).stream().map(this::response).toList();
    }

    private OrderResponse response(OrderEntity order) {
        return new OrderResponse(order.getId(), order.getStatus(), order.getSubtotal(), order.getDeliveryFee(), order.getDiscount(), order.getTotal());
    }
}
