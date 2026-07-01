import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
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
const _c0 = () => ["/rastreamento"];
const _forTrack0 = ($index, $item) => $item.id;
function MyOrdersPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 7);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando pedidos...");
    i0.ɵɵelementEnd()();
} }
function MyOrdersPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
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
function MyOrdersPageComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 5)(1, "div")(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 8)(7, "button", 9);
    i0.ɵɵtext(8, "Recomprar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function MyOrdersPageComponent_For_7_Template_button_click_9_listener() { const order_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.cancel(order_r3.id)); });
    i0.ɵɵtext(10, "Cancelar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 10);
    i0.ɵɵlistener("click", function MyOrdersPageComponent_For_7_Template_button_click_11_listener() { const order_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.refund(order_r3.id)); });
    i0.ɵɵtext(12, "Reembolso");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "a", 11);
    i0.ɵɵtext(14, "Acompanhar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(15, "mat-progress-bar", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.page.shortId(order_r3.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.page.statusLabel(order_r3.status), " \u00B7 ", ctx_r0.page.money(order_r3.total));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r0.page.progress(order_r3.status));
} }
function MyOrdersPageComponent_ForEmpty_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 6)(1, "div")(2, "h2");
    i0.ɵɵtext(3, "Nenhum pedido encontrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Quando voce finalizar um pedido, ele aparecera aqui via API.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "a", 13);
    i0.ɵɵtext(7, "Fazer pedido");
    i0.ɵɵelementEnd()();
} }
export class MyOrdersPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.api.myOrders().pipe(catchError(() => {
            this.message.set('Nao foi possivel carregar /orders/mine.');
            return of([]);
        })).subscribe((orders) => {
            this.orders.set(orders);
            this.loading.set(false);
        });
    }
    statusLabel(status) {
        const labels = {
            CREATED: 'Criado',
            ACCEPTED: 'Aceito',
            PREPARING: 'Em preparo',
            READY_FOR_PICKUP: 'Pronto',
            OUT_FOR_DELIVERY: 'Saiu para entrega',
            DELIVERED: 'Entregue',
            CANCELLED: 'Cancelado',
            REFUND_REQUESTED: 'Reembolso solicitado',
            REFUNDED: 'Reembolsado'
        };
        return labels[status];
    }
    progress(status) {
        const values = {
            CREATED: 12,
            ACCEPTED: 28,
            PREPARING: 48,
            READY_FOR_PICKUP: 68,
            OUT_FOR_DELIVERY: 84,
            DELIVERED: 100,
            CANCELLED: 100,
            REFUND_REQUESTED: 100,
            REFUNDED: 100
        };
        return values[status];
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    shortId(id) {
        return `ELD-${id.slice(0, 6).toUpperCase()}`;
    }
    cancel(orderId) {
        this.api.cancelOrder(orderId, 'Cancelado pelo cliente.').subscribe({
            next: (order) => {
                this.orders.update((orders) => orders.map((item) => item.id === order.id ? order : item));
                this.message.set('Pedido cancelado.');
            },
            error: () => this.message.set('Nao foi possivel cancelar este pedido.')
        });
    }
    refund(orderId) {
        this.api.requestRefund(orderId, 'Solicitacao aberta pelo cliente.').subscribe({
            next: (order) => {
                this.orders.update((orders) => orders.map((item) => item.id === order.id ? order : item));
                this.message.set('Solicitacao de reembolso enviada.');
            },
            error: () => this.message.set('Nao foi possivel solicitar reembolso.')
        });
    }
    static { this.ɵfac = function MyOrdersPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MyOrdersPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyOrdersPageComponent, selectors: [["elide-my-orders-page"]], decls: 9, vars: 3, consts: [[1, "elide-section"], ["title", "Historico de pedidos", "description", "Acompanhe pedidos recentes, status, reembolso e recompra.", "actionLabel", "Rastrear atual", "actionIcon", "near_me", "actionLink", "/rastreamento"], [1, "customer-state"], [1, "customer-state", "error"], [1, "order-list"], [1, "order-card"], [1, "order-card", "empty-card"], ["mode", "indeterminate", "diameter", "28"], [1, "order-actions"], ["mat-button", "", "type", "button"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", 3, "routerLink"], ["mode", "determinate", 3, "value"], ["mat-flat-button", "", "routerLink", "/restaurantes"]], template: function MyOrdersPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, MyOrdersPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵconditionalCreate(4, MyOrdersPageComponent_Conditional_4_Template, 5, 1, "p", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵrepeaterCreate(6, MyOrdersPageComponent_For_7_Template, 16, 6, "article", 5, _forTrack0, false, MyOrdersPageComponent_ForEmpty_8_Template, 8, 0, "article", 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.message() ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.orders());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i10.MatProgressBar, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, CustomerNavComponent], styles: ["[_nghost-%COMP%] { display: block; }\n.order-list[_ngcontent-%COMP%] { display: grid; gap: 1rem; }\n.order-card[_ngcontent-%COMP%] { display: grid; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.2rem; box-shadow: var(--elide-shadow-card); }\nh2[_ngcontent-%COMP%] { margin: 0; font-size: 1.1rem; font-weight: 900; }\np[_ngcontent-%COMP%] { margin: .25rem 0 0; color: var(--elide-muted); }\n.api-message[_ngcontent-%COMP%] { margin-bottom: 1rem; color: var(--elide-orange); font-weight: 800; }\n.order-actions[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .5rem; }\n.order-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }\n\n@media (max-width: 560px) {\n  .order-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .order-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyOrdersPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-my-orders-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading title=\"Historico de pedidos\" description=\"Acompanhe pedidos recentes, status, reembolso e recompra.\" actionLabel=\"Rastrear atual\" actionIcon=\"near_me\" actionLink=\"/rastreamento\" />\n  <elide-customer-nav />\n  @if (page.loading()) { <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Carregando pedidos...</span></div> }\n  @if (page.message()) { <p class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.message() }}</span></p> }\n  <div class=\"order-list\">\n    @for (order of page.orders(); track order.id) {\n      <article class=\"order-card\">\n        <div>\n          <h2>{{ page.shortId(order.id) }}</h2>\n          <p>{{ page.statusLabel(order.status) }} \u00B7 {{ page.money(order.total) }}</p>\n        </div>\n        <div class=\"order-actions\">\n          <button mat-button type=\"button\">Recomprar</button>\n          <button mat-button type=\"button\" (click)=\"page.cancel(order.id)\">Cancelar</button>\n          <button mat-button type=\"button\" (click)=\"page.refund(order.id)\">Reembolso</button>\n          <a mat-flat-button [routerLink]=\"['/rastreamento']\">Acompanhar</a>\n        </div>\n        <mat-progress-bar mode=\"determinate\" [value]=\"page.progress(order.status)\" />\n      </article>\n    } @empty {\n      <article class=\"order-card empty-card\">\n        <div>\n          <h2>Nenhum pedido encontrado</h2>\n          <p>Quando voce finalizar um pedido, ele aparecera aqui via API.</p>\n        </div>\n        <a mat-flat-button routerLink=\"/restaurantes\">Fazer pedido</a>\n      </article>\n    }\n  </div>\n</section>\n", styles: [":host { display: block; }\n.order-list { display: grid; gap: 1rem; }\n.order-card { display: grid; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.2rem; box-shadow: var(--elide-shadow-card); }\nh2 { margin: 0; font-size: 1.1rem; font-weight: 900; }\np { margin: .25rem 0 0; color: var(--elide-muted); }\n.api-message { margin-bottom: 1rem; color: var(--elide-orange); font-weight: 800; }\n.order-actions { display: flex; flex-wrap: wrap; gap: .5rem; }\n.order-actions button:last-child { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }\n\n@media (max-width: 560px) {\n  .order-actions {\n    flex-direction: column;\n  }\n\n  .order-actions button {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyOrdersPageComponent, { className: "MyOrdersPageComponent", filePath: "src/app/pages/my-orders/my-orders.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=my-orders.component.js.map