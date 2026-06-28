import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'addresses-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Entrega",
  "title": "Enderecos",
  "description": "Salve locais de entrega e deixe o frete pronto para calculo rapido.",
  "actionLabel": "Adicionar",
  "actionLink": "/enderecos",
  "actionIcon": "add_location",
  "cards": [
    {
      "title": "Casa",
      "description": "Rua das Acacias, 124 - entrega padrao.",
      "icon": "home_pin",
      "action": "Editar"
    },
    {
      "title": "Trabalho",
      "description": "Av. Brasil, 900 - portaria comercial.",
      "icon": "business",
      "action": "Editar"
    },
    {
      "title": "Familia",
      "description": "Rua Sete de Setembro, 44 - finais de semana.",
      "icon": "location_on",
      "action": "Editar"
    }
  ]
};
}
