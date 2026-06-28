package br.com.elide.interfaces.rest;

import br.com.elide.application.AdminDashboardService;
import br.com.elide.application.dto.MarketplaceDtos.DashboardResponse;
import br.com.elide.infrastructure.persistence.repository.StoreRepository;
import br.com.elide.infrastructure.persistence.repository.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/admin")
public class AdminController {
    private final AdminDashboardService dashboardService;
    private final UserRepository users;
    private final StoreRepository stores;

    public AdminController(AdminDashboardService dashboardService, UserRepository users, StoreRepository stores) {
        this.dashboardService = dashboardService;
        this.users = users;
        this.stores = stores;
    }

    @GetMapping("/dashboard")
    public DashboardResponse dashboard() {
        return dashboardService.dashboard();
    }

    @GetMapping("/overview")
    public Map<String, Object> overview() {
        return Map.of("users", users.count(), "stores", stores.count(), "financeReady", true, "auditReady", true);
    }

    @GetMapping("/master-only")
    @PreAuthorize("hasRole('MASTER_ADMIN')")
    public Map<String, String> masterOnly() {
        return Map.of("status", "MASTER_ADMIN access granted");
    }
}

