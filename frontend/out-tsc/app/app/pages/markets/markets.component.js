import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';
import * as i0 from "@angular/core";
export class MarketsPageComponent {
    constructor() {
        this.page = this;
        this.title = 'Mercados';
        this.subtitle = 'Compras de mercado, padaria e conveniencia para receber em casa.';
        this.segment = 'Mercado';
    }
    static { this.ɵfac = function MarketsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MarketsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MarketsPageComponent, selectors: [["elide-markets-page"]], decls: 1, vars: 3, consts: [[3, "title", "subtitle", "segment"]], template: function MarketsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "elide-catalog-view", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.page.title)("subtitle", ctx.page.subtitle)("segment", ctx.page.segment);
        } }, dependencies: [CatalogViewComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MarketsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-markets-page', imports: [CatalogViewComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<elide-catalog-view [title]=\"page.title\" [subtitle]=\"page.subtitle\" [segment]=\"page.segment\" />\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MarketsPageComponent, { className: "MarketsPageComponent", filePath: "src/app/pages/markets/markets.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=markets.component.js.map