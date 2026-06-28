import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { CartService } from '../../services/cart.service';
import { Page, Product } from '../../models/marketplace.models';

const emptyProducts: Page<Product> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-product-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent {
  readonly page = this;

  private readonly route = inject(ActivatedRoute);
  private readonly api = inject(ApiService);
  readonly cart = inject(CartService);
  readonly products = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => this.api.products(params.get('id') ?? '')),
      catchError(() => of(emptyProducts))
    ),
    { initialValue: emptyProducts }
  );

  add(product: Product): void {
    this.cart.add({ ...product, storeId: this.route.snapshot.paramMap.get('id') ?? undefined });
  }
}
