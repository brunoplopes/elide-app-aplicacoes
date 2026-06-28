import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-payment-cash-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent],
  templateUrl: './payment-cash.component.html',
  styleUrl: './payment-cash.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentCashPageComponent {
  readonly page = this;
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(CustomerApiService);
  readonly loading = signal(false);
  readonly message = signal<string | null>(null);
  readonly total = 48.8;
  readonly form = this.fb.nonNullable.group({
    cashAmount: [60],
    noChange: [false]
  });

  change(): number {
    return Math.max(0, Number(this.form.controls.cashAmount.value) - this.total);
  }

  save(): void {
    this.loading.set(true);
    this.message.set(null);
    this.api.saveCashPreference(this.form.getRawValue())
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => this.message.set('Preferencia de dinheiro salva.'),
        error: () => this.message.set('Endpoint /customer/payments/cash ainda nao respondeu.')
      });
  }
}
