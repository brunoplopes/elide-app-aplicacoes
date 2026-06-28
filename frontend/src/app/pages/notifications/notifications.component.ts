import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CustomerNotification } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'notifications-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly notifications = signal<CustomerNotification[]>([]);
  readonly message = signal<string | null>(null);

  readonly vm = computed<FeaturePageVm>(() => ({
    eyebrow: 'Tempo real',
    title: 'Notificacoes',
    description: 'Receba atualizacoes de pedidos, cupons, reembolsos e entregas.',
    cards: this.notifications().map((notification) => ({
      title: notification.title,
      description: notification.message,
      icon: notification.read ? 'notifications' : 'notifications_active',
      meta: notification.read ? 'Lida' : 'Nova',
      action: notification.read ? undefined : 'Marcar como lida',
      path: notification.id
    }))
  }));

  ngOnInit(): void {
    this.api.notifications().pipe(catchError(() => {
      this.message.set('Endpoint /customer/notifications ainda nao respondeu.');
      return of([]);
    })).subscribe((notifications) => this.notifications.set(notifications));
  }

  markRead(notificationId: string): void {
    this.api.markNotificationRead(notificationId).pipe(catchError(() => of(null))).subscribe((updated) => {
      if (!updated) {
        return;
      }
      this.notifications.update((items) => items.map((item) => item.id === updated.id ? updated : item));
    });
  }
}
