import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CartService } from '../../services/cart.service';
import { CustomerApiService } from '../../services/customer-api.service';

@Component({
  selector: 'elide-checkout-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent {
  readonly page = this;

  readonly cart = inject(CartService);
  private readonly api = inject(CustomerApiService);
  private readonly fb = inject(FormBuilder);
  readonly message = signal<string | null>(null);
  readonly loading = signal(false);
  readonly form = this.fb.nonNullable.group({
    couponCode: ['ELIDE10'],
    paymentMethod: ['PIX'],
    addressId: ['']
  });

  applyCoupon(): void {
    this.cart.applyCoupon(this.form.controls.couponCode.value);
  }

  finish(): void {
    const items = this.cart.items();
    const storeId = items[0]?.product.storeId;
    if (!storeId || !items.length) {
      this.message.set('Adicione produtos de uma loja antes de finalizar.');
      return;
    }
    this.loading.set(true);
    this.message.set(null);
    this.cart.applyCoupon(this.form.controls.couponCode.value);
    this.api.createOrder({
      storeId,
      couponCode: this.cart.coupon(),
      paymentMethod: this.form.controls.paymentMethod.value,
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        note: item.note ?? null,
        addons: item.addons?.map((addon) => ({ addonId: addon.id, quantity: addon.quantity })) ?? []
      }))
    }).subscribe({
      next: (order) => {
        this.cart.clear();
        this.loading.set(false);
        this.message.set(`Pedido ${order.id.slice(0, 8).toUpperCase()} criado com sucesso.`);
      },
      error: () => {
        this.loading.set(false);
        this.message.set('Nao foi possivel criar o pedido na API.');
      }
    });
  }
}
