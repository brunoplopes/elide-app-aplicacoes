import { CommonModule, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { catchError, of, switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { Dashboard, Page, Product, Store } from '../models/marketplace.models';

const MATERIAL = [
  CommonModule,
  ReactiveFormsModule,
  RouterLink,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  CurrencyPipe
];

const emptyStores: Page<Store> = { content: [], totalElements: 0, totalPages: 0, number: 0 };
const emptyProducts: Page<Product> = { content: [], totalElements: 0, totalPages: 0, number: 0 };
const fallbackDashboard: Dashboard = {
  revenue: 0,
  totalOrders: 0,
  totalUsers: 0,
  activeStores: 0,
  activeCouriers: 0,
  ordersByStatus: [
    { label: 'CREATED', value: 4 },
    { label: 'PREPARING', value: 2 },
    { label: 'OUT_FOR_DELIVERY', value: 1 }
  ]
};

@Component({
  selector: 'elide-home-page',
  imports: MATERIAL,
  template: `
    <section class="relative overflow-hidden bg-white dark:bg-neutral-950">
      <div class="absolute inset-0 bg-[url('/assets/brand/hero-pattern.svg')] bg-cover bg-center opacity-80"></div>
      <div class="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-5 py-16 md:grid-cols-[1.05fr_.95fr]">
        <div class="max-w-2xl">
          <p class="mb-3 text-sm font-bold uppercase tracking-wide text-elide-orange">Seu pedido, na sua porta.</p>
          <h1 class="text-4xl font-extrabold leading-tight text-elide-ink dark:text-white md:text-6xl">ELIDE</h1>
          <p class="mt-5 max-w-xl text-lg text-neutral-700 dark:text-neutral-300">
            Delivery moderno para restaurantes, mercados, farmacias, padarias, pet shops e servicos locais.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a mat-flat-button routerLink="/restaurantes" class="!bg-elide-orange !px-6 !py-5 !text-white">Pedir agora</a>
            <a mat-stroked-button routerLink="/loja" class="!px-6 !py-5">Vender no ELIDE</a>
          </div>
        </div>
        <div class="grid gap-4">
          <mat-card class="shadow-soft">
            <mat-card-content class="grid gap-4 p-6">
              <div class="flex items-center gap-3">
                <mat-icon class="text-elide-orange">bolt</mat-icon>
                <strong>Busca rapida por cidade, categoria e produto</strong>
              </div>
              <div class="flex items-center gap-3">
                <mat-icon class="text-elide-orange">route</mat-icon>
                <strong>Rastreamento com mapa e status em tempo real</strong>
              </div>
              <div class="flex items-center gap-3">
                <mat-icon class="text-elide-orange">payments</mat-icon>
                <strong>PIX, cartao, gateways e pagamento na entrega</strong>
              </div>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </section>
    <section class="mx-auto max-w-7xl px-5 py-10">
      <div class="mb-5 flex items-center justify-between">
        <h2 class="text-2xl font-bold">Categorias</h2>
        <a mat-button routerLink="/restaurantes">Ver lojas</a>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        @for (category of categories(); track category.id) {
          <mat-card class="transition hover:-translate-y-1 hover:shadow-soft">
            <mat-card-content class="flex items-center gap-3 p-5">
              <mat-icon class="text-elide-orange">{{ category.icon }}</mat-icon>
              <span class="font-semibold">{{ category.name }}</span>
            </mat-card-content>
          </mat-card>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  private readonly api = inject(ApiService);
  readonly categories = toSignal(this.api.categories().pipe(catchError(() => of([]))), { initialValue: [] });
}

@Component({
  selector: 'elide-landing-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-6xl px-5 py-16">
      <h1 class="text-4xl font-extrabold">ELIDE para cidades em crescimento</h1>
      <p class="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">
        Plataforma premium para conectar clientes, estabelecimentos e entregadores com operacao local eficiente.
      </p>
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        @for (item of ['Marketplace completo', 'Painel administrativo', 'Arquitetura pronta para escala']; track item) {
          <mat-card><mat-card-content class="p-6"><mat-icon class="text-elide-orange">check_circle</mat-icon><h2 class="mt-3 text-xl font-bold">{{ item }}</h2></mat-card-content></mat-card>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {}

@Component({
  selector: 'elide-login-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto grid max-w-5xl gap-8 px-5 py-14 md:grid-cols-[1fr_420px]">
      <div>
        <h1 class="text-4xl font-extrabold">Entrar no ELIDE</h1>
        <p class="mt-3 text-neutral-600 dark:text-neutral-300">Use o admin bootstrap ou sua conta de cliente.</p>
        <mat-chip-set class="mt-6">
          <mat-chip>Cliente</mat-chip>
          <mat-chip>Loja</mat-chip>
          <mat-chip>Entregador</mat-chip>
          <mat-chip>Admin</mat-chip>
        </mat-chip-set>
      </div>
      <mat-card class="shadow-soft">
        <mat-card-content class="grid gap-4 p-6">
          <form class="grid gap-4" [formGroup]="form" (ngSubmit)="submit()">
            <mat-form-field appearance="outline"><mat-label>Usuario</mat-label><input matInput formControlName="username"></mat-form-field>
            <mat-form-field appearance="outline"><mat-label>Senha</mat-label><input matInput type="password" formControlName="password"></mat-form-field>
            @if (error()) { <p class="text-sm font-semibold text-red-600">{{ error() }}</p> }
            <button mat-flat-button class="!bg-elide-orange !text-white" type="submit">Entrar</button>
            <a mat-button routerLink="/recuperar-senha">Esqueci minha senha</a>
          </form>
        </mat-card-content>
      </mat-card>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly error = signal('');
  readonly form = this.fb.nonNullable.group({
    username: ['leonardo_admin', Validators.required],
    password: ['elide.com.leo.2026', Validators.required]
  });

  submit(): void {
    if (this.form.invalid) {
      return;
    }
    this.auth.login(this.form.controls.username.value, this.form.controls.password.value).subscribe({
      next: () => void this.router.navigateByUrl(this.auth.isAdmin() ? '/admin' : '/cliente'),
      error: () => this.error.set('Credenciais invalidas ou servidor indisponivel.')
    });
  }
}

@Component({
  selector: 'elide-register-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-2xl px-5 py-14">
      <h1 class="mb-6 text-3xl font-extrabold">Criar conta</h1>
      <mat-card><mat-card-content class="p-6">
        <form class="grid gap-4" [formGroup]="form" (ngSubmit)="submit()">
          <mat-form-field appearance="outline"><mat-label>Nome completo</mat-label><input matInput formControlName="fullName"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Usuario</mat-label><input matInput formControlName="username"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>E-mail</mat-label><input matInput type="email" formControlName="email"></mat-form-field>
          <mat-form-field appearance="outline"><mat-label>Senha</mat-label><input matInput type="password" formControlName="password"></mat-form-field>
          <button mat-flat-button class="!bg-elide-orange !text-white">Cadastrar</button>
        </form>
      </mat-card-content></mat-card>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly form = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  submit(): void {
    if (this.form.valid) {
      this.auth.register(this.form.getRawValue()).subscribe(() => void this.router.navigateByUrl('/cliente'));
    }
  }
}

@Component({
  selector: 'elide-catalog-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-7xl px-5 py-10">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold">{{ title }}</h1>
          <p class="text-neutral-600 dark:text-neutral-300">{{ subtitle }}</p>
        </div>
        <mat-form-field appearance="outline" class="w-full sm:w-80">
          <mat-label>Buscar</mat-label>
          <input matInput placeholder="Loja, produto ou categoria">
          <mat-icon matSuffix>search</mat-icon>
        </mat-form-field>
      </div>
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        @for (store of stores().content; track store.id) {
          <mat-card class="transition hover:-translate-y-1 hover:shadow-soft">
            <mat-card-content class="p-5">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h2 class="text-xl font-bold">{{ store.name }}</h2>
                  <p class="text-sm text-neutral-600 dark:text-neutral-300">{{ store.segment }}</p>
                </div>
                <mat-chip>{{ store.open ? 'Aberta' : 'Fechada' }}</mat-chip>
              </div>
              <p class="mt-4 text-sm">Entrega {{ store.deliveryFee | currency:'BRL' }} · Minimo {{ store.minimumOrder | currency:'BRL' }}</p>
              <div class="mt-5 flex gap-2">
                <a mat-flat-button class="!bg-elide-orange !text-white" [routerLink]="['/produto', store.id]">Ver produtos</a>
                <button mat-icon-button aria-label="Favoritar"><mat-icon>favorite</mat-icon></button>
              </div>
            </mat-card-content>
          </mat-card>
        } @empty {
          <mat-card><mat-card-content class="p-6">Nenhuma loja encontrada no momento.</mat-card-content></mat-card>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogPageComponent {
  protected readonly api = inject(ApiService);
  readonly title = 'Lojas parceiras';
  readonly subtitle = 'Explore estabelecimentos ativos na sua cidade.';
  readonly stores = toSignal(this.api.stores().pipe(catchError(() => of(emptyStores))), { initialValue: emptyStores });
}

@Component({ selector: 'elide-restaurants-page', imports: [CatalogPageComponent], template: '<elide-catalog-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class RestaurantsPageComponent {}

@Component({ selector: 'elide-markets-page', imports: [CatalogPageComponent], template: '<elide-catalog-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class MarketsPageComponent {}

@Component({ selector: 'elide-pharmacies-page', imports: [CatalogPageComponent], template: '<elide-catalog-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class PharmaciesPageComponent {}

@Component({
  selector: 'elide-product-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-6xl px-5 py-10">
      <h1 class="mb-6 text-3xl font-extrabold">Produtos</h1>
      <div class="grid gap-4 md:grid-cols-2">
        @for (product of products().content; track product.id) {
          <mat-card>
            <mat-card-content class="p-5">
              <h2 class="text-xl font-bold">{{ product.name }}</h2>
              <p class="mt-2 min-h-12 text-neutral-600 dark:text-neutral-300">{{ product.description }}</p>
              <div class="mt-5 flex items-center justify-between">
                <strong>{{ product.price | currency:'BRL' }}</strong>
                <button mat-flat-button class="!bg-elide-orange !text-white" (click)="cart.add(product)">Adicionar</button>
              </div>
            </mat-card-content>
          </mat-card>
        } @empty {
          <mat-card><mat-card-content class="p-6">Selecione uma loja para ver produtos.</mat-card-content></mat-card>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly api = inject(ApiService);
  readonly cart = inject(CartService);
  readonly products = toSignal(
    this.route.paramMap.pipe(
      switchMap((params) => this.api.products(params.get('id') ?? '')),
      catchError(() => of(emptyProducts))
    ),
    { initialValue: emptyProducts }
  );
}

@Component({
  selector: 'elide-cart-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-4xl px-5 py-10">
      <h1 class="mb-6 text-3xl font-extrabold">Carrinho</h1>
      <mat-card>
        <mat-list>
          @for (item of cart.items(); track item.product.id) {
            <mat-list-item>
              <mat-icon matListItemIcon>shopping_bag</mat-icon>
              <div matListItemTitle>{{ item.product.name }}</div>
              <div matListItemLine>{{ item.quantity }} x {{ item.product.price | currency:'BRL' }}</div>
              <button mat-icon-button (click)="cart.remove(item.product.id)" aria-label="Remover"><mat-icon>delete</mat-icon></button>
            </mat-list-item>
          } @empty {
            <mat-list-item>Seu carrinho esta vazio.</mat-list-item>
          }
        </mat-list>
        <mat-card-actions class="justify-between p-4">
          <strong>Total {{ cart.total() | currency:'BRL' }}</strong>
          <a mat-flat-button routerLink="/checkout" class="!bg-elide-orange !text-white">Checkout</a>
        </mat-card-actions>
      </mat-card>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPageComponent {
  readonly cart = inject(CartService);
}

@Component({
  selector: 'elide-checkout-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-4xl px-5 py-10">
      <h1 class="mb-6 text-3xl font-extrabold">Checkout</h1>
      <mat-card><mat-card-content class="grid gap-4 p-6">
        <mat-form-field appearance="outline"><mat-label>Forma de pagamento</mat-label><mat-select value="PIX"><mat-option value="PIX">PIX</mat-option><mat-option value="CREDIT_CARD">Cartao</mat-option><mat-option value="CASH">Dinheiro</mat-option></mat-select></mat-form-field>
        <p>Total {{ cart.total() | currency:'BRL' }}</p>
        <button mat-flat-button class="!bg-elide-orange !text-white">Finalizar pedido</button>
      </mat-card-content></mat-card>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutPageComponent {
  readonly cart = inject(CartService);
}

@Component({
  selector: 'elide-admin-panel-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-7xl px-5 py-10">
      <h1 class="text-3xl font-extrabold">Painel Administrativo</h1>
      <p class="mt-2 text-neutral-600 dark:text-neutral-300">Gestao operacional, financeira, auditoria e aprovacoes.</p>
      <div class="mt-6 grid gap-4 md:grid-cols-4">
        @for (metric of metrics(); track metric.label) {
          <mat-card><mat-card-content class="p-5"><p class="text-sm text-neutral-500">{{ metric.label }}</p><strong class="text-2xl">{{ metric.value }}</strong></mat-card-content></mat-card>
        }
      </div>
      <mat-tab-group class="mt-8">
        <mat-tab label="Pedidos"><div class="p-4"><mat-chip-set>@for (item of dashboard().ordersByStatus; track item.label) { <mat-chip>{{ item.label }}: {{ item.value }}</mat-chip> }</mat-chip-set></div></mat-tab>
        <mat-tab label="Aprovacoes"><div class="p-4">Lojas e entregadores pendentes aparecem aqui.</div></mat-tab>
        <mat-tab label="Financeiro"><div class="p-4">Receita: {{ dashboard().revenue | currency:'BRL' }}</div></mat-tab>
        <mat-tab label="Auditoria"><div class="p-4">Logs e trilhas de auditoria preparados.</div></mat-tab>
      </mat-tab-group>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelPageComponent {
  private readonly api = inject(ApiService);
  readonly dashboard = toSignal(this.api.dashboard().pipe(catchError(() => of(fallbackDashboard))), { initialValue: fallbackDashboard });
  readonly metrics = computed(() => [
    { label: 'Vendas', value: this.dashboard().revenue },
    { label: 'Pedidos', value: this.dashboard().totalOrders },
    { label: 'Usuarios', value: this.dashboard().totalUsers },
    { label: 'Lojas ativas', value: this.dashboard().activeStores }
  ]);
}

@Component({
  selector: 'elide-static-page',
  imports: MATERIAL,
  template: `
    <section class="mx-auto max-w-5xl px-5 py-12">
      <h1 class="text-3xl font-extrabold">{{ title }}</h1>
      <p class="mt-4 text-neutral-600 dark:text-neutral-300">{{ body }}</p>
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        @for (item of cards; track item) {
          <mat-card><mat-card-content class="p-5"><mat-icon class="text-elide-orange">check</mat-icon><p class="mt-3 font-semibold">{{ item }}</p></mat-card-content></mat-card>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticPageComponent {
  readonly title = 'ELIDE';
  readonly body = 'Experiencia preparada para crescer com operacoes locais de delivery.';
  readonly cards = ['Perfil e enderecos', 'Notificacoes', 'Relatorios e historico'];
}

@Component({ selector: 'elide-forgot-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class ForgotPasswordPageComponent {}

@Component({ selector: 'elide-profile-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class ProfilePageComponent {}

@Component({ selector: 'elide-my-orders-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class MyOrdersPageComponent {}

@Component({ selector: 'elide-favorites-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class FavoritesPageComponent {}

@Component({ selector: 'elide-customer-area-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class CustomerAreaPageComponent {}

@Component({ selector: 'elide-store-area-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class StoreAreaPageComponent {}

@Component({ selector: 'elide-courier-area-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class CourierAreaPageComponent {}

@Component({ selector: 'elide-contact-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactPageComponent {}

@Component({ selector: 'elide-about-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class AboutPageComponent {}

@Component({ selector: 'elide-terms-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class TermsPageComponent {}

@Component({ selector: 'elide-privacy-page', imports: [StaticPageComponent], template: '<elide-static-page />', changeDetection: ChangeDetectionStrategy.OnPush })
export class PrivacyPageComponent {}
