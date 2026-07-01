import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
const API_URL = 'http://localhost:8080/api/v1/admin';
export class AdminApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    }
    dashboard() {
        return this.http.get(`${API_URL}/dashboard`);
    }
    stores() {
        return this.getList('stores');
    }
    createStore(payload) {
        return this.http.post(`${API_URL}/stores`, payload);
    }
    updateStore(id, payload) {
        return this.http.put(`${API_URL}/stores/${id}`, payload);
    }
    deleteStore(id) {
        return this.http.delete(`${API_URL}/stores/${id}`);
    }
    approveStore(id, payload) {
        return this.http.patch(`${API_URL}/stores/${id}/approval`, payload);
    }
    couriers() {
        return this.getList('couriers');
    }
    createCourier(payload) {
        return this.http.post(`${API_URL}/couriers`, payload);
    }
    approveCourier(id, payload) {
        return this.http.patch(`${API_URL}/couriers/${id}/approval`, payload);
    }
    categories() {
        return this.getList('categories');
    }
    createCategory(payload) {
        return this.http.post(`${API_URL}/categories`, payload);
    }
    updateCategory(id, payload) {
        return this.http.put(`${API_URL}/categories/${id}`, payload);
    }
    deleteCategory(id) {
        return this.http.delete(`${API_URL}/categories/${id}`);
    }
    banners() {
        return this.getList('banners');
    }
    createBanner(payload) {
        return this.http.post(`${API_URL}/banners`, payload);
    }
    updateBanner(id, payload) {
        return this.http.put(`${API_URL}/banners/${id}`, payload);
    }
    deleteBanner(id) {
        return this.http.delete(`${API_URL}/banners/${id}`);
    }
    cities() {
        return this.getList('cities');
    }
    createCity(payload) {
        return this.http.post(`${API_URL}/cities`, payload);
    }
    updateCity(id, payload) {
        return this.http.put(`${API_URL}/cities/${id}`, payload);
    }
    deleteCity(id) {
        return this.http.delete(`${API_URL}/cities/${id}`);
    }
    coupons() {
        return this.getList('coupons');
    }
    createCoupon(payload) {
        return this.http.post(`${API_URL}/coupons`, payload);
    }
    updateCoupon(id, payload) {
        return this.http.put(`${API_URL}/coupons/${id}`, payload);
    }
    deleteCoupon(id) {
        return this.http.delete(`${API_URL}/coupons/${id}`);
    }
    fees() {
        return this.getList('fees');
    }
    createFee(payload) {
        return this.http.post(`${API_URL}/fees`, payload);
    }
    updateFee(id, payload) {
        return this.http.put(`${API_URL}/fees/${id}`, payload);
    }
    deleteFee(id) {
        return this.http.delete(`${API_URL}/fees/${id}`);
    }
    admins() {
        return this.getList('admins');
    }
    createAdmin(payload) {
        return this.http.post(`${API_URL}/admins`, payload);
    }
    updateAdmin(id, payload) {
        return this.http.put(`${API_URL}/admins/${id}`, payload);
    }
    approveAdmin(id, payload) {
        return this.http.patch(`${API_URL}/admins/${id}/approval`, payload);
    }
    deleteAdmin(id) {
        return this.http.delete(`${API_URL}/admins/${id}`);
    }
    orders() {
        return this.getList('orders');
    }
    financialSummary() {
        if (!this.isBrowser) {
            return of({ revenue: 0, courierPayout: 0, platformBalance: 0, entries: 0 });
        }
        return this.http.get(`${API_URL}/financial/summary`);
    }
    financialEntries() {
        return this.getList('financial/entries');
    }
    settings() {
        return this.getList('settings');
    }
    upsertSetting(payload) {
        return this.http.put(`${API_URL}/settings`, payload);
    }
    audit() {
        return this.getList('audit');
    }
    logs() {
        return this.getList('logs');
    }
    getList(path) {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/${path}`);
    }
    static { this.ɵfac = function AdminApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminApiService, factory: AdminApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=admin-api.service.js.map