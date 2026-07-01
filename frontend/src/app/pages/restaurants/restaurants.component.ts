import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-restaurants-page',
  imports: [CatalogViewComponent],
  templateUrl: './restaurants.component.html',
  styleUrl: './restaurants.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantsPageComponent {
  readonly page = this;

  readonly title = 'Restaurantes';
  readonly subtitle = 'Pratos, lanches, pizzas e refeicoes completas com entrega rapida.';
  readonly segment = 'Restaurante';
}
