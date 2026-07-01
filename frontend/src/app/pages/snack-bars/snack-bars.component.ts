import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-snack-bars-page',
  imports: [CatalogViewComponent],
  templateUrl: './snack-bars.component.html',
  styleUrl: './snack-bars.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarsPageComponent {
  readonly page = this;
  readonly title = 'Lanchonetes';
  readonly subtitle = 'Lanches, porções, sucos e combos para qualquer hora.';
  readonly segment = 'Lanchonete';
}
