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
function AdminAdminApprovalsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminAdminApprovalsPageComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 6);
    i0.ɵɵlistener("click", function AdminAdminApprovalsPageComponent_For_7_Template_button_click_7_listener() { const admin_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveAdmin(admin_r3.id, true)); });
    i0.ɵɵtext(8, "Aprovar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 7);
    i0.ɵɵlistener("click", function AdminAdminApprovalsPageComponent_For_7_Template_button_click_9_listener() { const admin_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveAdmin(admin_r3.id, false)); });
    i0.ɵɵtext(10, "Desativar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const admin_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(admin_r3.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", admin_r3.username, " - ", admin_r3.roles.join(", "), " - ", admin_r3.enabled ? "Ativo" : "Inativo");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r0.page.isMaster());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r0.page.isMaster());
} }
function AdminAdminApprovalsPageComponent_ForEmpty_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "strong");
    i0.ɵɵtext(2, "Sem administradores");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum ADMIN retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminAdminApprovalsPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminAdminApprovalsPageComponent_BaseFactory; return function AdminAdminApprovalsPageComponent_Factory(__ngFactoryType__) { return (ɵAdminAdminApprovalsPageComponent_BaseFactory || (ɵAdminAdminApprovalsPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminAdminApprovalsPageComponent)))(__ngFactoryType__ || AdminAdminApprovalsPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminAdminApprovalsPageComponent, selectors: [["elide-admin-admin-approvals-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 9, vars: 2, consts: [[1, "admin-page"], ["eyebrow", "RBAC", "title", "Aprovacao de novos ADMIN", "description", "Ative ou bloqueie administradores criados pelo MASTER_ADMIN."], [1, "api-message"], [1, "panel"], [1, "approval-row"], [1, "row-line"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["mat-button", "", "type", "button", 3, "click", "disabled"]], template: function AdminAdminApprovalsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminAdminApprovalsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "h2");
            i0.ɵɵtext(5, "Administradores ADMIN");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(6, AdminAdminApprovalsPageComponent_For_7_Template, 11, 6, "div", 4, _forTrack0, false, AdminAdminApprovalsPageComponent_ForEmpty_8_Template, 5, 0, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.page.admins());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAdminApprovalsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-admin-approvals-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"RBAC\" title=\"Aprovacao de novos ADMIN\" description=\"Ative ou bloqueie administradores criados pelo MASTER_ADMIN.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <h2>Administradores ADMIN</h2>\n    @for (admin of page.admins(); track admin.id) {\n      <div class=\"approval-row\">\n        <div><strong>{{ admin.fullName }}</strong><span>{{ admin.username }} - {{ admin.roles.join(', ') }} - {{ admin.enabled ? 'Ativo' : 'Inativo' }}</span></div>\n        <div><button mat-flat-button color=\"primary\" type=\"button\" [disabled]=\"!page.isMaster()\" (click)=\"page.approveAdmin(admin.id, true)\">Aprovar</button><button mat-button type=\"button\" [disabled]=\"!page.isMaster()\" (click)=\"page.approveAdmin(admin.id, false)\">Desativar</button></div>\n      </div>\n    } @empty {\n      <div class=\"row-line\"><strong>Sem administradores</strong><span>Nenhum ADMIN retornado.</span></div>\n    }\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminAdminApprovalsPageComponent, { className: "AdminAdminApprovalsPageComponent", filePath: "src/app/pages/admin-admin-approvals/admin-admin-approvals.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-admin-approvals.component.js.map