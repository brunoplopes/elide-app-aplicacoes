import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'terms-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TermsPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Legal",
  "title": "Termos de uso",
  "description": "Regras de uso da plataforma, pagamentos, cupons, entregas e responsabilidades.",
  "cards": [
    {
      "title": "Clientes",
      "description": "Cadastro, pedidos e cancelamentos.",
      "icon": "person"
    },
    {
      "title": "Lojas",
      "description": "Produtos, precos e atendimento.",
      "icon": "storefront"
    },
    {
      "title": "Entregadores",
      "description": "Rotas, aceite e conduta.",
      "icon": "two_wheeler"
    }
  ]
};
}
