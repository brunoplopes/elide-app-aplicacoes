import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  readonly message = signal<string | null>(null);
  readonly loading = signal(false);

  finish(): void {
    const items = this.cart.items();
    const storeId = items[0]?.product.storeId;
    if (!storeId || !items.length) {
      this.message.set('Adicione produtos de uma loja antes de finalizar.');
      return;
    }
    this.loading.set(true);
    this.message.set(null);
    this.api.createOrder({
      storeId,
      paymentMethod: 'PIX',
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        note: item.note ?? null
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
