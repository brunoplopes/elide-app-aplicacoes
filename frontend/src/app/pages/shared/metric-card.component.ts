import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MATERIAL } from './page-kit';

@Component({
  selector: 'elide-metric-card',
  imports: MATERIAL,
  template: `
    <article class="metric-card">
      <div>
        <span>{{ label() }}</span>
        <strong>{{ value() }}</strong>
      </div>
      <mat-icon>{{ icon() }}</mat-icon>
    </article>
  `,
  styles: [`
    .metric-card { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.25rem; box-shadow: var(--elide-shadow-card); transition: transform .18s ease, box-shadow .18s ease; }
    .metric-card:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }
    span { display: block; color: var(--elide-muted); font-size: .9rem; }
    strong { display: block; margin-top: .25rem; color: var(--elide-ink); font-size: 1.55rem; }
    mat-icon { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; border-radius: 8px; background: rgba(255, 107, 0, .1); color: var(--elide-orange); }
    :host-context(.dark) strong { color: white; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricCardComponent {
  readonly label = input('');
  readonly value = input('');
  readonly icon = input('check');
}
