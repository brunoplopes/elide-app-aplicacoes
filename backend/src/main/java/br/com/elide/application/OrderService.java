package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.CreateOrderRequest;
import br.com.elide.application.dto.MarketplaceDtos.DeliveryQuoteResponse;
import br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonResponse;
import br.com.elide.application.dto.MarketplaceDtos.OrderItemResponse;
import br.com.elide.application.notification.NotificationService;
import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.application.dto.MarketplaceDtos.OrderResponse;
import br.com.elide.infrastructure.persistence.OrderEntity;
import br.com.elide.infrastructure.persistence.OrderItemAddonEntity;
import br.com.elide.infrastructure.persistence.OrderItemEntity;
import br.com.elide.infrastructure.persistence.repository.CouponRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.ProductAddonRepository;
import br.com.elide.infrastructure.persistence.repository.ProductRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class OrderService {
    private final UserRepository users;
    private final StoreRepository stores;
    private final ProductRepository products;
    private final ProductAddonRepository addons;
    private final OrderRepository orders;
    private final CouponRepository coupons;
    private final RabbitTemplate rabbitTemplate;
    private final NotificationService notifications;

    public OrderService(UserRepository users, StoreRepository stores, ProductRepository products, ProductAddonRepository addons, OrderRepository orders, CouponRepository coupons, RabbitTemplate rabbitTemplate, NotificationService notifications) {
        this.users = users;
        this.stores = stores;
        this.products = products;
        this.addons = addons;
        this.orders = orders;
        this.coupons = coupons;
        this.rabbitTemplate = rabbitTemplate;
        this.notifications = notifications;
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
            if (!product.getStore().getId().equals(store.getId())) {
                throw new IllegalArgumentException("Product does not belong to selected store: " + product.getName());
            }
            if (!product.isActive() || product.getStockQuantity() < item.quantity()) {
                throw new IllegalArgumentException("Product unavailable: " + product.getName());
            }
            var orderItem = new OrderItemEntity();
            orderItem.setOrder(order);
            orderItem.setProduct(product);
            orderItem.setQuantity(item.quantity());
            orderItem.setUnitPrice(product.getPrice());
            orderItem.setNote(item.note());
            applyAddons(orderItem, item.addons());
            var addonTotal = orderItem.getAddons().stream()
                .map(OrderItemAddonEntity::getTotal)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
            orderItem.setTotal(product.getPrice()
                .add(addonTotal)
                .multiply(BigDecimal.valueOf(item.quantity())));
            order.getItems().add(orderItem);
        });

        var subtotal = order.getItems().stream().map(OrderItemEntity::getTotal).reduce(BigDecimal.ZERO, BigDecimal::add);
        order.setSubtotal(subtotal);
        order.setDiscount(discount(request.couponCode(), subtotal));
        order.setTotal(subtotal.add(order.getDeliveryFee()).subtract(order.getDiscount()));
        var saved = orders.save(order);
        rabbitTemplate.convertAndSend("elide.orders", "order.created", saved.getId().toString());
        notifications.notify(customer, "Pedido criado", "Seu pedido foi criado e enviado para a loja.", "order.created", saved.getId());
        return response(saved);
    }

    public List<OrderResponse> myOrders() {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        return orders.findTop20ByCustomerUsernameOrderByCreatedAtDesc(username).stream().filter(order -> order.getDeletedAt() == null).map(this::response).toList();
    }

    public OrderResponse get(UUID orderId) {
        return response(ownedOrder(orderId));
    }

    @Transactional
    public OrderResponse cancel(UUID orderId, String reason) {
        var order = ownedOrder(orderId);
        if (!List.of(OrderStatus.CREATED, OrderStatus.ACCEPTED, OrderStatus.PREPARING).contains(order.getStatus())) {
            throw new IllegalArgumentException("Order cannot be cancelled at this status");
        }
        order.setStatus(OrderStatus.CANCELLED);
        var saved = orders.save(order);
        rabbitTemplate.convertAndSend("elide.orders", "order.cancelled", saved.getId().toString());
        notifications.notify(saved.getCustomer(), "Pedido cancelado", reason == null || reason.isBlank() ? "Seu pedido foi cancelado." : reason, "order.cancelled", saved.getId());
        return response(saved);
    }

    @Transactional
    public OrderResponse requestRefund(UUID orderId, String reason) {
        var order = ownedOrder(orderId);
        if (!List.of(OrderStatus.DELIVERED, OrderStatus.CANCELLED).contains(order.getStatus())) {
            throw new IllegalArgumentException("Refund can only be requested for delivered or cancelled orders");
        }
        order.setStatus(OrderStatus.REFUND_REQUESTED);
        var saved = orders.save(order);
        rabbitTemplate.convertAndSend("elide.orders", "order.refund_requested", saved.getId().toString());
        notifications.notify(saved.getCustomer(), "Reembolso solicitado", reason == null || reason.isBlank() ? "Recebemos sua solicitacao de reembolso." : reason, "order.refund_requested", saved.getId());
        return response(saved);
    }

    public DeliveryQuoteResponse quote(UUID storeId, BigDecimal subtotal) {
        var store = stores.findById(storeId).orElseThrow();
        var fee = store.getDeliveryFee();
        var distance = 1800 + Math.max(0, subtotal == null ? 0 : subtotal.intValue()) * 8;
        return new DeliveryQuoteResponse(fee, distance, Math.max(8, distance / 240), "OPEN_STREET_MAP_READY");
    }

    private OrderResponse response(OrderEntity order) {
        return new OrderResponse(
            order.getId(),
            order.getStatus(),
            order.getSubtotal(),
            order.getDeliveryFee(),
            order.getDiscount(),
            order.getTotal(),
            order.getItems().stream().map(this::itemResponse).toList()
        );
    }

    private OrderItemResponse itemResponse(OrderItemEntity item) {
        return new OrderItemResponse(
            item.getProduct().getId(),
            item.getProduct().getName(),
            item.getQuantity(),
            item.getUnitPrice(),
            item.getTotal(),
            item.getNote(),
            item.getAddons().stream().map(this::addonResponse).toList()
        );
    }

    private OrderItemAddonResponse addonResponse(OrderItemAddonEntity addon) {
        return new OrderItemAddonResponse(
            addon.getProductAddon().getId(),
            addon.getName(),
            addon.getQuantity(),
            addon.getUnitPrice(),
            addon.getTotal()
        );
    }

    private void applyAddons(OrderItemEntity item, List<br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonRequest> requestedAddons) {
        var requested = requestedAddons == null ? List.<br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonRequest>of() : requestedAddons;
        var requestedById = requested.stream()
            .collect(Collectors.toMap(
                br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonRequest::addonId,
                Function.identity(),
                (left, right) -> new br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonRequest(left.addonId(), left.quantity() + right.quantity())
            ));
        var productAddons = addons.findByProductIdAndDeletedAtIsNullOrderByNameAsc(item.getProduct().getId());
        var productAddonsById = productAddons.stream().collect(Collectors.toMap(br.com.elide.infrastructure.persistence.ProductAddonEntity::getId, Function.identity()));

        for (var addon : productAddons) {
            if (addon.isRequired() && !requestedById.containsKey(addon.getId())) {
                throw new IllegalArgumentException("Required addon missing: " + addon.getName());
            }
        }
        for (Map.Entry<UUID, br.com.elide.application.dto.MarketplaceDtos.OrderItemAddonRequest> entry : requestedById.entrySet()) {
            var addon = productAddonsById.get(entry.getKey());
            if (addon == null) {
                throw new IllegalArgumentException("Addon does not belong to product");
            }
            var quantity = entry.getValue().quantity();
            if (quantity > addon.getMaxQuantity()) {
                throw new IllegalArgumentException("Addon quantity exceeds limit: " + addon.getName());
            }
            var orderAddon = new OrderItemAddonEntity();
            orderAddon.setOrderItem(item);
            orderAddon.setProductAddon(addon);
            orderAddon.setName(addon.getName());
            orderAddon.setQuantity(quantity);
            orderAddon.setUnitPrice(addon.getPrice());
            orderAddon.setTotal(addon.getPrice().multiply(BigDecimal.valueOf(quantity)));
            item.getAddons().add(orderAddon);
        }
    }

    private OrderEntity ownedOrder(UUID orderId) {
        var username = SecurityContextHolder.getContext().getAuthentication().getName();
        var order = orders.findById(orderId).orElseThrow();
        if (!order.getCustomer().getUsername().equals(username)) {
            throw new IllegalArgumentException("Order does not belong to current user");
        }
        return order;
    }

    private BigDecimal discount(String couponCode, BigDecimal subtotal) {
        if (couponCode == null || couponCode.isBlank()) {
            return BigDecimal.ZERO;
        }
        return coupons.findByCodeIgnoreCaseAndActiveTrueAndDeletedAtIsNull(couponCode.trim())
            .map(coupon -> coupon.getDiscountValue().min(subtotal))
            .orElse(BigDecimal.ZERO);
    }
}
