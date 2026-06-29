import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, finalize, forkJoin, of } from 'rxjs';
import {
  AdminAuditResponse,
  AdminBannerRequest,
  AdminBannerResponse,
  AdminCategoryRequest,
  AdminCategoryResponse,
  AdminCityRequest,
  AdminCityResponse,
  AdminCouponRequest,
  AdminCouponResponse,
  AdminCourierResponse,
  AdminFeeRequest,
  AdminFeeResponse,
  AdminFinancialEntryResponse,
  AdminFinancialSummaryResponse,
  AdminOrderResponse,
  AdminSettingResponse,
  AdminStoreRequest,
  AdminStoreResponse,
  AdminUserResponse,
  Dashboard,
  StoreStatus
} from '../../models/marketplace.models';
import { AdminApiService } from '../../services/admin-api.service';
import { AuthService } from '../../services/auth.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { MATERIAL } from '../shared/page-kit';

const fallbackDashboard: Dashboard = {
  revenue: 0,
  totalOrders: 0,
  totalUsers: 0,
  activeStores: 0,
  activeCouriers: 0,
  ordersByStatus: []
};

@Component({
  selector: 'elide-admin-panel-page',
  imports: [...MATERIAL, ClientHeadingComponent, MetricCardComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelPageComponent implements OnInit {
  private readonly api = inject(AdminApiService);
  private readonly auth = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  readonly page = this;
  readonly dashboard = signal<Dashboard>(fallbackDashboard);
  readonly stores = signal<AdminStoreResponse[]>([]);
  readonly couriers = signal<AdminCourierResponse[]>([]);
  readonly categories = signal<AdminCategoryResponse[]>([]);
  readonly banners = signal<AdminBannerResponse[]>([]);
  readonly cities = signal<AdminCityResponse[]>([]);
  readonly coupons = signal<AdminCouponResponse[]>([]);
  readonly fees = signal<AdminFeeResponse[]>([]);
  readonly admins = signal<AdminUserResponse[]>([]);
  readonly orders = signal<AdminOrderResponse[]>([]);
  readonly financial = signal<AdminFinancialSummaryResponse>({ revenue: 0, courierPayout: 0, platformBalance: 0, entries: 0 });
  readonly financialEntries = signal<AdminFinancialEntryResponse[]>([]);
  readonly settings = signal<AdminSettingResponse[]>([]);
  readonly audit = signal<AdminAuditResponse[]>([]);
  readonly loading = signal(false);
  readonly message = signal<string | null>(null);

  readonly editingStoreId = signal<string | null>(null);
  readonly editingCategoryId = signal<string | null>(null);
  readonly editingBannerId = signal<string | null>(null);
  readonly editingCityId = signal<string | null>(null);
  readonly editingCouponId = signal<string | null>(null);
  readonly editingFeeId = signal<string | null>(null);
  readonly editingAdminId = signal<string | null>(null);

  readonly storeStatuses: StoreStatus[] = ['PENDING_DOCUMENTS', 'PENDING_APPROVAL', 'APPROVED', 'SUSPENDED', 'REJECTED'];
  readonly isMaster = computed(() => this.auth.hasRole('MASTER_ADMIN'));
  readonly pendingStores = computed(() => this.stores().filter((store) => store.status === 'PENDING_APPROVAL' || store.status === 'PENDING_DOCUMENTS'));
  readonly pendingCouriers = computed(() => this.couriers().filter((courier) => courier.status === 'PENDING_APPROVAL' || courier.status === 'PENDING_DOCUMENTS'));
  readonly metrics = computed(() => [
    { label: 'Receita', value: this.money(this.dashboard().revenue), icon: 'payments' },
    { label: 'Pedidos', value: String(this.dashboard().totalOrders), icon: 'receipt_long' },
    { label: 'Usuarios', value: String(this.dashboard().totalUsers), icon: 'group' },
    { label: 'Lojas ativas', value: String(this.dashboard().activeStores), icon: 'storefront' }
  ]);

  readonly storeForm = this.fb.nonNullable.group({
    name: ['Nova Loja ELIDE', [Validators.required, Validators.maxLength(160)]],
    document: ['00.000.000/0001-00', [Validators.required, Validators.maxLength(18)]],
    segment: ['Restaurante', [Validators.required, Validators.maxLength(80)]],
    status: ['APPROVED' as StoreStatus, Validators.required],
    deliveryFee: [6.9, [Validators.required, Validators.min(0)]],
    minimumOrder: [20, [Validators.required, Validators.min(0)]],
    open: [true]
  });

  readonly categoryForm = this.fb.nonNullable.group({
    name: ['Restaurantes', [Validators.required, Validators.maxLength(100)]],
    icon: ['restaurant', [Validators.required, Validators.maxLength(80)]],
    active: [true]
  });

  readonly bannerForm = this.fb.nonNullable.group({
    title: ['Oferta da semana', [Validators.required, Validators.maxLength(120)]],
    imageUrl: ['/assets/brand/banner.webp', [Validators.required, Validators.maxLength(500)]],
    active: [true]
  });

  readonly cityForm = this.fb.nonNullable.group({
    name: ['Limeira', [Validators.required, Validators.maxLength(120)]],
    state: ['SP', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    active: [true]
  });

  readonly couponForm = this.fb.nonNullable.group({
    code: ['ELIDE10', [Validators.required, Validators.maxLength(40)]],
    discountValue: [10, [Validators.required, Validators.min(0)]],
    active: [true]
  });

  readonly feeForm = this.fb.nonNullable.group({
    name: ['Comissao padrao', [Validators.required, Validators.maxLength(80)]],
    value: [12, [Validators.required, Validators.min(0)]],
    percentage: [true]
  });

  readonly adminForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.maxLength(120)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['trocar-senha-2026', [Validators.required, Validators.minLength(8)]],
    fullName: ['', [Validators.required, Validators.maxLength(160)]],
    enabled: [true],
    mustChangePassword: [true]
  });

  readonly settingForm = this.fb.nonNullable.group({
    keyName: ['platform.support_whatsapp', [Validators.required, Validators.maxLength(120)]],
    value: ['(19) 99999-2026', [Validators.required, Validators.maxLength(1200)]]
  });

  ngOnInit(): void {
    if (this.auth.profile()?.mustChangePassword) {
      this.message.set('Antes de usar o painel administrativo, altere a senha inicial em Alterar senha.');
    }
    this.load();
  }

  load(): void {
    this.loading.set(true);
    forkJoin({
      dashboard: this.api.dashboard().pipe(catchError((error) => this.fail('Dashboard', fallbackDashboard, error))),
      stores: this.api.stores().pipe(catchError((error) => this.fail('Lojas', [], error))),
      couriers: this.api.couriers().pipe(catchError((error) => this.fail('Entregadores', [], error))),
      categories: this.api.categories().pipe(catchError((error) => this.fail('Categorias', [], error))),
      banners: this.api.banners().pipe(catchError((error) => this.fail('Banners', [], error))),
      cities: this.api.cities().pipe(catchError((error) => this.fail('Cidades', [], error))),
      coupons: this.api.coupons().pipe(catchError((error) => this.fail('Cupons', [], error))),
      fees: this.api.fees().pipe(catchError((error) => this.fail('Taxas', [], error))),
      admins: this.api.admins().pipe(catchError((error) => this.fail('Administradores', [], error))),
      orders: this.api.orders().pipe(catchError((error) => this.fail('Pedidos', [], error))),
      financial: this.api.financialSummary().pipe(catchError((error) => this.fail('Financeiro', { revenue: 0, courierPayout: 0, platformBalance: 0, entries: 0 }, error))),
      financialEntries: this.api.financialEntries().pipe(catchError((error) => this.fail('Extrato financeiro', [], error))),
      settings: this.api.settings().pipe(catchError((error) => this.fail('Configuracoes', [], error))),
      audit: this.api.audit().pipe(catchError((error) => this.fail('Auditoria', [], error)))
    }).pipe(finalize(() => this.loading.set(false))).subscribe((data) => {
      this.dashboard.set(data.dashboard);
      this.stores.set(data.stores);
      this.couriers.set(data.couriers);
      this.categories.set(data.categories);
      this.banners.set(data.banners);
      this.cities.set(data.cities);
      this.coupons.set(data.coupons);
      this.fees.set(data.fees);
      this.admins.set(data.admins);
      this.orders.set(data.orders);
      this.financial.set(data.financial);
      this.financialEntries.set(data.financialEntries);
      this.settings.set(data.settings);
      this.audit.set(data.audit);
    });
  }

  saveStore(): void {
    if (this.storeForm.invalid) {
      this.storeForm.markAllAsTouched();
      return;
    }
    const payload: AdminStoreRequest = { ...this.storeForm.getRawValue(), cityId: null, ownerId: null };
    const id = this.editingStoreId();
    const request = id ? this.api.updateStore(id, payload) : this.api.createStore(payload);
    request.subscribe({
      next: (store) => {
        this.stores.update((stores) => id ? stores.map((item) => item.id === store.id ? store : item) : [store, ...stores]);
        this.resetStore();
        this.message.set(id ? 'Loja atualizada.' : 'Loja criada.');
      },
      error: () => this.message.set('Nao foi possivel salvar a loja.')
    });
  }

  editStore(store: AdminStoreResponse): void {
    this.editingStoreId.set(store.id);
    this.storeForm.patchValue({
      name: store.name,
      document: store.document,
      segment: store.segment,
      status: store.status,
      deliveryFee: Number(store.deliveryFee),
      minimumOrder: Number(store.minimumOrder),
      open: store.open
    });
  }

  deleteStore(id: string): void {
    this.api.deleteStore(id).subscribe({
      next: () => {
        this.stores.update((stores) => stores.filter((store) => store.id !== id));
        this.message.set('Loja removida.');
      },
      error: () => this.message.set('Nao foi possivel remover a loja.')
    });
  }

  saveCategory(): void {
    this.saveCrud(this.categoryForm, this.editingCategoryId, this.api.createCategory.bind(this.api), this.api.updateCategory.bind(this.api), this.categories, this.resetCategory.bind(this), 'Categoria');
  }

  editCategory(category: AdminCategoryResponse): void {
    this.editingCategoryId.set(category.id);
    this.categoryForm.patchValue(category);
  }

  deleteCategory(id: string): void {
    this.deleteCrud(id, this.api.deleteCategory.bind(this.api), this.categories, 'Categoria');
  }

  saveBanner(): void {
    this.saveCrud(this.bannerForm, this.editingBannerId, this.api.createBanner.bind(this.api), this.api.updateBanner.bind(this.api), this.banners, this.resetBanner.bind(this), 'Banner');
  }

  editBanner(banner: AdminBannerResponse): void {
    this.editingBannerId.set(banner.id);
    this.bannerForm.patchValue(banner);
  }

  deleteBanner(id: string): void {
    this.deleteCrud(id, this.api.deleteBanner.bind(this.api), this.banners, 'Banner');
  }

  saveCity(): void {
    this.saveCrud(this.cityForm, this.editingCityId, this.api.createCity.bind(this.api), this.api.updateCity.bind(this.api), this.cities, this.resetCity.bind(this), 'Cidade');
  }

  editCity(city: AdminCityResponse): void {
    this.editingCityId.set(city.id);
    this.cityForm.patchValue(city);
  }

  deleteCity(id: string): void {
    this.deleteCrud(id, this.api.deleteCity.bind(this.api), this.cities, 'Cidade');
  }

  saveCoupon(): void {
    this.saveCrud(this.couponForm, this.editingCouponId, this.api.createCoupon.bind(this.api), this.api.updateCoupon.bind(this.api), this.coupons, this.resetCoupon.bind(this), 'Cupom');
  }

  editCoupon(coupon: AdminCouponResponse): void {
    this.editingCouponId.set(coupon.id);
    this.couponForm.patchValue({ ...coupon, discountValue: Number(coupon.discountValue) });
  }

  deleteCoupon(id: string): void {
    this.deleteCrud(id, this.api.deleteCoupon.bind(this.api), this.coupons, 'Cupom');
  }

  saveFee(): void {
    this.saveCrud(this.feeForm, this.editingFeeId, this.api.createFee.bind(this.api), this.api.updateFee.bind(this.api), this.fees, this.resetFee.bind(this), 'Taxa');
  }

  editFee(fee: AdminFeeResponse): void {
    this.editingFeeId.set(fee.id);
    this.feeForm.patchValue({ ...fee, value: Number(fee.value) });
  }

  deleteFee(id: string): void {
    this.deleteCrud(id, this.api.deleteFee.bind(this.api), this.fees, 'Taxa');
  }

  approveStore(storeId: string): void {
    this.api.approveStore(storeId, { status: 'APPROVED' }).subscribe({
      next: (store) => {
        this.stores.update((stores) => stores.map((item) => item.id === store.id ? store : item));
        this.message.set('Estabelecimento aprovado.');
      },
      error: () => this.message.set('Nao foi possivel aprovar estabelecimento.')
    });
  }

  rejectStore(storeId: string): void {
    this.api.approveStore(storeId, { status: 'REJECTED', reason: 'Documentacao pendente.' }).subscribe({
      next: (store) => {
        this.stores.update((stores) => stores.map((item) => item.id === store.id ? store : item));
        this.message.set('Estabelecimento reprovado.');
      },
      error: () => this.message.set('Nao foi possivel reprovar estabelecimento.')
    });
  }

  approveCourier(courierId: string): void {
    this.api.approveCourier(courierId, { status: 'AVAILABLE' }).subscribe({
      next: (courier) => {
        this.couriers.update((couriers) => couriers.map((item) => item.id === courier.id ? courier : item));
        this.message.set('Entregador aprovado.');
      },
      error: () => this.message.set('Nao foi possivel aprovar entregador.')
    });
  }

  rejectCourier(courierId: string): void {
    this.api.approveCourier(courierId, { status: 'REJECTED', reason: 'Documentacao pendente.' }).subscribe({
      next: (courier) => {
        this.couriers.update((couriers) => couriers.map((item) => item.id === courier.id ? courier : item));
        this.message.set('Entregador reprovado.');
      },
      error: () => this.message.set('Nao foi possivel reprovar entregador.')
    });
  }

  saveAdmin(): void {
    if (!this.isMaster()) {
      this.message.set('Somente MASTER_ADMIN pode gerenciar administradores.');
      return;
    }
    if (this.adminForm.invalid) {
      this.adminForm.markAllAsTouched();
      return;
    }
    const id = this.editingAdminId();
    const raw = this.adminForm.getRawValue();
    const request = id
      ? this.api.updateAdmin(id, { email: raw.email, fullName: raw.fullName, enabled: raw.enabled, mustChangePassword: raw.mustChangePassword })
      : this.api.createAdmin({ username: raw.username, email: raw.email, password: raw.password, fullName: raw.fullName, role: 'ADMIN', enabled: raw.enabled });
    request.subscribe({
      next: (admin) => {
        this.admins.update((admins) => id ? admins.map((item) => item.id === admin.id ? admin : item) : [admin, ...admins]);
        this.resetAdmin();
        this.message.set(id ? 'Administrador atualizado.' : 'Administrador ADMIN criado com troca obrigatoria de senha.');
      },
      error: () => this.message.set('Nao foi possivel salvar administrador ADMIN.')
    });
  }

  editAdmin(admin: AdminUserResponse): void {
    this.editingAdminId.set(admin.id);
    this.adminForm.patchValue({
      username: admin.username,
      email: admin.email,
      fullName: admin.fullName,
      password: 'trocar-senha-2026',
      enabled: admin.enabled,
      mustChangePassword: admin.mustChangePassword
    });
  }

  approveAdmin(adminId: string, enabled: boolean): void {
    if (!this.isMaster()) {
      this.message.set('Somente MASTER_ADMIN pode aprovar administradores.');
      return;
    }
    this.api.approveAdmin(adminId, { status: String(enabled) }).subscribe({
      next: (admin) => {
        this.admins.update((admins) => admins.map((item) => item.id === admin.id ? admin : item));
        this.message.set(enabled ? 'Administrador aprovado.' : 'Administrador desativado.');
      },
      error: () => this.message.set('Nao foi possivel alterar aprovacao do ADMIN.')
    });
  }

  deleteAdmin(adminId: string): void {
    if (!this.isMaster()) {
      this.message.set('Somente MASTER_ADMIN pode remover administradores.');
      return;
    }
    this.api.deleteAdmin(adminId).subscribe({
      next: () => {
        this.admins.update((admins) => admins.filter((admin) => admin.id !== adminId));
        this.message.set('Administrador removido.');
      },
      error: () => this.message.set('Nao foi possivel remover administrador.')
    });
  }

  saveSetting(): void {
    if (this.settingForm.invalid) {
      this.settingForm.markAllAsTouched();
      return;
    }
    this.api.upsertSetting(this.settingForm.getRawValue()).subscribe({
      next: (setting) => {
        this.settings.update((settings) => [setting, ...settings.filter((item) => item.id !== setting.id)]);
        this.message.set('Configuracao salva.');
      },
      error: () => this.message.set('Nao foi possivel salvar configuracao.')
    });
  }

  editSetting(setting: AdminSettingResponse): void {
    this.settingForm.patchValue(setting);
  }

  resetStore(): void {
    this.editingStoreId.set(null);
    this.storeForm.reset({ name: 'Nova Loja ELIDE', document: '00.000.000/0001-00', segment: 'Restaurante', status: 'APPROVED', deliveryFee: 6.9, minimumOrder: 20, open: true });
  }

  resetCategory(): void {
    this.editingCategoryId.set(null);
    this.categoryForm.reset({ name: 'Restaurantes', icon: 'restaurant', active: true });
  }

  resetBanner(): void {
    this.editingBannerId.set(null);
    this.bannerForm.reset({ title: 'Oferta da semana', imageUrl: '/assets/brand/banner.webp', active: true });
  }

  resetCity(): void {
    this.editingCityId.set(null);
    this.cityForm.reset({ name: 'Limeira', state: 'SP', active: true });
  }

  resetCoupon(): void {
    this.editingCouponId.set(null);
    this.couponForm.reset({ code: 'ELIDE10', discountValue: 10, active: true });
  }

  resetFee(): void {
    this.editingFeeId.set(null);
    this.feeForm.reset({ name: 'Comissao padrao', value: 12, percentage: true });
  }

  resetAdmin(): void {
    this.editingAdminId.set(null);
    this.adminForm.reset({ username: '', email: '', password: 'trocar-senha-2026', fullName: '', enabled: true, mustChangePassword: true });
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }

  shortId(id: string): string {
    return `ELD-${id.slice(0, 6).toUpperCase()}`;
  }

  private fail<T>(resource: string, fallback: T, error: unknown) {
    const status = error instanceof HttpErrorResponse ? error.status : 0;
    if (status === 403 && this.auth.profile()?.mustChangePassword) {
      this.message.set('Senha inicial precisa ser alterada antes de usar o painel administrativo.');
    } else if (!this.message()) {
      this.message.set(`Nao foi possivel carregar ${resource}. Verifique login/permissoes e API.`);
    }
    return of(fallback);
  }

  private saveCrud<T extends { id: string }, P>(
    form: { invalid: boolean; markAllAsTouched: () => void; getRawValue: () => P },
    editingId: { (): string | null; set: (value: string | null) => void },
    create: (payload: P) => Observable<T>,
    update: (id: string, payload: P) => Observable<T>,
    state: { update: (updater: (items: T[]) => T[]) => void },
    reset: () => void,
    label: string
  ): void {
    if (form.invalid) {
      form.markAllAsTouched();
      return;
    }
    const id = editingId();
    const request = id ? update(id, form.getRawValue()) : create(form.getRawValue());
    request.subscribe({
      next: (item) => {
        state.update((items) => id ? items.map((current) => current.id === item.id ? item : current) : [item, ...items]);
        reset();
        this.message.set(id ? `${label} atualizado.` : `${label} criado.`);
      },
      error: () => this.message.set(`Nao foi possivel salvar ${label.toLowerCase()}.`)
    });
  }

  private deleteCrud<T extends { id: string }>(
    id: string,
    remove: (id: string) => Observable<void>,
    state: { update: (updater: (items: T[]) => T[]) => void },
    label: string
  ): void {
    remove(id).subscribe({
      next: () => {
        state.update((items) => items.filter((item) => item.id !== id));
        this.message.set(`${label} removido.`);
      },
      error: () => this.message.set(`Nao foi possivel remover ${label.toLowerCase()}.`)
    });
  }
}
