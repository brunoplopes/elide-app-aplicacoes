import { Injectable, computed, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class CartService {
    constructor() {
        this.itemsSignal = signal([], ...(ngDevMode ? [{ debugName: "itemsSignal" }] : []));
        this.couponSignal = signal(null, ...(ngDevMode ? [{ debugName: "couponSignal" }] : []));
        this.deliveryFeeSignal = signal(0, ...(ngDevMode ? [{ debugName: "deliveryFeeSignal" }] : []));
        this.items = this.itemsSignal.asReadonly();
        this.coupon = this.couponSignal.asReadonly();
        this.deliveryFee = this.deliveryFeeSignal.asReadonly();
        this.subtotal = computed(() => this.itemsSignal().reduce((sum, item) => sum + this.itemTotal(item), 0), ...(ngDevMode ? [{ debugName: "subtotal" }] : []));
        this.discount = computed(() => this.couponSignal() ? Math.min(10, this.subtotal()) : 0, ...(ngDevMode ? [{ debugName: "discount" }] : []));
        this.total = computed(() => Math.max(0, this.subtotal() + this.deliveryFeeSignal() - this.discount()), ...(ngDevMode ? [{ debugName: "total" }] : []));
    }
    add(product, note) {
        this.itemsSignal.update((items) => {
            const existing = items.find((item) => item.product.id === product.id);
            if (existing) {
                return items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...items, { product, quantity: 1, note }];
        });
    }
    setQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.remove(productId);
            return;
        }
        this.itemsSignal.update((items) => items.map((item) => item.product.id === productId ? { ...item, quantity } : item));
    }
    setNote(productId, note) {
        this.itemsSignal.update((items) => items.map((item) => item.product.id === productId ? { ...item, note: note.trim() || undefined } : item));
    }
    addAddon(productId, addon) {
        this.itemsSignal.update((items) => items.map((item) => {
            if (item.product.id !== productId) {
                return item;
            }
            const addons = item.addons ?? [];
            const existing = addons.find((current) => current.id === addon.id);
            const maxQuantity = addon.maxQuantity ?? existing?.maxQuantity ?? Number.MAX_SAFE_INTEGER;
            return {
                ...item,
                addons: existing
                    ? addons.map((current) => current.id === addon.id ? { ...current, quantity: Math.min(maxQuantity, current.quantity + addon.quantity), maxQuantity } : current)
                    : [...addons, { ...addon, quantity: Math.min(maxQuantity, addon.quantity), maxQuantity }]
            };
        }));
    }
    setAddonQuantity(productId, addonId, quantity) {
        this.itemsSignal.update((items) => items.map((item) => {
            if (item.product.id !== productId) {
                return item;
            }
            const addons = (item.addons ?? [])
                .map((addon) => addon.id === addonId ? { ...addon, quantity: Math.min(addon.maxQuantity ?? Number.MAX_SAFE_INTEGER, quantity) } : addon)
                .filter((addon) => addon.quantity > 0);
            return { ...item, addons };
        }));
    }
    removeAddon(productId, addonId) {
        this.setAddonQuantity(productId, addonId, 0);
    }
    applyCoupon(code) {
        this.couponSignal.set(code.trim() || null);
    }
    setDeliveryFee(value) {
        this.deliveryFeeSignal.set(Math.max(0, value));
    }
    remove(productId) {
        this.itemsSignal.update((items) => items.filter((item) => item.product.id !== productId));
    }
    clear() {
        this.itemsSignal.set([]);
        this.couponSignal.set(null);
        this.deliveryFeeSignal.set(0);
    }
    itemTotal(item) {
        const addons = (item.addons ?? []).reduce((sum, addon) => sum + addon.price * addon.quantity, 0);
        return (item.product.price + addons) * item.quantity;
    }
    static { this.ɵfac = function CartService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CartService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=cart.service.js.map