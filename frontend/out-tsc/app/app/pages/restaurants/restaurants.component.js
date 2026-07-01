import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogViewComponent } from '../shared/catalog-view.component';
import * as i0 from "@angular/core";
export class RestaurantsPageComponent {
    constructor() {
        this.page = this;
        this.title = 'Restaurantes';
        this.subtitle = 'Pratos, lanches, pizzas e refeicoes completas com entrega rapida.';
        this.segment = 'Restaurante';
    }
    static { this.ɵfac = function RestaurantsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RestaurantsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestaurantsPageComponent, selectors: [["elide-restaurants-page"]], decls: 1, vars: 3, consts: [[3, "title", "subtitle", "segment"]], template: function RestaurantsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "elide-catalog-view", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.page.title)("subtitle", ctx.page.subtitle)("segment", ctx.page.segment);
        } }, dependencies: [CatalogViewComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestaurantsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-restaurants-page', imports: [CatalogViewComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<elide-catalog-view [title]=\"page.title\" [subtitle]=\"page.subtitle\" [segment]=\"page.segment\" />\n", styles: [":host {\n  display: block;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RestaurantsPageComponent, { className: "RestaurantsPageComponent", filePath: "src/app/pages/restaurants/restaurants.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=restaurants.component.js.map