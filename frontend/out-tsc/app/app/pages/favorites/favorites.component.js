import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
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
function FavoritesPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "mat-progress-spinner", 6);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando favoritos...");
    i0.ɵɵelementEnd()();
} }
function FavoritesPageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
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
function FavoritesPageComponent_Conditional_5_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 7);
} if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r2.label)("value", metric_r2.value)("icon", metric_r2.icon);
} }
function FavoritesPageComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, FavoritesPageComponent_Conditional_5_For_2_Template, 1, 3, "elide-metric-card", 7, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().metrics);
} }
function FavoritesPageComponent_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", action_r3.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r3.description);
} }
function FavoritesPageComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, FavoritesPageComponent_Conditional_6_For_2_Template, 7, 4, "a", 8, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().actions);
} }
function FavoritesPageComponent_Conditional_7_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r4.meta);
} }
function FavoritesPageComponent_Conditional_7_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function FavoritesPageComponent_Conditional_7_For_2_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const card_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(card_r4.action === "Remover" ? ctx_r0.page.remove(card_r4.path ?? "") : ctx_r0.page.add(card_r4.path ?? "")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", card_r4.action, " ");
} }
function FavoritesPageComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 9)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, FavoritesPageComponent_Conditional_7_For_2_Conditional_7_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(8, FavoritesPageComponent_Conditional_7_For_2_Conditional_8_Template, 2, 1, "button", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r4.meta ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(card_r4.action ? 8 : -1);
} }
function FavoritesPageComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵrepeaterCreate(1, FavoritesPageComponent_Conditional_7_For_2_Template, 9, 5, "article", 9, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().cards);
} }
function FavoritesPageComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "article", 9)(2, "mat-icon");
    i0.ɵɵtext(3, "favorite_border");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Nenhum favorito");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Favorite lojas para voltar ao pedido com menos passos.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 12);
    i0.ɵɵtext(9, "Explorar lojas");
    i0.ɵɵelementEnd()()();
} }
export class FavoritesPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.page = this;
        this.favorites = signal([], ...(ngDevMode ? [{ debugName: "favorites" }] : []));
        this.stores = signal([], ...(ngDevMode ? [{ debugName: "stores" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.vm = computed(() => ({
            eyebrow: 'Preferencias',
            title: 'Favoritos',
            description: 'Acesse rapidamente lojas e produtos que combinam com sua rotina.',
            cards: this.cards()
        }), ...(ngDevMode ? [{ debugName: "vm" }] : []));
    }
    ngOnInit() {
        this.api.favorites().pipe(catchError(() => {
            this.message.set('Endpoint /customer/favorites ainda nao respondeu; exibindo lojas do catalogo.');
            return of([]);
        })).subscribe((favorites) => this.favorites.set(favorites));
        this.api.stores().pipe(catchError(() => of({ content: [], totalElements: 0, totalPages: 0, number: 0 }))).subscribe((stores) => {
            this.stores.set(stores.content);
            this.loading.set(false);
        });
    }
    remove(storeId) {
        this.api.removeFavorite(storeId).pipe(catchError(() => of(undefined))).subscribe(() => {
            this.favorites.update((favorites) => favorites.filter((favorite) => favorite.storeId !== storeId));
        });
    }
    cards() {
        const favorites = this.favorites();
        if (favorites.length) {
            return favorites.map((favorite) => ({
                title: favorite.storeName,
                description: `${favorite.segment} · ${favorite.open ? 'Aberto agora' : 'Fechado'} · ${this.money(favorite.deliveryFee)}`,
                icon: 'favorite',
                action: 'Remover',
                path: favorite.storeId
            }));
        }
        return this.stores().slice(0, 6).map((store) => ({
            title: store.name,
            description: `${store.segment} · ${store.open ? 'Aberto agora' : 'Fechado'} · ${this.money(store.deliveryFee)}`,
            icon: 'favorite_border',
            action: 'Favoritar',
            path: store.id
        }));
    }
    add(storeId) {
        if (!storeId) {
            return;
        }
        this.api.addFavorite(storeId).subscribe({
            next: (favorite) => {
                this.favorites.update((favorites) => [favorite, ...favorites.filter((item) => item.storeId !== favorite.storeId)]);
                this.message.set('Loja adicionada aos favoritos.');
            },
            error: () => this.message.set('Nao foi possivel adicionar favorito na API.')
        });
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    static { this.ɵfac = function FavoritesPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FavoritesPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavoritesPageComponent, selectors: [["favorites-page"]], decls: 9, vars: 11, consts: [[1, "elide-section"], [3, "eyebrow", "title", "description", "actionLabel", "actionIcon", "actionLink"], [1, "customer-state"], [1, "customer-state", "error"], [1, "metric-grid"], [1, "action-grid"], ["mode", "indeterminate", "diameter", "28"], [3, "label", "value", "icon"], [1, "feature-card", 3, "routerLink"], [1, "feature-card"], ["mat-button", "", "type", "button"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "button", "routerLink", "/restaurantes"]], template: function FavoritesPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, FavoritesPageComponent_Conditional_3_Template, 4, 0, "div", 2);
            i0.ɵɵconditionalCreate(4, FavoritesPageComponent_Conditional_4_Template, 5, 1, "p", 3);
            i0.ɵɵconditionalCreate(5, FavoritesPageComponent_Conditional_5_Template, 3, 0, "div", 4);
            i0.ɵɵconditionalCreate(6, FavoritesPageComponent_Conditional_6_Template, 3, 0, "div", 5);
            i0.ɵɵconditionalCreate(7, FavoritesPageComponent_Conditional_7_Template, 3, 0, "div", 5)(8, FavoritesPageComponent_Conditional_8_Template, 10, 0, "div", 5);
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
            i0.ɵɵconditional(ctx.page.message() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_8_0 = ctx.page.vm().metrics) == null ? null : tmp_8_0.length) ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_9_0 = ctx.page.vm().actions) == null ? null : tmp_9_0.length) ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_10_0 = ctx.page.vm().cards) == null ? null : tmp_10_0.length) ? 7 : !ctx.page.loading() ? 8 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.feature-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  min-height: 40px;\n  border-radius: 12px;\n  font-weight: 900;\n}\n\n@media (max-width: 560px) {\n  .feature-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoritesPageComponent, [{
        type: Component,
        args: [{ selector: 'favorites-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    [eyebrow]=\"page.vm().eyebrow\"\n    [title]=\"page.vm().title\"\n    [description]=\"page.vm().description\"\n    [actionLabel]=\"page.vm().actionLabel ?? ''\"\n    [actionIcon]=\"page.vm().actionIcon ?? 'arrow_forward'\"\n    [actionLink]=\"page.vm().actionLink ?? '/'\"\n  />\n\n  <elide-customer-nav />\n\n  @if (page.loading()) { <div class=\"customer-state\"><mat-progress-spinner mode=\"indeterminate\" diameter=\"28\"></mat-progress-spinner><span>Carregando favoritos...</span></div> }\n  @if (page.message()) { <p class=\"customer-state error\"><mat-icon>info</mat-icon><span>{{ page.message() }}</span></p> }\n\n  @if (page.vm().metrics?.length) {\n    <div class=\"metric-grid\">\n      @for (metric of page.vm().metrics; track metric.label) {\n        <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n      }\n    </div>\n  }\n\n  @if (page.vm().actions?.length) {\n    <div class=\"action-grid\">\n      @for (action of page.vm().actions; track action.path) {\n        <a class=\"feature-card\" [routerLink]=\"action.path\">\n          <mat-icon>{{ action.icon }}</mat-icon>\n          <strong>{{ action.label }}</strong>\n          <span>{{ action.description }}</span>\n        </a>\n      }\n    </div>\n  }\n\n  @if (page.vm().cards?.length) {\n    <div class=\"action-grid\">\n      @for (card of page.vm().cards; track card.title) {\n        <article class=\"feature-card\">\n          <mat-icon>{{ card.icon }}</mat-icon>\n          <strong>{{ card.title }}</strong>\n          <span>{{ card.description }}</span>\n          @if (card.meta) { <small>{{ card.meta }}</small> }\n          @if (card.action) {\n            <button mat-button type=\"button\" (click)=\"card.action === 'Remover' ? page.remove(card.path ?? '') : page.add(card.path ?? '')\">\n              {{ card.action }}\n            </button>\n          }\n        </article>\n      }\n    </div>\n  } @else if (!page.loading()) {\n    <div class=\"action-grid\"><article class=\"feature-card\"><mat-icon>favorite_border</mat-icon><strong>Nenhum favorito</strong><span>Favorite lojas para voltar ao pedido com menos passos.</span><button mat-button type=\"button\" routerLink=\"/restaurantes\">Explorar lojas</button></article></div>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.api-message {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.feature-card button {\n  align-self: flex-start;\n  min-height: 40px;\n  border-radius: 12px;\n  font-weight: 900;\n}\n\n@media (max-width: 560px) {\n  .feature-card button {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FavoritesPageComponent, { className: "FavoritesPageComponent", filePath: "src/app/pages/favorites/favorites.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=favorites.component.js.map