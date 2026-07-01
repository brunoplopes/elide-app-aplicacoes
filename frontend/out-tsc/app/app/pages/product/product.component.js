import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
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
const _forTrack0 = ($index, $item) => $item.id;
function ProductPageComponent_For_4_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function ProductPageComponent_For_4_Conditional_5_For_2_Template_button_click_0_listener() { const addon_r3 = i0.ɵɵrestoreView(_r2).$implicit; const product_r4 = i0.ɵɵnextContext(2).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.page.addAddon(product_r4, addon_r3)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const addon_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(addon_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 2, addon_r3.price, "BRL"));
} }
function ProductPageComponent_For_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, ProductPageComponent_For_4_Conditional_5_For_2_Template, 6, 5, "button", 10, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(product_r4.addons);
} }
function ProductPageComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 4)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, ProductPageComponent_For_4_Conditional_5_Template, 3, 0, "div", 5);
    i0.ɵɵelementStart(6, "label", 6)(7, "span");
    i0.ɵɵtext(8, "Observacao do item");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "textarea", 7, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 8)(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 9);
    i0.ɵɵlistener("click", function ProductPageComponent_For_4_Template_button_click_15_listener() { const product_r4 = i0.ɵɵrestoreView(_r1).$implicit; const note_r6 = i0.ɵɵreference(10); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.page.add(product_r4, note_r6.value)); });
    i0.ɵɵtext(16, "Adicionar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional((product_r4.addons == null ? null : product_r4.addons.length) ? 5 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 4, product_r4.price, "BRL"));
} }
function ProductPageComponent_ForEmpty_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 4);
    i0.ɵɵtext(1, "Selecione uma loja para ver produtos.");
    i0.ɵɵelementEnd();
} }
const emptyProducts = { content: [], totalElements: 0, totalPages: 0, number: 0 };
export class ProductPageComponent {
    constructor() {
        this.page = this;
        this.route = inject(ActivatedRoute);
        this.api = inject(ApiService);
        this.cart = inject(CartService);
        this.products = toSignal(this.route.paramMap.pipe(switchMap((params) => this.api.products(params.get('id') ?? '')), catchError(() => of(emptyProducts))), { initialValue: emptyProducts });
    }
    add(product, note) {
        this.cart.add({ ...product, storeId: this.route.snapshot.paramMap.get('id') ?? undefined }, note);
    }
    addAddon(product, addon) {
        const productWithStore = { ...product, storeId: this.route.snapshot.paramMap.get('id') ?? undefined };
        if (!this.cart.items().some((item) => item.product.id === product.id)) {
            this.cart.add(productWithStore);
        }
        this.cart.addAddon(product.id, {
            id: addon.id,
            name: addon.name,
            price: addon.price,
            quantity: 1,
            maxQuantity: addon.maxQuantity
        });
    }
    static { this.ɵfac = function ProductPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProductPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProductPageComponent, selectors: [["elide-product-page"]], decls: 6, vars: 1, consts: [["note", ""], [1, "elide-section"], ["eyebrow", "Cardapio", "title", "Produtos", "description", "Escolha seus itens e adicione ao carrinho."], [1, "product-grid"], [1, "product-card"], [1, "addon-list"], [1, "note-field"], ["rows", "2", "placeholder", "Ex.: sem cebola, ponto da carne, trocar molho"], [1, "product-actions"], ["mat-flat-button", "", "type", "button", 3, "click"], ["type", "button", 1, "addon-chip"], ["type", "button", 1, "addon-chip", 3, "click"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 1);
            i0.ɵɵelement(1, "elide-client-heading", 2);
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵrepeaterCreate(3, ProductPageComponent_For_4_Template, 17, 7, "article", 4, _forTrack0, false, ProductPageComponent_ForEmpty_5_Template, 2, 0, "article", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.page.products().content);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, i1.CurrencyPipe], styles: ["[_nghost-%COMP%] { display: block; }\n.product-grid[_ngcontent-%COMP%] { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }\n.product-card[_ngcontent-%COMP%] { display: grid; gap: .9rem; min-width: 0; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1rem; box-shadow: var(--elide-shadow-card); overflow-wrap: anywhere; }\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] { margin: 0; }\np[_ngcontent-%COMP%] { min-height: 3rem; color: var(--elide-muted); }\n.product-actions[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }\nbutton[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }\n.addon-list[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .5rem; }\n.addon-chip[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .35rem; border: 0; padding: .45rem .7rem; cursor: pointer; font-weight: 850; }\n.addon-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { opacity: .86; }\n.note-field[_ngcontent-%COMP%] { display: grid; gap: .35rem; color: var(--elide-muted); font-size: .85rem; font-weight: 800; }\n.note-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] { width: 100%; resize: vertical; border: 1px solid var(--elide-border); border-radius: 8px; background: #fff; color: var(--elide-ink); padding: .65rem; outline: 0; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProductPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-product-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading eyebrow=\"Cardapio\" title=\"Produtos\" description=\"Escolha seus itens e adicione ao carrinho.\" />\n  <div class=\"product-grid\">\n    @for (product of page.products().content; track product.id) {\n      <article class=\"product-card\">\n        <h2>{{ product.name }}</h2>\n        <p>{{ product.description }}</p>\n        @if (product.addons?.length) {\n          <div class=\"addon-list\">\n            @for (addon of product.addons; track addon.id) {\n              <button class=\"addon-chip\" type=\"button\" (click)=\"page.addAddon(product, addon)\">\n                <span>{{ addon.name }}</span>\n                <small>{{ addon.price | currency:'BRL' }}</small>\n              </button>\n            }\n          </div>\n        }\n        <label class=\"note-field\">\n          <span>Observacao do item</span>\n          <textarea #note rows=\"2\" placeholder=\"Ex.: sem cebola, ponto da carne, trocar molho\"></textarea>\n        </label>\n        <div class=\"product-actions\"><strong>{{ product.price | currency:'BRL' }}</strong><button mat-flat-button type=\"button\" (click)=\"page.add(product, note.value)\">Adicionar</button></div>\n      </article>\n    } @empty {\n      <article class=\"product-card\">Selecione uma loja para ver produtos.</article>\n    }\n  </div>\n</section>\n", styles: [":host { display: block; }\n.product-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }\n.product-card { display: grid; gap: .9rem; min-width: 0; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1rem; box-shadow: var(--elide-shadow-card); overflow-wrap: anywhere; }\nh2, p { margin: 0; }\np { min-height: 3rem; color: var(--elide-muted); }\n.product-actions { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }\nbutton { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }\n.addon-list { display: flex; flex-wrap: wrap; gap: .5rem; }\n.addon-chip { display: inline-flex; align-items: center; gap: .35rem; border: 0; padding: .45rem .7rem; cursor: pointer; font-weight: 850; }\n.addon-chip small { opacity: .86; }\n.note-field { display: grid; gap: .35rem; color: var(--elide-muted); font-size: .85rem; font-weight: 800; }\n.note-field textarea { width: 100%; resize: vertical; border: 1px solid var(--elide-border); border-radius: 8px; background: #fff; color: var(--elide-ink); padding: .65rem; outline: 0; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProductPageComponent, { className: "ProductPageComponent", filePath: "src/app/pages/product/product.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=product.component.js.map