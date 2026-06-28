import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { OrderResponse, OrderStatus } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-my-orders-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrdersPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly orders = signal<OrderResponse[]>([]);
  readonly loading = signal(true);
  readonly message = signal<string | null>(null);

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.api.myOrders().pipe(catchError(() => {
      this.message.set('Nao foi possivel carregar /orders/mine.');
      return of([]);
    })).subscribe((orders) => {
      this.orders.set(orders);
      this.loading.set(false);
    });
  }

  statusLabel(status: OrderStatus): string {
    const labels: Record<OrderStatus, string> = {
      CREATED: 'Criado',
      ACCEPTED: 'Aceito',
      PREPARING: 'Em preparo',
      READY_FOR_PICKUP: 'Pronto',
      OUT_FOR_DELIVERY: 'Saiu para entrega',
      DELIVERED: 'Entregue',
      CANCELLED: 'Cancelado',
      REFUND_REQUESTED: 'Reembolso solicitado',
      REFUNDED: 'Reembolsado'
    };
    return labels[status];
  }

  progress(status: OrderStatus): number {
    const values: Record<OrderStatus, number> = {
      CREATED: 12,
      ACCEPTED: 28,
      PREPARING: 48,
      READY_FOR_PICKUP: 68,
      OUT_FOR_DELIVERY: 84,
      DELIVERED: 100,
      CANCELLED: 100,
      REFUND_REQUESTED: 100,
      REFUNDED: 100
    };
    return values[status];
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }

  shortId(id: string): string {
    return `ELD-${id.slice(0, 6).toUpperCase()}`;
  }
}
