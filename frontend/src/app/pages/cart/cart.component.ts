import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'elide-cart-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPageComponent {
  readonly page = this;

  readonly cart = inject(CartService);
  readonly couponControl = new FormControl(this.cart.coupon() ?? '', { nonNullable: true });
  readonly message = signal<string | null>(null);
  readonly isEmpty = computed(() => this.cart.items().length === 0);
  readonly itemCount = computed(() => this.cart.items().reduce((total, item) => total + item.quantity, 0));

  applyCoupon(): void {
    const code = this.couponControl.value.trim();
    this.cart.applyCoupon(code);
    this.message.set(code ? `Cupom ${code.toUpperCase()} aplicado.` : 'Cupom removido.');
  }
}
