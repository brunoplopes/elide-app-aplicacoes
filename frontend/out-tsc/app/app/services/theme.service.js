import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class ThemeService {
    constructor() {
        this.darkMode = signal(false, ...(ngDevMode ? [{ debugName: "darkMode" }] : []));
    }
    applyInitialTheme() {
        if (typeof localStorage === 'undefined' || typeof document === 'undefined') {
            return;
        }
        const enabled = localStorage.getItem('elide.darkMode') === 'true';
        this.darkMode.set(enabled);
        document.documentElement.classList.toggle('dark', enabled);
    }
    toggle() {
        if (typeof localStorage === 'undefined' || typeof document === 'undefined') {
            return;
        }
        this.darkMode.update((value) => !value);
        localStorage.setItem('elide.darkMode', String(this.darkMode()));
        document.documentElement.classList.toggle('dark', this.darkMode());
    }
    static { this.ɵfac = function ThemeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ThemeService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=theme.service.js.map