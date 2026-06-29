import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-admins-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-admins.component.html',
  styleUrl: './admin-admins.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminAdminsPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
