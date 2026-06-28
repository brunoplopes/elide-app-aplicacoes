import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-payment-pix-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent],
  templateUrl: './payment-pix.component.html',
  styleUrl: './payment-pix.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPixPageComponent {
  readonly page = this;
  readonly pixCode = '00020126580014br.gov.bcb.pix0136elide-pedido-eld-1029-2026520400005303986540548.805802BR5920ELIDE FAST DELIVERY6009SAO PAULO62100506ELD10296304ABCD';
  readonly summary = [
    { label: 'Pedido', value: 'ELD-1029' },
    { label: 'Total', value: 'R$ 48,80' },
    { label: 'Expira em', value: '09:42' }
  ];
}
