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
function AdminStoresPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminStoresPageComponent_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", status_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r2);
} }
function AdminStoresPageComponent_For_43_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 5);
    i0.ɵɵlistener("click", function AdminStoresPageComponent_For_43_Template_button_click_7_listener() { const store_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editStore(store_r4)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 5);
    i0.ɵɵlistener("click", function AdminStoresPageComponent_For_43_Template_button_click_9_listener() { const store_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteStore(store_r4.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const store_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(store_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", store_r4.segment, " - ", store_r4.status);
} }
function AdminStoresPageComponent_ForEmpty_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "strong");
    i0.ɵɵtext(2, "Sem lojas");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum registro retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminStoresPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminStoresPageComponent_BaseFactory; return function AdminStoresPageComponent_Factory(__ngFactoryType__) { return (ɵAdminStoresPageComponent_BaseFactory || (ɵAdminStoresPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminStoresPageComponent)))(__ngFactoryType__ || AdminStoresPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminStoresPageComponent, selectors: [["elide-admin-stores-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 45, vars: 4, consts: [[1, "admin-page"], ["eyebrow", "Administrador", "title", "CRUD de lojas", "description", "Cadastre, edite e remova estabelecimentos da plataforma."], [1, "api-message"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "admin-form", "dense", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "document"], ["matInput", "", "formControlName", "segment"], ["formControlName", "status"], [3, "value"], ["matInput", "", "type", "number", "formControlName", "deliveryFee"], ["matInput", "", "type", "number", "formControlName", "minimumOrder"], [1, "check-line"], ["type", "checkbox", "formControlName", "open"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "record-list"], [1, "record-row"], [1, "row-line"]], template: function AdminStoresPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminStoresPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "h2");
            i0.ɵɵtext(6, "Lojas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function AdminStoresPageComponent_Template_button_click_7_listener() { return ctx.page.resetStore(); });
            i0.ɵɵtext(8, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "form", 6);
            i0.ɵɵlistener("ngSubmit", function AdminStoresPageComponent_Template_form_ngSubmit_9_listener() { return ctx.page.saveStore(); });
            i0.ɵɵelementStart(10, "mat-form-field", 7)(11, "mat-label");
            i0.ɵɵtext(12, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field", 7)(15, "mat-label");
            i0.ɵɵtext(16, "Documento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-form-field", 7)(19, "mat-label");
            i0.ɵɵtext(20, "Segmento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "input", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-form-field", 7)(23, "mat-label");
            i0.ɵɵtext(24, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "mat-select", 11);
            i0.ɵɵrepeaterCreate(26, AdminStoresPageComponent_For_27_Template, 2, 2, "mat-option", 12, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "mat-form-field", 7)(29, "mat-label");
            i0.ɵɵtext(30, "Entrega");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "input", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-form-field", 7)(33, "mat-label");
            i0.ɵɵtext(34, "Pedido minimo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "input", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "label", 15);
            i0.ɵɵelement(37, "input", 16);
            i0.ɵɵtext(38, " Loja aberta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "button", 17);
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "div", 18);
            i0.ɵɵrepeaterCreate(42, AdminStoresPageComponent_For_43_Template, 11, 3, "div", 19, _forTrack0, false, AdminStoresPageComponent_ForEmpty_44_Template, 5, 0, "div", 20);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.page.storeForm);
            i0.ɵɵadvance(17);
            i0.ɵɵrepeater(ctx.page.storeStatuses);
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.page.editingStoreId() ? "Atualizar loja" : "Criar loja");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.stores());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i12.MatSelect, i12.MatOption, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminStoresPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-stores-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Administrador\" title=\"CRUD de lojas\" description=\"Cadastre, edite e remova estabelecimentos da plataforma.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <div class=\"panel-heading\"><h2>Lojas</h2><button mat-button type=\"button\" (click)=\"page.resetStore()\">Limpar</button></div>\n    <form class=\"admin-form dense\" [formGroup]=\"page.storeForm\" (ngSubmit)=\"page.saveStore()\">\n      <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"name\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Documento</mat-label><input matInput formControlName=\"document\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Segmento</mat-label><input matInput formControlName=\"segment\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Status</mat-label><mat-select formControlName=\"status\">@for (status of page.storeStatuses; track status) { <mat-option [value]=\"status\">{{ status }}</mat-option> }</mat-select></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Entrega</mat-label><input matInput type=\"number\" formControlName=\"deliveryFee\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Pedido minimo</mat-label><input matInput type=\"number\" formControlName=\"minimumOrder\"></mat-form-field>\n      <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"open\"> Loja aberta</label>\n      <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingStoreId() ? 'Atualizar loja' : 'Criar loja' }}</button>\n    </form>\n    <div class=\"record-list\">\n      @for (store of page.stores(); track store.id) {\n        <div class=\"record-row\">\n          <span><strong>{{ store.name }}</strong><small>{{ store.segment }} - {{ store.status }}</small></span>\n          <div><button mat-button type=\"button\" (click)=\"page.editStore(store)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteStore(store.id)\">Excluir</button></div>\n        </div>\n      } @empty {\n        <div class=\"row-line\"><strong>Sem lojas</strong><span>Nenhum registro retornado.</span></div>\n      }\n    </div>\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminStoresPageComponent, { className: "AdminStoresPageComponent", filePath: "src/app/pages/admin-stores/admin-stores.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-stores.component.js.map