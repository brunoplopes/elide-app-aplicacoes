import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { CustomerPaymentMethod } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'payments-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentsPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly methods = signal<CustomerPaymentMethod[]>([]);
  readonly message = signal<string | null>(null);
  readonly loading = signal(false);

  readonly vm = computed<FeaturePageVm>(() => ({
    eyebrow: 'Checkout',
    title: 'Pagamentos',
    description: `${this.methods().length} metodo(s) retornado(s) pela API de cliente.`,
    cards: [
      { title: 'PIX', icon: 'qr_code_2', description: 'Pagamento instantaneo com QR Code e copia e cola.', action: 'Gerar PIX', path: '/pagamentos/pix' },
      { title: 'Cartao', icon: 'credit_card', description: 'Credito e debito com tokenizacao preparada.', action: 'Adicionar cartao', path: '/pagamentos/cartao' },
      { title: 'Dinheiro', icon: 'payments', description: 'Pagamento na entrega com campo para troco.', action: 'Definir troco', path: '/pagamentos/dinheiro' }
    ]
  }));

  ngOnInit(): void {
    this.loading.set(true);
    this.api.paymentMethods().pipe(catchError(() => {
      this.message.set('Endpoint /customer/payments ainda nao respondeu.');
      return of([]);
    }), finalize(() => this.loading.set(false))).subscribe((methods) => this.methods.set(methods));
  }
}
