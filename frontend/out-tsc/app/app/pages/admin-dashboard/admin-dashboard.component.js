import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdminPanelPageComponent } from '../admin-panel/admin-panel.component';
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
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
function AdminDashboardPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminDashboardPageComponent_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 4);
} if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r2.label)("value", metric_r2.value)("icon", metric_r2.icon);
} }
function AdminDashboardPageComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r3.label, ": ", item_r3.value);
} }
function AdminDashboardPageComponent_ForEmpty_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip");
    i0.ɵɵtext(1, "Nenhum status retornado");
    i0.ɵɵelementEnd();
} }
function AdminDashboardPageComponent_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 11)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.shortId(order_r4.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", order_r4.storeName, " - ", order_r4.customerName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", order_r4.status, " - ", ctx_r0.page.money(order_r4.total));
} }
function AdminDashboardPageComponent_ForEmpty_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 11)(1, "strong");
    i0.ɵɵtext(2, "Nenhum pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "A API ainda nao retornou pedidos.");
    i0.ɵɵelementEnd()();
} }
export class AdminDashboardPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminDashboardPageComponent_BaseFactory; return function AdminDashboardPageComponent_Factory(__ngFactoryType__) { return (ɵAdminDashboardPageComponent_BaseFactory || (ɵAdminDashboardPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminDashboardPageComponent)))(__ngFactoryType__ || AdminDashboardPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDashboardPageComponent, selectors: [["elide-admin-dashboard-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 24, vars: 3, consts: [[1, "admin-page"], ["eyebrow", "Administracao", "title", "Dashboard", "description", "Visao executiva da operacao ELIDE em tempo real."], [1, "api-message"], [1, "metric-grid"], [3, "label", "value", "icon"], [1, "tab-panel"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "chip-row"], [1, "list-grid"], [1, "item-card"]], template: function AdminDashboardPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminDashboardPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵrepeaterCreate(4, AdminDashboardPageComponent_For_5_Template, 1, 3, "elide-metric-card", 4, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5)(7, "section", 6)(8, "div", 7)(9, "h2");
            i0.ɵɵtext(10, "Status dos pedidos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 8);
            i0.ɵɵlistener("click", function AdminDashboardPageComponent_Template_button_click_11_listener() { return ctx.page.load(); });
            i0.ɵɵtext(12, "Atualizar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 9);
            i0.ɵɵrepeaterCreate(14, AdminDashboardPageComponent_For_15_Template, 2, 2, "mat-chip", null, _forTrack0, false, AdminDashboardPageComponent_ForEmpty_16_Template, 2, 0, "mat-chip");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "section", 6)(18, "h2");
            i0.ɵɵtext(19, "Pedidos recentes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "div", 10);
            i0.ɵɵrepeaterCreate(21, AdminDashboardPageComponent_For_22_Template, 7, 5, "article", 11, _forTrack1, false, AdminDashboardPageComponent_ForEmpty_23_Template, 5, 0, "article", 11);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.metrics());
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.page.dashboard().ordersByStatus);
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.page.orders().slice(0, 12));
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i5.MatChip, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, MetricCardComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboardPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-dashboard-page', imports: [...MATERIAL, ClientHeadingComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Administracao\" title=\"Dashboard\" description=\"Visao executiva da operacao ELIDE em tempo real.\" />\n\n  @if (page.message()) {\n    <p class=\"api-message\">{{ page.message() }}</p>\n  }\n\n  <div class=\"metric-grid\">\n    @for (metric of page.metrics(); track metric.label) {\n      <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n    }\n  </div>\n\n  <div class=\"tab-panel\">\n    <section class=\"panel\">\n      <div class=\"panel-heading\">\n        <h2>Status dos pedidos</h2>\n        <button mat-button type=\"button\" (click)=\"page.load()\">Atualizar</button>\n      </div>\n      <div class=\"chip-row\">\n        @for (item of page.dashboard().ordersByStatus; track item.label) {\n          <mat-chip>{{ item.label }}: {{ item.value }}</mat-chip>\n        } @empty {\n          <mat-chip>Nenhum status retornado</mat-chip>\n        }\n      </div>\n    </section>\n\n    <section class=\"panel\">\n      <h2>Pedidos recentes</h2>\n      <div class=\"list-grid\">\n        @for (order of page.orders().slice(0, 12); track order.id) {\n          <article class=\"item-card\">\n            <strong>{{ page.shortId(order.id) }}</strong>\n            <span>{{ order.storeName }} - {{ order.customerName }}</span>\n            <small>{{ order.status }} - {{ page.money(order.total) }}</small>\n          </article>\n        } @empty {\n          <article class=\"item-card\"><strong>Nenhum pedido</strong><span>A API ainda nao retornou pedidos.</span></article>\n        }\n      </div>\n    </section>\n  </div>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDashboardPageComponent, { className: "AdminDashboardPageComponent", filePath: "src/app/pages/admin-dashboard/admin-dashboard.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=admin-dashboard.component.js.map