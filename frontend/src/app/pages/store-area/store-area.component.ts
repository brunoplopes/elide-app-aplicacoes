import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'store-area-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './store-area.component.html',
  styleUrl: './store-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreAreaPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Estabelecimentos",
  "title": "Area da loja",
  "description": "Operacao pronta para cardapio, pedidos, financeiro e atendimento local.",
  "cards": [
    {
      "title": "Pedidos",
      "description": "Fila operacional com status e SLA.",
      "icon": "receipt_long"
    },
    {
      "title": "Cardapio",
      "description": "Produtos, fotos, precos e disponibilidade.",
      "icon": "restaurant_menu"
    },
    {
      "title": "Financeiro",
      "description": "Recebiveis, repasses e cupons.",
      "icon": "payments"
    }
  ]
};
}
