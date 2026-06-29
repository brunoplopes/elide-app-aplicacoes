import { Injectable, computed, signal, inject } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './api.service';
import { AuthResponse, RoleName } from '../models/marketplace.models';

const TOKEN_KEY = 'elide.accessToken';
const PROFILE_KEY = 'elide.profile';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = inject(ApiService);
  private readonly profileSignal = signal<AuthResponse | null>(readProfile());

  readonly profile = this.profileSignal.asReadonly();
  readonly isAuthenticated = computed(() => Boolean(this.profileSignal()?.accessToken));
  readonly isAdmin = computed(() => this.hasRole('ADMIN') || this.hasRole('MASTER_ADMIN'));
  readonly isStoreUser = computed(() => this.hasRole('STORE_OWNER') || this.hasRole('STORE_USER') || this.isAdmin());

  login(username: string, password: string) {
    return this.api.login(username, password).pipe(tap((response) => this.persist(response)));
  }

  register(payload: { username: string; email: string; password: string; fullName: string }) {
    return this.api.register(payload).pipe(tap((response) => this.persist(response)));
  }

  forgotPassword(identifier: string) {
    return this.api.forgotPassword(identifier);
  }

  changePassword(payload: { currentPassword: string; newPassword: string; confirmPassword: string }) {
    return this.api.changePassword(payload).pipe(tap(() => {
      const current = this.profileSignal();
      if (!current) {
        return;
      }
      const updated = { ...current, mustChangePassword: false };
      localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
      this.profileSignal.set(updated);
    }));
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(PROFILE_KEY);
    this.profileSignal.set(null);
  }

  token(): string | null {
    return this.profileSignal()?.accessToken ?? localStorage.getItem(TOKEN_KEY);
  }

  hasRole(role: RoleName): boolean {
    return this.profileSignal()?.roles?.includes(role) ?? false;
  }

  private persist(response: AuthResponse): void {
    localStorage.setItem(TOKEN_KEY, response.accessToken);
    localStorage.setItem(PROFILE_KEY, JSON.stringify(response));
    this.profileSignal.set(response);
  }
}

function readProfile(): AuthResponse | null {
  if (typeof localStorage === 'undefined') {
    return null;
  }
  const raw = localStorage.getItem(PROFILE_KEY);
  return raw ? JSON.parse(raw) as AuthResponse : null;
}
