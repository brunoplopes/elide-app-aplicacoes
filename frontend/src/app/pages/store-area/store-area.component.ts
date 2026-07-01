import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import {
  OrderStatus,
  StoreCategoryResponse,
  StoreDashboardResponse,
  StoreDocumentResponse,
  StoreFinancialEntryResponse,
  StoreFinancialSummaryResponse,
  StoreHourResponse,
  StoreOrderResponse,
  StoreProductResponse,
  StoreProfileResponse,
  StorePromotionResponse,
  StoreReportResponse,
  StoreReviewResponse
} from '../../models/marketplace.models';
import { StoreApiService } from '../../services/store-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { PageMetric } from '../shared/page-kit';

type StorePanel =
  | 'dashboard'
  | 'cadastro'
  | 'documentos'
  | 'produtos'
  | 'categorias'
  | 'complementos'
  | 'horarios'
  | 'estoque'
  | 'promocoes'
  | 'pedidos'
  | 'financeiro'
  | 'relatorios'
  | 'avaliacoes';

type StoreTask = {
  title: string;
  description: string;
  icon: string;
  status: string;
};

type StoreStatusRow = {
  status: OrderStatus;
  label: string;
  value: number;
};

const orderFlow: Partial<Record<OrderStatus, OrderStatus>> = {
  CREATED: 'ACCEPTED',
  ACCEPTED: 'PREPARING',
  PREPARING: 'READY_FOR_PICKUP',
  READY_FOR_PICKUP: 'OUT_FOR_DELIVERY',
  OUT_FOR_DELIVERY: 'DELIVERED',
  REFUND_REQUESTED: 'REFUNDED'
};

