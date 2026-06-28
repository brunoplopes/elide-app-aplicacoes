import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'favorites-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Preferencias",
  "title": "Favoritos",
  "description": "Acesse rapidamente lojas e produtos que combinam com sua rotina.",
  "cards": [
    {
      "title": "Cantina ELIDE",
      "description": "Aberto agora, entrega estimada em 35 min.",
      "icon": "favorite",
      "action": "Ver loja"
    },
    {
      "title": "Mercado Central",
      "description": "Produtos do dia e ofertas de bairro.",
      "icon": "favorite",
      "action": "Ver loja"
    },
    {
      "title": "Padaria Aurora",
      "description": "Cafe, doces e paes sempre frescos.",
      "icon": "favorite",
      "action": "Ver loja"
    },
    {
      "title": "Farmacia Boa Vida",
      "description": "Medicamentos e conveniencia.",
      "icon": "favorite",
      "action": "Ver loja"
    },
    {
      "title": "Pet Prime",
      "description": "Produtos para pets com entrega rapida.",
      "icon": "favorite",
      "action": "Ver loja"
    }
  ]
};
}
