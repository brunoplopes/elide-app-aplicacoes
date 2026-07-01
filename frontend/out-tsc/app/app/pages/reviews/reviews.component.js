import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
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
function ReviewsPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 6);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando pedidos para avaliar...");
    i0.ɵɵelementEnd()();
} }
function ReviewsPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3)(1, "mat-icon");
    i0.ɵɵtext(2, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function ReviewsPageComponent_For_7_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "star");
    i0.ɵɵelementEnd();
} }
function ReviewsPageComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 5)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵrepeaterCreate(6, ReviewsPageComponent_For_7_For_7_Template, 2, 0, "mat-icon", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 8)(9, "mat-label");
    i0.ɵɵtext(10, "Comentario");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "textarea", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 10);
    i0.ɵɵlistener("click", function ReviewsPageComponent_For_7_Template_button_click_12_listener() { const order_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.send(order_r3)); });
    i0.ɵɵtext(13, "Enviar avaliacao");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.shortId(order_r3.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.page.stars);
} }
function ReviewsPageComponent_ForEmpty_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 5)(1, "h2");
    i0.ɵɵtext(2, "Nenhum pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Pedidos retornados por /orders/mine aparecerao aqui.");
    i0.ɵɵelementEnd()();
} }
function ReviewsPageComponent_ForEmpty_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ReviewsPageComponent_ForEmpty_8_Conditional_0_Template, 5, 0, "article", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(!ctx_r0.page.loading() ? 0 : -1);
} }
export class ReviewsPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : []));
        this.reviews = signal([], ...(ngDevMode ? [{ debugName: "reviews" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.stars = [1, 2, 3, 4, 5];
    }
    ngOnInit() {
        this.loading.set(true);
        forkJoin({
            orders: this.api.myOrders().pipe(catchError(() => of([]))),
            reviews: this.api.reviews().pipe(catchError(() => {
                this.message.set('Endpoint /customer/reviews ainda nao respondeu.');
                return of([]);
            }))
        }).pipe(finalize(() => this.loading.set(false))).subscribe(({ orders, reviews }) => {
            this.orders.set(orders);
            this.reviews.set(reviews);
        });
    }
    send(order) {
        this.api.createReview({ orderId: order.id, rating: 5, comment: 'Otima experiencia.' }).subscribe({
            next: (review) => this.reviews.update((reviews) => [review, ...reviews]),
            error: () => this.message.set('Nao foi possivel enviar a avaliacao para a API.')
        });
    }
    shortId(id) {
        return `ELD-${id.slice(0, 6).toUpperCase()}`;
    }
    static { this.ɵfac = function ReviewsPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReviewsPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ReviewsPageComponent, selectors: [["elide-reviews-page"]], decls: 9, vars: 3, consts: [[1, "elide-section"], ["title", "Avaliacoes", "description", "Avalie pedidos, lojas e entregadores para melhorar a experiencia da cidade."], [1, "customer-state"], [1, "customer-state", "error"], [1, "review-grid"], [1, "review-card"], ["mode", "indeterminate", "diameter", "28"], [1, "stars"], ["appearance", "outline"], ["matInput", "", "rows", "3"], ["mat-flat-button", "", "type", "button", 3, "click"]], template: function ReviewsPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, ReviewsPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵconditionalCreate(4, ReviewsPageComponent_Conditional_4_Template, 5, 1, "p", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵrepeaterCreate(6, ReviewsPageComponent_For_7_Template, 14, 2, "article", 5, _forTrack0, false, ReviewsPageComponent_ForEmpty_8_Template, 1, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.message() ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.orders());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, CustomerNavComponent], styles: ["[_nghost-%COMP%] { display: block; }\n.review-grid[_ngcontent-%COMP%] { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }\n.review-card[_ngcontent-%COMP%] { display: grid; gap: .85rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1rem; box-shadow: var(--elide-shadow-card); }\nh2[_ngcontent-%COMP%], p[_ngcontent-%COMP%] { margin: 0; }\np[_ngcontent-%COMP%] { color: var(--elide-muted); }\n.api-message[_ngcontent-%COMP%] { margin: 0 0 1rem; color: var(--elide-orange); font-weight: 800; }\n.stars[_ngcontent-%COMP%] { color: var(--elide-orange); }\nbutton[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReviewsPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-reviews-page', imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading title=\"Avaliacoes\" description=\"Avalie pedidos, lojas e entregadores para melhorar a experiencia da cidade.\" />\n  <elide-customer-nav />\n  @if (page.loading()) { <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Carregando pedidos para avaliar...</span></div> }\n  @if (page.message()) { <p class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.message() }}</span></p> }\n  <div class=\"review-grid\">\n    @for (order of page.orders(); track order.id) {\n      <article class=\"review-card\">\n        <h2>{{ page.shortId(order.id) }}</h2>\n        <p>{{ order.status }}</p>\n        <div class=\"stars\">@for (star of page.stars; track star) { <mat-icon>star</mat-icon> }</div>\n        <mat-form-field appearance=\"outline\"><mat-label>Comentario</mat-label><textarea matInput rows=\"3\"></textarea></mat-form-field>\n        <button mat-flat-button type=\"button\" (click)=\"page.send(order)\">Enviar avaliacao</button>\n      </article>\n    } @empty {\n      @if (!page.loading()) {\n      <article class=\"review-card\">\n        <h2>Nenhum pedido</h2>\n        <p>Pedidos retornados por /orders/mine aparecerao aqui.</p>\n      </article>\n      }\n    }\n  </div>\n</section>\n", styles: [":host { display: block; }\n.review-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }\n.review-card { display: grid; gap: .85rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1rem; box-shadow: var(--elide-shadow-card); }\nh2, p { margin: 0; }\np { color: var(--elide-muted); }\n.api-message { margin: 0 0 1rem; color: var(--elide-orange); font-weight: 800; }\n.stars { color: var(--elide-orange); }\nbutton { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ReviewsPageComponent, { className: "ReviewsPageComponent", filePath: "src/app/pages/reviews/reviews.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=reviews.component.js.map