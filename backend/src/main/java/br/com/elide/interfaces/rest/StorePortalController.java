package br.com.elide.interfaces.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/store")
public class StorePortalController {
    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {
        return Map.of("sales", 0, "averageTicket", 0, "topProducts", 0, "ordersByStatus", Map.of());
    }
}

