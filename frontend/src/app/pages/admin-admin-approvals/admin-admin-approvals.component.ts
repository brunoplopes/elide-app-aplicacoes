import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-admin-approvals-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-admin-approvals.component.html',
  styleUrl: './admin-admin-approvals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminAdminApprovalsPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
