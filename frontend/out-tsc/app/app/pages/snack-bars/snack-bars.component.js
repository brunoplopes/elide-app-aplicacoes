import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';
import * as i0 from "@angular/core";
export class SnackBarsPageComponent {
    constructor() {
        this.page = this;
        this.title = 'Lanchonetes';
        this.subtitle = 'Lanches, porções, sucos e combos para qualquer hora.';
        this.segment = 'Lanchonete';
    }
    static { this.ɵfac = function SnackBarsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SnackBarsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SnackBarsPageComponent, selectors: [["elide-snack-bars-page"]], decls: 1, vars: 3, consts: [[3, "title", "subtitle", "segment"]], template: function SnackBarsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "elide-catalog-view", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.page.title)("subtitle", ctx.page.subtitle)("segment", ctx.page.segment);
        } }, dependencies: [CatalogViewComponent], styles: ["[_nghost-%COMP%] { display: block; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SnackBarsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-snack-bars-page', imports: [CatalogViewComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<elide-catalog-view [title]=\"page.title\" [subtitle]=\"page.subtitle\" [segment]=\"page.segment\" />\n", styles: [":host { display: block; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SnackBarsPageComponent, { className: "SnackBarsPageComponent", filePath: "src/app/pages/snack-bars/snack-bars.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=snack-bars.component.js.map