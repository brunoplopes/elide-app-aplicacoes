import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
import { CourierStatus } from '../../models/marketplace.models';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL } from '../shared/page-kit';

@Component({
  selector: 'elide-admin-courier-approvals-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './admin-courier-approvals.component.html',
  styleUrl: './admin-courier-approvals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCourierApprovalsPageComponent extends AdminPanelPageComponent {
  override readonly page = this;

  private readonly adminApi = inject(AdminApiService);
  private readonly builder = inject(FormBuilder);

  readonly courierStatuses: CourierStatus[] = ['PENDING_DOCUMENTS', 'PENDING_APPROVAL', 'AVAILABLE', 'UNAVAILABLE', 'SUSPENDED', 'REJECTED'];
  readonly courierForm = this.builder.nonNullable.group({
    username: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['trocar-senha-2026', [Validators.required, Validators.minLength(8)]],
    fullName: ['', [Validators.required, Validators.maxLength(160)]],
    document: ['', [Validators.required, Validators.maxLength(14)]],
    vehicleType: ['Moto', [Validators.required, Validators.maxLength(40)]],
    status: ['PENDING_APPROVAL' as CourierStatus, Validators.required],
    enabled: [true]
  });

  saveCourier(): void {
    if (this.courierForm.invalid) {
      this.courierForm.markAllAsTouched();
      return;
    }
    this.adminApi.createCourier(this.courierForm.getRawValue()).subscribe({
      next: (courier) => {
        this.couriers.update((couriers) => [courier, ...couriers]);
        this.resetCourier();
        this.message.set('Entregador cadastrado com senha inicial e troca obrigatoria.');
      },
      error: () => this.message.set('Nao foi possivel cadastrar entregador.')
    });
  }

  resetCourier(): void {
    this.courierForm.reset({
      username: '',
      email: '',
      password: 'trocar-senha-2026',
      fullName: '',
      document: '',
      vehicleType: 'Moto',
      status: 'PENDING_APPROVAL',
      enabled: true
    });
  }
}
