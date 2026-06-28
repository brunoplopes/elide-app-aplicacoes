import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-tracking-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackingPageComponent {
  readonly page = this;

  readonly steps = ['Pedido aceito', 'Em preparo', 'Saiu para entrega', 'Chegando'];
}
