import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-stores-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-stores.component.html',
  styleUrl: './admin-stores.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminStoresPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
