import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-financial-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-financial.component.html',
  styleUrl: './admin-financial.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminFinancialPageComponent extends AdminPanelPageComponent {
  override readonly page = this;
}
