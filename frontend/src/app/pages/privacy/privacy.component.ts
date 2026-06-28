import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'privacy-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Privacidade",
  "title": "Politica de privacidade",
  "description": "Tratamento de dados para cadastro, pedidos, pagamentos, notificacoes e seguranca.",
  "cards": [
    {
      "title": "Dados da conta",
      "description": "Nome, contato e preferencias.",
      "icon": "badge"
    },
    {
      "title": "Localizacao",
      "description": "Enderecos e rastreamento de entrega.",
      "icon": "location_on"
    },
    {
      "title": "Pagamentos",
      "description": "Tokens e referencias transacionais.",
      "icon": "lock"
    }
  ]
};
}
