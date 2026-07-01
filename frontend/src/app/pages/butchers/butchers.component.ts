import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';

@Component({
  selector: 'elide-butchers-page',
  imports: [CatalogViewComponent],
  templateUrl: './butchers.component.html',
  styleUrl: './butchers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButchersPageComponent {
  readonly page = this;
  readonly title = 'Acougues';
  readonly subtitle = 'Cortes selecionados, kits para churrasco e preparo do dia.';
  readonly segment = 'Acougue';
}
