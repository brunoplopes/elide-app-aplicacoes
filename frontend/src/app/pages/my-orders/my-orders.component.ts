import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { orders } from '../shared/page-kit';

@Component({
  selector: 'elide-my-orders-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrdersPageComponent {
  readonly page = this;

  readonly orders = orders;
}
