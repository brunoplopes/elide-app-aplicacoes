import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';

type FooterGroup = {
  title: string;
  links: ReadonlyArray<{ label: string; route: string }>;
};

type MenuRole = 'auth' | 'guest' | 'customer' | 'store' | 'courier' | 'admin';

type MenuLink = {
  label: string;
  route: string;
  icon: string;
  roles: ReadonlyArray<MenuRole>;
};

type MenuGroup = {
  title: string;
  links: ReadonlyArray<MenuLink>;
};

@Component({
  selector: 'elide-shell-layout',
  host: { ngSkipHydration: 'true' },
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <a routerLink="/" class="brand-link" aria-label="ELIDE inicio">
          <img src="/assets/brand/elide-logo.svg" alt="ELIDE">
          <span>
            <strong>ELIDE</strong>
            <small>Mais que entrega. Conexao.</small>
          </span>
        </a>

        <nav class="main-nav" aria-label="Navegacao principal">
          @for (item of mainLinks; track item.route) {
            <a mat-button [routerLink]="item.route" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
              {{ item.label }}
            </a>
          }
        </nav>

        <div class="header-actions">
          <a mat-button routerLink="/loja" class="partner-pill">Loja</a>
          <a mat-button routerLink="/entregador" class="partner-pill">Entregador</a>

          @if (auth.isAuthenticated()) {
            <a mat-stroked-button routerLink="/perfil" class="login-pill user-pill"><mat-icon>person</mat-icon> {{ userName() }}</a>
            @if (auth.isAdmin()) {
              <a mat-icon-button routerLink="/admin/dashboard" aria-label="Painel admin" class="ghost-icon"><mat-icon>admin_panel_settings</mat-icon></a>
            }
            <button mat-icon-button type="button" aria-label="Sair" class="ghost-icon logout-button" (click)="logout()">
              <mat-icon>logout</mat-icon>
            </button>
          } @else {
            <a mat-stroked-button routerLink="/login" class="login-pill"><mat-icon>person</mat-icon> Entrar</a>
          }

          <a mat-icon-button routerLink="/carrinho" aria-label="Carrinho" class="cart-button"><mat-icon>shopping_bag</mat-icon></a>
          <button mat-icon-button type="button" (click)="theme.toggle()" aria-label="Alternar tema" class="ghost-icon">
            <mat-icon>{{ theme.darkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>
          <button
            mat-icon-button
            type="button"
            aria-label="Abrir menu"
            class="menu-button"
            [attr.aria-expanded]="mobileMenuOpen()"
            (click)="toggleMobileMenu()">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>
    </header>

    <button
      type="button"
      class="mobile-backdrop"
      [class.is-open]="mobileMenuOpen()"
      aria-label="Fechar menu"
      (click)="closeMobileMenu()">
    </button>

    <aside class="mobile-drawer" [class.is-open]="mobileMenuOpen()" aria-label="Menu mobile">
      <div class="mobile-drawer-header">
        <a routerLink="/" class="drawer-brand" aria-label="ELIDE inicio" (click)="closeMobileMenu()">
          <img src="/assets/brand/elide-logo.svg" alt="ELIDE">
          <span>
            <strong>ELIDE</strong>
            <small>Mais que entrega. Conexao.</small>
          </span>
        </a>
        <button mat-icon-button type="button" class="drawer-close" aria-label="Fechar menu" (click)="closeMobileMenu()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <nav class="mobile-menu-section" aria-label="Navegacao mobile">
        @if (auth.isAuthenticated()) {
          <div class="drawer-user">
            <mat-icon>account_circle</mat-icon>
            <span>
              <strong>{{ userName() }}</strong>
              <small>{{ userRoleLabel() }}</small>
            </span>
          </div>
        }

        @for (group of visibleMenuGroups(); track group.title) {
          <div class="menu-group">
            <h2>{{ group.title }}</h2>
            @for (link of group.links; track link.route + link.label) {
              <a [routerLink]="link.route" (click)="closeMobileMenu()">
                <mat-icon>{{ link.icon }}</mat-icon>
                <span>{{ link.label }}</span>
              </a>
            }
          </div>
        }

        @if (auth.isAuthenticated()) {
          <button type="button" class="drawer-logout" (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Sair da conta</span>
          </button>
        }
      </nav>
    </aside>

    <main>
      <router-outlet />
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <section class="footer-brand" aria-label="ELIDE">
          <a routerLink="/" class="brand-link footer-logo" aria-label="ELIDE inicio">
            <img src="/assets/brand/elide-logo.svg" alt="ELIDE">
            <span>
              <strong>ELIDE</strong>
              <small>Mais que entrega. Conexao.</small>
            </span>
          </a>
          <p>Mais que entrega. Conexao. Delivery rapido e confiavel para cidades pequenas e medias de todo o Brasil.</p>
          <div class="footer-contact">
            <a href="tel:+5511948562875"><mat-icon>call</mat-icon> (11) 94856-2875</a>
            <a href="mailto:leonardocosta028@icloud.com"><mat-icon>mail</mat-icon> leonardocosta028&#64;icloud.com</a>
          </div>
        </section>

        @for (group of footerGroups; track group.title) {
          <nav class="footer-links" [attr.aria-label]="group.title">
            <h2>{{ group.title }}</h2>
            @for (link of group.links; track link.route + link.label) {
              <a [routerLink]="link.route">{{ link.label }}</a>
            }
          </nav>
        }
      </div>
      <div class="footer-bottom">
        <span>© 2026 ELIDE - Mais que entrega. Conexao.</span>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 50;
      border-bottom: 1px solid var(--elide-border);
      background: rgba(255, 255, 255, .9);
      color: var(--elide-ink);
      backdrop-filter: blur(12px);
    }

    .mobile-backdrop {
      position: fixed;
      inset: 0;
      z-index: 60;
      display: block;
      border: 0;
      padding: 0;
      pointer-events: none;
      opacity: 0;
      background: rgba(0, 0, 0, .62);
      transition: opacity 180ms ease;
    }

    .mobile-backdrop.is-open {
      pointer-events: auto;
      opacity: 1;
    }

    .header-inner {
      display: flex;
      align-items: center;
      width: min(1180px, calc(100% - 2rem));
      min-height: 64px;
      margin: 0 auto;
      gap: 1rem;
    }

    main {
      flex: 1 0 auto;
    }

    .brand-link {
      display: inline-flex;
      align-items: center;
      min-width: max-content;
      gap: .6rem;
      color: var(--elide-ink);
      text-decoration: none;
    }

    .brand-link img {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      object-fit: cover;
    }

    .brand-link strong,
    .brand-link small {
      display: block;
      line-height: 1.05;
    }

    .brand-link strong {
      font-size: 1rem;
      font-weight: 950;
      letter-spacing: 0;
    }

    .brand-link small {
      margin-top: .15rem;
      color: var(--elide-muted);
      font-size: .72rem;
      font-weight: 700;
    }

    .main-nav {
      display: flex;
      align-items: center;
      gap: .15rem;
      margin-left: auto;
    }

    .main-nav a,
    .partner-pill,
    .login-pill {
      border-radius: 999px !important;
      color: var(--elide-muted) !important;
      font-size: .86rem;
      font-weight: 800 !important;
    }

    .main-nav a:hover,
    .main-nav .active-link,
    .partner-pill:hover {
      background: rgba(255, 107, 0, .08) !important;
      color: var(--elide-ink) !important;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: .35rem;
    }

    .login-pill {
      height: 34px !important;
      border-color: rgba(30, 30, 30, .18) !important;
      background: rgba(255, 255, 255, .7) !important;
      color: var(--elide-ink) !important;
      padding: 0 .85rem !important;
      box-shadow: 0 1px 3px rgba(30, 30, 30, .06);
    }

    .login-pill mat-icon {
      width: 17px;
      height: 17px;
      font-size: 17px;
    }

    .user-pill {
      max-width: 178px;
    }

    .user-pill ::ng-deep .mdc-button__label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .cart-button {
      width: 40px;
      height: 40px;
      background: var(--elide-gradient) !important;
      color: white !important;
      box-shadow: var(--elide-shadow-card);
    }

    .ghost-icon {
      color: var(--elide-ink) !important;
    }

    .menu-button {
      display: inline-grid;
      color: var(--elide-ink) !important;
    }

    .mobile-drawer {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 70;
      display: block;
      width: min(276px, calc(100vw - 64px));
      max-height: none;
      overflow-y: auto;
      border-left: 1px solid rgba(30, 30, 30, .08);
      background: #ffffff;
      padding: 1.25rem 1.05rem 1.5rem;
      box-shadow: none;
      transform: translateX(100%);
      visibility: hidden;
      pointer-events: none;
      transition: transform 220ms ease, visibility 0s linear 220ms, box-shadow 220ms ease;
    }

    .mobile-drawer.is-open {
      box-shadow: -26px 0 50px -34px rgba(0, 0, 0, .6);
      transform: translateX(0);
      visibility: visible;
      pointer-events: auto;
      transition-delay: 0s;
    }

    .mobile-drawer-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: .75rem;
      margin-bottom: 1.15rem;
    }

    .drawer-brand {
      display: inline-flex;
      align-items: center;
      min-width: 0;
      gap: .55rem;
      color: var(--elide-ink);
      text-decoration: none;
    }

    .drawer-brand img {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      object-fit: cover;
    }

    .drawer-brand strong,
    .drawer-brand small {
      display: block;
      line-height: 1.05;
    }

    .drawer-brand strong {
      color: var(--elide-ink);
      font-size: .98rem;
      font-weight: 950;
    }

    .drawer-brand small {
      margin-top: .16rem;
      max-width: 132px;
      overflow: hidden;
      color: var(--elide-muted);
      font-size: .55rem;
      font-weight: 700;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .drawer-close {
      flex: 0 0 22px;
      width: 22px !important;
      height: 22px !important;
      border: 1px solid rgba(255, 107, 0, .48) !important;
      color: var(--elide-orange) !important;
      padding: 0 !important;
      line-height: 22px !important;
    }

    .drawer-close mat-icon {
      width: 14px;
      height: 14px;
      font-size: 14px;
      line-height: 14px;
    }

    .mobile-menu-section {
      display: grid;
      gap: .85rem;
    }

    .menu-group {
      display: grid;
      gap: .15rem;
      border-top: 1px solid rgba(30, 30, 30, .1);
      padding-top: .8rem;
    }

    .menu-group:first-child {
      border-top: 0;
      padding-top: 0;
    }

    .menu-group h2 {
      margin: 0 0 .25rem;
      padding: 0 .6rem;
      color: #7c7c7c;
      font-size: .72rem;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }

    .mobile-menu-section a,
    .drawer-logout {
      display: flex;
      align-items: center;
      min-height: 36px;
      gap: .65rem;
      border: 0;
      border-radius: 8px;
      padding: 0 .6rem;
      background: transparent;
      color: #161616;
      font-size: .88rem;
      font-weight: 500;
      line-height: 1.2;
      text-decoration: none;
      text-align: left;
    }

    .mobile-menu-section mat-icon,
    .drawer-logout mat-icon {
      flex: 0 0 19px;
      width: 19px;
      height: 19px;
      color: var(--elide-orange);
      font-size: 19px;
      line-height: 19px;
    }

    .mobile-menu-section span,
    .drawer-logout span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .mobile-menu-section a:hover,
    .drawer-logout:hover {
      background: rgba(255, 107, 0, .08);
      color: var(--elide-orange);
    }

    .drawer-user {
      display: flex;
      align-items: center;
      gap: .65rem;
      border: 1px solid rgba(255, 107, 0, .16);
      border-radius: 14px;
      background: rgba(255, 107, 0, .06);
      padding: .7rem .75rem;
    }

    .drawer-user > mat-icon {
      color: var(--elide-orange);
    }

    .drawer-user strong,
    .drawer-user small {
      display: block;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .drawer-user strong {
      color: var(--elide-ink);
      font-size: .9rem;
      font-weight: 950;
    }

    .drawer-user small {
      color: var(--elide-muted);
      font-size: .72rem;
      font-weight: 750;
    }

    .drawer-logout {
      width: 100%;
      min-height: 40px;
      margin-top: .25rem;
      color: var(--elide-orange);
      cursor: pointer;
    }

    .site-footer {
      flex-shrink: 0;
      border-top: 1px solid var(--elide-border);
      background: rgba(250, 248, 245, .68);
      color: var(--elide-ink);
    }

    .footer-inner {
      display: grid;
      grid-template-columns: minmax(250px, 1.4fr) repeat(3, minmax(140px, .7fr));
      width: min(1180px, calc(100% - 2rem));
      margin: 0 auto;
      gap: 2rem;
      padding: 3rem 0 2rem;
    }

    .footer-brand {
      display: grid;
      align-content: start;
      gap: 1rem;
    }

    .footer-logo {
      justify-self: start;
    }

    .footer-brand p {
      max-width: 380px;
      margin: 0;
      color: var(--elide-muted);
      line-height: 1.6;
    }

    .footer-contact {
      display: grid;
      gap: .5rem;
    }

    .footer-contact a,
    .footer-links a {
      display: inline-flex;
      align-items: center;
      gap: .4rem;
      color: var(--elide-muted);
      text-decoration: none;
      transition: color 180ms ease, transform 180ms ease;
    }

    .footer-contact mat-icon {
      width: 18px;
      height: 18px;
      color: var(--elide-orange);
      font-size: 18px;
    }

    .footer-contact a:hover,
    .footer-links a:hover {
      color: var(--elide-orange);
      transform: translateX(2px);
    }

    .footer-links {
      display: grid;
      align-content: start;
      gap: .7rem;
    }

    .footer-links h2 {
      margin: 0 0 .25rem;
      color: var(--elide-ink);
      font-size: 1rem;
      font-weight: 900;
      letter-spacing: 0;
    }

    .footer-links a {
      justify-self: start;
      font-size: .95rem;
      font-weight: 650;
    }

    .footer-bottom {
      width: min(1180px, calc(100% - 2rem));
      margin: 0 auto;
      border-top: 1px solid var(--elide-border);
      padding: 1.1rem 0 1.25rem;
      color: var(--elide-muted);
      font-size: .88rem;
    }

    :host-context(.dark) .site-header {
      background: rgba(23, 23, 23, .88);
    }

    :host-context(.dark) .site-footer {
      background: rgba(17, 17, 17, .74);
    }

    :host-context(.dark) .mobile-drawer {
      border-left-color: rgba(255, 255, 255, .1);
      background: #171717;
    }

    :host-context(.dark) .drawer-brand strong,
    :host-context(.dark) .mobile-menu-section a {
      color: white;
    }

    :host-context(.dark) .menu-group {
      border-top-color: rgba(255, 255, 255, .12);
    }

    :host-context(.dark) .menu-group h2 {
      color: rgba(255, 255, 255, .65);
    }

    :host-context(.dark) .drawer-user {
      border-color: rgba(255, 255, 255, .12);
      background: rgba(255, 255, 255, .06);
    }

    :host-context(.dark) .drawer-user strong {
      color: white;
    }

    :host-context(.dark) .brand-link,
    :host-context(.dark) .main-nav .active-link,
    :host-context(.dark) .main-nav a:hover,
    :host-context(.dark) .partner-pill:hover,
    :host-context(.dark) .ghost-icon,
    :host-context(.dark) .menu-button,
    :host-context(.dark) .footer-links h2 {
      color: white !important;
    }

    :host-context(.dark) .login-pill {
      border-color: rgba(255, 255, 255, .16) !important;
      background: rgba(23, 23, 23, .78) !important;
      color: white !important;
    }

    @media (max-width: 1120px) {
      .main-nav {
        gap: 0;
      }

      .partner-pill {
        display: none;
      }
    }

    @media (max-width: 920px) {
      .header-inner {
        width: min(100% - 1rem, 1180px);
      }

      .main-nav {
        display: none;
      }

      .header-actions {
        margin-left: auto;
      }

      .footer-inner {
        grid-template-columns: 1fr 1fr;
      }

      .footer-brand {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 640px) {
      .header-inner {
        min-height: 64px;
        gap: .5rem;
      }

      .brand-link {
        min-width: 0;
      }

      .brand-link img {
        width: 38px;
        height: 38px;
      }

      .brand-link span {
        min-width: 0;
      }

      .brand-link strong {
        font-size: .98rem;
      }

      .brand-link small {
        max-width: 142px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .68rem;
      }

      .cart-button {
        width: 40px;
        height: 40px;
      }

      .footer-inner {
        grid-template-columns: 1fr;
        width: min(100% - 2rem, 1180px);
        gap: 1.5rem;
        padding: 2.25rem 0 1.5rem;
      }

      .footer-bottom {
        width: min(100% - 2rem, 1180px);
      }
    }

    @media (max-width: 920px) {
      .login-pill,
      .ghost-icon {
        display: none !important;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellLayoutComponent {
  readonly auth = inject(AuthService);
  readonly theme = inject(ThemeService);
  private readonly router = inject(Router);
  readonly mobileMenuOpen = signal(false);

  readonly userName = computed(() => this.auth.profile()?.fullName || this.auth.profile()?.username || 'Minha conta');
  readonly userRoleLabel = computed(() => {
    if (this.auth.hasRole('MASTER_ADMIN')) {
      return 'Administrador master';
    }
    if (this.auth.hasRole('ADMIN')) {
      return 'Administrador';
    }
    if (this.auth.hasRole('STORE_OWNER') || this.auth.hasRole('STORE_USER')) {
      return 'Estabelecimento';
    }
    if (this.auth.hasRole('COURIER')) {
      return 'Entregador';
    }
    return this.auth.isAuthenticated() ? 'Cliente' : 'Visitante';
  });

  readonly visibleMenuGroups = computed(() => this.menuGroups
    .map((group) => ({
      ...group,
      links: group.links.filter((link) => this.canSee(link.roles))
    }))
    .filter((group) => group.links.length > 0));

  readonly mainLinks = [
    { label: 'Restaurantes', route: '/restaurantes' },
    { label: 'Mercado', route: '/mercados' },
    { label: 'Farmacia', route: '/farmacias' },
    { label: 'Meus Pedidos', route: '/meus-pedidos' },
    { label: 'Contato', route: '/contato' }
  ] as const;

  readonly footerGroups: ReadonlyArray<FooterGroup> = [
    {
      title: 'Categorias',
      links: [
        { label: 'Restaurantes', route: '/restaurantes' },
        { label: 'Lanchonetes & Pizzarias', route: '/restaurantes' },
        { label: 'Mercados', route: '/mercados' },
        { label: 'Farmacias', route: '/farmacias' }
      ]
    },
    {
      title: 'Parceiros',
      links: [
        { label: 'Area da Loja', route: '/loja' },
        { label: 'Seja entregador', route: '/entregador' },
        { label: 'Painel Admin', route: '/admin/dashboard' },
        { label: 'Contato', route: '/contato' }
      ]
    },
    {
      title: 'Conta',
      links: [
        { label: 'Entrar', route: '/login' },
        { label: 'Criar conta', route: '/cadastro' },
        { label: 'Meus pedidos', route: '/meus-pedidos' },
        { label: 'Cupons', route: '/cupons' },
        { label: 'Carteira', route: '/carteira' }
      ]
    }
  ];

  readonly menuGroups: ReadonlyArray<MenuGroup> = [
    {
      title: 'Comprar',
      links: [
        { label: 'Restaurantes', route: '/restaurantes', icon: 'restaurant', roles: ['guest', 'auth'] },
        { label: 'Mercados', route: '/mercados', icon: 'local_grocery_store', roles: ['guest', 'auth'] },
        { label: 'Farmacias', route: '/farmacias', icon: 'local_pharmacy', roles: ['guest', 'auth'] },
        { label: 'Padarias', route: '/padarias', icon: 'bakery_dining', roles: ['guest', 'auth'] },
        { label: 'Lanchonetes', route: '/lanchonetes', icon: 'lunch_dining', roles: ['guest', 'auth'] },
        { label: 'Acougues', route: '/acougues', icon: 'set_meal', roles: ['guest', 'auth'] },
        { label: 'Pet Shops', route: '/pet-shops', icon: 'pets', roles: ['guest', 'auth'] },
        { label: 'Carrinho', route: '/carrinho', icon: 'shopping_bag', roles: ['guest', 'auth'] },
        { label: 'Contato', route: '/contato', icon: 'support_agent', roles: ['guest', 'auth'] }
      ]
    },
    {
      title: 'Cliente',
      links: [
        { label: 'Cadastro', route: '/cadastro', icon: 'person_add', roles: ['guest'] },
        { label: 'Login', route: '/login', icon: 'login', roles: ['guest'] },
        { label: 'Esqueci minha senha', route: '/recuperar-senha', icon: 'lock_reset', roles: ['guest'] },
        { label: 'Area do cliente', route: '/cliente', icon: 'dashboard', roles: ['customer'] },
        { label: 'Editar perfil', route: '/perfil', icon: 'person', roles: ['customer'] },
        { label: 'Alterar senha', route: '/alterar-senha', icon: 'lock_reset', roles: ['customer'] },
        { label: 'Favoritos', route: '/favoritos', icon: 'favorite', roles: ['customer'] },
        { label: 'Enderecos', route: '/enderecos', icon: 'location_on', roles: ['customer'] },
        { label: 'Historico de pedidos', route: '/meus-pedidos', icon: 'receipt_long', roles: ['customer'] },
        { label: 'Cupons', route: '/cupons', icon: 'sell', roles: ['customer'] },
        { label: 'Carteira', route: '/carteira', icon: 'account_balance_wallet', roles: ['customer'] },
        { label: 'Avaliacoes', route: '/avaliacoes', icon: 'star', roles: ['customer'] },
        { label: 'Notificacoes', route: '/notificacoes', icon: 'notifications', roles: ['customer'] },
        { label: 'Pagamentos', route: '/pagamentos', icon: 'payments', roles: ['customer'] },
        { label: 'Pagamento via PIX', route: '/pagamentos/pix', icon: 'qr_code_2', roles: ['customer'] },
        { label: 'Pagamento via cartao', route: '/pagamentos/cartao', icon: 'credit_card', roles: ['customer'] },
        { label: 'Pagamento em dinheiro', route: '/pagamentos/dinheiro', icon: 'payments', roles: ['customer'] },
        { label: 'Rastreamento em tempo real', route: '/rastreamento', icon: 'near_me', roles: ['customer'] }
      ]
    },
    {
      title: 'Estabelecimento',
      links: [
        { label: 'Area da loja', route: '/loja', icon: 'storefront', roles: ['store'] },
        { label: 'Cadastro da loja', route: '/loja', icon: 'add_business', roles: ['store'] },
        { label: 'Envio de documentacao', route: '/loja', icon: 'upload_file', roles: ['store'] },
        { label: 'Aprovacao pelo administrador', route: '/loja', icon: 'verified', roles: ['store'] },
        { label: 'Produtos', route: '/loja', icon: 'inventory_2', roles: ['store'] },
        { label: 'Categorias', route: '/loja', icon: 'category', roles: ['store'] },
        { label: 'Complementos', route: '/loja', icon: 'add_circle', roles: ['store'] },
        { label: 'Horarios', route: '/loja', icon: 'schedule', roles: ['store'] },
        { label: 'Estoque', route: '/loja', icon: 'inventory', roles: ['store'] },
        { label: 'Promocoes', route: '/loja', icon: 'local_offer', roles: ['store'] },
        { label: 'Recebimento de pedidos', route: '/loja', icon: 'receipt_long', roles: ['store'] },
        { label: 'Status do pedido', route: '/loja', icon: 'published_with_changes', roles: ['store'] },
        { label: 'Financeiro', route: '/loja', icon: 'payments', roles: ['store'] },
        { label: 'Relatorios', route: '/loja', icon: 'bar_chart', roles: ['store'] },
        { label: 'Dashboard', route: '/loja', icon: 'dashboard', roles: ['store'] },
        { label: 'Avaliacoes', route: '/loja', icon: 'reviews', roles: ['store'] }
      ]
    },
    {
      title: 'Entregador',
      links: [
        { label: 'Area do entregador', route: '/entregador', icon: 'delivery_dining', roles: ['courier'] },
        { label: 'Cadastro', route: '/entregador', icon: 'person_add', roles: ['courier'] },
        { label: 'Envio de documentos', route: '/entregador', icon: 'upload_file', roles: ['courier'] },
        { label: 'Validacao pelo administrador', route: '/entregador', icon: 'verified', roles: ['courier'] },
        { label: 'Aceitar corrida', route: '/entregador', icon: 'check_circle', roles: ['courier'] },
        { label: 'Recusar corrida', route: '/entregador', icon: 'cancel', roles: ['courier'] },
        { label: 'GPS', route: '/entregador', icon: 'my_location', roles: ['courier'] },
        { label: 'Mapa', route: '/entregador', icon: 'map', roles: ['courier'] },
        { label: 'Ganhos diarios', route: '/entregador', icon: 'today', roles: ['courier'] },
        { label: 'Ganhos mensais', route: '/entregador', icon: 'calendar_month', roles: ['courier'] },
        { label: 'Extrato', route: '/entregador', icon: 'account_balance_wallet', roles: ['courier'] },
        { label: 'Historico de entregas', route: '/entregador', icon: 'history', roles: ['courier'] },
        { label: 'Disponivel / indisponivel', route: '/entregador', icon: 'toggle_on', roles: ['courier'] }
      ]
    },
    {
      title: 'Administrador',
      links: [
        { label: 'Painel administrativo', route: '/admin/dashboard', icon: 'admin_panel_settings', roles: ['admin'] },
        { label: 'CRUD de lojas', route: '/admin/lojas', icon: 'storefront', roles: ['admin'] },
        { label: 'CRUD de categorias', route: '/admin/categorias', icon: 'category', roles: ['admin'] },
        { label: 'CRUD de banners', route: '/admin/banners', icon: 'image', roles: ['admin'] },
        { label: 'CRUD de cidades', route: '/admin/cidades', icon: 'location_city', roles: ['admin'] },
        { label: 'CRUD de cupons', route: '/admin/cupons', icon: 'sell', roles: ['admin'] },
        { label: 'CRUD de taxas', route: '/admin/taxas', icon: 'percent', roles: ['admin'] },
        { label: 'CRUD de administradores', route: '/admin/administradores', icon: 'manage_accounts', roles: ['admin'] },
        { label: 'Aprovar estabelecimentos', route: '/admin/aprovacoes/estabelecimentos', icon: 'verified', roles: ['admin'] },
        { label: 'Aprovar entregadores', route: '/admin/aprovacoes/entregadores', icon: 'two_wheeler', roles: ['admin'] },
        { label: 'Aprovar novos ADMIN', route: '/admin/aprovacoes/admins', icon: 'shield_person', roles: ['admin'] },
        { label: 'Todos os pedidos', route: '/admin/pedidos', icon: 'receipt_long', roles: ['admin'] },
        { label: 'Gestao financeira', route: '/admin/financeiro', icon: 'payments', roles: ['admin'] },
        { label: 'Dashboard', route: '/admin/dashboard', icon: 'dashboard', roles: ['admin'] },
        { label: 'Auditoria', route: '/admin/auditoria', icon: 'policy', roles: ['admin'] },
        { label: 'Logs', route: '/admin/logs', icon: 'article', roles: ['admin'] },
        { label: 'Configuracoes gerais', route: '/admin/configuracoes', icon: 'settings', roles: ['admin'] }
      ]
    },
    {
      title: 'Conta',
      links: [
        { label: 'Meu perfil', route: '/perfil', icon: 'person', roles: ['auth'] },
        { label: 'Alterar senha', route: '/alterar-senha', icon: 'lock_reset', roles: ['auth'] }
      ]
    }
  ];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  logout(): void {
    this.auth.logout();
    this.closeMobileMenu();
    void this.router.navigateByUrl('/login');
  }

  private canSee(roles: ReadonlyArray<MenuRole>): boolean {
    const authenticated = this.auth.isAuthenticated();
    if (roles.includes('guest') && !authenticated) {
      return true;
    }
    if (roles.includes('auth') && authenticated) {
      return true;
    }
    if (roles.includes('admin') && this.auth.isAdmin()) {
      return true;
    }
    if (roles.includes('store') && (this.auth.isStoreUser() || this.auth.isAdmin())) {
      return true;
    }
    if (roles.includes('courier') && (this.auth.hasRole('COURIER') || this.auth.isAdmin())) {
      return true;
    }
    return roles.includes('customer') && authenticated;
  }
}
