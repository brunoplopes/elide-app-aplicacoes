import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-payment-pix-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent],
  templateUrl: './payment-pix.component.html',
  styleUrl: './payment-pix.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentPixPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly pixCode = signal('Aguardando geracao pela API.');
  readonly orderId = signal('Sem pedido');
  readonly total = signal(0);
  readonly expiresAt = signal('');
  readonly message = signal<string | null>(null);

  ngOnInit(): void {
    this.api.myOrders().pipe(catchError(() => of([]))).subscribe((orders) => {
      const order = orders[0];
      if (!order) {
        this.message.set('Nenhum pedido encontrado para gerar PIX.');
        return;
      }
      this.orderId.set(order.id);
      this.total.set(order.total);
      this.generate(order.id);
    });
  }

  generate(orderId: string): void {
    this.api.generatePix(orderId).subscribe({
      next: (pix) => {
        this.pixCode.set(pix.pixCode);
        this.orderId.set(pix.orderId);
        this.total.set(pix.total);
        this.expiresAt.set(pix.expiresAt);
      },
      error: () => this.message.set('Endpoint /customer/payments/pix ainda nao respondeu.')
    });
  }

  summary() {
    return [
      { label: 'Pedido', value: this.orderId().slice(0, 8) },
      { label: 'Total', value: this.money(this.total()) },
      { label: 'Expira em', value: this.expiresAt() ? new Date(this.expiresAt()).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '--:--' }
    ];
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
