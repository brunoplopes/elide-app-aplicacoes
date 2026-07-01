import { ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from '../../services/api.service';
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
const _c0 = a0 => ["/produto", a0];
const _forTrack0 = ($index, $item) => $item.key;
const _forTrack1 = ($index, $item) => $item.id;
function CatalogViewComponent_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function CatalogViewComponent_For_16_Template_button_click_0_listener() { const filter_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.setFilter(filter_r2.key)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.activeFilter() === filter_r2.key);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(filter_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(filter_r2.label);
} }
function CatalogViewComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7);
    i0.ɵɵelement(1, "mat-progress-spinner", 13);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Carregando lojas para voce...");
    i0.ɵɵelementEnd()();
} }
function CatalogViewComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 8)(1, "mat-icon");
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.errorMessage());
} }
function CatalogViewComponent_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 11);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementStart(2, "div", 15)(3, "div", 16)(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 17);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 18)(11, "span")(12, "mat-icon");
    i0.ɵɵtext(13, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span")(17, "mat-icon");
    i0.ɵɵtext(18, "shopping_bag");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span")(22, "mat-icon");
    i0.ɵɵtext(23, "near_me");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 19)(26, "a", 20);
    i0.ɵɵtext(27, "Ver produtos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 21)(29, "mat-icon");
    i0.ɵɵtext(30, "favorite");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const store_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", store_r4.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(store_r4.name);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("closed", !store_r4.open);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(store_r4.open ? "Aberta" : "Fechada");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(store_r4.segment);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" Entrega ", i0.ɵɵpipeBind2(15, 10, store_r4.deliveryFee, "BRL"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" Minimo ", i0.ɵɵpipeBind2(20, 13, store_r4.minimumOrder, "BRL"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.distance(store_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(16, _c0, store_r4.id));
} }
function CatalogViewComponent_ForEmpty_27_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 22)(1, "mat-icon");
    i0.ɵɵtext(2, "storefront");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhuma loja encontrada");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Tente remover filtros ou buscar por outra categoria.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 23);
    i0.ɵɵtext(8, "Pesquisar no ELIDE");
    i0.ɵɵelementEnd()();
} }
function CatalogViewComponent_ForEmpty_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, CatalogViewComponent_ForEmpty_27_Conditional_0_Template, 9, 0, "article", 22);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵconditional(!ctx_r2.loading() ? 0 : -1);
} }
const emptyStores = { content: [], totalElements: 0, totalPages: 0, number: 0 };
export class CatalogViewComponent {
    constructor() {
        this.api = inject(ApiService);
        this.router = inject(Router);
        this.destroyRef = inject(DestroyRef);
        this.lastLoadedSegment = '';
        this.eyebrow = input('ELIDE', ...(ngDevMode ? [{ debugName: "eyebrow" }] : []));
        this.title = input('Lojas parceiras', ...(ngDevMode ? [{ debugName: "title" }] : []));
        this.subtitle = input('Explore estabelecimentos ativos na sua cidade.', ...(ngDevMode ? [{ debugName: "subtitle" }] : []));
        this.segment = input(null, ...(ngDevMode ? [{ debugName: "segment" }] : []));
        this.storesInput = input(null, ...(ngDevMode ? [{ debugName: "storesInput", alias: 'stores' }] : [{ alias: 'stores' }]));
        this.catalogStores = signal(emptyStores, ...(ngDevMode ? [{ debugName: "catalogStores" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.errorMessage = signal('', ...(ngDevMode ? [{ debugName: "errorMessage" }] : []));
        this.activeFilter = signal('all', ...(ngDevMode ? [{ debugName: "activeFilter" }] : []));
        this.searchControl = new FormControl('', { nonNullable: true });
        this.filters = [
            { key: 'all', label: 'Todos', icon: 'apps' },
            { key: 'open', label: 'Aberto agora', icon: 'storefront' },
            { key: 'nearby', label: 'Mais perto', icon: 'near_me' },
            { key: 'delivery', label: 'Menor entrega', icon: 'payments' },
            { key: 'offers', label: 'Promocoes', icon: 'local_offer' }
        ];
        this.sourceStores = computed(() => this.segment() ? this.catalogStores() : (this.storesInput() ?? emptyStores), ...(ngDevMode ? [{ debugName: "sourceStores" }] : []));
        this.visibleStores = computed(() => {
            const stores = [...this.sourceStores().content];
            switch (this.activeFilter()) {
                case 'open':
                    return stores.filter((store) => store.open);
                case 'nearby':
                    return stores.sort((a, b) => this.distanceValue(a) - this.distanceValue(b));
                case 'delivery':
                    return stores.sort((a, b) => (a.deliveryFee ?? 0) - (b.deliveryFee ?? 0));
                case 'offers':
                    return stores.filter((store) => (store.deliveryFee ?? 0) <= 7 || (store.minimumOrder ?? 0) <= 25);
                default:
                    return stores;
            }
        }, ...(ngDevMode ? [{ debugName: "visibleStores" }] : []));
        this.resultLabel = computed(() => {
            const total = this.visibleStores().length;
            return `${total} loja${total === 1 ? '' : 's'} encontrada${total === 1 ? '' : 's'}`;
        }, ...(ngDevMode ? [{ debugName: "resultLabel" }] : []));
        this.locationHint = computed(() => this.hasDistance() ? 'Ordenacao preparada por proximidade.' : 'Catalogo exibido com fallback por segmento.', ...(ngDevMode ? [{ debugName: "locationHint" }] : []));
        effect(() => {
            const segment = this.segment();
            if (!segment || segment === this.lastLoadedSegment) {
                return;
            }
            this.lastLoadedSegment = segment;
            queueMicrotask(() => this.load(segment));
        });
    }
    setFilter(filter) {
        this.activeFilter.set(filter);
    }
    search() {
        const q = this.searchControl.value.trim();
        this.router.navigate(['/busca'], q ? { queryParams: { q } } : undefined);
    }
    distance(store) {
        if (store.distanceMeters === null || store.distanceMeters === undefined) {
            return 'Distancia indisponivel';
        }
        if (store.distanceMeters < 1000) {
            return `${Math.round(store.distanceMeters)} m`;
        }
        return `${(store.distanceMeters / 1000).toFixed(1).replace('.', ',')} km`;
    }
    load(segment) {
        this.loading.set(true);
        this.errorMessage.set('');
        this.api.stores({ segment, size: 24, preferNearby: true }).pipe(catchError(() => {
            this.errorMessage.set('Nao foi possivel carregar este catalogo agora.');
            return of(emptyStores);
        }), takeUntilDestroyed(this.destroyRef)).subscribe((stores) => {
            this.catalogStores.set(stores);
            this.loading.set(false);
        });
    }
    hasDistance() {
        return this.sourceStores().content.some((store) => store.distanceMeters !== null && store.distanceMeters !== undefined);
    }
    distanceValue(store) {
        return store.distanceMeters ?? Number.MAX_SAFE_INTEGER;
    }
    static { this.ɵfac = function CatalogViewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CatalogViewComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CatalogViewComponent, selectors: [["elide-catalog-view"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], subtitle: [1, "subtitle"], segment: [1, "segment"], storesInput: [1, "stores", "storesInput"] }, decls: 28, vars: 11, consts: [[1, "page-wrap"], [1, "catalog-hero"], [1, "search-box", 3, "ngSubmit"], ["placeholder", "Buscar lojas, pratos ou produtos...", 3, "formControl"], ["mat-flat-button", "", "type", "submit"], ["aria-label", "Filtros de catalogo", 1, "filter-row"], ["type", "button", 3, "active"], [1, "feedback-card"], [1, "feedback-card", "error"], [1, "catalog-summary"], [1, "store-grid"], [1, "store-card"], ["type", "button", 3, "click"], ["mode", "indeterminate", "diameter", "32"], ["role", "img", 1, "store-image"], [1, "store-body"], [1, "store-title"], [1, "status"], [1, "meta-grid"], [1, "actions"], ["mat-flat-button", "", 3, "routerLink"], ["mat-icon-button", "", "type", "button", "aria-label", "Favoritar"], [1, "empty-card"], ["mat-button", "", "routerLink", "/busca"]], template: function CatalogViewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "form", 2);
            i0.ɵɵlistener("ngSubmit", function CatalogViewComponent_Template_form_ngSubmit_8_listener() { return ctx.search(); });
            i0.ɵɵelementStart(9, "mat-icon");
            i0.ɵɵtext(10, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 3);
            i0.ɵɵelementStart(12, "button", 4);
            i0.ɵɵtext(13, "Buscar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 5);
            i0.ɵɵrepeaterCreate(15, CatalogViewComponent_For_16_Template, 5, 4, "button", 6, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(17, CatalogViewComponent_Conditional_17_Template, 4, 0, "section", 7);
            i0.ɵɵconditionalCreate(18, CatalogViewComponent_Conditional_18_Template, 5, 1, "section", 8);
            i0.ɵɵelementStart(19, "div", 9)(20, "strong");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 10);
            i0.ɵɵrepeaterCreate(25, CatalogViewComponent_For_26_Template, 31, 18, "article", 11, _forTrack1, false, CatalogViewComponent_ForEmpty_27_Template, 1, 1);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.eyebrow());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.subtitle());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formControl", ctx.searchControl);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.filters);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.loading() ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.errorMessage() ? 18 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.resultLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.locationHint());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("loading", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.visibleStores());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormControlDirective, i3.MatButtonModule, i3.MatButton, i3.MatIconButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i11.MatProgressSpinner, i12.MatSelectModule, i13.MatTabsModule, RouterLink, i1.CurrencyPipe], styles: [".page-wrap[_ngcontent-%COMP%] { width: min(1180px, calc(100% - 2rem)); margin: 0 auto; overflow-x: clip; padding: 2.5rem 0 4rem; }\n    .catalog-hero[_ngcontent-%COMP%] { border-radius: 8px; background: linear-gradient(135deg, rgba(255,107,0,.14), rgba(255,184,77,.16)); padding: clamp(1.5rem, 4vw, 3rem); }\n    .catalog-hero[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n    .catalog-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: .5rem 0; font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; letter-spacing: 0; overflow-wrap: anywhere; }\n    .catalog-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 40rem; color: var(--elide-muted); }\n    .search-box[_ngcontent-%COMP%] { margin-top: 1.5rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .75rem; max-width: 720px; border-radius: 999px; background: white; padding: .45rem .45rem .45rem 1rem; box-shadow: var(--elide-shadow-card); }\n    .search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--elide-ink); font: inherit; }\n    .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; min-width: 118px; }\n    .filter-row[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1rem; }\n    .filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .4rem; border: 1px solid rgba(255,107,0,.18); border-radius: 999px; background: white; color: var(--elide-ink); cursor: pointer; font-weight: 850; padding: .65rem .85rem; transition: background .18s ease, border-color .18s ease, color .18s ease, transform .18s ease; }\n    .filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .filter-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] { border-color: rgba(255,107,0,.55); background: #fff4e8; color: var(--elide-orange); transform: translateY(-1px); }\n    .filter-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { font-size: 1rem; height: 1rem; width: 1rem; }\n    .feedback-card[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .75rem; margin-top: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); color: var(--elide-muted); font-weight: 850; padding: .95rem 1rem; box-shadow: var(--elide-shadow-card); }\n    .feedback-card.error[_ngcontent-%COMP%] { border-color: rgba(220, 38, 38, .2); color: #b42318; }\n    .feedback-card.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: #b42318; }\n    .catalog-summary[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.4rem; color: var(--elide-muted); }\n    .catalog-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--elide-ink); font-size: 1.05rem; }\n    .store-grid[_ngcontent-%COMP%] { margin-top: 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }\n    .store-grid.loading[_ngcontent-%COMP%] { opacity: .64; }\n    .store-card[_ngcontent-%COMP%], .empty-card[_ngcontent-%COMP%] { overflow: hidden; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }\n    .store-card[_ngcontent-%COMP%] { transition: transform .18s ease, box-shadow .18s ease; }\n    .store-card[_ngcontent-%COMP%]:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }\n    .store-image[_ngcontent-%COMP%] { aspect-ratio: 16 / 9; background-image: linear-gradient(to right, rgba(30,30,30,.45), rgba(30,30,30,.05)), url('https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg'); background-position: center; background-size: cover; }\n    .store-body[_ngcontent-%COMP%] { display: grid; gap: .75rem; min-width: 0; padding: 1rem; overflow-wrap: anywhere; }\n    .store-title[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; }\n    h2[_ngcontent-%COMP%] { margin: 0; font-size: 1.1rem; font-weight: 850; }\n    p[_ngcontent-%COMP%] { margin: 0; }\n    .meta[_ngcontent-%COMP%], .store-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: var(--elide-muted); font-size: .9rem; }\n    .status[_ngcontent-%COMP%] { flex: 0 0 auto; border-radius: 999px; background: rgba(33, 150, 83, .1); color: #16824f; padding: .25rem .65rem; font-size: .75rem; font-weight: 900; }\n    .status.closed[_ngcontent-%COMP%] { background: rgba(45,45,45,.08); color: var(--elide-muted); }\n    .meta-grid[_ngcontent-%COMP%] { display: grid; gap: .45rem; color: var(--elide-muted); font-size: .88rem; }\n    .meta-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: .4rem; min-width: 0; }\n    .meta-grid[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); font-size: 1rem; height: 1rem; width: 1rem; }\n    .actions[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: .75rem; }\n    .actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }\n    .empty-card[_ngcontent-%COMP%] { display: grid; gap: .45rem; grid-column: 1 / -1; padding: 1.25rem; color: var(--elide-muted); }\n    .empty-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n    .empty-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { color: var(--elide-ink); }\n    .empty-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { justify-self: start; color: var(--elide-orange) !important; font-weight: 900; }\n    @media (max-width: 640px) { .page-wrap[_ngcontent-%COMP%] { width: min(100% - 1rem, 1180px); padding: 1.5rem 0 2.5rem; } .search-box[_ngcontent-%COMP%] { grid-template-columns: auto 1fr; border-radius: 8px; } .search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { grid-column: 1 / -1; width: 100%; } .filter-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { flex: 1 1 calc(50% - .65rem); justify-content: center; min-width: 0; } .catalog-summary[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; gap: .25rem; } .store-title[_ngcontent-%COMP%] { flex-direction: column; } }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CatalogViewComponent, [{
        type: Component,
        args: [{ selector: 'elide-catalog-view', imports: [...MATERIAL, RouterLink], template: `
    <section class="page-wrap">
      <div class="catalog-hero">
        <span>{{ eyebrow() }}</span>
        <h1>{{ title() }}</h1>
        <p>{{ subtitle() }}</p>
        <form class="search-box" (ngSubmit)="search()">
          <mat-icon>search</mat-icon>
          <input [formControl]="searchControl" placeholder="Buscar lojas, pratos ou produtos..." />
          <button mat-flat-button type="submit">Buscar</button>
        </form>
        <div class="filter-row" aria-label="Filtros de catalogo">
          @for (filter of filters; track filter.key) {
            <button type="button" [class.active]="activeFilter() === filter.key" (click)="setFilter(filter.key)">
              <mat-icon>{{ filter.icon }}</mat-icon>
              <span>{{ filter.label }}</span>
            </button>
          }
        </div>
      </div>

      @if (loading()) {
        <section class="feedback-card">
          <mat-progress-spinner mode="indeterminate" diameter="32"></mat-progress-spinner>
          <span>Carregando lojas para voce...</span>
        </section>
      }

      @if (errorMessage()) {
        <section class="feedback-card error">
          <mat-icon>error_outline</mat-icon>
          <span>{{ errorMessage() }}</span>
        </section>
      }

      <div class="catalog-summary">
        <strong>{{ resultLabel() }}</strong>
        <span>{{ locationHint() }}</span>
      </div>

      <div class="store-grid" [class.loading]="loading()">
        @for (store of visibleStores(); track store.id) {
          <article class="store-card">
            <div class="store-image" role="img" [attr.aria-label]="store.name"></div>
            <div class="store-body">
              <div class="store-title">
                <h2>{{ store.name }}</h2>
                <span class="status" [class.closed]="!store.open">{{ store.open ? 'Aberta' : 'Fechada' }}</span>
              </div>
              <p>{{ store.segment }}</p>
              <div class="meta-grid">
                <span><mat-icon>payments</mat-icon> Entrega {{ store.deliveryFee | currency:'BRL' }}</span>
                <span><mat-icon>shopping_bag</mat-icon> Minimo {{ store.minimumOrder | currency:'BRL' }}</span>
                <span><mat-icon>near_me</mat-icon> {{ distance(store) }}</span>
              </div>
              <div class="actions">
                <a mat-flat-button [routerLink]="['/produto', store.id]">Ver produtos</a>
                <button mat-icon-button type="button" aria-label="Favoritar"><mat-icon>favorite</mat-icon></button>
              </div>
            </div>
          </article>
        } @empty {
          @if (!loading()) {
            <article class="empty-card">
              <mat-icon>storefront</mat-icon>
              <strong>Nenhuma loja encontrada</strong>
              <span>Tente remover filtros ou buscar por outra categoria.</span>
              <a mat-button routerLink="/busca">Pesquisar no ELIDE</a>
            </article>
          }
        }
      </div>
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    .page-wrap { width: min(1180px, calc(100% - 2rem)); margin: 0 auto; overflow-x: clip; padding: 2.5rem 0 4rem; }\n    .catalog-hero { border-radius: 8px; background: linear-gradient(135deg, rgba(255,107,0,.14), rgba(255,184,77,.16)); padding: clamp(1.5rem, 4vw, 3rem); }\n    .catalog-hero span { color: var(--elide-orange); font-size: .78rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }\n    .catalog-hero h1 { margin: .5rem 0; font-size: clamp(2rem, 5vw, 4rem); font-weight: 900; letter-spacing: 0; overflow-wrap: anywhere; }\n    .catalog-hero p { max-width: 40rem; color: var(--elide-muted); }\n    .search-box { margin-top: 1.5rem; display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: .75rem; max-width: 720px; border-radius: 999px; background: white; padding: .45rem .45rem .45rem 1rem; box-shadow: var(--elide-shadow-card); }\n    .search-box input { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--elide-ink); font: inherit; }\n    .search-box button { border-radius: 999px !important; background: var(--elide-gradient) !important; color: white !important; min-width: 118px; }\n    .filter-row { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1rem; }\n    .filter-row button { display: inline-flex; align-items: center; gap: .4rem; border: 1px solid rgba(255,107,0,.18); border-radius: 999px; background: white; color: var(--elide-ink); cursor: pointer; font-weight: 850; padding: .65rem .85rem; transition: background .18s ease, border-color .18s ease, color .18s ease, transform .18s ease; }\n    .filter-row button:hover, .filter-row button.active { border-color: rgba(255,107,0,.55); background: #fff4e8; color: var(--elide-orange); transform: translateY(-1px); }\n    .filter-row mat-icon { font-size: 1rem; height: 1rem; width: 1rem; }\n    .feedback-card { display: flex; align-items: center; gap: .75rem; margin-top: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); color: var(--elide-muted); font-weight: 850; padding: .95rem 1rem; box-shadow: var(--elide-shadow-card); }\n    .feedback-card.error { border-color: rgba(220, 38, 38, .2); color: #b42318; }\n    .feedback-card.error mat-icon { color: #b42318; }\n    .catalog-summary { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.4rem; color: var(--elide-muted); }\n    .catalog-summary strong { color: var(--elide-ink); font-size: 1.05rem; }\n    .store-grid { margin-top: 2rem; display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }\n    .store-grid.loading { opacity: .64; }\n    .store-card, .empty-card { overflow: hidden; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }\n    .store-card { transition: transform .18s ease, box-shadow .18s ease; }\n    .store-card:hover { transform: translateY(-3px); box-shadow: var(--elide-shadow-elegant); }\n    .store-image { aspect-ratio: 16 / 9; background-image: linear-gradient(to right, rgba(30,30,30,.45), rgba(30,30,30,.05)), url('https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg'); background-position: center; background-size: cover; }\n    .store-body { display: grid; gap: .75rem; min-width: 0; padding: 1rem; overflow-wrap: anywhere; }\n    .store-title { display: flex; align-items: flex-start; justify-content: space-between; gap: .75rem; }\n    h2 { margin: 0; font-size: 1.1rem; font-weight: 850; }\n    p { margin: 0; }\n    .meta, .store-body p { color: var(--elide-muted); font-size: .9rem; }\n    .status { flex: 0 0 auto; border-radius: 999px; background: rgba(33, 150, 83, .1); color: #16824f; padding: .25rem .65rem; font-size: .75rem; font-weight: 900; }\n    .status.closed { background: rgba(45,45,45,.08); color: var(--elide-muted); }\n    .meta-grid { display: grid; gap: .45rem; color: var(--elide-muted); font-size: .88rem; }\n    .meta-grid span { display: inline-flex; align-items: center; gap: .4rem; min-width: 0; }\n    .meta-grid mat-icon { color: var(--elide-orange); font-size: 1rem; height: 1rem; width: 1rem; }\n    .actions { display: flex; align-items: center; justify-content: space-between; gap: .75rem; }\n    .actions a { border-radius: 999px !important; background: var(--elide-orange) !important; color: white !important; }\n    .empty-card { display: grid; gap: .45rem; grid-column: 1 / -1; padding: 1.25rem; color: var(--elide-muted); }\n    .empty-card mat-icon { color: var(--elide-orange); }\n    .empty-card strong { color: var(--elide-ink); }\n    .empty-card a { justify-self: start; color: var(--elide-orange) !important; font-weight: 900; }\n    @media (max-width: 640px) { .page-wrap { width: min(100% - 1rem, 1180px); padding: 1.5rem 0 2.5rem; } .search-box { grid-template-columns: auto 1fr; border-radius: 8px; } .search-box button { grid-column: 1 / -1; width: 100%; } .filter-row button { flex: 1 1 calc(50% - .65rem); justify-content: center; min-width: 0; } .catalog-summary { align-items: flex-start; flex-direction: column; gap: .25rem; } .store-title { flex-direction: column; } }\n  "] }]
    }], () => [], { eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], subtitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "subtitle", required: false }] }], segment: [{ type: i0.Input, args: [{ isSignal: true, alias: "segment", required: false }] }], storesInput: [{ type: i0.Input, args: [{ isSignal: true, alias: "stores", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CatalogViewComponent, { className: "CatalogViewComponent", filePath: "src/app/pages/shared/catalog-view.component.ts", lineNumber: 134 }); })();
//# sourceMappingURL=catalog-view.component.js.map