import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';
import * as i0 from "@angular/core";
export class PharmaciesPageComponent {
    constructor() {
        this.page = this;
        this.title = 'Farmacias';
        this.subtitle = 'Saude, beleza e conveniencia com entrega segura.';
        this.segment = 'Farmacia';
    }
    static { this.ɵfac = function PharmaciesPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PharmaciesPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PharmaciesPageComponent, selectors: [["elide-pharmacies-page"]], decls: 1, vars: 3, consts: [[3, "title", "subtitle", "segment"]], template: function PharmaciesPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "elide-catalog-view", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.page.title)("subtitle", ctx.page.subtitle)("segment", ctx.page.segment);
        } }, dependencies: [CatalogViewComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PharmaciesPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-pharmacies-page', imports: [CatalogViewComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<elide-catalog-view [title]=\"page.title\" [subtitle]=\"page.subtitle\" [segment]=\"page.segment\" />\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PharmaciesPageComponent, { className: "PharmaciesPageComponent", filePath: "src/app/pages/pharmacies/pharmacies.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=pharmacies.component.js.map