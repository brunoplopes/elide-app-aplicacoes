import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
  readonly page = this;

  readonly heroImage = heroImageUrl;
  readonly categories = categories;
  readonly coupons = coupons.slice(0, 3);
  readonly stores = featuredStores;
}
