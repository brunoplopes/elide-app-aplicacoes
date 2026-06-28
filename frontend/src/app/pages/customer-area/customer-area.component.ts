import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm } from '../shared/page-kit';

@Component({
  selector: 'customer-area-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './customer-area.component.html',
  styleUrl: './customer-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerAreaPageComponent {
  readonly page = this;

  readonly vm: FeaturePageVm = {
  "eyebrow": "Area do cliente",
  "title": "Area do Cliente",
  "description": "Tudo que voce precisa para pedir, pagar, acompanhar e avaliar suas entregas com menos atrito.",
  "actionLabel": "Novo pedido",
  "actionLink": "/restaurantes",
  "actionIcon": "restaurant",
  "metrics": [
    {
      "label": "Pedidos",
      "value": "18",
      "icon": "receipt_long"
    },
    {
      "label": "Cupons ativos",
      "value": "4",
      "icon": "sell"
    },
    {
      "label": "Saldo",
      "value": "R$ 86,40",
      "icon": "account_balance_wallet"
    },
    {
      "label": "Favoritos",
      "value": "9",
      "icon": "favorite"
    }
  ],
  "actions": [
    {
      "label": "Editar perfil",
      "path": "/perfil",
      "icon": "person",
      "description": "Dados pessoais e contato"
    },
    {
      "label": "Alterar senha",
      "path": "/alterar-senha",
      "icon": "lock_reset",
      "description": "Seguranca da conta"
    },
    {
      "label": "Enderecos",
      "path": "/enderecos",
      "icon": "location_on",
      "description": "Locais de entrega"
    },
    {
      "label": "Historico",
      "path": "/meus-pedidos",
      "icon": "receipt_long",
      "description": "Pedidos e recompra"
    },
    {
      "label": "Favoritos",
      "path": "/favoritos",
      "icon": "favorite",
      "description": "Lojas preferidas"
    },
    {
      "label": "Cupons",
      "path": "/cupons",
      "icon": "sell",
      "description": "Descontos ativos"
    },
    {
      "label": "Carteira",
      "path": "/carteira",
      "icon": "account_balance_wallet",
      "description": "Saldo e extrato"
    },
    {
      "label": "Avaliacoes",
      "path": "/avaliacoes",
      "icon": "star",
      "description": "Notas e comentarios"
    },
    {
      "label": "Notificacoes",
      "path": "/notificacoes",
      "icon": "notifications",
      "description": "Alertas importantes"
    },
    {
      "label": "Pagamentos",
      "path": "/pagamentos",
      "icon": "payments",
      "description": "Central de metodos"
    },
    {
      "label": "PIX",
      "path": "/pagamentos/pix",
      "icon": "qr_code_2",
      "description": "QR Code e copia e cola"
    },
    {
      "label": "Cartao",
      "path": "/pagamentos/cartao",
      "icon": "credit_card",
      "description": "Credito ou debito"
    },
    {
      "label": "Dinheiro",
      "path": "/pagamentos/dinheiro",
      "icon": "payments",
      "description": "Troco na entrega"
    },
    {
      "label": "Rastreamento",
      "path": "/rastreamento",
      "icon": "near_me",
      "description": "Entrega ao vivo"
    }
  ]
};
}
