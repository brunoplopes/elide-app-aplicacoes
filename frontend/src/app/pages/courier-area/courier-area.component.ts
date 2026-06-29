import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import {
  CourierDashboardResponse,
  CourierDeliveryResponse,
  CourierDocumentResponse,
  CourierEarningsResponse,
  CourierMapResponse,
  CourierProfileResponse,
  OrderStatus
} from '../../models/marketplace.models';
import { CourierApiService } from '../../services/courier-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { MATERIAL, PageMetric } from '../shared/page-kit';

@Component({
  selector: 'courier-area-page',
  imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './courier-area.component.html',
  styleUrl: './courier-area.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourierAreaPageComponent implements OnInit {
  private readonly api = inject(CourierApiService);
  private readonly fb = inject(FormBuilder);

  readonly page = this;
  readonly profile = signal<CourierProfileResponse | null>(null);
  readonly dashboard = signal<CourierDashboardResponse | null>(null);
  readonly documents = signal<CourierDocumentResponse[]>([]);
  readonly rides = signal<CourierDeliveryResponse[]>([]);
  readonly history = signal<CourierDeliveryResponse[]>([]);
  readonly earnings = signal<CourierEarningsResponse>({ daily: 0, monthly: 0, statement: [] });
  readonly map = signal<CourierMapResponse>({ location: null, activeDelivery: null, encodedPolyline: null });
  readonly message = signal<string | null>(null);
  readonly loading = signal(false);

  readonly signupForm = this.fb.nonNullable.group({
    document: ['', [Validators.required, Validators.maxLength(14)]],
    vehicleType: ['MOTO', [Validators.required, Validators.maxLength(40)]]
  });

  readonly documentForm = this.fb.nonNullable.group({
    type: ['CNH', [Validators.required, Validators.maxLength(80)]],
    fileUrl: ['https://elide.local/documentos/cnh.pdf', [Validators.required, Validators.maxLength(500)]]
  });

  readonly metrics = computed<PageMetric[]>(() => {
    const dashboard = this.dashboard();
    const earnings = this.earnings();
    return [
      { label: 'Hoje', value: this.money(dashboard?.dailyEarnings ?? earnings.daily), icon: 'payments' },
      { label: 'Mes', value: this.money(dashboard?.monthlyEarnings ?? earnings.monthly), icon: 'account_balance_wallet' },
      { label: 'Entregas hoje', value: String(dashboard?.deliveriesToday ?? 0), icon: 'local_shipping' },
      { label: 'Corridas abertas', value: String(dashboard?.availableRides ?? this.rides().length), icon: 'near_me' }
    ];
  });

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.loading.set(true);
    forkJoin({
      dashboard: this.api.dashboard().pipe(catchError(() => of(null))),
      profile: this.api.profile().pipe(catchError(() => of(null))),
      documents: this.api.documents().pipe(catchError(() => of([]))),
      rides: this.api.availableRides().pipe(catchError(() => of([]))),
      history: this.api.history().pipe(catchError(() => of([]))),
      earnings: this.api.earnings().pipe(catchError(() => of({ daily: 0, monthly: 0, statement: [] }))),
      map: this.api.map().pipe(catchError(() => of({ location: null, activeDelivery: null, encodedPolyline: null })))
    }).pipe(finalize(() => this.loading.set(false))).subscribe(({ dashboard, profile, documents, rides, history, earnings, map }) => {
      this.dashboard.set(dashboard);
      this.profile.set(dashboard?.profile ?? profile);
      this.documents.set(documents);
      this.rides.set(rides);
      this.history.set(history);
      this.earnings.set(earnings);
      this.map.set(map);
      if (!dashboard && !profile) {
        this.message.set('Complete o cadastro de entregador para ativar GPS, corridas e ganhos.');
      }
    });
  }

  signup(): void {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.api.signup(this.signupForm.getRawValue())
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (profile) => {
          this.profile.set(profile);
          this.message.set('Cadastro de entregador criado. Envie os documentos para validacao.');
          this.loadAll();
        },
        error: () => this.message.set('Nao foi possivel cadastrar o entregador na API.')
      });
  }

  sendDocument(): void {
    if (this.documentForm.invalid) {
      this.documentForm.markAllAsTouched();
      return;
    }
    this.api.sendDocument(this.documentForm.getRawValue()).subscribe({
      next: (document) => {
        this.documents.update((documents) => [document, ...documents]);
        this.message.set('Documento enviado para validacao.');
      },
      error: () => this.message.set('Nao foi possivel enviar documento para a API.')
    });
  }

  setAvailable(available: boolean): void {
    this.api.setAvailability({ available }).subscribe({
      next: (profile) => {
        this.profile.set(profile);
        this.dashboard.update((dashboard) => dashboard ? { ...dashboard, profile } : dashboard);
        this.message.set(available ? 'Status alterado para disponivel.' : 'Status alterado para indisponivel.');
      },
      error: () => this.message.set('Nao foi possivel alterar disponibilidade.')
    });
  }

  updateGps(): void {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      this.updateLocation(-22.5646, -47.4017);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => this.updateLocation(position.coords.latitude, position.coords.longitude, position.coords.heading, position.coords.speed),
      () => this.updateLocation(-22.5646, -47.4017)
    );
  }

  accept(orderId: string): void {
    this.api.acceptRide(orderId).subscribe({
      next: (delivery) => {
        this.rides.update((rides) => rides.filter((ride) => ride.id !== orderId));
        this.map.update((map) => ({ ...map, activeDelivery: delivery }));
        this.message.set('Corrida aceita. Rota liberada no mapa.');
      },
      error: () => this.message.set('Nao foi possivel aceitar a corrida.')
    });
  }

  decline(orderId: string): void {
    this.api.declineRide(orderId, { reason: 'Nao consigo atender agora.' }).pipe(catchError(() => of(undefined))).subscribe(() => {
      this.rides.update((rides) => rides.filter((ride) => ride.id !== orderId));
      this.message.set('Corrida recusada.');
    });
  }

  finish(orderId: string): void {
    this.api.updateDeliveryStatus(orderId, 'DELIVERED' as OrderStatus).subscribe({
      next: (delivery) => {
        this.history.update((history) => [delivery, ...history.filter((item) => item.id !== delivery.id)]);
        this.map.update((map) => ({ ...map, activeDelivery: null }));
        this.message.set('Entrega finalizada e ganho registrado.');
        this.loadAll();
      },
      error: () => this.message.set('Nao foi possivel finalizar a entrega.')
    });
  }

  statusLabel(status?: string): string {
    const labels: Record<string, string> = {
      PENDING_DOCUMENTS: 'Enviar documentos',
      PENDING_APPROVAL: 'Em validacao',
      AVAILABLE: 'Disponivel',
      UNAVAILABLE: 'Indisponivel',
      SUSPENDED: 'Suspenso',
      REJECTED: 'Reprovado',
      CREATED: 'Novo pedido',
      ACCEPTED: 'Aceito pela loja',
      PREPARING: 'Em preparo',
      READY_FOR_PICKUP: 'Pronto para retirada',
      OUT_FOR_DELIVERY: 'Em rota',
      DELIVERED: 'Entregue',
      CANCELLED: 'Cancelado'
    };
    return status ? labels[status] ?? status : 'Nao cadastrado';
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }

  shortId(id: string): string {
    return `ELD-${id.slice(0, 6).toUpperCase()}`;
  }

  private updateLocation(latitude: number, longitude: number, heading?: number | null, speed?: number | null): void {
    this.api.updateLocation({ latitude, longitude, heading: heading ?? null, speed: speed ?? null }).subscribe({
      next: (location) => {
        this.map.update((map) => ({ ...map, location }));
        this.message.set('GPS atualizado.');
      },
      error: () => this.message.set('Nao foi possivel enviar GPS para a API.')
    });
  }
}
