import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
const API_URL = 'http://localhost:8080/api/v1';
export class CourierApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    }
    signup(payload) {
        return this.http.post(`${API_URL}/courier/signup`, payload);
    }
    profile() {
        return this.http.get(`${API_URL}/courier/profile`);
    }
    sendDocument(payload) {
        return this.http.post(`${API_URL}/courier/documents`, payload);
    }
    documents() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/courier/documents`);
    }
    setAvailability(payload) {
        return this.http.patch(`${API_URL}/courier/availability`, payload);
    }
    updateLocation(payload) {
        return this.http.post(`${API_URL}/courier/location`, payload);
    }
    map() {
        if (!this.isBrowser) {
            return of({ location: null, activeDelivery: null, encodedPolyline: null });
        }
        return this.http.get(`${API_URL}/courier/map`);
    }
    availableRides() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/courier/rides/available`);
    }
    acceptRide(orderId) {
        return this.http.post(`${API_URL}/courier/rides/${orderId}/accept`, {});
    }
    declineRide(orderId, payload = {}) {
        return this.http.post(`${API_URL}/courier/rides/${orderId}/decline`, payload);
    }
    updateDeliveryStatus(orderId, status) {
        return this.http.patch(`${API_URL}/courier/deliveries/${orderId}/status`, { status });
    }
    history() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/courier/deliveries/history`);
    }
    earnings() {
        if (!this.isBrowser) {
            return of({ daily: 0, monthly: 0, statement: [] });
        }
        return this.http.get(`${API_URL}/courier/earnings`);
    }
    dashboard() {
        return this.http.get(`${API_URL}/courier/dashboard`);
    }
    static { this.ɵfac = function CourierApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourierApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CourierApiService, factory: CourierApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourierApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=courier-api.service.js.map