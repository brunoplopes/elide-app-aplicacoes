import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Dashboard } from '../../models/marketplace.models';

const fallbackDashboard: Dashboard = {
  revenue: 0,
  totalOrders: 0,
  totalUsers: 0,
  activeStores: 0,
  activeCouriers: 0,
  ordersByStatus: [
    { label: 'CREATED', value: 4 },
    { label: 'PREPARING', value: 2 },
    { label: 'OUT_FOR_DELIVERY', value: 1 }
  ]
};

@Component({
  selector: 'elide-admin-panel-page',
  imports: [...MATERIAL, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelPageComponent {
  readonly page = this;

  private readonly api = inject(ApiService);
  readonly dashboard = toSignal(this.api.dashboard().pipe(catchError(() => of(fallbackDashboard))), { initialValue: fallbackDashboard });
  readonly metrics = computed(() => [
    { label: 'Vendas', value: String(this.dashboard().revenue), icon: 'payments' },
    { label: 'Pedidos', value: String(this.dashboard().totalOrders), icon: 'receipt_long' },
    { label: 'Usuarios', value: String(this.dashboard().totalUsers), icon: 'group' },
    { label: 'Lojas ativas', value: String(this.dashboard().activeStores), icon: 'storefront' }
  ]);
}
