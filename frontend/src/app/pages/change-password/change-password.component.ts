import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'elide-change-password-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangePasswordPageComponent {
  readonly page = this;

  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly message = signal<string | null>(null);
  readonly form = this.fb.nonNullable.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  });

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    if (value.newPassword !== value.confirmPassword) {
      this.message.set('A confirmacao precisa ser igual a nova senha.');
      return;
    }
    this.auth.changePassword(value).subscribe({
      next: () => {
        this.message.set('Senha atualizada com sucesso.');
        void this.router.navigateByUrl(this.auth.isAdmin() ? '/admin/dashboard' : '/cliente');
      },
      error: () => this.message.set('Endpoint /auth/change-password ainda nao respondeu.')
    });
  }
}
