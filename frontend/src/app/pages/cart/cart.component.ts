import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
}
