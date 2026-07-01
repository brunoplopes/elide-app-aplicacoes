import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-pet-shops-page',
  imports: [CatalogViewComponent],
  templateUrl: './pet-shops.component.html',
  styleUrl: './pet-shops.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetShopsPageComponent {
  readonly page = this;
  readonly title = 'Pet Shops';
  readonly subtitle = 'Ração, higiene, farmácia pet e acessórios com entrega rápida.';
  readonly segment = 'Pet Shop';
}
