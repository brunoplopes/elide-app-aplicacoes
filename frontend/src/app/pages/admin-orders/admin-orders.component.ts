import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-orders-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrdersPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
