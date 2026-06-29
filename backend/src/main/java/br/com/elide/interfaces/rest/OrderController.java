package br.com.elide.interfaces.rest;

import br.com.elide.application.OrderService;
import br.com.elide.application.dto.MarketplaceDtos.CreateOrderRequest;
import br.com.elide.application.dto.MarketplaceDtos.DeliveryQuoteRequest;
import br.com.elide.application.dto.MarketplaceDtos.DeliveryQuoteResponse;
import br.com.elide.application.dto.MarketplaceDtos.OrderActionRequest;
import br.com.elide.application.dto.MarketplaceDtos.OrderResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public OrderResponse create(@Valid @RequestBody CreateOrderRequest request) {
        return orderService.create(request);
    }

    @GetMapping("/mine")
    public List<OrderResponse> mine() {
        return orderService.myOrders();
    }

    @GetMapping("/{orderId}")
    public OrderResponse get(@PathVariable UUID orderId) {
        return orderService.get(orderId);
    }

    @PatchMapping("/{orderId}/cancel")
    public OrderResponse cancel(@PathVariable UUID orderId, @RequestBody(required = false) OrderActionRequest request) {
        return orderService.cancel(orderId, request == null ? null : request.reason());
    }

    @PostMapping("/{orderId}/refund")
    public OrderResponse requestRefund(@PathVariable UUID orderId, @RequestBody(required = false) OrderActionRequest request) {
        return orderService.requestRefund(orderId, request == null ? null : request.reason());
    }

    @PostMapping("/delivery-quote")
    public DeliveryQuoteResponse deliveryQuote(@Valid @RequestBody DeliveryQuoteRequest request) {
        return orderService.quote(request.storeId(), request.subtotal());
    }
}
