import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { Page, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { CatalogViewComponent } from '../shared/catalog-view.component';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-bakeries-page',
  imports: [CatalogViewComponent],
  templateUrl: './bakeries.component.html',
  styleUrl: './bakeries.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BakeriesPageComponent {
  private readonly api = inject(ApiService);
  readonly page = this;
  readonly title = 'Padarias';
  readonly subtitle = 'Pães, doces, cafés e conveniência para chegar fresquinho.';
  readonly stores = toSignal(this.api.stores({ segment: 'Padaria' }).pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}
