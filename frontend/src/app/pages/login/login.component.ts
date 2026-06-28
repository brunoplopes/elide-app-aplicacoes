import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'elide-login-page',
  imports: [...MATERIAL, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  readonly page = this;

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
