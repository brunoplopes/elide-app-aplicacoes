import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, forkJoin, of } from 'rxjs';
import { CustomerReview, OrderResponse } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-reviews-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly orders = signal<OrderResponse[]>([]);
  readonly reviews = signal<CustomerReview[]>([]);
  readonly message = signal<string | null>(null);
  readonly stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    forkJoin({
      orders: this.api.myOrders().pipe(catchError(() => of([]))),
      reviews: this.api.reviews().pipe(catchError(() => {
        this.message.set('Endpoint /customer/reviews ainda nao respondeu.');
        return of([]);
      }))
    }).subscribe(({ orders, reviews }) => {
      this.orders.set(orders);
      this.reviews.set(reviews);
    });
  }

  send(order: OrderResponse): void {
    this.api.createReview({ orderId: order.id, rating: 5, comment: 'Otima experiencia.' }).subscribe({
      next: (review) => this.reviews.update((reviews) => [review, ...reviews]),
      error: () => this.message.set('Nao foi possivel enviar a avaliacao para a API.')
    });
  }

  shortId(id: string): string {
    return `ELD-${id.slice(0, 6).toUpperCase()}`;
  }
}
