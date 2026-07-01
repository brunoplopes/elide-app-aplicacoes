import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MATERIAL } from './page-kit';
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
const _c0 = a0 => ({ exact: a0 });
const _forTrack0 = ($index, $item) => $item.path;
function CustomerNavComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r1.path)("routerLinkActiveOptions", i0.ɵɵpureFunction1(4, _c0, item_r1.exact));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.label);
} }
export class CustomerNavComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.userName = computed(() => this.auth.profile()?.fullName || this.auth.profile()?.username || 'Cliente ELIDE', ...(ngDevMode ? [{ debugName: "userName" }] : []));
        this.items = [
            { label: 'Inicio', path: '/cliente', icon: 'dashboard', exact: true },
            { label: 'Perfil', path: '/perfil', icon: 'person', exact: true },
            { label: 'Enderecos', path: '/enderecos', icon: 'location_on', exact: true },
            { label: 'Pedidos', path: '/meus-pedidos', icon: 'receipt_long', exact: true },
            { label: 'Favoritos', path: '/favoritos', icon: 'favorite', exact: true },
            { label: 'Cupons', path: '/cupons', icon: 'sell', exact: true },
            { label: 'Carteira', path: '/carteira', icon: 'account_balance_wallet', exact: true },
            { label: 'Avaliacoes', path: '/avaliacoes', icon: 'star', exact: true },
            { label: 'Notificacoes', path: '/notificacoes', icon: 'notifications', exact: true },
            { label: 'Rastreamento', path: '/rastreamento', icon: 'near_me', exact: true }
        ];
    }
    logout() {
        this.auth.logout();
        void this.router.navigateByUrl('/login');
    }
    static { this.ɵfac = function CustomerNavComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CustomerNavComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomerNavComponent, selectors: [["elide-customer-nav"]], decls: 16, vars: 1, consts: [["aria-label", "Navegacao do cliente", 1, "customer-nav"], [1, "customer-user"], [1, "customer-links"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["mat-button", "", "type", "button", 1, "logout-button", 3, "click"]], template: function CustomerNavComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "mat-icon");
            i0.ɵɵtext(3, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "span")(5, "strong");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "small");
            i0.ɵɵtext(8, "Cliente ELIDE");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵrepeaterCreate(10, CustomerNavComponent_For_11_Template, 5, 6, "a", 3, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 4);
            i0.ɵɵlistener("click", function CustomerNavComponent_Template_button_click_12_listener() { return ctx.logout(); });
            i0.ɵɵelementStart(13, "mat-icon");
            i0.ɵɵtext(14, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(15, " Sair ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.userName());
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.items);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink, RouterLinkActive], styles: [".customer-nav[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: minmax(180px, auto) minmax(0, 1fr) auto;\n      align-items: center;\n      gap: .9rem;\n      margin: -1rem 0 1.5rem;\n      border: 1px solid var(--elide-border);\n      border-radius: 8px;\n      background: var(--elide-card);\n      padding: .85rem;\n      box-shadow: var(--elide-shadow-card);\n    }\n\n    .customer-user[_ngcontent-%COMP%], \n   .customer-links[_ngcontent-%COMP%], \n   .customer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .logout-button[_ngcontent-%COMP%] {\n      min-width: 0;\n    }\n\n    .customer-user[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: auto minmax(0, 1fr);\n      align-items: center;\n      gap: .65rem;\n      color: var(--elide-ink);\n    }\n\n    .customer-user[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n   .customer-links[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n   .logout-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      color: var(--elide-orange);\n    }\n\n    .customer-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      display: grid;\n      min-width: 0;\n    }\n\n    .customer-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .customer-user[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .customer-user[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      color: var(--elide-muted);\n    }\n\n    .customer-links[_ngcontent-%COMP%] {\n      display: flex;\n      gap: .45rem;\n      overflow-x: auto;\n      padding-bottom: .05rem;\n      scrollbar-width: thin;\n    }\n\n    .customer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: .35rem;\n      border: 1px solid transparent;\n      border-radius: 999px;\n      color: var(--elide-muted);\n      flex: 0 0 auto;\n      font-weight: 850;\n      padding: .55rem .7rem;\n      text-decoration: none;\n      transition: background .18s ease, border-color .18s ease, color .18s ease;\n    }\n\n    .customer-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], \n   .customer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      border-color: rgba(255, 107, 0, .22);\n      background: rgba(255, 107, 0, .08);\n      color: var(--elide-orange);\n    }\n\n    .customer-links[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 1rem;\n      height: 1rem;\n      width: 1rem;\n    }\n\n    .logout-button[_ngcontent-%COMP%] {\n      border-radius: 999px !important;\n      color: var(--elide-orange) !important;\n      font-weight: 900 !important;\n      white-space: nowrap;\n    }\n\n    .dark[_nghost-%COMP%]   .customer-user[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .customer-user[_ngcontent-%COMP%] {\n      color: white;\n    }\n\n    @media (max-width: 760px) {\n      .customer-nav[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr auto;\n      }\n\n      .customer-links[_ngcontent-%COMP%] {\n        grid-column: 1 / -1;\n        order: 3;\n      }\n    }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomerNavComponent, [{
        type: Component,
        args: [{ selector: 'elide-customer-nav', imports: [...MATERIAL, RouterLink, RouterLinkActive], template: `
    <nav class="customer-nav" aria-label="Navegacao do cliente">
      <div class="customer-user">
        <mat-icon>account_circle</mat-icon>
        <span>
          <strong>{{ userName() }}</strong>
          <small>Cliente ELIDE</small>
        </span>
      </div>

      <div class="customer-links">
        @for (item of items; track item.path) {
          <a [routerLink]="item.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: item.exact }">
            <mat-icon>{{ item.icon }}</mat-icon>
            <span>{{ item.label }}</span>
          </a>
        }
      </div>

      <button mat-button type="button" class="logout-button" (click)="logout()">
        <mat-icon>logout</mat-icon>
        Sair
      </button>
    </nav>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    .customer-nav {\n      display: grid;\n      grid-template-columns: minmax(180px, auto) minmax(0, 1fr) auto;\n      align-items: center;\n      gap: .9rem;\n      margin: -1rem 0 1.5rem;\n      border: 1px solid var(--elide-border);\n      border-radius: 8px;\n      background: var(--elide-card);\n      padding: .85rem;\n      box-shadow: var(--elide-shadow-card);\n    }\n\n    .customer-user,\n    .customer-links,\n    .customer-links a,\n    .logout-button {\n      min-width: 0;\n    }\n\n    .customer-user {\n      display: grid;\n      grid-template-columns: auto minmax(0, 1fr);\n      align-items: center;\n      gap: .65rem;\n      color: var(--elide-ink);\n    }\n\n    .customer-user mat-icon,\n    .customer-links mat-icon,\n    .logout-button mat-icon {\n      color: var(--elide-orange);\n    }\n\n    .customer-user span {\n      display: grid;\n      min-width: 0;\n    }\n\n    .customer-user strong,\n    .customer-user small {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .customer-user small {\n      color: var(--elide-muted);\n    }\n\n    .customer-links {\n      display: flex;\n      gap: .45rem;\n      overflow-x: auto;\n      padding-bottom: .05rem;\n      scrollbar-width: thin;\n    }\n\n    .customer-links a {\n      display: inline-flex;\n      align-items: center;\n      gap: .35rem;\n      border: 1px solid transparent;\n      border-radius: 999px;\n      color: var(--elide-muted);\n      flex: 0 0 auto;\n      font-weight: 850;\n      padding: .55rem .7rem;\n      text-decoration: none;\n      transition: background .18s ease, border-color .18s ease, color .18s ease;\n    }\n\n    .customer-links a.active,\n    .customer-links a:hover {\n      border-color: rgba(255, 107, 0, .22);\n      background: rgba(255, 107, 0, .08);\n      color: var(--elide-orange);\n    }\n\n    .customer-links mat-icon {\n      font-size: 1rem;\n      height: 1rem;\n      width: 1rem;\n    }\n\n    .logout-button {\n      border-radius: 999px !important;\n      color: var(--elide-orange) !important;\n      font-weight: 900 !important;\n      white-space: nowrap;\n    }\n\n    :host-context(.dark) .customer-user {\n      color: white;\n    }\n\n    @media (max-width: 760px) {\n      .customer-nav {\n        grid-template-columns: 1fr auto;\n      }\n\n      .customer-links {\n        grid-column: 1 / -1;\n        order: 3;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CustomerNavComponent, { className: "CustomerNavComponent", filePath: "src/app/pages/shared/customer-nav.component.ts", lineNumber: 144 }); })();
//# sourceMappingURL=customer-nav.component.js.map