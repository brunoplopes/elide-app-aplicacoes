import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
const API_URL = 'http://localhost:8080/api/v1';
const emptyPage = () => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });
export class CustomerApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    }
    profile() {
        return this.http.get(`${API_URL}/customer/profile`);
    }
    updateProfile(payload) {
        return this.http.put(`${API_URL}/customer/profile`, payload);
    }
    summary() {
        if (!this.isBrowser) {
            return of({ orders: 0, activeCoupons: 0, walletBalance: 0, favorites: 0 });
        }
        return this.http.get(`${API_URL}/customer/summary`);
    }
    addresses() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/customer/addresses`);
    }
    createAddress(payload) {
        return this.http.post(`${API_URL}/customer/addresses`, payload);
    }
    updateAddress(addressId, payload) {
        return this.http.put(`${API_URL}/customer/addresses/${addressId}`, payload);
    }
    deleteAddress(addressId) {
        return this.http.delete(`${API_URL}/customer/addresses/${addressId}`);
    }
    favorites() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/customer/favorites`);
    }
    addFavorite(storeId) {
        return this.http.post(`${API_URL}/customer/favorites`, { storeId });
    }
    removeFavorite(storeId) {
        return this.http.delete(`${API_URL}/customer/favorites/${storeId}`);
    }
    coupons() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/customer/coupons`);
    }
    wallet() {
        if (!this.isBrowser) {
            return of({ balance: 0, entries: [] });
        }
        return this.http.get(`${API_URL}/customer/wallet`);
    }
    reviews() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/customer/reviews`);
    }
    createReview(payload) {
        return this.http.post(`${API_URL}/customer/reviews`, payload);
    }
    notifications() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/customer/notifications`);
    }
    markNotificationRead(notificationId) {
        return this.http.patch(`${API_URL}/customer/notifications/${notificationId}/read`, {});
    }
    paymentMethods() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/customer/payments`);
    }
    saveCard(payload) {
        return this.http.post(`${API_URL}/customer/payments/cards`, payload);
    }
    saveCashPreference(payload) {
        return this.http.put(`${API_URL}/customer/payments/cash`, payload);
    }
    generatePix(orderId) {
        return this.http.post(`${API_URL}/customer/payments/pix`, { orderId });
    }
    tracking(orderId) {
        const suffix = orderId ? `/${orderId}` : '/latest';
        return this.http.get(`${API_URL}/customer/tracking${suffix}`);
    }
    stores(filters) {
        if (!this.isBrowser) {
            return of(emptyPage());
        }
        let params = new HttpParams().set('size', String(filters?.size ?? 12));
        if (filters?.segment) {
            params = params.set('segment', filters.segment);
        }
        if (filters?.q) {
            params = params.set('q', filters.q);
        }
        return this.http.get(`${API_URL}/catalog/stores`, { params });
    }
    products(storeId) {
        if (!this.isBrowser) {
            return of(emptyPage());
        }
        return this.http.get(`${API_URL}/catalog/stores/${storeId}/products?size=20`);
    }
    searchProducts(q) {
        if (!this.isBrowser) {
            return of(emptyPage());
        }
        let params = new HttpParams().set('size', '20');
        if (q) {
            params = params.set('q', q);
        }
        return this.http.get(`${API_URL}/catalog/products`, { params });
    }
    searchCatalog(q, size = 20) {
        if (!this.isBrowser) {
            return of({ stores: emptyPage(), products: emptyPage(), categories: [] });
        }
        let params = new HttpParams().set('size', String(size));
        if (q) {
            params = params.set('q', q);
        }
        return this.http.get(`${API_URL}/catalog/search`, { params });
    }
    createOrder(payload) {
        return this.http.post(`${API_URL}/orders`, payload);
    }
    deliveryQuote(payload) {
        return this.http.post(`${API_URL}/orders/delivery-quote`, payload);
    }
    cancelOrder(orderId, reason) {
        return this.http.patch(`${API_URL}/orders/${orderId}/cancel`, { reason });
    }
    requestRefund(orderId, reason) {
        return this.http.post(`${API_URL}/orders/${orderId}/refund`, { reason });
    }
    myOrders() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/orders/mine`);
    }
    static { this.ɵfac = function CustomerApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CustomerApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CustomerApiService, factory: CustomerApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=customer-api.service.js.map