package br.com.elide.application.geo;

public interface RouteProvider {
    String provider();

    RouteEstimate estimate(GeoPoint origin, GeoPoint destination);
}
