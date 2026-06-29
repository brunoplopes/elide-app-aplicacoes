import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CustomerAddress, CustomerAddressRequest } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { FeaturePageVm, MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'addresses-page',
  imports: [...MATERIAL, RouterLink, ReactiveFormsModule, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);
  private readonly fb = inject(FormBuilder);

  readonly page = this;
  readonly addresses = signal<CustomerAddress[]>([]);
  readonly editingId = signal<string | null>(null);
  readonly message = signal<string | null>(null);
  readonly saving = signal(false);
  readonly form = this.fb.nonNullable.group({
    label: ['Casa', [Validators.required, Validators.maxLength(80)]],
    street: ['', [Validators.required, Validators.maxLength(120)]],
    number: ['', [Validators.required, Validators.maxLength(30)]],
    district: ['', [Validators.required, Validators.maxLength(80)]],
    zipCode: ['', [Validators.required, Validators.maxLength(10)]]
  });

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
    this.load();
  }

  load(): void {
    this.api.addresses().pipe(catchError(() => {
      this.message.set('Endpoint /customer/addresses ainda nao respondeu.');
      return of([]);
    })).subscribe((addresses) => this.addresses.set(addresses));
  }

  edit(address: CustomerAddress): void {
    this.editingId.set(address.id);
    this.form.patchValue({
      label: address.label,
      street: address.street,
      number: address.number,
      district: address.district,
      zipCode: address.zipCode
    });
  }

  reset(): void {
    this.editingId.set(null);
    this.form.reset({
      label: 'Casa',
      street: '',
      number: '',
      district: '',
      zipCode: ''
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload: CustomerAddressRequest = {
      ...this.form.getRawValue(),
      cityId: null,
      latitude: null,
      longitude: null
    };
    this.saving.set(true);
    const request = this.editingId()
      ? this.api.updateAddress(this.editingId()!, payload)
      : this.api.createAddress(payload);
    request.subscribe({
      next: (address) => {
        this.saving.set(false);
        this.message.set(this.editingId() ? 'Endereco atualizado.' : 'Endereco cadastrado.');
        this.addresses.update((addresses) => this.editingId()
          ? addresses.map((item) => item.id === address.id ? address : item)
          : [address, ...addresses]);
        this.reset();
      },
      error: () => {
        this.saving.set(false);
        this.message.set('Nao foi possivel salvar o endereco na API.');
      }
    });
  }

  remove(addressId: string): void {
    this.api.deleteAddress(addressId).pipe(catchError(() => {
      this.message.set('Nao foi possivel remover o endereco na API.');
      return of(undefined);
    })).subscribe(() => {
      this.addresses.update((addresses) => addresses.filter((address) => address.id !== addressId));
      if (this.editingId() === addressId) {
        this.reset();
      }
    });
  }
}
