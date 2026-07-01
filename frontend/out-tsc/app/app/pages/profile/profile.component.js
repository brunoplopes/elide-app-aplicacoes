import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
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
function ProfilePageComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
export class ProfilePageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.api = inject(CustomerApiService);
        this.auth = inject(AuthService);
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.form = this.fb.nonNullable.group({
            fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', Validators.required]
        });
    }
    ngOnInit() {
        const authProfile = this.auth.profile();
        this.form.patchValue({
            fullName: authProfile?.fullName ?? 'Cliente ELIDE',
            email: authProfile?.username ?? authProfile?.fullName ?? 'cliente@elide.local',
            phone: ''
        });
        this.api.profile().pipe(catchError(() => of(null))).subscribe((profile) => {
            if (!profile) {
                this.message.set('Perfil local carregado. Endpoint /customer/profile ainda nao respondeu.');
                return;
            }
            this.form.patchValue({
                fullName: profile.fullName,
                email: profile.email,
                phone: profile.phone ?? ''
            });
        });
    }
    save() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading.set(true);
        this.message.set(null);
        this.api.updateProfile(this.form.getRawValue())
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
            next: () => this.message.set('Perfil salvo com sucesso.'),
            error: () => this.message.set('Nao foi possivel salvar o perfil na API.')
        });
    }
    static { this.ɵfac = function ProfilePageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfilePageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilePageComponent, selectors: [["elide-profile-page"]], decls: 31, vars: 4, consts: [[1, "elide-section"], ["title", "Editar perfil", "description", "Mantenha seus dados atualizados para agilizar pagamentos, suporte e entregas.", "actionLabel", "Alterar senha", "actionIcon", "lock_reset", "actionLink", "/alterar-senha"], [1, "profile-grid"], [1, "panel-card", "elide-form-card", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "phone"], [1, "form-message"], ["mat-flat-button", "", "type", "button", 3, "click", "disabled"], [1, "panel-card"]], template: function ProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1)(2, "elide-customer-nav");
            i0.ɵɵelementStart(3, "div", 2)(4, "form", 3)(5, "h2");
            i0.ɵɵtext(6, "Dados pessoais");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Essas informacoes aparecem no atendimento e nas entregas.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-form-field", 4)(10, "mat-label");
            i0.ɵɵtext(11, "Nome completo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field", 4)(14, "mat-label");
            i0.ɵɵtext(15, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-form-field", 4)(18, "mat-label");
            i0.ɵɵtext(19, "Telefone");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(20, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(21, ProfilePageComponent_Conditional_21_Template, 2, 1, "p", 8);
            i0.ɵɵelementStart(22, "button", 9);
            i0.ɵɵlistener("click", function ProfilePageComponent_Template_button_click_22_listener() { return ctx.page.save(); });
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "aside", 10)(25, "mat-icon");
            i0.ɵɵtext(26, "verified_user");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "h2");
            i0.ɵɵtext(28, "Conta protegida");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "p");
            i0.ɵɵtext(30, "Senha criptografada, sessoes autenticadas e notificacoes de seguranca preparadas.");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(17);
            i0.ɵɵconditional(ctx.page.message() ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page.loading() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Salvando..." : "Salvar perfil", " ");
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent, CustomerNavComponent], styles: ["[_nghost-%COMP%] { display: block; }\n.profile-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; }\n.panel-card[_ngcontent-%COMP%]:not(.elide-form-card) { display: grid; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.5rem; box-shadow: var(--elide-shadow-card); }\naside[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); transform: scale(1.3); }\nh2[_ngcontent-%COMP%] { margin: .5rem 0 0; font-weight: 900; }\np[_ngcontent-%COMP%] { margin: 0; color: var(--elide-muted); }\n.form-message[_ngcontent-%COMP%] { color: var(--elide-orange); font-weight: 800; }\n@media (max-width: 820px) { .profile-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; } }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilePageComponent, [{
        type: Component,
        args: [{ selector: 'elide-profile-page', imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"elide-section\">\n  <elide-client-heading title=\"Editar perfil\" description=\"Mantenha seus dados atualizados para agilizar pagamentos, suporte e entregas.\" actionLabel=\"Alterar senha\" actionIcon=\"lock_reset\" actionLink=\"/alterar-senha\" />\n  <elide-customer-nav />\n  <div class=\"profile-grid\">\n    <form [formGroup]=\"page.form\" class=\"panel-card elide-form-card\">\n      <h2>Dados pessoais</h2>\n      <p>Essas informacoes aparecem no atendimento e nas entregas.</p>\n      <mat-form-field appearance=\"outline\"><mat-label>Nome completo</mat-label><input matInput formControlName=\"fullName\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>E-mail</mat-label><input matInput formControlName=\"email\"></mat-form-field>\n      <mat-form-field appearance=\"outline\"><mat-label>Telefone</mat-label><input matInput formControlName=\"phone\"></mat-form-field>\n      @if (page.message()) { <p class=\"form-message\">{{ page.message() }}</p> }\n      <button mat-flat-button type=\"button\" (click)=\"page.save()\" [disabled]=\"page.loading() || page.form.invalid\">\n        {{ page.loading() ? 'Salvando...' : 'Salvar perfil' }}\n      </button>\n    </form>\n    <aside class=\"panel-card\">\n      <mat-icon>verified_user</mat-icon>\n      <h2>Conta protegida</h2>\n      <p>Senha criptografada, sessoes autenticadas e notificacoes de seguranca preparadas.</p>\n    </aside>\n  </div>\n</section>\n", styles: [":host { display: block; }\n.profile-grid { display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; }\n.panel-card:not(.elide-form-card) { display: grid; gap: 1rem; border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); padding: 1.5rem; box-shadow: var(--elide-shadow-card); }\naside mat-icon { color: var(--elide-orange); transform: scale(1.3); }\nh2 { margin: .5rem 0 0; font-weight: 900; }\np { margin: 0; color: var(--elide-muted); }\n.form-message { color: var(--elide-orange); font-weight: 800; }\n@media (max-width: 820px) { .profile-grid { grid-template-columns: 1fr; } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfilePageComponent, { className: "ProfilePageComponent", filePath: "src/app/pages/profile/profile.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=profile.component.js.map