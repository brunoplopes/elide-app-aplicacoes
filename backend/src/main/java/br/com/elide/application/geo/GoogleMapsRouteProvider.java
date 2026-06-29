package br.com.elide.application.geo;

import org.springframework.stereotype.Component;

@Component
public class GoogleMapsRouteProvider implements RouteProvider {
    @Override
    public String provider() {
        return "GOOGLE_MAPS";
    }

    @Override
    public RouteEstimate estimate(GeoPoint origin, GeoPoint destination) {
        var distance = Haversine.distanceMeters(origin, destination);
        return new RouteEstimate(provider(), distance, Math.max(240, distance / 8), "");
    }
}
