import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
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
function ForgotPasswordPageComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.page.message());
} }
export class ForgotPasswordPageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.sent = signal(false, ...(ngDevMode ? [{ debugName: "sent" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.form = this.fb.nonNullable.group({ identifier: ['', Validators.required] });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading.set(true);
        this.message.set(null);
        this.auth.forgotPassword(this.form.controls.identifier.value).pipe(finalize(() => this.loading.set(false))).subscribe({
            next: () => {
                this.sent.set(true);
                this.message.set('Codigo enviado para o contato cadastrado.');
            },
            error: () => this.message.set('Endpoint /auth/forgot-password ainda nao respondeu.')
        });
    }
    static { this.ɵfac = function ForgotPasswordPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ForgotPasswordPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPasswordPageComponent, selectors: [["elide-forgot-password-page"]], decls: 22, vars: 4, consts: [[1, "auth-lite"], [1, "elide-form-card", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "identifier"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], [1, "api-message"], ["mat-button", "", "routerLink", "/login"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div")(2, "span");
            i0.ɵɵtext(3, "Recuperacao segura");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Esqueci minha senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Informe seu e-mail ou usuario para receber um codigo temporario de recuperacao.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "form", 1);
            i0.ɵɵlistener("ngSubmit", function ForgotPasswordPageComponent_Template_form_ngSubmit_8_listener() { return ctx.page.submit(); });
            i0.ɵɵelementStart(9, "h2");
            i0.ɵɵtext(10, "Recuperar acesso");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Receba um codigo temporario.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-form-field", 2)(14, "mat-label");
            i0.ɵɵtext(15, "E-mail ou usuario");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 4);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(19, ForgotPasswordPageComponent_Conditional_19_Template, 2, 1, "p", 5);
            i0.ɵɵelementStart(20, "a", 6);
            i0.ɵɵtext(21, "Voltar ao login");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("disabled", ctx.page.loading() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Enviando..." : "Enviar codigo", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.page.message() ? 19 : -1);
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink], styles: ["[_nghost-%COMP%] { display: block; }\n.auth-lite[_ngcontent-%COMP%] { width: min(900px, calc(100% - 2rem)); margin: 0 auto; display: grid; grid-template-columns: 1fr 390px; gap: 2rem; padding: 4rem 0; }\nspan[_ngcontent-%COMP%] { color: var(--elide-orange); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\nh1[_ngcontent-%COMP%] { margin: .75rem 0 0; color: var(--elide-ink); font-size: clamp(2.3rem, 5vw, 3.5rem); font-weight: 950; }\np[_ngcontent-%COMP%] { color: var(--elide-muted); }\nstrong[_ngcontent-%COMP%] { color: var(--elide-orange); }\n.dark[_nghost-%COMP%]   h1[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   h1[_ngcontent-%COMP%] { color: white; }\n@media (max-width: 760px) {\n  .auth-lite[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .auth-lite[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { order: -1; }\n}\n\n@media (max-width: 520px) {\n  .auth-lite[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 900px);\n    gap: 1.5rem;\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.15rem;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-forgot-password-page', imports: [...MATERIAL, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"auth-lite\">\n  <div>\n    <span>Recuperacao segura</span>\n    <h1>Esqueci minha senha</h1>\n    <p>Informe seu e-mail ou usuario para receber um codigo temporario de recuperacao.</p>\n  </div>\n  <form class=\"elide-form-card\" [formGroup]=\"page.form\" (ngSubmit)=\"page.submit()\">\n    <h2>Recuperar acesso</h2>\n    <p>Receba um codigo temporario.</p>\n    <mat-form-field appearance=\"outline\"><mat-label>E-mail ou usuario</mat-label><input matInput formControlName=\"identifier\"></mat-form-field>\n    <button mat-flat-button type=\"submit\" [disabled]=\"page.loading() || page.form.invalid\">\n      {{ page.loading() ? 'Enviando...' : 'Enviar codigo' }}\n    </button>\n    @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n    <a mat-button routerLink=\"/login\">Voltar ao login</a>\n  </form>\n</section>\n", styles: [":host { display: block; }\n.auth-lite { width: min(900px, calc(100% - 2rem)); margin: 0 auto; display: grid; grid-template-columns: 1fr 390px; gap: 2rem; padding: 4rem 0; }\nspan { color: var(--elide-orange); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\nh1 { margin: .75rem 0 0; color: var(--elide-ink); font-size: clamp(2.3rem, 5vw, 3.5rem); font-weight: 950; }\np { color: var(--elide-muted); }\nstrong { color: var(--elide-orange); }\n:host-context(.dark) h1 { color: white; }\n@media (max-width: 760px) {\n  .auth-lite { grid-template-columns: 1fr; }\n  .auth-lite form { order: -1; }\n}\n\n@media (max-width: 520px) {\n  .auth-lite {\n    width: min(100% - 1rem, 900px);\n    gap: 1.5rem;\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  h1 {\n    font-size: 2.15rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordPageComponent, { className: "ForgotPasswordPageComponent", filePath: "src/app/pages/forgot-password/forgot-password.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=forgot-password.component.js.map