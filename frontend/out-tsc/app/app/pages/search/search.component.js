import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, finalize, of, switchMap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MATERIAL, categories as deliveryCategories } from '../shared/page-kit';
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
const _c0 = a0 => ["/produto", a0];
const _c1 = () => ["/busca"];
const _c2 = a0 => ({ q: a0 });
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.id;
function SearchPageComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", category_r1.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1.title);
} }
function SearchPageComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 8);
    i0.ɵɵelement(1, "mat-progress-spinner", 17);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Buscando opcoes para voce...");
    i0.ɵɵelementEnd()();
} }
function SearchPageComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9)(1, "mat-icon");
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.errorMessage());
} }
function SearchPageComponent_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 13)(1, "div", 18)(2, "mat-icon");
    i0.ɵɵtext(3, "storefront");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "a", 19);
    i0.ɵɵtext(11, "Ver produtos");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const store_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(store_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", store_r3.segment, " \u00B7 ", ctx_r1.page.distance(store_r3));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", store_r3.open ? "Aberta agora" : "Fechada", " \u00B7 Entrega ", ctx_r1.page.money(store_r3.deliveryFee));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, store_r3.id));
} }
function SearchPageComponent_ForEmpty_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 14)(1, "mat-icon");
    i0.ɵɵtext(2, "storefront");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhuma loja encontrada");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Tente buscar por restaurantes, mercados, farmacias ou outra categoria.");
    i0.ɵɵelementEnd()();
} }
function SearchPageComponent_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r5 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c1))("queryParams", i0.ɵɵpureFunction1(5, _c2, category_r5.name));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r5.name);
} }
function SearchPageComponent_ForEmpty_33_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 20)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", category_r4.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r4.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r4.title);
} }
function SearchPageComponent_ForEmpty_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SearchPageComponent_ForEmpty_33_For_1_Template, 5, 3, "a", 20, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.page.suggestedCategories);
} }
function SearchPageComponent_For_42_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const product_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", product_r6.addons == null ? null : product_r6.addons.length, " adicional(is) disponiveis");
} }
function SearchPageComponent_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 13)(1, "div", 18)(2, "mat-icon");
    i0.ɵɵtext(3, "restaurant_menu");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, SearchPageComponent_For_42_Conditional_10_Template, 2, 1, "small");
    i0.ɵɵelementStart(11, "a", 19);
    i0.ɵɵtext(12, "Ver loja");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(product_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r6.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(product_r6.price));
    i0.ɵɵadvance();
    i0.ɵɵconditional((product_r6.addons == null ? null : product_r6.addons.length) ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, product_r6.storeId));
} }
function SearchPageComponent_ForEmpty_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 14)(1, "mat-icon");
    i0.ɵɵtext(2, "search_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhum produto encontrado");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Produtos relacionados aparecem aqui quando houver resultados.");
    i0.ɵɵelementEnd()();
} }
const emptyStores = { content: [], totalElements: 0, totalPages: 0, number: 0 };
const emptyProducts = { content: [], totalElements: 0, totalPages: 0, number: 0 };
export class SearchPageComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.router = inject(Router);
        this.api = inject(ApiService);
        this.page = this;
        this.query = signal('', ...(ngDevMode ? [{ debugName: "query" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.errorMessage = signal('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : []));
        this.stores = signal(emptyStores, ...(ngDevMode ? [{ debugName: "stores" }] : []));
        this.products = signal(emptyProducts, ...(ngDevMode ? [{ debugName: "products" }] : []));
        this.categories = signal([], ...(ngDevMode ? [{ debugName: "categories" }] : []));
        this.suggestedCategories = deliveryCategories;
        this.searchControl = new FormControl('', { nonNullable: true });
    }
    ngOnInit() {
        this.route.queryParamMap.pipe(switchMap((params) => {
            const q = params.get('q') ?? '';
            this.query.set(q);
            this.searchControl.setValue(q, { emitEvent: false });
            this.loading.set(true);
            this.errorMessage.set('');
            return this.api.searchCatalog(q).pipe(catchError(() => {
                this.errorMessage.set('Nao foi possivel carregar a busca agora.');
                return of({ stores: emptyStores, products: emptyProducts, categories: [] });
            }), finalize(() => this.loading.set(false)));
        })).subscribe((result) => {
            this.stores.set(result.stores);
            this.products.set(result.products);
            this.categories.set(result.categories);
        });
    }
    search() {
        const q = this.searchControl.value.trim();
        this.router.navigate(['/busca'], q ? { queryParams: { q } } : undefined);
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    distance(store) {
        if (store.distanceMeters === null || store.distanceMeters === undefined) {
            return 'Perto de voce';
        }
        if (store.distanceMeters < 1000) {
            return `${Math.round(store.distanceMeters)} m`;
        }
        return `${(store.distanceMeters / 1000).toFixed(1).replace('.', ',')} km`;
    }
    static { this.ɵfac = function SearchPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SearchPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SearchPageComponent, selectors: [["elide-search-page"]], decls: 44, vars: 9, consts: [[1, "search-page"], ["eyebrow", "Busca", "title", "Pesquisar", "description", "Encontre restaurantes, mercados, farmacias, padarias, lanchonetes, acougues, pet shops, produtos e categorias."], [1, "search-panel"], [1, "search-box", 3, "ngSubmit"], ["placeholder", "Buscar restaurante, produto ou categoria", 3, "formControl"], ["mat-flat-button", "", "type", "submit"], ["aria-label", "Categorias principais", 1, "quick-categories"], [3, "routerLink"], [1, "feedback-state"], [1, "feedback-state", "error"], [1, "panel"], [1, "panel-heading"], [1, "result-grid"], [1, "result-card"], [1, "empty-state"], [1, "chip-grid"], [1, "category-chip", 3, "routerLink", "queryParams"], ["mode", "indeterminate", "diameter", "30"], [1, "result-icon"], ["mat-button", "", 3, "routerLink"], [1, "category-chip", 3, "routerLink"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵelementStart(2, "section", 2)(3, "form", 3);
            i0.ɵɵlistener("ngSubmit", function SearchPageComponent_Template_form_ngSubmit_3_listener() { return ctx.page.search(); });
            i0.ɵɵelementStart(4, "mat-icon");
            i0.ɵɵtext(5, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "input", 4);
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵtext(8, "Buscar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6);
            i0.ɵɵrepeaterCreate(10, SearchPageComponent_For_11_Template, 5, 3, "a", 7, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(12, SearchPageComponent_Conditional_12_Template, 4, 0, "section", 8);
            i0.ɵɵconditionalCreate(13, SearchPageComponent_Conditional_13_Template, 5, 1, "section", 9);
            i0.ɵɵelementStart(14, "section", 10)(15, "div", 11)(16, "h2");
            i0.ɵɵtext(17, "Lojas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 12);
            i0.ɵɵrepeaterCreate(21, SearchPageComponent_For_22_Template, 12, 8, "article", 13, _forTrack1, false, SearchPageComponent_ForEmpty_23_Template, 7, 0, "article", 14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "section", 10)(25, "div", 11)(26, "h2");
            i0.ɵɵtext(27, "Categorias");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "div", 15);
            i0.ɵɵrepeaterCreate(31, SearchPageComponent_For_32_Template, 5, 7, "a", 16, _forTrack1, false, SearchPageComponent_ForEmpty_33_Template, 2, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "section", 10)(35, "div", 11)(36, "h2");
            i0.ɵɵtext(37, "Produtos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 12);
            i0.ɵɵrepeaterCreate(41, SearchPageComponent_For_42_Template, 13, 7, "article", 13, _forTrack1, false, SearchPageComponent_ForEmpty_43_Template, 7, 0, "article", 14);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("formControl", ctx.page.searchControl);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.page.suggestedCategories);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.loading() ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.errorMessage() ? 13 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.page.stores().totalElements, " resultado(s)");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.stores().content);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.page.categories().length, " encontrada(s)");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.categories());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.page.products().totalElements, " resultado(s)");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.products().content);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormControlDirective, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.search-page[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.search-panel[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%], \n.feedback-state[_ngcontent-%COMP%] {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n}\n\n.search-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding: 1rem;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 999px;\n  background: #fff;\n  padding: .5rem .55rem .5rem 1rem;\n}\n\n.search-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--elide-ink);\n  font: inherit;\n}\n\n.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  background: var(--elide-gradient) !important;\n  color: white !important;\n  min-width: 118px;\n}\n\n.quick-categories[_ngcontent-%COMP%], \n.chip-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .65rem;\n}\n\n.quick-categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.category-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .5rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 999px;\n  background: #fff;\n  color: var(--elide-ink);\n  padding: .7rem .9rem;\n  text-decoration: none;\n  font-weight: 900;\n}\n\n.quick-categories[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.category-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-size: 1.05rem;\n  height: 1.05rem;\n  width: 1.05rem;\n}\n\n.feedback-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  margin-top: 1rem;\n  padding: .9rem 1rem;\n  color: var(--elide-muted);\n  font-weight: 800;\n}\n\n.feedback-state.error[_ngcontent-%COMP%] {\n  border-color: rgba(220, 38, 38, .2);\n  color: #b42318;\n}\n\n.feedback-state.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b42318;\n}\n\n.panel[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n}\n\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n.panel-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n  font-size: .85rem;\n  font-weight: 800;\n}\n\n.result-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: .85rem;\n}\n\n.result-card[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .45rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  padding: .95rem;\n  background: #fff;\n}\n\n.result-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: #fff4e8;\n  color: var(--elide-orange);\n}\n\n.result-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.result-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n}\n\n.result-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  justify-self: start;\n  color: var(--elide-orange) !important;\n  font-weight: 900;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  border-style: dashed;\n}\n\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-ink);\n}\n\n@media (max-width: 620px) {\n  .search-page[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 1180px);\n    padding-top: 1rem;\n  }\n\n  .search-box[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n    border-radius: 8px;\n  }\n\n  .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n\n  .quick-categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .category-chip[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - .65rem);\n    justify-content: center;\n    min-width: 0;\n  }\n\n  .panel-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: .25rem;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-search-page', imports: [...MATERIAL, RouterLink, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"search-page\">\n  <elide-client-heading eyebrow=\"Busca\" title=\"Pesquisar\" description=\"Encontre restaurantes, mercados, farmacias, padarias, lanchonetes, acougues, pet shops, produtos e categorias.\" />\n\n  <section class=\"search-panel\">\n    <form class=\"search-box\" (ngSubmit)=\"page.search()\">\n      <mat-icon>search</mat-icon>\n      <input [formControl]=\"page.searchControl\" placeholder=\"Buscar restaurante, produto ou categoria\" />\n      <button mat-flat-button type=\"submit\">Buscar</button>\n    </form>\n    <div class=\"quick-categories\" aria-label=\"Categorias principais\">\n      @for (category of page.suggestedCategories; track category.title) {\n        <a [routerLink]=\"category.path\">\n          <mat-icon>{{ category.icon }}</mat-icon>\n          <span>{{ category.title }}</span>\n        </a>\n      }\n    </div>\n  </section>\n\n  @if (page.loading()) {\n    <section class=\"feedback-state\">\n      <mat-progress-spinner mode=\"indeterminate\" diameter=\"30\"></mat-progress-spinner>\n      <span>Buscando opcoes para voce...</span>\n    </section>\n  }\n\n  @if (page.errorMessage()) {\n    <section class=\"feedback-state error\">\n      <mat-icon>error_outline</mat-icon>\n      <span>{{ page.errorMessage() }}</span>\n    </section>\n  }\n\n  <section class=\"panel\">\n    <div class=\"panel-heading\">\n      <h2>Lojas</h2>\n      <span>{{ page.stores().totalElements }} resultado(s)</span>\n    </div>\n    <div class=\"result-grid\">\n      @for (store of page.stores().content; track store.id) {\n        <article class=\"result-card\">\n          <div class=\"result-icon\"><mat-icon>storefront</mat-icon></div>\n          <strong>{{ store.name }}</strong>\n          <span>{{ store.segment }} \u00B7 {{ page.distance(store) }}</span>\n          <small>{{ store.open ? 'Aberta agora' : 'Fechada' }} \u00B7 Entrega {{ page.money(store.deliveryFee) }}</small>\n          <a mat-button [routerLink]=\"['/produto', store.id]\">Ver produtos</a>\n        </article>\n      } @empty {\n        <article class=\"empty-state\">\n          <mat-icon>storefront</mat-icon>\n          <strong>Nenhuma loja encontrada</strong>\n          <span>Tente buscar por restaurantes, mercados, farmacias ou outra categoria.</span>\n        </article>\n      }\n    </div>\n  </section>\n\n  <section class=\"panel\">\n    <div class=\"panel-heading\">\n      <h2>Categorias</h2>\n      <span>{{ page.categories().length }} encontrada(s)</span>\n    </div>\n    <div class=\"chip-grid\">\n      @for (category of page.categories(); track category.id) {\n        <a class=\"category-chip\" [routerLink]=\"['/busca']\" [queryParams]=\"{ q: category.name }\">\n          <mat-icon>{{ category.icon }}</mat-icon>\n          <span>{{ category.name }}</span>\n        </a>\n      } @empty {\n        @for (category of page.suggestedCategories; track category.title) {\n          <a class=\"category-chip\" [routerLink]=\"category.path\">\n            <mat-icon>{{ category.icon }}</mat-icon>\n            <span>{{ category.title }}</span>\n          </a>\n        }\n      }\n    </div>\n  </section>\n\n  <section class=\"panel\">\n    <div class=\"panel-heading\">\n      <h2>Produtos</h2>\n      <span>{{ page.products().totalElements }} resultado(s)</span>\n    </div>\n    <div class=\"result-grid\">\n      @for (product of page.products().content; track product.id) {\n        <article class=\"result-card\">\n          <div class=\"result-icon\"><mat-icon>restaurant_menu</mat-icon></div>\n          <strong>{{ product.name }}</strong>\n          <span>{{ product.description }}</span>\n          <small>{{ page.money(product.price) }}</small>\n          @if (product.addons?.length) {\n            <small>{{ product.addons?.length }} adicional(is) disponiveis</small>\n          }\n          <a mat-button [routerLink]=\"['/produto', product.storeId]\">Ver loja</a>\n        </article>\n      } @empty {\n        <article class=\"empty-state\">\n          <mat-icon>search_off</mat-icon>\n          <strong>Nenhum produto encontrado</strong>\n          <span>Produtos relacionados aparecem aqui quando houver resultados.</span>\n        </article>\n      }\n    </div>\n  </section>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.search-page {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 2rem 0 4rem;\n}\n\n.search-panel,\n.panel,\n.feedback-state {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n}\n\n.search-panel {\n  display: grid;\n  gap: 1rem;\n  margin-top: 1rem;\n  padding: 1rem;\n}\n\n.search-box {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 999px;\n  background: #fff;\n  padding: .5rem .55rem .5rem 1rem;\n}\n\n.search-box mat-icon {\n  color: var(--elide-orange);\n}\n\n.search-box input {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--elide-ink);\n  font: inherit;\n}\n\n.search-box button {\n  border-radius: 999px !important;\n  background: var(--elide-gradient) !important;\n  color: white !important;\n  min-width: 118px;\n}\n\n.quick-categories,\n.chip-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .65rem;\n}\n\n.quick-categories a,\n.category-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: .5rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 999px;\n  background: #fff;\n  color: var(--elide-ink);\n  padding: .7rem .9rem;\n  text-decoration: none;\n  font-weight: 900;\n}\n\n.quick-categories mat-icon,\n.category-chip mat-icon {\n  color: var(--elide-orange);\n  font-size: 1.05rem;\n  height: 1.05rem;\n  width: 1.05rem;\n}\n\n.feedback-state {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n  margin-top: 1rem;\n  padding: .9rem 1rem;\n  color: var(--elide-muted);\n  font-weight: 800;\n}\n\n.feedback-state.error {\n  border-color: rgba(220, 38, 38, .2);\n  color: #b42318;\n}\n\n.feedback-state.error mat-icon {\n  color: #b42318;\n}\n\n.panel {\n  margin-top: 1rem;\n  padding: 1rem;\n}\n\n.panel-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.panel h2 {\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n.panel-heading span {\n  color: var(--elide-muted);\n  font-size: .85rem;\n  font-weight: 800;\n}\n\n.result-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: .85rem;\n}\n\n.result-card,\n.empty-state {\n  display: grid;\n  gap: .45rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  padding: .95rem;\n  background: #fff;\n}\n\n.result-icon {\n  display: inline-grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  background: #fff4e8;\n  color: var(--elide-orange);\n}\n\n.result-card span,\n.result-card small,\n.empty-state span {\n  color: var(--elide-muted);\n}\n\n.result-card a {\n  justify-self: start;\n  color: var(--elide-orange) !important;\n  font-weight: 900;\n}\n\n.empty-state {\n  border-style: dashed;\n}\n\n.empty-state mat-icon {\n  color: var(--elide-orange);\n}\n\n.empty-state strong {\n  color: var(--elide-ink);\n}\n\n@media (max-width: 620px) {\n  .search-page {\n    width: min(100% - 1rem, 1180px);\n    padding-top: 1rem;\n  }\n\n  .search-box {\n    grid-template-columns: auto 1fr;\n    border-radius: 8px;\n  }\n\n  .search-box button {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n\n  .quick-categories a,\n  .category-chip {\n    flex: 1 1 calc(50% - .65rem);\n    justify-content: center;\n    min-width: 0;\n  }\n\n  .panel-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: .25rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SearchPageComponent, { className: "SearchPageComponent", filePath: "src/app/pages/search/search.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=search.component.js.map