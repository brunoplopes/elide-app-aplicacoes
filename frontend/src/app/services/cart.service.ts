import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/marketplace.models';

export interface CartItem {
  product: Product;
  quantity: number;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);
  readonly items = this.itemsSignal.asReadonly();
  readonly total = computed(() => this.itemsSignal().reduce((sum, item) => sum + item.product.price * item.quantity, 0));

  add(product: Product): void {
    this.itemsSignal.update((items) => {
      const existing = items.find((item) => item.product.id === product.id);
      if (existing) {
        return items.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  remove(productId: string): void {
    this.itemsSignal.update((items) => items.filter((item) => item.product.id !== productId));
  }

  clear(): void {
    this.itemsSignal.set([]);
  }
}

