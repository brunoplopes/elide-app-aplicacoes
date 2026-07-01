import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MATERIAL } from './page-kit';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/material/chips";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/list";
import * as i10 from "@angular/material/progress-bar";
import * as i11 from "@angular/material/progress-spinner";
import * as i12 from "@angular/material/select";
import * as i13 from "@angular/material/tabs";
export class MetricCardComponent {
    constructor() {
        this.label = input('', ...(ngDevMode ? [{ debugName: "label" }] : []));
        this.value = input('', ...(ngDevMode ? [{ debugName: "value" }] : []));
        this.icon = input('check', ...(ngDevMode ? [{ debugName: "icon" }] : []));
    }
    static { this.ɵfac = function MetricCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MetricCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MetricCardComponent, selectors: [["elide-metric-card"]], inputs: { label: [1, "label"], value: [1, "value"], icon: [1, "icon"] }, decls: 8, vars: 3, consts: [[1, "metric-card"]], template: function MetricCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "div")(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "strong");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.label());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.value());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.icon());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule], styles: [".metric-card[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.25rem; box-shadow: var(--elide-shadow-card); transition: transform .18s ease, box-shadow .18s ease; }\n    .metric-card[_ngcontent-%COMP%]:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }\n    span[_ngcontent-%COMP%] { display: block; color: var(--elide-muted); font-size: .9rem; }\n    strong[_ngcontent-%COMP%] { display: block; margin-top: .25rem; color: var(--elide-ink); font-size: 1.55rem; }\n    mat-icon[_ngcontent-%COMP%] { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; border-radius: 8px; background: rgba(255, 107, 0, .1); color: var(--elide-orange); }\n    .dark[_nghost-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   strong[_ngcontent-%COMP%] { color: white; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MetricCardComponent, [{
        type: Component,
        args: [{ selector: 'elide-metric-card', imports: MATERIAL, template: `
    <article class="metric-card">
      <div>
        <span>{{ label() }}</span>
        <strong>{{ value() }}</strong>
      </div>
      <mat-icon>{{ icon() }}</mat-icon>
    </article>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    .metric-card { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.25rem; box-shadow: var(--elide-shadow-card); transition: transform .18s ease, box-shadow .18s ease; }\n    .metric-card:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }\n    span { display: block; color: var(--elide-muted); font-size: .9rem; }\n    strong { display: block; margin-top: .25rem; color: var(--elide-ink); font-size: 1.55rem; }\n    mat-icon { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; border-radius: 8px; background: rgba(255, 107, 0, .1); color: var(--elide-orange); }\n    :host-context(.dark) strong { color: white; }\n  "] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MetricCardComponent, { className: "MetricCardComponent", filePath: "src/app/pages/shared/metric-card.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=metric-card.component.js.map