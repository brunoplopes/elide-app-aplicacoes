import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CartService } from '../../services/cart.service';
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
const _forTrack0 = ($index, $item) => $item.product.id;
const _forTrack1 = ($index, $item) => $item.id;
function CartPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 3)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 17);
    i0.ɵɵlistener("click", function CartPageComponent_Conditional_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.clear()); });
    i0.ɵɵtext(4, "Limpar carrinho");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.page.itemCount(), " item(ns) no pedido");
} }
function CartPageComponent_For_6_Conditional_13_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span")(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 28);
    i0.ɵɵlistener("click", function CartPageComponent_For_6_Conditional_13_For_4_Template_button_click_4_listener() { const addon_r5 = i0.ɵɵrestoreView(_r4).$implicit; const item_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.setAddonQuantity(item_r6.product.id, addon_r5.id, addon_r5.quantity - 1)); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "remove");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 29);
    i0.ɵɵlistener("click", function CartPageComponent_For_6_Conditional_13_For_4_Template_button_click_9_listener() { const addon_r5 = i0.ɵɵrestoreView(_r4).$implicit; const item_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.setAddonQuantity(item_r6.product.id, addon_r5.id, addon_r5.quantity + 1)); });
    i0.ɵɵelementStart(10, "mat-icon");
    i0.ɵɵtext(11, "add");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const addon_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", addon_r5.name, " +", i0.ɵɵpipeBind2(3, 3, addon_r5.price, "BRL"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(addon_r5.quantity);
} }
function CartPageComponent_For_6_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "strong");
    i0.ɵɵtext(2, "Adicionais");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, CartPageComponent_For_6_Conditional_13_For_4_Template, 12, 6, "span", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(item_r6.addons);
} }
function CartPageComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "mat-icon", 18);
    i0.ɵɵtext(2, "shopping_bag");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 19)(4, "div", 20)(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, CartPageComponent_For_6_Conditional_13_Template, 5, 0, "div", 21);
    i0.ɵɵelementStart(14, "label", 22)(15, "span");
    i0.ɵɵtext(16, "Observacao do item");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 23);
    i0.ɵɵlistener("input", function CartPageComponent_For_6_Template_input_input_17_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.setNote(item_r6.product.id, $event.target.value)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 24)(19, "button", 25);
    i0.ɵɵlistener("click", function CartPageComponent_For_6_Template_button_click_19_listener() { const item_r6 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.setQuantity(item_r6.product.id, item_r6.quantity - 1)); });
    i0.ɵɵelementStart(20, "mat-icon");
    i0.ɵɵtext(21, "remove");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 26);
    i0.ɵɵlistener("click", function CartPageComponent_For_6_Template_button_click_24_listener() { const item_r6 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.setQuantity(item_r6.product.id, item_r6.quantity + 1)); });
    i0.ɵɵelementStart(25, "mat-icon");
    i0.ɵɵtext(26, "add");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "button", 27);
    i0.ɵɵlistener("click", function CartPageComponent_For_6_Template_button_click_27_listener() { const item_r6 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.cart.remove(item_r6.product.id)); });
    i0.ɵɵelementStart(28, "mat-icon");
    i0.ɵɵtext(29, "delete");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r6.product.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 7, ctx_r1.page.cart.itemTotal(item_r6), "BRL"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", item_r6.quantity, " x ", i0.ɵɵpipeBind2(12, 10, item_r6.product.price, "BRL"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((item_r6.addons == null ? null : item_r6.addons.length) ? 13 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", item_r6.note ?? "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r6.quantity);
} }
function CartPageComponent_ForEmpty_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "mat-icon");
    i0.ɵɵtext(2, "shopping_cart");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Seu carrinho esta vazio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Escolha uma loja e adicione produtos para iniciar o pedido.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 30);
    i0.ɵɵtext(8, "Ver restaurantes");
    i0.ɵɵelementEnd()();
} }
function CartPageComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.page.message());
} }
function CartPageComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, "Checkout indisponivel");
    i0.ɵɵelementEnd();
} }
function CartPageComponent_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵtext(1, "Ir para checkout");
    i0.ɵɵelementEnd();
} }
export class CartPageComponent {
    constructor() {
        this.page = this;
        this.cart = inject(CartService);
        this.couponControl = new FormControl(this.cart.coupon() ?? '', { nonNullable: true });
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.isEmpty = computed(() => this.cart.items().length === 0, ...(ngDevMode ? [{ debugName: "isEmpty" }] : []));
        this.itemCount = computed(() => this.cart.items().reduce((total, item) => total + item.quantity, 0), ...(ngDevMode ? [{ debugName: "itemCount" }] : []));
    }
    applyCoupon() {
        const code = this.couponControl.value.trim();
        this.cart.applyCoupon(code);
        this.message.set(code ? `Cupom ${code.toUpperCase()} aplicado.` : 'Cupom removido.');
    }
    static { this.ɵfac = function CartPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CartPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CartPageComponent, selectors: [["elide-cart-page"]], decls: 44, vars: 23, consts: [[1, "cart-page"], ["eyebrow", "Pedido", "title", "Carrinho", "description", "Revise os itens antes de seguir para o checkout."], [1, "cart-card"], [1, "cart-header"], [1, "cart-list"], [1, "cart-row"], [1, "empty-cart"], [1, "cart-summary"], [1, "coupon-box", 3, "ngSubmit"], ["for", "cart-coupon"], ["id", "cart-coupon", "placeholder", "ELIDE10", 3, "formControl"], ["mat-button", "", "type", "submit"], [1, "summary-lines"], [1, "discount"], [1, "total"], ["mat-flat-button", "", "type", "button", "disabled", ""], ["mat-flat-button", "", "routerLink", "/checkout"], ["mat-button", "", "type", "button", 3, "click"], [1, "item-icon"], [1, "item-info"], [1, "item-title"], [1, "cart-addons"], [1, "cart-note"], ["placeholder", "Ex.: sem cebola", 3, "input", "value"], ["aria-label", "Quantidade", 1, "qty-actions"], ["mat-icon-button", "", "type", "button", "aria-label", "Diminuir", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Aumentar", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Remover", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Diminuir adicional", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Aumentar adicional", 3, "click"], ["mat-flat-button", "", "routerLink", "/restaurantes"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵelementStart(2, "article", 2);
            i0.ɵɵconditionalCreate(3, CartPageComponent_Conditional_3_Template, 5, 1, "header", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵrepeaterCreate(5, CartPageComponent_For_6_Template, 30, 13, "div", 5, _forTrack0, false, CartPageComponent_ForEmpty_7_Template, 9, 0, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "footer", 7)(9, "form", 8);
            i0.ɵɵlistener("ngSubmit", function CartPageComponent_Template_form_ngSubmit_9_listener() { return ctx.page.applyCoupon(); });
            i0.ɵɵelementStart(10, "label", 9);
            i0.ɵɵtext(11, "Cupom");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div");
            i0.ɵɵelement(13, "input", 10);
            i0.ɵɵelementStart(14, "button", 11);
            i0.ɵɵtext(15, "Aplicar");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(16, CartPageComponent_Conditional_16_Template, 2, 1, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 12)(18, "div")(19, "span");
            i0.ɵɵtext(20, "Subtotal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "strong");
            i0.ɵɵtext(22);
            i0.ɵɵpipe(23, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div")(25, "span");
            i0.ɵɵtext(26, "Frete");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "strong");
            i0.ɵɵtext(28);
            i0.ɵɵpipe(29, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 13)(31, "span");
            i0.ɵɵtext(32, "Cupom");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "strong");
            i0.ɵɵtext(34);
            i0.ɵɵpipe(35, "currency");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 14)(37, "span");
            i0.ɵɵtext(38, "Total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "strong");
            i0.ɵɵtext(40);
            i0.ɵɵpipe(41, "currency");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(42, CartPageComponent_Conditional_42_Template, 2, 0, "button", 15)(43, CartPageComponent_Conditional_43_Template, 2, 0, "a", 16);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.page.isEmpty() ? 3 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.cart.items());
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("sticky-summary", !ctx.page.isEmpty());
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formControl", ctx.page.couponControl);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.page.message() ? 16 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(23, 11, ctx.page.cart.subtotal(), "BRL"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(29, 14, ctx.page.cart.deliveryFee(), "BRL"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("- ", i0.ɵɵpipeBind2(35, 17, ctx.page.cart.discount(), "BRL"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(41, 20, ctx.page.cart.total(), "BRL"));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.isEmpty() ? 42 : 43);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormControlDirective, i3.MatButtonModule, i3.MatButton, i3.MatIconButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, i1.CurrencyPipe], styles: ["[_nghost-%COMP%] { display: block; }\n.cart-page[_ngcontent-%COMP%] { width: min(980px, calc(100% - 2rem)); margin: 0 auto; padding: 2.5rem 0 4rem; }\n.cart-card[_ngcontent-%COMP%] { border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); overflow: hidden; }\n.cart-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-bottom: 1px solid var(--elide-border); padding: .9rem 1rem; }\n.cart-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { color: var(--elide-orange) !important; font-weight: 900; }\n.cart-list[_ngcontent-%COMP%] { display: grid; }\n.cart-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: auto minmax(0, 1fr) auto auto; align-items: start; gap: 1rem; min-width: 0; padding: 1rem; border-bottom: 1px solid var(--elide-border); overflow-wrap: anywhere; }\n.cart-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.empty-cart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n.item-icon[_ngcontent-%COMP%] { margin-top: .2rem; }\n.cart-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cart-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .cart-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: block; color: var(--elide-muted); }\n.item-info[_ngcontent-%COMP%] { display: grid; gap: .35rem; min-width: 0; }\n.item-title[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }\n.item-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--elide-ink); font-weight: 900; }\n.qty-actions[_ngcontent-%COMP%] { display: inline-grid !important; grid-template-columns: auto auto auto; align-items: center; gap: .15rem !important; border: 1px solid var(--elide-border); border-radius: 999px; padding: .1rem; }\n.qty-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.cart-addons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { width: 30px; height: 30px; }\n.cart-addons[_ngcontent-%COMP%] { display: grid; gap: .35rem; margin-top: .35rem; border-radius: 8px; background: rgba(255, 107, 0, .06); padding: .65rem; }\n.cart-addons[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] { font-size: .8rem; text-transform: uppercase; color: var(--elide-orange); }\n.cart-addons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: flex; align-items: center; flex-wrap: wrap; gap: .25rem; }\n.cart-addons[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { flex: 1 1 160px; }\n.cart-note[_ngcontent-%COMP%] { display: grid; gap: .25rem; margin-top: .45rem; color: var(--elide-muted); font-size: .85rem; font-weight: 800; }\n.cart-note[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.coupon-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; border: 1px solid var(--elide-border); border-radius: 8px; background: #fff; padding: .65rem .75rem; outline: 0; }\n.cart-note[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.coupon-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus { border-color: var(--elide-orange); box-shadow: 0 0 0 1px rgba(255, 107, 0, .18); }\n.empty-cart[_ngcontent-%COMP%] { display: grid; justify-items: center; gap: .55rem; padding: 2rem 1rem; text-align: center; }\n.empty-cart[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 2.4rem; height: 2.4rem; width: 2.4rem; }\n.empty-cart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--elide-muted); }\n.empty-cart[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }\n.cart-summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(220px, 1fr) minmax(240px, 320px) auto; align-items: end; gap: 1rem; min-width: 0; padding: 1rem; overflow-wrap: anywhere; }\n.coupon-box[_ngcontent-%COMP%] { display: grid; gap: .45rem; }\n.coupon-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { color: var(--elide-ink); font-weight: 900; }\n.coupon-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .45rem; }\n.coupon-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { color: var(--elide-orange) !important; font-weight: 900; }\n.summary-lines[_ngcontent-%COMP%] { display: grid; gap: .35rem; }\n.summary-lines[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: flex; justify-content: space-between; gap: 1rem; }\n.summary-lines[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--elide-orange); }\n.summary-lines[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] { border-top: 1px solid var(--elide-border); margin-top: .25rem; padding-top: .55rem; font-size: 1.1rem; }\n.cart-summary[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.cart-summary[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] { min-height: 44px; border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; white-space: nowrap; }\n.cart-summary[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:disabled { background: rgba(30, 30, 30, .12) !important; color: rgba(30, 30, 30, .45) !important; }\n\n@media (max-width: 760px) {\n  .cart-summary[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 560px) {\n  .cart-page[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 860px);\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  .cart-header[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; }\n\n  .cart-row[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n  }\n\n  .cart-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .qty-actions[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-self: start;\n  }\n\n  .item-title[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: .15rem;\n  }\n\n  .sticky-summary[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 0;\n    z-index: 2;\n    border-top: 1px solid var(--elide-border);\n    background: var(--elide-card);\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CartPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-cart-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"cart-page\">\n  <elide-client-heading eyebrow=\"Pedido\" title=\"Carrinho\" description=\"Revise os itens antes de seguir para o checkout.\" />\n  <article class=\"cart-card\">\n    @if (!page.isEmpty()) {\n      <header class=\"cart-header\">\n        <strong>{{ page.itemCount() }} item(ns) no pedido</strong>\n        <button mat-button type=\"button\" (click)=\"page.cart.clear()\">Limpar carrinho</button>\n      </header>\n    }\n\n    <div class=\"cart-list\">\n      @for (item of page.cart.items(); track item.product.id) {\n        <div class=\"cart-row\">\n          <mat-icon class=\"item-icon\">shopping_bag</mat-icon>\n          <div class=\"item-info\">\n            <div class=\"item-title\">\n              <strong>{{ item.product.name }}</strong>\n              <span>{{ page.cart.itemTotal(item) | currency:'BRL' }}</span>\n            </div>\n            <span>{{ item.quantity }} x {{ item.product.price | currency:'BRL' }}</span>\n            @if (item.addons?.length) {\n              <div class=\"cart-addons\">\n                <strong>Adicionais</strong>\n                @for (addon of item.addons; track addon.id) {\n                  <span>\n                    <small>{{ addon.name }} +{{ addon.price | currency:'BRL' }}</small>\n                    <button mat-icon-button type=\"button\" (click)=\"page.cart.setAddonQuantity(item.product.id, addon.id, addon.quantity - 1)\" aria-label=\"Diminuir adicional\"><mat-icon>remove</mat-icon></button>\n                    <b>{{ addon.quantity }}</b>\n                    <button mat-icon-button type=\"button\" (click)=\"page.cart.setAddonQuantity(item.product.id, addon.id, addon.quantity + 1)\" aria-label=\"Aumentar adicional\"><mat-icon>add</mat-icon></button>\n                  </span>\n                }\n              </div>\n            }\n            <label class=\"cart-note\">\n              <span>Observacao do item</span>\n              <input [value]=\"item.note ?? ''\" placeholder=\"Ex.: sem cebola\" (input)=\"page.cart.setNote(item.product.id, $any($event.target).value)\">\n            </label>\n          </div>\n          <div class=\"qty-actions\" aria-label=\"Quantidade\">\n            <button mat-icon-button type=\"button\" (click)=\"page.cart.setQuantity(item.product.id, item.quantity - 1)\" aria-label=\"Diminuir\"><mat-icon>remove</mat-icon></button>\n            <strong>{{ item.quantity }}</strong>\n            <button mat-icon-button type=\"button\" (click)=\"page.cart.setQuantity(item.product.id, item.quantity + 1)\" aria-label=\"Aumentar\"><mat-icon>add</mat-icon></button>\n          </div>\n          <button mat-icon-button type=\"button\" (click)=\"page.cart.remove(item.product.id)\" aria-label=\"Remover\"><mat-icon>delete</mat-icon></button>\n        </div>\n      } @empty {\n        <div class=\"empty-cart\">\n          <mat-icon>shopping_cart</mat-icon>\n          <strong>Seu carrinho esta vazio</strong>\n          <span>Escolha uma loja e adicione produtos para iniciar o pedido.</span>\n          <a mat-flat-button routerLink=\"/restaurantes\">Ver restaurantes</a>\n        </div>\n      }\n    </div>\n\n    <footer class=\"cart-summary\" [class.sticky-summary]=\"!page.isEmpty()\">\n      <form class=\"coupon-box\" (ngSubmit)=\"page.applyCoupon()\">\n        <label for=\"cart-coupon\">Cupom</label>\n        <div>\n          <input id=\"cart-coupon\" [formControl]=\"page.couponControl\" placeholder=\"ELIDE10\">\n          <button mat-button type=\"submit\">Aplicar</button>\n        </div>\n        @if (page.message()) { <span>{{ page.message() }}</span> }\n      </form>\n      <div class=\"summary-lines\">\n        <div><span>Subtotal</span><strong>{{ page.cart.subtotal() | currency:'BRL' }}</strong></div>\n        <div><span>Frete</span><strong>{{ page.cart.deliveryFee() | currency:'BRL' }}</strong></div>\n        <div class=\"discount\"><span>Cupom</span><strong>- {{ page.cart.discount() | currency:'BRL' }}</strong></div>\n        <div class=\"total\"><span>Total</span><strong>{{ page.cart.total() | currency:'BRL' }}</strong></div>\n      </div>\n      @if (page.isEmpty()) {\n        <button mat-flat-button type=\"button\" disabled>Checkout indisponivel</button>\n      } @else {\n        <a mat-flat-button routerLink=\"/checkout\">Ir para checkout</a>\n      }\n    </footer>\n  </article>\n</section>\n", styles: [":host { display: block; }\n.cart-page { width: min(980px, calc(100% - 2rem)); margin: 0 auto; padding: 2.5rem 0 4rem; }\n.cart-card { border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); overflow: hidden; }\n.cart-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; border-bottom: 1px solid var(--elide-border); padding: .9rem 1rem; }\n.cart-header button { color: var(--elide-orange) !important; font-weight: 900; }\n.cart-list { display: grid; }\n.cart-row { display: grid; grid-template-columns: auto minmax(0, 1fr) auto auto; align-items: start; gap: 1rem; min-width: 0; padding: 1rem; border-bottom: 1px solid var(--elide-border); overflow-wrap: anywhere; }\n.cart-row mat-icon,\n.empty-cart mat-icon { color: var(--elide-orange); }\n.item-icon { margin-top: .2rem; }\n.cart-row span, .cart-row small, .cart-summary span { display: block; color: var(--elide-muted); }\n.item-info { display: grid; gap: .35rem; min-width: 0; }\n.item-title { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; }\n.item-title span { color: var(--elide-ink); font-weight: 900; }\n.qty-actions { display: inline-grid !important; grid-template-columns: auto auto auto; align-items: center; gap: .15rem !important; border: 1px solid var(--elide-border); border-radius: 999px; padding: .1rem; }\n.qty-actions button,\n.cart-addons button { width: 30px; height: 30px; }\n.cart-addons { display: grid; gap: .35rem; margin-top: .35rem; border-radius: 8px; background: rgba(255, 107, 0, .06); padding: .65rem; }\n.cart-addons > strong { font-size: .8rem; text-transform: uppercase; color: var(--elide-orange); }\n.cart-addons span { display: flex; align-items: center; flex-wrap: wrap; gap: .25rem; }\n.cart-addons small { flex: 1 1 160px; }\n.cart-note { display: grid; gap: .25rem; margin-top: .45rem; color: var(--elide-muted); font-size: .85rem; font-weight: 800; }\n.cart-note input,\n.coupon-box input { width: 100%; border: 1px solid var(--elide-border); border-radius: 8px; background: #fff; padding: .65rem .75rem; outline: 0; }\n.cart-note input:focus,\n.coupon-box input:focus { border-color: var(--elide-orange); box-shadow: 0 0 0 1px rgba(255, 107, 0, .18); }\n.empty-cart { display: grid; justify-items: center; gap: .55rem; padding: 2rem 1rem; text-align: center; }\n.empty-cart mat-icon { font-size: 2.4rem; height: 2.4rem; width: 2.4rem; }\n.empty-cart span { color: var(--elide-muted); }\n.empty-cart a { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }\n.cart-summary { display: grid; grid-template-columns: minmax(220px, 1fr) minmax(240px, 320px) auto; align-items: end; gap: 1rem; min-width: 0; padding: 1rem; overflow-wrap: anywhere; }\n.coupon-box { display: grid; gap: .45rem; }\n.coupon-box label { color: var(--elide-ink); font-weight: 900; }\n.coupon-box > div { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: .45rem; }\n.coupon-box button { color: var(--elide-orange) !important; font-weight: 900; }\n.summary-lines { display: grid; gap: .35rem; }\n.summary-lines div { display: flex; justify-content: space-between; gap: 1rem; }\n.summary-lines .discount strong { color: var(--elide-orange); }\n.summary-lines .total { border-top: 1px solid var(--elide-border); margin-top: .25rem; padding-top: .55rem; font-size: 1.1rem; }\n.cart-summary a,\n.cart-summary > button { min-height: 44px; border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; white-space: nowrap; }\n.cart-summary > button:disabled { background: rgba(30, 30, 30, .12) !important; color: rgba(30, 30, 30, .45) !important; }\n\n@media (max-width: 760px) {\n  .cart-summary { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 560px) {\n  .cart-page {\n    width: min(100% - 1rem, 860px);\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  .cart-header { align-items: flex-start; flex-direction: column; }\n\n  .cart-row {\n    grid-template-columns: auto 1fr;\n  }\n\n  .cart-row button,\n  .qty-actions {\n    grid-column: 2;\n    justify-self: start;\n  }\n\n  .item-title {\n    flex-direction: column;\n    gap: .15rem;\n  }\n\n  .sticky-summary {\n    position: sticky;\n    bottom: 0;\n    z-index: 2;\n    border-top: 1px solid var(--elide-border);\n    background: var(--elide-card);\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CartPageComponent, { className: "CartPageComponent", filePath: "src/app/pages/cart/cart.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=cart.component.js.map