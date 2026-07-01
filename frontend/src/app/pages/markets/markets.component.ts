import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-markets-page',
  imports: [CatalogViewComponent],
  templateUrl: './markets.component.html',
  styleUrl: './markets.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketsPageComponent {
  readonly page = this;

  readonly title = 'Mercados';
  readonly subtitle = 'Compras de mercado, padaria e conveniencia para receber em casa.';
  readonly segment = 'Mercado';
}
