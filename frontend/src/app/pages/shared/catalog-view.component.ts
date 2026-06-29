import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Page, Store } from '../../models/marketplace.models';
import { MATERIAL } from './page-kit';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-catalog-view',
  imports: [...MATERIAL, RouterLink],
  template: `
    <section class="page-wrap">
      <div class="catalog-hero">
        <span>{{ eyebrow() }}</span>
        <h1>{{ title() }}</h1>
        <p>{{ subtitle() }}</p>
        <label class="search-box">
          <mat-icon>search</mat-icon>
          <input #searchTerm placeholder="Buscar lojas, pratos ou produtos..." />
          <a mat-flat-button routerLink="/busca" [queryParams]="{ q: searchTerm.value }">Buscar</a>
        </label>
      </div>
      <div class="store-grid">
        @for (store of stores().content; track store.id) {
          <article class="store-card">
            <div class="store-image" role="img" [attr.aria-label]="store.name"></div>
            <div class="store-body">
              <div>
                <h2>{{ store.name }}</h2>
                <p>{{ store.segment }}</p>
              </div>
              <span class="status">{{ store.open ? 'Aberta' : 'Fechada' }}</span>
              <p class="meta">Entrega {{ store.deliveryFee | currency:'BRL' }} · Minimo {{ store.minimumOrder | currency:'BRL' }}</p>
              <div class="actions">
                <a mat-flat-button [routerLink]="['/produto', store.id]">Ver produtos</a>
                <button mat-icon-button type="button" aria-label="Favoritar"><mat-icon>favorite</mat-icon></button>
              </div>
            </div>
          </article>
        } @empty {
          <article class="empty-card">Nenhuma loja encontrada no momento.</article>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-wrap { max-width: 1180px; margin: 0 auto; padding: 2.5rem 1.25rem 4rem; }
    .catalog-hero { border-radius: 8px; background: linear-gradient(135deg, rgba(255,107,0,.14), rgba(255,184,77,.16)); padding: clamp(1.5rem, 4vw, 3rem); }
    .catalog-hero span { color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    .catalog-hero h1 { margin: .5rem 0; font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 900; letter-spacing: 0; }
    .catalog-hero p { max-width: 40rem; color: var(--elide-muted); }
    .search-box { margin-top: 1.5rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .75rem; max-width: 720px; border-radius: 999px; background: white; padding: .45rem .45rem .45rem 1rem; box-shadow: var(--elide-shadow-card); }
    .search-box input { min-width: 0; border: 0; outline: 0; color: var(--elide-ink); }
    .search-box a { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }
    .store-grid { margin-top: 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
    .store-card, .empty-card { overflow: hidden; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }
    .store-card { transition: transform .18s ease, box-shadow .18s ease; }
    .store-card:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }
    .store-image { aspect-ratio: 16 / 9; background-image: linear-gradient(to right, rgba(30,30,30,.45), rgba(30,30,30,.05)), url('https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg'); background-position: center; background-size: cover; }
    .store-body { display: grid; gap: .75rem; padding: 1rem; }
    h2 { margin: 0; font-size: 1.1rem; font-weight: 850; }
    p { margin: 0; }
    .meta, .store-body p { color: var(--elide-muted); font-size: .9rem; }
    .status { justify-self: start; border-radius: 999px; background: rgba(255,107,0,.1); color: var(--elide-orange); padding: .25rem .65rem; font-size: .75rem; font-weight: 800; }
    .actions { display: flex; align-items: center; justify-content: space-between; gap: .75rem; }
    .actions a { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }
    .empty-card { padding: 1.25rem; color: var(--elide-muted); }
    @media (max-width: 640px) { .search-box { grid-template-columns: auto 1fr; border-radius: 8px; } .search-box a { grid-column: 1 / -1; } }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogViewComponent {
  readonly eyebrow = input('ELIDE');
  readonly title = input('Lojas parceiras');
  readonly subtitle = input('Explore estabelecimentos ativos na sua cidade.');
  readonly stores = input<Page<Store>>(emptyStores);
}
