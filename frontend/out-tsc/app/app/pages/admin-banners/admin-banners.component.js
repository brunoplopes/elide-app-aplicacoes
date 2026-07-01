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
function AdminBannersPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminBannersPageComponent_For_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 5);
    i0.ɵɵlistener("click", function AdminBannersPageComponent_For_25_Template_button_click_7_listener() { const banner_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editBanner(banner_r3)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 5);
    i0.ɵɵlistener("click", function AdminBannersPageComponent_For_25_Template_button_click_9_listener() { const banner_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteBanner(banner_r3.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const banner_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(banner_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", banner_r3.imageUrl, " - ", banner_r3.active ? "Ativo" : "Inativo");
} }
function AdminBannersPageComponent_ForEmpty_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "strong");
    i0.ɵɵtext(2, "Sem banners");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum registro retornado.");
    i0.ɵɵelementEnd()();
} }
export class AdminBannersPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminBannersPageComponent_BaseFactory; return function AdminBannersPageComponent_Factory(__ngFactoryType__) { return (ɵAdminBannersPageComponent_BaseFactory || (ɵAdminBannersPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminBannersPageComponent)))(__ngFactoryType__ || AdminBannersPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminBannersPageComponent, selectors: [["elide-admin-banners-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 27, vars: 4, consts: [[1, "admin-page"], ["eyebrow", "Administrador", "title", "CRUD de banners", "description", "Controle campanhas e destaques da home."], [1, "api-message"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "admin-form", "dense", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "title"], ["matInput", "", "formControlName", "imageUrl"], [1, "check-line"], ["type", "checkbox", "formControlName", "active"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "record-list"], [1, "record-row"], [1, "row-line"]], template: function AdminBannersPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminBannersPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "h2");
            i0.ɵɵtext(6, "Banners");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵlistener("click", function AdminBannersPageComponent_Template_button_click_7_listener() { return ctx.page.resetBanner(); });
            i0.ɵɵtext(8, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "form", 6);
            i0.ɵɵlistener("ngSubmit", function AdminBannersPageComponent_Template_form_ngSubmit_9_listener() { return ctx.page.saveBanner(); });
            i0.ɵɵelementStart(10, "mat-form-field", 7)(11, "mat-label");
            i0.ɵɵtext(12, "Titulo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field", 7)(15, "mat-label");
            i0.ɵɵtext(16, "Imagem");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "label", 10);
            i0.ɵɵelement(19, "input", 11);
            i0.ɵɵtext(20, " Ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 12);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 13);
            i0.ɵɵrepeaterCreate(24, AdminBannersPageComponent_For_25_Template, 11, 3, "div", 14, _forTrack0, false, AdminBannersPageComponent_ForEmpty_26_Template, 5, 0, "div", 15);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("formGroup", ctx.page.bannerForm);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.page.editingBannerId() ? "Atualizar banner" : "Criar banner");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.banners());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminBannersPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-banners-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Administrador\" title=\"CRUD de banners\" description=\"Controle campanhas e destaques da home.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <div class=\"panel-heading\"><h2>Banners</h2><button mat-button type=\"button\" (click)=\"page.resetBanner()\">Limpar</button></div>\n    <form class=\"admin-form dense\" [formGroup]=\"page.bannerForm\" (ngSubmit)=\"page.saveBanner()\">\n      <mat-form-field appearance=\"outline\"><mat-label>Titulo</mat-label><input matInput formControlName=\"title\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Imagem</mat-label><input matInput formControlName=\"imageUrl\"></mat-form-field>\n      <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"active\"> Ativo</label>\n      <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingBannerId() ? 'Atualizar banner' : 'Criar banner' }}</button>\n    </form>\n    <div class=\"record-list\">\n      @for (banner of page.banners(); track banner.id) {\n        <div class=\"record-row\"><span><strong>{{ banner.title }}</strong><small>{{ banner.imageUrl }} - {{ banner.active ? 'Ativo' : 'Inativo' }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editBanner(banner)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteBanner(banner.id)\">Excluir</button></div></div>\n      } @empty {\n        <div class=\"row-line\"><strong>Sem banners</strong><span>Nenhum registro retornado.</span></div>\n      }\n    </div>\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminBannersPageComponent, { className: "AdminBannersPageComponent", filePath: "src/app/pages/admin-banners/admin-banners.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-banners.component.js.map