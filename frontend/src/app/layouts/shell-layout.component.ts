import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'elide-shell-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule, MatToolbarModule],
  template: `
    <mat-toolbar class="sticky top-0 z-20 border-b border-black/5 bg-white/95 px-4 backdrop-blur dark:bg-neutral-900/95">
      <a routerLink="/" class="flex items-center gap-3 font-extrabold text-elide-ink no-underline dark:text-white">
        <img src="/assets/brand/elide-logo.svg" alt="ELIDE" class="h-9 w-9 rounded-md">
        <span>ELIDE</span>
      </a>
      <nav class="ml-8 hidden items-center gap-1 md:flex">
        <a mat-button routerLink="/restaurantes" routerLinkActive="text-elide-orange">Restaurantes</a>
        <a mat-button routerLink="/mercados" routerLinkActive="text-elide-orange">Mercados</a>
        <a mat-button routerLink="/farmacias" routerLinkActive="text-elide-orange">Farmacias</a>
        <a mat-button routerLink="/meus-pedidos" routerLinkActive="text-elide-orange">Pedidos</a>
      </nav>
      <span class="flex-1"></span>
      <button mat-icon-button type="button" (click)="theme.toggle()" aria-label="Alternar tema">
        <mat-icon>{{ theme.darkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
      @if (auth.isAuthenticated()) {
        <a mat-icon-button routerLink="/perfil" aria-label="Perfil"><mat-icon>person</mat-icon></a>
        @if (auth.isAdmin()) {
          <a mat-icon-button routerLink="/admin" aria-label="Admin"><mat-icon>admin_panel_settings</mat-icon></a>
        }
      } @else {
        <a mat-flat-button routerLink="/login" class="!bg-elide-orange !text-white">Entrar</a>
      }
    </mat-toolbar>
    <main>
      <router-outlet />
    </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellLayoutComponent {
  readonly auth = inject(AuthService);
  readonly theme = inject(ThemeService);
}

