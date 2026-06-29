import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/marketplace.models';

export interface CartItem {
  product: Product;
  quantity: number;
  note?: string;
  addons?: CartAddon[];
}

export interface CartAddon {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);
  private readonly couponSignal = signal<string | null>(null);
  private readonly deliveryFeeSignal = signal(0);
  readonly items = this.itemsSignal.asReadonly();
  readonly coupon = this.couponSignal.asReadonly();
  readonly deliveryFee = this.deliveryFeeSignal.asReadonly();
  readonly subtotal = computed(() => this.itemsSignal().reduce((sum, item) => sum + this.itemTotal(item), 0));
  readonly discount = computed(() => this.couponSignal() ? Math.min(10, this.subtotal()) : 0);
  readonly total = computed(() => Math.max(0, this.subtotal() + this.deliveryFeeSignal() - this.discount()));

  add(product: Product, note?: string): void {
    this.itemsSignal.update((items) => {
      const existing = items.find((item) => item.product.id === product.id);
      if (existing) {
        return items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...items, { product, quantity: 1, note }];
    });
  }

  setQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) {
      this.remove(productId);
      return;
    }
    this.itemsSignal.update((items) => items.map((item) => item.product.id === productId ? { ...item, quantity } : item));
  }

  setNote(productId: string, note: string): void {
    this.itemsSignal.update((items) => items.map((item) => item.product.id === productId ? { ...item, note } : item));
  }

  addAddon(productId: string, addon: CartAddon): void {
    this.itemsSignal.update((items) => items.map((item) => {
      if (item.product.id !== productId) {
        return item;
      }
      const addons = item.addons ?? [];
      const existing = addons.find((current) => current.id === addon.id);
      return {
        ...item,
        addons: existing
          ? addons.map((current) => current.id === addon.id ? { ...current, quantity: current.quantity + addon.quantity } : current)
          : [...addons, addon]
      };
    }));
  }

  applyCoupon(code: string): void {
    this.couponSignal.set(code.trim() || null);
  }

  setDeliveryFee(value: number): void {
    this.deliveryFeeSignal.set(Math.max(0, value));
  }

  remove(productId: string): void {
    this.itemsSignal.update((items) => items.filter((item) => item.product.id !== productId));
  }

  clear(): void {
    this.itemsSignal.set([]);
    this.couponSignal.set(null);
    this.deliveryFeeSignal.set(0);
  }

  itemTotal(item: CartItem): number {
    const addons = (item.addons ?? []).reduce((sum, addon) => sum + addon.price * addon.quantity, 0);
    return (item.product.price + addons) * item.quantity;
  }
}
