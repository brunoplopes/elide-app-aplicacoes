import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { finalize } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
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
function PaymentCashPageComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
export class PaymentCashPageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.api = inject(CustomerApiService);
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.total = 48.8;
        this.form = this.fb.nonNullable.group({
            cashAmount: [60],
            noChange: [false]
        });
    }
    change() {
        return Math.max(0, Number(this.form.controls.cashAmount.value) - this.total);
    }
    save() {
        this.loading.set(true);
        this.message.set(null);
        this.api.saveCashPreference(this.form.getRawValue())
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
            next: () => this.message.set('Preferencia de dinheiro salva.'),
            error: () => this.message.set('Endpoint /customer/payments/cash ainda nao respondeu.')
        });
    }
    static { this.ɵfac = function PaymentCashPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentCashPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentCashPageComponent, selectors: [["elide-payment-cash-page"]], decls: 38, vars: 8, consts: [[1, "elide-section"], ["eyebrow", "Pagamento em dinheiro", "title", "Dinheiro na entrega", "description", "Informe se precisa de troco para o entregador chegar preparado.", "actionLabel", "Voltar", "actionIcon", "arrow_back", "actionLink", "/pagamentos"], [1, "cash-grid"], [1, "cash-panel", "elide-form-card", 3, "formGroup"], [1, "total-row"], ["appearance", "outline"], ["matInput", "", "type", "number", "formControlName", "cashAmount"], [1, "toggle-row"], ["type", "checkbox", "formControlName", "noChange"], [1, "change-box"], [1, "api-message"], ["mat-flat-button", "", "type", "button", 3, "click", "disabled"], [1, "cash-info"], ["mat-button", "", "routerLink", "/rastreamento"]], template: function PaymentCashPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "form", 3)(4, "h2");
            i0.ɵɵtext(5, "Troco");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Informe o valor em dinheiro.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4)(9, "span");
            i0.ɵɵtext(10, "Total do pedido");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "strong");
            i0.ɵɵtext(12, "R$ 48,80");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "mat-form-field", 5)(14, "mat-label");
            i0.ɵɵtext(15, "Vou pagar com");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "label", 7);
            i0.ɵɵelement(18, "input", 8);
            i0.ɵɵtext(19, " Nao preciso de troco");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 9)(21, "span");
            i0.ɵɵtext(22, "Troco estimado");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(26, PaymentCashPageComponent_Conditional_26_Template, 2, 1, "p", 10);
            i0.ɵɵelementStart(27, "button", 11);
            i0.ɵɵlistener("click", function PaymentCashPageComponent_Template_button_click_27_listener() { return ctx.page.save(); });
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "aside", 12)(30, "mat-icon");
            i0.ɵɵtext(31, "payments");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "h2");
            i0.ɵɵtext(33, "Orientacao para entrega");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "p");
            i0.ɵɵtext(35, "O valor do troco aparece para a loja e para o entregador junto com o pedido.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "a", 13);
            i0.ɵɵtext(37, "Acompanhar entrega");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate(ctx.page.form.controls.noChange.value ? "R$ 0,00" : i0.ɵɵpipeBind2(25, 5, ctx.page.change(), "BRL"));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Salvando..." : "Confirmar dinheiro", " ");
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, i1.CurrencyPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.cash-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 1rem;\n}\n\n.cash-info[_ngcontent-%COMP%] {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: 1.5rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n\n.total-row[_ngcontent-%COMP%], \n.change-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: 1rem;\n}\n\n.total-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.change-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.toggle-row[_ngcontent-%COMP%], \n.cash-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n}\n\n.change-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-size: 1.35rem;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  font-weight: 800;\n}\n\n.cash-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  transform: scale(1.35);\n}\n\n.cash-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1rem 0 .5rem;\n}\n\n@media (max-width: 820px) {\n  .cash-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 520px) {\n  .cash-info[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .total-row[_ngcontent-%COMP%], \n   .change-box[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentCashPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-payment-cash-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    eyebrow=\"Pagamento em dinheiro\"\n    title=\"Dinheiro na entrega\"\n    description=\"Informe se precisa de troco para o entregador chegar preparado.\"\n    actionLabel=\"Voltar\"\n    actionIcon=\"arrow_back\"\n    actionLink=\"/pagamentos\"\n  />\n\n  <div class=\"cash-grid\">\n    <form class=\"cash-panel elide-form-card\" [formGroup]=\"page.form\">\n      <h2>Troco</h2>\n      <p>Informe o valor em dinheiro.</p>\n      <div class=\"total-row\"><span>Total do pedido</span><strong>R$ 48,80</strong></div>\n      <mat-form-field appearance=\"outline\"><mat-label>Vou pagar com</mat-label><input matInput type=\"number\" formControlName=\"cashAmount\"></mat-form-field>\n      <label class=\"toggle-row\"><input type=\"checkbox\" formControlName=\"noChange\"> Nao preciso de troco</label>\n      <div class=\"change-box\">\n        <span>Troco estimado</span>\n        <strong>{{ page.form.controls.noChange.value ? 'R$ 0,00' : (page.change() | currency:'BRL') }}</strong>\n      </div>\n      @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n      <button mat-flat-button type=\"button\" (click)=\"page.save()\" [disabled]=\"page.loading()\">\n        {{ page.loading() ? 'Salvando...' : 'Confirmar dinheiro' }}\n      </button>\n    </form>\n\n    <aside class=\"cash-info\">\n      <mat-icon>payments</mat-icon>\n      <h2>Orientacao para entrega</h2>\n      <p>O valor do troco aparece para a loja e para o entregador junto com o pedido.</p>\n      <a mat-button routerLink=\"/rastreamento\">Acompanhar entrega</a>\n    </aside>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.cash-grid {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 1rem;\n}\n\n.cash-info {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: 1.5rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n\n.total-row,\n.change-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: 1rem;\n}\n\n.total-row span,\n.change-box span,\n.toggle-row,\n.cash-info p {\n  color: var(--elide-muted);\n}\n\n.change-box strong {\n  color: var(--elide-orange);\n  font-size: 1.35rem;\n}\n\n.api-message {\n  margin: 0;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.toggle-row {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  font-weight: 800;\n}\n\n.cash-info mat-icon {\n  color: var(--elide-orange);\n  transform: scale(1.35);\n}\n\n.cash-info h2 {\n  margin: 1rem 0 .5rem;\n}\n\n@media (max-width: 820px) {\n  .cash-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 520px) {\n  .cash-info {\n    padding: 1rem;\n  }\n\n  .total-row,\n  .change-box {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentCashPageComponent, { className: "PaymentCashPageComponent", filePath: "src/app/pages/payment-cash/payment-cash.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=payment-cash.component.js.map