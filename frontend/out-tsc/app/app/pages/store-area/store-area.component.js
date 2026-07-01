import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { StoreApiService } from '../../services/store-api.service';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { MetricCardComponent } from '../shared/metric-card.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/icon";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
const _forTrack2 = ($index, $item) => $item.status;
const _forTrack3 = ($index, $item) => $item.title;
function StoreAreaPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "mat-icon");
    i0.ɵɵtext(2, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Conditional_2_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵtext(6, "Tentar novamente");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.error());
} }
function StoreAreaPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "mat-icon");
    i0.ɵɵtext(2, "sync");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Carregando dados do estabelecimento...");
    i0.ɵɵelementEnd()();
} }
function StoreAreaPageComponent_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 9);
} if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r3.label)("value", metric_r3.value)("icon", metric_r3.icon);
} }
function StoreAreaPageComponent_For_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_For_24_Template_button_click_0_listener() { const panel_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.setPanel(panel_r5.id)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const panel_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r1.page.activePanel() === panel_r5.id);
    i0.ɵɵattribute("aria-selected", ctx_r1.page.activePanel() === panel_r5.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(panel_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(panel_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.panelBadge(panel_r5.id));
} }
function StoreAreaPageComponent_Case_26_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "pedido(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r7.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r7.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r7.value);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(row_r7.value > 0 ? "Atencao" : "OK");
} }
function StoreAreaPageComponent_Case_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "article", 17)(2, "span", 5);
    i0.ɵɵtext(3, "Dashboard");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 18)(9, "span")(10, "mat-icon");
    i0.ɵɵtext(11, "fiber_manual_record");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span")(14, "mat-icon");
    i0.ɵɵtext(15, "bolt");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span")(18, "mat-icon");
    i0.ɵɵtext(19, "trending_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "article", 19)(22, "span", 5);
    i0.ɵɵtext(23, "Financeiro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "h3");
    i0.ɵɵtext(25, "Resumo do dia");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 20)(31, "header")(32, "h3");
    i0.ɵɵtext(33, "Pedidos por status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_26_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.setPanel("pedidos")); });
    i0.ɵɵelementStart(35, "mat-icon");
    i0.ɵɵtext(36, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(37, " Ver pedidos");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(38, StoreAreaPageComponent_Case_26_For_39_Template, 12, 4, "div", 21, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(((tmp_1_0 = ctx_r1.page.profile()) == null ? null : tmp_1_0.open) ? "Loja aberta e recebendo pedidos" : "Loja pausada no momento");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", ((tmp_2_0 = ctx_r1.page.dashboard()) == null ? null : tmp_2_0.activeProducts) ?? 0, " produtos ativos, ", ((tmp_2_0 = ctx_r1.page.dashboard()) == null ? null : tmp_2_0.lowStockProducts) ?? 0, " alerta(s) de estoque e ", ctx_r1.page.orders().length, " pedido(s) recentes carregados pela API. ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ((tmp_3_0 = ctx_r1.page.profile()) == null ? null : tmp_3_0.open) ? "Aberto agora" : "Fechado");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ((tmp_4_0 = ctx_r1.page.dashboard()) == null ? null : tmp_4_0.ordersToday) ?? 0, " pedidos hoje");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.page.money(((tmp_5_0 = ctx_r1.page.dashboard()) == null ? null : tmp_5_0.averageTicket) ?? 0), " ticket medio");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(((tmp_6_0 = ctx_r1.page.financialSummary()) == null ? null : tmp_6_0.revenue) ?? ((tmp_6_0 = ctx_r1.page.dashboard()) == null ? null : tmp_6_0.revenueToday) ?? 0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ((tmp_7_0 = ctx_r1.page.financialSummary()) == null ? null : tmp_7_0.deliveredOrders) ?? 0, " pedido(s) entregue(s).");
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.page.dashboardStatusRows());
} }
function StoreAreaPageComponent_Case_27_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r8.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(task_r8.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r8.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r8.status);
} }
function StoreAreaPageComponent_Case_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵrepeaterCreate(1, StoreAreaPageComponent_Case_27_For_2_Template, 10, 4, "article", 23, _forTrack3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "article", 24)(4, "span", 5);
    i0.ɵɵtext(5, "Cadastro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 25)(9, "span")(10, "strong");
    i0.ɵɵtext(11, "Segmento");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span")(14, "strong");
    i0.ɵɵtext(15, "Pedido minimo");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span")(18, "strong");
    i0.ɵɵtext(19, "Taxa de entrega");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span")(22, "strong");
    i0.ɵɵtext(23, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.onboarding());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(((tmp_2_0 = ctx_r1.page.profile()) == null ? null : tmp_2_0.name) ?? "Dados comerciais pendentes");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(((tmp_3_0 = ctx_r1.page.profile()) == null ? null : tmp_3_0.segment) ?? "Nao informado");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(((tmp_4_0 = ctx_r1.page.profile()) == null ? null : tmp_4_0.minimumOrder) ?? 0));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(((tmp_5_0 = ctx_r1.page.profile()) == null ? null : tmp_5_0.deliveryFee) ?? 0));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.profile() ? ctx_r1.page.storeStatusLabel(ctx_r1.page.profile().status) : "Pendente");
} }
function StoreAreaPageComponent_Case_28_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const document_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(document_r10.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(document_r10.fileUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.documentStatusLabel(document_r10.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.dateTime(document_r10.createdAt));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(document_r10.rejectionReason ?? "OK");
} }
function StoreAreaPageComponent_Case_28_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "upload_file");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhum documento enviado pela API ainda. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_28_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "header")(2, "h3");
    i0.ɵɵtext(3, "Documentos enviados");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_28_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, StoreAreaPageComponent_Case_28_For_9_Template, 12, 5, "div", 26, _forTrack1, false, StoreAreaPageComponent_Case_28_ForEmpty_10_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.page.documents());
} }
function StoreAreaPageComponent_Case_29_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const task_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r12.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(task_r12.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r12.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r12.status);
} }
function StoreAreaPageComponent_Case_29_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 29);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_29_For_12_Template_button_click_10_listener() { const product_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.page.toggleProduct(product_r14)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const product_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(product_r14.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.productCategory(product_r14));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", product_r14.stockQuantity, " un.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(product_r14.price));
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.page.actionLoading() === "product-" + product_r14.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", product_r14.active ? "Pausar produto" : "Ativar produto", " ");
} }
function StoreAreaPageComponent_Case_29_ForEmpty_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "restaurant_menu");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhum produto retornado pela API. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_29_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵrepeaterCreate(1, StoreAreaPageComponent_Case_29_For_2_Template, 10, 4, "article", 23, _forTrack3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 20)(4, "header")(5, "h3");
    i0.ɵɵtext(6, "Produtos da loja");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_29_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Sincronizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(11, StoreAreaPageComponent_Case_29_For_12_Template, 12, 6, "div", 28, _forTrack1, false, StoreAreaPageComponent_Case_29_ForEmpty_13_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.catalogTasks());
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.page.products());
} }
function StoreAreaPageComponent_Case_30_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const category_r16 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(category_r16.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r16.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r16.active ? "Ativa" : "Pausada");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.page.products().length, " produto(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(category_r16.active ? "ON" : "OFF");
} }
function StoreAreaPageComponent_Case_30_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "category");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhuma categoria retornada pela API. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_30_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "header")(2, "h3");
    i0.ɵɵtext(3, "Categorias");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_30_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, StoreAreaPageComponent_Case_30_For_9_Template, 12, 5, "div", 30, _forTrack1, false, StoreAreaPageComponent_Case_30_ForEmpty_10_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.page.categories());
} }
function StoreAreaPageComponent_Case_31_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Configure adicionais obrigatorios ou opcionais por produto.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11, "API pronta");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const product_r18 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(product_r18.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.page.productCategory(product_r18));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r18.active ? "Produto ativo" : "Produto pausado");
} }
function StoreAreaPageComponent_Case_31_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "add_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Cadastre produtos para configurar complementos. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_31_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "header")(2, "h3");
    i0.ɵɵtext(3, "Complementos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_31_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.setPanel("produtos")); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "restaurant_menu");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Ver produtos");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, StoreAreaPageComponent_Case_31_For_9_Template, 12, 3, "div", 31, _forTrack1, false, StoreAreaPageComponent_Case_31_ForEmpty_10_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.page.products());
} }
function StoreAreaPageComponent_Case_32_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const hour_r20 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.page.dayName(hour_r20.dayOfWeek));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hour_r20.active ? "Ativo" : "Pausado");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hour_r20.opensAt);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hour_r20.closesAt);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hour_r20.active ? "Aberto" : "Fechado");
} }
function StoreAreaPageComponent_Case_32_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhum horario configurado. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_32_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "header")(2, "h3");
    i0.ɵɵtext(3, "Horarios");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 29);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_32_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.syncTodayHour()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Atualizar hoje ");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, StoreAreaPageComponent_Case_32_For_9_Template, 12, 5, "div", 32, _forTrack1, false, StoreAreaPageComponent_Case_32_ForEmpty_10_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.page.actionLoading() === "hours");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.page.hours());
} }
function StoreAreaPageComponent_Case_33_For_28_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 29);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_33_For_28_Template_button_click_10_listener() { const product_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.page.toggleProduct(product_r23)); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const product_r23 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(product_r23.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r23.stockQuantity <= 5 ? "Estoque baixo" : "Estoque OK");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", product_r23.stockQuantity, " un.");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(product_r23.active ? "Ativo" : "Pausado");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.page.actionLoading() === "product-" + product_r23.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", product_r23.active ? "Pausar" : "Ativar", " ");
} }
function StoreAreaPageComponent_Case_33_ForEmpty_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "inventory_2");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhum produto para controle de estoque. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_33_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "article", 19)(2, "span", 5);
    i0.ɵɵtext(3, "Estoque");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5, "Alertas de ruptura");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "article", 19)(11, "span", 5);
    i0.ɵɵtext(12, "Disponibilidade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h3");
    i0.ɵɵtext(14, "Produtos ativos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "Atualize rapidamente a venda de cada item.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 20)(20, "header")(21, "h3");
    i0.ɵɵtext(22, "Controle de estoque");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_33_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r21); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(27, StoreAreaPageComponent_Case_33_For_28_Template, 12, 6, "div", 28, _forTrack1, false, StoreAreaPageComponent_Case_33_ForEmpty_29_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.page.stockAlerts().length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.page.pausedProducts().length, " produto(s) pausado(s).");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(((tmp_3_0 = ctx_r1.page.dashboard()) == null ? null : tmp_3_0.activeProducts) ?? 0);
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r1.page.products());
} }
function StoreAreaPageComponent_Case_34_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const promotion_r25 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(promotion_r25.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.dateTime(promotion_r25.startsAt));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.dateTime(promotion_r25.endsAt));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(promotion_r25.active ? "Ativa" : "Pausada");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(promotion_r25.active ? "ON" : "OFF");
} }
function StoreAreaPageComponent_Case_34_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "local_offer");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhuma promocao retornada pela API. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_34_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "header")(2, "h3");
    i0.ɵɵtext(3, "Promocoes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_34_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "campaign");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, StoreAreaPageComponent_Case_34_For_9_Template, 12, 5, "div", 32, _forTrack1, false, StoreAreaPageComponent_Case_34_ForEmpty_10_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.page.promotions());
} }
function StoreAreaPageComponent_Case_35_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 35)(1, "header")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-chip");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div")(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "footer")(14, "button", 37);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 29);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_35_For_12_Template_button_click_16_listener() { const order_r28 = i0.ɵɵrestoreView(_r27).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.page.advanceOrder(order_r28)); });
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const order_r28 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.page.shortId(order_r28.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.orderStatusLabel(order_r28.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(order_r28.customerName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(order_r28.total));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.dateTime(order_r28.createdAt));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(order_r28.paymentMethod);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.page.nextStatus(order_r28.status) || ctx_r1.page.actionLoading() === "order-" + order_r28.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.page.nextStatus(order_r28.status) ? "Alterar para " + ctx_r1.page.orderStatusLabel(ctx_r1.page.nextStatus(order_r28.status)) : "Finalizado", " ");
} }
function StoreAreaPageComponent_Case_35_ForEmpty_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 36)(1, "mat-icon");
    i0.ɵɵtext(2, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Nenhum pedido retornado pela API.");
    i0.ɵɵelementEnd()();
} }
function StoreAreaPageComponent_Case_35_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "div")(2, "span", 5);
    i0.ɵɵtext(3, "Pedidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_35_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 34);
    i0.ɵɵrepeaterCreate(11, StoreAreaPageComponent_Case_35_For_12_Template, 18, 8, "article", 35, _forTrack1, false, StoreAreaPageComponent_Case_35_ForEmpty_13_Template, 5, 0, "article", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r1.page.newOrders().length, " novo(s) pedido(s)");
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.page.orders());
} }
function StoreAreaPageComponent_Case_36_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 23)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const task_r30 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r30.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(task_r30.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r30.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(task_r30.status);
} }
function StoreAreaPageComponent_Case_36_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11, "OK");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r31 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r31.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r31.orderId ? ctx_r1.page.shortId(entry_r31.orderId) : "Lancamento");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(entry_r31.amount));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.dateTime(entry_r31.createdAt));
} }
function StoreAreaPageComponent_Case_36_ForEmpty_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "account_balance_wallet");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhum lancamento financeiro retornado. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_36_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵrepeaterCreate(1, StoreAreaPageComponent_Case_36_For_2_Template, 10, 4, "article", 23, _forTrack3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 20)(4, "header")(5, "h3");
    i0.ɵɵtext(6, "Extrato");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_36_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(11, StoreAreaPageComponent_Case_36_For_12_Template, 12, 4, "div", 32, _forTrack1, false, StoreAreaPageComponent_Case_36_ForEmpty_13_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.page.financeReports());
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.page.financialEntries());
} }
function StoreAreaPageComponent_Case_37_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "pedido(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r33.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r33.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r33.value);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(row_r33.value > 0 ? "Com dados" : "Sem dados");
} }
function StoreAreaPageComponent_Case_37_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "article", 19)(2, "span", 5);
    i0.ɵɵtext(3, "Relatorios");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5, "Vendas no periodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "article", 19)(11, "span", 5);
    i0.ɵɵtext(12, "Top produtos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "h3");
    i0.ɵɵtext(14, "Mais vendidos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "Produtos com melhor desempenho retornados pela API.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 20)(20, "header")(21, "h3");
    i0.ɵɵtext(22, "Status no periodo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_37_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25, "bar_chart");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(27, StoreAreaPageComponent_Case_37_For_28_Template, 12, 4, "div", 21, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.page.money(((tmp_1_0 = ctx_r1.page.report()) == null ? null : tmp_1_0.revenue) ?? 0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ((tmp_2_0 = ctx_r1.page.report()) == null ? null : tmp_2_0.orders) ?? 0, " pedido(s), ticket medio de ", ctx_r1.page.money(((tmp_2_0 = ctx_r1.page.report()) == null ? null : tmp_2_0.averageTicket) ?? 0), ".");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(((tmp_3_0 = ctx_r1.page.dashboard()) == null ? null : tmp_3_0.topProducts == null ? null : tmp_3_0.topProducts.length) ?? 0);
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r1.page.reportStatusRows());
} }
function StoreAreaPageComponent_Case_38_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-chip");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const review_r35 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(review_r35.customerName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(review_r35.comment ?? "Sem comentario");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", review_r35.rating, "/5");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.dateTime(review_r35.createdAt));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.page.shortId(review_r35.orderId));
} }
function StoreAreaPageComponent_Case_38_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "reviews");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Nenhuma avaliacao retornada. ");
    i0.ɵɵelementEnd();
} }
function StoreAreaPageComponent_Case_38_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "header")(2, "h3");
    i0.ɵɵtext(3, "Avaliacoes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 14);
    i0.ɵɵlistener("click", function StoreAreaPageComponent_Case_38_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r34); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.page.loadStore()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "reviews");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Atualizar");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(8, StoreAreaPageComponent_Case_38_For_9_Template, 12, 5, "div", 32, _forTrack1, false, StoreAreaPageComponent_Case_38_ForEmpty_10_Template, 4, 0, "div", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.page.reviews());
} }
const orderFlow = {
    CREATED: 'ACCEPTED',
    ACCEPTED: 'PREPARING',
    PREPARING: 'READY_FOR_PICKUP',
    READY_FOR_PICKUP: 'OUT_FOR_DELIVERY',
    OUT_FOR_DELIVERY: 'DELIVERED',
    REFUND_REQUESTED: 'REFUNDED'
};
export class StoreAreaPageComponent {
    constructor() {
        this.api = inject(StoreApiService);
        this.page = this;
        this.activePanel = signal('dashboard', ...(ngDevMode ? [{ debugName: "activePanel" }] : []));
        this.loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.actionLoading = signal(null, ...(ngDevMode ? [{ debugName: "actionLoading" }] : []));
        this.error = signal(null, ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.profile = signal(null, ...(ngDevMode ? [{ debugName: "profile" }] : []));
        this.dashboard = signal(null, ...(ngDevMode ? [{ debugName: "dashboard" }] : []));
        this.categories = signal([], ...(ngDevMode ? [{ debugName: "categories" }] : []));
        this.documents = signal([], ...(ngDevMode ? [{ debugName: "documents" }] : []));
        this.products = signal([], ...(ngDevMode ? [{ debugName: "products" }] : []));
        this.orders = signal([], ...(ngDevMode ? [{ debugName: "orders" }] : []));
        this.hours = signal([], ...(ngDevMode ? [{ debugName: "hours" }] : []));
        this.promotions = signal([], ...(ngDevMode ? [{ debugName: "promotions" }] : []));
        this.financialSummary = signal(null, ...(ngDevMode ? [{ debugName: "financialSummary" }] : []));
        this.financialEntries = signal([], ...(ngDevMode ? [{ debugName: "financialEntries" }] : []));
        this.report = signal(null, ...(ngDevMode ? [{ debugName: "report" }] : []));
        this.reviews = signal([], ...(ngDevMode ? [{ debugName: "reviews" }] : []));
        this.panels = [
            { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
            { id: 'cadastro', label: 'Cadastro', icon: 'storefront' },
            { id: 'documentos', label: 'Documentos', icon: 'upload_file' },
            { id: 'produtos', label: 'Produtos', icon: 'restaurant_menu' },
            { id: 'categorias', label: 'Categorias', icon: 'category' },
            { id: 'complementos', label: 'Complementos', icon: 'add_circle' },
            { id: 'horarios', label: 'Horarios', icon: 'schedule' },
            { id: 'estoque', label: 'Estoque', icon: 'inventory_2' },
            { id: 'promocoes', label: 'Promocoes', icon: 'local_offer' },
            { id: 'pedidos', label: 'Pedidos', icon: 'receipt_long' },
            { id: 'financeiro', label: 'Financeiro', icon: 'account_balance_wallet' },
            { id: 'relatorios', label: 'Relatorios', icon: 'bar_chart' },
            { id: 'avaliacoes', label: 'Avaliacoes', icon: 'reviews' }
        ];
        this.metrics = computed(() => {
            const dashboard = this.dashboard();
            const financial = this.financialSummary();
            return [
                { label: 'Pedidos hoje', value: String(dashboard?.ordersToday ?? 0), icon: 'receipt_long' },
                { label: 'Faturamento', value: this.money(dashboard?.revenueToday ?? financial?.revenue ?? 0), icon: 'payments' },
                { label: 'Ticket medio', value: this.money(dashboard?.averageTicket ?? financial?.averageTicket ?? 0), icon: 'monitoring' },
                { label: 'Avaliacao', value: String((dashboard?.averageRating ?? 0).toFixed(1)), icon: 'star' }
            ];
        }, ...(ngDevMode ? [{ debugName: "metrics" }] : []));
        this.onboarding = computed(() => {
            const profile = this.profile();
            const docs = this.documents();
            return [
                {
                    title: 'Cadastro do estabelecimento',
                    description: profile ? `${profile.name} - ${profile.segment}` : 'Cadastre os dados comerciais para operar na ELIDE.',
                    icon: 'storefront',
                    status: profile ? this.storeStatusLabel(profile.status) : 'Pendente'
                },
                {
                    title: 'Envio de documentacao',
                    description: docs.length ? `${docs.length} documento(s) enviados para analise.` : 'Contrato social, documento do responsavel e comprovante bancario.',
                    icon: 'upload_file',
                    status: docs.length ? this.documentStatusLabel(docs[0].status) : 'Pendente'
                },
                {
                    title: 'Aprovacao pelo administrador',
                    description: 'Analise de risco, validacao dos documentos e liberacao operacional.',
                    icon: 'verified_user',
                    status: profile ? this.storeStatusLabel(profile.status) : 'Aguardando cadastro'
                }
            ];
        }, ...(ngDevMode ? [{ debugName: "onboarding" }] : []));
        this.catalogTasks = computed(() => [
            { title: 'Gestao de produtos', description: 'Fotos, nomes, descricoes, precos e disponibilidade.', icon: 'restaurant_menu', status: `${this.products().length} itens` },
            { title: 'Gestao de categorias', description: 'Organizacao do cardapio por sessoes e ordem de exibicao.', icon: 'category', status: `${this.categories().length} categorias` },
            { title: 'Gestao de complementos', description: 'Adicionais obrigatorios/opcionais, limites e precificacao.', icon: 'add_circle', status: 'API pronta' },
            { title: 'Controle de estoque', description: 'Alertas de ruptura, pausa automatica e saldo por produto.', icon: 'inventory_2', status: `${this.dashboard()?.lowStockProducts ?? 0} alertas` }
        ], ...(ngDevMode ? [{ debugName: "catalogTasks" }] : []));
        this.operationTasks = computed(() => [
            { title: 'Gestao de horarios', description: 'Turnos, feriados, pausa emergencial e tempo de preparo.', icon: 'schedule', status: `${this.hours().length} horarios` },
            { title: 'Promocoes', description: 'Combos, descontos por horario, cupons e campanhas.', icon: 'local_offer', status: `${this.promotions().filter((promotion) => promotion.active).length} ativas` },
            { title: 'Recebimento de pedidos', description: 'Fila ao vivo com prioridade por SLA.', icon: 'notifications_active', status: `${this.orders().filter((order) => order.status === 'CREATED').length} novos` },
            { title: 'Alteracao de status', description: 'Aceitar, preparar, pronto para retirada, entregue ou cancelar.', icon: 'published_with_changes', status: 'Tempo real' }
        ], ...(ngDevMode ? [{ debugName: "operationTasks" }] : []));
        this.financeReports = computed(() => [
            { title: 'Financeiro', description: 'Repasses, taxas, saldo disponivel, agenda de pagamentos e extrato.', icon: 'account_balance_wallet', status: this.money(this.financialSummary()?.pendingSettlement ?? 0) },
            { title: 'Relatorios', description: 'Vendas por periodo, produtos campeoes, cancelamentos e conversao.', icon: 'bar_chart', status: `${this.report()?.orders ?? 0} pedidos` },
            { title: 'Dashboard', description: 'KPIs operacionais, metas, SLA, ruptura e performance por horario.', icon: 'dashboard', status: `${this.dashboard()?.activeProducts ?? 0} ativos` },
            { title: 'Avaliacoes', description: 'Notas, comentarios, respostas publicas e oportunidades de melhoria.', icon: 'reviews', status: `${this.reviews().length} respostas` }
        ], ...(ngDevMode ? [{ debugName: "financeReports" }] : []));
        this.stockAlerts = computed(() => this.products().filter((product) => product.stockQuantity <= 5), ...(ngDevMode ? [{ debugName: "stockAlerts" }] : []));
        this.pausedProducts = computed(() => this.products().filter((product) => !product.active), ...(ngDevMode ? [{ debugName: "pausedProducts" }] : []));
        this.activePromotions = computed(() => this.promotions().filter((promotion) => promotion.active), ...(ngDevMode ? [{ debugName: "activePromotions" }] : []));
        this.newOrders = computed(() => this.orders().filter((order) => order.status === 'CREATED'), ...(ngDevMode ? [{ debugName: "newOrders" }] : []));
        this.dashboardStatusRows = computed(() => this.statusRows(this.dashboard()?.ordersByStatus), ...(ngDevMode ? [{ debugName: "dashboardStatusRows" }] : []));
        this.reportStatusRows = computed(() => this.statusRows(this.report()?.ordersByStatus), ...(ngDevMode ? [{ debugName: "reportStatusRows" }] : []));
    }
    ngOnInit() {
        this.loadStore();
    }
    setPanel(panel) {
        this.activePanel.set(panel);
    }
    loadStore() {
        this.loading.set(true);
        this.error.set(null);
        forkJoin({
            profile: this.safe(this.api.profile(), null),
            dashboard: this.safe(this.api.dashboard(), null),
            categories: this.safe(this.api.categories(), []),
            documents: this.safe(this.api.documents(), []),
            products: this.safe(this.api.products(30), { content: [], totalElements: 0, totalPages: 0, number: 0 }),
            orders: this.safe(this.api.orders(), []),
            hours: this.safe(this.api.hours(), []),
            promotions: this.safe(this.api.promotions(), []),
            financialSummary: this.safe(this.api.financialSummary(), null),
            financialEntries: this.safe(this.api.financialEntries(), []),
            report: this.safe(this.api.reports(), null),
            reviews: this.safe(this.api.reviews(), [])
        }).pipe(finalize(() => this.loading.set(false))).subscribe((data) => {
            this.profile.set(data.profile);
            this.dashboard.set(data.dashboard);
            this.categories.set(data.categories);
            this.documents.set(data.documents);
            this.products.set(data.products.content);
            this.orders.set(data.orders);
            this.hours.set(data.hours);
            this.promotions.set(data.promotions);
            this.financialSummary.set(data.financialSummary);
            this.financialEntries.set(data.financialEntries);
            this.report.set(data.report);
            this.reviews.set(data.reviews);
        });
    }
    toggleProduct(product) {
        this.actionLoading.set(`product-${product.id}`);
        this.api.updateStock(product.id, { stockQuantity: product.stockQuantity, active: !product.active })
            .pipe(finalize(() => this.actionLoading.set(null)))
            .subscribe({
            next: (updated) => {
                this.products.update((products) => products.map((item) => item.id === updated.id ? updated : item));
                this.loadDashboard();
            },
            error: () => this.error.set('Nao foi possivel atualizar o estoque do produto.')
        });
    }
    advanceOrder(order) {
        const status = this.nextStatus(order.status);
        if (!status) {
            return;
        }
        this.actionLoading.set(`order-${order.id}`);
        this.api.updateOrderStatus(order.id, status)
            .pipe(finalize(() => this.actionLoading.set(null)))
            .subscribe({
            next: (updated) => {
                this.orders.update((orders) => orders.map((item) => item.id === updated.id ? updated : item));
                this.loadDashboard();
                this.loadFinancial();
            },
            error: () => this.error.set('Nao foi possivel alterar o status do pedido.')
        });
    }
    syncTodayHour() {
        const dayOfWeek = new Date().getDay();
        this.actionLoading.set('hours');
        this.api.upsertHour({ dayOfWeek, opensAt: '08:00:00', closesAt: '22:00:00', active: true })
            .pipe(finalize(() => this.actionLoading.set(null)))
            .subscribe({
            next: () => this.api.hours().subscribe((hours) => this.hours.set(hours)),
            error: () => this.error.set('Nao foi possivel atualizar o horario de hoje.')
        });
    }
    nextStatus(status) {
        return orderFlow[status] ?? null;
    }
    productCategory(product) {
        return this.categories().find((category) => category.id === product.categoryId)?.name ?? 'Categoria';
    }
    orderStatusLabel(status) {
        const labels = {
            CREATED: 'Novo',
            ACCEPTED: 'Aceito',
            PREPARING: 'Preparando',
            READY_FOR_PICKUP: 'Pronto',
            OUT_FOR_DELIVERY: 'Saiu para entrega',
            DELIVERED: 'Entregue',
            CANCELLED: 'Cancelado',
            REFUND_REQUESTED: 'Reembolso solicitado',
            REFUNDED: 'Reembolsado'
        };
        return labels[status];
    }
    storeStatusLabel(status) {
        const labels = {
            PENDING_DOCUMENTS: 'Documentos pendentes',
            PENDING_APPROVAL: 'Em analise',
            APPROVED: 'Aprovado',
            SUSPENDED: 'Suspenso',
            REJECTED: 'Rejeitado'
        };
        return labels[status] ?? status;
    }
    documentStatusLabel(status) {
        const labels = {
            PENDING_REVIEW: 'Em analise',
            APPROVED: 'Aprovado',
            REJECTED: 'Rejeitado'
        };
        return labels[status] ?? status;
    }
    panelBadge(panel) {
        const badges = {
            dashboard: `${this.dashboard()?.ordersToday ?? 0} hoje`,
            cadastro: this.profile() ? this.storeStatusLabel(this.profile().status) : 'Pendente',
            documentos: `${this.documents().length}`,
            produtos: `${this.products().length}`,
            categorias: `${this.categories().length}`,
            complementos: `${this.products().length} produtos`,
            horarios: `${this.hours().length}`,
            estoque: `${this.stockAlerts().length} alertas`,
            promocoes: `${this.activePromotions().length} ativas`,
            pedidos: `${this.newOrders().length} novos`,
            financeiro: this.money(this.financialSummary()?.pendingSettlement ?? 0),
            relatorios: `${this.report()?.orders ?? 0}`,
            avaliacoes: `${this.reviews().length}`
        };
        return badges[panel];
    }
    dayName(dayOfWeek) {
        const labels = ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
        return labels[dayOfWeek] ?? `Dia ${dayOfWeek}`;
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    shortId(id) {
        return `#${id.slice(0, 8).toUpperCase()}`;
    }
    dateTime(value) {
        return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(value));
    }
    loadDashboard() {
        this.api.dashboard().subscribe({
            next: (dashboard) => this.dashboard.set(dashboard),
            error: () => this.error.set('Nao foi possivel atualizar o dashboard.')
        });
    }
    loadFinancial() {
        forkJoin({
            summary: this.api.financialSummary(),
            entries: this.api.financialEntries(),
            report: this.api.reports()
        }).subscribe({
            next: ({ summary, entries, report }) => {
                this.financialSummary.set(summary);
                this.financialEntries.set(entries);
                this.report.set(report);
            },
            error: () => this.error.set('Nao foi possivel atualizar o financeiro.')
        });
    }
    safe(request, fallback) {
        return request.pipe(catchError(() => {
            this.error.set('Algumas informacoes da loja nao puderam ser carregadas.');
            return of(fallback);
        }));
    }
    statusRows(source) {
        const statuses = [
            'CREATED',
            'ACCEPTED',
            'PREPARING',
            'READY_FOR_PICKUP',
            'OUT_FOR_DELIVERY',
            'DELIVERED',
            'CANCELLED',
            'REFUND_REQUESTED',
            'REFUNDED'
        ];
        return statuses.map((status) => ({ status, label: this.orderStatusLabel(status), value: source?.[status] ?? 0 }));
    }
    static { this.ɵfac = function StoreAreaPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StoreAreaPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StoreAreaPageComponent, selectors: [["store-area-page"]], decls: 39, vars: 9, consts: [[1, "elide-section", "store-page"], ["eyebrow", "Estabelecimento", "actionLabel", "Atualizar", "actionIcon", "refresh", "actionLink", "/loja", 3, "title", "description"], [1, "store-alert"], [1, "store-alert", "store-alert-loading"], ["aria-label", "Resumo operacional da loja", 1, "store-command"], [1, "panel-kicker"], [1, "command-actions"], ["mat-flat-button", "", "type", "button", 3, "click"], [1, "metric-grid"], [3, "label", "value", "icon"], ["role", "tablist", "aria-label", "Area da loja", 1, "store-tabs"], ["mat-button", "", "type", "button", "role", "tab", 3, "is-active"], [1, "store-tab-panel"], [1, "table-panel", "section-table"], ["mat-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "button", "role", "tab", 3, "click"], [1, "store-grid"], [1, "store-panel", "hero-panel"], [1, "status-row"], [1, "store-panel", "compact-panel"], [1, "table-panel"], [1, "table-row", "status-table-row"], [1, "task-grid"], [1, "task-card"], [1, "detail-panel"], [1, "detail-grid"], [1, "table-row", "document-row"], [1, "empty-row"], [1, "table-row", "product-row"], ["mat-flat-button", "", "type", "button", 3, "click", "disabled"], [1, "table-row", "category-row"], [1, "table-row", "addon-row"], [1, "table-row", "operation-row"], [1, "section-toolbar"], [1, "order-board"], [1, "order-card"], [1, "order-card", "empty-card"], ["mat-button", "", "type", "button", "disabled", ""]], template: function StoreAreaPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, StoreAreaPageComponent_Conditional_2_Template, 7, 1, "div", 2);
            i0.ɵɵconditionalCreate(3, StoreAreaPageComponent_Conditional_3_Template, 5, 0, "div", 3);
            i0.ɵɵelementStart(4, "div", 4)(5, "div")(6, "span", 5);
            i0.ɵɵtext(7, "Operacao");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "small");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 6)(13, "mat-chip");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 7);
            i0.ɵɵlistener("click", function StoreAreaPageComponent_Template_button_click_15_listener() { return ctx.page.loadStore(); });
            i0.ɵɵelementStart(16, "mat-icon");
            i0.ɵɵtext(17, "refresh");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(18, " Atualizar ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 8);
            i0.ɵɵrepeaterCreate(20, StoreAreaPageComponent_For_21_Template, 1, 3, "elide-metric-card", 9, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 10);
            i0.ɵɵrepeaterCreate(23, StoreAreaPageComponent_For_24_Template, 7, 6, "button", 11, _forTrack1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 12);
            i0.ɵɵconditionalCreate(26, StoreAreaPageComponent_Case_26_Template, 40, 9)(27, StoreAreaPageComponent_Case_27_Template, 25, 5)(28, StoreAreaPageComponent_Case_28_Template, 11, 1, "div", 13)(29, StoreAreaPageComponent_Case_29_Template, 14, 1)(30, StoreAreaPageComponent_Case_30_Template, 11, 1, "div", 13)(31, StoreAreaPageComponent_Case_31_Template, 11, 1, "div", 13)(32, StoreAreaPageComponent_Case_32_Template, 11, 2, "div", 13)(33, StoreAreaPageComponent_Case_33_Template, 30, 4)(34, StoreAreaPageComponent_Case_34_Template, 11, 1, "div", 13)(35, StoreAreaPageComponent_Case_35_Template, 14, 2)(36, StoreAreaPageComponent_Case_36_Template, 14, 1)(37, StoreAreaPageComponent_Case_37_Template, 29, 4)(38, StoreAreaPageComponent_Case_38_Template, 11, 1, "div", 13);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_4_0;
            let tmp_9_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("title", ((tmp_0_0 = ctx.page.profile()) == null ? null : tmp_0_0.name) ?? "Central da loja")("description", ctx.page.profile() ? ((tmp_1_0 = ctx.page.profile()) == null ? null : tmp_1_0.segment) + " conectado a API do estabelecimento." : "Cadastro, documentos, cardapio, pedidos, financeiro e reputacao em uma unica operacao.");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.error() ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.loading() ? 3 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(((tmp_4_0 = ctx.page.profile()) == null ? null : tmp_4_0.open) ? "Loja aberta" : "Loja pausada");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2("", ctx.page.newOrders().length, " pedido(s) novo(s), ", ctx.page.stockAlerts().length, " alerta(s) de estoque");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.page.profile() ? ctx.page.storeStatusLabel(ctx.page.profile().status) : "Cadastro pendente");
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.page.metrics());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.page.panels);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_9_0 = ctx.page.activePanel()) === "dashboard" ? 26 : tmp_9_0 === "cadastro" ? 27 : tmp_9_0 === "documentos" ? 28 : tmp_9_0 === "produtos" ? 29 : tmp_9_0 === "categorias" ? 30 : tmp_9_0 === "complementos" ? 31 : tmp_9_0 === "horarios" ? 32 : tmp_9_0 === "estoque" ? 33 : tmp_9_0 === "promocoes" ? 34 : tmp_9_0 === "pedidos" ? 35 : tmp_9_0 === "financeiro" ? 36 : tmp_9_0 === "relatorios" ? 37 : tmp_9_0 === "avaliacoes" ? 38 : -1);
        } }, dependencies: [MatButtonModule, i1.MatButton, MatChipsModule, i2.MatChip, MatIconModule, i3.MatIcon, ClientHeadingComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.store-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.35rem;\n  overflow-x: clip;\n}\n\n.store-alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .7rem;\n  border: 1px solid rgba(255, 107, 0, .24);\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: .85rem 1rem;\n  color: var(--elide-ink);\n  font-weight: 750;\n}\n\n.store-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.store-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.store-command[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  padding: 1rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.store-command[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: .2rem;\n  min-width: 0;\n}\n\n.store-command[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-ink);\n  font-size: 1.1rem;\n  font-weight: 950;\n}\n\n.store-command[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.command-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  gap: .65rem;\n}\n\n.command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.section-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  background: var(--elide-gradient) !important;\n  color: #fff !important;\n  font-weight: 900 !important;\n}\n\n.command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.section-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: .35rem;\n}\n\n.store-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: .45rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: .45rem;\n  box-shadow: var(--elide-shadow-card);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n\n.store-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.store-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: inline-grid !important;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  align-items: center;\n  justify-content: center;\n  column-gap: .35rem;\n  min-height: 3.25rem;\n  min-width: 8.75rem;\n  border-radius: 8px !important;\n  color: var(--elide-muted) !important;\n  font-weight: 850 !important;\n  letter-spacing: 0;\n  line-height: 1.1 !important;\n}\n\n.store-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  grid-row: 1 / span 2;\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n}\n\n.store-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.store-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-width: 6.8rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.store-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: .68rem;\n  font-weight: 800;\n  opacity: .72;\n}\n\n.store-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: rgba(255, 107, 0, .1) !important;\n  color: var(--elide-orange) !important;\n}\n\n.store-tab-panel[_ngcontent-%COMP%] {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n  overflow: hidden;\n}\n\n.store-grid[_ngcontent-%COMP%], \n.task-grid[_ngcontent-%COMP%], \n.order-board[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.store-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.5fr) minmax(240px, .7fr);\n}\n\n.task-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.order-board[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.store-panel[_ngcontent-%COMP%], \n.task-card[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%], \n.table-panel[_ngcontent-%COMP%], \n.detail-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 8px 30px -18px rgba(120, 78, 38, .24);\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  min-height: 220px;\n  padding: clamp(1.2rem, 3vw, 2rem);\n  background: linear-gradient(135deg, rgba(255, 107, 0, .1), rgba(255, 184, 77, .16)), #fff;\n}\n\n.panel-kicker[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-size: .75rem;\n  font-weight: 900;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n\n.hero-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.compact-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.table-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: .45rem 0;\n  color: var(--elide-ink);\n  letter-spacing: 0;\n}\n\n.hero-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.compact-panel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.task-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--elide-muted);\n}\n\n.status-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .65rem;\n  margin-top: 1.25rem;\n}\n\n.status-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: .35rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .78);\n  padding: .5rem .7rem;\n  color: var(--elide-ink);\n  font-weight: 800;\n}\n\n.status-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  color: var(--elide-orange);\n  font-size: 18px;\n}\n\n.compact-panel[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: center;\n  gap: .35rem;\n  padding: 1.3rem;\n}\n\n.compact-panel[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-size: 1.9rem;\n  font-weight: 950;\n}\n\n.detail-panel[_ngcontent-%COMP%], \n.section-toolbar[_ngcontent-%COMP%] {\n  margin: 0 1rem 1rem;\n  padding: 1rem;\n}\n\n.detail-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.section-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: .25rem 0 0;\n  color: var(--elide-ink);\n  letter-spacing: 0;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: .75rem;\n  margin-top: 1rem;\n}\n\n.detail-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .25rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  padding: .85rem;\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.detail-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-ink);\n  font-size: .8rem;\n  text-transform: uppercase;\n}\n\n.section-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.task-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: .9rem;\n  min-width: 0;\n  padding: 1rem;\n}\n\n.task-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.table-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.task-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .1);\n  color: var(--elide-orange);\n}\n\n.task-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--elide-ink);\n}\n\n.task-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: .35rem 0 .7rem;\n  line-height: 1.45;\n}\n\n.task-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border-radius: 999px;\n  background: rgba(255, 107, 0, .09);\n  padding: .28rem .55rem;\n  color: var(--elide-orange);\n  font-size: .78rem;\n  font-weight: 850;\n}\n\n.table-panel[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 0 1rem 1rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.inline-panel[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n\n.table-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 110px 110px 90px;\n  align-items: center;\n  gap: .75rem;\n  padding: .85rem 1rem;\n}\n\n.document-row[_ngcontent-%COMP%], \n.operation-row[_ngcontent-%COMP%], \n.category-row[_ngcontent-%COMP%], \n.addon-row[_ngcontent-%COMP%], \n.status-table-row[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) minmax(92px, auto) minmax(120px, auto) minmax(80px, auto);\n}\n\n.product-row[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) minmax(86px, auto) minmax(96px, auto) minmax(130px, auto);\n}\n\n.table-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-self: end;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.empty-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  padding: 1rem;\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.empty-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.empty-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.table-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--elide-border);\n}\n\n.table-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  justify-self: end;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.table-row[_ngcontent-%COMP%]    + .table-row[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--elide-border);\n}\n\n.table-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: .2rem;\n}\n\n.hero-panel[_ngcontent-%COMP%], \n.compact-panel[_ngcontent-%COMP%], \n.task-card[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%], \n.table-row[_ngcontent-%COMP%], \n.empty-row[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n\n.order-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: .8rem;\n  padding: 1rem;\n}\n\n.order-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.order-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: .75rem;\n}\n\n.order-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.order-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  font-weight: 850 !important;\n}\n\n.order-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  background: var(--elide-gradient) !important;\n  color: white !important;\n}\n\n.empty-card[_ngcontent-%COMP%] {\n  align-content: center;\n  justify-items: center;\n  min-height: 12rem;\n  text-align: center;\n}\n\n.dark[_nghost-%COMP%]   .store-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .store-panel[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .task-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .task-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .order-card[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-card[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .table-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-panel[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .detail-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-panel[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-toolbar[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-toolbar[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .store-command[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .store-command[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .store-tabs[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .store-tabs[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .store-tab-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .store-tab-panel[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .store-alert[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .store-alert[_ngcontent-%COMP%] {\n  background: #171717;\n}\n\n.dark[_nghost-%COMP%]   .hero-panel[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-panel[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 107, 0, .15), rgba(255, 184, 77, .1)), #171717;\n}\n\n.dark[_nghost-%COMP%]   .hero-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .hero-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .compact-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .compact-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .table-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .detail-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .section-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .section-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .store-command[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .store-command[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .task-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .task-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .order-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .order-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .table-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .table-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .detail-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .detail-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.dark[_nghost-%COMP%]   .status-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.dark[_nghost-%COMP%]   .status-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .status-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .08);\n}\n\n@media (max-width: 860px) {\n  .store-command[_ngcontent-%COMP%], \n   .section-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .command-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .store-tabs[_ngcontent-%COMP%] {\n    margin-inline: -.25rem;\n  }\n\n  .store-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 8.7rem;\n  }\n\n  .store-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .table-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .table-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%], \n   .table-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n\n  .product-row[_ngcontent-%COMP%], \n   .document-row[_ngcontent-%COMP%], \n   .operation-row[_ngcontent-%COMP%], \n   .category-row[_ngcontent-%COMP%], \n   .addon-row[_ngcontent-%COMP%], \n   .status-table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  .store-grid[_ngcontent-%COMP%], \n   .task-grid[_ngcontent-%COMP%], \n   .order-board[_ngcontent-%COMP%] {\n    padding: .75rem;\n  }\n\n  .table-panel[_ngcontent-%COMP%] {\n    margin: 0 .75rem .75rem;\n  }\n\n  .task-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .store-alert[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .command-actions[_ngcontent-%COMP%], \n   .command-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .section-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .command-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .order-card[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StoreAreaPageComponent, [{
        type: Component,
        args: [{ selector: 'store-area-page', standalone: true, imports: [MatButtonModule, MatChipsModule, MatIconModule, ClientHeadingComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section store-page\">\n  <elide-client-heading\n    eyebrow=\"Estabelecimento\"\n    [title]=\"page.profile()?.name ?? 'Central da loja'\"\n    [description]=\"page.profile() ? page.profile()?.segment + ' conectado a API do estabelecimento.' : 'Cadastro, documentos, cardapio, pedidos, financeiro e reputacao em uma unica operacao.'\"\n    actionLabel=\"Atualizar\"\n    actionIcon=\"refresh\"\n    actionLink=\"/loja\"\n  />\n\n  @if (page.error()) {\n    <div class=\"store-alert\">\n      <mat-icon>info</mat-icon>\n      <span>{{ page.error() }}</span>\n      <button mat-button type=\"button\" (click)=\"page.loadStore()\">Tentar novamente</button>\n    </div>\n  }\n\n  @if (page.loading()) {\n    <div class=\"store-alert store-alert-loading\">\n      <mat-icon>sync</mat-icon>\n      <span>Carregando dados do estabelecimento...</span>\n    </div>\n  }\n\n  <div class=\"store-command\" aria-label=\"Resumo operacional da loja\">\n    <div>\n      <span class=\"panel-kicker\">Operacao</span>\n      <strong>{{ page.profile()?.open ? 'Loja aberta' : 'Loja pausada' }}</strong>\n      <small>{{ page.newOrders().length }} pedido(s) novo(s), {{ page.stockAlerts().length }} alerta(s) de estoque</small>\n    </div>\n    <div class=\"command-actions\">\n      <mat-chip>{{ page.profile() ? page.storeStatusLabel(page.profile()!.status) : 'Cadastro pendente' }}</mat-chip>\n      <button mat-flat-button type=\"button\" (click)=\"page.loadStore()\">\n        <mat-icon>refresh</mat-icon>\n        Atualizar\n      </button>\n    </div>\n  </div>\n\n  <div class=\"metric-grid\">\n    @for (metric of page.metrics(); track metric.label) {\n      <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n    }\n  </div>\n\n  <div class=\"store-tabs\" role=\"tablist\" aria-label=\"Area da loja\">\n    @for (panel of page.panels; track panel.id) {\n      <button\n        mat-button\n        type=\"button\"\n        role=\"tab\"\n        [class.is-active]=\"page.activePanel() === panel.id\"\n        [attr.aria-selected]=\"page.activePanel() === panel.id\"\n        (click)=\"page.setPanel(panel.id)\"\n      >\n        <mat-icon>{{ panel.icon }}</mat-icon>\n        <span>{{ panel.label }}</span>\n        <small>{{ page.panelBadge(panel.id) }}</small>\n      </button>\n    }\n  </div>\n\n  <div class=\"store-tab-panel\">\n    @switch (page.activePanel()) {\n      @case ('dashboard') {\n        <div class=\"store-grid\">\n          <article class=\"store-panel hero-panel\">\n            <span class=\"panel-kicker\">Dashboard</span>\n            <h2>{{ page.profile()?.open ? 'Loja aberta e recebendo pedidos' : 'Loja pausada no momento' }}</h2>\n            <p>\n              {{ page.dashboard()?.activeProducts ?? 0 }} produtos ativos,\n              {{ page.dashboard()?.lowStockProducts ?? 0 }} alerta(s) de estoque e\n              {{ page.orders().length }} pedido(s) recentes carregados pela API.\n            </p>\n            <div class=\"status-row\">\n              <span><mat-icon>fiber_manual_record</mat-icon> {{ page.profile()?.open ? 'Aberto agora' : 'Fechado' }}</span>\n              <span><mat-icon>bolt</mat-icon> {{ page.dashboard()?.ordersToday ?? 0 }} pedidos hoje</span>\n              <span><mat-icon>trending_up</mat-icon> {{ page.money(page.dashboard()?.averageTicket ?? 0) }} ticket medio</span>\n            </div>\n          </article>\n\n          <article class=\"store-panel compact-panel\">\n            <span class=\"panel-kicker\">Financeiro</span>\n            <h3>Resumo do dia</h3>\n            <strong>{{ page.money(page.financialSummary()?.revenue ?? page.dashboard()?.revenueToday ?? 0) }}</strong>\n            <span>{{ page.financialSummary()?.deliveredOrders ?? 0 }} pedido(s) entregue(s).</span>\n          </article>\n        </div>\n\n        <div class=\"table-panel\">\n          <header>\n            <h3>Pedidos por status</h3>\n            <button mat-button type=\"button\" (click)=\"page.setPanel('pedidos')\"><mat-icon>receipt_long</mat-icon> Ver pedidos</button>\n          </header>\n          @for (row of page.dashboardStatusRows(); track row.status) {\n            <div class=\"table-row status-table-row\">\n              <span><strong>{{ row.label }}</strong><small>{{ row.status }}</small></span>\n              <span>{{ row.value }}</span>\n              <span>pedido(s)</span>\n              <mat-chip>{{ row.value > 0 ? 'Atencao' : 'OK' }}</mat-chip>\n            </div>\n          }\n        </div>\n      }\n\n      @case ('cadastro') {\n        <div class=\"task-grid\">\n          @for (task of page.onboarding(); track task.title) {\n            <article class=\"task-card\">\n              <mat-icon>{{ task.icon }}</mat-icon>\n              <div>\n                <strong>{{ task.title }}</strong>\n                <p>{{ task.description }}</p>\n                <span>{{ task.status }}</span>\n              </div>\n            </article>\n          }\n        </div>\n\n        <article class=\"detail-panel\">\n          <span class=\"panel-kicker\">Cadastro</span>\n          <h3>{{ page.profile()?.name ?? 'Dados comerciais pendentes' }}</h3>\n          <div class=\"detail-grid\">\n            <span><strong>Segmento</strong>{{ page.profile()?.segment ?? 'Nao informado' }}</span>\n            <span><strong>Pedido minimo</strong>{{ page.money(page.profile()?.minimumOrder ?? 0) }}</span>\n            <span><strong>Taxa de entrega</strong>{{ page.money(page.profile()?.deliveryFee ?? 0) }}</span>\n            <span><strong>Status</strong>{{ page.profile() ? page.storeStatusLabel(page.profile()!.status) : 'Pendente' }}</span>\n          </div>\n        </article>\n      }\n\n      @case ('documentos') {\n        <div class=\"table-panel section-table\">\n          <header>\n            <h3>Documentos enviados</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>refresh</mat-icon> Atualizar</button>\n          </header>\n          @for (document of page.documents(); track document.id) {\n            <div class=\"table-row document-row\">\n              <span>\n                <strong>{{ document.type }}</strong>\n                <small>{{ document.fileUrl }}</small>\n              </span>\n              <span>{{ page.documentStatusLabel(document.status) }}</span>\n              <span>{{ page.dateTime(document.createdAt) }}</span>\n              <mat-chip>{{ document.rejectionReason ?? 'OK' }}</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>upload_file</mat-icon>\n              Nenhum documento enviado pela API ainda.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('produtos') {\n        <div class=\"task-grid\">\n          @for (task of page.catalogTasks(); track task.title) {\n            <article class=\"task-card\">\n              <mat-icon>{{ task.icon }}</mat-icon>\n              <div>\n                <strong>{{ task.title }}</strong>\n                <p>{{ task.description }}</p>\n                <span>{{ task.status }}</span>\n              </div>\n            </article>\n          }\n        </div>\n\n        <div class=\"table-panel\">\n          <header>\n            <h3>Produtos da loja</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>refresh</mat-icon> Sincronizar</button>\n          </header>\n          @for (product of page.products(); track product.id) {\n            <div class=\"table-row product-row\">\n              <span>\n                <strong>{{ product.name }}</strong>\n                <small>{{ page.productCategory(product) }}</small>\n              </span>\n              <span>{{ product.stockQuantity }} un.</span>\n              <span>{{ page.money(product.price) }}</span>\n              <button\n                mat-flat-button\n                type=\"button\"\n                (click)=\"page.toggleProduct(product)\"\n                [disabled]=\"page.actionLoading() === 'product-' + product.id\"\n              >\n                {{ product.active ? 'Pausar produto' : 'Ativar produto' }}\n              </button>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>restaurant_menu</mat-icon>\n              Nenhum produto retornado pela API.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('categorias') {\n        <div class=\"table-panel section-table\">\n          <header>\n            <h3>Categorias</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>refresh</mat-icon> Atualizar</button>\n          </header>\n          @for (category of page.categories(); track category.id) {\n            <div class=\"table-row category-row\">\n              <span><strong>{{ category.name }}</strong><small>{{ category.icon }}</small></span>\n              <span>{{ category.active ? 'Ativa' : 'Pausada' }}</span>\n              <span>{{ page.products().length }} produto(s)</span>\n              <mat-chip>{{ category.active ? 'ON' : 'OFF' }}</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>category</mat-icon>\n              Nenhuma categoria retornada pela API.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('complementos') {\n        <div class=\"table-panel section-table\">\n          <header>\n            <h3>Complementos</h3>\n            <button mat-button type=\"button\" (click)=\"page.setPanel('produtos')\"><mat-icon>restaurant_menu</mat-icon> Ver produtos</button>\n          </header>\n          @for (product of page.products(); track product.id) {\n            <div class=\"table-row addon-row\">\n              <span><strong>{{ product.name }}</strong><small>Configure adicionais obrigatorios ou opcionais por produto.</small></span>\n              <span>{{ page.productCategory(product) }}</span>\n              <span>{{ product.active ? 'Produto ativo' : 'Produto pausado' }}</span>\n              <mat-chip>API pronta</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>add_circle</mat-icon>\n              Cadastre produtos para configurar complementos.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('horarios') {\n        <div class=\"table-panel section-table\">\n          <header>\n            <h3>Horarios</h3>\n            <button mat-flat-button type=\"button\" (click)=\"page.syncTodayHour()\" [disabled]=\"page.actionLoading() === 'hours'\">\n              <mat-icon>schedule</mat-icon>\n              Atualizar hoje\n            </button>\n          </header>\n          @for (hour of page.hours(); track hour.id) {\n            <div class=\"table-row operation-row\">\n              <span><strong>{{ page.dayName(hour.dayOfWeek) }}</strong><small>{{ hour.active ? 'Ativo' : 'Pausado' }}</small></span>\n              <span>{{ hour.opensAt }}</span>\n              <span>{{ hour.closesAt }}</span>\n              <mat-chip>{{ hour.active ? 'Aberto' : 'Fechado' }}</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>schedule</mat-icon>\n              Nenhum horario configurado.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('estoque') {\n        <div class=\"store-grid\">\n          <article class=\"store-panel compact-panel\">\n            <span class=\"panel-kicker\">Estoque</span>\n            <h3>Alertas de ruptura</h3>\n            <strong>{{ page.stockAlerts().length }}</strong>\n            <span>{{ page.pausedProducts().length }} produto(s) pausado(s).</span>\n          </article>\n          <article class=\"store-panel compact-panel\">\n            <span class=\"panel-kicker\">Disponibilidade</span>\n            <h3>Produtos ativos</h3>\n            <strong>{{ page.dashboard()?.activeProducts ?? 0 }}</strong>\n            <span>Atualize rapidamente a venda de cada item.</span>\n          </article>\n        </div>\n\n        <div class=\"table-panel\">\n          <header>\n            <h3>Controle de estoque</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>refresh</mat-icon> Atualizar</button>\n          </header>\n          @for (product of page.products(); track product.id) {\n            <div class=\"table-row product-row\">\n              <span><strong>{{ product.name }}</strong><small>{{ product.stockQuantity <= 5 ? 'Estoque baixo' : 'Estoque OK' }}</small></span>\n              <span>{{ product.stockQuantity }} un.</span>\n              <span>{{ product.active ? 'Ativo' : 'Pausado' }}</span>\n              <button\n                mat-flat-button\n                type=\"button\"\n                (click)=\"page.toggleProduct(product)\"\n                [disabled]=\"page.actionLoading() === 'product-' + product.id\"\n              >\n                {{ product.active ? 'Pausar' : 'Ativar' }}\n              </button>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>inventory_2</mat-icon>\n              Nenhum produto para controle de estoque.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('promocoes') {\n        <div class=\"table-panel section-table\">\n          <header>\n            <h3>Promocoes</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>campaign</mat-icon> Atualizar</button>\n          </header>\n          @for (promotion of page.promotions(); track promotion.id) {\n            <div class=\"table-row operation-row\">\n              <span><strong>{{ promotion.name }}</strong><small>{{ page.dateTime(promotion.startsAt) }}</small></span>\n              <span>{{ page.dateTime(promotion.endsAt) }}</span>\n              <span>{{ promotion.active ? 'Ativa' : 'Pausada' }}</span>\n              <mat-chip>{{ promotion.active ? 'ON' : 'OFF' }}</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>local_offer</mat-icon>\n              Nenhuma promocao retornada pela API.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('pedidos') {\n        <div class=\"section-toolbar\">\n          <div>\n            <span class=\"panel-kicker\">Pedidos</span>\n            <h3>{{ page.newOrders().length }} novo(s) pedido(s)</h3>\n          </div>\n          <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>refresh</mat-icon> Atualizar</button>\n        </div>\n        <div class=\"order-board\">\n          @for (order of page.orders(); track order.id) {\n            <article class=\"order-card\">\n              <header>\n                <strong>{{ page.shortId(order.id) }}</strong>\n                <mat-chip>{{ page.orderStatusLabel(order.status) }}</mat-chip>\n              </header>\n              <p>{{ order.customerName }}</p>\n              <div>\n                <span>{{ page.money(order.total) }}</span>\n                <small>{{ page.dateTime(order.createdAt) }}</small>\n              </div>\n              <footer>\n                <button mat-button type=\"button\" disabled>{{ order.paymentMethod }}</button>\n                <button\n                  mat-flat-button\n                  type=\"button\"\n                  [disabled]=\"!page.nextStatus(order.status) || page.actionLoading() === 'order-' + order.id\"\n                  (click)=\"page.advanceOrder(order)\"\n                >\n                  {{ page.nextStatus(order.status) ? 'Alterar para ' + page.orderStatusLabel(page.nextStatus(order.status)!) : 'Finalizado' }}\n                </button>\n              </footer>\n            </article>\n          } @empty {\n            <article class=\"order-card empty-card\">\n              <mat-icon>receipt_long</mat-icon>\n              <p>Nenhum pedido retornado pela API.</p>\n            </article>\n          }\n        </div>\n      }\n\n      @case ('financeiro') {\n        <div class=\"task-grid\">\n          @for (task of page.financeReports(); track task.title) {\n            <article class=\"task-card\">\n              <mat-icon>{{ task.icon }}</mat-icon>\n              <div>\n                <strong>{{ task.title }}</strong>\n                <p>{{ task.description }}</p>\n                <span>{{ task.status }}</span>\n              </div>\n            </article>\n          }\n        </div>\n\n        <div class=\"table-panel\">\n          <header>\n            <h3>Extrato</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>refresh</mat-icon> Atualizar</button>\n          </header>\n          @for (entry of page.financialEntries(); track entry.id) {\n            <div class=\"table-row operation-row\">\n              <span><strong>{{ entry.type }}</strong><small>{{ entry.orderId ? page.shortId(entry.orderId) : 'Lancamento' }}</small></span>\n              <span>{{ page.money(entry.amount) }}</span>\n              <span>{{ page.dateTime(entry.createdAt) }}</span>\n              <mat-chip>OK</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>account_balance_wallet</mat-icon>\n              Nenhum lancamento financeiro retornado.\n            </div>\n          }\n        </div>\n      }\n\n      @case ('relatorios') {\n        <div class=\"store-grid\">\n          <article class=\"store-panel compact-panel\">\n            <span class=\"panel-kicker\">Relatorios</span>\n            <h3>Vendas no periodo</h3>\n            <strong>{{ page.money(page.report()?.revenue ?? 0) }}</strong>\n            <span>{{ page.report()?.orders ?? 0 }} pedido(s), ticket medio de {{ page.money(page.report()?.averageTicket ?? 0) }}.</span>\n          </article>\n          <article class=\"store-panel compact-panel\">\n            <span class=\"panel-kicker\">Top produtos</span>\n            <h3>Mais vendidos</h3>\n            <strong>{{ page.dashboard()?.topProducts?.length ?? 0 }}</strong>\n            <span>Produtos com melhor desempenho retornados pela API.</span>\n          </article>\n        </div>\n\n        <div class=\"table-panel\">\n          <header>\n            <h3>Status no periodo</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>bar_chart</mat-icon> Atualizar</button>\n          </header>\n          @for (row of page.reportStatusRows(); track row.status) {\n            <div class=\"table-row status-table-row\">\n              <span><strong>{{ row.label }}</strong><small>{{ row.status }}</small></span>\n              <span>{{ row.value }}</span>\n              <span>pedido(s)</span>\n              <mat-chip>{{ row.value > 0 ? 'Com dados' : 'Sem dados' }}</mat-chip>\n            </div>\n          }\n        </div>\n      }\n\n      @case ('avaliacoes') {\n        <div class=\"table-panel section-table\">\n          <header>\n            <h3>Avaliacoes</h3>\n            <button mat-button type=\"button\" (click)=\"page.loadStore()\"><mat-icon>reviews</mat-icon> Atualizar</button>\n          </header>\n          @for (review of page.reviews(); track review.id) {\n            <div class=\"table-row operation-row\">\n              <span><strong>{{ review.customerName }}</strong><small>{{ review.comment ?? 'Sem comentario' }}</small></span>\n              <span>{{ review.rating }}/5</span>\n              <span>{{ page.dateTime(review.createdAt) }}</span>\n              <mat-chip>{{ page.shortId(review.orderId) }}</mat-chip>\n            </div>\n          } @empty {\n            <div class=\"empty-row\">\n              <mat-icon>reviews</mat-icon>\n              Nenhuma avaliacao retornada.\n            </div>\n          }\n        </div>\n      }\n    }\n  </div>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.store-page {\n  display: grid;\n  gap: 1.35rem;\n  overflow-x: clip;\n}\n\n.store-alert {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: .7rem;\n  border: 1px solid rgba(255, 107, 0, .24);\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .08);\n  padding: .85rem 1rem;\n  color: var(--elide-ink);\n  font-weight: 750;\n}\n\n.store-alert mat-icon {\n  color: var(--elide-orange);\n}\n\n.store-alert button {\n  margin-left: auto;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.store-command {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  padding: 1rem;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.store-command > div:first-child {\n  display: grid;\n  gap: .2rem;\n  min-width: 0;\n}\n\n.store-command strong {\n  color: var(--elide-ink);\n  font-size: 1.1rem;\n  font-weight: 950;\n}\n\n.store-command small {\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.command-actions {\n  display: flex;\n  align-items: center;\n  flex: 0 0 auto;\n  gap: .65rem;\n}\n\n.command-actions button,\n.section-toolbar button {\n  border-radius: 999px !important;\n  background: var(--elide-gradient) !important;\n  color: #fff !important;\n  font-weight: 900 !important;\n}\n\n.command-actions button mat-icon,\n.section-toolbar button mat-icon {\n  margin-right: .35rem;\n}\n\n.store-tabs {\n  display: flex;\n  gap: .45rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  padding: .45rem;\n  box-shadow: var(--elide-shadow-card);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n\n.store-tabs::-webkit-scrollbar {\n  display: none;\n}\n\n.store-tabs button {\n  flex: 0 0 auto;\n  display: inline-grid !important;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  align-items: center;\n  justify-content: center;\n  column-gap: .35rem;\n  min-height: 3.25rem;\n  min-width: 8.75rem;\n  border-radius: 8px !important;\n  color: var(--elide-muted) !important;\n  font-weight: 850 !important;\n  letter-spacing: 0;\n  line-height: 1.1 !important;\n}\n\n.store-tabs button mat-icon {\n  grid-row: 1 / span 2;\n  width: 1.15rem;\n  height: 1.15rem;\n  font-size: 1.15rem;\n}\n\n.store-tabs button span,\n.store-tabs button small {\n  overflow: hidden;\n  max-width: 6.8rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.store-tabs button small {\n  color: inherit;\n  font-size: .68rem;\n  font-weight: 800;\n  opacity: .72;\n}\n\n.store-tabs button.is-active {\n  background: rgba(255, 107, 0, .1) !important;\n  color: var(--elide-orange) !important;\n}\n\n.store-tab-panel {\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: var(--elide-card);\n  box-shadow: var(--elide-shadow-card);\n  overflow: hidden;\n}\n\n.store-grid,\n.task-grid,\n.order-board {\n  display: grid;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.store-grid {\n  grid-template-columns: minmax(0, 1.5fr) minmax(240px, .7fr);\n}\n\n.task-grid {\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.order-board {\n  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));\n}\n\n.store-panel,\n.task-card,\n.order-card,\n.table-panel,\n.detail-panel {\n  min-width: 0;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 8px 30px -18px rgba(120, 78, 38, .24);\n}\n\n.hero-panel {\n  min-height: 220px;\n  padding: clamp(1.2rem, 3vw, 2rem);\n  background: linear-gradient(135deg, rgba(255, 107, 0, .1), rgba(255, 184, 77, .16)), #fff;\n}\n\n.panel-kicker {\n  color: var(--elide-orange);\n  font-size: .75rem;\n  font-weight: 900;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n\n.hero-panel h2,\n.compact-panel h3,\n.table-panel h3 {\n  margin: .45rem 0;\n  color: var(--elide-ink);\n  letter-spacing: 0;\n}\n\n.hero-panel p,\n.compact-panel span,\n.task-card p,\n.table-row small,\n.order-card p,\n.order-card small {\n  color: var(--elide-muted);\n}\n\n.status-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: .65rem;\n  margin-top: 1.25rem;\n}\n\n.status-row span {\n  display: inline-flex;\n  align-items: center;\n  gap: .35rem;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .78);\n  padding: .5rem .7rem;\n  color: var(--elide-ink);\n  font-weight: 800;\n}\n\n.status-row mat-icon {\n  width: 18px;\n  height: 18px;\n  color: var(--elide-orange);\n  font-size: 18px;\n}\n\n.compact-panel {\n  display: grid;\n  align-content: center;\n  gap: .35rem;\n  padding: 1.3rem;\n}\n\n.compact-panel strong {\n  color: var(--elide-orange);\n  font-size: 1.9rem;\n  font-weight: 950;\n}\n\n.detail-panel,\n.section-toolbar {\n  margin: 0 1rem 1rem;\n  padding: 1rem;\n}\n\n.detail-panel h3,\n.section-toolbar h3 {\n  margin: .25rem 0 0;\n  color: var(--elide-ink);\n  letter-spacing: 0;\n}\n\n.detail-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: .75rem;\n  margin-top: 1rem;\n}\n\n.detail-grid span {\n  display: grid;\n  gap: .25rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  padding: .85rem;\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.detail-grid strong {\n  color: var(--elide-ink);\n  font-size: .8rem;\n  text-transform: uppercase;\n}\n\n.section-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  border: 1px solid var(--elide-border);\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: var(--elide-shadow-card);\n}\n\n.task-card {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: .9rem;\n  min-width: 0;\n  padding: 1rem;\n}\n\n.task-card > div,\n.order-card > *,\n.table-row > *,\n.table-panel header > * {\n  min-width: 0;\n}\n\n.task-card mat-icon {\n  display: grid;\n  place-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 8px;\n  background: rgba(255, 107, 0, .1);\n  color: var(--elide-orange);\n}\n\n.task-card strong,\n.order-card strong,\n.table-row strong {\n  color: var(--elide-ink);\n}\n\n.task-card p {\n  margin: .35rem 0 .7rem;\n  line-height: 1.45;\n}\n\n.task-card span {\n  display: inline-flex;\n  border-radius: 999px;\n  background: rgba(255, 107, 0, .09);\n  padding: .28rem .55rem;\n  color: var(--elide-orange);\n  font-size: .78rem;\n  font-weight: 850;\n}\n\n.table-panel {\n  display: grid;\n  margin: 0 1rem 1rem;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.inline-panel {\n  margin: 1rem;\n}\n\n.table-panel header,\n.table-row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 110px 110px 90px;\n  align-items: center;\n  gap: .75rem;\n  padding: .85rem 1rem;\n}\n\n.document-row,\n.operation-row,\n.category-row,\n.addon-row,\n.status-table-row {\n  grid-template-columns: minmax(0, 1fr) minmax(92px, auto) minmax(120px, auto) minmax(80px, auto);\n}\n\n.product-row {\n  grid-template-columns: minmax(0, 1fr) minmax(86px, auto) minmax(96px, auto) minmax(130px, auto);\n}\n\n.table-row button {\n  justify-self: end;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.empty-row {\n  display: flex;\n  align-items: center;\n  gap: .55rem;\n  padding: 1rem;\n  color: var(--elide-muted);\n  font-weight: 750;\n}\n\n.empty-row mat-icon,\n.empty-card mat-icon {\n  color: var(--elide-orange);\n}\n\n.table-panel header {\n  border-bottom: 1px solid var(--elide-border);\n}\n\n.table-panel header button {\n  justify-self: end;\n  border-radius: 999px !important;\n  color: var(--elide-orange) !important;\n  font-weight: 850 !important;\n}\n\n.table-row + .table-row {\n  border-top: 1px solid var(--elide-border);\n}\n\n.table-row span:first-child {\n  display: grid;\n  gap: .2rem;\n}\n\n.hero-panel,\n.compact-panel,\n.task-card,\n.order-card,\n.table-row,\n.empty-row {\n  overflow-wrap: anywhere;\n}\n\n.order-card {\n  display: grid;\n  gap: .8rem;\n  padding: 1rem;\n}\n\n.order-card header,\n.order-card div,\n.order-card footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: .75rem;\n}\n\n.order-card div span {\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.order-card footer button {\n  border-radius: 999px !important;\n  font-weight: 850 !important;\n}\n\n.order-card footer button:last-child {\n  background: var(--elide-gradient) !important;\n  color: white !important;\n}\n\n.empty-card {\n  align-content: center;\n  justify-items: center;\n  min-height: 12rem;\n  text-align: center;\n}\n\n:host-context(.dark) .store-panel,\n:host-context(.dark) .task-card,\n:host-context(.dark) .order-card,\n:host-context(.dark) .table-panel,\n:host-context(.dark) .detail-panel,\n:host-context(.dark) .section-toolbar,\n:host-context(.dark) .store-command,\n:host-context(.dark) .store-tabs,\n:host-context(.dark) .store-tab-panel,\n:host-context(.dark) .store-alert {\n  background: #171717;\n}\n\n:host-context(.dark) .hero-panel {\n  background: linear-gradient(135deg, rgba(255, 107, 0, .15), rgba(255, 184, 77, .1)), #171717;\n}\n\n:host-context(.dark) .hero-panel h2,\n:host-context(.dark) .compact-panel h3,\n:host-context(.dark) .table-panel h3,\n:host-context(.dark) .detail-panel h3,\n:host-context(.dark) .section-toolbar h3,\n:host-context(.dark) .store-command strong,\n:host-context(.dark) .task-card strong,\n:host-context(.dark) .order-card strong,\n:host-context(.dark) .table-row strong,\n:host-context(.dark) .detail-grid strong,\n:host-context(.dark) .status-row span {\n  color: white;\n}\n\n:host-context(.dark) .status-row span {\n  background: rgba(255, 255, 255, .08);\n}\n\n@media (max-width: 860px) {\n  .store-command,\n  .section-toolbar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .command-actions {\n    flex-wrap: wrap;\n  }\n\n  .store-tabs {\n    margin-inline: -.25rem;\n  }\n\n  .store-tabs button {\n    min-width: 8.7rem;\n  }\n\n  .store-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .table-panel header,\n  .table-row {\n    grid-template-columns: 1fr;\n  }\n\n  .table-panel header button,\n  .table-row mat-chip,\n  .table-row button {\n    justify-self: start;\n  }\n\n  .product-row,\n  .document-row,\n  .operation-row,\n  .category-row,\n  .addon-row,\n  .status-table-row {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 640px) {\n  .store-grid,\n  .task-grid,\n  .order-board {\n    padding: .75rem;\n  }\n\n  .table-panel {\n    margin: 0 .75rem .75rem;\n  }\n\n  .task-card {\n    grid-template-columns: 1fr;\n  }\n\n  .store-alert button {\n    width: 100%;\n    margin-left: 0;\n  }\n\n  .command-actions,\n  .command-actions button,\n  .section-toolbar button {\n    width: 100%;\n  }\n\n  .command-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .order-card footer {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StoreAreaPageComponent, { className: "StoreAreaPageComponent", filePath: "src/app/pages/store-area/store-area.component.ts", lineNumber: 71 }); })();
//# sourceMappingURL=store-area.component.js.map