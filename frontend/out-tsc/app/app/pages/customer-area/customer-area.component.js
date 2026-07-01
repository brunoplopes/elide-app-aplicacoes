import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, forkJoin, of } from 'rxjs';
import { CustomerApiService } from '../../services/customer-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import { MATERIAL } from '../shared/page-kit';
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
function CustomerAreaPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 6);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Atualizando seus dados...");
    i0.ɵɵelementEnd()();
} }
function CustomerAreaPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "mat-icon");
    i0.ɵɵtext(2, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 7);
    i0.ɵɵlistener("click", function CustomerAreaPageComponent_Conditional_4_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.load()); });
    i0.ɵɵtext(6, "Atualizar");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.error());
} }
function CustomerAreaPageComponent_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 8);
} if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r3.label)("value", metric_r3.value)("icon", metric_r3.icon);
} }
function CustomerAreaPageComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, CustomerAreaPageComponent_Conditional_5_For_2_Template, 1, 3, "elide-metric-card", 8, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.vm().metrics);
} }
function CustomerAreaPageComponent_Conditional_6_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", action_r4.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r4.description);
} }
function CustomerAreaPageComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2", 9);
    i0.ɵɵtext(1, "Acoes do cliente");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵrepeaterCreate(3, CustomerAreaPageComponent_Conditional_6_For_4_Template, 7, 4, "a", 10, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.page.vm().actions);
} }
function CustomerAreaPageComponent_Conditional_7_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r5.meta);
} }
function CustomerAreaPageComponent_Conditional_7_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r5.action);
} }
function CustomerAreaPageComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 11)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, CustomerAreaPageComponent_Conditional_7_For_2_Conditional_7_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(8, CustomerAreaPageComponent_Conditional_7_For_2_Conditional_8_Template, 2, 1, "button", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r5.meta ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r5.action ? 8 : -1);
} }
function CustomerAreaPageComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, CustomerAreaPageComponent_Conditional_7_For_2_Template, 9, 5, "article", 11, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.vm().cards);
} }
export class CustomerAreaPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.metrics = signal([
            { label: 'Pedidos', value: '0', icon: 'receipt_long' },
            { label: 'Cupons ativos', value: '0', icon: 'sell' },
            { label: 'Saldo', value: 'R$ 0,00', icon: 'account_balance_wallet' },
            { label: 'Favoritos', value: '0', icon: 'favorite' }
        ], ...(ngDevMode ? [{ debugName: "metrics" }] : []));
        this.vm = computed(() => ({
            eyebrow: 'Area do cliente',
            title: 'Area do Cliente',
            description: this.loading() ? 'Sincronizando seus dados com a API.' : 'Tudo que voce precisa para pedir, pagar, acompanhar e avaliar suas entregas com menos atrito.',
            actionLabel: 'Novo pedido',
            actionLink: '/restaurantes',
            actionIcon: 'restaurant',
            metrics: this.metrics(),
            actions: [
                { label: 'Editar perfil', path: '/perfil', icon: 'person', description: 'Dados pessoais e contato' },
                { label: 'Alterar senha', path: '/alterar-senha', icon: 'lock_reset', description: 'Seguranca da conta' },
                { label: 'Enderecos', path: '/enderecos', icon: 'location_on', description: 'Locais de entrega' },
                { label: 'Historico', path: '/meus-pedidos', icon: 'receipt_long', description: 'Pedidos e recompra' },
                { label: 'Favoritos', path: '/favoritos', icon: 'favorite', description: 'Lojas preferidas' },
                { label: 'Cupons', path: '/cupons', icon: 'sell', description: 'Descontos ativos' },
                { label: 'Carteira', path: '/carteira', icon: 'account_balance_wallet', description: 'Saldo e extrato' },
                { label: 'Avaliacoes', path: '/avaliacoes', icon: 'star', description: 'Notas e comentarios' },
                { label: 'Notificacoes', path: '/notificacoes', icon: 'notifications', description: 'Alertas importantes' },
                { label: 'Pagamentos', path: '/pagamentos', icon: 'payments', description: 'Central de metodos' },
                { label: 'PIX', path: '/pagamentos/pix', icon: 'qr_code_2', description: 'QR Code e copia e cola' },
                { label: 'Cartao', path: '/pagamentos/cartao', icon: 'credit_card', description: 'Credito ou debito' },
                { label: 'Dinheiro', path: '/pagamentos/dinheiro', icon: 'payments', description: 'Troco na entrega' },
                { label: 'Rastreamento', path: '/rastreamento', icon: 'near_me', description: 'Entrega ao vivo' }
            ]
        }), ...(ngDevMode ? [{ debugName: "vm" }] : []));
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set(null);
        forkJoin({
            summary: this.api.summary().pipe(catchError(() => of(null))),
            orders: this.api.myOrders().pipe(catchError(() => of([]))),
            coupons: this.api.coupons().pipe(catchError(() => of([]))),
            wallet: this.api.wallet().pipe(catchError(() => of({ balance: 0, entries: [] }))),
            favorites: this.api.favorites().pipe(catchError(() => of([])))
        }).subscribe(({ summary, orders, coupons, wallet, favorites }) => {
            this.metrics.set([
                { label: 'Pedidos', value: String(summary?.orders ?? orders.length), icon: 'receipt_long' },
                { label: 'Cupons ativos', value: String(summary?.activeCoupons ?? coupons.filter((coupon) => coupon.active).length), icon: 'sell' },
                { label: 'Saldo', value: this.money(summary?.walletBalance ?? wallet.balance), icon: 'account_balance_wallet' },
                { label: 'Favoritos', value: String(summary?.favorites ?? favorites.length), icon: 'favorite' }
            ]);
            this.loading.set(false);
            if (!summary) {
                this.error.set('Alguns endpoints de cliente ainda nao responderam; exibindo dados disponiveis.');
            }
        });
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    static { this.ɵfac = function CustomerAreaPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CustomerAreaPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomerAreaPageComponent, selectors: [["customer-area-page"]], decls: 8, vars: 11, consts: [[1, "elide-section"], [3, "eyebrow", "title", "description", "actionLabel", "actionIcon", "actionLink"], [1, "customer-state"], [1, "customer-state", "error"], [1, "metric-grid"], [1, "action-grid"], ["mode", "indeterminate", "diameter", "28"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "value", "icon"], [1, "section-title"], [1, "feature-card", 3, "routerLink"], [1, "feature-card"], ["mat-button", "", "type", "button"]], template: function CustomerAreaPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, CustomerAreaPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵconditionalCreate(4, CustomerAreaPageComponent_Conditional_4_Template, 7, 1, "div", 3);
            i0.ɵɵconditionalCreate(5, CustomerAreaPageComponent_Conditional_5_Template, 3, 0, "div", 4);
            i0.ɵɵconditionalCreate(6, CustomerAreaPageComponent_Conditional_6_Template, 5, 0);
            i0.ɵɵconditionalCreate(7, CustomerAreaPageComponent_Conditional_7_Template, 3, 0, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_8_0;
            let tmp_9_0;
            let tmp_10_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("eyebrow", ctx.page.vm().eyebrow)("title", ctx.page.vm().title)("description", ctx.page.vm().description)("actionLabel", ctx.page.vm().actionLabel ?? "")("actionIcon", ctx.page.vm().actionIcon ?? "arrow_forward")("actionLink", ctx.page.vm().actionLink ?? "/");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.error() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_8_0 = ctx.page.vm().metrics) == null ? null : tmp_8_0.length) ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_9_0 = ctx.page.vm().actions) == null ? null : tmp_9_0.length) ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_10_0 = ctx.page.vm().cards) == null ? null : tmp_10_0.length) ? 7 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.api-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid rgba(255, 107, 0, .22);\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: .85rem 1rem;\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.api-note[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.api-note[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.customer-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  margin: 1.5rem 0 1rem;\n  color: var(--elide-ink);\n  font-size: 1.2rem;\n  font-weight: 900;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerAreaPageComponent, [{
        type: Component,
        args: [{ selector: 'customer-area-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    [eyebrow]=\"page.vm().eyebrow\"\n    [title]=\"page.vm().title\"\n    [description]=\"page.vm().description\"\n    [actionLabel]=\"page.vm().actionLabel ?? ''\"\n    [actionIcon]=\"page.vm().actionIcon ?? 'arrow_forward'\"\n    [actionLink]=\"page.vm().actionLink ?? '/'\"\n  />\n\n  <elide-customer-nav />\n\n  @if (page.loading()) {\n    <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Atualizando seus dados...</span></div>\n  }\n\n  @if (page.error()) {\n    <div class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.error() }}</span><button mat-button type=\"button\" (click)=\"page.load()\">Atualizar</button></div>\n  }\n\n  @if (page.vm().metrics?.length) {\n    <div class=\"metric-grid\">\n      @for (metric of page.vm().metrics; track metric.label) {\n        <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n      }\n    </div>\n  }\n\n  @if (page.vm().actions?.length) {\n    <h2 class=\"section-title\">Acoes do cliente</h2>\n    <div class=\"action-grid\">\n      @for (action of page.vm().actions; track action.path) {\n        <a class=\"feature-card\" [routerLink]=\"action.path\">\n          <mat-icon>{{ action.icon }}</mat-icon>\n          <strong>{{ action.label }}</strong>\n          <span>{{ action.description }}</span>\n        </a>\n      }\n    </div>\n  }\n\n  @if (page.vm().cards?.length) {\n    <div class=\"action-grid\">\n      @for (card of page.vm().cards; track card.title) {\n        <article class=\"feature-card\">\n          <mat-icon>{{ card.icon }}</mat-icon>\n          <strong>{{ card.title }}</strong>\n          <span>{{ card.description }}</span>\n          @if (card.meta) { <small>{{ card.meta }}</small> }\n          @if (card.action) { <button mat-button type=\"button\">{{ card.action }}</button> }\n        </article>\n      }\n    </div>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.api-note {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid rgba(255, 107, 0, .22);\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: .85rem 1rem;\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.api-note mat-icon {\n  color: var(--elide-orange);\n}\n\n.api-note button {\n  margin-left: auto;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.customer-state button {\n  margin-left: auto;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.section-title {\n  margin: 1.5rem 0 1rem;\n  color: var(--elide-ink);\n  font-size: 1.2rem;\n  font-weight: 900;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomerAreaPageComponent, { className: "CustomerAreaPageComponent", filePath: "src/app/pages/customer-area/customer-area.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=customer-area.component.js.map