@Component({
  selector: 'store-area-page',
  standalone: true,
  imports: [MatButtonModule, MatChipsModule, MatIconModule, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './store-area.component.html',
  styleUrl: './store-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreAreaPageComponent implements OnInit {
  private readonly api = inject(StoreApiService);

  readonly page = this;
  readonly activePanel = signal<StorePanel>('dashboard');
  readonly loading = signal(true);
  readonly actionLoading = signal<string | null>(null);
  readonly error = signal<string | null>(null);

  readonly profile = signal<StoreProfileResponse | null>(null);
  readonly dashboard = signal<StoreDashboardResponse | null>(null);
  readonly categories = signal<StoreCategoryResponse[]>([]);
  readonly documents = signal<StoreDocumentResponse[]>([]);
  readonly products = signal<StoreProductResponse[]>([]);
  readonly orders = signal<StoreOrderResponse[]>([]);
  readonly hours = signal<StoreHourResponse[]>([]);
  readonly promotions = signal<StorePromotionResponse[]>([]);
  readonly financialSummary = signal<StoreFinancialSummaryResponse | null>(null);
  readonly financialEntries = signal<StoreFinancialEntryResponse[]>([]);
  readonly report = signal<StoreReportResponse | null>(null);
  readonly reviews = signal<StoreReviewResponse[]>([]);

  readonly panels: { id: StorePanel; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'cadastro', label: 'Cadastro', icon: 'storefront' },
    { id: 'documentos', label: 'Documentos', icon: 'upload_file' },
    { id: 'produtos', label: 'Produtos', icon: 'restaurant_menu' },
    { id: 'categorias', label: 'Categorias', icon: 'category' },
    { id: 'complementos', label: 'Complementos', icon: 'add_circle' },
    { id: 'horarios', label: 'Horarios', icon: 'schedule' },
    { id: 'estoque', label: 'Estoque', icon: 'inventory_2' },
    { id: 'promocoes', label: 'Promocoes', icon: 'local_offer' },
    { id: 'pedidos', label: 'Pedidos', icon: 'receipt_long' },
    { id: 'financeiro', label: 'Financeiro', icon: 'account_balance_wallet' },
    { id: 'relatorios', label: 'Relatorios', icon: 'bar_chart' },
    { id: 'avaliacoes', label: 'Avaliacoes', icon: 'reviews' }
  ];

  readonly metrics = computed<PageMetric[]>(() => {
    const dashboard = this.dashboard();
    const financial = this.financialSummary();
    return [
      { label: 'Pedidos hoje', value: String(dashboard?.ordersToday ?? 0), icon: 'receipt_long' },
      { label: 'Faturamento', value: this.money(dashboard?.revenueToday ?? financial?.revenue ?? 0), icon: 'payments' },
      { label: 'Ticket medio', value: this.money(dashboard?.averageTicket ?? financial?.averageTicket ?? 0), icon: 'monitoring' },
      { label: 'Avaliacao', value: String((dashboard?.averageRating ?? 0).toFixed(1)), icon: 'star' }
    ];
  });

  readonly onboarding = computed<StoreTask[]>(() => {
    const profile = this.profile();
    const docs = this.documents();
    return [
      {
        title: 'Cadastro do estabelecimento',
        description: profile ? `${profile.name} - ${profile.segment}` : 'Cadastre os dados comerciais para operar na ELIDE.',
        icon: 'storefront',
        status: profile ? this.storeStatusLabel(profile.status) : 'Pendente'
      },
      {
        title: 'Envio de documentacao',
        description: docs.length ? `${docs.length} documento(s) enviados para analise.` : 'Contrato social, documento do responsavel e comprovante bancario.',
        icon: 'upload_file',
        status: docs.length ? this.documentStatusLabel(docs[0].status) : 'Pendente'
      },
      {
        title: 'Aprovacao pelo administrador',
        description: 'Analise de risco, validacao dos documentos e liberacao operacional.',
        icon: 'verified_user',
        status: profile ? this.storeStatusLabel(profile.status) : 'Aguardando cadastro'
      }
    ];
  });

  readonly catalogTasks = computed<StoreTask[]>(() => [
    { title: 'Gestao de produtos', description: 'Fotos, nomes, descricoes, precos e disponibilidade.', icon: 'restaurant_menu', status: `${this.products().length} itens` },
    { title: 'Gestao de categorias', description: 'Organizacao do cardapio por sessoes e ordem de exibicao.', icon: 'category', status: `${this.categories().length} categorias` },
    { title: 'Gestao de complementos', description: 'Adicionais obrigatorios/opcionais, limites e precificacao.', icon: 'add_circle', status: 'API pronta' },
    { title: 'Controle de estoque', description: 'Alertas de ruptura, pausa automatica e saldo por produto.', icon: 'inventory_2', status: `${this.dashboard()?.lowStockProducts ?? 0} alertas` }
  ]);

  readonly operationTasks = computed<StoreTask[]>(() => [
    { title: 'Gestao de horarios', description: 'Turnos, feriados, pausa emergencial e tempo de preparo.', icon: 'schedule', status: `${this.hours().length} horarios` },
    { title: 'Promocoes', description: 'Combos, descontos por horario, cupons e campanhas.', icon: 'local_offer', status: `${this.promotions().filter((promotion) => promotion.active).length} ativas` },
    { title: 'Recebimento de pedidos', description: 'Fila ao vivo com prioridade por SLA.', icon: 'notifications_active', status: `${this.orders().filter((order) => order.status === 'CREATED').length} novos` },
    { title: 'Alteracao de status', description: 'Aceitar, preparar, pronto para retirada, entregue ou cancelar.', icon: 'published_with_changes', status: 'Tempo real' }
  ]);

  readonly financeReports = computed<StoreTask[]>(() => [
    { title: 'Financeiro', description: 'Repasses, taxas, saldo disponivel, agenda de pagamentos e extrato.', icon: 'account_balance_wallet', status: this.money(this.financialSummary()?.pendingSettlement ?? 0) },
    { title: 'Relatorios', description: 'Vendas por periodo, produtos campeoes, cancelamentos e conversao.', icon: 'bar_chart', status: `${this.report()?.orders ?? 0} pedidos` },
    { title: 'Dashboard', description: 'KPIs operacionais, metas, SLA, ruptura e performance por horario.', icon: 'dashboard', status: `${this.dashboard()?.activeProducts ?? 0} ativos` },
    { title: 'Avaliacoes', description: 'Notas, comentarios, respostas publicas e oportunidades de melhoria.', icon: 'reviews', status: `${this.reviews().length} respostas` }
  ]);

  readonly stockAlerts = computed(() => this.products().filter((product) => product.stockQuantity <= 5));
  readonly pausedProducts = computed(() => this.products().filter((product) => !product.active));
  readonly activePromotions = computed(() => this.promotions().filter((promotion) => promotion.active));
  readonly newOrders = computed(() => this.orders().filter((order) => order.status === 'CREATED'));
  readonly dashboardStatusRows = computed(() => this.statusRows(this.dashboard()?.ordersByStatus));
  readonly reportStatusRows = computed(() => this.statusRows(this.report()?.ordersByStatus));

  ngOnInit(): void {
    this.loadStore();
  }

  setPanel(panel: StorePanel): void {
    this.activePanel.set(panel);
  }

  loadStore(): void {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      profile: this.safe(this.api.profile(), null),
      dashboard: this.safe(this.api.dashboard(), null),
      categories: this.safe(this.api.categories(), []),
      documents: this.safe(this.api.documents(), []),
      products: this.safe(this.api.products(30), { content: [], totalElements: 0, totalPages: 0, number: 0 }),
      orders: this.safe(this.api.orders(), []),
      hours: this.safe(this.api.hours(), []),
      promotions: this.safe(this.api.promotions(), []),
      financialSummary: this.safe(this.api.financialSummary(), null),
      financialEntries: this.safe(this.api.financialEntries(), []),
      report: this.safe(this.api.reports(), null),
      reviews: this.safe(this.api.reviews(), [])
    }).pipe(finalize(() => this.loading.set(false))).subscribe((data) => {
      this.profile.set(data.profile);
      this.dashboard.set(data.dashboard);
      this.categories.set(data.categories);
      this.documents.set(data.documents);
      this.products.set(data.products.content);
      this.orders.set(data.orders);
      this.hours.set(data.hours);
      this.promotions.set(data.promotions);
      this.financialSummary.set(data.financialSummary);
      this.financialEntries.set(data.financialEntries);
      this.report.set(data.report);
      this.reviews.set(data.reviews);
    });
  }

  toggleProduct(product: StoreProductResponse): void {
    this.actionLoading.set(`product-${product.id}`);
    this.api.updateStock(product.id, { stockQuantity: product.stockQuantity, active: !product.active })
      .pipe(finalize(() => this.actionLoading.set(null)))
      .subscribe({
        next: (updated) => {
          this.products.update((products) => products.map((item) => item.id === updated.id ? updated : item));
          this.loadDashboard();
        },
        error: () => this.error.set('Nao foi possivel atualizar o estoque do produto.')
      });
  }

  advanceOrder(order: StoreOrderResponse): void {
    const status = this.nextStatus(order.status);
    if (!status) {
      return;
    }
    this.actionLoading.set(`order-${order.id}`);
    this.api.updateOrderStatus(order.id, status)
      .pipe(finalize(() => this.actionLoading.set(null)))
      .subscribe({
        next: (updated) => {
          this.orders.update((orders) => orders.map((item) => item.id === updated.id ? updated : item));
          this.loadDashboard();
          this.loadFinancial();
        },
        error: () => this.error.set('Nao foi possivel alterar o status do pedido.')
      });
  }

  syncTodayHour(): void {
    const dayOfWeek = new Date().getDay();
    this.actionLoading.set('hours');
    this.api.upsertHour({ dayOfWeek, opensAt: '08:00:00', closesAt: '22:00:00', active: true })
      .pipe(finalize(() => this.actionLoading.set(null)))
      .subscribe({
        next: () => this.api.hours().subscribe((hours) => this.hours.set(hours)),
        error: () => this.error.set('Nao foi possivel atualizar o horario de hoje.')
      });
  }

  nextStatus(status: OrderStatus): OrderStatus | null {
    return orderFlow[status] ?? null;
  }

  productCategory(product: StoreProductResponse): string {
    return this.categories().find((category) => category.id === product.categoryId)?.name ?? 'Categoria';
  }

  orderStatusLabel(status: OrderStatus): string {
    const labels: Record<OrderStatus, string> = {
      CREATED: 'Novo',
      ACCEPTED: 'Aceito',
      PREPARING: 'Preparando',
      READY_FOR_PICKUP: 'Pronto',
      OUT_FOR_DELIVERY: 'Saiu para entrega',
      DELIVERED: 'Entregue',
      CANCELLED: 'Cancelado',
      REFUND_REQUESTED: 'Reembolso solicitado',
      REFUNDED: 'Reembolsado'
    };
    return labels[status];
  }

  storeStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      PENDING_DOCUMENTS: 'Documentos pendentes',
      PENDING_APPROVAL: 'Em analise',
      APPROVED: 'Aprovado',
      SUSPENDED: 'Suspenso',
      REJECTED: 'Rejeitado'
    };
    return labels[status] ?? status;
  }

  documentStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      PENDING_REVIEW: 'Em analise',
      APPROVED: 'Aprovado',
      REJECTED: 'Rejeitado'
    };
    return labels[status] ?? status;
  }

  panelBadge(panel: StorePanel): string {
    const badges: Record<StorePanel, string> = {
      dashboard: `${this.dashboard()?.ordersToday ?? 0} hoje`,
      cadastro: this.profile() ? this.storeStatusLabel(this.profile()!.status) : 'Pendente',
      documentos: `${this.documents().length}`,
      produtos: `${this.products().length}`,
      categorias: `${this.categories().length}`,
      complementos: `${this.products().length} produtos`,
      horarios: `${this.hours().length}`,
      estoque: `${this.stockAlerts().length} alertas`,
      promocoes: `${this.activePromotions().length} ativas`,
      pedidos: `${this.newOrders().length} novos`,
      financeiro: this.money(this.financialSummary()?.pendingSettlement ?? 0),
      relatorios: `${this.report()?.orders ?? 0}`,
      avaliacoes: `${this.reviews().length}`
    };
    return badges[panel];
  }

  dayName(dayOfWeek: number): string {
    const labels = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    return labels[dayOfWeek] ?? `Dia ${dayOfWeek}`;
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }

  shortId(id: string): string {
    return `#${id.slice(0, 8).toUpperCase()}`;
  }

  dateTime(value: string): string {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
  }

  private loadDashboard(): void {
    this.api.dashboard().subscribe({
      next: (dashboard) => this.dashboard.set(dashboard),
      error: () => this.error.set('Nao foi possivel atualizar o dashboard.')
    });
  }

  private loadFinancial(): void {
    forkJoin({
      summary: this.api.financialSummary(),
      entries: this.api.financialEntries(),
      report: this.api.reports()
    }).subscribe({
      next: ({ summary, entries, report }) => {
        this.financialSummary.set(summary);
        this.financialEntries.set(entries);
        this.report.set(report);
      },
      error: () => this.error.set('Nao foi possivel atualizar o financeiro.')
    });
  }

  private safe<T>(request: import('rxjs').Observable<T>, fallback: T) {
    return request.pipe(catchError(() => {
      this.error.set('Algumas informacoes da loja nao puderam ser carregadas.');
      return of(fallback);
    }));
  }

  private statusRows(source?: Record<OrderStatus, number>): StoreStatusRow[] {
    const statuses: OrderStatus[] = [
      'CREATED',
      'ACCEPTED',
      'PREPARING',
      'READY_FOR_PICKUP',
      'OUT_FOR_DELIVERY',
      'DELIVERED',
      'CANCELLED',
      'REFUND_REQUESTED',
      'REFUNDED'
    ];
    return statuses.map((status) => ({ status, label: this.orderStatusLabel(status), value: source?.[status] ?? 0 }));
  }
}
