import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-coupons-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-coupons.component.html',
  styleUrl: './admin-coupons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCouponsPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
