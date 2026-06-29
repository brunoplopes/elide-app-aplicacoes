package br.com.elide.application.geo;

final class Haversine {
    private Haversine() {
    }

    static int distanceMeters(GeoPoint origin, GeoPoint destination) {
        if (origin == null || destination == null || origin.latitude() == null || origin.longitude() == null || destination.latitude() == null || destination.longitude() == null) {
            return 1800;
        }
        var earthRadius = 6_371_000d;
        var lat1 = Math.toRadians(origin.latitude().doubleValue());
        var lat2 = Math.toRadians(destination.latitude().doubleValue());
        var deltaLat = Math.toRadians(destination.latitude().doubleValue() - origin.latitude().doubleValue());
        var deltaLon = Math.toRadians(destination.longitude().doubleValue() - origin.longitude().doubleValue());
        var a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2)
            + Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
        return (int) Math.round(earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    }
}
