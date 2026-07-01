import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
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
function ChangePasswordPageComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
export class ChangePasswordPageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.form = this.fb.nonNullable.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', Validators.required]
        });
    }
    save() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const value = this.form.getRawValue();
        if (value.newPassword !== value.confirmPassword) {
            this.message.set('A confirmacao precisa ser igual a nova senha.');
            return;
        }
        this.loading.set(true);
        this.message.set(null);
        this.auth.changePassword(value).pipe(finalize(() => this.loading.set(false))).subscribe({
            next: () => {
                this.message.set('Senha atualizada com sucesso.');
                void this.router.navigateByUrl(this.auth.isAdmin() ? '/admin/dashboard' : '/cliente');
            },
            error: () => this.message.set('Endpoint /auth/change-password ainda nao respondeu.')
        });
    }
    static { this.ɵfac = function ChangePasswordPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChangePasswordPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChangePasswordPageComponent, selectors: [["elide-change-password-page"]], decls: 22, vars: 4, consts: [[1, "password-page"], ["title", "Alterar senha", "description", "Atualize sua senha periodicamente para manter sua conta ELIDE segura."], [1, "elide-form-card", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "password", "formControlName", "currentPassword"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], [1, "api-message"], ["mat-flat-button", "", "type", "button", 3, "click", "disabled"]], template: function ChangePasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "elide-client-heading", 1);
            i0.ɵɵelementStart(2, "form", 2)(3, "h2");
            i0.ɵɵtext(4, "Nova senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Use uma senha forte e exclusiva.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 3)(8, "mat-label");
            i0.ɵɵtext(9, "Senha atual");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-form-field", 3)(12, "mat-label");
            i0.ɵɵtext(13, "Nova senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-form-field", 3)(16, "mat-label");
            i0.ɵɵtext(17, "Confirmar nova senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(19, ChangePasswordPageComponent_Conditional_19_Template, 2, 1, "p", 7);
            i0.ɵɵelementStart(20, "button", 8);
            i0.ɵɵlistener("click", function ChangePasswordPageComponent_Template_button_click_20_listener() { return ctx.page.save(); });
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(17);
            i0.ɵɵconditional(ctx.page.message() ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page.loading() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Atualizando..." : "Atualizar senha", " ");
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, ClientHeadingComponent], styles: ["[_nghost-%COMP%] { display: block; }\n.password-page[_ngcontent-%COMP%] { width: min(760px, calc(100% - 2rem)); margin: 0 auto; padding: 2.5rem 0 4rem; }\n.api-message[_ngcontent-%COMP%] { margin: 0; color: var(--elide-orange); font-weight: 800; }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-change-password-page', imports: [...MATERIAL, ClientHeadingComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"password-page\">\n  <elide-client-heading title=\"Alterar senha\" description=\"Atualize sua senha periodicamente para manter sua conta ELIDE segura.\" />\n  <form class=\"elide-form-card\" [formGroup]=\"page.form\">\n    <h2>Nova senha</h2>\n    <p>Use uma senha forte e exclusiva.</p>\n    <mat-form-field appearance=\"outline\"><mat-label>Senha atual</mat-label><input matInput type=\"password\" formControlName=\"currentPassword\"></mat-form-field>\n    <mat-form-field appearance=\"outline\"><mat-label>Nova senha</mat-label><input matInput type=\"password\" formControlName=\"newPassword\"></mat-form-field>\n    <mat-form-field appearance=\"outline\"><mat-label>Confirmar nova senha</mat-label><input matInput type=\"password\" formControlName=\"confirmPassword\"></mat-form-field>\n    @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n    <button mat-flat-button type=\"button\" (click)=\"page.save()\" [disabled]=\"page.loading() || page.form.invalid\">\n      {{ page.loading() ? 'Atualizando...' : 'Atualizar senha' }}\n    </button>\n  </form>\n</section>\n", styles: [":host { display: block; }\n.password-page { width: min(760px, calc(100% - 2rem)); margin: 0 auto; padding: 2.5rem 0 4rem; }\n.api-message { margin: 0; color: var(--elide-orange); font-weight: 800; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChangePasswordPageComponent, { className: "ChangePasswordPageComponent", filePath: "src/app/pages/change-password/change-password.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=change-password.component.js.map