import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';
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
function AdminCourierApprovalsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminCourierApprovalsPageComponent_For_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", status_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r2);
} }
function AdminCourierApprovalsPageComponent_For_50_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 24);
    i0.ɵɵlistener("click", function AdminCourierApprovalsPageComponent_For_50_Template_button_click_7_listener() { const courier_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveCourier(courier_r4.id)); });
    i0.ɵɵtext(8, "Aprovar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵlistener("click", function AdminCourierApprovalsPageComponent_For_50_Template_button_click_9_listener() { const courier_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.rejectCourier(courier_r4.id)); });
    i0.ɵɵtext(10, "Reprovar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const courier_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(courier_r4.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", courier_r4.document, " - ", courier_r4.vehicleType, " - ", courier_r4.status);
} }
function AdminCourierApprovalsPageComponent_ForEmpty_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "strong");
    i0.ɵɵtext(2, "Sem pendencias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum entregador aguardando validacao.");
    i0.ɵɵelementEnd()();
} }
function AdminCourierApprovalsPageComponent_For_57_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 6);
    i0.ɵɵlistener("click", function AdminCourierApprovalsPageComponent_For_57_Template_button_click_7_listener() { const courier_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveCourier(courier_r6.id)); });
    i0.ɵɵtext(8, "Disponivel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 6);
    i0.ɵɵlistener("click", function AdminCourierApprovalsPageComponent_For_57_Template_button_click_9_listener() { const courier_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.rejectCourier(courier_r6.id)); });
    i0.ɵɵtext(10, "Reprovar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const courier_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(courier_r6.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", courier_r6.email, " - ", courier_r6.vehicleType, " - ", courier_r6.status);
} }
function AdminCourierApprovalsPageComponent_ForEmpty_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "strong");
    i0.ɵɵtext(2, "Sem entregadores");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum registro retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminCourierApprovalsPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
        this.adminApi = inject(AdminApiService);
        this.builder = inject(FormBuilder);
        this.courierStatuses = ['PENDING_DOCUMENTS', 'PENDING_APPROVAL', 'AVAILABLE', 'UNAVAILABLE', 'SUSPENDED', 'REJECTED'];
        this.courierForm = this.builder.nonNullable.group({
            username: ['', [Validators.required, Validators.maxLength(120)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['trocar-senha-2026', [Validators.required, Validators.minLength(8)]],
            fullName: ['', [Validators.required, Validators.maxLength(160)]],
            document: ['', [Validators.required, Validators.maxLength(14)]],
            vehicleType: ['Moto', [Validators.required, Validators.maxLength(40)]],
            status: ['PENDING_APPROVAL', Validators.required],
            enabled: [true]
        });
    }
    saveCourier() {
        if (this.courierForm.invalid) {
            this.courierForm.markAllAsTouched();
            return;
        }
        this.adminApi.createCourier(this.courierForm.getRawValue()).subscribe({
            next: (courier) => {
                this.couriers.update((couriers) => [courier, ...couriers]);
                this.resetCourier();
                this.message.set('Entregador cadastrado com senha inicial e troca obrigatoria.');
            },
            error: () => this.message.set('Nao foi possivel cadastrar entregador.')
        });
    }
    resetCourier() {
        this.courierForm.reset({
            username: '',
            email: '',
            password: 'trocar-senha-2026',
            fullName: '',
            document: '',
            vehicleType: 'Moto',
            status: 'PENDING_APPROVAL',
            enabled: true
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminCourierApprovalsPageComponent_BaseFactory; return function AdminCourierApprovalsPageComponent_Factory(__ngFactoryType__) { return (ɵAdminCourierApprovalsPageComponent_BaseFactory || (ɵAdminCourierApprovalsPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminCourierApprovalsPageComponent)))(__ngFactoryType__ || AdminCourierApprovalsPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminCourierApprovalsPageComponent, selectors: [["elide-admin-courier-approvals-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 59, vars: 4, consts: [[1, "admin-page"], ["eyebrow", "Aprovacoes", "title", "Cadastro e aprovacao de entregadores", "description", "Cadastre entregadores, valide documentacao e controle status operacional."], [1, "api-message"], [1, "registry-grid"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "admin-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "password"], ["matInput", "", "formControlName", "document"], ["matInput", "", "formControlName", "vehicleType"], ["formControlName", "status"], [3, "value"], [1, "check-line"], ["type", "checkbox", "formControlName", "enabled"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "approval-row"], [1, "row-line"], [1, "record-list"], [1, "record-row"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function AdminCourierApprovalsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminCourierApprovalsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "section", 4)(5, "div", 5)(6, "h2");
            i0.ɵɵtext(7, "Novo entregador");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 6);
            i0.ɵɵlistener("click", function AdminCourierApprovalsPageComponent_Template_button_click_8_listener() { return ctx.page.resetCourier(); });
            i0.ɵɵtext(9, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "form", 7);
            i0.ɵɵlistener("ngSubmit", function AdminCourierApprovalsPageComponent_Template_form_ngSubmit_10_listener() { return ctx.page.saveCourier(); });
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
            i0.ɵɵtext(21, "Nome completo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-form-field", 8)(24, "mat-label");
            i0.ɵɵtext(25, "Senha inicial");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "input", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "mat-form-field", 8)(28, "mat-label");
            i0.ɵɵtext(29, "Documento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "mat-form-field", 8)(32, "mat-label");
            i0.ɵɵtext(33, "Veiculo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "input", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "mat-form-field", 8)(36, "mat-label");
            i0.ɵɵtext(37, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "mat-select", 15);
            i0.ɵɵrepeaterCreate(39, AdminCourierApprovalsPageComponent_For_40_Template, 2, 2, "mat-option", 16, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "label", 17);
            i0.ɵɵelement(42, "input", 18);
            i0.ɵɵtext(43, " Usuario ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 19);
            i0.ɵɵtext(45, "Cadastrar entregador");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(46, "section", 4)(47, "h2");
            i0.ɵɵtext(48, "Entregadores pendentes");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(49, AdminCourierApprovalsPageComponent_For_50_Template, 11, 4, "div", 20, _forTrack0, false, AdminCourierApprovalsPageComponent_ForEmpty_51_Template, 5, 0, "div", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "section", 4)(53, "h2");
            i0.ɵɵtext(54, "Todos os entregadores");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 22);
            i0.ɵɵrepeaterCreate(56, AdminCourierApprovalsPageComponent_For_57_Template, 11, 4, "div", 23, _forTrack0, false, AdminCourierApprovalsPageComponent_ForEmpty_58_Template, 5, 0, "div", 21);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.courierForm);
            i0.ɵɵadvance(29);
            i0.ɵɵrepeater(ctx.page.courierStatuses);
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.page.pendingCouriers());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.page.couriers());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i12.MatSelect, i12.MatOption, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminCourierApprovalsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-courier-approvals-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Aprovacoes\" title=\"Cadastro e aprovacao de entregadores\" description=\"Cadastre entregadores, valide documentacao e controle status operacional.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <div class=\"registry-grid\">\n    <section class=\"panel\">\n      <div class=\"panel-heading\"><h2>Novo entregador</h2><button mat-button type=\"button\" (click)=\"page.resetCourier()\">Limpar</button></div>\n      <form class=\"admin-form\" [formGroup]=\"page.courierForm\" (ngSubmit)=\"page.saveCourier()\">\n        <mat-form-field appearance=\"outline\"><mat-label>Usuario</mat-label><input matInput formControlName=\"username\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>E-mail</mat-label><input matInput formControlName=\"email\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Nome completo</mat-label><input matInput formControlName=\"fullName\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Senha inicial</mat-label><input matInput formControlName=\"password\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Documento</mat-label><input matInput formControlName=\"document\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Veiculo</mat-label><input matInput formControlName=\"vehicleType\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Status</mat-label><mat-select formControlName=\"status\">@for (status of page.courierStatuses; track status) { <mat-option [value]=\"status\">{{ status }}</mat-option> }</mat-select></mat-form-field>\n        <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"enabled\"> Usuario ativo</label>\n        <button mat-flat-button color=\"primary\" type=\"submit\">Cadastrar entregador</button>\n      </form>\n    </section>\n\n    <section class=\"panel\">\n      <h2>Entregadores pendentes</h2>\n      @for (courier of page.pendingCouriers(); track courier.id) {\n        <div class=\"approval-row\">\n          <div><strong>{{ courier.fullName }}</strong><span>{{ courier.document }} - {{ courier.vehicleType }} - {{ courier.status }}</span></div>\n          <div><button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.approveCourier(courier.id)\">Aprovar</button><button mat-button type=\"button\" (click)=\"page.rejectCourier(courier.id)\">Reprovar</button></div>\n        </div>\n      } @empty {\n        <div class=\"row-line\"><strong>Sem pendencias</strong><span>Nenhum entregador aguardando validacao.</span></div>\n      }\n    </section>\n  </div>\n\n  <section class=\"panel\">\n    <h2>Todos os entregadores</h2>\n    <div class=\"record-list\">\n      @for (courier of page.couriers(); track courier.id) {\n        <div class=\"record-row\"><span><strong>{{ courier.fullName }}</strong><small>{{ courier.email }} - {{ courier.vehicleType }} - {{ courier.status }}</small></span><div><button mat-button type=\"button\" (click)=\"page.approveCourier(courier.id)\">Disponivel</button><button mat-button type=\"button\" (click)=\"page.rejectCourier(courier.id)\">Reprovar</button></div></div>\n      } @empty {\n        <div class=\"row-line\"><strong>Sem entregadores</strong><span>Nenhum registro retornado.</span></div>\n      }\n    </div>\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminCourierApprovalsPageComponent, { className: "AdminCourierApprovalsPageComponent", filePath: "src/app/pages/admin-courier-approvals/admin-courier-approvals.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=admin-courier-approvals.component.js.map