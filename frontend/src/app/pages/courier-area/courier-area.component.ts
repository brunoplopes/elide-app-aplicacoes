import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'courier-area-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './courier-area.component.html',
  styleUrl: './courier-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourierAreaPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Entregadores",
  "title": "Area do entregador",
  "description": "Rotas, ganhos, aceite de corrida e historico de entregas em uma jornada simples.",
  "cards": [
    {
      "title": "Rotas",
      "description": "Pedidos proximos e navegacao guiada.",
      "icon": "near_me"
    },
    {
      "title": "Ganhos",
      "description": "Extrato e repasses transparentes.",
      "icon": "account_balance_wallet"
    },
    {
      "title": "Suporte",
      "description": "Contato rapido durante a entrega.",
      "icon": "support_agent"
    }
  ]
};
}
