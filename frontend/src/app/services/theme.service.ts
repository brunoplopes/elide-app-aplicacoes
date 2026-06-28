import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly darkMode = signal(false);

  applyInitialTheme(): void {
    if (typeof localStorage === 'undefined' || typeof document === 'undefined') {
      return;
    }
    const enabled = localStorage.getItem('elide.darkMode') === 'true';
    this.darkMode.set(enabled);
    document.documentElement.classList.toggle('dark', enabled);
  }

  toggle(): void {
    if (typeof localStorage === 'undefined' || typeof document === 'undefined') {
      return;
    }
    this.darkMode.update((value) => !value);
    localStorage.setItem('elide.darkMode', String(this.darkMode()));
    document.documentElement.classList.toggle('dark', this.darkMode());
  }
}
