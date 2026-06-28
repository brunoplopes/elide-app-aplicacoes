import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'coupons-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CouponsPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Promocoes",
  "title": "Cupons de desconto",
  "description": "Descontos prontos para aplicar no carrinho.",
  "cards": [
    {
      "title": "ELIDE10",
      "description": "10% OFF no primeiro pedido.",
      "icon": "local_offer",
      "action": "Usar no carrinho"
    },
    {
      "title": "FRETEGRATIS",
      "description": "Entrega gratis em lojas selecionadas.",
      "icon": "moped",
      "action": "Aplicar"
    },
    {
      "title": "PIX15",
      "description": "Desconto para pagamento via PIX.",
      "icon": "qr_code_2",
      "action": "Gerar PIX"
    },
    {
      "title": "MERCADO20",
      "description": "Oferta especial para mercados.",
      "icon": "shopping_basket",
      "action": "Ver ofertas"
    }
  ]
};
}
