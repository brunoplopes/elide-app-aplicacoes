import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
import { ClientHeadingComponent } from '../shared/client-heading.component';
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
function AdminOrdersPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminOrdersPageComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "mat-chip");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r0.page.shortId(order_r2.id), " - ", order_r2.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4("", order_r2.storeName, " - ", order_r2.customerName, " - ", order_r2.courierName || "Sem entregador", " - ", order_r2.paymentMethod);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(order_r2.total));
} }
function AdminOrdersPageComponent_ForEmpty_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "strong");
    i0.ɵɵtext(2, "Sem pedidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum pedido retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminOrdersPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminOrdersPageComponent_BaseFactory; return function AdminOrdersPageComponent_Factory(__ngFactoryType__) { return (ɵAdminOrdersPageComponent_BaseFactory || (ɵAdminOrdersPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminOrdersPageComponent)))(__ngFactoryType__ || AdminOrdersPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminOrdersPageComponent, selectors: [["elide-admin-orders-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 13, vars: 2, consts: [[1, "admin-page"], ["eyebrow", "Operacao", "title", "Visualizacao de todos os pedidos", "description", "Acompanhe pedidos de clientes, lojas, entregadores e pagamentos."], [1, "api-message"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "record-list"], [1, "record-row"], [1, "row-line"]], template: function AdminOrdersPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminOrdersPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "h2");
            i0.ɵɵtext(6, "Pedidos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function AdminOrdersPageComponent_Template_button_click_7_listener() { return ctx.page.load(); });
            i0.ɵɵtext(8, "Atualizar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵrepeaterCreate(10, AdminOrdersPageComponent_For_11_Template, 9, 7, "div", 7, _forTrack0, false, AdminOrdersPageComponent_ForEmpty_12_Template, 5, 0, "div", 8);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.page.orders());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i5.MatChip, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminOrdersPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-orders-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Operacao\" title=\"Visualizacao de todos os pedidos\" description=\"Acompanhe pedidos de clientes, lojas, entregadores e pagamentos.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <div class=\"panel-heading\"><h2>Pedidos</h2><button mat-button type=\"button\" (click)=\"page.load()\">Atualizar</button></div>\n    <div class=\"record-list\">\n      @for (order of page.orders(); track order.id) {\n        <div class=\"record-row\">\n          <span><strong>{{ page.shortId(order.id) }} - {{ order.status }}</strong><small>{{ order.storeName }} - {{ order.customerName }} - {{ order.courierName || 'Sem entregador' }} - {{ order.paymentMethod }}</small></span>\n          <div><mat-chip>{{ page.money(order.total) }}</mat-chip></div>\n        </div>\n      } @empty {\n        <div class=\"row-line\"><strong>Sem pedidos</strong><span>Nenhum pedido retornado.</span></div>\n      }\n    </div>\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminOrdersPageComponent, { className: "AdminOrdersPageComponent", filePath: "src/app/pages/admin-orders/admin-orders.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-orders.component.js.map