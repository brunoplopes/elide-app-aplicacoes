import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { Page, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-pet-shops-page',
  imports: [CatalogViewComponent],
  templateUrl: './pet-shops.component.html',
  styleUrl: './pet-shops.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetShopsPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;
  readonly title = 'Pet Shops';
  readonly subtitle = 'Ração, higiene, farmácia pet e acessórios com entrega rápida.';
  readonly stores = toSignal(this.api.stores({ segment: 'Pet Shop' }).pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
