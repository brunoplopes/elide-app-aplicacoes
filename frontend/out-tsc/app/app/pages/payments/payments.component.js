import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
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
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.label;
const _forTrack2 = ($index, $item) => $item.path;
const _forTrack3 = ($index, $item) => $item.title;
function PaymentsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function PaymentsPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "mat-progress-spinner", 7);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando metodos...");
    i0.ɵɵelementEnd()();
} }
function PaymentsPageComponent_Conditional_4_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const method_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(method_r2.type === "PIX" ? "qr_code_2" : method_r2.type === "CASH" ? "payments" : "credit_card");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(method_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", method_r2.type, "", method_r2.defaultMethod ? " \u00B7 padrao" : "");
} }
function PaymentsPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4)(1, "h2");
    i0.ɵɵtext(2, "Metodos salvos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵrepeaterCreate(4, PaymentsPageComponent_Conditional_4_For_5_Template, 8, 4, "article", null, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r0.page.methods());
} }
function PaymentsPageComponent_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 8);
} if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r3.label)("value", metric_r3.value)("icon", metric_r3.icon);
} }
function PaymentsPageComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, PaymentsPageComponent_Conditional_5_For_2_Template, 1, 3, "elide-metric-card", 8, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().metrics);
} }
function PaymentsPageComponent_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", action_r4.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r4.description);
} }
function PaymentsPageComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, PaymentsPageComponent_Conditional_6_For_2_Template, 7, 4, "a", 9, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().actions);
} }
function PaymentsPageComponent_Conditional_7_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r5.meta);
} }
function PaymentsPageComponent_Conditional_7_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r5.action);
} }
function PaymentsPageComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, PaymentsPageComponent_Conditional_7_For_2_Conditional_7_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(8, PaymentsPageComponent_Conditional_7_For_2_Conditional_8_Template, 2, 1, "small", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", card_r5.path ?? "/pagamentos");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r5.meta ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r5.action ? 8 : -1);
} }
function PaymentsPageComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, PaymentsPageComponent_Conditional_7_For_2_Template, 9, 6, "a", 9, _forTrack3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().cards);
} }
export class PaymentsPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.methods = signal([], ...(ngDevMode ? [{ debugName: "methods" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.vm = computed(() => ({
            eyebrow: 'Checkout',
            title: 'Pagamentos',
            description: `${this.methods().length} metodo(s) retornado(s) pela API de cliente.`,
            cards: [
                { title: 'PIX', icon: 'qr_code_2', description: 'Pagamento instantaneo com QR Code e copia e cola.', action: 'Gerar PIX', path: '/pagamentos/pix' },
                { title: 'Cartao', icon: 'credit_card', description: 'Credito e debito com tokenizacao preparada.', action: 'Adicionar cartao', path: '/pagamentos/cartao' },
                { title: 'Dinheiro', icon: 'payments', description: 'Pagamento na entrega com campo para troco.', action: 'Definir troco', path: '/pagamentos/dinheiro' }
            ]
        }), ...(ngDevMode ? [{ debugName: "vm" }] : []));
    }
    ngOnInit() {
        this.loading.set(true);
        this.api.paymentMethods().pipe(catchError(() => {
            this.message.set('Endpoint /customer/payments ainda nao respondeu.');
            return of([]);
        }), finalize(() => this.loading.set(false))).subscribe((methods) => this.methods.set(methods));
    }
    static { this.ɵfac = function PaymentsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentsPageComponent, selectors: [["payments-page"]], decls: 8, vars: 12, consts: [[1, "elide-section"], [3, "eyebrow", "title", "description", "actionLabel", "actionIcon", "actionLink"], [1, "api-message"], [1, "payment-state"], [1, "saved-methods"], [1, "metric-grid"], [1, "action-grid"], ["mode", "indeterminate", "diameter", "28"], [3, "label", "value", "icon"], [1, "feature-card", 3, "routerLink"], [1, "feature-action"]], template: function PaymentsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, PaymentsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(3, PaymentsPageComponent_Conditional_3_Template, 4, 0, "div", 3);
            i0.ɵɵconditionalCreate(4, PaymentsPageComponent_Conditional_4_Template, 6, 0, "section", 4);
            i0.ɵɵconditionalCreate(5, PaymentsPageComponent_Conditional_5_Template, 3, 0, "div", 5);
            i0.ɵɵconditionalCreate(6, PaymentsPageComponent_Conditional_6_Template, 3, 0, "div", 6);
            i0.ɵɵconditionalCreate(7, PaymentsPageComponent_Conditional_7_Template, 3, 0, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_9_0;
            let tmp_10_0;
            let tmp_11_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("eyebrow", ctx.page.vm().eyebrow)("title", ctx.page.vm().title)("description", ctx.page.vm().description)("actionLabel", ctx.page.vm().actionLabel ?? "")("actionIcon", ctx.page.vm().actionIcon ?? "arrow_forward")("actionLink", ctx.page.vm().actionLink ?? "/");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.methods().length ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_9_0 = ctx.page.vm().metrics) == null ? null : tmp_9_0.length) ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_10_0 = ctx.page.vm().actions) == null ? null : tmp_10_0.length) ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_11_0 = ctx.page.vm().cards) == null ? null : tmp_11_0.length) ? 7 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.payment-state[_ngcontent-%COMP%], \n.saved-methods[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n}\n\n.payment-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  color: var(--elide-muted);\n  font-weight: 850;\n  padding: 1rem;\n}\n\n.saved-methods[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.saved-methods[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 900;\n}\n\n.saved-methods[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: .75rem;\n}\n\n.saved-methods[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  padding: .85rem;\n}\n\n.saved-methods[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.saved-methods[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: .2rem;\n  color: var(--elide-muted);\n}\n\n.feature-action[_ngcontent-%COMP%] {\n  justify-self: start;\n  border-radius: 999px;\n  background: rgba(255, 107, 0, .1);\n  color: var(--elide-orange) !important;\n  font-weight: 900;\n  padding: .45rem .75rem;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentsPageComponent, [{
        type: Component,
        args: [{ selector: 'payments-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    [eyebrow]=\"page.vm().eyebrow\"\n    [title]=\"page.vm().title\"\n    [description]=\"page.vm().description\"\n    [actionLabel]=\"page.vm().actionLabel ?? ''\"\n    [actionIcon]=\"page.vm().actionIcon ?? 'arrow_forward'\"\n    [actionLink]=\"page.vm().actionLink ?? '/'\"\n  />\n\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n  @if (page.loading()) {\n    <div class=\"payment-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Carregando metodos...</span></div>\n  }\n\n  @if (page.methods().length) {\n    <section class=\"saved-methods\">\n      <h2>Metodos salvos</h2>\n      <div>\n        @for (method of page.methods(); track method.id) {\n          <article>\n            <mat-icon>{{ method.type === 'PIX' ? 'qr_code_2' : method.type === 'CASH' ? 'payments' : 'credit_card' }}</mat-icon>\n            <span><strong>{{ method.label }}</strong><small>{{ method.type }}{{ method.defaultMethod ? ' \u00B7 padrao' : '' }}</small></span>\n          </article>\n        }\n      </div>\n    </section>\n  }\n\n  @if (page.vm().metrics?.length) {\n    <div class=\"metric-grid\">\n      @for (metric of page.vm().metrics; track metric.label) {\n        <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n      }\n    </div>\n  }\n\n  @if (page.vm().actions?.length) {\n    <div class=\"action-grid\">\n      @for (action of page.vm().actions; track action.path) {\n        <a class=\"feature-card\" [routerLink]=\"action.path\">\n          <mat-icon>{{ action.icon }}</mat-icon>\n          <strong>{{ action.label }}</strong>\n          <span>{{ action.description }}</span>\n        </a>\n      }\n    </div>\n  }\n\n  @if (page.vm().cards?.length) {\n    <div class=\"action-grid\">\n      @for (card of page.vm().cards; track card.title) {\n        <a class=\"feature-card\" [routerLink]=\"card.path ?? '/pagamentos'\">\n          <mat-icon>{{ card.icon }}</mat-icon>\n          <strong>{{ card.title }}</strong>\n          <span>{{ card.description }}</span>\n          @if (card.meta) { <small>{{ card.meta }}</small> }\n          @if (card.action) { <small class=\"feature-action\">{{ card.action }}</small> }\n        </a>\n      }\n    </div>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.api-message {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.payment-state,\n.saved-methods {\n  margin-bottom: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n}\n\n.payment-state {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  color: var(--elide-muted);\n  font-weight: 850;\n  padding: 1rem;\n}\n\n.saved-methods {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.saved-methods h2 {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 900;\n}\n\n.saved-methods > div {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: .75rem;\n}\n\n.saved-methods article {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  padding: .85rem;\n}\n\n.saved-methods mat-icon {\n  color: var(--elide-orange);\n}\n\n.saved-methods small {\n  display: block;\n  margin-top: .2rem;\n  color: var(--elide-muted);\n}\n\n.feature-action {\n  justify-self: start;\n  border-radius: 999px;\n  background: rgba(255, 107, 0, .1);\n  color: var(--elide-orange) !important;\n  font-weight: 900;\n  padding: .45rem .75rem;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentsPageComponent, { className: "PaymentsPageComponent", filePath: "src/app/pages/payments/payments.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=payments.component.js.map