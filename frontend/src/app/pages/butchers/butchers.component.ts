import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { Page, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-butchers-page',
  imports: [CatalogViewComponent],
  templateUrl: './butchers.component.html',
  styleUrl: './butchers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButchersPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;
  readonly title = 'Acougues';
  readonly subtitle = 'Cortes selecionados, kits para churrasco e preparo do dia.';
  readonly stores = toSignal(this.api.stores({ segment: 'Acougue' }).pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
