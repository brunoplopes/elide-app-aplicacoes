import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-categories-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-categories.component.html',
  styleUrl: './admin-categories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCategoriesPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
