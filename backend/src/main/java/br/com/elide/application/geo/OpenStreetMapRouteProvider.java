package br.com.elide.application.geo;

import org.springframework.stereotype.Component;

@Component
public class OpenStreetMapRouteProvider implements RouteProvider {
    @Override
    public String provider() {
        return "OPEN_STREET_MAP";
    }

    @Override
    public RouteEstimate estimate(GeoPoint origin, GeoPoint destination) {
        var distance = Haversine.distanceMeters(origin, destination);
        return new RouteEstimate(provider(), distance, Math.max(300, distance / 7), "");
    }
}
