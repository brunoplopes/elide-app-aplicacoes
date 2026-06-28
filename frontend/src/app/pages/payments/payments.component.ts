import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'payments-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentsPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Checkout",
  "title": "Pagamentos",
  "description": "Escolha PIX, cartao ou dinheiro na entrega com uma experiencia preparada para gateways.",
  "cards": [
    {
      "title": "PIX",
      "icon": "qr_code_2",
      "description": "Pagamento instantaneo com QR Code e copia e cola.",
      "action": "Gerar PIX",
      "path": "/pagamentos/pix"
    },
    {
      "title": "Cartao",
      "icon": "credit_card",
      "description": "Credito e debito com tokenizacao preparada.",
      "action": "Adicionar cartao",
      "path": "/pagamentos/cartao"
    },
    {
      "title": "Dinheiro",
      "icon": "payments",
      "description": "Pagamento na entrega com campo para troco.",
      "action": "Definir troco",
      "path": "/pagamentos/dinheiro"
    }
  ]
};
}
