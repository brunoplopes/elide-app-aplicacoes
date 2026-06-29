import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-logs-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-logs.component.html',
  styleUrl: './admin-logs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminLogsPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
