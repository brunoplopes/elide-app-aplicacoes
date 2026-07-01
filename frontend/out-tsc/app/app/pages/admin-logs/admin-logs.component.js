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
function AdminLogsPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminLogsPageComponent_For_8_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtextInterpolate2("", log_r2.resource, " - ", log_r2.ipAddress);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 4, log_r2.createdAt, "short"));
} }
function AdminLogsPageComponent_ForEmpty_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2, "Sem logs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Eventos administrativos aparecem aqui.");
    i0.ɵɵelementEnd()();
} }
export class AdminLogsPageComponent extends AdminPanelPageComponent {
    constructor() {
        super(...arguments);
        this.page = this;
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵAdminLogsPageComponent_BaseFactory; return function AdminLogsPageComponent_Factory(__ngFactoryType__) { return (ɵAdminLogsPageComponent_BaseFactory || (ɵAdminLogsPageComponent_BaseFactory = i0.ɵɵgetInheritedFactory(AdminLogsPageComponent)))(__ngFactoryType__ || AdminLogsPageComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminLogsPageComponent, selectors: [["elide-admin-logs-page"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 10, vars: 2, consts: [[1, "admin-page"], ["eyebrow", "Seguranca", "title", "Logs", "description", "Registro operacional recente para suporte e rastreabilidade."], [1, "api-message"], [1, "panel"], [1, "audit-list"]], template: function AdminLogsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminLogsPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "h2");
            i0.ɵɵtext(5, "Logs recentes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵrepeaterCreate(7, AdminLogsPageComponent_For_8_Template, 8, 7, "div", null, _forTrack0, false, AdminLogsPageComponent_ForEmpty_9_Template, 5, 0, "div");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.page.logs());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, i1.DatePipe], styles: ["@import '../admin-panel/admin-panel.component.css';"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminLogsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-logs-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading eyebrow=\"Seguranca\" title=\"Logs\" description=\"Registro operacional recente para suporte e rastreabilidade.\" />\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <section class=\"panel\">\n    <h2>Logs recentes</h2>\n    <div class=\"audit-list\">\n      @for (log of page.logs(); track log.id) {\n        <div><strong>{{ log.action }}</strong><span>{{ log.resource }} - {{ log.ipAddress }}</span><small>{{ log.createdAt | date:'short' }}</small></div>\n      } @empty {\n        <div><strong>Sem logs</strong><span>Eventos administrativos aparecem aqui.</span></div>\n      }\n    </div>\n  </section>\n</section>\n", styles: ["@import '../admin-panel/admin-panel.component.css';\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminLogsPageComponent, { className: "AdminLogsPageComponent", filePath: "src/app/pages/admin-logs/admin-logs.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=admin-logs.component.js.map