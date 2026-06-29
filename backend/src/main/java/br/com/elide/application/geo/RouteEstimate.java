package br.com.elide.application.geo;

public record RouteEstimate(String provider, int distanceMeters, int estimatedSeconds, String encodedPolyline) {
}
