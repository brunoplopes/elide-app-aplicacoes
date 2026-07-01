import { Injectable, computed, signal, inject } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './api.service';
import * as i0 from "@angular/core";
const TOKEN_KEY = 'elide.accessToken';
const PROFILE_KEY = 'elide.profile';
export class AuthService {
    constructor() {
        this.api = inject(ApiService);
        this.profileSignal = signal(readProfile(), ...(ngDevMode ? [{ debugName: "profileSignal" }] : []));
        this.profile = this.profileSignal.asReadonly();
        this.isAuthenticated = computed(() => Boolean(this.profileSignal()?.accessToken), ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : []));
        this.isAdmin = computed(() => this.hasRole('ADMIN') || this.hasRole('MASTER_ADMIN'), ...(ngDevMode ? [{ debugName: "isAdmin" }] : []));
        this.isStoreUser = computed(() => this.hasRole('STORE_OWNER') || this.hasRole('STORE_USER') || this.isAdmin(), ...(ngDevMode ? [{ debugName: "isStoreUser" }] : []));
    }
    login(username, password) {
        return this.api.login(username, password).pipe(tap((response) => this.persist(response)));
    }
    register(payload) {
        return this.api.register(payload).pipe(tap((response) => this.persist(response)));
    }
    forgotPassword(identifier) {
        return this.api.forgotPassword(identifier);
    }
    changePassword(payload) {
        return this.api.changePassword(payload).pipe(tap(() => {
            const current = this.profileSignal();
            if (!current) {
                return;
            }
            const updated = { ...current, mustChangePassword: false };
            localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
            this.profileSignal.set(updated);
        }));
    }
    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(PROFILE_KEY);
        this.profileSignal.set(null);
    }
    token() {
        return this.profileSignal()?.accessToken ?? localStorage.getItem(TOKEN_KEY);
    }
    hasRole(role) {
        return this.profileSignal()?.roles?.includes(role) ?? false;
    }
    persist(response) {
        localStorage.setItem(TOKEN_KEY, response.accessToken);
        localStorage.setItem(PROFILE_KEY, JSON.stringify(response));
        this.profileSignal.set(response);
    }
    static { this.ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
function readProfile() {
    if (typeof localStorage === 'undefined') {
        return null;
    }
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
}
//# sourceMappingURL=auth.service.js.map