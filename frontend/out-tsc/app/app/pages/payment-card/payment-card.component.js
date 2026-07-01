import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
function PaymentCardPageComponent_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
export class PaymentCardPageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.api = inject(CustomerApiService);
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.form = this.fb.nonNullable.group({
            cardNumber: ['', [Validators.required, Validators.minLength(16)]],
            holderName: ['', Validators.required],
            expiry: ['', Validators.required],
            cvv: ['', [Validators.required, Validators.minLength(3)]],
            installments: ['1x de R$ 48,80']
        });
    }
    save() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading.set(true);
        this.message.set(null);
        const { installments, ...payload } = this.form.getRawValue();
        this.api.saveCard({ ...payload, defaultMethod: true })
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
            next: () => this.message.set('Cartao salvo com sucesso.'),
            error: () => this.message.set('Endpoint /customer/payments/cards ainda nao respondeu.')
        });
    }
    static { this.ɵfac = function PaymentCardPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentCardPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentCardPageComponent, selectors: [["elide-payment-card-page"]], decls: 50, vars: 4, consts: [[1, "elide-section"], ["eyebrow", "Pagamento via cartao", "title", "Cartao de credito ou debito", "description", "Cadastre um cartao tokenizado, escolha parcelas e use no checkout com seguranca.", "actionLabel", "Voltar", "actionIcon", "arrow_back", "actionLink", "/pagamentos"], [1, "card-grid"], [1, "card-form", "elide-form-card", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "cardNumber", "placeholder", "0000 0000 0000 0000"], ["matInput", "", "formControlName", "holderName"], [1, "form-row"], ["matInput", "", "formControlName", "expiry", "placeholder", "MM/AA"], ["matInput", "", "type", "password", "formControlName", "cvv"], ["formControlName", "installments"], ["value", "1x de R$ 48,80"], ["value", "2x de R$ 24,40"], ["value", "3x de R$ 16,27"], [1, "save-card"], ["type", "checkbox"], [1, "api-message"], ["mat-flat-button", "", "type", "button", 3, "click", "disabled"], [1, "card-preview"]], template: function PaymentCardPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "form", 3)(4, "h2");
            i0.ɵɵtext(5, "Novo cartao");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Dados protegidos por tokenizacao.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-form-field", 4)(9, "mat-label");
            i0.ɵɵtext(10, "Numero do cartao");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-form-field", 4)(13, "mat-label");
            i0.ɵɵtext(14, "Nome impresso");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 7)(17, "mat-form-field", 4)(18, "mat-label");
            i0.ɵɵtext(19, "Validade");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "mat-form-field", 4)(22, "mat-label");
            i0.ɵɵtext(23, "CVV");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "input", 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "mat-form-field", 4)(26, "mat-label");
            i0.ɵɵtext(27, "Parcelamento");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-select", 10)(29, "mat-option", 11);
            i0.ɵɵtext(30, "1x de R$ 48,80");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "mat-option", 12);
            i0.ɵɵtext(32, "2x de R$ 24,40");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-option", 13);
            i0.ɵɵtext(34, "3x de R$ 16,27");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "label", 14);
            i0.ɵɵelement(36, "input", 15);
            i0.ɵɵtext(37, " Salvar cartao para proximos pedidos");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(38, PaymentCardPageComponent_Conditional_38_Template, 2, 1, "p", 16);
            i0.ɵɵelementStart(39, "button", 17);
            i0.ɵɵlistener("click", function PaymentCardPageComponent_Template_button_click_39_listener() { return ctx.page.save(); });
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "aside", 18)(42, "span");
            i0.ɵɵtext(43, "ELIDE CARD");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "strong");
            i0.ɵɵtext(45, "**** **** **** 2026");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "small");
            i0.ɵɵtext(47, "Cliente ELIDE \u00B7 credito/debito");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "p");
            i0.ɵɵtext(49, "Tokenizacao preparada para gateway e antifraude.");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(35);
            i0.ɵɵconditional(ctx.page.message() ? 38 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page.loading() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Salvando..." : "Salvar cartao", " ");
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i12.MatSelect, i12.MatOption, i13.MatTabsModule, ClientHeadingComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 1rem;\n}\n\n.card-preview[_ngcontent-%COMP%] {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n.save-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  color: var(--elide-muted);\n  font-weight: 800;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.card-preview[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: end;\n  min-height: 260px;\n  background: linear-gradient(135deg, #1e1e1e, #4a3427 55%, #ff6b00);\n  color: white;\n  padding: 1.5rem;\n}\n\n.card-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.card-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.card-preview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .75);\n}\n\n.card-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 .4rem;\n  font-size: 1.5rem;\n  letter-spacing: .08em;\n}\n\n@media (max-width: 860px) {\n  .card-grid[_ngcontent-%COMP%], \n   .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 520px) {\n  .card-preview[_ngcontent-%COMP%] {\n    min-height: 210px;\n    padding: 1rem;\n  }\n\n  .card-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentCardPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-payment-card-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    eyebrow=\"Pagamento via cartao\"\n    title=\"Cartao de credito ou debito\"\n    description=\"Cadastre um cartao tokenizado, escolha parcelas e use no checkout com seguranca.\"\n    actionLabel=\"Voltar\"\n    actionIcon=\"arrow_back\"\n    actionLink=\"/pagamentos\"\n  />\n\n  <div class=\"card-grid\">\n    <form class=\"card-form elide-form-card\" [formGroup]=\"page.form\">\n      <h2>Novo cartao</h2>\n      <p>Dados protegidos por tokenizacao.</p>\n      <mat-form-field appearance=\"outline\"><mat-label>Numero do cartao</mat-label><input matInput formControlName=\"cardNumber\" placeholder=\"0000 0000 0000 0000\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Nome impresso</mat-label><input matInput formControlName=\"holderName\"></mat-form-field>\n      <div class=\"form-row\">\n        <mat-form-field appearance=\"outline\"><mat-label>Validade</mat-label><input matInput formControlName=\"expiry\" placeholder=\"MM/AA\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>CVV</mat-label><input matInput type=\"password\" formControlName=\"cvv\"></mat-form-field>\n      </div>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Parcelamento</mat-label>\n        <mat-select formControlName=\"installments\">\n          <mat-option value=\"1x de R$ 48,80\">1x de R$ 48,80</mat-option>\n          <mat-option value=\"2x de R$ 24,40\">2x de R$ 24,40</mat-option>\n          <mat-option value=\"3x de R$ 16,27\">3x de R$ 16,27</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <label class=\"save-card\"><input type=\"checkbox\"> Salvar cartao para proximos pedidos</label>\n      @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n      <button mat-flat-button type=\"button\" (click)=\"page.save()\" [disabled]=\"page.loading() || page.form.invalid\">\n        {{ page.loading() ? 'Salvando...' : 'Salvar cartao' }}\n      </button>\n    </form>\n\n    <aside class=\"card-preview\">\n      <span>ELIDE CARD</span>\n      <strong>**** **** **** 2026</strong>\n      <small>Cliente ELIDE \u00B7 credito/debito</small>\n      <p>Tokenizacao preparada para gateway e antifraude.</p>\n    </aside>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: 1fr 360px;\n  gap: 1rem;\n}\n\n.card-preview {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n.save-card {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  color: var(--elide-muted);\n  font-weight: 800;\n}\n\n.api-message {\n  margin: 0;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.card-preview {\n  display: grid;\n  align-content: end;\n  min-height: 260px;\n  background: linear-gradient(135deg, #1e1e1e, #4a3427 55%, #ff6b00);\n  color: white;\n  padding: 1.5rem;\n}\n\n.card-preview span,\n.card-preview small,\n.card-preview p {\n  color: rgba(255, 255, 255, .75);\n}\n\n.card-preview strong {\n  margin: 1.25rem 0 .4rem;\n  font-size: 1.5rem;\n  letter-spacing: .08em;\n}\n\n@media (max-width: 860px) {\n  .card-grid,\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 520px) {\n  .card-preview {\n    min-height: 210px;\n    padding: 1rem;\n  }\n\n  .card-preview strong {\n    font-size: 1.15rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentCardPageComponent, { className: "PaymentCardPageComponent", filePath: "src/app/pages/payment-card/payment-card.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=payment-card.component.js.map