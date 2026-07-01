import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { categories, coupons, featuredStores, heroImageUrl } from '../shared/page-kit';

@Component({
  selector: 'elide-home-page',
  imports: [...MATERIAL, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  constructor(private readonly router: Router) {}

  readonly page = this;

  readonly heroImage = heroImageUrl;
  readonly categories = categories;
  readonly coupons = coupons.slice(0, 3);
  readonly stores = featuredStores;
  readonly openStores = featuredStores.filter((store) => store.open).slice(0, 4);
  readonly offerStores = featuredStores.filter((store) => store.offer).slice(0, 3);
  readonly locationLabel = 'Entregar em Centro, Guarulhos';
  readonly searchControl = new FormControl('', { nonNullable: true });

  search(): void {
    const q = this.searchControl.value.trim();
    this.router.navigate(['/busca'], q ? { queryParams: { q } } : undefined);
  }
}
