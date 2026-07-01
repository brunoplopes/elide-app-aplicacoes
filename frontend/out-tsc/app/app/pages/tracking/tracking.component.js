import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
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
const _forTrack0 = ($index, $item) => $item.label;
function TrackingPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 11);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando rastreamento...");
    i0.ɵɵelementEnd()();
} }
function TrackingPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3)(1, "mat-icon");
    i0.ɵɵtext(2, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function TrackingPageComponent_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const step_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.done ? "check_circle" : "radio_button_unchecked");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r2.label);
} }
export class TrackingPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.tracking = signal(null, ...(ngDevMode ? [{ debugName: "tracking" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.fallbackSteps = [
            { label: 'Pedido aceito', done: true },
            { label: 'Em preparo', done: true },
            { label: 'Saiu para entrega', done: true },
            { label: 'Chegando', done: false }
        ];
    }
    ngOnInit() {
        this.loading.set(true);
        this.api.tracking().pipe(catchError(() => {
            this.message.set('Endpoint /customer/tracking/latest ainda nao respondeu.');
            return of(null);
        }), finalize(() => this.loading.set(false))).subscribe((tracking) => this.tracking.set(tracking));
    }
    steps() {
        return this.tracking()?.steps ?? this.fallbackSteps;
    }
    progress() {
        const steps = this.steps();
        return Math.round((steps.filter((step) => step.done).length / steps.length) * 100);
    }
    distance() {
        const meters = this.tracking()?.distanceMeters ?? 1800;
        return meters >= 1000 ? `${(meters / 1000).toFixed(1).replace('.', ',')} km` : `${meters} m`;
    }
    static { this.ɵfac = function TrackingPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrackingPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TrackingPageComponent, selectors: [["elide-tracking-page"]], decls: 21, vars: 6, consts: [[1, "elide-section"], ["title", "Rastreamento em tempo real", "description", "Acompanhe preparo, rota, distancia e previsao de chegada do entregador."], [1, "customer-state"], [1, "customer-state", "error"], [1, "tracking-grid"], [1, "map-panel"], [1, "origin"], [1, "destination"], [1, "panel-card"], ["mode", "determinate", 3, "value"], [1, "steps"], ["mode", "indeterminate", "diameter", "28"]], template: function TrackingPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, TrackingPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵconditionalCreate(4, TrackingPageComponent_Conditional_4_Template, 5, 1, "p", 3);
            i0.ɵɵelementStart(5, "div", 4)(6, "div", 5)(7, "span");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "i", 6)(10, "i", 7)(11, "b");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "article", 8)(13, "h2");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "mat-progress-bar", 9);
            i0.ɵɵelementStart(18, "div", 10);
            i0.ɵɵrepeaterCreate(19, TrackingPageComponent_For_20_Template, 5, 2, "div", null, _forTrack0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            let tmp_3_0;
            let tmp_4_0;
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.message() ? 4 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Entregador a ", ctx.page.distance());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("Pedido ", ((tmp_3_0 = ctx.page.tracking()) == null ? null : tmp_3_0.orderId == null ? null : (tmp_3_0 = tmp_3_0.orderId.slice(0, 8)) == null ? null : tmp_3_0.toUpperCase()) ?? "ELD-1029");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Previsao: ", ((tmp_4_0 = ctx.page.tracking()) == null ? null : tmp_4_0.etaMinutes) ?? 12, " minutos");
            i0.ɵɵadvance();
            i0.ɵɵproperty("value", ctx.page.progress());
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.steps());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i10.MatProgressBar, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, CustomerNavComponent], styles: ["[_nghost-%COMP%] { display: block; }\n.tracking-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.2fr .8fr; gap: 1rem; }\n.map-panel[_ngcontent-%COMP%] { position: relative; min-height: 420px; overflow: hidden; border-radius: 8px; background: #111827; color: white; box-shadow: var(--elide-shadow-card); }\n.map-panel[_ngcontent-%COMP%]::before { content: ''; position: absolute; inset: 0; opacity: .75; background-image: linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px); background-size: 44px 44px; }\n.map-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { position: relative; z-index: 1; display: inline-flex; margin: 1.25rem; border-radius: 999px; background: rgba(255,255,255,.12); padding: .5rem .8rem; font-weight: 800; }\n.origin[_ngcontent-%COMP%], .destination[_ngcontent-%COMP%] { position: absolute; width: 1rem; height: 1rem; border-radius: 999px; z-index: 1; }\n.origin[_ngcontent-%COMP%] { left: 18%; top: 58%; background: var(--elide-orange); box-shadow: 0 0 0 10px rgba(255,107,0,.18); }\n.destination[_ngcontent-%COMP%] { right: 22%; top: 28%; background: white; box-shadow: 0 0 0 10px rgba(255,255,255,.16); }\n.map-panel[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { position: absolute; left: 20%; top: 59%; width: 58%; height: 3px; transform: rotate(-22deg); border-radius: 999px; background: var(--elide-orange); }\n.panel-card[_ngcontent-%COMP%] { display: grid; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.5rem; box-shadow: var(--elide-shadow-card); }\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] { margin: 0; }\np[_ngcontent-%COMP%] { color: var(--elide-muted); }\n.api-message[_ngcontent-%COMP%] { margin: 0 0 1rem; color: var(--elide-orange); font-weight: 800; }\n.steps[_ngcontent-%COMP%] { display: grid; gap: .8rem; }\n.steps[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .75rem; }\n.steps[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n@media (max-width: 900px) { .tracking-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n@media (max-width: 560px) {\n  .map-panel[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n\n  .panel-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrackingPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-tracking-page', imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading title=\"Rastreamento em tempo real\" description=\"Acompanhe preparo, rota, distancia e previsao de chegada do entregador.\" />\n  <elide-customer-nav />\n  @if (page.loading()) { <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Carregando rastreamento...</span></div> }\n  @if (page.message()) { <p class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.message() }}</span></p> }\n  <div class=\"tracking-grid\">\n    <div class=\"map-panel\">\n      <span>Entregador a {{ page.distance() }}</span>\n      <i class=\"origin\"></i>\n      <i class=\"destination\"></i>\n      <b></b>\n    </div>\n    <article class=\"panel-card\">\n      <h2>Pedido {{ page.tracking()?.orderId?.slice(0, 8)?.toUpperCase() ?? 'ELD-1029' }}</h2>\n      <p>Previsao: {{ page.tracking()?.etaMinutes ?? 12 }} minutos</p>\n      <mat-progress-bar mode=\"determinate\" [value]=\"page.progress()\" />\n      <div class=\"steps\">\n        @for (step of page.steps(); track step.label) {\n          <div><mat-icon>{{ step.done ? 'check_circle' : 'radio_button_unchecked' }}</mat-icon><strong>{{ step.label }}</strong></div>\n        }\n      </div>\n    </article>\n  </div>\n</section>\n", styles: [":host { display: block; }\n.tracking-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 1rem; }\n.map-panel { position: relative; min-height: 420px; overflow: hidden; border-radius: 8px; background: #111827; color: white; box-shadow: var(--elide-shadow-card); }\n.map-panel::before { content: ''; position: absolute; inset: 0; opacity: .75; background-image: linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px); background-size: 44px 44px; }\n.map-panel span { position: relative; z-index: 1; display: inline-flex; margin: 1.25rem; border-radius: 999px; background: rgba(255,255,255,.12); padding: .5rem .8rem; font-weight: 800; }\n.origin, .destination { position: absolute; width: 1rem; height: 1rem; border-radius: 999px; z-index: 1; }\n.origin { left: 18%; top: 58%; background: var(--elide-orange); box-shadow: 0 0 0 10px rgba(255,107,0,.18); }\n.destination { right: 22%; top: 28%; background: white; box-shadow: 0 0 0 10px rgba(255,255,255,.16); }\n.map-panel b { position: absolute; left: 20%; top: 59%; width: 58%; height: 3px; transform: rotate(-22deg); border-radius: 999px; background: var(--elide-orange); }\n.panel-card { display: grid; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.5rem; box-shadow: var(--elide-shadow-card); }\nh2, p { margin: 0; }\np { color: var(--elide-muted); }\n.api-message { margin: 0 0 1rem; color: var(--elide-orange); font-weight: 800; }\n.steps { display: grid; gap: .8rem; }\n.steps div { display: flex; align-items: center; gap: .75rem; }\n.steps mat-icon { color: var(--elide-orange); }\n@media (max-width: 900px) { .tracking-grid { grid-template-columns: 1fr; } }\n\n@media (max-width: 560px) {\n  .map-panel {\n    min-height: 320px;\n  }\n\n  .panel-card {\n    padding: 1rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TrackingPageComponent, { className: "TrackingPageComponent", filePath: "src/app/pages/tracking/tracking.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=tracking.component.js.map