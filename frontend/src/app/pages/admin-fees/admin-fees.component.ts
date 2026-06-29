import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-fees-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-fees.component.html',
  styleUrl: './admin-fees.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFeesPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
