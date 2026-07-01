import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { Category, Page, Product, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL, categories as deliveryCategories } from '../shared/page-kit';

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };
const emptyProducts: Page<Product> = { content: [], totalElements: 0, totalPages: 0, number: 0 };

@Component({
  selector: 'elide-search-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ApiService);

  readonly page = this;
  readonly query = signal('');
  readonly loading = signal(false);
  readonly errorMessage = signal('');
  readonly stores = signal<Page<Store>>(emptyStores);
  readonly products = signal<Page<Product>>(emptyProducts);
  readonly categories = signal<Category[]>([]);
  readonly suggestedCategories = deliveryCategories;
  readonly searchControl = new FormControl('', { nonNullable: true });

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap((params) => {
        const q = params.get('q') ?? '';
        this.query.set(q);
        this.searchControl.setValue(q, { emitEvent: false });
        this.loading.set(true);
        this.errorMessage.set('');
        return this.api.searchCatalog(q).pipe(
          catchError(() => {
            this.errorMessage.set('Nao foi possivel carregar a busca agora.');
            return of({ stores: emptyStores, products: emptyProducts, categories: [] });
          }),
          finalize(() => this.loading.set(false))
        );
      })
    ).subscribe((result) => {
      this.stores.set(result.stores);
      this.products.set(result.products);
      this.categories.set(result.categories);
    });
  }

  search(): void {
    const q = this.searchControl.value.trim();
    this.router.navigate(['/busca'], q ? { queryParams: { q } } : undefined);
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }

  distance(store: Store): string {
    if (store.distanceMeters === null || store.distanceMeters === undefined) {
      return 'Perto de voce';
    }
    if (store.distanceMeters < 1000) {
      return `${Math.round(store.distanceMeters)} m`;
    }
    return `${(store.distanceMeters / 1000).toFixed(1).replace('.', ',')} km`;
  }
}
