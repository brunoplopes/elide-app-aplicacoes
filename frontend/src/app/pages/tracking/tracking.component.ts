import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { CustomerTracking } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';

@Component({
  selector: 'elide-tracking-page',
  imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackingPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly tracking = signal<CustomerTracking | null>(null);
  readonly loading = signal(true);
  readonly message = signal<string | null>(null);

  readonly fallbackSteps = [
    { label: 'Pedido aceito', done: true },
    { label: 'Em preparo', done: true },
    { label: 'Saiu para entrega', done: true },
    { label: 'Chegando', done: false }
  ];

  ngOnInit(): void {
    this.loading.set(true);
    this.api.tracking().pipe(catchError(() => {
      this.message.set('Endpoint /customer/tracking/latest ainda nao respondeu.');
      return of(null);
    }), finalize(() => this.loading.set(false))).subscribe((tracking) => this.tracking.set(tracking));
  }

  steps() {
    return this.tracking()?.steps ?? this.fallbackSteps;
  }

  progress(): number {
    const steps = this.steps();
    return Math.round((steps.filter((step) => step.done).length / steps.length) * 100);
  }

  distance(): string {
    const meters = this.tracking()?.distanceMeters ?? 1800;
    return meters >= 1000 ? `${(meters / 1000).toFixed(1).replace('.', ',')} km` : `${meters} m`;
  }
}
