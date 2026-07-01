import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
const API_URL = 'http://localhost:8080/api/v1/store';
const emptyPage = () => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });
const emptyDashboard = {
    ordersToday: 0,
    revenueToday: 0,
    averageTicket: 0,
    activeProducts: 0,
    lowStockProducts: 0,
    averageRating: 0,
    ordersByStatus: {
        CREATED: 0,
        ACCEPTED: 0,
        PREPARING: 0,
        READY_FOR_PICKUP: 0,
        OUT_FOR_DELIVERY: 0,
        DELIVERED: 0,
        CANCELLED: 0,
        REFUND_REQUESTED: 0,
        REFUNDED: 0
    },
    topProducts: []
};
const emptyFinancialSummary = {
    revenue: 0,
    pendingSettlement: 0,
    averageTicket: 0,
    deliveredOrders: 0
};
export class StoreApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    }
    signup(payload) {
        return this.http.post(`${API_URL}/signup`, payload);
    }
    profile() {
        if (!this.isBrowser) {
            return of(null);
        }
        return this.http.get(`${API_URL}/profile`);
    }
    updateProfile(payload) {
        return this.http.put(`${API_URL}/profile`, payload);
    }
    sendDocument(payload) {
        return this.http.post(`${API_URL}/documents`, payload);
    }
    documents() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/documents`);
    }
    approveStore(storeId, payload) {
        return this.http.patch(`${API_URL}/admin/stores/${storeId}/approval`, payload);
    }
    categories() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/categories`);
    }
    createCategory(payload) {
        return this.http.post(`${API_URL}/categories`, payload);
    }
    products(size = 20) {
        if (!this.isBrowser) {
            return of(emptyPage());
        }
        return this.http.get(`${API_URL}/products`, { params: { size } });
    }
    createProduct(payload) {
        return this.http.post(`${API_URL}/products`, payload);
    }
    updateProduct(productId, payload) {
        return this.http.put(`${API_URL}/products/${productId}`, payload);
    }
    updateStock(productId, payload) {
        return this.http.patch(`${API_URL}/products/${productId}/stock`, payload);
    }
    deleteProduct(productId) {
        return this.http.delete(`${API_URL}/products/${productId}`);
    }
    addons(productId) {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/products/${productId}/addons`);
    }
    createAddon(productId, payload) {
        return this.http.post(`${API_URL}/products/${productId}/addons`, payload);
    }
    updateAddon(productId, addonId, payload) {
        return this.http.put(`${API_URL}/products/${productId}/addons/${addonId}`, payload);
    }
    deleteAddon(productId, addonId) {
        return this.http.delete(`${API_URL}/products/${productId}/addons/${addonId}`);
    }
    hours() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/hours`);
    }
    upsertHour(payload) {
        return this.http.put(`${API_URL}/hours`, payload);
    }
    promotions() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/promotions`);
    }
    createPromotion(payload) {
        return this.http.post(`${API_URL}/promotions`, payload);
    }
    updatePromotion(promotionId, payload) {
        return this.http.put(`${API_URL}/promotions/${promotionId}`, payload);
    }
    deletePromotion(promotionId) {
        return this.http.delete(`${API_URL}/promotions/${promotionId}`);
    }
    orders(status) {
        if (!this.isBrowser) {
            return of([]);
        }
        const params = status ? new HttpParams().set('status', status) : undefined;
        return this.http.get(`${API_URL}/orders`, { params });
    }
    updateOrderStatus(orderId, status) {
        return this.http.patch(`${API_URL}/orders/${orderId}/status`, { status });
    }
    financialSummary() {
        if (!this.isBrowser) {
            return of(emptyFinancialSummary);
        }
        return this.http.get(`${API_URL}/financial/summary`);
    }
    financialEntries() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/financial/entries`);
    }
    reports(from, to) {
        if (!this.isBrowser) {
            return of({ revenue: 0, orders: 0, averageTicket: 0, ordersByStatus: emptyDashboard.ordersByStatus });
        }
        let params = new HttpParams();
        if (from) {
            params = params.set('from', from);
        }
        if (to) {
            params = params.set('to', to);
        }
        return this.http.get(`${API_URL}/reports`, { params });
    }
    dashboard() {
        if (!this.isBrowser) {
            return of(emptyDashboard);
        }
        return this.http.get(`${API_URL}/dashboard`);
    }
    reviews() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/reviews`);
    }
    static { this.ɵfac = function StoreApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StoreApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StoreApiService, factory: StoreApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoreApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=store-api.service.js.map