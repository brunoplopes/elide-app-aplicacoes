import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';
import * as i0 from "@angular/core";
export class ButchersPageComponent {
    constructor() {
        this.page = this;
        this.title = 'Acougues';
        this.subtitle = 'Cortes selecionados, kits para churrasco e preparo do dia.';
        this.segment = 'Acougue';
    }
    static { this.ɵfac = function ButchersPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ButchersPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButchersPageComponent, selectors: [["elide-butchers-page"]], decls: 1, vars: 3, consts: [[3, "title", "subtitle", "segment"]], template: function ButchersPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "elide-catalog-view", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.page.title)("subtitle", ctx.page.subtitle)("segment", ctx.page.segment);
        } }, dependencies: [CatalogViewComponent], styles: ["[_nghost-%COMP%] { display: block; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButchersPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-butchers-page', imports: [CatalogViewComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<elide-catalog-view [title]=\"page.title\" [subtitle]=\"page.subtitle\" [segment]=\"page.segment\" />\n", styles: [":host { display: block; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ButchersPageComponent, { className: "ButchersPageComponent", filePath: "src/app/pages/butchers/butchers.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=butchers.component.js.map