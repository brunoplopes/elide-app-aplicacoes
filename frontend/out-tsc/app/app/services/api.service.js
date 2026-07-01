import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import * as i0 from "@angular/core";
const API_URL = 'http://localhost:8080/api/v1';
const emptyPage = () => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });
const emptyDashboard = {
    revenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    activeStores: 0,
    activeCouriers: 0,
    ordersByStatus: []
};
export class ApiService {
    constructor() {
        this.http = inject(HttpClient);
        this.isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    }
    login(username, password) {
        return this.http.post(`${API_URL}/auth/login`, { username, password });
    }
    register(payload) {
        return this.http.post(`${API_URL}/auth/register`, payload);
    }
    forgotPassword(identifier) {
        return this.http.post(`${API_URL}/auth/forgot-password`, { identifier });
    }
    changePassword(payload) {
        return this.http.post(`${API_URL}/auth/change-password`, payload);
    }
    categories() {
        if (!this.isBrowser) {
            return of([]);
        }
        return this.http.get(`${API_URL}/catalog/categories`);
    }
    stores(filters) {
        if (!this.isBrowser) {
            return of(emptyPage());
        }
        const location = this.locationFrom(filters);
        if (filters?.preferNearby && location) {
            return this.nearbyStores(location.latitude, location.longitude, filters.radiusMeters ?? 5000, filters.size ?? 24).pipe(map((stores) => this.pageFromStores(this.filterStores(stores, filters), filters.size ?? 24)), catchError(() => this.catalogStores(filters)));
        }
        return this.catalogStores(filters);
    }
    catalogStores(filters) {
        let params = new HttpParams().set('size', String(filters?.size ?? 12));
        if (filters?.segment) {
            params = params.set('segment', filters.segment);
        }
        if (filters?.q) {
            params = params.set('q', filters.q);
        }
        return this.http.get(`${API_URL}/catalog/stores`, { params });
    }
    nearbyStores(latitude, longitude, radiusMeters, limit) {
        const params = new HttpParams()
            .set('latitude', String(latitude))
            .set('longitude', String(longitude))
            .set('radiusMeters', String(radiusMeters))
            .set('limit', String(Math.min(Math.max(limit, 1), 100)));
        return this.http.get(`${API_URL}/stores/nearby`, { params });
    }
    locationFrom(filters) {
        const filterLatitude = filters?.latitude;
        const filterLongitude = filters?.longitude;
        if (this.validCoordinate(filterLatitude, filterLongitude)) {
            return { latitude: filterLatitude, longitude: filterLongitude };
        }
        if (typeof localStorage === 'undefined') {
            return null;
        }
        for (const key of ['elide.deliveryLocation', 'elide.lastLocation', 'elide.location']) {
            const parsed = this.parseLocation(localStorage.getItem(key));
            if (parsed) {
                return parsed;
            }
        }
        return null;
    }
    parseLocation(raw) {
        if (!raw) {
            return null;
        }
        try {
            const value = JSON.parse(raw);
            const latitude = Number(value.latitude ?? value.lat);
            const longitude = Number(value.longitude ?? value.lng);
            return this.validCoordinate(latitude, longitude) ? { latitude, longitude } : null;
        }
        catch {
            return null;
        }
    }
    validCoordinate(latitude, longitude) {
        return typeof latitude === 'number'
            && typeof longitude === 'number'
            && Number.isFinite(latitude)
            && Number.isFinite(longitude)
            && latitude >= -90
            && latitude <= 90
            && longitude >= -180
            && longitude <= 180;
    }
    filterStores(stores, filters) {
        const segment = this.normalize(filters?.segment);
        const q = this.normalize(filters?.q);
        return stores.filter((store) => {
            const matchesSegment = !segment || this.normalize(store.segment).includes(segment);
            const matchesQuery = !q || this.normalize(`${store.name} ${store.segment}`).includes(q);
            return matchesSegment && matchesQuery;
        });
    }
    pageFromStores(stores, size) {
        const content = stores.slice(0, size);
        return { content, totalElements: content.length, totalPages: content.length ? 1 : 0, number: 0 };
    }
    normalize(value) {
        return (value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
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
    dashboard() {
        if (!this.isBrowser) {
            return of(emptyDashboard);
        }
        return this.http.get(`${API_URL}/admin/dashboard`);
    }
    createOrder(payload) {
        return this.http.post(`${API_URL}/orders`, payload);
    }
    myOrders() {
        return this.http.get(`${API_URL}/orders/mine`);
    }
    static { this.ɵfac = function ApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=api.service.js.map