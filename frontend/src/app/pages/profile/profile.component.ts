import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'elide-profile-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePageComponent {
  readonly page = this;

  private readonly fb = inject(FormBuilder);
  readonly form = this.fb.nonNullable.group({
    fullName: ['Leonardo Cliente', Validators.required],
    email: ['cliente@elide.local', [Validators.required, Validators.email]],
    phone: ['(19) 99999-2026', Validators.required]
  });
}
