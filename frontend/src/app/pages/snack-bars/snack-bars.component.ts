import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { Page, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-snack-bars-page',
  imports: [CatalogViewComponent],
  templateUrl: './snack-bars.component.html',
  styleUrl: './snack-bars.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarsPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;
  readonly title = 'Lanchonetes';
  readonly subtitle = 'Lanches, porções, sucos e combos para qualquer hora.';
  readonly stores = toSignal(this.api.stores({ segment: 'Lanchonete' }).pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
