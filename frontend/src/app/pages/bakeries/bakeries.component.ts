import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-bakeries-page',
  imports: [CatalogViewComponent],
  templateUrl: './bakeries.component.html',
  styleUrl: './bakeries.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BakeriesPageComponent {
  readonly page = this;
  readonly title = 'Padarias';
  readonly subtitle = 'Pães, doces, cafés e conveniência para chegar fresquinho.';
  readonly segment = 'Padaria';
}
