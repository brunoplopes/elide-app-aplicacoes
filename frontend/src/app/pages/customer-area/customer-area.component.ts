import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, forkJoin, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL, PageMetric } from '../shared/page-kit';

@Component({
  selector: 'customer-area-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent],
  templateUrl: './customer-area.component.html',
  styleUrl: './customer-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerAreaPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly metrics = signal<PageMetric[]>([
    { label: 'Pedidos', value: '0', icon: 'receipt_long' },
    { label: 'Cupons ativos', value: '0', icon: 'sell' },
    { label: 'Saldo', value: 'R$ 0,00', icon: 'account_balance_wallet' },
    { label: 'Favoritos', value: '0', icon: 'favorite' }
  ]);

  readonly vm = computed<FeaturePageVm>(() => ({
    eyebrow: 'Area do cliente',
    title: 'Area do Cliente',
    description: this.loading() ? 'Sincronizando seus dados com a API.' : 'Tudo que voce precisa para pedir, pagar, acompanhar e avaliar suas entregas com menos atrito.',
    actionLabel: 'Novo pedido',
    actionLink: '/restaurantes',
    actionIcon: 'restaurant',
    metrics: this.metrics(),
    actions: [
      { label: 'Editar perfil', path: '/perfil', icon: 'person', description: 'Dados pessoais e contato' },
      { label: 'Alterar senha', path: '/alterar-senha', icon: 'lock_reset', description: 'Seguranca da conta' },
      { label: 'Enderecos', path: '/enderecos', icon: 'location_on', description: 'Locais de entrega' },
      { label: 'Historico', path: '/meus-pedidos', icon: 'receipt_long', description: 'Pedidos e recompra' },
      { label: 'Favoritos', path: '/favoritos', icon: 'favorite', description: 'Lojas preferidas' },
      { label: 'Cupons', path: '/cupons', icon: 'sell', description: 'Descontos ativos' },
      { label: 'Carteira', path: '/carteira', icon: 'account_balance_wallet', description: 'Saldo e extrato' },
      { label: 'Avaliacoes', path: '/avaliacoes', icon: 'star', description: 'Notas e comentarios' },
      { label: 'Notificacoes', path: '/notificacoes', icon: 'notifications', description: 'Alertas importantes' },
      { label: 'Pagamentos', path: '/pagamentos', icon: 'payments', description: 'Central de metodos' },
      { label: 'PIX', path: '/pagamentos/pix', icon: 'qr_code_2', description: 'QR Code e copia e cola' },
      { label: 'Cartao', path: '/pagamentos/cartao', icon: 'credit_card', description: 'Credito ou debito' },
      { label: 'Dinheiro', path: '/pagamentos/dinheiro', icon: 'payments', description: 'Troco na entrega' },
      { label: 'Rastreamento', path: '/rastreamento', icon: 'near_me', description: 'Entrega ao vivo' }
    ]
  }));

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      summary: this.api.summary().pipe(catchError(() => of(null))),
      orders: this.api.myOrders().pipe(catchError(() => of([]))),
      coupons: this.api.coupons().pipe(catchError(() => of([]))),
      wallet: this.api.wallet().pipe(catchError(() => of({ balance: 0, entries: [] }))),
      favorites: this.api.favorites().pipe(catchError(() => of([])))
    }).subscribe(({ summary, orders, coupons, wallet, favorites }) => {
      this.metrics.set([
        { label: 'Pedidos', value: String(summary?.orders ?? orders.length), icon: 'receipt_long' },
        { label: 'Cupons ativos', value: String(summary?.activeCoupons ?? coupons.filter((coupon) => coupon.active).length), icon: 'sell' },
        { label: 'Saldo', value: this.money(summary?.walletBalance ?? wallet.balance), icon: 'account_balance_wallet' },
        { label: 'Favoritos', value: String(summary?.favorites ?? favorites.length), icon: 'favorite' }
      ]);
      this.loading.set(false);
      if (!summary) {
        this.error.set('Alguns endpoints de cliente ainda nao responderam; exibindo dados disponiveis.');
      }
    });
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
