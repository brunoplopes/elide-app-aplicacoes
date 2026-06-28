import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'notifications-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Tempo real",
  "title": "Notificacoes",
  "description": "Receba atualizacoes de pedidos, cupons, reembolsos e entregas.",
  "cards": [
    {
      "title": "Pedido saiu para entrega",
      "description": "ELD-1029 esta a caminho.",
      "icon": "notifications_active",
      "meta": "Agora"
    },
    {
      "title": "Cupom PIX15 disponivel",
      "description": "Use hoje em pagamentos via PIX.",
      "icon": "sell",
      "meta": "Hoje"
    },
    {
      "title": "Reembolso aprovado",
      "description": "Credito adicionado a carteira.",
      "icon": "account_balance_wallet",
      "meta": "Ontem"
    },
    {
      "title": "Favorito abriu agora",
      "description": "Cantina ELIDE esta aceitando pedidos.",
      "icon": "restaurant",
      "meta": "Agora"
    }
  ]
};
}
