import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'elide-forgot-password-page',
  imports: [...MATERIAL, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordPageComponent {
  readonly page = this;

  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  readonly sent = signal(false);
  readonly message = signal<string | null>(null);
  readonly form = this.fb.nonNullable.group({ identifier: ['', Validators.required] });
  submit(): void {
    if (this.form.valid) {
      this.auth.forgotPassword(this.form.controls.identifier.value).subscribe({
        next: () => {
          this.sent.set(true);
          this.message.set('Codigo enviado para o contato cadastrado.');
        },
        error: () => this.message.set('Endpoint /auth/forgot-password ainda nao respondeu.')
      });
    }
  }
}
