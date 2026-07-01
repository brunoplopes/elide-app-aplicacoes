import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CustomerFavorite, Store } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'favorites-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly favorites = signal<CustomerFavorite[]>([]);
  readonly stores = signal<Store[]>([]);
  readonly loading = signal(true);
  readonly message = signal<string | null>(null);

  readonly vm = computed<FeaturePageVm>(() => ({
    eyebrow: 'Preferencias',
    title: 'Favoritos',
    description: 'Acesse rapidamente lojas e produtos que combinam com sua rotina.',
    cards: this.cards()
  }));

  ngOnInit(): void {
    this.api.favorites().pipe(catchError(() => {
      this.message.set('Endpoint /customer/favorites ainda nao respondeu; exibindo lojas do catalogo.');
      return of([]);
    })).subscribe((favorites) => this.favorites.set(favorites));
    this.api.stores().pipe(catchError(() => of({ content: [], totalElements: 0, totalPages: 0, number: 0 }))).subscribe((stores) => {
      this.stores.set(stores.content);
      this.loading.set(false);
    });
  }

  remove(storeId: string): void {
    this.api.removeFavorite(storeId).pipe(catchError(() => of(undefined))).subscribe(() => {
      this.favorites.update((favorites) => favorites.filter((favorite) => favorite.storeId !== storeId));
    });
  }

  private cards() {
    const favorites = this.favorites();
    if (favorites.length) {
      return favorites.map((favorite) => ({
        title: favorite.storeName,
        description: `${favorite.segment} · ${favorite.open ? 'Aberto agora' : 'Fechado'} · ${this.money(favorite.deliveryFee)}`,
        icon: 'favorite',
        action: 'Remover',
        path: favorite.storeId
      }));
    }
    return this.stores().slice(0, 6).map((store) => ({
      title: store.name,
      description: `${store.segment} · ${store.open ? 'Aberto agora' : 'Fechado'} · ${this.money(store.deliveryFee)}`,
      icon: 'favorite_border',
      action: 'Favoritar',
      path: store.id
    }));
  }

  add(storeId: string): void {
    if (!storeId) {
      return;
    }
    this.api.addFavorite(storeId).subscribe({
      next: (favorite) => {
        this.favorites.update((favorites) => [favorite, ...favorites.filter((item) => item.storeId !== favorite.storeId)]);
        this.message.set('Loja adicionada aos favoritos.');
      },
      error: () => this.message.set('Nao foi possivel adicionar favorito na API.')
    });
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
