import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { AdminApiService } from '../../services/admin-api.service';
import { AuthService } from '../../services/auth.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
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
const _forTrack1 = ($index, $item) => $item.id;
function AdminPanelPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AdminPanelPageComponent_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 4);
} if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r2.label)("value", metric_r2.value)("icon", metric_r2.icon);
} }
function AdminPanelPageComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r3.label, ": ", item_r3.value);
} }
function AdminPanelPageComponent_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 13)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const order_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.shortId(order_r4.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", order_r4.storeName, " \u00B7 ", order_r4.customerName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", order_r4.status, " \u00B7 ", ctx_r0.page.money(order_r4.total));
} }
function AdminPanelPageComponent_ForEmpty_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 13)(1, "strong");
    i0.ɵɵtext(2, "Nenhum pedido");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "A API ainda nao retornou pedidos.");
    i0.ɵɵelementEnd()();
} }
function AdminPanelPageComponent_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", status_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r5);
} }
function AdminPanelPageComponent_For_64_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_64_Template_button_click_7_listener() { const store_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editStore(store_r7)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_64_Template_button_click_9_listener() { const store_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteStore(store_r7.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const store_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(store_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", store_r7.segment, " \u00B7 ", store_r7.status);
} }
function AdminPanelPageComponent_For_87_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_87_Template_button_click_7_listener() { const category_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editCategory(category_r9)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_87_Template_button_click_9_listener() { const category_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteCategory(category_r9.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r9.icon);
} }
function AdminPanelPageComponent_For_110_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_110_Template_button_click_7_listener() { const banner_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editBanner(banner_r11)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_110_Template_button_click_9_listener() { const banner_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteBanner(banner_r11.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const banner_r11 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(banner_r11.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(banner_r11.active ? "Ativo" : "Inativo");
} }
function AdminPanelPageComponent_For_133_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_133_Template_button_click_7_listener() { const city_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editCity(city_r13)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_133_Template_button_click_9_listener() { const city_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteCity(city_r13.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const city_r13 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(city_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(city_r13.state);
} }
function AdminPanelPageComponent_For_156_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_156_Template_button_click_7_listener() { const coupon_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editCoupon(coupon_r15)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_156_Template_button_click_9_listener() { const coupon_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteCoupon(coupon_r15.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const coupon_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(coupon_r15.code);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(coupon_r15.discountValue));
} }
function AdminPanelPageComponent_For_179_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_179_Template_button_click_7_listener() { const fee_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editFee(fee_r17)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_179_Template_button_click_9_listener() { const fee_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteFee(fee_r17.id)); });
    i0.ɵɵtext(10, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const fee_r17 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fee_r17.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(fee_r17.percentage ? fee_r17.value + "%" : ctx_r0.page.money(fee_r17.value));
} }
function AdminPanelPageComponent_For_186_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 59);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_186_Template_button_click_7_listener() { const store_r19 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveStore(store_r19.id)); });
    i0.ɵɵtext(8, "Aprovar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_186_Template_button_click_9_listener() { const store_r19 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.rejectStore(store_r19.id)); });
    i0.ɵɵtext(10, "Reprovar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const store_r19 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(store_r19.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", store_r19.document, " \u00B7 ", store_r19.status);
} }
function AdminPanelPageComponent_ForEmpty_187_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "strong");
    i0.ɵɵtext(2, "Sem pendencias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhuma loja aguardando validacao.");
    i0.ɵɵelementEnd()();
} }
function AdminPanelPageComponent_For_192_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 59);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_192_Template_button_click_7_listener() { const courier_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveCourier(courier_r21.id)); });
    i0.ɵɵtext(8, "Aprovar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_192_Template_button_click_9_listener() { const courier_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.rejectCourier(courier_r21.id)); });
    i0.ɵɵtext(10, "Reprovar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const courier_r21 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(courier_r21.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", courier_r21.vehicleType, " \u00B7 ", courier_r21.status);
} }
function AdminPanelPageComponent_ForEmpty_193_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "strong");
    i0.ɵɵtext(2, "Sem pendencias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum entregador aguardando validacao.");
    i0.ɵɵelementEnd()();
} }
function AdminPanelPageComponent_For_216_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r22 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r22.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", entry_r22.storeName || entry_r22.courierName || "Sistema", " \u00B7 ", ctx_r0.page.money(entry_r22.amount));
} }
function AdminPanelPageComponent_ForEmpty_217_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41)(1, "strong");
    i0.ɵɵtext(2, "Sem lancamentos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Nenhum item financeiro retornado.");
    i0.ɵɵelementEnd()();
} }
function AdminPanelPageComponent_For_256_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_256_Template_button_click_7_listener() { const admin_r24 = i0.ɵɵrestoreView(_r23).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editAdmin(admin_r24)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_256_Template_button_click_9_listener() { const admin_r24 = i0.ɵɵrestoreView(_r23).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.approveAdmin(admin_r24.id, !admin_r24.enabled)); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_256_Template_button_click_11_listener() { const admin_r24 = i0.ɵɵrestoreView(_r23).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.deleteAdmin(admin_r24.id)); });
    i0.ɵɵtext(12, "Excluir");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const admin_r24 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(admin_r24.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", admin_r24.username, " \u00B7 ", admin_r24.roles.join(", "), " \u00B7 ", admin_r24.enabled ? "Ativo" : "Inativo");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(admin_r24.enabled ? "Desativar" : "Aprovar");
} }
function AdminPanelPageComponent_For_264_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const log_r25 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(log_r25.action);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", log_r25.resource, " \u00B7 ", log_r25.actorUsername);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 4, log_r25.createdAt, "short"));
} }
function AdminPanelPageComponent_ForEmpty_265_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2, "Sem logs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Acoes administrativas aparecem aqui.");
    i0.ɵɵelementEnd()();
} }
function AdminPanelPageComponent_For_287_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "button", 10);
    i0.ɵɵlistener("click", function AdminPanelPageComponent_For_287_Template_button_click_7_listener() { const setting_r27 = i0.ɵɵrestoreView(_r26).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.editSetting(setting_r27)); });
    i0.ɵɵtext(8, "Editar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const setting_r27 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(setting_r27.keyName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(setting_r27.value);
} }
const fallbackDashboard = {
    revenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    activeStores: 0,
    activeCouriers: 0,
    ordersByStatus: []
};
export class AdminPanelPageComponent {
    constructor() {
        this.api = inject(AdminApiService);
        this.auth = inject(AuthService);
        this.fb = inject(FormBuilder);
        this.page = this;
        this.dashboard = signal(fallbackDashboard, ...(ngDevMode ? [{ debugName: "dashboard" }] : []));
        this.stores = signal([], ...(ngDevMode ? [{ debugName: "stores" }] : []));
        this.couriers = signal([], ...(ngDevMode ? [{ debugName: "couriers" }] : []));
        this.categories = signal([], ...(ngDevMode ? [{ debugName: "categories" }] : []));
        this.banners = signal([], ...(ngDevMode ? [{ debugName: "banners" }] : []));
        this.cities = signal([], ...(ngDevMode ? [{ debugName: "cities" }] : []));
        this.coupons = signal([], ...(ngDevMode ? [{ debugName: "coupons" }] : []));
        this.fees = signal([], ...(ngDevMode ? [{ debugName: "fees" }] : []));
        this.admins = signal([], ...(ngDevMode ? [{ debugName: "admins" }] : []));
        this.orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : []));
        this.financial = signal({ revenue: 0, courierPayout: 0, platformBalance: 0, entries: 0 }, ...(ngDevMode ? [{ debugName: "financial" }] : []));
        this.financialEntries = signal([], ...(ngDevMode ? [{ debugName: "financialEntries" }] : []));
        this.settings = signal([], ...(ngDevMode ? [{ debugName: "settings" }] : []));
        this.audit = signal([], ...(ngDevMode ? [{ debugName: "audit" }] : []));
        this.logs = signal([], ...(ngDevMode ? [{ debugName: "logs" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.editingStoreId = signal(null, ...(ngDevMode ? [{ debugName: "editingStoreId" }] : []));
        this.editingCategoryId = signal(null, ...(ngDevMode ? [{ debugName: "editingCategoryId" }] : []));
        this.editingBannerId = signal(null, ...(ngDevMode ? [{ debugName: "editingBannerId" }] : []));
        this.editingCityId = signal(null, ...(ngDevMode ? [{ debugName: "editingCityId" }] : []));
        this.editingCouponId = signal(null, ...(ngDevMode ? [{ debugName: "editingCouponId" }] : []));
        this.editingFeeId = signal(null, ...(ngDevMode ? [{ debugName: "editingFeeId" }] : []));
        this.editingAdminId = signal(null, ...(ngDevMode ? [{ debugName: "editingAdminId" }] : []));
        this.storeStatuses = ['PENDING_DOCUMENTS', 'PENDING_APPROVAL', 'APPROVED', 'SUSPENDED', 'REJECTED'];
        this.isMaster = computed(() => this.auth.hasRole('MASTER_ADMIN'), ...(ngDevMode ? [{ debugName: "isMaster" }] : []));
        this.pendingStores = computed(() => this.stores().filter((store) => store.status === 'PENDING_APPROVAL' || store.status === 'PENDING_DOCUMENTS'), ...(ngDevMode ? [{ debugName: "pendingStores" }] : []));
        this.pendingCouriers = computed(() => this.couriers().filter((courier) => courier.status === 'PENDING_APPROVAL' || courier.status === 'PENDING_DOCUMENTS'), ...(ngDevMode ? [{ debugName: "pendingCouriers" }] : []));
        this.metrics = computed(() => [
            { label: 'Receita', value: this.money(this.dashboard().revenue), icon: 'payments' },
            { label: 'Pedidos', value: String(this.dashboard().totalOrders), icon: 'receipt_long' },
            { label: 'Usuarios', value: String(this.dashboard().totalUsers), icon: 'group' },
            { label: 'Lojas ativas', value: String(this.dashboard().activeStores), icon: 'storefront' }
        ], ...(ngDevMode ? [{ debugName: "metrics" }] : []));
        this.storeForm = this.fb.nonNullable.group({
            name: ['Nova Loja ELIDE', [Validators.required, Validators.maxLength(160)]],
            document: ['00.000.000/0001-00', [Validators.required, Validators.maxLength(18)]],
            segment: ['Restaurante', [Validators.required, Validators.maxLength(80)]],
            status: ['APPROVED', Validators.required],
            deliveryFee: [6.9, [Validators.required, Validators.min(0)]],
            minimumOrder: [20, [Validators.required, Validators.min(0)]],
            open: [true]
        });
        this.categoryForm = this.fb.nonNullable.group({
            name: ['Restaurantes', [Validators.required, Validators.maxLength(100)]],
            icon: ['restaurant', [Validators.required, Validators.maxLength(80)]],
            active: [true]
        });
        this.bannerForm = this.fb.nonNullable.group({
            title: ['Oferta da semana', [Validators.required, Validators.maxLength(120)]],
            imageUrl: ['/assets/brand/banner.webp', [Validators.required, Validators.maxLength(500)]],
            active: [true]
        });
        this.cityForm = this.fb.nonNullable.group({
            name: ['Limeira', [Validators.required, Validators.maxLength(120)]],
            state: ['SP', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
            active: [true]
        });
        this.couponForm = this.fb.nonNullable.group({
            code: ['ELIDE10', [Validators.required, Validators.maxLength(40)]],
            discountValue: [10, [Validators.required, Validators.min(0)]],
            active: [true]
        });
        this.feeForm = this.fb.nonNullable.group({
            name: ['Comissao padrao', [Validators.required, Validators.maxLength(80)]],
            value: [12, [Validators.required, Validators.min(0)]],
            percentage: [true]
        });
        this.adminForm = this.fb.nonNullable.group({
            username: ['', [Validators.required, Validators.maxLength(120)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['trocar-senha-2026', [Validators.required, Validators.minLength(8)]],
            fullName: ['', [Validators.required, Validators.maxLength(160)]],
            enabled: [true],
            mustChangePassword: [true]
        });
        this.settingForm = this.fb.nonNullable.group({
            keyName: ['platform.support_whatsapp', [Validators.required, Validators.maxLength(120)]],
            value: ['(19) 99999-2026', [Validators.required, Validators.maxLength(1200)]]
        });
    }
    ngOnInit() {
        if (this.auth.profile()?.mustChangePassword) {
            this.message.set('Antes de usar o painel administrativo, altere a senha inicial em Alterar senha.');
        }
        this.load();
    }
    load() {
        this.loading.set(true);
        forkJoin({
            dashboard: this.api.dashboard().pipe(catchError((error) => this.fail('Dashboard', fallbackDashboard, error))),
            stores: this.api.stores().pipe(catchError((error) => this.fail('Lojas', [], error))),
            couriers: this.api.couriers().pipe(catchError((error) => this.fail('Entregadores', [], error))),
            categories: this.api.categories().pipe(catchError((error) => this.fail('Categorias', [], error))),
            banners: this.api.banners().pipe(catchError((error) => this.fail('Banners', [], error))),
            cities: this.api.cities().pipe(catchError((error) => this.fail('Cidades', [], error))),
            coupons: this.api.coupons().pipe(catchError((error) => this.fail('Cupons', [], error))),
            fees: this.api.fees().pipe(catchError((error) => this.fail('Taxas', [], error))),
            admins: this.api.admins().pipe(catchError((error) => this.fail('Administradores', [], error))),
            orders: this.api.orders().pipe(catchError((error) => this.fail('Pedidos', [], error))),
            financial: this.api.financialSummary().pipe(catchError((error) => this.fail('Financeiro', { revenue: 0, courierPayout: 0, platformBalance: 0, entries: 0 }, error))),
            financialEntries: this.api.financialEntries().pipe(catchError((error) => this.fail('Extrato financeiro', [], error))),
            settings: this.api.settings().pipe(catchError((error) => this.fail('Configuracoes', [], error))),
            audit: this.api.audit().pipe(catchError((error) => this.fail('Auditoria', [], error))),
            logs: this.api.logs().pipe(catchError((error) => this.fail('Logs', [], error)))
        }).pipe(finalize(() => this.loading.set(false))).subscribe((data) => {
            this.dashboard.set(data.dashboard);
            this.stores.set(data.stores);
            this.couriers.set(data.couriers);
            this.categories.set(data.categories);
            this.banners.set(data.banners);
            this.cities.set(data.cities);
            this.coupons.set(data.coupons);
            this.fees.set(data.fees);
            this.admins.set(data.admins);
            this.orders.set(data.orders);
            this.financial.set(data.financial);
            this.financialEntries.set(data.financialEntries);
            this.settings.set(data.settings);
            this.audit.set(data.audit);
            this.logs.set(data.logs);
        });
    }
    saveStore() {
        if (this.storeForm.invalid) {
            this.storeForm.markAllAsTouched();
            return;
        }
        const payload = { ...this.storeForm.getRawValue(), cityId: null, ownerId: null };
        const id = this.editingStoreId();
        const request = id ? this.api.updateStore(id, payload) : this.api.createStore(payload);
        request.subscribe({
            next: (store) => {
                this.stores.update((stores) => id ? stores.map((item) => item.id === store.id ? store : item) : [store, ...stores]);
                this.resetStore();
                this.message.set(id ? 'Loja atualizada.' : 'Loja criada.');
            },
            error: () => this.message.set('Nao foi possivel salvar a loja.')
        });
    }
    editStore(store) {
        this.editingStoreId.set(store.id);
        this.storeForm.patchValue({
            name: store.name,
            document: store.document,
            segment: store.segment,
            status: store.status,
            deliveryFee: Number(store.deliveryFee),
            minimumOrder: Number(store.minimumOrder),
            open: store.open
        });
    }
    deleteStore(id) {
        this.api.deleteStore(id).subscribe({
            next: () => {
                this.stores.update((stores) => stores.filter((store) => store.id !== id));
                this.message.set('Loja removida.');
            },
            error: () => this.message.set('Nao foi possivel remover a loja.')
        });
    }
    saveCategory() {
        this.saveCrud(this.categoryForm, this.editingCategoryId, this.api.createCategory.bind(this.api), this.api.updateCategory.bind(this.api), this.categories, this.resetCategory.bind(this), 'Categoria');
    }
    editCategory(category) {
        this.editingCategoryId.set(category.id);
        this.categoryForm.patchValue(category);
    }
    deleteCategory(id) {
        this.deleteCrud(id, this.api.deleteCategory.bind(this.api), this.categories, 'Categoria');
    }
    saveBanner() {
        this.saveCrud(this.bannerForm, this.editingBannerId, this.api.createBanner.bind(this.api), this.api.updateBanner.bind(this.api), this.banners, this.resetBanner.bind(this), 'Banner');
    }
    editBanner(banner) {
        this.editingBannerId.set(banner.id);
        this.bannerForm.patchValue(banner);
    }
    deleteBanner(id) {
        this.deleteCrud(id, this.api.deleteBanner.bind(this.api), this.banners, 'Banner');
    }
    saveCity() {
        this.saveCrud(this.cityForm, this.editingCityId, this.api.createCity.bind(this.api), this.api.updateCity.bind(this.api), this.cities, this.resetCity.bind(this), 'Cidade');
    }
    editCity(city) {
        this.editingCityId.set(city.id);
        this.cityForm.patchValue(city);
    }
    deleteCity(id) {
        this.deleteCrud(id, this.api.deleteCity.bind(this.api), this.cities, 'Cidade');
    }
    saveCoupon() {
        this.saveCrud(this.couponForm, this.editingCouponId, this.api.createCoupon.bind(this.api), this.api.updateCoupon.bind(this.api), this.coupons, this.resetCoupon.bind(this), 'Cupom');
    }
    editCoupon(coupon) {
        this.editingCouponId.set(coupon.id);
        this.couponForm.patchValue({ ...coupon, discountValue: Number(coupon.discountValue) });
    }
    deleteCoupon(id) {
        this.deleteCrud(id, this.api.deleteCoupon.bind(this.api), this.coupons, 'Cupom');
    }
    saveFee() {
        this.saveCrud(this.feeForm, this.editingFeeId, this.api.createFee.bind(this.api), this.api.updateFee.bind(this.api), this.fees, this.resetFee.bind(this), 'Taxa');
    }
    editFee(fee) {
        this.editingFeeId.set(fee.id);
        this.feeForm.patchValue({ ...fee, value: Number(fee.value) });
    }
    deleteFee(id) {
        this.deleteCrud(id, this.api.deleteFee.bind(this.api), this.fees, 'Taxa');
    }
    approveStore(storeId) {
        this.api.approveStore(storeId, { status: 'APPROVED' }).subscribe({
            next: (store) => {
                this.stores.update((stores) => stores.map((item) => item.id === store.id ? store : item));
                this.message.set('Estabelecimento aprovado.');
            },
            error: () => this.message.set('Nao foi possivel aprovar estabelecimento.')
        });
    }
    rejectStore(storeId) {
        this.api.approveStore(storeId, { status: 'REJECTED', reason: 'Documentacao pendente.' }).subscribe({
            next: (store) => {
                this.stores.update((stores) => stores.map((item) => item.id === store.id ? store : item));
                this.message.set('Estabelecimento reprovado.');
            },
            error: () => this.message.set('Nao foi possivel reprovar estabelecimento.')
        });
    }
    approveCourier(courierId) {
        this.api.approveCourier(courierId, { status: 'AVAILABLE' }).subscribe({
            next: (courier) => {
                this.couriers.update((couriers) => couriers.map((item) => item.id === courier.id ? courier : item));
                this.message.set('Entregador aprovado.');
            },
            error: () => this.message.set('Nao foi possivel aprovar entregador.')
        });
    }
    rejectCourier(courierId) {
        this.api.approveCourier(courierId, { status: 'REJECTED', reason: 'Documentacao pendente.' }).subscribe({
            next: (courier) => {
                this.couriers.update((couriers) => couriers.map((item) => item.id === courier.id ? courier : item));
                this.message.set('Entregador reprovado.');
            },
            error: () => this.message.set('Nao foi possivel reprovar entregador.')
        });
    }
    saveAdmin() {
        if (!this.isMaster()) {
            this.message.set('Somente MASTER_ADMIN pode gerenciar administradores.');
            return;
        }
        if (this.adminForm.invalid) {
            this.adminForm.markAllAsTouched();
            return;
        }
        const id = this.editingAdminId();
        const raw = this.adminForm.getRawValue();
        const request = id
            ? this.api.updateAdmin(id, { email: raw.email, fullName: raw.fullName, enabled: raw.enabled, mustChangePassword: raw.mustChangePassword })
            : this.api.createAdmin({ username: raw.username, email: raw.email, password: raw.password, fullName: raw.fullName, role: 'ADMIN', enabled: raw.enabled });
        request.subscribe({
            next: (admin) => {
                this.admins.update((admins) => id ? admins.map((item) => item.id === admin.id ? admin : item) : [admin, ...admins]);
                this.resetAdmin();
                this.message.set(id ? 'Administrador atualizado.' : 'Administrador ADMIN criado com troca obrigatoria de senha.');
            },
            error: () => this.message.set('Nao foi possivel salvar administrador ADMIN.')
        });
    }
    editAdmin(admin) {
        this.editingAdminId.set(admin.id);
        this.adminForm.patchValue({
            username: admin.username,
            email: admin.email,
            fullName: admin.fullName,
            password: 'trocar-senha-2026',
            enabled: admin.enabled,
            mustChangePassword: admin.mustChangePassword
        });
    }
    approveAdmin(adminId, enabled) {
        if (!this.isMaster()) {
            this.message.set('Somente MASTER_ADMIN pode aprovar administradores.');
            return;
        }
        this.api.approveAdmin(adminId, { status: String(enabled) }).subscribe({
            next: (admin) => {
                this.admins.update((admins) => admins.map((item) => item.id === admin.id ? admin : item));
                this.message.set(enabled ? 'Administrador aprovado.' : 'Administrador desativado.');
            },
            error: () => this.message.set('Nao foi possivel alterar aprovacao do ADMIN.')
        });
    }
    deleteAdmin(adminId) {
        if (!this.isMaster()) {
            this.message.set('Somente MASTER_ADMIN pode remover administradores.');
            return;
        }
        this.api.deleteAdmin(adminId).subscribe({
            next: () => {
                this.admins.update((admins) => admins.filter((admin) => admin.id !== adminId));
                this.message.set('Administrador removido.');
            },
            error: () => this.message.set('Nao foi possivel remover administrador.')
        });
    }
    saveSetting() {
        if (this.settingForm.invalid) {
            this.settingForm.markAllAsTouched();
            return;
        }
        this.api.upsertSetting(this.settingForm.getRawValue()).subscribe({
            next: (setting) => {
                this.settings.update((settings) => [setting, ...settings.filter((item) => item.id !== setting.id)]);
                this.message.set('Configuracao salva.');
            },
            error: () => this.message.set('Nao foi possivel salvar configuracao.')
        });
    }
    editSetting(setting) {
        this.settingForm.patchValue(setting);
    }
    resetStore() {
        this.editingStoreId.set(null);
        this.storeForm.reset({ name: 'Nova Loja ELIDE', document: '00.000.000/0001-00', segment: 'Restaurante', status: 'APPROVED', deliveryFee: 6.9, minimumOrder: 20, open: true });
    }
    resetCategory() {
        this.editingCategoryId.set(null);
        this.categoryForm.reset({ name: 'Restaurantes', icon: 'restaurant', active: true });
    }
    resetBanner() {
        this.editingBannerId.set(null);
        this.bannerForm.reset({ title: 'Oferta da semana', imageUrl: '/assets/brand/banner.webp', active: true });
    }
    resetCity() {
        this.editingCityId.set(null);
        this.cityForm.reset({ name: 'Limeira', state: 'SP', active: true });
    }
    resetCoupon() {
        this.editingCouponId.set(null);
        this.couponForm.reset({ code: 'ELIDE10', discountValue: 10, active: true });
    }
    resetFee() {
        this.editingFeeId.set(null);
        this.feeForm.reset({ name: 'Comissao padrao', value: 12, percentage: true });
    }
    resetAdmin() {
        this.editingAdminId.set(null);
        this.adminForm.reset({ username: '', email: '', password: 'trocar-senha-2026', fullName: '', enabled: true, mustChangePassword: true });
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    shortId(id) {
        return `ELD-${id.slice(0, 6).toUpperCase()}`;
    }
    fail(resource, fallback, error) {
        const status = error instanceof HttpErrorResponse ? error.status : 0;
        if (status === 403 && this.auth.profile()?.mustChangePassword) {
            this.message.set('Senha inicial precisa ser alterada antes de usar o painel administrativo.');
        }
        else if (!this.message()) {
            this.message.set(`Nao foi possivel carregar ${resource}. Verifique login/permissoes e API.`);
        }
        return of(fallback);
    }
    saveCrud(form, editingId, create, update, state, reset, label) {
        if (form.invalid) {
            form.markAllAsTouched();
            return;
        }
        const id = editingId();
        const request = id ? update(id, form.getRawValue()) : create(form.getRawValue());
        request.subscribe({
            next: (item) => {
                state.update((items) => id ? items.map((current) => current.id === item.id ? item : current) : [item, ...items]);
                reset();
                this.message.set(id ? `${label} atualizado.` : `${label} criado.`);
            },
            error: () => this.message.set(`Nao foi possivel salvar ${label.toLowerCase()}.`)
        });
    }
    deleteCrud(id, remove, state, label) {
        remove(id).subscribe({
            next: () => {
                state.update((items) => items.filter((item) => item.id !== id));
                this.message.set(`${label} removido.`);
            },
            error: () => this.message.set(`Nao foi possivel remover ${label.toLowerCase()}.`)
        });
    }
    static { this.ɵfac = function AdminPanelPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminPanelPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminPanelPageComponent, selectors: [["elide-admin-panel-page"]], decls: 288, vars: 25, consts: [[1, "admin-page"], ["eyebrow", "Administracao", "title", "Painel Administrativo", "description", "Controle de operacao, RBAC, financeiro, auditoria e configuracoes do sistema."], [1, "api-message"], [1, "metric-grid"], [3, "label", "value", "icon"], [1, "admin-tabs"], ["label", "Operacao"], [1, "tab-panel"], [1, "panel"], [1, "panel-heading"], ["mat-button", "", "type", "button", 3, "click"], [1, "chip-row"], [1, "list-grid"], [1, "item-card"], ["label", "CRUDs"], [1, "tab-panel", "registry-grid"], [1, "admin-form", "dense", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "document"], ["matInput", "", "formControlName", "segment"], ["formControlName", "status"], [3, "value"], ["matInput", "", "type", "number", "formControlName", "deliveryFee"], ["matInput", "", "type", "number", "formControlName", "minimumOrder"], [1, "check-line"], ["type", "checkbox", "formControlName", "open"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "record-list"], [1, "record-row"], ["matInput", "", "formControlName", "icon"], ["type", "checkbox", "formControlName", "active"], ["matInput", "", "formControlName", "title"], ["matInput", "", "formControlName", "imageUrl"], ["matInput", "", "formControlName", "state"], ["matInput", "", "formControlName", "code"], ["matInput", "", "type", "number", "formControlName", "discountValue"], ["matInput", "", "type", "number", "formControlName", "value"], ["type", "checkbox", "formControlName", "percentage"], ["label", "Aprovacoes"], [1, "approval-row"], [1, "row-line"], ["label", "Financeiro"], [1, "finance-grid"], [1, "finance-card"], ["label", "RBAC"], [1, "admin-form", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "password"], ["type", "checkbox", "formControlName", "enabled"], ["type", "checkbox", "formControlName", "mustChangePassword"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["label", "Auditoria"], [1, "audit-list"], ["label", "Configuracoes"], ["matInput", "", "formControlName", "keyName"], ["matInput", "", "formControlName", "value"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function AdminPanelPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, AdminPanelPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵrepeaterCreate(4, AdminPanelPageComponent_For_5_Template, 1, 3, "elide-metric-card", 4, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-tab-group", 5)(7, "mat-tab", 6)(8, "div", 7)(9, "section", 8)(10, "div", 9)(11, "h2");
            i0.ɵɵtext(12, "Pedidos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_13_listener() { return ctx.page.load(); });
            i0.ɵɵtext(14, "Atualizar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵrepeaterCreate(16, AdminPanelPageComponent_For_17_Template, 2, 2, "mat-chip", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 12);
            i0.ɵɵrepeaterCreate(19, AdminPanelPageComponent_For_20_Template, 7, 5, "article", 13, _forTrack1, false, AdminPanelPageComponent_ForEmpty_21_Template, 5, 0, "article", 13);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(22, "mat-tab", 14)(23, "div", 15)(24, "section", 8)(25, "div", 9)(26, "h2");
            i0.ɵɵtext(27, "Lojas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_28_listener() { return ctx.page.resetStore(); });
            i0.ɵɵtext(29, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_30_listener() { return ctx.page.saveStore(); });
            i0.ɵɵelementStart(31, "mat-form-field", 17)(32, "mat-label");
            i0.ɵɵtext(33, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "mat-form-field", 17)(36, "mat-label");
            i0.ɵɵtext(37, "Documento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "input", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "mat-form-field", 17)(40, "mat-label");
            i0.ɵɵtext(41, "Segmento");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(42, "input", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "mat-form-field", 17)(44, "mat-label");
            i0.ɵɵtext(45, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "mat-select", 21);
            i0.ɵɵrepeaterCreate(47, AdminPanelPageComponent_For_48_Template, 2, 2, "mat-option", 22, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "mat-form-field", 17)(50, "mat-label");
            i0.ɵɵtext(51, "Entrega");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(52, "input", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "mat-form-field", 17)(54, "mat-label");
            i0.ɵɵtext(55, "Pedido minimo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(56, "input", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "label", 25);
            i0.ɵɵelement(58, "input", 26);
            i0.ɵɵtext(59, " Loja aberta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "button", 27);
            i0.ɵɵtext(61);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "div", 28);
            i0.ɵɵrepeaterCreate(63, AdminPanelPageComponent_For_64_Template, 11, 3, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "section", 8)(66, "div", 9)(67, "h2");
            i0.ɵɵtext(68, "Categorias");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_69_listener() { return ctx.page.resetCategory(); });
            i0.ɵɵtext(70, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_71_listener() { return ctx.page.saveCategory(); });
            i0.ɵɵelementStart(72, "mat-form-field", 17)(73, "mat-label");
            i0.ɵɵtext(74, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(75, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "mat-form-field", 17)(77, "mat-label");
            i0.ɵɵtext(78, "Icone");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(79, "input", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "label", 25);
            i0.ɵɵelement(81, "input", 31);
            i0.ɵɵtext(82, " Ativa");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "button", 27);
            i0.ɵɵtext(84);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(85, "div", 28);
            i0.ɵɵrepeaterCreate(86, AdminPanelPageComponent_For_87_Template, 11, 2, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "section", 8)(89, "div", 9)(90, "h2");
            i0.ɵɵtext(91, "Banners");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_92_listener() { return ctx.page.resetBanner(); });
            i0.ɵɵtext(93, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(94, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_94_listener() { return ctx.page.saveBanner(); });
            i0.ɵɵelementStart(95, "mat-form-field", 17)(96, "mat-label");
            i0.ɵɵtext(97, "Titulo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(98, "input", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "mat-form-field", 17)(100, "mat-label");
            i0.ɵɵtext(101, "Imagem");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(102, "input", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "label", 25);
            i0.ɵɵelement(104, "input", 31);
            i0.ɵɵtext(105, " Ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "button", 27);
            i0.ɵɵtext(107);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(108, "div", 28);
            i0.ɵɵrepeaterCreate(109, AdminPanelPageComponent_For_110_Template, 11, 2, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(111, "section", 8)(112, "div", 9)(113, "h2");
            i0.ɵɵtext(114, "Cidades");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(115, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_115_listener() { return ctx.page.resetCity(); });
            i0.ɵɵtext(116, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(117, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_117_listener() { return ctx.page.saveCity(); });
            i0.ɵɵelementStart(118, "mat-form-field", 17)(119, "mat-label");
            i0.ɵɵtext(120, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(121, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "mat-form-field", 17)(123, "mat-label");
            i0.ɵɵtext(124, "UF");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(125, "input", 34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(126, "label", 25);
            i0.ɵɵelement(127, "input", 31);
            i0.ɵɵtext(128, " Ativa");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "button", 27);
            i0.ɵɵtext(130);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(131, "div", 28);
            i0.ɵɵrepeaterCreate(132, AdminPanelPageComponent_For_133_Template, 11, 2, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(134, "section", 8)(135, "div", 9)(136, "h2");
            i0.ɵɵtext(137, "Cupons");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_138_listener() { return ctx.page.resetCoupon(); });
            i0.ɵɵtext(139, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(140, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_140_listener() { return ctx.page.saveCoupon(); });
            i0.ɵɵelementStart(141, "mat-form-field", 17)(142, "mat-label");
            i0.ɵɵtext(143, "Codigo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(144, "input", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "mat-form-field", 17)(146, "mat-label");
            i0.ɵɵtext(147, "Desconto");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(148, "input", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(149, "label", 25);
            i0.ɵɵelement(150, "input", 31);
            i0.ɵɵtext(151, " Ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(152, "button", 27);
            i0.ɵɵtext(153);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(154, "div", 28);
            i0.ɵɵrepeaterCreate(155, AdminPanelPageComponent_For_156_Template, 11, 2, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(157, "section", 8)(158, "div", 9)(159, "h2");
            i0.ɵɵtext(160, "Taxas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(161, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_161_listener() { return ctx.page.resetFee(); });
            i0.ɵɵtext(162, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(163, "form", 16);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_163_listener() { return ctx.page.saveFee(); });
            i0.ɵɵelementStart(164, "mat-form-field", 17)(165, "mat-label");
            i0.ɵɵtext(166, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(167, "input", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(168, "mat-form-field", 17)(169, "mat-label");
            i0.ɵɵtext(170, "Valor");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(171, "input", 37);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(172, "label", 25);
            i0.ɵɵelement(173, "input", 38);
            i0.ɵɵtext(174, " Percentual");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(175, "button", 27);
            i0.ɵɵtext(176);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(177, "div", 28);
            i0.ɵɵrepeaterCreate(178, AdminPanelPageComponent_For_179_Template, 11, 2, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(180, "mat-tab", 39)(181, "div", 15)(182, "section", 8)(183, "h2");
            i0.ɵɵtext(184, "Estabelecimentos");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(185, AdminPanelPageComponent_For_186_Template, 11, 3, "div", 40, _forTrack1, false, AdminPanelPageComponent_ForEmpty_187_Template, 5, 0, "div", 41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(188, "section", 8)(189, "h2");
            i0.ɵɵtext(190, "Entregadores");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(191, AdminPanelPageComponent_For_192_Template, 11, 3, "div", 40, _forTrack1, false, AdminPanelPageComponent_ForEmpty_193_Template, 5, 0, "div", 41);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(194, "mat-tab", 42)(195, "div", 7)(196, "section", 43)(197, "article", 44)(198, "span");
            i0.ɵɵtext(199, "Receita");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(200, "strong");
            i0.ɵɵtext(201);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(202, "article", 44)(203, "span");
            i0.ɵɵtext(204, "Repasse entregadores");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(205, "strong");
            i0.ɵɵtext(206);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(207, "article", 44)(208, "span");
            i0.ɵɵtext(209, "Saldo plataforma");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(210, "strong");
            i0.ɵɵtext(211);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(212, "section", 8)(213, "h2");
            i0.ɵɵtext(214, "Extrato");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(215, AdminPanelPageComponent_For_216_Template, 5, 3, "div", 41, _forTrack1, false, AdminPanelPageComponent_ForEmpty_217_Template, 5, 0, "div", 41);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(218, "mat-tab", 45)(219, "div", 15)(220, "section", 8)(221, "div", 9)(222, "h2");
            i0.ɵɵtext(223, "Administradores");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(224, "button", 10);
            i0.ɵɵlistener("click", function AdminPanelPageComponent_Template_button_click_224_listener() { return ctx.page.resetAdmin(); });
            i0.ɵɵtext(225, "Limpar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(226, "form", 46);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_226_listener() { return ctx.page.saveAdmin(); });
            i0.ɵɵelementStart(227, "mat-form-field", 17)(228, "mat-label");
            i0.ɵɵtext(229, "Usuario");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(230, "input", 47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(231, "mat-form-field", 17)(232, "mat-label");
            i0.ɵɵtext(233, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(234, "input", 48);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(235, "mat-form-field", 17)(236, "mat-label");
            i0.ɵɵtext(237, "Nome");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(238, "input", 49);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(239, "mat-form-field", 17)(240, "mat-label");
            i0.ɵɵtext(241, "Senha inicial");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(242, "input", 50);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(243, "label", 25);
            i0.ɵɵelement(244, "input", 51);
            i0.ɵɵtext(245, " Ativo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(246, "label", 25);
            i0.ɵɵelement(247, "input", 52);
            i0.ɵɵtext(248, " Troca obrigatoria");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(249, "button", 53);
            i0.ɵɵtext(250);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(251, "section", 8)(252, "h2");
            i0.ɵɵtext(253, "Lista ADMIN");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(254, "div", 28);
            i0.ɵɵrepeaterCreate(255, AdminPanelPageComponent_For_256_Template, 13, 5, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(257, "mat-tab", 54)(258, "div", 7)(259, "section", 8)(260, "h2");
            i0.ɵɵtext(261, "Auditoria e logs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(262, "div", 55);
            i0.ɵɵrepeaterCreate(263, AdminPanelPageComponent_For_264_Template, 8, 7, "div", null, _forTrack1, false, AdminPanelPageComponent_ForEmpty_265_Template, 5, 0, "div");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(266, "mat-tab", 56)(267, "div", 15)(268, "section", 8)(269, "h2");
            i0.ɵɵtext(270, "Gerais do sistema");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(271, "form", 46);
            i0.ɵɵlistener("ngSubmit", function AdminPanelPageComponent_Template_form_ngSubmit_271_listener() { return ctx.page.saveSetting(); });
            i0.ɵɵelementStart(272, "mat-form-field", 17)(273, "mat-label");
            i0.ɵɵtext(274, "Chave");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(275, "input", 57);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(276, "mat-form-field", 17)(277, "mat-label");
            i0.ɵɵtext(278, "Valor");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(279, "input", 58);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(280, "button", 27);
            i0.ɵɵtext(281, "Salvar configuracao");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(282, "section", 8)(283, "h2");
            i0.ɵɵtext(284, "Atuais");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(285, "div", 28);
            i0.ɵɵrepeaterCreate(286, AdminPanelPageComponent_For_287_Template, 9, 2, "div", 29, _forTrack1);
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.metrics());
            i0.ɵɵadvance(12);
            i0.ɵɵrepeater(ctx.page.dashboard().ordersByStatus);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.page.orders().slice(0, 12));
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("formGroup", ctx.page.storeForm);
            i0.ɵɵadvance(17);
            i0.ɵɵrepeater(ctx.page.storeStatuses);
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate(ctx.page.editingStoreId() ? "Atualizar loja" : "Criar loja");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.stores());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.categoryForm);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.page.editingCategoryId() ? "Atualizar categoria" : "Criar categoria");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.categories());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.bannerForm);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.page.editingBannerId() ? "Atualizar banner" : "Criar banner");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.banners());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.cityForm);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.page.editingCityId() ? "Atualizar cidade" : "Criar cidade");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.cities());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.couponForm);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.page.editingCouponId() ? "Atualizar cupom" : "Criar cupom");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.coupons());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.feeForm);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.page.editingFeeId() ? "Atualizar taxa" : "Criar taxa");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.fees());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.page.pendingStores());
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.page.pendingCouriers());
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.financial().revenue));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.financial().courierPayout));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.page.money(ctx.page.financial().platformBalance));
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.page.financialEntries());
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("formGroup", ctx.page.adminForm);
            i0.ɵɵadvance(23);
            i0.ɵɵproperty("disabled", !ctx.page.isMaster());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.page.editingAdminId() ? "Atualizar ADMIN" : "Criar ADMIN");
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.page.admins());
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.page.audit());
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.settingForm);
            i0.ɵɵadvance(15);
            i0.ɵɵrepeater(ctx.page.settings());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i5.MatChip, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i12.MatSelect, i12.MatOption, i13.MatTabsModule, i13.MatTab, i13.MatTabGroup, ClientHeadingComponent, MetricCardComponent, i1.DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.admin-page[_ngcontent-%COMP%] {\n  width: min(1220px, calc(100% - 2rem));\n  margin: 0 auto;\n  overflow-x: clip;\n  padding: 1.4rem 0 3rem;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.admin-tabs[_ngcontent-%COMP%] {\n  margin-top: 1.4rem;\n  overflow: hidden;\n  border: 1px solid rgba(24, 24, 27, 0.08);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 18px 42px rgba(24, 24, 27, 0.08);\n}\n\n.tab-panel[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.registry-grid[_ngcontent-%COMP%], \n.finance-grid[_ngcontent-%COMP%], \n.list-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.finance-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.panel[_ngcontent-%COMP%], \n.item-card[_ngcontent-%COMP%], \n.finance-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 1px solid rgba(24, 24, 27, 0.08);\n  border-radius: 16px;\n  background: #fff;\n}\n\n.panel[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n  font-size: 1.05rem;\n}\n\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 0.85rem;\n}\n\n.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.chip-row[_ngcontent-%COMP%], \n.compact-counts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n  margin-bottom: 1rem;\n}\n\n.compact-counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.row-line[_ngcontent-%COMP%], \n.approval-row[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.item-card[_ngcontent-%COMP%], \n.finance-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.45rem;\n  min-width: 0;\n}\n\n.compact-counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-items: center;\n  padding: 0.65rem 0.75rem;\n  border-radius: 14px;\n  background: #fafafa;\n  font-weight: 900;\n}\n\n.compact-counts[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.row-line[_ngcontent-%COMP%], \n.record-row[_ngcontent-%COMP%], \n.approval-row[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: space-between;\n  min-width: 0;\n  padding: 0.75rem 0;\n  border-top: 1px solid rgba(24, 24, 27, 0.08);\n}\n\n.row-line[_ngcontent-%COMP%]:first-of-type, \n.record-row[_ngcontent-%COMP%]:first-of-type, \n.approval-row[_ngcontent-%COMP%]:first-of-type, \n.audit-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type {\n  border-top: 0;\n}\n\n.row-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.record-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.approval-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.item-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #18181b;\n}\n\n.row-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.record-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.record-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.approval-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.item-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.item-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.finance-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(24, 24, 27, 0.62);\n}\n\n.record-list[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 360px;\n  overflow: auto;\n  margin-top: 0.9rem;\n}\n\n.record-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  padding: 0.7rem 0;\n  border-top: 1px solid rgba(24, 24, 27, 0.08);\n}\n\n.record-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.16rem;\n  min-width: 0;\n}\n\n.record-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.approval-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.approval-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n  min-width: 0;\n}\n\n.approval-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.admin-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 100%;\n  min-height: 42px;\n  border-radius: 14px;\n  font-weight: 900;\n}\n\n.list-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.item-card[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 0.85rem;\n  background: #fafafa;\n  overflow-wrap: anywhere;\n}\n\n.finance-card[_ngcontent-%COMP%] {\n  flex-direction: column;\n  padding: 1rem;\n  background: linear-gradient(135deg, #fff, #fff7ed);\n  overflow-wrap: anywhere;\n}\n\n.finance-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: var(--elide-orange);\n}\n\n.admin-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\n.admin-form.dense[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.admin-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.check-line[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  min-height: 42px;\n  gap: 0.45rem;\n  min-width: 0;\n  color: rgba(24, 24, 27, 0.72);\n  font-weight: 850;\n}\n\n.audit-list[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.audit-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(90px, 0.35fr) minmax(0, 1fr) auto;\n}\n\n.row-line[_ngcontent-%COMP%], \n.record-row[_ngcontent-%COMP%], \n.approval-row[_ngcontent-%COMP%], \n.audit-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.compact-counts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 980px) {\n  .registry-grid[_ngcontent-%COMP%], \n   .finance-grid[_ngcontent-%COMP%], \n   .list-grid[_ngcontent-%COMP%], \n   .admin-form.dense[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 620px) {\n  .admin-page[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 1220px);\n    padding-top: 0.8rem;\n  }\n\n  .tab-panel[_ngcontent-%COMP%], \n   .panel[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n  }\n\n  .row-line[_ngcontent-%COMP%], \n   .record-row[_ngcontent-%COMP%], \n   .approval-row[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    grid-template-columns: 1fr;\n  }\n\n  .approval-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .record-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .admin-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .admin-form[_ngcontent-%COMP%], \n   .audit-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPanelPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-admin-panel-page', imports: [...MATERIAL, ClientHeadingComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"admin-page\">\n  <elide-client-heading\n    eyebrow=\"Administracao\"\n    title=\"Painel Administrativo\"\n    description=\"Controle de operacao, RBAC, financeiro, auditoria e configuracoes do sistema.\"\n  />\n\n  @if (page.message()) {\n    <p class=\"api-message\">{{ page.message() }}</p>\n  }\n\n  <div class=\"metric-grid\">\n    @for (metric of page.metrics(); track metric.label) {\n      <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n    }\n  </div>\n\n  <mat-tab-group class=\"admin-tabs\">\n    <mat-tab label=\"Operacao\">\n      <div class=\"tab-panel\">\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Pedidos</h2><button mat-button type=\"button\" (click)=\"page.load()\">Atualizar</button></div>\n          <div class=\"chip-row\">\n            @for (item of page.dashboard().ordersByStatus; track item.label) {\n              <mat-chip>{{ item.label }}: {{ item.value }}</mat-chip>\n            }\n          </div>\n          <div class=\"list-grid\">\n            @for (order of page.orders().slice(0, 12); track order.id) {\n              <article class=\"item-card\">\n                <strong>{{ page.shortId(order.id) }}</strong>\n                <span>{{ order.storeName }} \u00B7 {{ order.customerName }}</span>\n                <small>{{ order.status }} \u00B7 {{ page.money(order.total) }}</small>\n              </article>\n            } @empty {\n              <article class=\"item-card\"><strong>Nenhum pedido</strong><span>A API ainda nao retornou pedidos.</span></article>\n            }\n          </div>\n        </section>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"CRUDs\">\n      <div class=\"tab-panel registry-grid\">\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Lojas</h2><button mat-button type=\"button\" (click)=\"page.resetStore()\">Limpar</button></div>\n          <form class=\"admin-form dense\" [formGroup]=\"page.storeForm\" (ngSubmit)=\"page.saveStore()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"name\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Documento</mat-label><input matInput formControlName=\"document\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Segmento</mat-label><input matInput formControlName=\"segment\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Status</mat-label><mat-select formControlName=\"status\">@for (status of page.storeStatuses; track status) { <mat-option [value]=\"status\">{{ status }}</mat-option> }</mat-select></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Entrega</mat-label><input matInput type=\"number\" formControlName=\"deliveryFee\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Pedido minimo</mat-label><input matInput type=\"number\" formControlName=\"minimumOrder\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"open\"> Loja aberta</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingStoreId() ? 'Atualizar loja' : 'Criar loja' }}</button>\n          </form>\n          <div class=\"record-list\">\n            @for (store of page.stores(); track store.id) {\n              <div class=\"record-row\">\n                <span><strong>{{ store.name }}</strong><small>{{ store.segment }} \u00B7 {{ store.status }}</small></span>\n                <div><button mat-button type=\"button\" (click)=\"page.editStore(store)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteStore(store.id)\">Excluir</button></div>\n              </div>\n            }\n          </div>\n        </section>\n\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Categorias</h2><button mat-button type=\"button\" (click)=\"page.resetCategory()\">Limpar</button></div>\n          <form class=\"admin-form dense\" [formGroup]=\"page.categoryForm\" (ngSubmit)=\"page.saveCategory()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"name\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Icone</mat-label><input matInput formControlName=\"icon\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"active\"> Ativa</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingCategoryId() ? 'Atualizar categoria' : 'Criar categoria' }}</button>\n          </form>\n          <div class=\"record-list\">\n            @for (category of page.categories(); track category.id) {\n              <div class=\"record-row\"><span><strong>{{ category.name }}</strong><small>{{ category.icon }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editCategory(category)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteCategory(category.id)\">Excluir</button></div></div>\n            }\n          </div>\n        </section>\n\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Banners</h2><button mat-button type=\"button\" (click)=\"page.resetBanner()\">Limpar</button></div>\n          <form class=\"admin-form dense\" [formGroup]=\"page.bannerForm\" (ngSubmit)=\"page.saveBanner()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Titulo</mat-label><input matInput formControlName=\"title\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Imagem</mat-label><input matInput formControlName=\"imageUrl\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"active\"> Ativo</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingBannerId() ? 'Atualizar banner' : 'Criar banner' }}</button>\n          </form>\n          <div class=\"record-list\">\n            @for (banner of page.banners(); track banner.id) {\n              <div class=\"record-row\"><span><strong>{{ banner.title }}</strong><small>{{ banner.active ? 'Ativo' : 'Inativo' }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editBanner(banner)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteBanner(banner.id)\">Excluir</button></div></div>\n            }\n          </div>\n        </section>\n\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Cidades</h2><button mat-button type=\"button\" (click)=\"page.resetCity()\">Limpar</button></div>\n          <form class=\"admin-form dense\" [formGroup]=\"page.cityForm\" (ngSubmit)=\"page.saveCity()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"name\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>UF</mat-label><input matInput formControlName=\"state\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"active\"> Ativa</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingCityId() ? 'Atualizar cidade' : 'Criar cidade' }}</button>\n          </form>\n          <div class=\"record-list\">\n            @for (city of page.cities(); track city.id) {\n              <div class=\"record-row\"><span><strong>{{ city.name }}</strong><small>{{ city.state }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editCity(city)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteCity(city.id)\">Excluir</button></div></div>\n            }\n          </div>\n        </section>\n\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Cupons</h2><button mat-button type=\"button\" (click)=\"page.resetCoupon()\">Limpar</button></div>\n          <form class=\"admin-form dense\" [formGroup]=\"page.couponForm\" (ngSubmit)=\"page.saveCoupon()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Codigo</mat-label><input matInput formControlName=\"code\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Desconto</mat-label><input matInput type=\"number\" formControlName=\"discountValue\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"active\"> Ativo</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingCouponId() ? 'Atualizar cupom' : 'Criar cupom' }}</button>\n          </form>\n          <div class=\"record-list\">\n            @for (coupon of page.coupons(); track coupon.id) {\n              <div class=\"record-row\"><span><strong>{{ coupon.code }}</strong><small>{{ page.money(coupon.discountValue) }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editCoupon(coupon)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteCoupon(coupon.id)\">Excluir</button></div></div>\n            }\n          </div>\n        </section>\n\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Taxas</h2><button mat-button type=\"button\" (click)=\"page.resetFee()\">Limpar</button></div>\n          <form class=\"admin-form dense\" [formGroup]=\"page.feeForm\" (ngSubmit)=\"page.saveFee()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"name\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Valor</mat-label><input matInput type=\"number\" formControlName=\"value\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"percentage\"> Percentual</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\">{{ page.editingFeeId() ? 'Atualizar taxa' : 'Criar taxa' }}</button>\n          </form>\n          <div class=\"record-list\">\n            @for (fee of page.fees(); track fee.id) {\n              <div class=\"record-row\"><span><strong>{{ fee.name }}</strong><small>{{ fee.percentage ? fee.value + '%' : page.money(fee.value) }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editFee(fee)\">Editar</button><button mat-button type=\"button\" (click)=\"page.deleteFee(fee.id)\">Excluir</button></div></div>\n            }\n          </div>\n        </section>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Aprovacoes\">\n      <div class=\"tab-panel registry-grid\">\n        <section class=\"panel\">\n          <h2>Estabelecimentos</h2>\n          @for (store of page.pendingStores(); track store.id) {\n            <div class=\"approval-row\">\n              <div><strong>{{ store.name }}</strong><span>{{ store.document }} \u00B7 {{ store.status }}</span></div>\n              <div><button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.approveStore(store.id)\">Aprovar</button><button mat-button type=\"button\" (click)=\"page.rejectStore(store.id)\">Reprovar</button></div>\n            </div>\n          } @empty {\n            <div class=\"row-line\"><strong>Sem pendencias</strong><span>Nenhuma loja aguardando validacao.</span></div>\n          }\n        </section>\n        <section class=\"panel\">\n          <h2>Entregadores</h2>\n          @for (courier of page.pendingCouriers(); track courier.id) {\n            <div class=\"approval-row\">\n              <div><strong>{{ courier.fullName }}</strong><span>{{ courier.vehicleType }} \u00B7 {{ courier.status }}</span></div>\n              <div><button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.approveCourier(courier.id)\">Aprovar</button><button mat-button type=\"button\" (click)=\"page.rejectCourier(courier.id)\">Reprovar</button></div>\n            </div>\n          } @empty {\n            <div class=\"row-line\"><strong>Sem pendencias</strong><span>Nenhum entregador aguardando validacao.</span></div>\n          }\n        </section>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Financeiro\">\n      <div class=\"tab-panel\">\n        <section class=\"finance-grid\">\n          <article class=\"finance-card\"><span>Receita</span><strong>{{ page.money(page.financial().revenue) }}</strong></article>\n          <article class=\"finance-card\"><span>Repasse entregadores</span><strong>{{ page.money(page.financial().courierPayout) }}</strong></article>\n          <article class=\"finance-card\"><span>Saldo plataforma</span><strong>{{ page.money(page.financial().platformBalance) }}</strong></article>\n        </section>\n        <section class=\"panel\">\n          <h2>Extrato</h2>\n          @for (entry of page.financialEntries(); track entry.id) {\n            <div class=\"row-line\"><strong>{{ entry.type }}</strong><span>{{ entry.storeName || entry.courierName || 'Sistema' }} \u00B7 {{ page.money(entry.amount) }}</span></div>\n          } @empty {\n            <div class=\"row-line\"><strong>Sem lancamentos</strong><span>Nenhum item financeiro retornado.</span></div>\n          }\n        </section>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"RBAC\">\n      <div class=\"tab-panel registry-grid\">\n        <section class=\"panel\">\n          <div class=\"panel-heading\"><h2>Administradores</h2><button mat-button type=\"button\" (click)=\"page.resetAdmin()\">Limpar</button></div>\n          <form class=\"admin-form\" [formGroup]=\"page.adminForm\" (ngSubmit)=\"page.saveAdmin()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Usuario</mat-label><input matInput formControlName=\"username\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>E-mail</mat-label><input matInput formControlName=\"email\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Nome</mat-label><input matInput formControlName=\"fullName\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Senha inicial</mat-label><input matInput formControlName=\"password\"></mat-form-field>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"enabled\"> Ativo</label>\n            <label class=\"check-line\"><input type=\"checkbox\" formControlName=\"mustChangePassword\"> Troca obrigatoria</label>\n            <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"!page.isMaster()\">{{ page.editingAdminId() ? 'Atualizar ADMIN' : 'Criar ADMIN' }}</button>\n          </form>\n        </section>\n        <section class=\"panel\">\n          <h2>Lista ADMIN</h2>\n          <div class=\"record-list\">\n            @for (admin of page.admins(); track admin.id) {\n              <div class=\"record-row\">\n                <span><strong>{{ admin.fullName }}</strong><small>{{ admin.username }} \u00B7 {{ admin.roles.join(', ') }} \u00B7 {{ admin.enabled ? 'Ativo' : 'Inativo' }}</small></span>\n                <div>\n                  <button mat-button type=\"button\" (click)=\"page.editAdmin(admin)\">Editar</button>\n                  <button mat-button type=\"button\" (click)=\"page.approveAdmin(admin.id, !admin.enabled)\">{{ admin.enabled ? 'Desativar' : 'Aprovar' }}</button>\n                  <button mat-button type=\"button\" (click)=\"page.deleteAdmin(admin.id)\">Excluir</button>\n                </div>\n              </div>\n            }\n          </div>\n        </section>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Auditoria\">\n      <div class=\"tab-panel\">\n        <section class=\"panel\">\n          <h2>Auditoria e logs</h2>\n          <div class=\"audit-list\">\n            @for (log of page.audit(); track log.id) {\n              <div><strong>{{ log.action }}</strong><span>{{ log.resource }} \u00B7 {{ log.actorUsername }}</span><small>{{ log.createdAt | date:'short' }}</small></div>\n            } @empty {\n              <div><strong>Sem logs</strong><span>Acoes administrativas aparecem aqui.</span></div>\n            }\n          </div>\n        </section>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Configuracoes\">\n      <div class=\"tab-panel registry-grid\">\n        <section class=\"panel\">\n          <h2>Gerais do sistema</h2>\n          <form class=\"admin-form\" [formGroup]=\"page.settingForm\" (ngSubmit)=\"page.saveSetting()\">\n            <mat-form-field appearance=\"outline\"><mat-label>Chave</mat-label><input matInput formControlName=\"keyName\"></mat-form-field>\n            <mat-form-field appearance=\"outline\"><mat-label>Valor</mat-label><input matInput formControlName=\"value\"></mat-form-field>\n            <button mat-flat-button color=\"primary\" type=\"submit\">Salvar configuracao</button>\n          </form>\n        </section>\n        <section class=\"panel\">\n          <h2>Atuais</h2>\n          <div class=\"record-list\">\n            @for (setting of page.settings(); track setting.id) {\n              <div class=\"record-row\"><span><strong>{{ setting.keyName }}</strong><small>{{ setting.value }}</small></span><div><button mat-button type=\"button\" (click)=\"page.editSetting(setting)\">Editar</button></div></div>\n            }\n          </div>\n        </section>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.admin-page {\n  width: min(1220px, calc(100% - 2rem));\n  margin: 0 auto;\n  overflow-x: clip;\n  padding: 1.4rem 0 3rem;\n}\n\n.api-message {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.admin-tabs {\n  margin-top: 1.4rem;\n  overflow: hidden;\n  border: 1px solid rgba(24, 24, 27, 0.08);\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 18px 42px rgba(24, 24, 27, 0.08);\n}\n\n.tab-panel {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.registry-grid,\n.finance-grid,\n.list-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.finance-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.panel,\n.item-card,\n.finance-card {\n  min-width: 0;\n  border: 1px solid rgba(24, 24, 27, 0.08);\n  border-radius: 16px;\n  background: #fff;\n}\n\n.panel {\n  padding: 1rem;\n}\n\n.panel h2 {\n  margin: 0 0 0.85rem;\n  font-size: 1.05rem;\n}\n\n.panel-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 0.85rem;\n}\n\n.panel-heading h2 {\n  margin: 0;\n}\n\n.chip-row,\n.compact-counts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n  margin-bottom: 1rem;\n}\n\n.compact-counts span,\n.row-line,\n.approval-row,\n.audit-list div,\n.item-card,\n.finance-card {\n  display: flex;\n  gap: 0.45rem;\n  min-width: 0;\n}\n\n.compact-counts span {\n  align-items: center;\n  padding: 0.65rem 0.75rem;\n  border-radius: 14px;\n  background: #fafafa;\n  font-weight: 900;\n}\n\n.compact-counts mat-icon {\n  color: var(--elide-orange);\n}\n\n.row-line,\n.record-row,\n.approval-row,\n.audit-list div {\n  align-items: center;\n  justify-content: space-between;\n  min-width: 0;\n  padding: 0.75rem 0;\n  border-top: 1px solid rgba(24, 24, 27, 0.08);\n}\n\n.row-line:first-of-type,\n.record-row:first-of-type,\n.approval-row:first-of-type,\n.audit-list div:first-of-type {\n  border-top: 0;\n}\n\n.row-line strong,\n.record-row strong,\n.approval-row strong,\n.audit-list strong,\n.item-card strong {\n  color: #18181b;\n}\n\n.row-line span,\n.record-row span,\n.record-row small,\n.approval-row span,\n.audit-list span,\n.audit-list small,\n.item-card span,\n.item-card small,\n.finance-card span {\n  color: rgba(24, 24, 27, 0.62);\n}\n\n.record-list {\n  display: grid;\n  max-height: 360px;\n  overflow: auto;\n  margin-top: 0.9rem;\n}\n\n.record-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 0.75rem;\n  padding: 0.7rem 0;\n  border-top: 1px solid rgba(24, 24, 27, 0.08);\n}\n\n.record-row > span {\n  display: grid;\n  gap: 0.16rem;\n  min-width: 0;\n}\n\n.record-row > div,\n.approval-row > div:last-child {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.approval-row > div {\n  display: grid;\n  gap: 0.2rem;\n  min-width: 0;\n}\n\n.approval-row button,\n.admin-form button {\n  max-width: 100%;\n  min-height: 42px;\n  border-radius: 14px;\n  font-weight: 900;\n}\n\n.list-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.item-card {\n  flex-direction: column;\n  padding: 0.85rem;\n  background: #fafafa;\n  overflow-wrap: anywhere;\n}\n\n.finance-card {\n  flex-direction: column;\n  padding: 1rem;\n  background: linear-gradient(135deg, #fff, #fff7ed);\n  overflow-wrap: anywhere;\n}\n\n.finance-card strong {\n  font-size: 1.35rem;\n  color: var(--elide-orange);\n}\n\n.admin-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n\n.admin-form.dense {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.admin-form mat-form-field {\n  width: 100%;\n  min-width: 0;\n}\n\n.admin-form button {\n  grid-column: 1 / -1;\n}\n\n.check-line {\n  display: inline-flex;\n  align-items: center;\n  min-height: 42px;\n  gap: 0.45rem;\n  min-width: 0;\n  color: rgba(24, 24, 27, 0.72);\n  font-weight: 850;\n}\n\n.audit-list {\n  display: grid;\n}\n\n.audit-list div {\n  display: grid;\n  grid-template-columns: minmax(90px, 0.35fr) minmax(0, 1fr) auto;\n}\n\n.row-line,\n.record-row,\n.approval-row,\n.audit-list div,\n.compact-counts span {\n  overflow-wrap: anywhere;\n}\n\n@media (max-width: 980px) {\n  .registry-grid,\n  .finance-grid,\n  .list-grid,\n  .admin-form.dense {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 620px) {\n  .admin-page {\n    width: min(100% - 1rem, 1220px);\n    padding-top: 0.8rem;\n  }\n\n  .tab-panel,\n  .panel {\n    padding: 0.8rem;\n  }\n\n  .row-line,\n  .record-row,\n  .approval-row {\n    align-items: flex-start;\n    grid-template-columns: 1fr;\n  }\n\n  .approval-row button,\n  .record-row button,\n  .admin-form button {\n    width: 100%;\n  }\n\n  .admin-form,\n  .audit-list div {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminPanelPageComponent, { className: "AdminPanelPageComponent", filePath: "src/app/pages/admin-panel/admin-panel.component.ts", lineNumber: 50 }); })();
//# sourceMappingURL=admin-panel.component.js.map