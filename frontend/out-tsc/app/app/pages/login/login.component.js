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
const _c0 = () => ["PIX e cartao", "Rastreamento ao vivo", "Cupons personalizados"];
function LoginPageComponent_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "mat-icon");
    i0.ɵɵtext(2, "verified");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r1);
} }
function LoginPageComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.page.error());
} }
export class LoginPageComponent {
    constructor() {
        this.page = this;
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : []));
        this.loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : []));
        this.form = this.fb.nonNullable.group({
            username: ['leonardo_admin', Validators.required],
            password: ['elide.com.leo.2026', Validators.required]
        });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading.set(true);
        this.error.set('');
        this.auth.login(this.form.controls.username.value, this.form.controls.password.value).pipe(finalize(() => this.loading.set(false))).subscribe({
            next: (profile) => {
                if (profile.mustChangePassword) {
                    void this.router.navigateByUrl('/alterar-senha');
                    return;
                }
                void this.router.navigateByUrl(this.auth.isAdmin() ? '/admin/dashboard' : '/cliente');
            },
            error: () => this.error.set('Credenciais invalidas ou servidor indisponivel.')
        });
    }
    static { this.ɵfac = function LoginPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginPageComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginPageComponent, selectors: [["elide-login-page"]], decls: 38, vars: 5, consts: [[1, "auth-page"], [1, "auth-copy"], [1, "auth-benefits"], [1, "auth-card", "elide-form-card", 3, "ngSubmit", "formGroup"], ["type", "button", 1, "elide-google-button"], [1, "elide-form-divider"], ["appearance", "outline"], ["matInput", "", "formControlName", "username", "placeholder", "voce@email.com"], ["matInput", "", "type", "password", "formControlName", "password"], [1, "error"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], [1, "auth-links"], ["mat-button", "", "routerLink", "/recuperar-senha"], ["routerLink", "/cadastro"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "span");
            i0.ɵɵtext(3, "Acesso seguro");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Entrar no ELIDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p");
            i0.ɵɵtext(7, "Continue seus pedidos, acompanhe entregas em tempo real e gerencie pagamentos, cupons e favoritos em uma unica conta.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2);
            i0.ɵɵrepeaterCreate(9, LoginPageComponent_For_10_Template, 5, 1, "article", null, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "form", 3);
            i0.ɵɵlistener("ngSubmit", function LoginPageComponent_Template_form_ngSubmit_11_listener() { return ctx.page.submit(); });
            i0.ɵɵelementStart(12, "h2");
            i0.ɵɵtext(13, "Bem-vindo de volta");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "Entre para continuar.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "button", 4);
            i0.ɵɵtext(17, "G\u00A0\u00A0Continuar com Google");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 5);
            i0.ɵɵtext(19, "ou");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-form-field", 6)(21, "mat-label");
            i0.ɵɵtext(22, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(23, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-form-field", 6)(25, "mat-label");
            i0.ɵɵtext(26, "Senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(27, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(28, LoginPageComponent_Conditional_28_Template, 2, 1, "span", 9);
            i0.ɵɵelementStart(29, "button", 10);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 11)(32, "a", 12);
            i0.ɵɵtext(33, "Esqueci minha senha");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵtext(35, "Nao tem conta? ");
            i0.ɵɵelementStart(36, "a", 13);
            i0.ɵɵtext(37, "Cadastre-se");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(4, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.page.form);
            i0.ɵɵadvance(17);
            i0.ɵɵconditional(ctx.page.error() ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page.loading() || ctx.page.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.page.loading() ? "Entrando..." : "Entrar", " ");
        } }, dependencies: [i1.CommonModule, i2.ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i3.MatButtonModule, i3.MatButton, i4.MatCardModule, i5.MatChipsModule, i6.MatFormFieldModule, i6.MatFormField, i6.MatLabel, i7.MatIconModule, i7.MatIcon, i8.MatInputModule, i8.MatInput, i9.MatListModule, i10.MatProgressBarModule, i11.MatProgressSpinnerModule, i12.MatSelectModule, i13.MatTabsModule, RouterLink], styles: ["[_nghost-%COMP%] { display: block; }\n.auth-page[_ngcontent-%COMP%] { min-height: calc(100vh - 64px); width: min(1120px, calc(100% - 2rem)); margin: 0 auto; display: grid; align-items: center; gap: 3rem; grid-template-columns: 1fr 420px; padding: 3rem 0; }\n.auth-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--elide-orange); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\n.auth-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { margin: .75rem 0 0; color: var(--elide-ink); font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 950; line-height: 1; }\n.auth-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { max-width: 38rem; color: var(--elide-muted); font-size: 1.05rem; }\n.auth-benefits[_ngcontent-%COMP%] { margin-top: 1.5rem; display: grid; gap: .85rem; grid-template-columns: repeat(3, 1fr); }\n.auth-benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }\n.auth-benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { padding: 1rem; }\n.auth-benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] { color: var(--elide-orange); }\n.auth-benefits[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { display: block; margin-top: .5rem; }\n.auth-card[_ngcontent-%COMP%] { width: min(100%, 420px); justify-self: end; }\n.auth-links[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; justify-content: center; gap: .5rem; color: var(--elide-muted); }\n.auth-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { color: var(--elide-orange); font-weight: 900; text-decoration: none; }\n.error[_ngcontent-%COMP%] { color: #dc2626; font-weight: 800; }\n.dark[_nghost-%COMP%]   .auth-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .auth-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { color: white; }\n@media (max-width: 880px) {\n  .auth-page[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .auth-card[_ngcontent-%COMP%] { order: -1; justify-self: stretch; width: 100%; }\n  .auth-benefits[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 520px) {\n  .auth-page[_ngcontent-%COMP%] {\n    min-height: auto;\n    width: min(100% - 1rem, 1120px);\n    gap: 1.5rem;\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  .auth-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n\n  .auth-card[_ngcontent-%COMP%] {\n    justify-self: stretch;\n    width: 100%;\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginPageComponent, [{
        type: Component,
        args: [{ selector: 'elide-login-page', imports: [...MATERIAL, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"auth-page\">\n  <div class=\"auth-copy\">\n    <span>Acesso seguro</span>\n    <h1>Entrar no ELIDE</h1>\n    <p>Continue seus pedidos, acompanhe entregas em tempo real e gerencie pagamentos, cupons e favoritos em uma unica conta.</p>\n    <div class=\"auth-benefits\">\n      @for (item of ['PIX e cartao', 'Rastreamento ao vivo', 'Cupons personalizados']; track item) {\n        <article><mat-icon>verified</mat-icon><strong>{{ item }}</strong></article>\n      }\n    </div>\n  </div>\n  <form class=\"auth-card elide-form-card\" [formGroup]=\"page.form\" (ngSubmit)=\"page.submit()\">\n    <h2>Bem-vindo de volta</h2>\n    <p>Entre para continuar.</p>\n    <button class=\"elide-google-button\" type=\"button\">G&nbsp;&nbsp;Continuar com Google</button>\n    <div class=\"elide-form-divider\">ou</div>\n    <mat-form-field appearance=\"outline\"><mat-label>E-mail</mat-label><input matInput formControlName=\"username\" placeholder=\"voce@email.com\"></mat-form-field>\n    <mat-form-field appearance=\"outline\"><mat-label>Senha</mat-label><input matInput type=\"password\" formControlName=\"password\"></mat-form-field>\n    @if (page.error()) { <span class=\"error\">{{ page.error() }}</span> }\n    <button mat-flat-button type=\"submit\" [disabled]=\"page.loading() || page.form.invalid\">\n      {{ page.loading() ? 'Entrando...' : 'Entrar' }}\n    </button>\n    <div class=\"auth-links\">\n      <a mat-button routerLink=\"/recuperar-senha\">Esqueci minha senha</a>\n      <span>Nao tem conta? <a routerLink=\"/cadastro\">Cadastre-se</a></span>\n    </div>\n  </form>\n</section>\n", styles: [":host { display: block; }\n.auth-page { min-height: calc(100vh - 64px); width: min(1120px, calc(100% - 2rem)); margin: 0 auto; display: grid; align-items: center; gap: 3rem; grid-template-columns: 1fr 420px; padding: 3rem 0; }\n.auth-copy span { color: var(--elide-orange); font-size: .78rem; font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }\n.auth-copy h1 { margin: .75rem 0 0; color: var(--elide-ink); font-size: clamp(2.4rem, 5vw, 4.2rem); font-weight: 950; line-height: 1; }\n.auth-copy p { max-width: 38rem; color: var(--elide-muted); font-size: 1.05rem; }\n.auth-benefits { margin-top: 1.5rem; display: grid; gap: .85rem; grid-template-columns: repeat(3, 1fr); }\n.auth-benefits article { border: 1px solid var(--elide-border); border-radius: 8px; background: var(--elide-card); box-shadow: var(--elide-shadow-card); }\n.auth-benefits article { padding: 1rem; }\n.auth-benefits mat-icon { color: var(--elide-orange); }\n.auth-benefits strong { display: block; margin-top: .5rem; }\n.auth-card { width: min(100%, 420px); justify-self: end; }\n.auth-links { display: flex; flex-wrap: wrap; justify-content: center; gap: .5rem; color: var(--elide-muted); }\n.auth-links a { color: var(--elide-orange); font-weight: 900; text-decoration: none; }\n.error { color: #dc2626; font-weight: 800; }\n:host-context(.dark) .auth-copy h1 { color: white; }\n@media (max-width: 880px) {\n  .auth-page { grid-template-columns: 1fr; }\n  .auth-card { order: -1; justify-self: stretch; width: 100%; }\n  .auth-benefits { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 520px) {\n  .auth-page {\n    min-height: auto;\n    width: min(100% - 1rem, 1120px);\n    gap: 1.5rem;\n    padding: 1.5rem 0 2.5rem;\n  }\n\n  .auth-copy h1 {\n    font-size: 2.2rem;\n  }\n\n  .auth-card {\n    justify-self: stretch;\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginPageComponent, { className: "LoginPageComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=login.component.js.map