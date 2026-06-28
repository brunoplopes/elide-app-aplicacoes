import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-payment-card-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentCardPageComponent {
  readonly page = this;
  private readonly fb = inject(FormBuilder);
  private readonly api = inject(CustomerApiService);
  readonly loading = signal(false);
  readonly message = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    cardNumber: ['', [Validators.required, Validators.minLength(16)]],
    holderName: ['', Validators.required],
    expiry: ['', Validators.required],
    cvv: ['', [Validators.required, Validators.minLength(3)]],
    installments: ['1x de R$ 48,80']
  });

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.message.set(null);
    const { installments, ...payload } = this.form.getRawValue();
    this.api.saveCard({ ...payload, defaultMethod: true })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => this.message.set('Cartao salvo com sucesso.'),
        error: () => this.message.set('Endpoint /customer/payments/cards ainda nao respondeu.')
      });
  }
}
