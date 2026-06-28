import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
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

  readonly form = this.fb.nonNullable.group({
    cardNumber: ['', [Validators.required, Validators.minLength(16)]],
    holderName: ['', Validators.required],
    expiry: ['', Validators.required],
    cvv: ['', [Validators.required, Validators.minLength(3)]],
    installments: ['1x de R$ 48,80']
  });
}
