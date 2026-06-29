import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-cities-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-cities.component.html',
  styleUrl: './admin-cities.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCitiesPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
