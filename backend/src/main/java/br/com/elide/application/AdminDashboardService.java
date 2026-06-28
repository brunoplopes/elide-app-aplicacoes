package br.com.elide.application;

import br.com.elide.application.dto.MarketplaceDtos.DashboardResponse;
import br.com.elide.application.dto.MarketplaceDtos.StatusMetric;
import br.com.elide.domain.model.Enums.CourierStatus;
import br.com.elide.domain.model.Enums.OrderStatus;
import br.com.elide.domain.model.Enums.StoreStatus;
import br.com.elide.infrastructure.persistence.repository.CourierRepository;
import br.com.elide.infrastructure.persistence.repository.OrderRepository;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class AdminDashboardService {
    private final OrderRepository orders;
    private final UserRepository users;
    private final StoreRepository stores;
    private final CourierRepository couriers;

    public AdminDashboardService(OrderRepository orders, UserRepository users, StoreRepository stores, CourierRepository couriers) {
        this.orders = orders;
        this.users = users;
        this.stores = stores;
        this.couriers = couriers;
    }

    public DashboardResponse dashboard() {
        var statusMetrics = Arrays.stream(OrderStatus.values())
            .map(status -> new StatusMetric(status.name(), orders.countByStatus(status)))
            .toList();
        return new DashboardResponse(
            orders.sumDeliveredRevenue(),
            orders.count(),
            users.count(),
            stores.countByStatus(StoreStatus.APPROVED),
            couriers.countByStatus(CourierStatus.AVAILABLE),
            statusMetrics
        );
    }
}

