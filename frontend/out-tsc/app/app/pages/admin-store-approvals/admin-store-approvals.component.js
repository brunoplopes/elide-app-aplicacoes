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
function AdminStoreApprovalsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminStoreApprovalsPageComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 6);
    i0.ɵɵlistener("click", function AdminStoreApprovalsPageComponent_For_7_Template_button_click_7_listener() { const store_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveStore(store_r3.id)); });
    i0.ɵɵtext(8, "Aprovar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 7);
    i0.ɵɵlistener("click", function AdminStoreApprovalsPageComponent_For_7_Template_button_click_9_listener() { const store_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.rejectStore(store_r3.id)); });
    i0.ɵɵtext(10, "Reprovar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const store_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(store_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", store_r3.document, " - ", store_r3.segment, " - ", store_r3.status);
} }
function AdminStoreApprovalsPageComponent_ForEmpty_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "strong");
    i0.ɵɵtext(2, "Sem pendencias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhuma loja aguardando validacao.");
    i0.ɵɵelementEnd()();
} }
export class AdminStoreApprovalsPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminStoreApprovalsPageComponent_BaseFactory; return function AdminStoreApprovalsPageComponent_Factory(__ngFactoryType__) { return (ɵAdminStoreApprovalsPageComponent_BaseFactory || (ɵAdminStoreApprovalsPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminStoreApprovalsPageComponent)))(__ngFactoryType__ || AdminStoreApprovalsPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminStoreApprovalsPageComponent, selectors: [["elide-admin-store-approvals-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 2, consts: [[1, "admin-page"], ["eyebrow", "Aprovacoes", "title", "Cadastro e aprovacao de estabelecimentos", "description", "Valide documentacao, aprove ou reprove lojas pendentes."], [1, "api-message"], [1, "panel"], [1, "approval-row"], [1, "row-line"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-button", "", "type", "button", 3, "click"]], template: function AdminStoreApprovalsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminStoreApprovalsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "h2");
            i0.ɵɵtext(5, "Estabelecimentos pendentes");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(6, AdminStoreApprovalsPageComponent_For_7_Template, 11, 4, "div", 4, _forTrack0, false, AdminStoreApprovalsPageComponent_ForEmpty_8_Template, 5, 0, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.page.pendingStores());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminStoreApprovalsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-store-approvals-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Aprovacoes\" title=\"Cadastro e aprovacao de estabelecimentos\" description=\"Valide documentacao, aprove ou reprove lojas pendentes.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <h2>Estabelecimentos pendentes</h2>\n    @for (store of page.pendingStores(); track store.id) {\n      <div class=\"approval-row\">\n        <div><strong>{{ store.name }}</strong><span>{{ store.document }} - {{ store.segment }} - {{ store.status }}</span></div>\n        <div><button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.approveStore(store.id)\">Aprovar</button><button mat-button type=\"button\" (click)=\"page.rejectStore(store.id)\">Reprovar</button></div>\n      </div>\n    } @empty {\n      <div class=\"row-line\"><strong>Sem pendencias</strong><span>Nenhuma loja aguardando validacao.</span></div>\n    }\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminStoreApprovalsPageComponent, { className: "AdminStoreApprovalsPageComponent", filePath: "src/app/pages/admin-store-approvals/admin-store-approvals.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-store-approvals.component.js.map