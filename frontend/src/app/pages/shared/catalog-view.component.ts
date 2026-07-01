import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Page, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { MATERIAL } from './page-kit';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };
type CatalogFilter = 'all' | 'open' | 'nearby' | 'delivery' | 'offers';

@Component({
  selector: 'elide-catalog-view',
  imports: [...MATERIAL, RouterLink],
  template: `
    <section class="page-wrap">
      <div class="catalog-hero">
        <span>{{ eyebrow() }}</span>
        <h1>{{ title() }}</h1>
        <p>{{ subtitle() }}</p>
        <form class="search-box" (ngSubmit)="search()">
          <mat-icon>search</mat-icon>
          <input [formControl]="searchControl" placeholder="Buscar lojas, pratos ou produtos..." />
          <button mat-flat-button type="submit">Buscar</button>
        </form>
        <div class="filter-row" aria-label="Filtros de catalogo">
          @for (filter of filters; track filter.key) {
            <button type="button" [class.active]="activeFilter() === filter.key" (click)="setFilter(filter.key)">
              <mat-icon>{{ filter.icon }}</mat-icon>
              <span>{{ filter.label }}</span>
            </button>
          }
        </div>
      </div>

      @if (loading()) {
        <section class="feedback-card">
          <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>
          <span>Carregando lojas para voce...</span>
        </section>
      }

      @if (errorMessage()) {
        <section class="feedback-card error">
          <mat-icon>error_outline</mat-icon>
          <span>{{ errorMessage() }}</span>
        </section>
      }

      <div class="catalog-summary">
        <strong>{{ resultLabel() }}</strong>
        <span>{{ locationHint() }}</span>
      </div>

      <div class="store-grid" [class.loading]="loading()">
        @for (store of visibleStores(); track store.id) {
          <article class="store-card">
            <div class="store-image" role="img" [attr.aria-label]="store.name"></div>
            <div class="store-body">
              <div class="store-title">
                <h2>{{ store.name }}</h2>
                <span class="status" [class.closed]="!store.open">{{ store.open ? 'Aberta' : 'Fechada' }}</span>
              </div>
              <p>{{ store.segment }}</p>
              <div class="meta-grid">
                <span><mat-icon>payments</mat-icon> Entrega {{ store.deliveryFee | currency:'BRL' }}</span>
                <span><mat-icon>shopping_bag</mat-icon> Minimo {{ store.minimumOrder | currency:'BRL' }}</span>
                <span><mat-icon>near_me</mat-icon> {{ distance(store) }}</span>
              </div>
              <div class="actions">
                <a mat-flat-button [routerLink]="['/produto', store.id]">Ver produtos</a>
                <button mat-icon-button type="button" aria-label="Favoritar"><mat-icon>favorite</mat-icon></button>
              </div>
            </div>
          </article>
        } @empty {
          @if (!loading()) {
            <article class="empty-card">
              <mat-icon>storefront</mat-icon>
              <strong>Nenhuma loja encontrada</strong>
              <span>Tente remover filtros ou buscar por outra categoria.</span>
              <a mat-button routerLink="/busca">Pesquisar no ELIDE</a>
            </article>
          }
        }
      </div>
    </section>
  `,
  styles: [`
    .page-wrap { width: min(1180px, calc(100% - 2rem)); margin: 0 auto; overflow-x: clip; padding: 2.5rem 0 4rem; }
    .catalog-hero { border-radius: 8px; background: linear-gradient(135deg, rgba(255,107,0,.14), rgba(255,184,77,.16)); padding: clamp(1.5rem, 4vw, 3rem); }
    .catalog-hero span { color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    .catalog-hero h1 { margin: .5rem 0; font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; letter-spacing: 0; overflow-wrap: anywhere; }
    .catalog-hero p { max-width: 40rem; color: var(--elide-muted); }
    .search-box { margin-top: 1.5rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .75rem; max-width: 720px; border-radius: 999px; background: white; padding: .45rem .45rem .45rem 1rem; box-shadow: var(--elide-shadow-card); }
    .search-box input { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--elide-ink); font: inherit; }
    .search-box button { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; min-width: 118px; }
    .filter-row { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1rem; }
    .filter-row button { display: inline-flex; align-items: center; gap: .4rem; border: 1px solid rgba(255,107,0,.18); border-radius: 999px; background: white; color: var(--elide-ink); cursor: pointer; font-weight: 850; padding: .65rem .85rem; transition: background .18s ease, border-color .18s ease, color .18s ease, transform .18s ease; }
    .filter-row button:hover, .filter-row button.active { border-color: rgba(255,107,0,.55); background: #fff4e8; color: var(--elide-orange); transform: translateY(-1px); }
    .filter-row mat-icon { font-size: 1rem; height: 1rem; width: 1rem; }
    .feedback-card { display: flex; align-items: center; gap: .75rem; margin-top: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); color: var(--elide-muted); font-weight: 850; padding: .95rem 1rem; box-shadow: var(--elide-shadow-card); }
    .feedback-card.error { border-color: rgba(220, 38, 38, .2); color: #b42318; }
    .feedback-card.error mat-icon { color: #b42318; }
    .catalog-summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.4rem; color: var(--elide-muted); }
    .catalog-summary strong { color: var(--elide-ink); font-size: 1.05rem; }
    .store-grid { margin-top: 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
    .store-grid.loading { opacity: .64; }
    .store-card, .empty-card { overflow: hidden; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }
    .store-card { transition: transform .18s ease, box-shadow .18s ease; }
    .store-card:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }
    .store-image { aspect-ratio: 16 / 9; background-image: linear-gradient(to right, rgba(30,30,30,.45), rgba(30,30,30,.05)), url('https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg'); background-position: center; background-size: cover; }
    .store-body { display: grid; gap: .75rem; min-width: 0; padding: 1rem; overflow-wrap: anywhere; }
    .store-title { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; }
    h2 { margin: 0; font-size: 1.1rem; font-weight: 850; }
    p { margin: 0; }
    .meta, .store-body p { color: var(--elide-muted); font-size: .9rem; }
    .status { flex: 0 0 auto; border-radius: 999px; background: rgba(33, 150, 83, .1); color: #16824f; padding: .25rem .65rem; font-size: .75rem; font-weight: 900; }
    .status.closed { background: rgba(45,45,45,.08); color: var(--elide-muted); }
    .meta-grid { display: grid; gap: .45rem; color: var(--elide-muted); font-size: .88rem; }
    .meta-grid span { display: inline-flex; align-items: center; gap: .4rem; min-width: 0; }
    .meta-grid mat-icon { color: var(--elide-orange); font-size: 1rem; height: 1rem; width: 1rem; }
    .actions { display: flex; align-items: center; justify-content: space-between; gap: .75rem; }
    .actions a { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }
    .empty-card { display: grid; gap: .45rem; grid-column: 1 / -1; padding: 1.25rem; color: var(--elide-muted); }
    .empty-card mat-icon { color: var(--elide-orange); }
    .empty-card strong { color: var(--elide-ink); }
    .empty-card a { justify-self: start; color: var(--elide-orange) !important; font-weight: 900; }
    @media (max-width: 640px) { .page-wrap { width: min(100% - 1rem, 1180px); padding: 1.5rem 0 2.5rem; } .search-box { grid-template-columns: auto 1fr; border-radius: 8px; } .search-box button { grid-column: 1 / -1; width: 100%; } .filter-row button { flex: 1 1 calc(50% - .65rem); justify-content: center; min-width: 0; } .catalog-summary { align-items: flex-start; flex-direction: column; gap: .25rem; } .store-title { flex-direction: column; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogViewComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private lastLoadedSegment = '';

  readonly eyebrow = input('ELIDE');
  readonly title = input('Lojas parceiras');
  readonly subtitle = input('Explore estabelecimentos ativos na sua cidade.');
  readonly segment = input<string | null>(null);
  readonly storesInput = input<Page<Store> | null>(null, { alias: 'stores' });
  readonly catalogStores = signal<Page<Store>>(emptyStores);
  readonly loading = signal(false);
  readonly errorMessage = signal('');
  readonly activeFilter = signal<CatalogFilter>('all');
  readonly searchControl = new FormControl('', { nonNullable: true });
  readonly filters: Array<{ key: CatalogFilter; label: string; icon: string }> = [
    { key: 'all', label: 'Todos', icon: 'apps' },
    { key: 'open', label: 'Aberto agora', icon: 'storefront' },
    { key: 'nearby', label: 'Mais perto', icon: 'near_me' },
    { key: 'delivery', label: 'Menor entrega', icon: 'payments' },
    { key: 'offers', label: 'Promocoes', icon: 'local_offer' }
  ];

  readonly sourceStores = computed(() => this.segment() ? this.catalogStores() : (this.storesInput() ?? emptyStores));
  readonly visibleStores = computed(() => {
    const stores = [...this.sourceStores().content];
    switch (this.activeFilter()) {
      case 'open':
        return stores.filter((store) => store.open);
      case 'nearby':
        return stores.sort((a, b) => this.distanceValue(a) - this.distanceValue(b));
      case 'delivery':
        return stores.sort((a, b) => (a.deliveryFee ?? 0) - (b.deliveryFee ?? 0));
      case 'offers':
        return stores.filter((store) => (store.deliveryFee ?? 0) <= 7 || (store.minimumOrder ?? 0) <= 25);
      default:
        return stores;
    }
  });
  readonly resultLabel = computed(() => {
    const total = this.visibleStores().length;
    return `${total} loja${total === 1 ? '' : 's'} encontrada${total === 1 ? '' : 's'}`;
  });
  readonly locationHint = computed(() => this.hasDistance() ? 'Ordenacao preparada por proximidade.' : 'Catalogo exibido com fallback por segmento.');

  constructor() {
    effect(() => {
      const segment = this.segment();
      if (!segment || segment === this.lastLoadedSegment) {
        return;
      }
      this.lastLoadedSegment = segment;
      queueMicrotask(() => this.load(segment));
    });
  }

  setFilter(filter: CatalogFilter): void {
    this.activeFilter.set(filter);
  }

  search(): void {
    const q = this.searchControl.value.trim();
    this.router.navigate(['/busca'], q ? { queryParams: { q } } : undefined);
  }

  distance(store: Store): string {
    if (store.distanceMeters === null || store.distanceMeters === undefined) {
      return 'Distancia indisponivel';
    }
    if (store.distanceMeters < 1000) {
      return `${Math.round(store.distanceMeters)} m`;
    }
    return `${(store.distanceMeters / 1000).toFixed(1).replace('.', ',')} km`;
  }

  private load(segment: string): void {
    this.loading.set(true);
    this.errorMessage.set('');
    this.api.stores({ segment, size: 24, preferNearby: true }).pipe(
      catchError(() => {
        this.errorMessage.set('Nao foi possivel carregar este catalogo agora.');
        return of(emptyStores);
      }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((stores) => {
      this.catalogStores.set(stores);
      this.loading.set(false);
    });
  }

  private hasDistance(): boolean {
    return this.sourceStores().content.some((store) => store.distanceMeters !== null && store.distanceMeters !== undefined);
  }

  private distanceValue(store: Store): number {
    return store.distanceMeters ?? Number.MAX_SAFE_INTEGER;
  }
}
