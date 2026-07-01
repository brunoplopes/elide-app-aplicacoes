import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
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
function ClientHeadingComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r0.actionLink());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.actionIcon());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.actionLabel(), " ");
} }
export class ClientHeadingComponent {
    constructor() {
        this.eyebrow = input('Area do cliente', ...(ngDevMode ? [{ debugName: "eyebrow" }] : []));
        this.title = input('Cliente ELIDE', ...(ngDevMode ? [{ debugName: "title" }] : []));
        this.description = input('', ...(ngDevMode ? [{ debugName: "description" }] : []));
        this.actionLabel = input('', ...(ngDevMode ? [{ debugName: "actionLabel" }] : []));
        this.actionIcon = input('arrow_forward', ...(ngDevMode ? [{ debugName: "actionIcon" }] : []));
        this.actionLink = input('/', ...(ngDevMode ? [{ debugName: "actionLink" }] : []));
    }
    static { this.ɵfac = function ClientHeadingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClientHeadingComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ClientHeadingComponent, selectors: [["elide-client-heading"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], description: [1, "description"], actionLabel: [1, "actionLabel"], actionIcon: [1, "actionIcon"], actionLink: [1, "actionLink"] }, decls: 9, vars: 4, consts: [[1, "client-heading"], [1, "eyebrow"], ["mat-flat-button", "", 1, "primary-pill", 3, "routerLink"]], template: function ClientHeadingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "p", 1);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, ClientHeadingComponent_Conditional_8_Template, 4, 3, "a", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.eyebrow());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.description());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.actionLabel() ? 8 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink], styles: [".client-heading[_ngcontent-%COMP%] { margin-bottom: 2rem; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; }\n    .eyebrow[_ngcontent-%COMP%] { margin: 0 0 .5rem; color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n    h1[_ngcontent-%COMP%] { margin: 0; color: var(--elide-ink); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.04; }\n    p[_ngcontent-%COMP%] { margin: .75rem 0 0; max-width: 42rem; color: var(--elide-muted); }\n    .primary-pill[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; box-shadow: var(--elide-shadow-glow); }\n    .dark[_nghost-%COMP%]   h1[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   h1[_ngcontent-%COMP%] { color: white; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClientHeadingComponent, [{
        type: Component,
        args: [{ selector: 'elide-client-heading', imports: [...MATERIAL, RouterLink], template: `
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
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    .client-heading { margin-bottom: 2rem; display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1rem; }\n    .eyebrow { margin: 0 0 .5rem; color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n    h1 { margin: 0; color: var(--elide-ink); font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; line-height: 1.04; }\n    p { margin: .75rem 0 0; max-width: 42rem; color: var(--elide-muted); }\n    .primary-pill { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; box-shadow: var(--elide-shadow-glow); }\n    :host-context(.dark) h1 { color: white; }\n  "] }]
    }], null, { eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], actionLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "actionLabel", required: false }] }], actionIcon: [{ type: i0.Input, args: [{ isSignal: true, alias: "actionIcon", required: false }] }], actionLink: [{ type: i0.Input, args: [{ isSignal: true, alias: "actionLink", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ClientHeadingComponent, { className: "ClientHeadingComponent", filePath: "src/app/pages/shared/client-heading.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=client-heading.component.js.map