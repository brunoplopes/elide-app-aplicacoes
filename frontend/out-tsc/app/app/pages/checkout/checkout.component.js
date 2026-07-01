import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CartService } from '../../services/cart.service';
import { CustomerApiService } from '../../services/customer-api.service';
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
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.product.id;
function CheckoutPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 2)(1, "mat-icon");
    i0.ɵɵtext(2, "shopping_cart_checkout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Seu carrinho esta vazio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Adicione itens antes de seguir para pagamento.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 4);
    i0.ɵɵtext(8, "Escolher produtos");
    i0.ɵɵelementEnd()();
} }
function CheckoutPageComponent_Conditional_3_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r3.label);
} }
function CheckoutPageComponent_Conditional_3_For_28_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function CheckoutPageComponent_Conditional_3_For_28_Template_button_click_0_listener() { const option_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.page.selectPayment(option_r5.value)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.page.selectedPayment() === option_r5.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r5.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(option_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r5.description);
} }
function CheckoutPageComponent_Conditional_3_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r6.quantity, "x ", item_r6.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 3, ctx_r1.page.cart.itemTotal(item_r6), "BRL"));
} }
function CheckoutPageComponent_Conditional_3_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.page.message());
} }
function CheckoutPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "article", 5)(2, "h2");
    i0.ɵɵtext(3, "Entrega e pagamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Confirme os dados antes de finalizar.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "form", 6)(7, "mat-form-field", 7)(8, "mat-label");
    i0.ɵɵtext(9, "Endereco de entrega");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-select", 8)(11, "mat-option", 9);
    i0.ɵɵtext(12, "Endereco padrao");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 10)(14, "mat-form-field", 7)(15, "mat-label");
    i0.ɵɵtext(16, "Cupom");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 12);
    i0.ɵɵlistener("click", function CheckoutPageComponent_Conditional_3_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.applyCoupon()); });
    i0.ɵɵtext(19, "Aplicar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "mat-form-field", 7)(21, "mat-label");
    i0.ɵɵtext(22, "Forma de pagamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "mat-select", 13);
    i0.ɵɵrepeaterCreate(24, CheckoutPageComponent_Conditional_3_For_25_Template, 2, 2, "mat-option", 14, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 15);
    i0.ɵɵrepeaterCreate(27, CheckoutPageComponent_Conditional_3_For_28_Template, 8, 5, "button", 16, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 17)(30, "mat-icon");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div")(33, "strong");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(37, "article", 18)(38, "h2");
    i0.ɵɵtext(39, "Resumo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 19);
    i0.ɵɵrepeaterCreate(41, CheckoutPageComponent_Conditional_3_For_42_Template, 6, 6, "div", null, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div")(44, "span");
    i0.ɵɵtext(45, "Subtotal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "strong");
    i0.ɵɵtext(47);
    i0.ɵɵpipe(48, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div")(50, "span");
    i0.ɵɵtext(51, "Entrega");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "strong");
    i0.ɵɵtext(53);
    i0.ɵɵpipe(54, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 20)(56, "span");
    i0.ɵɵtext(57, "Cupom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "strong");
    i0.ɵɵtext(59);
    i0.ɵɵpipe(60, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "footer")(62, "span");
    i0.ɵɵtext(63, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "strong");
    i0.ɵɵtext(65);
    i0.ɵɵpipe(66, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(67, CheckoutPageComponent_Conditional_3_Conditional_67_Template, 2, 1, "p", 21);
    i0.ɵɵelementStart(68, "button", 22);
    i0.ɵɵlistener("click", function CheckoutPageComponent_Conditional_3_Template_button_click_68_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.finish()); });
    i0.ɵɵtext(69);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r1.page.form);
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r1.page.paymentOptions);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.page.paymentOptions);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.selectedPayment() === "CASH" ? "payments" : ctx_r1.page.selectedPayment() === "PIX" ? "qr_code_2" : "credit_card");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.page.selectedPayment() === "PIX" ? "PIX pronto para gateway" : ctx_r1.page.selectedPayment() === "CASH" ? "Pagamento na entrega" : "Cartao pronto para gateway");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.paymentHint());
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.page.cart.items());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(48, 11, ctx_r1.page.cart.subtotal(), "BRL"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(54, 14, ctx_r1.page.cart.deliveryFee(), "BRL"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("- ", i0.ɵɵpipeBind2(60, 17, ctx_r1.page.cart.discount(), "BRL"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(66, 20, ctx_r1.page.cart.total(), "BRL"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.page.message() ? 67 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.page.loading() || ctx_r1.page.isEmpty());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.page.loading() ? "Finalizando..." : "Finalizar pedido", " ");
} }
export class CheckoutPageComponent {
    constructor() {
        this.page = this;
        this.cart = inject(CartService);
        this.api = inject(CustomerApiService);
        this.fb = inject(FormBuilder);
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.isEmpty = computed(() => this.cart.items().length === 0, ...(ngDevMode ? [{ debugName: "isEmpty" }] : []));
        this.paymentOptions = [
            { value: 'PIX', label: 'PIX', icon: 'qr_code_2', description: 'Confirmacao rapida por QR Code.' },
            { value: 'CREDIT_CARD', label: 'Cartao', icon: 'credit_card', description: 'Credito tokenizado pelo gateway.' },
            { value: 'DEBIT_CARD', label: 'Debito', icon: 'credit_card', description: 'Debito direto no checkout.' },
            { value: 'CASH', label: 'Dinheiro', icon: 'payments', description: 'Pagamento na entrega com troco.' }
        ];
        this.form = this.fb.nonNullable.group({
            couponCode: ['ELIDE10'],
            paymentMethod: ['PIX'],
            addressId: ['']
        });
    }
    applyCoupon() {
        this.cart.applyCoupon(this.form.controls.couponCode.value);
        const code = this.form.controls.couponCode.value.trim();
        this.message.set(code ? `Cupom ${code.toUpperCase()} aplicado ao pedido.` : 'Cupom removido do pedido.');
    }
    selectPayment(value) {
        this.form.controls.paymentMethod.setValue(value);
    }
    selectedPayment() {
        return this.form.controls.paymentMethod.value;
    }
    paymentHint() {
        return this.paymentOptions.find((option) => option.value === this.selectedPayment())?.description ?? '';
    }
    finish() {
        const items = this.cart.items();
        const storeId = items[0]?.product.storeId;
        if (!storeId || !items.length) {
            this.message.set('Adicione produtos de uma loja antes de finalizar.');
            return;
        }
        this.loading.set(true);
        this.message.set(null);
        this.cart.applyCoupon(this.form.controls.couponCode.value);
        this.api.createOrder({
            storeId,
            couponCode: this.cart.coupon(),
            paymentMethod: this.form.controls.paymentMethod.value,
            items: items.map((item) => ({
                productId: item.product.id,
                quantity: item.quantity,
                note: item.note ?? null,
                addons: item.addons?.map((addon) => ({ addonId: addon.id, quantity: addon.quantity })) ?? []
            }))
        }).subscribe({
            next: (order) => {
                this.cart.clear();
                this.loading.set(false);
                this.message.set(`Pedido ${order.id.slice(0, 8).toUpperCase()} criado com sucesso.`);
            },
            error: () => {
                this.loading.set(false);
                this.message.set('Nao foi possivel criar o pedido na API.');
            }
        });
    }
    static { this.ɵfac = function CheckoutPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CheckoutPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckoutPageComponent, selectors: [["elide-checkout-page"]], decls: 4, vars: 1, consts: [[1, "elide-section"], ["eyebrow", "Pagamento seguro", "title", "Checkout", "description", "Revise endereco, cupom, entrega e escolha PIX, cartao ou dinheiro."], [1, "panel-card", "empty-checkout"], [1, "checkout-grid"], ["mat-flat-button", "", "routerLink", "/restaurantes"], [1, "panel-card", "form-panel", "elide-form-card"], [3, "formGroup"], ["appearance", "outline"], ["formControlName", "addressId"], ["value", ""], [1, "coupon-row"], ["matInput", "", "formControlName", "couponCode"], ["mat-button", "", "type", "button", 3, "click"], ["formControlName", "paymentMethod"], [3, "value"], ["aria-label", "Forma de pagamento", 1, "payment-options"], ["type", "button", 3, "active"], [1, "pix-box"], [1, "panel-card", "summary", "sticky-summary"], [1, "order-items"], [1, "discount"], [1, "api-message"], ["mat-flat-button", "", "type", "button", 3, "click", "disabled"], ["type", "button", 3, "click"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, CheckoutPageComponent_Conditional_2_Template, 9, 0, "article", 2)(3, CheckoutPageComponent_Conditional_3_Template, 70, 23, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.isEmpty() ? 2 : 3);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i12.MatSelect, i12.MatOption, i13.MatTabsModule, RouterLink, ClientHeadingComponent, i1.CurrencyPipe], styles: ["[_nghost-%COMP%] { display: block; }\n.checkout-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 360px); gap: 1rem; }\n.panel-card[_ngcontent-%COMP%]:not(.elide-form-card) { min-width: 0; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.5rem; box-shadow: var(--elide-shadow-card); overflow-wrap: anywhere; }\n.form-panel[_ngcontent-%COMP%] { display: grid; gap: 1rem; }\n.form-panel[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { display: grid; gap: 1rem; }\n.coupon-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .65rem; align-items: start; }\n.coupon-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { min-height: 48px; color: var(--elide-orange) !important; background: rgba(255,107,0,.08) !important; }\n.pix-box[_ngcontent-%COMP%] { display: flex; min-width: 0; gap: 1rem; border-radius: 8px; background: rgba(255,107,0,.08); padding: 1rem; overflow-wrap: anywhere; }\n.pix-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n.pix-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; color: var(--elide-muted); }\n.payment-options[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; }\n.payment-options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: .65rem; min-height: 78px; border: 1px solid var(--elide-border); border-radius: 8px !important; background: #fff !important; color: var(--elide-ink) !important; cursor: pointer; padding: .85rem; text-align: left; box-shadow: var(--elide-shadow-card); }\n.payment-options[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] { border-color: rgba(255,107,0,.55); background: #fff8ed !important; }\n.payment-options[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n.payment-options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: grid; gap: .2rem; min-width: 0; }\n.payment-options[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { color: var(--elide-muted); font-size: .78rem; line-height: 1.3; }\n.summary[_ngcontent-%COMP%] { display: grid; gap: 1rem; align-content: start; }\nh2[_ngcontent-%COMP%] { margin: 0; font-weight: 900; }\n.summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: 1rem; }\n.order-items[_ngcontent-%COMP%] { display: grid !important; gap: .45rem; border-bottom: 1px solid var(--elide-border); padding-bottom: .85rem; }\n.order-items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: .75rem; }\n.discount[_ngcontent-%COMP%] { color: var(--elide-orange); }\nfooter[_ngcontent-%COMP%] { border-top: 1px solid var(--elide-border); padding-top: 1rem; font-size: 1.15rem; }\n.api-message[_ngcontent-%COMP%] { margin: 0; color: var(--elide-orange); font-weight: 800; }\nbutton[_ngcontent-%COMP%] { min-height: 44px; border-radius: 12px !important; background: var(--elide-gradient) !important; color: white !important; }\nbutton[_ngcontent-%COMP%]:disabled { background: rgba(30, 30, 30, .12) !important; color: rgba(30, 30, 30, .45) !important; }\n.empty-checkout[_ngcontent-%COMP%] { display: grid; justify-items: center; gap: .55rem; text-align: center; }\n.empty-checkout[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); font-size: 2.4rem; height: 2.4rem; width: 2.4rem; }\n.empty-checkout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--elide-muted); }\n.empty-checkout[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }\n@media (max-width: 860px) {\n  .checkout-grid[_ngcontent-%COMP%], \n   .payment-options[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .sticky-summary[_ngcontent-%COMP%] { position: sticky; bottom: 0; z-index: 2; }\n}\n\n@media (max-width: 520px) {\n  .coupon-row[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckoutPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-checkout-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading eyebrow=\"Pagamento seguro\" title=\"Checkout\" description=\"Revise endereco, cupom, entrega e escolha PIX, cartao ou dinheiro.\" />\n\n  @if (page.isEmpty()) {\n    <article class=\"panel-card empty-checkout\">\n      <mat-icon>shopping_cart_checkout</mat-icon>\n      <strong>Seu carrinho esta vazio</strong>\n      <span>Adicione itens antes de seguir para pagamento.</span>\n      <a mat-flat-button routerLink=\"/restaurantes\">Escolher produtos</a>\n    </article>\n  } @else {\n    <div class=\"checkout-grid\">\n      <article class=\"panel-card form-panel elide-form-card\">\n        <h2>Entrega e pagamento</h2>\n        <p>Confirme os dados antes de finalizar.</p>\n        <form [formGroup]=\"page.form\">\n          <mat-form-field appearance=\"outline\"><mat-label>Endereco de entrega</mat-label><mat-select formControlName=\"addressId\"><mat-option value=\"\">Endereco padrao</mat-option></mat-select></mat-form-field>\n          <div class=\"coupon-row\">\n            <mat-form-field appearance=\"outline\"><mat-label>Cupom</mat-label><input matInput formControlName=\"couponCode\"></mat-form-field>\n            <button mat-button type=\"button\" (click)=\"page.applyCoupon()\">Aplicar</button>\n          </div>\n          <mat-form-field appearance=\"outline\"><mat-label>Forma de pagamento</mat-label><mat-select formControlName=\"paymentMethod\">@for (option of page.paymentOptions; track option.value) { <mat-option [value]=\"option.value\">{{ option.label }}</mat-option> }</mat-select></mat-form-field>\n        </form>\n\n        <div class=\"payment-options\" aria-label=\"Forma de pagamento\">\n          @for (option of page.paymentOptions; track option.value) {\n            <button type=\"button\" [class.active]=\"page.selectedPayment() === option.value\" (click)=\"page.selectPayment(option.value)\">\n              <mat-icon>{{ option.icon }}</mat-icon>\n              <span><strong>{{ option.label }}</strong><small>{{ option.description }}</small></span>\n            </button>\n          }\n        </div>\n\n        <div class=\"pix-box\"><mat-icon>{{ page.selectedPayment() === 'CASH' ? 'payments' : page.selectedPayment() === 'PIX' ? 'qr_code_2' : 'credit_card' }}</mat-icon><div><strong>{{ page.selectedPayment() === 'PIX' ? 'PIX pronto para gateway' : page.selectedPayment() === 'CASH' ? 'Pagamento na entrega' : 'Cartao pronto para gateway' }}</strong><span>{{ page.paymentHint() }}</span></div></div>\n      </article>\n      <article class=\"panel-card summary sticky-summary\">\n        <h2>Resumo</h2>\n        <div class=\"order-items\">\n          @for (item of page.cart.items(); track item.product.id) {\n            <div><span>{{ item.quantity }}x {{ item.product.name }}</span><strong>{{ page.cart.itemTotal(item) | currency:'BRL' }}</strong></div>\n          }\n        </div>\n        <div><span>Subtotal</span><strong>{{ page.cart.subtotal() | currency:'BRL' }}</strong></div>\n        <div><span>Entrega</span><strong>{{ page.cart.deliveryFee() | currency:'BRL' }}</strong></div>\n        <div class=\"discount\"><span>Cupom</span><strong>- {{ page.cart.discount() | currency:'BRL' }}</strong></div>\n        <footer><span>Total</span><strong>{{ page.cart.total() | currency:'BRL' }}</strong></footer>\n        @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n        <button mat-flat-button type=\"button\" (click)=\"page.finish()\" [disabled]=\"page.loading() || page.isEmpty()\">\n          {{ page.loading() ? 'Finalizando...' : 'Finalizar pedido' }}\n        </button>\n      </article>\n    </div>\n  }\n</section>\n", styles: [":host { display: block; }\n.checkout-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, 360px); gap: 1rem; }\n.panel-card:not(.elide-form-card) { min-width: 0; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.5rem; box-shadow: var(--elide-shadow-card); overflow-wrap: anywhere; }\n.form-panel { display: grid; gap: 1rem; }\n.form-panel form { display: grid; gap: 1rem; }\n.coupon-row { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .65rem; align-items: start; }\n.coupon-row button { min-height: 48px; color: var(--elide-orange) !important; background: rgba(255,107,0,.08) !important; }\n.pix-box { display: flex; min-width: 0; gap: 1rem; border-radius: 8px; background: rgba(255,107,0,.08); padding: 1rem; overflow-wrap: anywhere; }\n.pix-box mat-icon { color: var(--elide-orange); }\n.pix-box span { display: block; color: var(--elide-muted); }\n.payment-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; }\n.payment-options button { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: .65rem; min-height: 78px; border: 1px solid var(--elide-border); border-radius: 8px !important; background: #fff !important; color: var(--elide-ink) !important; cursor: pointer; padding: .85rem; text-align: left; box-shadow: var(--elide-shadow-card); }\n.payment-options button.active { border-color: rgba(255,107,0,.55); background: #fff8ed !important; }\n.payment-options mat-icon { color: var(--elide-orange); }\n.payment-options span { display: grid; gap: .2rem; min-width: 0; }\n.payment-options small { color: var(--elide-muted); font-size: .78rem; line-height: 1.3; }\n.summary { display: grid; gap: 1rem; align-content: start; }\nh2 { margin: 0; font-weight: 900; }\n.summary div, footer { display: flex; justify-content: space-between; gap: 1rem; }\n.order-items { display: grid !important; gap: .45rem; border-bottom: 1px solid var(--elide-border); padding-bottom: .85rem; }\n.order-items div { display: flex; justify-content: space-between; gap: .75rem; }\n.discount { color: var(--elide-orange); }\nfooter { border-top: 1px solid var(--elide-border); padding-top: 1rem; font-size: 1.15rem; }\n.api-message { margin: 0; color: var(--elide-orange); font-weight: 800; }\nbutton { min-height: 44px; border-radius: 12px !important; background: var(--elide-gradient) !important; color: white !important; }\nbutton:disabled { background: rgba(30, 30, 30, .12) !important; color: rgba(30, 30, 30, .45) !important; }\n.empty-checkout { display: grid; justify-items: center; gap: .55rem; text-align: center; }\n.empty-checkout mat-icon { color: var(--elide-orange); font-size: 2.4rem; height: 2.4rem; width: 2.4rem; }\n.empty-checkout span { color: var(--elide-muted); }\n.empty-checkout a { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }\n@media (max-width: 860px) {\n  .checkout-grid,\n  .payment-options { grid-template-columns: 1fr; }\n  .sticky-summary { position: sticky; bottom: 0; z-index: 2; }\n}\n\n@media (max-width: 520px) {\n  .coupon-row { grid-template-columns: 1fr; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CheckoutPageComponent, { className: "CheckoutPageComponent", filePath: "src/app/pages/checkout/checkout.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=checkout.component.js.map