import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { CourierApiService } from '../../services/courier-api.service';
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
function CourierAreaPageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function CourierAreaPageComponent_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 4);
} if (rf & 2) {
    const metric_r2 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r2.label)("value", metric_r2.value)("icon", metric_r2.icon);
} }
function CourierAreaPageComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 34);
    i0.ɵɵlistener("ngSubmit", function CourierAreaPageComponent_Conditional_16_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.signup()); });
    i0.ɵɵelementStart(1, "mat-form-field", 21)(2, "mat-label");
    i0.ɵɵtext(3, "CPF");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-form-field", 21)(6, "mat-label");
    i0.ɵɵtext(7, "Veiculo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-select", 36)(9, "mat-option", 37);
    i0.ɵɵtext(10, "Moto");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-option", 38);
    i0.ɵɵtext(12, "Bike");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-option", 39);
    i0.ɵɵtext(14, "Carro");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "button", 40);
    i0.ɵɵtext(16, "Criar cadastro");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r0.page.signupForm);
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("disabled", ctx_r0.page.loading());
} }
function CourierAreaPageComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "span")(2, "mat-icon");
    i0.ɵɵtext(3, "mail");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "mat-icon");
    i0.ɵɵtext(7, "two_wheeler");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span")(10, "mat-icon");
    i0.ɵɵtext(11, "credit_card");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 16)(14, "button", 17);
    i0.ɵɵlistener("click", function CourierAreaPageComponent_Conditional_17_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.setAvailable(true)); });
    i0.ɵɵelementStart(15, "mat-icon");
    i0.ɵɵtext(16, "radio_button_checked");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " Disponivel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 42);
    i0.ɵɵlistener("click", function CourierAreaPageComponent_Conditional_17_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.setAvailable(false)); });
    i0.ɵɵelementStart(19, "mat-icon");
    i0.ɵɵtext(20, "pause_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " Indisponivel ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r0.page.profile()) == null ? null : tmp_1_0.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r0.page.profile()) == null ? null : tmp_2_0.vehicleType);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_3_0 = ctx_r0.page.profile()) == null ? null : tmp_3_0.document);
} }
function CourierAreaPageComponent_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function CourierAreaPageComponent_Conditional_48_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.finish(ctx_r0.page.map().activeDelivery.id)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "done_all");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Finalizar ");
    i0.ɵɵelementEnd();
} }
function CourierAreaPageComponent_For_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "mat-icon");
    i0.ɵɵtext(2, "task_alt");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const document_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", document_r6.type, " \u00B7 ", document_r6.status);
} }
function CourierAreaPageComponent_ForEmpty_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span")(1, "mat-icon");
    i0.ɵɵtext(2, "upload_file");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "Nenhum documento enviado");
    i0.ɵɵelementEnd();
} }
function CourierAreaPageComponent_For_91_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r7.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r7.orderId ? ctx_r0.page.shortId(entry_r7.orderId) : "Lancamento manual");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(entry_r7.amount));
} }
function CourierAreaPageComponent_ForEmpty_92_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "strong");
    i0.ɵɵtext(2, "Sem lancamentos");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Entregas finalizadas entram aqui.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(0));
} }
function CourierAreaPageComponent_For_104_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 31)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 16)(11, "button", 17);
    i0.ɵɵlistener("click", function CourierAreaPageComponent_For_104_Template_button_click_11_listener() { const ride_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.accept(ride_r9.id)); });
    i0.ɵɵtext(12, "Aceitar");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 42);
    i0.ɵɵlistener("click", function CourierAreaPageComponent_For_104_Template_button_click_13_listener() { const ride_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.decline(ride_r9.id)); });
    i0.ɵɵtext(14, "Recusar");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ride_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ride_r9.storeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.page.shortId(ride_r9.id), " \u00B7 ", ctx_r0.page.statusLabel(ride_r9.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", ride_r9.customerName, " \u00B7 ", ride_r9.etaMinutes, " min \u00B7 ", ride_r9.distanceMeters, " m");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(ride_r9.deliveryFee));
} }
function CourierAreaPageComponent_ForEmpty_105_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 32)(1, "mat-icon");
    i0.ɵɵtext(2, "explore");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhuma corrida aberta");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Quando a loja liberar um pedido, ele aparece aqui.");
    i0.ɵɵelementEnd()();
} }
function CourierAreaPageComponent_For_117_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const delivery_r10 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(delivery_r10.status === "DELIVERED" ? "check_circle" : "local_shipping");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(delivery_r10.storeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.page.shortId(delivery_r10.id), " \u00B7 ", ctx_r0.page.statusLabel(delivery_r10.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(delivery_r10.deliveryFee));
} }
function CourierAreaPageComponent_ForEmpty_118_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "mat-icon");
    i0.ɵɵtext(2, "receipt_long");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Nenhuma entrega ainda");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Seu historico aparece apos aceitar corridas.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.page.money(0));
} }
export class CourierAreaPageComponent {
    constructor() {
        this.api = inject(CourierApiService);
        this.fb = inject(FormBuilder);
        this.page = this;
        this.profile = signal(null, ...(ngDevMode ? [{ debugName: "profile" }] : []));
        this.dashboard = signal(null, ...(ngDevMode ? [{ debugName: "dashboard" }] : []));
        this.documents = signal([], ...(ngDevMode ? [{ debugName: "documents" }] : []));
        this.rides = signal([], ...(ngDevMode ? [{ debugName: "rides" }] : []));
        this.history = signal([], ...(ngDevMode ? [{ debugName: "history" }] : []));
        this.earnings = signal({ daily: 0, monthly: 0, statement: [] }, ...(ngDevMode ? [{ debugName: "earnings" }] : []));
        this.map = signal({ location: null, activeDelivery: null, encodedPolyline: null }, ...(ngDevMode ? [{ debugName: "map" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.signupForm = this.fb.nonNullable.group({
            document: ['', [Validators.required, Validators.maxLength(14)]],
            vehicleType: ['MOTO', [Validators.required, Validators.maxLength(40)]]
        });
        this.documentForm = this.fb.nonNullable.group({
            type: ['CNH', [Validators.required, Validators.maxLength(80)]],
            fileUrl: ['https://elide.local/documentos/cnh.pdf', [Validators.required, Validators.maxLength(500)]]
        });
        this.metrics = computed(() => {
            const dashboard = this.dashboard();
            const earnings = this.earnings();
            return [
                { label: 'Hoje', value: this.money(dashboard?.dailyEarnings ?? earnings.daily), icon: 'payments' },
                { label: 'Mes', value: this.money(dashboard?.monthlyEarnings ?? earnings.monthly), icon: 'account_balance_wallet' },
                { label: 'Entregas hoje', value: String(dashboard?.deliveriesToday ?? 0), icon: 'local_shipping' },
                { label: 'Corridas abertas', value: String(dashboard?.availableRides ?? this.rides().length), icon: 'near_me' }
            ];
        }, ...(ngDevMode ? [{ debugName: "metrics" }] : []));
    }
    ngOnInit() {
        this.loadAll();
    }
    loadAll() {
        this.loading.set(true);
        forkJoin({
            dashboard: this.api.dashboard().pipe(catchError(() => of(null))),
            profile: this.api.profile().pipe(catchError(() => of(null))),
            documents: this.api.documents().pipe(catchError(() => of([]))),
            rides: this.api.availableRides().pipe(catchError(() => of([]))),
            history: this.api.history().pipe(catchError(() => of([]))),
            earnings: this.api.earnings().pipe(catchError(() => of({ daily: 0, monthly: 0, statement: [] }))),
            map: this.api.map().pipe(catchError(() => of({ location: null, activeDelivery: null, encodedPolyline: null })))
        }).pipe(finalize(() => this.loading.set(false))).subscribe(({ dashboard, profile, documents, rides, history, earnings, map }) => {
            this.dashboard.set(dashboard);
            this.profile.set(dashboard?.profile ?? profile);
            this.documents.set(documents);
            this.rides.set(rides);
            this.history.set(history);
            this.earnings.set(earnings);
            this.map.set(map);
            if (!dashboard && !profile) {
                this.message.set('Complete o cadastro de entregador para ativar GPS, corridas e ganhos.');
            }
        });
    }
    signup() {
        if (this.signupForm.invalid) {
            this.signupForm.markAllAsTouched();
            return;
        }
        this.loading.set(true);
        this.api.signup(this.signupForm.getRawValue())
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
            next: (profile) => {
                this.profile.set(profile);
                this.message.set('Cadastro de entregador criado. Envie os documentos para validacao.');
                this.loadAll();
            },
            error: () => this.message.set('Nao foi possivel cadastrar o entregador na API.')
        });
    }
    sendDocument() {
        if (this.documentForm.invalid) {
            this.documentForm.markAllAsTouched();
            return;
        }
        this.api.sendDocument(this.documentForm.getRawValue()).subscribe({
            next: (document) => {
                this.documents.update((documents) => [document, ...documents]);
                this.message.set('Documento enviado para validacao.');
            },
            error: () => this.message.set('Nao foi possivel enviar documento para a API.')
        });
    }
    setAvailable(available) {
        this.api.setAvailability({ available }).subscribe({
            next: (profile) => {
                this.profile.set(profile);
                this.dashboard.update((dashboard) => dashboard ? { ...dashboard, profile } : dashboard);
                this.message.set(available ? 'Status alterado para disponivel.' : 'Status alterado para indisponivel.');
            },
            error: () => this.message.set('Nao foi possivel alterar disponibilidade.')
        });
    }
    updateGps() {
        if (typeof navigator === 'undefined' || !navigator.geolocation) {
            this.updateLocation(-22.5646, -47.4017);
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => this.updateLocation(position.coords.latitude, position.coords.longitude, position.coords.heading, position.coords.speed), () => this.updateLocation(-22.5646, -47.4017));
    }
    accept(orderId) {
        this.api.acceptRide(orderId).subscribe({
            next: (delivery) => {
                this.rides.update((rides) => rides.filter((ride) => ride.id !== orderId));
                this.map.update((map) => ({ ...map, activeDelivery: delivery }));
                this.message.set('Corrida aceita. Rota liberada no mapa.');
            },
            error: () => this.message.set('Nao foi possivel aceitar a corrida.')
        });
    }
    decline(orderId) {
        this.api.declineRide(orderId, { reason: 'Nao consigo atender agora.' }).pipe(catchError(() => of(undefined))).subscribe(() => {
            this.rides.update((rides) => rides.filter((ride) => ride.id !== orderId));
            this.message.set('Corrida recusada.');
        });
    }
    finish(orderId) {
        this.api.updateDeliveryStatus(orderId, 'DELIVERED').subscribe({
            next: (delivery) => {
                this.history.update((history) => [delivery, ...history.filter((item) => item.id !== delivery.id)]);
                this.map.update((map) => ({ ...map, activeDelivery: null }));
                this.message.set('Entrega finalizada e ganho registrado.');
                this.loadAll();
            },
            error: () => this.message.set('Nao foi possivel finalizar a entrega.')
        });
    }
    statusLabel(status) {
        const labels = {
            PENDING_DOCUMENTS: 'Enviar documentos',
            PENDING_APPROVAL: 'Em validacao',
            AVAILABLE: 'Disponivel',
            UNAVAILABLE: 'Indisponivel',
            SUSPENDED: 'Suspenso',
            REJECTED: 'Reprovado',
            CREATED: 'Novo pedido',
            ACCEPTED: 'Aceito pela loja',
            PREPARING: 'Em preparo',
            READY_FOR_PICKUP: 'Pronto para retirada',
            OUT_FOR_DELIVERY: 'Em rota',
            DELIVERED: 'Entregue',
            CANCELLED: 'Cancelado'
        };
        return status ? labels[status] ?? status : 'Nao cadastrado';
    }
    money(value) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
    }
    shortId(id) {
        return `ELD-${id.slice(0, 6).toUpperCase()}`;
    }
    updateLocation(latitude, longitude, heading, speed) {
        this.api.updateLocation({ latitude, longitude, heading: heading ?? null, speed: speed ?? null }).subscribe({
            next: (location) => {
                this.map.update((map) => ({ ...map, location }));
                this.message.set('GPS atualizado.');
            },
            error: () => this.message.set('Nao foi possivel enviar GPS para a API.')
        });
    }
    static { this.ɵfac = function CourierAreaPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CourierAreaPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourierAreaPageComponent, selectors: [["courier-area-page"]], decls: 119, vars: 17, consts: [[1, "courier-page"], ["eyebrow", "Entregadores", "title", "Area do entregador", "description", "Corridas, GPS, documentos e ganhos em um painel rapido."], [1, "api-message"], [1, "metric-grid"], [3, "label", "value", "icon"], [1, "courier-layout"], [1, "panel", "profile-panel"], [1, "panel-title"], [1, "stack-form", 3, "formGroup"], [1, "panel", "map-panel"], [1, "map-canvas"], [1, "route-line"], [1, "pin", "store"], [1, "pin", "courier"], [1, "pin", "customer"], [1, "map-meta"], [1, "button-row"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-button", "", "type", "button"], [1, "panel"], [1, "inline-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["formControlName", "type"], ["value", "CNH"], ["value", "CPF"], ["value", "VEICULO"], ["matInput", "", "formControlName", "fileUrl"], ["mat-flat-button", "", "color", "primary", "type", "submit"], [1, "mini-list"], [1, "statement-list"], [1, "ride-grid"], [1, "ride-card"], [1, "ride-card", "empty"], [1, "history-list"], [1, "stack-form", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "document", "placeholder", "00000000000"], ["formControlName", "vehicleType"], ["value", "MOTO"], ["value", "BIKE"], ["value", "CARRO"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "profile-lines"], ["mat-button", "", "type", "button", 3, "click"]], template: function CourierAreaPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵconditionalCreate(2, CourierAreaPageComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵrepeaterCreate(4, CourierAreaPageComponent_For_5_Template, 1, 3, "elide-metric-card", 4, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5)(7, "article", 6)(8, "div", 7)(9, "mat-icon");
            i0.ɵɵtext(10, "badge");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div")(12, "h2");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(16, CourierAreaPageComponent_Conditional_16_Template, 17, 2, "form", 8)(17, CourierAreaPageComponent_Conditional_17_Template, 22, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "article", 9)(19, "div", 7)(20, "mat-icon");
            i0.ɵɵtext(21, "map");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div")(23, "h2");
            i0.ɵɵtext(24, "Mapa e GPS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(27, "div", 10);
            i0.ɵɵelement(28, "div", 11);
            i0.ɵɵelementStart(29, "div", 12)(30, "mat-icon");
            i0.ɵɵtext(31, "storefront");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 13)(33, "mat-icon");
            i0.ɵɵtext(34, "two_wheeler");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "div", 14)(36, "mat-icon");
            i0.ɵɵtext(37, "home_pin");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "div", 15)(39, "span");
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "span");
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "div", 16)(44, "button", 17);
            i0.ɵɵlistener("click", function CourierAreaPageComponent_Template_button_click_44_listener() { return ctx.page.updateGps(); });
            i0.ɵɵelementStart(45, "mat-icon");
            i0.ɵɵtext(46, "my_location");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(47, " Atualizar GPS ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(48, CourierAreaPageComponent_Conditional_48_Template, 4, 0, "button", 18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(49, "div", 5)(50, "article", 19)(51, "div", 7)(52, "mat-icon");
            i0.ɵɵtext(53, "description");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div")(55, "h2");
            i0.ɵɵtext(56, "Documentos");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "span");
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "form", 20);
            i0.ɵɵlistener("ngSubmit", function CourierAreaPageComponent_Template_form_ngSubmit_59_listener() { return ctx.page.sendDocument(); });
            i0.ɵɵelementStart(60, "mat-form-field", 21)(61, "mat-label");
            i0.ɵɵtext(62, "Tipo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "mat-select", 22)(64, "mat-option", 23);
            i0.ɵɵtext(65, "CNH");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "mat-option", 24);
            i0.ɵɵtext(67, "CPF");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "mat-option", 25);
            i0.ɵɵtext(69, "Veiculo");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(70, "mat-form-field", 21)(71, "mat-label");
            i0.ɵɵtext(72, "Arquivo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(73, "input", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "button", 27);
            i0.ɵɵtext(75, "Enviar");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(76, "div", 28);
            i0.ɵɵrepeaterCreate(77, CourierAreaPageComponent_For_78_Template, 4, 2, "span", null, _forTrack1, false, CourierAreaPageComponent_ForEmpty_79_Template, 4, 0, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "article", 19)(81, "div", 7)(82, "mat-icon");
            i0.ɵɵtext(83, "payments");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "div")(85, "h2");
            i0.ɵɵtext(86, "Ganhos e extrato");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "span");
            i0.ɵɵtext(88);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(89, "div", 29);
            i0.ɵɵrepeaterCreate(90, CourierAreaPageComponent_For_91_Template, 7, 3, "div", null, _forTrack1, false, CourierAreaPageComponent_ForEmpty_92_Template, 7, 1, "div");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(93, "article", 19)(94, "div", 7)(95, "mat-icon");
            i0.ɵɵtext(96, "near_me");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "div")(98, "h2");
            i0.ɵɵtext(99, "Corridas disponiveis");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "span");
            i0.ɵɵtext(101);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(102, "div", 30);
            i0.ɵɵrepeaterCreate(103, CourierAreaPageComponent_For_104_Template, 15, 7, "article", 31, _forTrack1, false, CourierAreaPageComponent_ForEmpty_105_Template, 7, 0, "article", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(106, "article", 19)(107, "div", 7)(108, "mat-icon");
            i0.ɵɵtext(109, "history");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "div")(111, "h2");
            i0.ɵɵtext(112, "Historico de entregas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "span");
            i0.ɵɵtext(114);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(115, "div", 33);
            i0.ɵɵrepeaterCreate(116, CourierAreaPageComponent_For_117_Template, 9, 5, "div", null, _forTrack1, false, CourierAreaPageComponent_ForEmpty_118_Template, 9, 1, "div");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_3_0;
            let tmp_6_0;
            let tmp_7_0;
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.metrics());
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(((tmp_2_0 = ctx.page.profile()) == null ? null : tmp_2_0.fullName) ?? "Cadastro do entregador");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.page.statusLabel((tmp_3_0 = ctx.page.profile()) == null ? null : tmp_3_0.status));
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.page.profile() ? 16 : 17);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.page.map().location ? "Sinal atualizado" : "Aguardando localizacao");
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate1("Lat ", ((tmp_6_0 = ctx.page.map().location) == null ? null : tmp_6_0.latitude) ?? "-22.5646");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Lng ", ((tmp_7_0 = ctx.page.map().location) == null ? null : tmp_7_0.longitude) ?? "-47.4017");
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.page.map().activeDelivery ? 48 : -1);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate1("", ctx.page.documents().length, " enviados");
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.page.documentForm);
            i0.ɵɵadvance(18);
            i0.ɵɵrepeater(ctx.page.documents());
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.page.money(ctx.page.earnings().monthly), " no mes");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.earnings().statement);
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.page.rides().length, " oportunidades");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.rides());
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate1("", ctx.page.history().length, " registros");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.page.history());
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i12.MatSelect, i12.MatOption, i13.MatTabsModule, ClientHeadingComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.courier-page[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n  overflow-x: clip;\n  padding: 1.4rem 0 3rem;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.courier-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.panel[_ngcontent-%COMP%], \n.ride-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  border: 1px solid rgba(24, 24, 27, 0.08);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 18px 40px rgba(24, 24, 27, 0.07);\n}\n\n.panel[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.panel-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  min-width: 0;\n  margin-bottom: 1rem;\n}\n\n.panel-title[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.panel-title[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 14px;\n  background: rgba(255, 111, 0, 0.12);\n  color: var(--elide-orange);\n}\n\n.panel-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.05rem, 1vw + 0.9rem, 1.35rem);\n  line-height: 1.15;\n}\n\n.panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.profile-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.mini-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.ride-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.ride-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.history-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.statement-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.map-meta[_ngcontent-%COMP%] {\n  color: rgba(24, 24, 27, 0.62);\n}\n\n.stack-form[_ngcontent-%COMP%], \n.inline-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.inline-form[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(130px, 0.45fr) minmax(0, 1fr) auto;\n  align-items: start;\n}\n\n.stack-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], \n.inline-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n\n.button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.stack-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.inline-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  border-radius: 14px;\n  font-weight: 900;\n}\n\n.profile-lines[_ngcontent-%COMP%], \n.mini-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.55rem;\n  margin-bottom: 1rem;\n}\n\n.profile-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.mini-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  min-width: 0;\n}\n\n.profile-lines[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.mini-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.map-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.map-canvas[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 240px;\n  overflow: hidden;\n  border-radius: 18px;\n  background:\n    linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px),\n    linear-gradient(0deg, rgba(255, 255, 255, 0.65) 1px, transparent 1px),\n    linear-gradient(135deg, #101010, #3f3f46 45%, #f97316);\n  background-size: 34px 34px, 34px 34px, cover;\n}\n\n.route-line[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 28% 18% 32% 16%;\n  border: 5px solid rgba(255, 255, 255, 0.88);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  transform: rotate(-12deg);\n}\n\n.pin[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  background: #fff;\n  color: var(--elide-orange);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);\n}\n\n.pin.store[_ngcontent-%COMP%] {\n  left: 15%;\n  top: 22%;\n}\n\n.pin.courier[_ngcontent-%COMP%] {\n  left: 47%;\n  top: 43%;\n  background: var(--elide-orange);\n  color: #fff;\n}\n\n.pin.customer[_ngcontent-%COMP%] {\n  right: 15%;\n  bottom: 18%;\n}\n\n.map-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.6rem;\n  margin: 0.8rem 0;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.ride-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.ride-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.9rem;\n  overflow-wrap: anywhere;\n}\n\n.ride-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.statement-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.history-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #18181b;\n}\n\n.ride-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.ride-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.statement-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.history-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n.ride-card.empty[_ngcontent-%COMP%] {\n  place-items: start;\n}\n\n.statement-list[_ngcontent-%COMP%], \n.history-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n}\n\n.statement-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.history-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(110px, 1fr) minmax(130px, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n  padding: 0.75rem;\n  border-radius: 14px;\n  background: #fafafa;\n}\n\n.statement-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.history-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.profile-lines[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.mini-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.map-meta[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.history-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--elide-orange);\n}\n\n@media (max-width: 900px) {\n  .courier-layout[_ngcontent-%COMP%], \n   .ride-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .inline-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 560px) {\n  .courier-page[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 1180px);\n    padding-top: 0.8rem;\n  }\n\n  .panel[_ngcontent-%COMP%] {\n    border-radius: 16px;\n    padding: 0.8rem;\n  }\n\n  .panel-title[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n\n  .button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .stack-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .inline-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .map-canvas[_ngcontent-%COMP%] {\n    min-height: 210px;\n  }\n\n  .statement-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n   .history-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n\n  .statement-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .history-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    grid-column: 2 / -1;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourierAreaPageComponent, [{
        type: Component,
        args: [{ selector: 'courier-area-page', imports: [...MATERIAL, ClientHeadingComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"courier-page\">\n  <elide-client-heading\n    eyebrow=\"Entregadores\"\n    title=\"Area do entregador\"\n    description=\"Corridas, GPS, documentos e ganhos em um painel rapido.\"\n  />\n\n  @if (page.message()) {\n    <p class=\"api-message\">{{ page.message() }}</p>\n  }\n\n  <div class=\"metric-grid\">\n    @for (metric of page.metrics(); track metric.label) {\n      <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n    }\n  </div>\n\n  <div class=\"courier-layout\">\n    <article class=\"panel profile-panel\">\n      <div class=\"panel-title\">\n        <mat-icon>badge</mat-icon>\n        <div>\n          <h2>{{ page.profile()?.fullName ?? 'Cadastro do entregador' }}</h2>\n          <span>{{ page.statusLabel(page.profile()?.status) }}</span>\n        </div>\n      </div>\n\n      @if (!page.profile()) {\n        <form [formGroup]=\"page.signupForm\" (ngSubmit)=\"page.signup()\" class=\"stack-form\">\n          <mat-form-field appearance=\"outline\">\n            <mat-label>CPF</mat-label>\n            <input matInput formControlName=\"document\" placeholder=\"00000000000\">\n          </mat-form-field>\n          <mat-form-field appearance=\"outline\">\n            <mat-label>Veiculo</mat-label>\n            <mat-select formControlName=\"vehicleType\">\n              <mat-option value=\"MOTO\">Moto</mat-option>\n              <mat-option value=\"BIKE\">Bike</mat-option>\n              <mat-option value=\"CARRO\">Carro</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"page.loading()\">Criar cadastro</button>\n        </form>\n      } @else {\n        <div class=\"profile-lines\">\n          <span><mat-icon>mail</mat-icon>{{ page.profile()?.email }}</span>\n          <span><mat-icon>two_wheeler</mat-icon>{{ page.profile()?.vehicleType }}</span>\n          <span><mat-icon>credit_card</mat-icon>{{ page.profile()?.document }}</span>\n        </div>\n        <div class=\"button-row\">\n          <button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.setAvailable(true)\">\n            <mat-icon>radio_button_checked</mat-icon>\n            Disponivel\n          </button>\n          <button mat-button type=\"button\" (click)=\"page.setAvailable(false)\">\n            <mat-icon>pause_circle</mat-icon>\n            Indisponivel\n          </button>\n        </div>\n      }\n    </article>\n\n    <article class=\"panel map-panel\">\n      <div class=\"panel-title\">\n        <mat-icon>map</mat-icon>\n        <div>\n          <h2>Mapa e GPS</h2>\n          <span>{{ page.map().location ? 'Sinal atualizado' : 'Aguardando localizacao' }}</span>\n        </div>\n      </div>\n      <div class=\"map-canvas\">\n        <div class=\"route-line\"></div>\n        <div class=\"pin store\"><mat-icon>storefront</mat-icon></div>\n        <div class=\"pin courier\"><mat-icon>two_wheeler</mat-icon></div>\n        <div class=\"pin customer\"><mat-icon>home_pin</mat-icon></div>\n      </div>\n      <div class=\"map-meta\">\n        <span>Lat {{ page.map().location?.latitude ?? '-22.5646' }}</span>\n        <span>Lng {{ page.map().location?.longitude ?? '-47.4017' }}</span>\n      </div>\n      <div class=\"button-row\">\n        <button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.updateGps()\">\n          <mat-icon>my_location</mat-icon>\n          Atualizar GPS\n        </button>\n        @if (page.map().activeDelivery) {\n          <button mat-button type=\"button\" (click)=\"page.finish(page.map().activeDelivery!.id)\">\n            <mat-icon>done_all</mat-icon>\n            Finalizar\n          </button>\n        }\n      </div>\n    </article>\n  </div>\n\n  <div class=\"courier-layout\">\n    <article class=\"panel\">\n      <div class=\"panel-title\">\n        <mat-icon>description</mat-icon>\n        <div>\n          <h2>Documentos</h2>\n          <span>{{ page.documents().length }} enviados</span>\n        </div>\n      </div>\n      <form [formGroup]=\"page.documentForm\" (ngSubmit)=\"page.sendDocument()\" class=\"inline-form\">\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Tipo</mat-label>\n          <mat-select formControlName=\"type\">\n            <mat-option value=\"CNH\">CNH</mat-option>\n            <mat-option value=\"CPF\">CPF</mat-option>\n            <mat-option value=\"VEICULO\">Veiculo</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\">\n          <mat-label>Arquivo</mat-label>\n          <input matInput formControlName=\"fileUrl\">\n        </mat-form-field>\n        <button mat-flat-button color=\"primary\" type=\"submit\">Enviar</button>\n      </form>\n      <div class=\"mini-list\">\n        @for (document of page.documents(); track document.id) {\n          <span><mat-icon>task_alt</mat-icon>{{ document.type }} \u00B7 {{ document.status }}</span>\n        } @empty {\n          <span><mat-icon>upload_file</mat-icon>Nenhum documento enviado</span>\n        }\n      </div>\n    </article>\n\n    <article class=\"panel\">\n      <div class=\"panel-title\">\n        <mat-icon>payments</mat-icon>\n        <div>\n          <h2>Ganhos e extrato</h2>\n          <span>{{ page.money(page.earnings().monthly) }} no mes</span>\n        </div>\n      </div>\n      <div class=\"statement-list\">\n        @for (entry of page.earnings().statement; track entry.id) {\n          <div>\n            <strong>{{ entry.type }}</strong>\n            <span>{{ entry.orderId ? page.shortId(entry.orderId) : 'Lancamento manual' }}</span>\n            <b>{{ page.money(entry.amount) }}</b>\n          </div>\n        } @empty {\n          <div><strong>Sem lancamentos</strong><span>Entregas finalizadas entram aqui.</span><b>{{ page.money(0) }}</b></div>\n        }\n      </div>\n    </article>\n  </div>\n\n  <article class=\"panel\">\n    <div class=\"panel-title\">\n      <mat-icon>near_me</mat-icon>\n      <div>\n        <h2>Corridas disponiveis</h2>\n        <span>{{ page.rides().length }} oportunidades</span>\n      </div>\n    </div>\n    <div class=\"ride-grid\">\n      @for (ride of page.rides(); track ride.id) {\n        <article class=\"ride-card\">\n          <div>\n            <strong>{{ ride.storeName }}</strong>\n            <span>{{ page.shortId(ride.id) }} \u00B7 {{ page.statusLabel(ride.status) }}</span>\n          </div>\n          <p>{{ ride.customerName }} \u00B7 {{ ride.etaMinutes }} min \u00B7 {{ ride.distanceMeters }} m</p>\n          <b>{{ page.money(ride.deliveryFee) }}</b>\n          <div class=\"button-row\">\n            <button mat-flat-button color=\"primary\" type=\"button\" (click)=\"page.accept(ride.id)\">Aceitar</button>\n            <button mat-button type=\"button\" (click)=\"page.decline(ride.id)\">Recusar</button>\n          </div>\n        </article>\n      } @empty {\n        <article class=\"ride-card empty\">\n          <mat-icon>explore</mat-icon>\n          <strong>Nenhuma corrida aberta</strong>\n          <span>Quando a loja liberar um pedido, ele aparece aqui.</span>\n        </article>\n      }\n    </div>\n  </article>\n\n  <article class=\"panel\">\n    <div class=\"panel-title\">\n      <mat-icon>history</mat-icon>\n      <div>\n        <h2>Historico de entregas</h2>\n        <span>{{ page.history().length }} registros</span>\n      </div>\n    </div>\n    <div class=\"history-list\">\n      @for (delivery of page.history(); track delivery.id) {\n        <div>\n          <mat-icon>{{ delivery.status === 'DELIVERED' ? 'check_circle' : 'local_shipping' }}</mat-icon>\n          <strong>{{ delivery.storeName }}</strong>\n          <span>{{ page.shortId(delivery.id) }} \u00B7 {{ page.statusLabel(delivery.status) }}</span>\n          <b>{{ page.money(delivery.deliveryFee) }}</b>\n        </div>\n      } @empty {\n        <div>\n          <mat-icon>receipt_long</mat-icon>\n          <strong>Nenhuma entrega ainda</strong>\n          <span>Seu historico aparece apos aceitar corridas.</span>\n          <b>{{ page.money(0) }}</b>\n        </div>\n      }\n    </div>\n  </article>\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.courier-page {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n  overflow-x: clip;\n  padding: 1.4rem 0 3rem;\n}\n\n.api-message {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 900;\n}\n\n.courier-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.panel,\n.ride-card {\n  min-width: 0;\n  border: 1px solid rgba(24, 24, 27, 0.08);\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 18px 40px rgba(24, 24, 27, 0.07);\n}\n\n.panel {\n  padding: 1rem;\n}\n\n.panel-title {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  min-width: 0;\n  margin-bottom: 1rem;\n}\n\n.panel-title > div {\n  min-width: 0;\n}\n\n.panel-title > mat-icon {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 14px;\n  background: rgba(255, 111, 0, 0.12);\n  color: var(--elide-orange);\n}\n\n.panel-title h2 {\n  margin: 0;\n  font-size: clamp(1.05rem, 1vw + 0.9rem, 1.35rem);\n  line-height: 1.15;\n}\n\n.panel-title span,\n.profile-lines span,\n.mini-list span,\n.ride-card span,\n.ride-card p,\n.history-list span,\n.statement-list span,\n.map-meta {\n  color: rgba(24, 24, 27, 0.62);\n}\n\n.stack-form,\n.inline-form {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.inline-form {\n  grid-template-columns: minmax(130px, 0.45fr) minmax(0, 1fr) auto;\n  align-items: start;\n}\n\n.stack-form mat-form-field,\n.inline-form mat-form-field {\n  width: 100%;\n  min-width: 0;\n}\n\n.button-row {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n}\n\n.button-row button,\n.stack-form button,\n.inline-form button {\n  min-height: 42px;\n  border-radius: 14px;\n  font-weight: 900;\n}\n\n.profile-lines,\n.mini-list {\n  display: grid;\n  gap: 0.55rem;\n  margin-bottom: 1rem;\n}\n\n.profile-lines span,\n.mini-list span {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  min-width: 0;\n}\n\n.profile-lines mat-icon,\n.mini-list mat-icon {\n  color: var(--elide-orange);\n}\n\n.map-panel {\n  overflow: hidden;\n}\n\n.map-canvas {\n  position: relative;\n  min-height: 240px;\n  overflow: hidden;\n  border-radius: 18px;\n  background:\n    linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px),\n    linear-gradient(0deg, rgba(255, 255, 255, 0.65) 1px, transparent 1px),\n    linear-gradient(135deg, #101010, #3f3f46 45%, #f97316);\n  background-size: 34px 34px, 34px 34px, cover;\n}\n\n.route-line {\n  position: absolute;\n  inset: 28% 18% 32% 16%;\n  border: 5px solid rgba(255, 255, 255, 0.88);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  border-radius: 50%;\n  transform: rotate(-12deg);\n}\n\n.pin {\n  position: absolute;\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  background: #fff;\n  color: var(--elide-orange);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.22);\n}\n\n.pin.store {\n  left: 15%;\n  top: 22%;\n}\n\n.pin.courier {\n  left: 47%;\n  top: 43%;\n  background: var(--elide-orange);\n  color: #fff;\n}\n\n.pin.customer {\n  right: 15%;\n  bottom: 18%;\n}\n\n.map-meta {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.6rem;\n  margin: 0.8rem 0;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.ride-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.85rem;\n}\n\n.ride-card {\n  display: grid;\n  gap: 0.65rem;\n  padding: 0.9rem;\n  overflow-wrap: anywhere;\n}\n\n.ride-card strong,\n.statement-list strong,\n.history-list strong {\n  color: #18181b;\n}\n\n.ride-card p {\n  margin: 0;\n}\n\n.ride-card b,\n.statement-list b,\n.history-list b {\n  color: var(--elide-orange);\n}\n\n.ride-card.empty {\n  place-items: start;\n}\n\n.statement-list,\n.history-list {\n  display: grid;\n  gap: 0.65rem;\n}\n\n.statement-list > div,\n.history-list > div {\n  display: grid;\n  grid-template-columns: auto minmax(110px, 1fr) minmax(130px, 1fr) auto;\n  align-items: center;\n  gap: 0.65rem;\n  min-width: 0;\n  padding: 0.75rem;\n  border-radius: 14px;\n  background: #fafafa;\n}\n\n.statement-list > div > *,\n.history-list > div > *,\n.profile-lines span,\n.mini-list span,\n.map-meta {\n  min-width: 0;\n  overflow-wrap: anywhere;\n}\n\n.history-list mat-icon {\n  color: var(--elide-orange);\n}\n\n@media (max-width: 900px) {\n  .courier-layout,\n  .ride-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .inline-form {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 560px) {\n  .courier-page {\n    width: min(100% - 1rem, 1180px);\n    padding-top: 0.8rem;\n  }\n\n  .panel {\n    border-radius: 16px;\n    padding: 0.8rem;\n  }\n\n  .panel-title {\n    align-items: flex-start;\n  }\n\n  .button-row button,\n  .stack-form button,\n  .inline-form button {\n    width: 100%;\n  }\n\n  .map-canvas {\n    min-height: 210px;\n  }\n\n  .statement-list > div,\n  .history-list > div {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n\n  .statement-list span,\n  .history-list span {\n    grid-column: 2 / -1;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CourierAreaPageComponent, { className: "CourierAreaPageComponent", filePath: "src/app/pages/courier-area/courier-area.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=courier-area.component.js.map