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
function AdminFinancialPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminFinancialPageComponent_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r2.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", entry_r2.storeName || entry_r2.courierName || "Sistema", " - ", ctx_r0.page.money(entry_r2.amount));
} }
function AdminFinancialPageComponent_ForEmpty_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "strong");
    i0.ɵɵtext(2, "Sem lancamentos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum item financeiro retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminFinancialPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminFinancialPageComponent_BaseFactory; return function AdminFinancialPageComponent_Factory(__ngFactoryType__) { return (ɵAdminFinancialPageComponent_BaseFactory || (ɵAdminFinancialPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminFinancialPageComponent)))(__ngFactoryType__ || AdminFinancialPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminFinancialPageComponent, selectors: [["elide-admin-financial-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 25, vars: 5, consts: [[1, "admin-page"], ["eyebrow", "Financeiro", "title", "Gestao financeira", "description", "Resumo de receita, repasses e saldo da plataforma."], [1, "api-message"], [1, "finance-grid"], [1, "finance-card"], [1, "panel"], [1, "row-line"]], template: function AdminFinancialPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminFinancialPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "article", 4)(5, "span");
            i0.ɵɵtext(6, "Receita");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "article", 4)(10, "span");
            i0.ɵɵtext(11, "Repasse entregadores");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "strong");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "article", 4)(15, "span");
            i0.ɵɵtext(16, "Saldo plataforma");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "strong");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "section", 5)(20, "h2");
            i0.ɵɵtext(21, "Extrato");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(22, AdminFinancialPageComponent_For_23_Template, 5, 3, "div", 6, _forTrack0, false, AdminFinancialPageComponent_ForEmpty_24_Template, 5, 0, "div", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.financial().revenue));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.financial().courierPayout));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.financial().platformBalance));
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.page.financialEntries());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminFinancialPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-financial-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Financeiro\" title=\"Gestao financeira\" description=\"Resumo de receita, repasses e saldo da plataforma.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"finance-grid\">\n    <article class=\"finance-card\"><span>Receita</span><strong>{{ page.money(page.financial().revenue) }}</strong></article>\n    <article class=\"finance-card\"><span>Repasse entregadores</span><strong>{{ page.money(page.financial().courierPayout) }}</strong></article>\n    <article class=\"finance-card\"><span>Saldo plataforma</span><strong>{{ page.money(page.financial().platformBalance) }}</strong></article>\n  </section>\n\n  <section class=\"panel\">\n    <h2>Extrato</h2>\n    @for (entry of page.financialEntries(); track entry.id) {\n      <div class=\"row-line\"><strong>{{ entry.type }}</strong><span>{{ entry.storeName || entry.courierName || 'Sistema' }} - {{ page.money(entry.amount) }}</span></div>\n    } @empty {\n      <div class=\"row-line\"><strong>Sem lancamentos</strong><span>Nenhum item financeiro retornado.</span></div>\n    }\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminFinancialPageComponent, { className: "AdminFinancialPageComponent", filePath: "src/app/pages/admin-financial/admin-financial.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-financial.component.js.map