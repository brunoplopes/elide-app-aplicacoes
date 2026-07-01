import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MATERIAL } from './page-kit';

@Component({
  selector: 'elide-customer-nav',
  imports: [...MATERIAL, RouterLink, RouterLinkActive],
  template: `
    <nav class="customer-nav" aria-label="Navegacao do cliente">
      <div class="customer-user">
        <mat-icon>account_circle</mat-icon>
        <span>
          <strong>{{ userName() }}</strong>
          <small>Cliente ELIDE</small>
        </span>
      </div>

      <div class="customer-links">
        @for (item of items; track item.path) {
          <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.exact }">
            <mat-icon>{{ item.icon }}</mat-icon>
            <span>{{ item.label }}</span>
          </a>
        }
      </div>

      <button mat-button type="button" class="logout-button" (click)="logout()">
        <mat-icon>logout</mat-icon>
        Sair
      </button>
    </nav>
  `,
  styles: [`
    .customer-nav {
      display: grid;
      grid-template-columns: minmax(180px, auto) minmax(0, 1fr) auto;
      align-items: center;
      gap: .9rem;
      margin: -1rem 0 1.5rem;
      border: 1px solid var(--elide-border);
      border-radius: 8px;
      background: var(--elide-card);
      padding: .85rem;
      box-shadow: var(--elide-shadow-card);
    }

    .customer-user,
    .customer-links,
    .customer-links a,
    .logout-button {
      min-width: 0;
    }

    .customer-user {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      align-items: center;
      gap: .65rem;
      color: var(--elide-ink);
    }

    .customer-user mat-icon,
    .customer-links mat-icon,
    .logout-button mat-icon {
      color: var(--elide-orange);
    }

    .customer-user span {
      display: grid;
      min-width: 0;
    }

    .customer-user strong,
    .customer-user small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .customer-user small {
      color: var(--elide-muted);
    }

    .customer-links {
      display: flex;
      gap: .45rem;
      overflow-x: auto;
      padding-bottom: .05rem;
      scrollbar-width: thin;
    }

    .customer-links a {
      display: inline-flex;
      align-items: center;
      gap: .35rem;
      border: 1px solid transparent;
      border-radius: 999px;
      color: var(--elide-muted);
      flex: 0 0 auto;
      font-weight: 850;
      padding: .55rem .7rem;
      text-decoration: none;
      transition: background .18s ease, border-color .18s ease, color .18s ease;
    }

    .customer-links a.active,
    .customer-links a:hover {
      border-color: rgba(255, 107, 0, .22);
      background: rgba(255, 107, 0, .08);
      color: var(--elide-orange);
    }

    .customer-links mat-icon {
      font-size: 1rem;
      height: 1rem;
      width: 1rem;
    }

    .logout-button {
      border-radius: 999px !important;
      color: var(--elide-orange) !important;
      font-weight: 900 !important;
      white-space: nowrap;
    }

    :host-context(.dark) .customer-user {
      color: white;
    }

    @media (max-width: 760px) {
      .customer-nav {
        grid-template-columns: 1fr auto;
      }

      .customer-links {
        grid-column: 1 / -1;
        order: 3;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerNavComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly userName = computed(() => this.auth.profile()?.fullName || this.auth.profile()?.username || 'Cliente ELIDE');
  readonly items = [
    { label: 'Inicio', path: '/cliente', icon: 'dashboard', exact: true },
    { label: 'Perfil', path: '/perfil', icon: 'person', exact: true },
    { label: 'Enderecos', path: '/enderecos', icon: 'location_on', exact: true },
    { label: 'Pedidos', path: '/meus-pedidos', icon: 'receipt_long', exact: true },
    { label: 'Favoritos', path: '/favoritos', icon: 'favorite', exact: true },
    { label: 'Cupons', path: '/cupons', icon: 'sell', exact: true },
    { label: 'Carteira', path: '/carteira', icon: 'account_balance_wallet', exact: true },
    { label: 'Avaliacoes', path: '/avaliacoes', icon: 'star', exact: true },
    { label: 'Notificacoes', path: '/notificacoes', icon: 'notifications', exact: true },
    { label: 'Rastreamento', path: '/rastreamento', icon: 'near_me', exact: true }
  ];

  logout(): void {
    this.auth.logout();
    void this.router.navigateByUrl('/login');
  }
}
