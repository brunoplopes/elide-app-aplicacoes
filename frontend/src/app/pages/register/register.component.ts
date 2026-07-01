import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'elide-register-page',
  imports: [...MATERIAL, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent {
  readonly page = this;

  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly message = signal<string | null>(null);
  readonly form = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.message.set(null);
    this.auth.register(this.form.getRawValue()).pipe(
      finalize(() => this.loading.set(false))
    ).subscribe({
      next: () => void this.router.navigateByUrl('/cliente'),
      error: () => this.message.set('Nao foi possivel criar a conta agora.')
    });
  }
}
