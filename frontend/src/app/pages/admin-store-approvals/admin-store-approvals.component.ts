import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-store-approvals-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-store-approvals.component.html',
  styleUrl: './admin-store-approvals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminStoreApprovalsPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
