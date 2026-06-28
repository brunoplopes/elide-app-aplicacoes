import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from './page-kit';

@Component({
  selector: 'elide-client-heading',
  imports: [...MATERIAL, RouterLink],
  template: `
    <div class="client-heading">
      <div>
        <p class="eyebrow">{{ eyebrow() }}</p>
        <h1>{{ title() }}</h1>
        <p>{{ description() }}</p>
      </div>
      @if (actionLabel()) {
        <a mat-flat-button class="primary-pill" [routerLink]="actionLink()">
          <mat-icon>{{ actionIcon() }}</mat-icon>
          {{ actionLabel() }}
        </a>
      }
    </div>
  `,
  styles: [`
    .client-heading { margin-bottom: 2rem; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; }
    .eyebrow { margin: 0 0 .5rem; color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
    h1 { margin: 0; color: var(--elide-ink); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.04; }
    p { margin: .75rem 0 0; max-width: 42rem; color: var(--elide-muted); }
    .primary-pill { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; box-shadow: var(--elide-shadow-glow); }
    :host-context(.dark) h1 { color: white; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientHeadingComponent {
  readonly eyebrow = input('Area do cliente');
  readonly title = input('Cliente ELIDE');
  readonly description = input('');
  readonly actionLabel = input('');
  readonly actionIcon = input('arrow_forward');
  readonly actionLink = input('/');
}
