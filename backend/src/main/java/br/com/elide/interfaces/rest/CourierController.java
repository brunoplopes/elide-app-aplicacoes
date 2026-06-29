package br.com.elide.interfaces.rest;

import br.com.elide.application.CourierService;
import br.com.elide.application.dto.CourierDtos.CourierApprovalRequest;
import br.com.elide.application.dto.CourierDtos.CourierAvailabilityRequest;
import br.com.elide.application.dto.CourierDtos.CourierDashboardResponse;
import br.com.elide.application.dto.CourierDtos.CourierDeclineRequest;
import br.com.elide.application.dto.CourierDtos.CourierDeliveryResponse;
import br.com.elide.application.dto.CourierDtos.CourierDeliveryStatusRequest;
import br.com.elide.application.dto.CourierDtos.CourierDocumentRequest;
import br.com.elide.application.dto.CourierDtos.CourierDocumentResponse;
import br.com.elide.application.dto.CourierDtos.CourierEarningsResponse;
import br.com.elide.application.dto.CourierDtos.CourierLocationRequest;
import br.com.elide.application.dto.CourierDtos.CourierLocationResponse;
import br.com.elide.application.dto.CourierDtos.CourierMapResponse;
import br.com.elide.application.dto.CourierDtos.CourierProfileResponse;
import br.com.elide.application.dto.CourierDtos.CourierSignupRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/courier")
public class CourierController {
    private final CourierService couriers;

    public CourierController(CourierService couriers) {
        this.couriers = couriers;
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED)
    public CourierProfileResponse signup(@Valid @RequestBody CourierSignupRequest request) {
        return couriers.signup(request);
    }

    @GetMapping("/profile")
    public CourierProfileResponse profile() {
        return couriers.profile();
    }

    @PostMapping("/documents")
    @ResponseStatus(HttpStatus.CREATED)
    public CourierDocumentResponse sendDocument(@Valid @RequestBody CourierDocumentRequest request) {
        return couriers.sendDocument(request);
    }

    @GetMapping("/documents")
    public List<CourierDocumentResponse> documents() {
        return couriers.documents();
    }

    @PatchMapping("/admin/couriers/{courierId}/approval")
    @PreAuthorize("hasAnyRole('ADMIN', 'MASTER_ADMIN')")
    public CourierProfileResponse approveCourier(@PathVariable UUID courierId, @Valid @RequestBody CourierApprovalRequest request) {
        return couriers.approveCourier(courierId, request);
    }

    @PatchMapping("/availability")
    public CourierProfileResponse availability(@Valid @RequestBody CourierAvailabilityRequest request) {
        return couriers.availability(request);
    }

    @PostMapping("/location")
    public CourierLocationResponse updateLocation(@Valid @RequestBody CourierLocationRequest request) {
        return couriers.updateLocation(request);
    }

    @GetMapping("/map")
    public CourierMapResponse map() {
        return couriers.map();
    }

    @GetMapping("/rides/available")
    public List<CourierDeliveryResponse> availableRides() {
        return couriers.availableRides();
    }

    @PostMapping("/rides/{orderId}/accept")
    public CourierDeliveryResponse acceptRide(@PathVariable UUID orderId) {
        return couriers.acceptRide(orderId);
    }

    @PostMapping("/rides/{orderId}/decline")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void declineRide(@PathVariable UUID orderId, @Valid @RequestBody CourierDeclineRequest request) {
        couriers.declineRide(orderId, request);
    }

    @PatchMapping("/deliveries/{orderId}/status")
    public CourierDeliveryResponse updateDeliveryStatus(@PathVariable UUID orderId, @Valid @RequestBody CourierDeliveryStatusRequest request) {
        return couriers.updateDeliveryStatus(orderId, request);
    }

    @GetMapping("/deliveries/history")
    public List<CourierDeliveryResponse> deliveryHistory() {
        return couriers.deliveryHistory();
    }

    @GetMapping("/earnings")
    public CourierEarningsResponse earnings() {
        return couriers.earnings();
    }

    @GetMapping("/dashboard")
    public CourierDashboardResponse dashboard() {
        return couriers.dashboard();
    }
}
