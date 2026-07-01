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
function AdminSettingsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminSettingsPageComponent_For_23_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 13);
    i0.ɵɵlistener("click", function AdminSettingsPageComponent_For_23_Template_button_click_7_listener() { const setting_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editSetting(setting_r3)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const setting_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(setting_r3.keyName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(setting_r3.value);
} }
function AdminSettingsPageComponent_ForEmpty_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "strong");
    i0.ɵɵtext(2, "Sem configuracoes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum parametro retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminSettingsPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminSettingsPageComponent_BaseFactory; return function AdminSettingsPageComponent_Factory(__ngFactoryType__) { return (ɵAdminSettingsPageComponent_BaseFactory || (ɵAdminSettingsPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminSettingsPageComponent)))(__ngFactoryType__ || AdminSettingsPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminSettingsPageComponent, selectors: [["elide-admin-settings-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 25, vars: 3, consts: [[1, "admin-page"], ["eyebrow", "Sistema", "title", "Configuracoes gerais", "description", "Edite parametros globais usados pela plataforma."], [1, "api-message"], [1, "registry-grid"], [1, "panel"], [1, "admin-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "keyName"], ["matInput", "", "formControlName", "value"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "record-list"], [1, "record-row"], [1, "row-line"], ["mat-button", "", "type", "button", 3, "click"]], template: function AdminSettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminSettingsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "section", 4)(5, "h2");
            i0.ɵɵtext(6, "Parametro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "form", 5);
            i0.ɵɵlistener("ngSubmit", function AdminSettingsPageComponent_Template_form_ngSubmit_7_listener() { return ctx.page.saveSetting(); });
            i0.ɵɵelementStart(8, "mat-form-field", 6)(9, "mat-label");
            i0.ɵɵtext(10, "Chave");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-form-field", 6)(13, "mat-label");
            i0.ɵɵtext(14, "Valor");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 9);
            i0.ɵɵtext(17, "Salvar configuracao");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "section", 4)(19, "h2");
            i0.ɵɵtext(20, "Configuracoes atuais");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 10);
            i0.ɵɵrepeaterCreate(22, AdminSettingsPageComponent_For_23_Template, 9, 2, "div", 11, _forTrack0, false, AdminSettingsPageComponent_ForEmpty_24_Template, 5, 0, "div", 12);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.page.settingForm);
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.page.settings());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminSettingsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-settings-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Sistema\" title=\"Configuracoes gerais\" description=\"Edite parametros globais usados pela plataforma.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <div class=\"registry-grid\">\n    <section class=\"panel\">\n      <h2>Parametro</h2>\n      <form class=\"admin-form\" [formGroup]=\"page.settingForm\" (ngSubmit)=\"page.saveSetting()\">\n        <mat-form-field appearance=\"outline\"><mat-label>Chave</mat-label><input matInput formControlName=\"keyName\"></mat-form-field>\n        <mat-form-field appearance=\"outline\"><mat-label>Valor</mat-label><input matInput formControlName=\"value\"></mat-form-field>\n        <button mat-flat-button color=\"primary\" type=\"submit\">Salvar configuracao</button>\n      </form>\n    </section>\n\n    <section class=\"panel\">\n      <h2>Configuracoes atuais</h2>\n      <div class=\"record-list\">\n        @for (setting of page.settings(); track setting.id) {\n          <div class=\"record-row\"><span><strong>{{ setting.keyName }}</strong><small>{{ setting.value }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editSetting(setting)\">Editar</button></div></div>\n        } @empty {\n          <div class=\"row-line\"><strong>Sem configuracoes</strong><span>Nenhum parametro retornado.</span></div>\n        }\n      </div>\n    </section>\n  </div>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminSettingsPageComponent, { className: "AdminSettingsPageComponent", filePath: "src/app/pages/admin-settings/admin-settings.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-settings.component.js.map