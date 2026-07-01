import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import * as i0 from "@angular/core";
export class AppComponent {
    constructor() {
        this.theme = inject(ThemeService);
        this.theme.applyInitialTheme();
    }
    static { this.ɵfac = function AppComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["elide-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "router-outlet");
        } }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{
                selector: 'elide-root',
                imports: [RouterOutlet],
                template: '<router-outlet />',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=app.component.js.map