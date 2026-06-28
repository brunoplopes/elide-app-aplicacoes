import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { orders } from '../shared/page-kit';

@Component({
  selector: 'elide-reviews-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsPageComponent {
  readonly page = this;

  readonly orders = orders;
  readonly stars = [1, 2, 3, 4, 5];
}
