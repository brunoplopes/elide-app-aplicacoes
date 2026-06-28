import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { CustomerTracking } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-tracking-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrackingPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly tracking = signal<CustomerTracking | null>(null);
  readonly message = signal<string | null>(null);

  readonly fallbackSteps = [
    { label: 'Pedido aceito', done: true },
    { label: 'Em preparo', done: true },
    { label: 'Saiu para entrega', done: true },
    { label: 'Chegando', done: false }
  ];

  ngOnInit(): void {
    this.api.tracking().pipe(catchError(() => {
      this.message.set('Endpoint /customer/tracking/latest ainda nao respondeu.');
      return of(null);
    })).subscribe((tracking) => this.tracking.set(tracking));
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
