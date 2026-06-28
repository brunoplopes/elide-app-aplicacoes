import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-wallet-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletPageComponent {
  readonly page = this;

  readonly balance = 'R$ 86,40';
  readonly entries = [
    { icon: 'add', title: 'Reembolso aprovado', value: '+ R$ 24,90' },
    { icon: 'restaurant', title: 'Pedido Cantina ELIDE', value: '- R$ 48,80' },
    { icon: 'redeem', title: 'Cashback mercado', value: '+ R$ 6,50' }
  ];
}
