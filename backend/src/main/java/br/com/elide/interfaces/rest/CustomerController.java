package br.com.elide.interfaces.rest;

import br.com.elide.application.CustomerService;
import br.com.elide.application.dto.CustomerDtos.CustomerAddressRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerAddressResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerCardRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerCashPreference;
import br.com.elide.application.dto.CustomerDtos.CustomerCouponResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerFavoriteResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerNotificationResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerPaymentMethodResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerPixRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerPixResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerProfileRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerProfileResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerReviewRequest;
import br.com.elide.application.dto.CustomerDtos.CustomerReviewResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerSummaryResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerTrackingResponse;
import br.com.elide.application.dto.CustomerDtos.CustomerWalletResponse;
import br.com.elide.application.dto.CustomerDtos.FavoriteRequest;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {
    private final CustomerService customers;

    public CustomerController(CustomerService customers) {
        this.customers = customers;
    }

    @GetMapping("/profile")
    public CustomerProfileResponse profile() {
        return customers.profile();
    }

    @PutMapping("/profile")
    public CustomerProfileResponse updateProfile(@Valid @RequestBody CustomerProfileRequest request) {
        return customers.updateProfile(request);
    }

    @GetMapping("/summary")
    public CustomerSummaryResponse summary() {
        return customers.summary();
    }

    @GetMapping("/addresses")
    public List<CustomerAddressResponse> addresses() {
        return customers.addresses();
    }

    @PostMapping("/addresses")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerAddressResponse createAddress(@Valid @RequestBody CustomerAddressRequest request) {
        return customers.createAddress(request);
    }

    @PutMapping("/addresses/{addressId}")
    public CustomerAddressResponse updateAddress(@PathVariable UUID addressId, @Valid @RequestBody CustomerAddressRequest request) {
        return customers.updateAddress(addressId, request);
    }

    @DeleteMapping("/addresses/{addressId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAddress(@PathVariable UUID addressId) {
        customers.deleteAddress(addressId);
    }

    @GetMapping("/favorites")
    public List<CustomerFavoriteResponse> favorites() {
        return customers.favorites();
    }

    @PostMapping("/favorites")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerFavoriteResponse addFavorite(@Valid @RequestBody FavoriteRequest request) {
        return customers.addFavorite(request.storeId());
    }

    @DeleteMapping("/favorites/{storeId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeFavorite(@PathVariable UUID storeId) {
        customers.removeFavorite(storeId);
    }

    @GetMapping("/coupons")
    public List<CustomerCouponResponse> coupons() {
        return customers.coupons();
    }

    @GetMapping("/wallet")
    public CustomerWalletResponse wallet() {
        return customers.wallet();
    }

    @GetMapping("/reviews")
    public List<CustomerReviewResponse> reviews() {
        return customers.reviews();
    }

    @PostMapping("/reviews")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerReviewResponse createReview(@Valid @RequestBody CustomerReviewRequest request) {
        return customers.createReview(request);
    }

    @GetMapping("/notifications")
    public List<CustomerNotificationResponse> notifications() {
        return customers.notifications();
    }

    @PatchMapping("/notifications/{notificationId}/read")
    public CustomerNotificationResponse markNotificationRead(@PathVariable UUID notificationId) {
        return customers.markNotificationRead(notificationId);
    }

    @GetMapping("/payments")
    public List<CustomerPaymentMethodResponse> paymentMethods() {
        return customers.paymentMethods();
    }

    @PostMapping("/payments/cards")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerPaymentMethodResponse saveCard(@Valid @RequestBody CustomerCardRequest request) {
        return customers.saveCard(request);
    }

    @PutMapping("/payments/cash")
    public CustomerCashPreference saveCashPreference(@Valid @RequestBody CustomerCashPreference request) {
        return customers.saveCashPreference(request);
    }

    @PostMapping("/payments/pix")
    public CustomerPixResponse generatePix(@Valid @RequestBody CustomerPixRequest request) {
        return customers.generatePix(request.orderId());
    }

    @GetMapping("/tracking/latest")
    public CustomerTrackingResponse latestTracking() {
        return customers.tracking(null);
    }

    @GetMapping("/tracking/{orderId}")
    public CustomerTrackingResponse tracking(@PathVariable UUID orderId) {
        return customers.tracking(orderId);
    }
}
