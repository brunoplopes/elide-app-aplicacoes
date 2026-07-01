import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';
import * as i0 from "@angular/core";
export class BakeriesPageComponent {
    constructor() {
        this.page = this;
        this.title = 'Padarias';
        this.subtitle = 'Pães, doces, cafés e conveniência para chegar fresquinho.';
        this.segment = 'Padaria';
    }
    static { this.ɵfac = function BakeriesPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BakeriesPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BakeriesPageComponent, selectors: [["elide-bakeries-page"]], decls: 1, vars: 3, consts: [[3, "title", "subtitle", "segment"]], template: function BakeriesPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "elide-catalog-view", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.page.title)("subtitle", ctx.page.subtitle)("segment", ctx.page.segment);
        } }, dependencies: [CatalogViewComponent], styles: ["[_nghost-%COMP%] { display: block; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BakeriesPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-bakeries-page', imports: [CatalogViewComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<elide-catalog-view [title]=\"page.title\" [subtitle]=\"page.subtitle\" [segment]=\"page.segment\" />\n", styles: [":host { display: block; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BakeriesPageComponent, { className: "BakeriesPageComponent", filePath: "src/app/pages/bakeries/bakeries.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=bakeries.component.js.map