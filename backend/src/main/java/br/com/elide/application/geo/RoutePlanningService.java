package br.com.elide.application.geo;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoutePlanningService {
    private final List<RouteProvider> providers;

    public RoutePlanningService(List<RouteProvider> providers) {
        this.providers = providers;
    }

    public RouteEstimate estimate(String preferredProvider, GeoPoint origin, GeoPoint destination) {
        return providers.stream()
            .filter(provider -> preferredProvider != null && provider.provider().equalsIgnoreCase(preferredProvider))
            .findFirst()
            .orElseGet(() -> providers.stream().filter(provider -> provider.provider().equals("OPEN_STREET_MAP")).findFirst().orElse(providers.getFirst()))
            .estimate(origin, destination);
    }
}
