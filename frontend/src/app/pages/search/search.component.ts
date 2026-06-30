import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';
import { Category, Page, Product, Store } from '../../models/marketplace.models';
import { ApiService } from '../../services/api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

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
  private readonly api = inject(ApiService);

  readonly page = this;
  readonly query = signal('');
  readonly stores = signal<Page<Store>>(emptyStores);
  readonly products = signal<Page<Product>>(emptyProducts);
  readonly categories = signal<Category[]>([]);

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap((params) => {
        const q = params.get('q') ?? '';
        this.query.set(q);
        return this.api.searchCatalog(q).pipe(catchError(() => of({ stores: emptyStores, products: emptyProducts, categories: [] })));
      })
    ).subscribe((result) => {
      this.stores.set(result.stores);
      this.products.set(result.products);
      this.categories.set(result.categories);
    });
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
