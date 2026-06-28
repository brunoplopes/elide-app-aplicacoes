import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CustomerAddress } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'addresses-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly addresses = signal<CustomerAddress[]>([]);
  readonly message = signal<string | null>(null);

  readonly vm = computed<FeaturePageVm>(() => ({
    eyebrow: 'Entrega',
    title: 'Enderecos',
    description: 'Salve locais de entrega e deixe o frete pronto para calculo rapido.',
    actionLabel: 'Adicionar',
    actionLink: '/enderecos',
    actionIcon: 'add_location',
    cards: this.addresses().map((address) => ({
      title: address.label,
      description: `${address.street}, ${address.number} - ${address.district}`,
      icon: address.label.toLowerCase().includes('trabalho') ? 'business' : 'home_pin',
      action: 'Editar'
    }))
  }));

  ngOnInit(): void {
    this.api.addresses().pipe(catchError(() => {
      this.message.set('Endpoint /customer/addresses ainda nao respondeu.');
      return of([]);
    })).subscribe((addresses) => this.addresses.set(addresses));
  }
}
