import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-pharmacies-page',
  imports: [CatalogViewComponent],
  templateUrl: './pharmacies.component.html',
  styleUrl: './pharmacies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmaciesPageComponent {
  readonly page = this;

  readonly title = 'Farmacias';
  readonly subtitle = 'Saude, beleza e conveniencia com entrega segura.';
  readonly segment = 'Farmacia';
}
