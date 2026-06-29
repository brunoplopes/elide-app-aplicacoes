import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-banners-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-banners.component.html',
  styleUrl: './admin-banners.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminBannersPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
