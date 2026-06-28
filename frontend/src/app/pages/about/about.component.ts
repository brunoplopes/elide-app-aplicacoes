import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'about-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "ELIDE",
  "title": "Mais que entrega. Conexao.",
  "description": "Delivery moderno para conectar cidades em crescimento a restaurantes, mercados, farmacias e servicos locais.",
  "cards": [
    {
      "title": "Local",
      "description": "Experiencia pensada para operacao de bairro.",
      "icon": "location_city"
    },
    {
      "title": "Rapido",
      "description": "Fluxos curtos para pedir e acompanhar.",
      "icon": "bolt"
    },
    {
      "title": "Seguro",
      "description": "Pagamentos e rastreamento preparados.",
      "icon": "shield"
    }
  ]
};
}
