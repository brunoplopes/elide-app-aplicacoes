import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
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
  readonly total = 48.8;
  readonly form = this.fb.nonNullable.group({
    cashAmount: [60],
    noChange: [false]
  });

  change(): number {
    return Math.max(0, Number(this.form.controls.cashAmount.value) - this.total);
  }
}
