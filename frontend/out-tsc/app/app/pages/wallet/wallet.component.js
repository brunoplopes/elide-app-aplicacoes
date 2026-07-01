import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
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
function WalletPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 8);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando carteira...");
    i0.ɵɵelementEnd()();
} }
function WalletPageComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6)(1, "mat-icon");
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
function WalletPageComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(entry_r2.amount));
} }
function WalletPageComponent_ForEmpty_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "mat-icon");
    i0.ɵɵtext(2, "account_balance_wallet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhum lancamento");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(0));
} }
export class WalletPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.balance = signal(0, ...(ngDevMode ? [{ debugName: "balance" }] : []));
        this.entries = signal([], ...(ngDevMode ? [{ debugName: "entries" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
    }
    ngOnInit() {
        this.loading.set(true);
        this.api.wallet().pipe(catchError(() => {
            this.message.set('Endpoint /customer/wallet ainda nao respondeu.');
            return of({ balance: 0, entries: [] });
        }), finalize(() => this.loading.set(false))).subscribe((wallet) => {
            this.balance.set(wallet.balance);
            this.entries.set(wallet.entries);
        });
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    static { this.ɵfac = function WalletPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WalletPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WalletPageComponent, selectors: [["elide-wallet-page"]], decls: 19, vars: 4, consts: [[1, "elide-section"], ["title", "Carteira", "description", "Gerencie saldo, reembolsos, cashback e formas de pagamento.", "actionLabel", "Pagamentos", "actionIcon", "payments", "actionLink", "/pagamentos"], [1, "customer-state"], [1, "wallet-grid"], [1, "balance-card"], [1, "panel-card"], [1, "customer-state", "error"], [1, "entry"], ["mode", "indeterminate", "diameter", "28"]], template: function WalletPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, WalletPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵelementStart(4, "div", 3)(5, "article", 4)(6, "span");
            i0.ɵɵtext(7, "Saldo disponivel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Cashback e reembolsos podem ser usados no checkout.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "article", 5)(13, "h2");
            i0.ɵɵtext(14, "Extrato");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(15, WalletPageComponent_Conditional_15_Template, 5, 1, "p", 6);
            i0.ɵɵrepeaterCreate(16, WalletPageComponent_For_17_Template, 7, 3, "div", 7, _forTrack0, false, WalletPageComponent_ForEmpty_18_Template, 7, 1, "div", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.balance()));
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.page.message() ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.page.entries());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, CustomerNavComponent], styles: ["[_nghost-%COMP%] { display: block; }\n.wallet-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: .8fr 1.2fr; gap: 1rem; }\n.balance-card[_ngcontent-%COMP%], .panel-card[_ngcontent-%COMP%] { border-radius: 8px; padding: 1.5rem; box-shadow: var(--elide-shadow-card); }\n.balance-card[_ngcontent-%COMP%] { background: var(--elide-ink); color: white; }\n.balance-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .balance-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: rgba(255,255,255,.72); }\n.balance-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; margin: .75rem 0 1.5rem; font-size: clamp(2rem, 5vw, 3.5rem); }\n.panel-card[_ngcontent-%COMP%] { border: 1px solid var(--elide-border); background: var(--elide-card); }\nh2[_ngcontent-%COMP%] { margin: 0 0 1rem; font-weight: 900; }\n.api-message[_ngcontent-%COMP%] { margin: 0 0 1rem; color: var(--elide-orange); font-weight: 800; }\n.entry[_ngcontent-%COMP%] { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .75rem; padding: .85rem 0; border-top: 1px solid var(--elide-border); }\n.entry[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n@media (max-width: 820px) { .wallet-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }\n\n@media (max-width: 560px) {\n  .balance-card[_ngcontent-%COMP%], \n   .panel-card[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .entry[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n  }\n\n  .entry[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WalletPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-wallet-page', imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading title=\"Carteira\" description=\"Gerencie saldo, reembolsos, cashback e formas de pagamento.\" actionLabel=\"Pagamentos\" actionIcon=\"payments\" actionLink=\"/pagamentos\" />\n  <elide-customer-nav />\n  @if (page.loading()) { <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Carregando carteira...</span></div> }\n  <div class=\"wallet-grid\">\n    <article class=\"balance-card\">\n      <span>Saldo disponivel</span>\n      <strong>{{ page.money(page.balance()) }}</strong>\n      <p>Cashback e reembolsos podem ser usados no checkout.</p>\n    </article>\n    <article class=\"panel-card\">\n      <h2>Extrato</h2>\n      @if (page.message()) { <p class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.message() }}</span></p> }\n      @for (entry of page.entries(); track entry.id) {\n        <div class=\"entry\"><mat-icon>{{ entry.icon }}</mat-icon><strong>{{ entry.title }}</strong><span>{{ page.money(entry.amount) }}</span></div>\n      } @empty {\n        <div class=\"entry\"><mat-icon>account_balance_wallet</mat-icon><strong>Nenhum lancamento</strong><span>{{ page.money(0) }}</span></div>\n      }\n    </article>\n  </div>\n</section>\n", styles: [":host { display: block; }\n.wallet-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 1rem; }\n.balance-card, .panel-card { border-radius: 8px; padding: 1.5rem; box-shadow: var(--elide-shadow-card); }\n.balance-card { background: var(--elide-ink); color: white; }\n.balance-card span, .balance-card p { color: rgba(255,255,255,.72); }\n.balance-card strong { display: block; margin: .75rem 0 1.5rem; font-size: clamp(2rem, 5vw, 3.5rem); }\n.panel-card { border: 1px solid var(--elide-border); background: var(--elide-card); }\nh2 { margin: 0 0 1rem; font-weight: 900; }\n.api-message { margin: 0 0 1rem; color: var(--elide-orange); font-weight: 800; }\n.entry { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .75rem; padding: .85rem 0; border-top: 1px solid var(--elide-border); }\n.entry mat-icon { color: var(--elide-orange); }\n@media (max-width: 820px) { .wallet-grid { grid-template-columns: 1fr; } }\n\n@media (max-width: 560px) {\n  .balance-card,\n  .panel-card {\n    padding: 1rem;\n  }\n\n  .entry {\n    grid-template-columns: auto 1fr;\n  }\n\n  .entry span {\n    grid-column: 2;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(WalletPageComponent, { className: "WalletPageComponent", filePath: "src/app/pages/wallet/wallet.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=wallet.component.js.map