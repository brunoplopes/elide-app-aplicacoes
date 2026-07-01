import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
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
const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9];
const _forTrack0 = ($index, $item) => $item.label;
function PaymentPixPageComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} }
function PaymentPixPageComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function PaymentPixPageComponent_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.value);
} }
export class PaymentPixPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.pixCode = signal('Aguardando geracao pela API.', ...(ngDevMode ? [{ debugName: "pixCode" }] : []));
        this.orderId = signal('Sem pedido', ...(ngDevMode ? [{ debugName: "orderId" }] : []));
        this.total = signal(0, ...(ngDevMode ? [{ debugName: "total" }] : []));
        this.expiresAt = signal('', ...(ngDevMode ? [{ debugName: "expiresAt" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
    }
    ngOnInit() {
        this.api.myOrders().pipe(catchError(() => of([]))).subscribe((orders) => {
            const order = orders[0];
            if (!order) {
                this.message.set('Nenhum pedido encontrado para gerar PIX.');
                return;
            }
            this.orderId.set(order.id);
            this.total.set(order.total);
            this.generate(order.id);
        });
    }
    generate(orderId) {
        this.api.generatePix(orderId).subscribe({
            next: (pix) => {
                this.pixCode.set(pix.pixCode);
                this.orderId.set(pix.orderId);
                this.total.set(pix.total);
                this.expiresAt.set(pix.expiresAt);
            },
            error: () => this.message.set('Endpoint /customer/payments/pix ainda nao respondeu.')
        });
    }
    summary() {
        return [
            { label: 'Pedido', value: this.orderId().slice(0, 8) },
            { label: 'Total', value: this.money(this.total()) },
            { label: 'Expira em', value: this.expiresAt() ? new Date(this.expiresAt()).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) : '--:--' }
        ];
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    static { this.ɵfac = function PaymentPixPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PaymentPixPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaymentPixPageComponent, selectors: [["elide-payment-pix-page"]], decls: 29, vars: 3, consts: [[1, "elide-section"], ["eyebrow", "Pagamento via PIX", "title", "PIX instantaneo", "description", "Gere o QR Code, copie o codigo PIX e acompanhe a confirmacao do pagamento em tempo real.", "actionLabel", "Voltar", "actionIcon", "arrow_back", "actionLink", "/pagamentos"], [1, "payment-grid"], [1, "qr-card"], [1, "qr-code"], [1, "payment-panel", "elide-form-card"], [1, "api-message"], [1, "summary-list"], ["readonly", "", "rows", "5"], [1, "button-row"], ["mat-flat-button", "", "type", "button"], ["mat-button", "", "routerLink", "/rastreamento"]], template: function PaymentPixPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "article", 3)(4, "div", 4);
            i0.ɵɵrepeaterCreate(5, PaymentPixPageComponent_For_6_Template, 1, 0, "span", null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "QR Code PIX");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "Escaneie com o aplicativo do seu banco.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "article", 5)(12, "h2");
            i0.ɵɵtext(13, "Codigo PIX");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "Use o QR Code ou copie o codigo abaixo.");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, PaymentPixPageComponent_Conditional_16_Template, 2, 1, "p", 6);
            i0.ɵɵelementStart(17, "div", 7);
            i0.ɵɵrepeaterCreate(18, PaymentPixPageComponent_For_19_Template, 5, 2, "div", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "label");
            i0.ɵɵtext(21, " Codigo copia e cola ");
            i0.ɵɵelementStart(22, "textarea", 8);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 9)(25, "button", 10);
            i0.ɵɵtext(26, "Copiar codigo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "a", 11);
            i0.ɵɵtext(28, "Acompanhar pedido");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(2, _c0));
            i0.ɵɵadvance(11);
            i0.ɵɵconditional(ctx.page.message() ? 16 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.summary());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.page.pixCode());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.payment-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 1rem;\n}\n\n.qr-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: 1.5rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.qr-card[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  gap: .8rem;\n  text-align: center;\n}\n\n.qr-code[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: .45rem;\n  width: 210px;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  background: white;\n  padding: 1rem;\n}\n\n.qr-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  background: var(--elide-ink);\n}\n\n.qr-code[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2n) {\n  background: var(--elide-orange);\n}\n\n.summary-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: .75rem;\n}\n\n.summary-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: .9rem;\n}\n\nspan[_ngcontent-%COMP%], \np[_ngcontent-%COMP%], \nlabel[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n}\n\n.api-message[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .5rem;\n  font-weight: 800;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  color: var(--elide-ink);\n  padding: .9rem;\n  outline: 0;\n}\n\ntextarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--elide-orange);\n  box-shadow: 0 0 0 1px rgba(255, 107, 0, .18);\n}\n\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .75rem;\n}\n\nbutton[_ngcontent-%COMP%] {\n  min-height: 44px;\n  border-radius: 12px !important;\n  background: var(--elide-gradient) !important;\n  color: white !important;\n}\n\n@media (max-width: 860px) {\n  .payment-grid[_ngcontent-%COMP%], \n   .summary-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 520px) {\n  .qr-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .qr-code[_ngcontent-%COMP%] {\n    width: min(210px, 72vw);\n  }\n\n  textarea[_ngcontent-%COMP%] {\n    font-size: .82rem;\n  }\n\n  .button-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaymentPixPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-payment-pix-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    eyebrow=\"Pagamento via PIX\"\n    title=\"PIX instantaneo\"\n    description=\"Gere o QR Code, copie o codigo PIX e acompanhe a confirmacao do pagamento em tempo real.\"\n    actionLabel=\"Voltar\"\n    actionIcon=\"arrow_back\"\n    actionLink=\"/pagamentos\"\n  />\n\n  <div class=\"payment-grid\">\n    <article class=\"qr-card\">\n      <div class=\"qr-code\">\n        @for (row of [1,2,3,4,5,6,7,8,9]; track row) {\n          <span></span>\n        }\n      </div>\n      <strong>QR Code PIX</strong>\n      <p>Escaneie com o aplicativo do seu banco.</p>\n    </article>\n\n    <article class=\"payment-panel elide-form-card\">\n      <h2>Codigo PIX</h2>\n      <p>Use o QR Code ou copie o codigo abaixo.</p>\n      @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n      <div class=\"summary-list\">\n        @for (item of page.summary(); track item.label) {\n          <div><span>{{ item.label }}</span><strong>{{ item.value }}</strong></div>\n        }\n      </div>\n      <label>\n        Codigo copia e cola\n        <textarea readonly rows=\"5\">{{ page.pixCode() }}</textarea>\n      </label>\n      <div class=\"button-row\">\n        <button mat-flat-button type=\"button\">Copiar codigo</button>\n        <a mat-button routerLink=\"/rastreamento\">Acompanhar pedido</a>\n      </div>\n    </article>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.payment-grid {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 1rem;\n}\n\n.qr-card {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: 1.5rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.qr-card {\n  display: grid;\n  justify-items: center;\n  align-content: center;\n  gap: .8rem;\n  text-align: center;\n}\n\n.qr-code {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: .45rem;\n  width: 210px;\n  aspect-ratio: 1;\n  border-radius: 8px;\n  background: white;\n  padding: 1rem;\n}\n\n.qr-code span {\n  border-radius: 6px;\n  background: var(--elide-ink);\n}\n\n.qr-code span:nth-child(2n) {\n  background: var(--elide-orange);\n}\n\n.summary-list {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: .75rem;\n}\n\n.summary-list div {\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: .9rem;\n}\n\nspan,\np,\nlabel {\n  color: var(--elide-muted);\n}\n\n.api-message {\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\nlabel {\n  display: grid;\n  gap: .5rem;\n  font-weight: 800;\n}\n\ntextarea {\n  width: 100%;\n  resize: vertical;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  color: var(--elide-ink);\n  padding: .9rem;\n  outline: 0;\n}\n\ntextarea:focus {\n  border-color: var(--elide-orange);\n  box-shadow: 0 0 0 1px rgba(255, 107, 0, .18);\n}\n\n.button-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .75rem;\n}\n\nbutton {\n  min-height: 44px;\n  border-radius: 12px !important;\n  background: var(--elide-gradient) !important;\n  color: white !important;\n}\n\n@media (max-width: 860px) {\n  .payment-grid,\n  .summary-list {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 520px) {\n  .qr-card {\n    padding: 1rem;\n  }\n\n  .qr-code {\n    width: min(210px, 72vw);\n  }\n\n  textarea {\n    font-size: .82rem;\n  }\n\n  .button-row {\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PaymentPixPageComponent, { className: "PaymentPixPageComponent", filePath: "src/app/pages/payment-pix/payment-pix.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=payment-pix.component.js.map