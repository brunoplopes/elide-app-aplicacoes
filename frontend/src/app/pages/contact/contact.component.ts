import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'contact-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Atendimento",
  "title": "Contato",
  "description": "Canais para clientes, lojas e entregadores resolverem tudo com velocidade.",
  "cards": [
    {
      "title": "WhatsApp",
      "description": "Atendimento prioritario para pedidos ativos.",
      "icon": "chat"
    },
    {
      "title": "E-mail",
      "description": "Solicitacoes comerciais e suporte.",
      "icon": "mail"
    },
    {
      "title": "Ouvidoria",
      "description": "Casos sensiveis e auditoria.",
      "icon": "verified_user"
    }
  ]
};
}
