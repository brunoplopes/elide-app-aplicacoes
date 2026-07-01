import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { CustomerCoupon } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'coupons-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CouponsPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly coupons = signal<CustomerCoupon[]>([]);
  readonly loading = signal(true);
  readonly message = signal<string | null>(null);

  readonly vm = computed<FeaturePageVm>(() => ({
    eyebrow: 'Promocoes',
    title: 'Cupons de desconto',
    description: 'Descontos prontos para aplicar no carrinho.',
    cards: this.coupons().map((coupon) => ({
      title: coupon.code,
      description: coupon.description ?? `${this.money(coupon.discountValue)} de desconto.`,
      icon: 'local_offer',
      action: coupon.active ? 'Usar no carrinho' : 'Indisponivel',
      meta: coupon.active ? 'Ativo' : 'Pausado'
    }))
  }));

  ngOnInit(): void {
    this.loading.set(true);
    this.api.coupons().pipe(catchError(() => {
      this.message.set('Endpoint /customer/coupons ainda nao respondeu.');
      return of([]);
    }), finalize(() => this.loading.set(false))).subscribe((coupons) => this.coupons.set(coupons));
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
