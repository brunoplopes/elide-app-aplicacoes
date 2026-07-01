import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { categories, coupons, featuredStores, heroImageUrl } from '../shared/page-kit';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/card";
import * as i6 from "@angular/material/chips";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/icon";
import * as i9 from "@angular/material/input";
import * as i10 from "@angular/material/list";
import * as i11 from "@angular/material/progress-bar";
import * as i12 from "@angular/material/progress-spinner";
import * as i13 from "@angular/material/select";
import * as i14 from "@angular/material/tabs";
const _c0 = () => ({ q: "aberto agora" });
const _c1 = a0 => ({ q: a0 });
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.name;
function HomePageComponent_For_30_Template(rf, ctx) { if (rf & 1) {
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
    const category_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", category_r1.path);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r1.description);
} }
function HomePageComponent_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 15);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementStart(2, "div", 27)(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "small")(9, "mat-icon");
    i0.ɵɵtext(10, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small")(13, "mat-icon");
    i0.ɵɵtext(14, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 28);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const store_r2 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(store_r2.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", store_r2.segment, " \u00B7 ", store_r2.distance);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(store_r2.eta);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(store_r2.fee);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("closed", !store_r2.open);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(store_r2.open ? "Aberta" : "Fechada");
} }
function HomePageComponent_For_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19)(1, "mat-icon");
    i0.ɵɵtext(2, "storefront");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "chevron_right");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const store_r3 = ctx.$implicit;
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction1(5, _c1, store_r3.segment));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(store_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", store_r3.segment, " \u00B7 ", store_r3.eta, " \u00B7 ", store_r3.distance);
} }
function HomePageComponent_ForEmpty_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 20)(1, "mat-icon");
    i0.ɵɵtext(2, "storefront");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhuma loja aberta agora");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Atualize o endereco ou tente novamente em alguns minutos.");
    i0.ɵɵelementEnd()();
} }
function HomePageComponent_For_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 29);
    i0.ɵɵtext(7, "COPIAR");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(coupon_r4.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(coupon_r4.title);
} }
function HomePageComponent_For_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 25);
    i0.ɵɵelement(1, "div", 26);
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "small")(8, "mat-icon");
    i0.ɵɵtext(9, "star");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const store_r5 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(store_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", store_r5.offer, " \u00B7 ", store_r5.segment, " \u00B7 ", store_r5.eta);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(store_r5.rating);
} }
function HomePageComponent_ForEmpty_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 20)(1, "mat-icon");
    i0.ɵɵtext(2, "local_offer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhuma oferta ativa");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Novos cupons aparecem aqui assim que estiverem disponiveis.");
    i0.ɵɵelementEnd()();
} }
export class HomePageComponent {
    constructor(router) {
        this.router = router;
        this.page = this;
        this.heroImage = heroImageUrl;
        this.categories = categories;
        this.coupons = coupons.slice(0, 3);
        this.stores = featuredStores;
        this.openStores = featuredStores.filter((store) => store.open).slice(0, 4);
        this.offerStores = featuredStores.filter((store) => store.offer).slice(0, 3);
        this.locationLabel = 'Entregar em Centro, Guarulhos';
        this.searchControl = new FormControl('', { nonNullable: true });
    }
    search() {
        const q = this.searchControl.value.trim();
        this.router.navigate(['/busca'], q ? { queryParams: { q } } : undefined);
    }
    static { this.ɵfac = function HomePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HomePageComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomePageComponent, selectors: [["elide-home-page"]], decls: 70, vars: 8, consts: [[1, "home-hero"], [1, "hero-content"], [1, "hero-badge"], ["role", "group", "aria-label", "Endereco de entrega", 1, "location-bar"], ["routerLink", "/enderecos"], [1, "hero-search", 3, "ngSubmit"], ["placeholder", "Buscar lojas, pratos ou produtos...", 3, "formControl"], ["mat-flat-button", "", "type", "submit"], [1, "elide-section"], [1, "category-grid"], [1, "category-card", 3, "routerLink"], [1, "elide-section", "delivery-section"], [1, "section-heading"], ["routerLink", "/busca"], [1, "store-grid"], [1, "delivery-card"], [1, "elide-section", "delivery-section", "muted-band"], ["routerLink", "/busca", 3, "queryParams"], [1, "compact-store-list"], ["routerLink", "/busca", 1, "compact-store", 3, "queryParams"], [1, "empty-state"], [1, "elide-section", "split-section"], [1, "coupon-list"], [1, "coupon-card"], [1, "store-list"], [1, "store-row"], [1, "store-thumb"], [1, "store-card-body"], [1, "status-chip"], ["type", "button"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "span", 2)(3, "mat-icon");
            i0.ɵɵtext(4, "bolt");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, " Delivery para a sua cidade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 3)(7, "mat-icon");
            i0.ɵɵtext(8, "location_on");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "a", 4);
            i0.ɵɵtext(12, "Alterar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "h1");
            i0.ɵɵtext(14, "Seu pedido, ");
            i0.ɵɵelementStart(15, "strong");
            i0.ɵɵtext(16, "na sua porta.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, "Restaurantes, lanchonetes, pizzarias, mercados e farmacias da sua regiao, com entrega rapida e segura.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "form", 5);
            i0.ɵɵlistener("ngSubmit", function HomePageComponent_Template_form_ngSubmit_19_listener() { return ctx.page.search(); });
            i0.ɵɵelementStart(20, "mat-icon");
            i0.ɵɵtext(21, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 6);
            i0.ɵɵelementStart(23, "button", 7);
            i0.ɵɵtext(24, "Buscar");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(25, "section", 8)(26, "h2");
            i0.ɵɵtext(27, "O que voce precisa hoje?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 9);
            i0.ɵɵrepeaterCreate(29, HomePageComponent_For_30_Template, 7, 4, "a", 10, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "section", 11)(32, "div", 12)(33, "div")(34, "h2");
            i0.ɵɵtext(35, "Lojas proximas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "p");
            i0.ɵɵtext(37, "Opcoes perto do endereco selecionado, prontas para entregar.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "a", 13);
            i0.ɵɵtext(39, "Ver todas");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 14);
            i0.ɵɵrepeaterCreate(41, HomePageComponent_For_42_Template, 18, 8, "article", 15, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "section", 16)(44, "div", 12)(45, "div")(46, "h2");
            i0.ɵɵtext(47, "Abertas agora");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "p");
            i0.ɵɵtext(49, "Lojas aceitando pedidos neste momento.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "a", 17);
            i0.ɵɵtext(51, "Explorar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 18);
            i0.ɵɵrepeaterCreate(53, HomePageComponent_For_54_Template, 10, 7, "a", 19, _forTrack1, false, HomePageComponent_ForEmpty_55_Template, 7, 0, "article", 20);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "section", 21)(57, "div")(58, "h2");
            i0.ɵɵtext(59, "Cupons de desconto");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 22);
            i0.ɵɵrepeaterCreate(61, HomePageComponent_For_62_Template, 8, 2, "article", 23, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "div")(64, "h2");
            i0.ɵɵtext(65, "Ofertas perto de voce");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "div", 24);
            i0.ɵɵrepeaterCreate(67, HomePageComponent_For_68_Template, 11, 5, "article", 25, _forTrack1, false, HomePageComponent_ForEmpty_69_Template, 7, 0, "article", 20);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵstyleProp("background-image", "linear-gradient(to right, rgba(30, 30, 30, .88), rgba(30, 30, 30, .58), rgba(30, 30, 30, .18)), url(" + ctx.page.heroImage + ")");
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.page.locationLabel);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("formControl", ctx.page.searchControl);
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.page.categories);
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.page.stores);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(7, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.page.openStores);
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.page.coupons);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.page.offerStores);
        } }, dependencies: [i2.CommonModule, i3.ReactiveFormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormControlDirective, i4.MatButtonModule, i4.MatButton, i5.MatCardModule, i6.MatChipsModule, i7.MatFormFieldModule, i8.MatIconModule, i8.MatIcon, i9.MatInputModule, i10.MatListModule, i11.MatProgressBarModule, i12.MatProgressSpinnerModule, i13.MatSelectModule, i14.MatTabsModule, RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.home-hero[_ngcontent-%COMP%] {\n  min-height: 560px;\n  display: grid;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  color: white;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 4rem 0;\n}\n\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .4rem;\n  border-radius: 999px;\n  background: var(--elide-gradient);\n  padding: .45rem .8rem;\n  font-weight: 800;\n  box-shadow: var(--elide-shadow-glow);\n}\n\n.hero-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.location-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  width: fit-content;\n  max-width: 100%;\n  margin-top: 1rem;\n  border: 1px solid rgba(255, 255, 255, .28);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .12);\n  padding: .55rem .85rem;\n  color: rgba(255, 255, 255, .92);\n  backdrop-filter: blur(10px);\n}\n\n.location-bar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-size: 1.1rem;\n  height: 1.1rem;\n  width: 1.1rem;\n}\n\n.location-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.location-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 900;\n  text-decoration: none;\n}\n\nh1[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 1.25rem 0 0;\n  font-size: clamp(3rem, 8vw, 5.4rem);\n  font-weight: 950;\n  line-height: .98;\n}\n\nh1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 1.25rem 0 0;\n  color: rgba(255, 255, 255, .86);\n  font-size: clamp(1.1rem, 2vw, 1.45rem);\n}\n\n.hero-search[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: .8rem;\n  max-width: 860px;\n  border-radius: 999px;\n  background: white;\n  padding: .55rem .55rem .55rem 1.1rem;\n  color: var(--elide-muted);\n  box-shadow: var(--elide-shadow-elegant);\n}\n\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--elide-ink);\n  font: inherit;\n}\n\n.hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  background: var(--elide-gradient) !important;\n  color: white !important;\n  min-width: 130px;\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  color: var(--elide-ink);\n  font-size: clamp(1.55rem, 3vw, 2rem);\n  font-weight: 900;\n}\n\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 1rem;\n}\n\n.category-card[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  gap: .75rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: 1.6rem 1rem;\n  color: var(--elide-ink);\n  text-align: center;\n  text-decoration: none;\n  box-shadow: var(--elide-shadow-card);\n  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;\n}\n\n.category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: rgba(255, 107, 0, .55);\n  box-shadow: var(--elide-shadow-elegant);\n}\n\n.category-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  transform: scale(1.25);\n}\n\n.category-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n  font-size: .88rem;\n  line-height: 1.35;\n}\n\n.delivery-section[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: .25rem;\n}\n\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--elide-muted);\n}\n\n.section-heading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  flex: 0 0 auto;\n  font-weight: 900;\n  text-decoration: none;\n}\n\n.store-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n\n.delivery-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n}\n\n.delivery-card[_ngcontent-%COMP%]   .store-thumb[_ngcontent-%COMP%] {\n  aspect-ratio: 16 / 9;\n  border-radius: 0;\n}\n\n.store-card-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .45rem;\n  padding: .9rem;\n}\n\n.store-card-body[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.store-card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n}\n\n.store-card-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .35rem;\n  font-weight: 700;\n}\n\n.store-card-body[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.status-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .7rem;\n  right: .7rem;\n  border-radius: 999px;\n  background: rgba(33, 150, 83, .94);\n  color: white;\n  font-size: .75rem;\n  font-weight: 900;\n  padding: .35rem .65rem;\n}\n\n.status-chip.closed[_ngcontent-%COMP%] {\n  background: rgba(45, 45, 45, .82);\n}\n\n.muted-band[_ngcontent-%COMP%] {\n  background: #fff8ed;\n}\n\n.compact-store-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: .8rem;\n}\n\n.compact-store[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid rgba(255, 107, 0, .16);\n  border-radius: 8px;\n  background: white;\n  color: var(--elide-ink);\n  padding: .85rem;\n  text-decoration: none;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.compact-store[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%]:first-child {\n  color: var(--elide-orange);\n}\n\n.compact-store[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: .2rem;\n  color: var(--elide-muted);\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .35rem;\n  border: 1px dashed var(--elide-border);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, .72);\n  padding: 1rem;\n  color: var(--elide-muted);\n}\n\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-ink);\n}\n\n.split-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: .85fr 1.15fr;\n  gap: 2rem;\n}\n\n.coupon-list[_ngcontent-%COMP%], \n.store-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n\n.coupon-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-radius: 8px;\n  background: linear-gradient(160deg, #fff8ed, #ffe7c5);\n  padding: 1rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.coupon-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: .3rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.coupon-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 2px dashed rgba(255, 107, 0, .5);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--elide-orange);\n  cursor: pointer;\n  font-weight: 900;\n  padding: .55rem .8rem;\n}\n\n.store-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 72px 1fr auto;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: .85rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.store-thumb[_ngcontent-%COMP%] {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  background-image: url('https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.store-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: .25rem;\n  color: var(--elide-muted);\n  font-size: .9rem;\n}\n\n.store-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .2rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.store-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.dark[_nghost-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .category-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .category-card[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media (max-width: 760px) {\n  .home-hero[_ngcontent-%COMP%] { min-height: 620px; }\n  .hero-search[_ngcontent-%COMP%] { grid-template-columns: auto 1fr; border-radius: 8px; }\n  .hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { grid-column: 1 / -1; width: 100%; }\n  .section-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-direction: column; }\n  .split-section[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .store-row[_ngcontent-%COMP%] { grid-template-columns: 56px 1fr; }\n  .store-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { grid-column: 2; }\n}\n\n@media (max-width: 520px) {\n  .hero-content[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 1180px);\n    padding: 2.5rem 0;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.65rem;\n  }\n\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .hero-search[_ngcontent-%COMP%] {\n    padding: .55rem;\n  }\n\n  .location-bar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .category-card[_ngcontent-%COMP%] {\n    padding: 1.1rem .75rem;\n  }\n\n  .coupon-card[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .coupon-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomePageComponent, [{
        type: Component,
        args: [{ selector: 'elide-home-page', imports: [...MATERIAL, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"home-hero\" [style.background-image]=\"'linear-gradient(to right, rgba(30, 30, 30, .88), rgba(30, 30, 30, .58), rgba(30, 30, 30, .18)), url(' + page.heroImage + ')'\">\n  <div class=\"hero-content\">\n    <span class=\"hero-badge\"><mat-icon>bolt</mat-icon> Delivery para a sua cidade</span>\n    <div class=\"location-bar\" role=\"group\" aria-label=\"Endereco de entrega\">\n      <mat-icon>location_on</mat-icon>\n      <span>{{ page.locationLabel }}</span>\n      <a routerLink=\"/enderecos\">Alterar</a>\n    </div>\n    <h1>Seu pedido, <strong>na sua porta.</strong></h1>\n    <p>Restaurantes, lanchonetes, pizzarias, mercados e farmacias da sua regiao, com entrega rapida e segura.</p>\n    <form class=\"hero-search\" (ngSubmit)=\"page.search()\">\n      <mat-icon>search</mat-icon>\n      <input [formControl]=\"page.searchControl\" placeholder=\"Buscar lojas, pratos ou produtos...\" />\n      <button mat-flat-button type=\"submit\">Buscar</button>\n    </form>\n  </div>\n</section>\n\n<section class=\"elide-section\">\n  <h2>O que voce precisa hoje?</h2>\n  <div class=\"category-grid\">\n    @for (category of page.categories; track category.title) {\n      <a class=\"category-card\" [routerLink]=\"category.path\">\n        <mat-icon>{{ category.icon }}</mat-icon>\n        <strong>{{ category.title }}</strong>\n        <span>{{ category.description }}</span>\n      </a>\n    }\n  </div>\n</section>\n\n<section class=\"elide-section delivery-section\">\n  <div class=\"section-heading\">\n    <div>\n      <h2>Lojas proximas</h2>\n      <p>Opcoes perto do endereco selecionado, prontas para entregar.</p>\n    </div>\n    <a routerLink=\"/busca\">Ver todas</a>\n  </div>\n  <div class=\"store-grid\">\n    @for (store of page.stores; track store.name) {\n      <article class=\"delivery-card\">\n        <div class=\"store-thumb\"></div>\n        <div class=\"store-card-body\">\n          <div>\n            <strong>{{ store.name }}</strong>\n            <span>{{ store.segment }} \u00B7 {{ store.distance }}</span>\n          </div>\n          <small><mat-icon>schedule</mat-icon>{{ store.eta }}</small>\n          <small><mat-icon>payments</mat-icon>{{ store.fee }}</small>\n        </div>\n        <span class=\"status-chip\" [class.closed]=\"!store.open\">{{ store.open ? 'Aberta' : 'Fechada' }}</span>\n      </article>\n    }\n  </div>\n</section>\n\n<section class=\"elide-section delivery-section muted-band\">\n  <div class=\"section-heading\">\n    <div>\n      <h2>Abertas agora</h2>\n      <p>Lojas aceitando pedidos neste momento.</p>\n    </div>\n    <a routerLink=\"/busca\" [queryParams]=\"{ q: 'aberto agora' }\">Explorar</a>\n  </div>\n  <div class=\"compact-store-list\">\n    @for (store of page.openStores; track store.name) {\n      <a class=\"compact-store\" routerLink=\"/busca\" [queryParams]=\"{ q: store.segment }\">\n        <mat-icon>storefront</mat-icon>\n        <span>\n          <strong>{{ store.name }}</strong>\n          <small>{{ store.segment }} \u00B7 {{ store.eta }} \u00B7 {{ store.distance }}</small>\n        </span>\n        <mat-icon>chevron_right</mat-icon>\n      </a>\n    } @empty {\n      <article class=\"empty-state\">\n        <mat-icon>storefront</mat-icon>\n        <strong>Nenhuma loja aberta agora</strong>\n        <span>Atualize o endereco ou tente novamente em alguns minutos.</span>\n      </article>\n    }\n  </div>\n</section>\n\n<section class=\"elide-section split-section\">\n  <div>\n    <h2>Cupons de desconto</h2>\n    <div class=\"coupon-list\">\n      @for (coupon of page.coupons; track coupon.title) {\n        <article class=\"coupon-card\">\n          <div>\n            <strong>{{ coupon.description }}</strong>\n            <span>{{ coupon.title }}</span>\n          </div>\n          <button type=\"button\">COPIAR</button>\n        </article>\n      }\n    </div>\n  </div>\n  <div>\n    <h2>Ofertas perto de voce</h2>\n    <div class=\"store-list\">\n      @for (store of page.offerStores; track store.name) {\n        <article class=\"store-row\">\n          <div class=\"store-thumb\"></div>\n          <div>\n            <strong>{{ store.name }}</strong>\n            <span>{{ store.offer }} \u00B7 {{ store.segment }} \u00B7 {{ store.eta }}</span>\n          </div>\n          <small><mat-icon>star</mat-icon>{{ store.rating }}</small>\n        </article>\n      } @empty {\n        <article class=\"empty-state\">\n          <mat-icon>local_offer</mat-icon>\n          <strong>Nenhuma oferta ativa</strong>\n          <span>Novos cupons aparecem aqui assim que estiverem disponiveis.</span>\n        </article>\n      }\n    </div>\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.home-hero {\n  min-height: 560px;\n  display: grid;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  color: white;\n}\n\n.hero-content {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n  padding: 4rem 0;\n}\n\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: .4rem;\n  border-radius: 999px;\n  background: var(--elide-gradient);\n  padding: .45rem .8rem;\n  font-weight: 800;\n  box-shadow: var(--elide-shadow-glow);\n}\n\n.hero-badge mat-icon {\n  font-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.location-bar {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  width: fit-content;\n  max-width: 100%;\n  margin-top: 1rem;\n  border: 1px solid rgba(255, 255, 255, .28);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .12);\n  padding: .55rem .85rem;\n  color: rgba(255, 255, 255, .92);\n  backdrop-filter: blur(10px);\n}\n\n.location-bar mat-icon {\n  color: var(--elide-orange);\n  font-size: 1.1rem;\n  height: 1.1rem;\n  width: 1.1rem;\n}\n\n.location-bar span {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.location-bar a {\n  color: white;\n  font-weight: 900;\n  text-decoration: none;\n}\n\nh1 {\n  max-width: 760px;\n  margin: 1.25rem 0 0;\n  font-size: clamp(3rem, 8vw, 5.4rem);\n  font-weight: 950;\n  line-height: .98;\n}\n\nh1 strong {\n  color: var(--elide-orange);\n}\n\n.hero-content p {\n  max-width: 720px;\n  margin: 1.25rem 0 0;\n  color: rgba(255, 255, 255, .86);\n  font-size: clamp(1.1rem, 2vw, 1.45rem);\n}\n\n.hero-search {\n  margin-top: 2rem;\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: .8rem;\n  max-width: 860px;\n  border-radius: 999px;\n  background: white;\n  padding: .55rem .55rem .55rem 1.1rem;\n  color: var(--elide-muted);\n  box-shadow: var(--elide-shadow-elegant);\n}\n\n.hero-search input {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--elide-ink);\n  font: inherit;\n}\n\n.hero-search button {\n  border-radius: 999px !important;\n  background: var(--elide-gradient) !important;\n  color: white !important;\n  min-width: 130px;\n}\n\nh2 {\n  margin: 0 0 1.25rem;\n  color: var(--elide-ink);\n  font-size: clamp(1.55rem, 3vw, 2rem);\n  font-weight: 900;\n}\n\n.category-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));\n  gap: 1rem;\n}\n\n.category-card {\n  display: grid;\n  justify-items: center;\n  gap: .75rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: 1.6rem 1rem;\n  color: var(--elide-ink);\n  text-align: center;\n  text-decoration: none;\n  box-shadow: var(--elide-shadow-card);\n  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;\n}\n\n.category-card:hover {\n  transform: translateY(-3px);\n  border-color: rgba(255, 107, 0, .55);\n  box-shadow: var(--elide-shadow-elegant);\n}\n\n.category-card mat-icon {\n  color: var(--elide-orange);\n  transform: scale(1.25);\n}\n\n.category-card span {\n  color: var(--elide-muted);\n  font-size: .88rem;\n  line-height: 1.35;\n}\n\n.delivery-section {\n  padding-top: 1rem;\n}\n\n.section-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n\n.section-heading h2 {\n  margin-bottom: .25rem;\n}\n\n.section-heading p {\n  margin: 0;\n  color: var(--elide-muted);\n}\n\n.section-heading a {\n  color: var(--elide-orange);\n  flex: 0 0 auto;\n  font-weight: 900;\n  text-decoration: none;\n}\n\n.store-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n\n.delivery-card {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n}\n\n.delivery-card .store-thumb {\n  aspect-ratio: 16 / 9;\n  border-radius: 0;\n}\n\n.store-card-body {\n  display: grid;\n  gap: .45rem;\n  padding: .9rem;\n}\n\n.store-card-body span,\n.store-card-body small {\n  color: var(--elide-muted);\n}\n\n.store-card-body small {\n  display: inline-flex;\n  align-items: center;\n  gap: .35rem;\n  font-weight: 700;\n}\n\n.store-card-body mat-icon {\n  color: var(--elide-orange);\n  font-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n.status-chip {\n  position: absolute;\n  top: .7rem;\n  right: .7rem;\n  border-radius: 999px;\n  background: rgba(33, 150, 83, .94);\n  color: white;\n  font-size: .75rem;\n  font-weight: 900;\n  padding: .35rem .65rem;\n}\n\n.status-chip.closed {\n  background: rgba(45, 45, 45, .82);\n}\n\n.muted-band {\n  background: #fff8ed;\n}\n\n.compact-store-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: .8rem;\n}\n\n.compact-store {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: .75rem;\n  border: 1px solid rgba(255, 107, 0, .16);\n  border-radius: 8px;\n  background: white;\n  color: var(--elide-ink);\n  padding: .85rem;\n  text-decoration: none;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.compact-store > mat-icon:first-child {\n  color: var(--elide-orange);\n}\n\n.compact-store small {\n  display: block;\n  margin-top: .2rem;\n  color: var(--elide-muted);\n}\n\n.empty-state {\n  display: grid;\n  gap: .35rem;\n  border: 1px dashed var(--elide-border);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, .72);\n  padding: 1rem;\n  color: var(--elide-muted);\n}\n\n.empty-state mat-icon {\n  color: var(--elide-orange);\n}\n\n.empty-state strong {\n  color: var(--elide-ink);\n}\n\n.split-section {\n  display: grid;\n  grid-template-columns: .85fr 1.15fr;\n  gap: 2rem;\n}\n\n.coupon-list,\n.store-list {\n  display: grid;\n  gap: 1rem;\n}\n\n.coupon-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border-radius: 8px;\n  background: linear-gradient(160deg, #fff8ed, #ffe7c5);\n  padding: 1rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.coupon-card span {\n  display: block;\n  margin-top: .3rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.coupon-card button {\n  border: 2px dashed rgba(255, 107, 0, .5);\n  border-radius: 8px;\n  background: transparent;\n  color: var(--elide-orange);\n  cursor: pointer;\n  font-weight: 900;\n  padding: .55rem .8rem;\n}\n\n.store-row {\n  display: grid;\n  grid-template-columns: 72px 1fr auto;\n  align-items: center;\n  gap: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: .85rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.store-thumb {\n  aspect-ratio: 1;\n  border-radius: 8px;\n  background-image: url('https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.store-row span {\n  display: block;\n  margin-top: .25rem;\n  color: var(--elide-muted);\n  font-size: .9rem;\n}\n\n.store-row small {\n  display: inline-flex;\n  align-items: center;\n  gap: .2rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.store-row mat-icon {\n  font-size: 1rem;\n  height: 1rem;\n  width: 1rem;\n}\n\n:host-context(.dark) h2,\n:host-context(.dark) .category-card {\n  color: white;\n}\n\n@media (max-width: 760px) {\n  .home-hero { min-height: 620px; }\n  .hero-search { grid-template-columns: auto 1fr; border-radius: 8px; }\n  .hero-search button { grid-column: 1 / -1; width: 100%; }\n  .section-heading { align-items: flex-start; flex-direction: column; }\n  .split-section { grid-template-columns: 1fr; }\n  .store-row { grid-template-columns: 56px 1fr; }\n  .store-row small { grid-column: 2; }\n}\n\n@media (max-width: 520px) {\n  .hero-content {\n    width: min(100% - 1rem, 1180px);\n    padding: 2.5rem 0;\n  }\n\n  h1 {\n    font-size: 2.65rem;\n  }\n\n  .hero-content p {\n    font-size: 1rem;\n  }\n\n  .hero-search {\n    padding: .55rem;\n  }\n\n  .location-bar {\n    width: 100%;\n  }\n\n  .category-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .category-card {\n    padding: 1.1rem .75rem;\n  }\n\n  .coupon-card {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .coupon-card button {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomePageComponent, { className: "HomePageComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=home.component.js.map