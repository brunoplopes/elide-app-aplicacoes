import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Page, Store } from '../../models/marketplace.models';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-markets-page',
  imports: [CatalogViewComponent],
  templateUrl: './markets.component.html',
  styleUrl: './markets.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketsPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;

  readonly title = 'Mercados';
  readonly subtitle = 'Compras de mercado, padaria e conveniencia para receber em casa.';
  readonly stores = toSignal(this.api.stores().pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
