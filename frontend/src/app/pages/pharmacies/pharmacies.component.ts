import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Page, Store } from '../../models/marketplace.models';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-pharmacies-page',
  imports: [CatalogViewComponent],
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmaciesPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;

  readonly title = 'Farmacias';
  readonly subtitle = 'Saude, beleza e conveniencia com entrega segura.';
  readonly stores = toSignal(this.api.stores().pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
