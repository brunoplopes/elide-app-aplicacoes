import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-audit-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-audit.component.html',
  styleUrl: './admin-audit.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminAuditPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
