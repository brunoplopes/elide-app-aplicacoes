import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { FormBuilder, Validators } from '@angular/forms';

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
  readonly sent = signal(false);
  readonly form = this.fb.nonNullable.group({ identifier: ['', Validators.required] });
  submit(): void {
    if (this.form.valid) {
      this.sent.set(true);
    }
  }
}
