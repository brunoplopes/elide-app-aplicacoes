import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
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
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.path;
const _forTrack2 = ($index, $item) => $item.title;
function ContactPageComponent_Conditional_2_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 4);
} if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r1.label)("value", metric_r1.value)("icon", metric_r1.icon);
} }
function ContactPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵrepeaterCreate(1, ContactPageComponent_Conditional_2_For_2_Template, 1, 3, "elide-metric-card", 4, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.vm.metrics);
} }
function ContactPageComponent_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", action_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.description);
} }
function ContactPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, ContactPageComponent_Conditional_3_For_2_Template, 7, 4, "a", 5, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.vm.actions);
} }
function ContactPageComponent_Conditional_4_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r4.meta);
} }
function ContactPageComponent_Conditional_4_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r4.action);
} }
function ContactPageComponent_Conditional_4_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 6)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, ContactPageComponent_Conditional_4_For_2_Conditional_7_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(8, ContactPageComponent_Conditional_4_For_2_Conditional_8_Template, 2, 1, "button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r4.meta ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r4.action ? 8 : -1);
} }
function ContactPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, ContactPageComponent_Conditional_4_For_2_Template, 9, 5, "article", 6, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.vm.cards);
} }
export class ContactPageComponent {
    constructor() {
        this.page = this;
        this.vm = {
            "eyebrow": "Atendimento",
            "title": "Contato",
            "description": "Canais para clientes, lojas e entregadores resolverem tudo com velocidade.",
            "cards": [
                {
                    "title": "WhatsApp",
                    "description": "Atendimento prioritario para pedidos ativos.",
                    "icon": "chat"
                },
                {
                    "title": "E-mail",
                    "description": "Solicitacoes comerciais e suporte.",
                    "icon": "mail"
                },
                {
                    "title": "Ouvidoria",
                    "description": "Casos sensiveis e auditoria.",
                    "icon": "verified_user"
                }
            ]
        };
    }
    static { this.ɵfac = function ContactPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ContactPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactPageComponent, selectors: [["contact-page"]], decls: 5, vars: 9, consts: [[1, "elide-section"], [3, "eyebrow", "title", "description", "actionLabel", "actionIcon", "actionLink"], [1, "metric-grid"], [1, "action-grid"], [3, "label", "value", "icon"], [1, "feature-card", 3, "routerLink"], [1, "feature-card"], ["mat-button", "", "type", "button"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, ContactPageComponent_Conditional_2_Template, 3, 0, "div", 2);
            i0.ɵɵconditionalCreate(3, ContactPageComponent_Conditional_3_Template, 3, 0, "div", 3);
            i0.ɵɵconditionalCreate(4, ContactPageComponent_Conditional_4_Template, 3, 0, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("eyebrow", ctx.page.vm.eyebrow)("title", ctx.page.vm.title)("description", ctx.page.vm.description)("actionLabel", ctx.page.vm.actionLabel ?? "")("actionIcon", ctx.page.vm.actionIcon ?? "arrow_forward")("actionLink", ctx.page.vm.actionLink ?? "/");
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.page.vm.metrics == null ? null : ctx.page.vm.metrics.length) ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.page.vm.actions == null ? null : ctx.page.vm.actions.length) ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((ctx.page.vm.cards == null ? null : ctx.page.vm.cards.length) ? 4 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactPageComponent, [{
        type: Component,
        args: [{ selector: 'contact-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    [eyebrow]=\"page.vm.eyebrow\"\n    [title]=\"page.vm.title\"\n    [description]=\"page.vm.description\"\n    [actionLabel]=\"page.vm.actionLabel ?? ''\"\n    [actionIcon]=\"page.vm.actionIcon ?? 'arrow_forward'\"\n    [actionLink]=\"page.vm.actionLink ?? '/'\"\n  />\n\n  @if (page.vm.metrics?.length) {\n    <div class=\"metric-grid\">\n      @for (metric of page.vm.metrics; track metric.label) {\n        <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n      }\n    </div>\n  }\n\n  @if (page.vm.actions?.length) {\n    <div class=\"action-grid\">\n      @for (action of page.vm.actions; track action.path) {\n        <a class=\"feature-card\" [routerLink]=\"action.path\">\n          <mat-icon>{{ action.icon }}</mat-icon>\n          <strong>{{ action.label }}</strong>\n          <span>{{ action.description }}</span>\n        </a>\n      }\n    </div>\n  }\n\n  @if (page.vm.cards?.length) {\n    <div class=\"action-grid\">\n      @for (card of page.vm.cards; track card.title) {\n        <article class=\"feature-card\">\n          <mat-icon>{{ card.icon }}</mat-icon>\n          <strong>{{ card.title }}</strong>\n          <span>{{ card.description }}</span>\n          @if (card.meta) { <small>{{ card.meta }}</small> }\n          @if (card.action) { <button mat-button type=\"button\">{{ card.action }}</button> }\n        </article>\n      }\n    </div>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContactPageComponent, { className: "ContactPageComponent", filePath: "src/app/pages/contact/contact.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=contact.component.js.map