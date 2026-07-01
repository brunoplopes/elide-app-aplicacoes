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
function AdminAuditPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminAuditPageComponent_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const log_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(log_r2.action);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", log_r2.resource, " - ", log_r2.actorUsername);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 4, log_r2.createdAt, "short"));
} }
function AdminAuditPageComponent_ForEmpty_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2, "Sem auditoria");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Acoes administrativas aparecem aqui.");
    i0.ɵɵelementEnd()();
} }
export class AdminAuditPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminAuditPageComponent_BaseFactory; return function AdminAuditPageComponent_Factory(__ngFactoryType__) { return (ɵAdminAuditPageComponent_BaseFactory || (ɵAdminAuditPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminAuditPageComponent)))(__ngFactoryType__ || AdminAuditPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminAuditPageComponent, selectors: [["elide-admin-audit-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 2, consts: [[1, "admin-page"], ["eyebrow", "Seguranca", "title", "Auditoria", "description", "Trilha de acoes administrativas e recursos alterados."], [1, "api-message"], [1, "panel"], [1, "audit-list"]], template: function AdminAuditPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminAuditPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "h2");
            i0.ɵɵtext(5, "Eventos de auditoria");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵrepeaterCreate(7, AdminAuditPageComponent_For_8_Template, 8, 7, "div", null, _forTrack0, false, AdminAuditPageComponent_ForEmpty_9_Template, 5, 0, "div");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.page.audit());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, i1.DatePipe], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminAuditPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-audit-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Seguranca\" title=\"Auditoria\" description=\"Trilha de acoes administrativas e recursos alterados.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <h2>Eventos de auditoria</h2>\n    <div class=\"audit-list\">\n      @for (log of page.audit(); track log.id) {\n        <div><strong>{{ log.action }}</strong><span>{{ log.resource }} - {{ log.actorUsername }}</span><small>{{ log.createdAt | date:'short' }}</small></div>\n      } @empty {\n        <div><strong>Sem auditoria</strong><span>Acoes administrativas aparecem aqui.</span></div>\n      }\n    </div>\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminAuditPageComponent, { className: "AdminAuditPageComponent", filePath: "src/app/pages/admin-audit/admin-audit.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-audit.component.js.map