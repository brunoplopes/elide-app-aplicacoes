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
function AdminAdminsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminAdminsPageComponent_For_40_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 6);
    i0.ɵɵlistener("click", function AdminAdminsPageComponent_For_40_Template_button_click_7_listener() { const admin_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editAdmin(admin_r3)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵlistener("click", function AdminAdminsPageComponent_For_40_Template_button_click_9_listener() { const admin_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveAdmin(admin_r3.id, !admin_r3.enabled)); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 6);
    i0.ɵɵlistener("click", function AdminAdminsPageComponent_For_40_Template_button_click_11_listener() { const admin_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteAdmin(admin_r3.id)); });
    i0.ɵɵtext(12, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const admin_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(admin_r3.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", admin_r3.username, " - ", admin_r3.roles.join(", "), " - ", admin_r3.enabled ? "Ativo" : "Inativo");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(admin_r3.enabled ? "Desativar" : "Aprovar");
} }
function AdminAdminsPageComponent_ForEmpty_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "strong");
    i0.ɵɵtext(2, "Sem administradores");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum ADMIN retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminAdminsPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminAdminsPageComponent_BaseFactory; return function AdminAdminsPageComponent_Factory(__ngFactoryType__) { return (ɵAdminAdminsPageComponent_BaseFactory || (ɵAdminAdminsPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminAdminsPageComponent)))(__ngFactoryType__ || AdminAdminsPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminAdminsPageComponent, selectors: [["elide-admin-admins-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 42, vars: 5, consts: [[1, "admin-page"], ["eyebrow", "RBAC", "title", "CRUD de administradores", "description", "Somente MASTER_ADMIN pode criar, aprovar, editar e remover ADMIN."], [1, "api-message"], [1, "registry-grid"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "admin-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "password"], [1, "check-line"], ["type", "checkbox", "formControlName", "enabled"], ["type", "checkbox", "formControlName", "mustChangePassword"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "record-list"], [1, "record-row"], [1, "row-line"]], template: function AdminAdminsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminAdminsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "h2");
            i0.ɵɵtext(7, "Administrador ADMIN");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 6);
            i0.ɵɵlistener("click", function AdminAdminsPageComponent_Template_button_click_8_listener() { return ctx.page.resetAdmin(); });
            i0.ɵɵtext(9, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "form", 7);
            i0.ɵɵlistener("ngSubmit", function AdminAdminsPageComponent_Template_form_ngSubmit_10_listener() { return ctx.page.saveAdmin(); });
            i0.ɵɵelementStart(11, "mat-form-field", 8)(12, "mat-label");
            i0.ɵɵtext(13, "Usuario");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-form-field", 8)(16, "mat-label");
            i0.ɵɵtext(17, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "mat-form-field", 8)(20, "mat-label");
            i0.ɵɵtext(21, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-form-field", 8)(24, "mat-label");
            i0.ɵɵtext(25, "Senha inicial");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "label", 13);
            i0.ɵɵelement(28, "input", 14);
            i0.ɵɵtext(29, " Ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "label", 13);
            i0.ɵɵelement(31, "input", 15);
            i0.ɵɵtext(32, " Troca obrigatoria");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 16);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "section", 4)(36, "h2");
            i0.ɵɵtext(37, "Administradores");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 17);
            i0.ɵɵrepeaterCreate(39, AdminAdminsPageComponent_For_40_Template, 13, 5, "div", 18, _forTrack0, false, AdminAdminsPageComponent_ForEmpty_41_Template, 5, 0, "div", 19);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.adminForm);
            i0.ɵɵadvance(23);
            i0.ɵɵproperty("disabled", !ctx.page.isMaster());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.page.editingAdminId() ? "Atualizar ADMIN" : "Criar ADMIN");
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.page.admins());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAdminsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-admins-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"RBAC\" title=\"CRUD de administradores\" description=\"Somente MASTER_ADMIN pode criar, aprovar, editar e remover ADMIN.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <div class=\"registry-grid\">\n    <section class=\"panel\">\n      <div class=\"panel-heading\"><h2>Administrador ADMIN</h2><button mat-button type=\"button\" (click)=\"page.resetAdmin()\">Limpar</button></div>\n      <form class=\"admin-form\" [formGroup]=\"page.adminForm\" (ngSubmit)=\"page.saveAdmin()\">\n        <mat-form-field appearance=\"outline\"><mat-label>Usuario</mat-label><input matInput formControlName=\"username\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>E-mail</mat-label><input matInput formControlName=\"email\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"fullName\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Senha inicial</mat-label><input matInput formControlName=\"password\"></mat-form-field>\n        <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"enabled\"> Ativo</label>\n        <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"mustChangePassword\"> Troca obrigatoria</label>\n        <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"!page.isMaster()\">{{ page.editingAdminId() ? 'Atualizar ADMIN' : 'Criar ADMIN' }}</button>\n      </form>\n    </section>\n\n    <section class=\"panel\">\n      <h2>Administradores</h2>\n      <div class=\"record-list\">\n        @for (admin of page.admins(); track admin.id) {\n          <div class=\"record-row\">\n            <span><strong>{{ admin.fullName }}</strong><small>{{ admin.username }} - {{ admin.roles.join(', ') }} - {{ admin.enabled ? 'Ativo' : 'Inativo' }}</small></span>\n            <div>\n              <button mat-button type=\"button\" (click)=\"page.editAdmin(admin)\">Editar</button>\n              <button mat-button type=\"button\" (click)=\"page.approveAdmin(admin.id, !admin.enabled)\">{{ admin.enabled ? 'Desativar' : 'Aprovar' }}</button>\n              <button mat-button type=\"button\" (click)=\"page.deleteAdmin(admin.id)\">Excluir</button>\n            </div>\n          </div>\n        } @empty {\n          <div class=\"row-line\"><strong>Sem administradores</strong><span>Nenhum ADMIN retornado.</span></div>\n        }\n      </div>\n    </section>\n  </div>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminAdminsPageComponent, { className: "AdminAdminsPageComponent", filePath: "src/app/pages/admin-admins/admin-admins.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-admins.component.js.map