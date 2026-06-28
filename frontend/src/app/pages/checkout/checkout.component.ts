import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CartService } from '../../services/cart.service';

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
}
