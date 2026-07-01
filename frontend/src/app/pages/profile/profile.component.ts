import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';

@Component({
  selector: 'elide-profile-page',
  imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent implements OnInit {
  readonly page = this;

  private readonly fb = inject(FormBuilder);
  private readonly api = inject(CustomerApiService);
  private readonly auth = inject(AuthService);

  readonly loading = signal(false);
  readonly message = signal<string | null>(null);

  readonly form = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
  });

  ngOnInit(): void {
    const authProfile = this.auth.profile();
    this.form.patchValue({
      fullName: authProfile?.fullName ?? 'Cliente ELIDE',
      email: authProfile?.username ?? authProfile?.fullName ?? 'cliente@elide.local',
      phone: ''
    });
    this.api.profile().pipe(catchError(() => of(null))).subscribe((profile) => {
      if (!profile) {
        this.message.set('Perfil local carregado. Endpoint /customer/profile ainda nao respondeu.');
        return;
      }
      this.form.patchValue({
        fullName: profile.fullName,
        email: profile.email,
        phone: profile.phone ?? ''
      });
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.message.set(null);
    this.api.updateProfile(this.form.getRawValue())
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => this.message.set('Perfil salvo com sucesso.'),
        error: () => this.message.set('Nao foi possivel salvar o perfil na API.')
      });
  }
}
