import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MATERIAL } from '../shared/page-kit';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
const _c0 = () => ["Informe seus dados", "Salve seus enderecos", "Pague com PIX, cartao ou dinheiro"];
function RegisterPageComponent_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ɵ$index_16_r2 = ctx.$index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ɵ$index_16_r2 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(step_r1);
} }
function RegisterPageComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.page.message());
} }
export class RegisterPageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.message = signal(null, ...(ngDevMode ? [{ debugName: "message" }] : []));
        this.form = this.fb.nonNullable.group({
            fullName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]]
        });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading.set(true);
        this.message.set(null);
        this.auth.register(this.form.getRawValue()).pipe(finalize(() => this.loading.set(false))).subscribe({
            next: () => void this.router.navigateByUrl('/cliente'),
            error: () => this.message.set('Nao foi possivel criar a conta agora.')
        });
    }
    static { this.ɵfac = function RegisterPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RegisterPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterPageComponent, selectors: [["elide-register-page"]], decls: 41, vars: 5, consts: [[1, "register-page"], [1, "steps"], [1, "elide-form-card", 3, "ngSubmit", "formGroup"], ["type", "button", 1, "elide-google-button"], [1, "elide-form-divider"], ["appearance", "outline"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "username"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "api-message"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], ["mat-button", "", "routerLink", "/login"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div")(2, "span");
            i0.ɵɵtext(3, "Cadastro de cliente");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Crie sua conta ELIDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Pedidos, favoritos, carteira, enderecos e notificacoes organizados em uma experiencia simples.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 1);
            i0.ɵɵrepeaterCreate(9, RegisterPageComponent_For_10_Template, 5, 2, "article", null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "form", 2);
            i0.ɵɵlistener("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_11_listener() { return ctx.page.submit(); });
            i0.ɵɵelementStart(12, "h2");
            i0.ɵɵtext(13, "Dados de acesso");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "Crie sua conta para continuar.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 3);
            i0.ɵɵtext(17, "G\u00A0\u00A0Continuar com Google");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 4);
            i0.ɵɵtext(19, "ou");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-form-field", 5)(21, "mat-label");
            i0.ɵɵtext(22, "Nome completo");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-form-field", 5)(25, "mat-label");
            i0.ɵɵtext(26, "Usuario");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-form-field", 5)(29, "mat-label");
            i0.ɵɵtext(30, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-form-field", 5)(33, "mat-label");
            i0.ɵɵtext(34, "Senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(36, RegisterPageComponent_Conditional_36_Template, 2, 1, "p", 10);
            i0.ɵɵelementStart(37, "button", 11);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "a", 12);
            i0.ɵɵtext(40, "Ja tenho conta");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(4, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(25);
            i0.ɵɵconditional(ctx.page.message() ? 36 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page.loading() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Criando conta..." : "Cadastrar", " ");
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink], styles: ["[_nghost-%COMP%] { display: block; }\n.register-page[_ngcontent-%COMP%] { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; display: grid; gap: 2rem; grid-template-columns: .9fr 1.1fr; padding: 3rem 0; }\nspan[_ngcontent-%COMP%]:first-child { color: var(--elide-orange); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\nh1[_ngcontent-%COMP%] { margin: .75rem 0 0; color: var(--elide-ink); font-size: clamp(2.3rem, 5vw, 4rem); font-weight: 950; line-height: 1; }\np[_ngcontent-%COMP%] { color: var(--elide-muted); }\n.steps[_ngcontent-%COMP%] { margin-top: 1.5rem; display: grid; gap: .8rem; }\n.steps[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }\n.steps[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { display: flex; align-items: center; gap: .8rem; padding: 1rem; }\n.steps[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 999px; background: var(--elide-orange); color: white; }\nh2[_ngcontent-%COMP%] { margin: 0; font-size: 1.6rem; font-weight: 900; }\n.dark[_nghost-%COMP%]   h1[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   h1[_ngcontent-%COMP%] { color: white; }\n@media (max-width: 860px) {\n  .register-page[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .register-page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] { order: -1; }\n}\n\n@media (max-width: 520px) {\n  .register-page[_ngcontent-%COMP%] {\n    width: min(100% - 1rem, 1120px);\n    gap: 1.5rem;\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2.15rem;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-register-page', imports: [...MATERIAL, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"register-page\">\n  <div>\n    <span>Cadastro de cliente</span>\n    <h1>Crie sua conta ELIDE</h1>\n    <p>Pedidos, favoritos, carteira, enderecos e notificacoes organizados em uma experiencia simples.</p>\n    <div class=\"steps\">\n      @for (step of ['Informe seus dados', 'Salve seus enderecos', 'Pague com PIX, cartao ou dinheiro']; track step; let index = $index) {\n        <article><strong>{{ index + 1 }}</strong><span>{{ step }}</span></article>\n      }\n    </div>\n  </div>\n  <form class=\"elide-form-card\" [formGroup]=\"page.form\" (ngSubmit)=\"page.submit()\">\n    <h2>Dados de acesso</h2>\n    <p>Crie sua conta para continuar.</p>\n    <button class=\"elide-google-button\" type=\"button\">G&nbsp;&nbsp;Continuar com Google</button>\n    <div class=\"elide-form-divider\">ou</div>\n    <mat-form-field appearance=\"outline\"><mat-label>Nome completo</mat-label><input matInput formControlName=\"fullName\"></mat-form-field>\n    <mat-form-field appearance=\"outline\"><mat-label>Usuario</mat-label><input matInput formControlName=\"username\"></mat-form-field>\n    <mat-form-field appearance=\"outline\"><mat-label>E-mail</mat-label><input matInput type=\"email\" formControlName=\"email\"></mat-form-field>\n    <mat-form-field appearance=\"outline\"><mat-label>Senha</mat-label><input matInput type=\"password\" formControlName=\"password\"></mat-form-field>\n    @if (page.message()) { <p class=\"api-message\">{{ page.message() }}</p> }\n    <button mat-flat-button type=\"submit\" [disabled]=\"page.loading() || page.form.invalid\">\n      {{ page.loading() ? 'Criando conta...' : 'Cadastrar' }}\n    </button>\n    <a mat-button routerLink=\"/login\">Ja tenho conta</a>\n  </form>\n</section>\n", styles: [":host { display: block; }\n.register-page { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; display: grid; gap: 2rem; grid-template-columns: .9fr 1.1fr; padding: 3rem 0; }\nspan:first-child { color: var(--elide-orange); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\nh1 { margin: .75rem 0 0; color: var(--elide-ink); font-size: clamp(2.3rem, 5vw, 4rem); font-weight: 950; line-height: 1; }\np { color: var(--elide-muted); }\n.steps { margin-top: 1.5rem; display: grid; gap: .8rem; }\n.steps article { border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }\n.steps article { display: flex; align-items: center; gap: .8rem; padding: 1rem; }\n.steps strong { display: grid; place-items: center; width: 2rem; height: 2rem; border-radius: 999px; background: var(--elide-orange); color: white; }\nh2 { margin: 0; font-size: 1.6rem; font-weight: 900; }\n:host-context(.dark) h1 { color: white; }\n@media (max-width: 860px) {\n  .register-page { grid-template-columns: 1fr; }\n  .register-page form { order: -1; }\n}\n\n@media (max-width: 520px) {\n  .register-page {\n    width: min(100% - 1rem, 1120px);\n    gap: 1.5rem;\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  h1 {\n    font-size: 2.15rem;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterPageComponent, { className: "RegisterPageComponent", filePath: "src/app/pages/register/register.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=register.component.js.map