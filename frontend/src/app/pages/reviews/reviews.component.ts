import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { CustomerReview, OrderResponse } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';

@Component({
  selector: 'elide-reviews-page',
  imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly orders = signal<OrderResponse[]>([]);
  readonly reviews = signal<CustomerReview[]>([]);
  readonly loading = signal(true);
  readonly message = signal<string | null>(null);
  readonly stars = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.loading.set(true);
    forkJoin({
      orders: this.api.myOrders().pipe(catchError(() => of([]))),
      reviews: this.api.reviews().pipe(catchError(() => {
        this.message.set('Endpoint /customer/reviews ainda nao respondeu.');
        return of([]);
      }))
    }).pipe(finalize(() => this.loading.set(false))).subscribe(({ orders, reviews }) => {
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
