import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Page, Store } from '../../models/marketplace.models';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-restaurants-page',
  imports: [CatalogViewComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;

  readonly title = 'Restaurantes';
  readonly subtitle = 'Pratos, lanches, pizzas e refeicoes completas com entrega rapida.';
  readonly stores = toSignal(this.api.stores({ segment: 'Restaurante' }).pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
