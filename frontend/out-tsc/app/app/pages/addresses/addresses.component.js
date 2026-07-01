import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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
function AddressesPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
function AddressesPageComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function AddressesPageComponent_Conditional_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.page.reset()); });
    i0.ɵɵtext(1, "Cancelar");
    i0.ɵɵelementEnd();
} }
function AddressesPageComponent_Conditional_30_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "elide-metric-card", 17);
} if (rf & 2) {
    const metric_r3 = ctx.$implicit;
    i0.ɵɵproperty("label", metric_r3.label)("value", metric_r3.value)("icon", metric_r3.icon);
} }
function AddressesPageComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵrepeaterCreate(1, AddressesPageComponent_Conditional_30_For_2_Template, 1, 3, "elide-metric-card", 17, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().metrics);
} }
function AddressesPageComponent_Conditional_31_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 18)(1, "mat-icon");
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
function AddressesPageComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, AddressesPageComponent_Conditional_31_For_2_Template, 7, 4, "a", 18, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().actions);
} }
function AddressesPageComponent_Conditional_32_For_2_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(card_r5.meta);
} }
function AddressesPageComponent_Conditional_32_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20)(1, "button", 16);
    i0.ɵɵlistener("click", function AddressesPageComponent_Conditional_32_For_2_Conditional_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const $index_r7 = i0.ɵɵnextContext().$index; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.page.edit(ctx_r0.page.addresses()[$index_r7])); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 21);
    i0.ɵɵlistener("click", function AddressesPageComponent_Conditional_32_For_2_Conditional_8_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const $index_r7 = i0.ɵɵnextContext().$index; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.page.remove(ctx_r0.page.addresses()[$index_r7].id)); });
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "delete");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const card_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(card_r5.action);
} }
function AddressesPageComponent_Conditional_32_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 19)(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, AddressesPageComponent_Conditional_32_For_2_Conditional_7_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(8, AddressesPageComponent_Conditional_32_For_2_Conditional_8_Template, 6, 1, "div", 20);
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
function AddressesPageComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, AddressesPageComponent_Conditional_32_For_2_Template, 9, 5, "article", 19, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.page.vm().cards);
} }
function AddressesPageComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "article", 19)(2, "mat-icon");
    i0.ɵɵtext(3, "location_on");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Nenhum endereco");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Cadastre um endereco para finalizar pedidos.");
    i0.ɵɵelementEnd()()();
} }
export class AddressesPageComponent {
    constructor() {
        this.api = inject(CustomerApiService);
        this.fb = inject(FormBuilder);
        this.page = this;
        this.addresses = signal([], ...(ngDevMode ? [{ debugName: "addresses" }] : []));
        this.editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : []));
        this.form = this.fb.nonNullable.group({
            label: ['Casa', [Validators.required, Validators.maxLength(80)]],
            street: ['', [Validators.required, Validators.maxLength(120)]],
            number: ['', [Validators.required, Validators.maxLength(30)]],
            district: ['', [Validators.required, Validators.maxLength(80)]],
            zipCode: ['', [Validators.required, Validators.maxLength(10)]]
        });
        this.vm = computed(() => ({
            eyebrow: 'Entrega',
            title: 'Enderecos',
            description: 'Salve locais de entrega e deixe o frete pronto para calculo rapido.',
            actionLabel: 'Adicionar',
            actionLink: '/enderecos',
            actionIcon: 'add_location',
            cards: this.addresses().map((address) => ({
                title: address.label,
                description: `${address.street}, ${address.number} - ${address.district}`,
                icon: address.label.toLowerCase().includes('trabalho') ? 'business' : 'home_pin',
                action: 'Editar'
            }))
        }), ...(ngDevMode ? [{ debugName: "vm" }] : []));
    }
    ngOnInit() {
        this.load();
    }
    load() {
        this.api.addresses().pipe(catchError(() => {
            this.message.set('Endpoint /customer/addresses ainda nao respondeu.');
            return of([]);
        })).subscribe((addresses) => this.addresses.set(addresses));
    }
    edit(address) {
        this.editingId.set(address.id);
        this.form.patchValue({
            label: address.label,
            street: address.street,
            number: address.number,
            district: address.district,
            zipCode: address.zipCode
        });
    }
    reset() {
        this.editingId.set(null);
        this.form.reset({
            label: 'Casa',
            street: '',
            number: '',
            district: '',
            zipCode: ''
        });
    }
    save() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const payload = {
            ...this.form.getRawValue(),
            cityId: null,
            latitude: null,
            longitude: null
        };
        this.saving.set(true);
        const request = this.editingId()
            ? this.api.updateAddress(this.editingId(), payload)
            : this.api.createAddress(payload);
        request.subscribe({
            next: (address) => {
                this.saving.set(false);
                this.message.set(this.editingId() ? 'Endereco atualizado.' : 'Endereco cadastrado.');
                this.addresses.update((addresses) => this.editingId()
                    ? addresses.map((item) => item.id === address.id ? address : item)
                    : [address, ...addresses]);
                this.reset();
            },
            error: () => {
                this.saving.set(false);
                this.message.set('Nao foi possivel salvar o endereco na API.');
            }
        });
    }
    remove(addressId) {
        this.api.deleteAddress(addressId).pipe(catchError(() => {
            this.message.set('Nao foi possivel remover o endereco na API.');
            return of(undefined);
        })).subscribe(() => {
            this.addresses.update((addresses) => addresses.filter((address) => address.id !== addressId));
            if (this.editingId() === addressId) {
                this.reset();
            }
        });
    }
    static { this.ɵfac = function AddressesPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddressesPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddressesPageComponent, selectors: [["addresses-page"]], decls: 34, vars: 14, consts: [[1, "elide-section"], [3, "eyebrow", "title", "description", "actionLabel", "actionIcon", "actionLink"], [1, "api-message"], [1, "address-form", "elide-form-card", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "formControlName", "label", "placeholder", "Casa"], ["matInput", "", "formControlName", "street", "placeholder", "Rua das Flores"], ["matInput", "", "formControlName", "number", "placeholder", "120"], ["matInput", "", "formControlName", "district", "placeholder", "Centro"], ["matInput", "", "formControlName", "zipCode", "placeholder", "00000-000"], [1, "form-actions"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-button", "", "type", "button"], [1, "metric-grid"], [1, "action-grid"], ["mat-button", "", "type", "button", 3, "click"], [3, "label", "value", "icon"], [1, "feature-card", 3, "routerLink"], [1, "feature-card"], [1, "card-actions"], ["mat-icon-button", "", "type", "button", "aria-label", "Remover endereco", 3, "click"]], template: function AddressesPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵconditionalCreate(3, AddressesPageComponent_Conditional_3_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(4, "form", 3);
            i0.ɵɵlistener("ngSubmit", function AddressesPageComponent_Template_form_ngSubmit_4_listener() { return ctx.page.save(); });
            i0.ɵɵelementStart(5, "div", 4)(6, "mat-form-field", 5)(7, "mat-label");
            i0.ɵɵtext(8, "Apelido");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-form-field", 5)(11, "mat-label");
            i0.ɵɵtext(12, "Rua");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field", 5)(15, "mat-label");
            i0.ɵɵtext(16, "Numero");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "mat-form-field", 5)(19, "mat-label");
            i0.ɵɵtext(20, "Bairro");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-form-field", 5)(23, "mat-label");
            i0.ɵɵtext(24, "CEP");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(25, "input", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "div", 11)(27, "button", 12);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(29, AddressesPageComponent_Conditional_29_Template, 2, 0, "button", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(30, AddressesPageComponent_Conditional_30_Template, 3, 0, "div", 14);
            i0.ɵɵconditionalCreate(31, AddressesPageComponent_Conditional_31_Template, 3, 0, "div", 15);
            i0.ɵɵconditionalCreate(32, AddressesPageComponent_Conditional_32_Template, 3, 0, "div", 15)(33, AddressesPageComponent_Conditional_33_Template, 8, 0, "div", 15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_11_0;
            let tmp_12_0;
            let tmp_13_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("eyebrow", ctx.page.vm().eyebrow)("title", ctx.page.vm().title)("description", ctx.page.vm().description)("actionLabel", ctx.page.vm().actionLabel ?? "")("actionIcon", ctx.page.vm().actionIcon ?? "arrow_forward")("actionLink", ctx.page.vm().actionLink ?? "/");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.page.message() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(23);
            i0.ɵɵproperty("disabled", ctx.page.saving() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.saving() ? "Salvando..." : ctx.page.editingId() ? "Atualizar endereco" : "Salvar endereco", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.editingId() ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_11_0 = ctx.page.vm().metrics) == null ? null : tmp_11_0.length) ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_12_0 = ctx.page.vm().actions) == null ? null : tmp_12_0.length) ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(((tmp_13_0 = ctx.page.vm().cards) == null ? null : tmp_13_0.length) ? 32 : 33);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i3.MatIconButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.api-message[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.address-form[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:nth-child(2) {\n  grid-column: span 2;\n}\n\n.form-actions[_ngcontent-%COMP%], \n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  min-height: 44px;\n  border-radius: 14px;\n  font-weight: 900;\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n}\n\n@media (max-width: 860px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:nth-child(2) {\n    grid-column: span 2;\n  }\n}\n\n@media (max-width: 560px) {\n  .address-form[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0.45rem;\n  }\n\n  .form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]:nth-child(2) {\n    grid-column: auto;\n  }\n\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n    width: 100%;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddressesPageComponent, [{
        type: Component,
        args: [{ selector: 'addresses-page', imports: [...MATERIAL, RouterLink, ReactiveFormsModule, ClientHeadingComponent, CustomerNavComponent, MetricCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading\n    [eyebrow]=\"page.vm().eyebrow\"\n    [title]=\"page.vm().title\"\n    [description]=\"page.vm().description\"\n    [actionLabel]=\"page.vm().actionLabel ?? ''\"\n    [actionIcon]=\"page.vm().actionIcon ?? 'arrow_forward'\"\n    [actionLink]=\"page.vm().actionLink ?? '/'\"\n  />\n\n  <elide-customer-nav />\n\n  @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n\n  <form class=\"address-form elide-form-card\" [formGroup]=\"page.form\" (ngSubmit)=\"page.save()\">\n    <div class=\"form-grid\">\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Apelido</mat-label>\n        <input matInput formControlName=\"label\" placeholder=\"Casa\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Rua</mat-label>\n        <input matInput formControlName=\"street\" placeholder=\"Rua das Flores\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Numero</mat-label>\n        <input matInput formControlName=\"number\" placeholder=\"120\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Bairro</mat-label>\n        <input matInput formControlName=\"district\" placeholder=\"Centro\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>CEP</mat-label>\n        <input matInput formControlName=\"zipCode\" placeholder=\"00000-000\">\n      </mat-form-field>\n    </div>\n    <div class=\"form-actions\">\n      <button mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"page.saving() || page.form.invalid\">\n        {{ page.saving() ? 'Salvando...' : (page.editingId() ? 'Atualizar endereco' : 'Salvar endereco') }}\n      </button>\n      @if (page.editingId()) {\n        <button mat-button type=\"button\" (click)=\"page.reset()\">Cancelar</button>\n      }\n    </div>\n  </form>\n\n  @if (page.vm().metrics?.length) {\n    <div class=\"metric-grid\">\n      @for (metric of page.vm().metrics; track metric.label) {\n        <elide-metric-card [label]=\"metric.label\" [value]=\"metric.value\" [icon]=\"metric.icon\" />\n      }\n    </div>\n  }\n\n  @if (page.vm().actions?.length) {\n    <div class=\"action-grid\">\n      @for (action of page.vm().actions; track action.path) {\n        <a class=\"feature-card\" [routerLink]=\"action.path\">\n          <mat-icon>{{ action.icon }}</mat-icon>\n          <strong>{{ action.label }}</strong>\n          <span>{{ action.description }}</span>\n        </a>\n      }\n    </div>\n  }\n\n  @if (page.vm().cards?.length) {\n    <div class=\"action-grid\">\n      @for (card of page.vm().cards; track card.title) {\n        <article class=\"feature-card\">\n          <mat-icon>{{ card.icon }}</mat-icon>\n          <strong>{{ card.title }}</strong>\n          <span>{{ card.description }}</span>\n          @if (card.meta) { <small>{{ card.meta }}</small> }\n          @if (card.action) {\n            <div class=\"card-actions\">\n              <button mat-button type=\"button\" (click)=\"page.edit(page.addresses()[$index])\">{{ card.action }}</button>\n              <button mat-icon-button type=\"button\" aria-label=\"Remover endereco\" (click)=\"page.remove(page.addresses()[$index].id)\">\n                <mat-icon>delete</mat-icon>\n              </button>\n            </div>\n          }\n        </article>\n      }\n    </div>\n  } @else {\n    <div class=\"action-grid\"><article class=\"feature-card\"><mat-icon>location_on</mat-icon><strong>Nenhum endereco</strong><span>Cadastre um endereco para finalizar pedidos.</span></article></div>\n  }\n</section>\n", styles: [":host {\n  display: block;\n}\n\n.api-message {\n  margin: 0 0 1rem;\n  color: var(--elide-orange);\n  font-weight: 800;\n}\n\n.address-form {\n  margin: 0 0 1.25rem;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 0.8rem;\n}\n\n.form-grid mat-form-field {\n  width: 100%;\n  min-width: 0;\n}\n\n.form-grid mat-form-field:nth-child(2) {\n  grid-column: span 2;\n}\n\n.form-actions,\n.card-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n\n.form-actions {\n  margin-top: 0.25rem;\n}\n\n.form-actions button:first-child {\n  min-height: 44px;\n  border-radius: 14px;\n  font-weight: 900;\n}\n\n.card-actions {\n  margin-top: 0.35rem;\n}\n\n@media (max-width: 860px) {\n  .form-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .form-grid mat-form-field:nth-child(2) {\n    grid-column: span 2;\n  }\n}\n\n@media (max-width: 560px) {\n  .address-form {\n    padding: 1rem;\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 0.45rem;\n  }\n\n  .form-grid mat-form-field:nth-child(2) {\n    grid-column: auto;\n  }\n\n  .form-actions button:first-child {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AddressesPageComponent, { className: "AddressesPageComponent", filePath: "src/app/pages/addresses/addresses.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=addresses.component.js.map