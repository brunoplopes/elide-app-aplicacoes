import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'landing-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Plataforma premium",
  "title": "ELIDE para cidades em crescimento",
  "description": "Marketplace completo para conectar clientes, estabelecimentos e entregadores com operacao local eficiente.",
  "actionLabel": "Comecar agora",
  "actionLink": "/cadastro",
  "actionIcon": "rocket_launch",
  "cards": [
    {
      "title": "Marketplace",
      "description": "Jornada completa de pedido e checkout.",
      "icon": "storefront"
    },
    {
      "title": "Gestao",
      "description": "Paineis para admin, loja e entregador.",
      "icon": "dashboard"
    },
    {
      "title": "Escala",
      "description": "Arquitetura preparada para evoluir.",
      "icon": "hub"
    }
  ]
};
}
