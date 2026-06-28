package br.com.elide.interfaces.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/courier")
public class CourierController {
    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {
        return Map.of("deliveries", 0, "dailyEarnings", 0, "monthlyEarnings", 0, "averageDeliveryTime", 0);
    }

    @PatchMapping("/availability")
    public Map<String, String> availability() {
        return Map.of("status", "availability updated");
    }
}

