import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { MATERIAL } from '../shared/page-kit';
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
const _forTrack1 = ($index, $item) => $item.path;
const _forTrack2 = ($index, $item) => $item.title;
function CouponsPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 6);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Buscando cupons...");
    i0.ɵɵelementEnd()();
} }
function CouponsPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
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
function CouponsPageComponent_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 7);
} if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r2.label)("value", metric_r2.value)("icon", metric_r2.icon);
} }
function CouponsPageComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, CouponsPageComponent_Conditional_5_For_2_Template, 1, 3, "elide-metric-card", 7, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().metrics);
} }
function CouponsPageComponent_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", action_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.description);
} }
function CouponsPageComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, CouponsPageComponent_Conditional_6_For_2_Template, 7, 4, "a", 8, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().actions);
} }
function CouponsPageComponent_Conditional_7_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r4.meta);
} }
function CouponsPageComponent_Conditional_7_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r4.action);
} }
function CouponsPageComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 9)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, CouponsPageComponent_Conditional_7_For_2_Conditional_7_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(8, CouponsPageComponent_Conditional_7_For_2_Conditional_8_Template, 2, 1, "button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r4.meta ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r4.action ? 8 : -1);
} }
function CouponsPageComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, CouponsPageComponent_Conditional_7_For_2_Template, 9, 5, "article", 9, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().cards);
} }
function CouponsPageComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "article", 9)(2, "mat-icon");
    i0.ɵɵtext(3, "local_offer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Nenhum cupom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Cupons ativos retornados pela API aparecerem aqui.");
    i0.ɵɵelementEnd()()();
} }
export class CouponsPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.coupons = signal([], ...(ngDevMode ? [{ debugName: "coupons" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.vm = computed(() => ({
            eyebrow: 'Promocoes',
            title: 'Cupons de desconto',
            description: 'Descontos prontos para aplicar no carrinho.',
            cards: this.coupons().map((coupon) => ({
                title: coupon.code,
                description: coupon.description ?? `${this.money(coupon.discountValue)} de desconto.`,
                icon: 'local_offer',
                action: coupon.active ? 'Usar no carrinho' : 'Indisponivel',
                meta: coupon.active ? 'Ativo' : 'Pausado'
            }))
        }), ...(ngDevMode ? [{ debugName: "vm" }] : []));
    }
    ngOnInit() {
        this.loading.set(true);
        this.api.coupons().pipe(catchError(() => {
            this.message.set('Endpoint /customer/coupons ainda nao respondeu.');
            return of([]);
        }), finalize(() => this.loading.set(false))).subscribe((coupons) => this.coupons.set(coupons));
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    static { this.ɵfac = function CouponsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CouponsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CouponsPageComponent, selectors: [["coupons-page"]], decls: 9, vars: 11, consts: [[1, "elide-section"], [3, "eyebrow", "title", "description", "actionLabel", "actionIcon", "actionLink"], [1, "customer-state"], [1, "customer-state", "error"], [1, "metric-grid"], [1, "action-grid"], ["mode", "indeterminate", "diameter", "28"], [3, "label", "value", "icon"], [1, "feature-card", 3, "routerLink"], [1, "feature-card"], ["mat-button", "", "type", "button"]], template: function CouponsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, CouponsPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵconditionalCreate(4, CouponsPageComponent_Conditional_4_Template, 5, 1, "p", 3);
            i0.ɵɵconditionalCreate(5, CouponsPageComponent_Conditional_5_Template, 3, 0, "div", 4);
            i0.ɵɵconditionalCreate(6, CouponsPageComponent_Conditional_6_Template, 3, 0, "div", 5);
            i0.ɵɵconditionalCreate(7, CouponsPageComponent_Conditional_7_Template, 3, 0, "div", 5)(8, CouponsPageComponent_Conditional_8_Template, 8, 0, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_8_0;
            let tmp_9_0;
            let tmp_10_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("eyebrow", ctx.page.vm().eyebrow)("title", ctx.page.vm().title)("description", ctx.page.vm().description)("actionLabel", ctx.page.vm().actionLabel ?? "")("actionIcon", ctx.page.vm().actionIcon ?? "arrow_forward")("actionLink", ctx.page.vm().actionLink ?? "/");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.message() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_8_0 = ctx.page.vm().metrics) == null ? null : tmp_8_0.length) ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_9_0 = ctx.page.vm().actions) == null ? null : tmp_9_0.length) ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_10_0 = ctx.page.vm().cards) == null ? null : tmp_10_0.length) ? 7 : !ctx.page.loading() ? 8 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CouponsPageComponent, [{
        type: Component,
        args: [{ selector: 'coupons-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    [eyebrow]=\"page.vm().eyebrow\"\n    [title]=\"page.vm().title\"\n    [description]=\"page.vm().description\"\n    [actionLabel]=\"page.vm().actionLabel ?? ''\"\n    [actionIcon]=\"page.vm().actionIcon ?? 'arrow_forward'\"\n    [actionLink]=\"page.vm().actionLink ?? '/'\"\n  />\n\n  <elide-customer-nav />\n\n  @if (page.loading()) { <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Buscando cupons...</span></div> }\n  @if (page.message()) { <p class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.message() }}</span></p> }\n\n  @if (page.vm().metrics?.length) {\n    <div class=\"metric-grid\">\n      @for (metric of page.vm().metrics; track metric.label) {\n        <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n      }\n    </div>\n  }\n\n  @if (page.vm().actions?.length) {\n    <div class=\"action-grid\">\n      @for (action of page.vm().actions; track action.path) {\n        <a class=\"feature-card\" [routerLink]=\"action.path\">\n          <mat-icon>{{ action.icon }}</mat-icon>\n          <strong>{{ action.label }}</strong>\n          <span>{{ action.description }}</span>\n        </a>\n      }\n    </div>\n  }\n\n  @if (page.vm().cards?.length) {\n    <div class=\"action-grid\">\n      @for (card of page.vm().cards; track card.title) {\n        <article class=\"feature-card\">\n          <mat-icon>{{ card.icon }}</mat-icon>\n          <strong>{{ card.title }}</strong>\n          <span>{{ card.description }}</span>\n          @if (card.meta) { <small>{{ card.meta }}</small> }\n          @if (card.action) { <button mat-button type=\"button\">{{ card.action }}</button> }\n        </article>\n      }\n    </div>\n  } @else if (!page.loading()) {\n    <div class=\"action-grid\"><article class=\"feature-card\"><mat-icon>local_offer</mat-icon><strong>Nenhum cupom</strong><span>Cupons ativos retornados pela API aparecerem aqui.</span></article></div>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.api-message {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CouponsPageComponent, { className: "CouponsPageComponent", filePath: "src/app/pages/coupons/coupons.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=coupons.component.js.map