import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../services/theme.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
const _c0 = () => ({ exact: true });
const _forTrack0 = ($index, $item) => $item.route;
const _forTrack1 = ($index, $item) => $item.title;
const _forTrack2 = ($index, $item) => $item.route + $item.label;
function ShellLayoutComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", item_r1.route)("routerLinkActiveOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r1.label, " ");
} }
function ShellLayoutComponent_Conditional_17_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32)(1, "mat-icon");
    i0.ɵɵtext(2, "admin_panel_settings");
    i0.ɵɵelementEnd()();
} }
function ShellLayoutComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 31)(1, "mat-icon");
    i0.ɵɵtext(2, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, ShellLayoutComponent_Conditional_17_Conditional_4_Template, 3, 0, "a", 32);
    i0.ɵɵelementStart(5, "button", 33);
    i0.ɵɵlistener("click", function ShellLayoutComponent_Conditional_17_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.logout()); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "logout");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.userName());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.auth.isAdmin() ? 4 : -1);
} }
function ShellLayoutComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9)(1, "mat-icon");
    i0.ɵɵtext(2, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Entrar");
    i0.ɵɵelementEnd();
} }
function ShellLayoutComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "mat-icon");
    i0.ɵɵtext(2, "account_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.userName());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.userRoleLabel());
} }
function ShellLayoutComponent_For_44_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 35);
    i0.ɵɵlistener("click", function ShellLayoutComponent_For_44_For_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeMobileMenu()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const link_r5 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", link_r5.route);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r5.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r5.label);
} }
function ShellLayoutComponent_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, ShellLayoutComponent_For_44_For_4_Template, 5, 3, "a", 34, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r6.title);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r6.links);
} }
function ShellLayoutComponent_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function ShellLayoutComponent_Conditional_45_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.logout()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "logout");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Sair da conta");
    i0.ɵɵelementEnd()();
} }
function ShellLayoutComponent_For_70_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r8 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", link_r8.route);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(link_r8.label);
} }
function ShellLayoutComponent_For_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nav", 29)(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, ShellLayoutComponent_For_70_For_4_Template, 2, 2, "a", 34, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r9 = ctx.$implicit;
    i0.ɵɵattribute("aria-label", group_r9.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r9.title);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r9.links);
} }
export class ShellLayoutComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.theme = inject(ThemeService);
        this.router = inject(Router);
        this.mobileMenuOpen = signal(false, ...(ngDevMode ? [{ debugName: "mobileMenuOpen" }] : []));
        this.userName = computed(() => this.auth.profile()?.fullName || this.auth.profile()?.username || 'Minha conta', ...(ngDevMode ? [{ debugName: "userName" }] : []));
        this.userRoleLabel = computed(() => {
            if (this.auth.hasRole('MASTER_ADMIN')) {
                return 'Administrador master';
            }
            if (this.auth.hasRole('ADMIN')) {
                return 'Administrador';
            }
            if (this.auth.hasRole('STORE_OWNER') || this.auth.hasRole('STORE_USER')) {
                return 'Estabelecimento';
            }
            if (this.auth.hasRole('COURIER')) {
                return 'Entregador';
            }
            return this.auth.isAuthenticated() ? 'Cliente' : 'Visitante';
        }, ...(ngDevMode ? [{ debugName: "userRoleLabel" }] : []));
        this.visibleMenuGroups = computed(() => this.menuGroups
            .map((group) => ({
            ...group,
            links: group.links.filter((link) => this.canSee(link.roles))
        }))
            .filter((group) => group.links.length > 0), ...(ngDevMode ? [{ debugName: "visibleMenuGroups" }] : []));
        this.mainLinks = [
            { label: 'Restaurantes', route: '/restaurantes' },
            { label: 'Mercado', route: '/mercados' },
            { label: 'Farmacia', route: '/farmacias' },
            { label: 'Meus Pedidos', route: '/meus-pedidos' },
            { label: 'Contato', route: '/contato' }
        ];
        this.footerGroups = [
            {
                title: 'Categorias',
                links: [
                    { label: 'Restaurantes', route: '/restaurantes' },
                    { label: 'Lanchonetes & Pizzarias', route: '/restaurantes' },
                    { label: 'Mercados', route: '/mercados' },
                    { label: 'Farmacias', route: '/farmacias' }
                ]
            },
            {
                title: 'Parceiros',
                links: [
                    { label: 'Area da Loja', route: '/loja' },
                    { label: 'Seja entregador', route: '/entregador' },
                    { label: 'Painel Admin', route: '/admin/dashboard' },
                    { label: 'Contato', route: '/contato' }
                ]
            },
            {
                title: 'Conta',
                links: [
                    { label: 'Entrar', route: '/login' },
                    { label: 'Criar conta', route: '/cadastro' },
                    { label: 'Meus pedidos', route: '/meus-pedidos' },
                    { label: 'Cupons', route: '/cupons' },
                    { label: 'Carteira', route: '/carteira' }
                ]
            }
        ];
        this.menuGroups = [
            {
                title: 'Comprar',
                links: [
                    { label: 'Restaurantes', route: '/restaurantes', icon: 'restaurant', roles: ['guest', 'auth'] },
                    { label: 'Mercados', route: '/mercados', icon: 'local_grocery_store', roles: ['guest', 'auth'] },
                    { label: 'Farmacias', route: '/farmacias', icon: 'local_pharmacy', roles: ['guest', 'auth'] },
                    { label: 'Padarias', route: '/padarias', icon: 'bakery_dining', roles: ['guest', 'auth'] },
                    { label: 'Lanchonetes', route: '/lanchonetes', icon: 'lunch_dining', roles: ['guest', 'auth'] },
                    { label: 'Acougues', route: '/acougues', icon: 'set_meal', roles: ['guest', 'auth'] },
                    { label: 'Pet Shops', route: '/pet-shops', icon: 'pets', roles: ['guest', 'auth'] },
                    { label: 'Carrinho', route: '/carrinho', icon: 'shopping_bag', roles: ['guest', 'auth'] },
                    { label: 'Contato', route: '/contato', icon: 'support_agent', roles: ['guest', 'auth'] }
                ]
            },
            {
                title: 'Cliente',
                links: [
                    { label: 'Cadastro', route: '/cadastro', icon: 'person_add', roles: ['guest'] },
                    { label: 'Login', route: '/login', icon: 'login', roles: ['guest'] },
                    { label: 'Esqueci minha senha', route: '/recuperar-senha', icon: 'lock_reset', roles: ['guest'] },
                    { label: 'Area do cliente', route: '/cliente', icon: 'dashboard', roles: ['customer'] },
                    { label: 'Editar perfil', route: '/perfil', icon: 'person', roles: ['customer'] },
                    { label: 'Alterar senha', route: '/alterar-senha', icon: 'lock_reset', roles: ['customer'] },
                    { label: 'Favoritos', route: '/favoritos', icon: 'favorite', roles: ['customer'] },
                    { label: 'Enderecos', route: '/enderecos', icon: 'location_on', roles: ['customer'] },
                    { label: 'Historico de pedidos', route: '/meus-pedidos', icon: 'receipt_long', roles: ['customer'] },
                    { label: 'Cupons', route: '/cupons', icon: 'sell', roles: ['customer'] },
                    { label: 'Carteira', route: '/carteira', icon: 'account_balance_wallet', roles: ['customer'] },
                    { label: 'Avaliacoes', route: '/avaliacoes', icon: 'star', roles: ['customer'] },
                    { label: 'Notificacoes', route: '/notificacoes', icon: 'notifications', roles: ['customer'] },
                    { label: 'Pagamentos', route: '/pagamentos', icon: 'payments', roles: ['customer'] },
                    { label: 'Pagamento via PIX', route: '/pagamentos/pix', icon: 'qr_code_2', roles: ['customer'] },
                    { label: 'Pagamento via cartao', route: '/pagamentos/cartao', icon: 'credit_card', roles: ['customer'] },
                    { label: 'Pagamento em dinheiro', route: '/pagamentos/dinheiro', icon: 'payments', roles: ['customer'] },
                    { label: 'Rastreamento em tempo real', route: '/rastreamento', icon: 'near_me', roles: ['customer'] }
                ]
            },
            {
                title: 'Estabelecimento',
                links: [
                    { label: 'Area da loja', route: '/loja', icon: 'storefront', roles: ['store'] },
                    { label: 'Cadastro da loja', route: '/loja', icon: 'add_business', roles: ['store'] },
                    { label: 'Envio de documentacao', route: '/loja', icon: 'upload_file', roles: ['store'] },
                    { label: 'Aprovacao pelo administrador', route: '/loja', icon: 'verified', roles: ['store'] },
                    { label: 'Produtos', route: '/loja', icon: 'inventory_2', roles: ['store'] },
                    { label: 'Categorias', route: '/loja', icon: 'category', roles: ['store'] },
                    { label: 'Complementos', route: '/loja', icon: 'add_circle', roles: ['store'] },
                    { label: 'Horarios', route: '/loja', icon: 'schedule', roles: ['store'] },
                    { label: 'Estoque', route: '/loja', icon: 'inventory', roles: ['store'] },
                    { label: 'Promocoes', route: '/loja', icon: 'local_offer', roles: ['store'] },
                    { label: 'Recebimento de pedidos', route: '/loja', icon: 'receipt_long', roles: ['store'] },
                    { label: 'Status do pedido', route: '/loja', icon: 'published_with_changes', roles: ['store'] },
                    { label: 'Financeiro', route: '/loja', icon: 'payments', roles: ['store'] },
                    { label: 'Relatorios', route: '/loja', icon: 'bar_chart', roles: ['store'] },
                    { label: 'Dashboard', route: '/loja', icon: 'dashboard', roles: ['store'] },
                    { label: 'Avaliacoes', route: '/loja', icon: 'reviews', roles: ['store'] }
                ]
            },
            {
                title: 'Entregador',
                links: [
                    { label: 'Area do entregador', route: '/entregador', icon: 'delivery_dining', roles: ['courier'] },
                    { label: 'Cadastro', route: '/entregador', icon: 'person_add', roles: ['courier'] },
                    { label: 'Envio de documentos', route: '/entregador', icon: 'upload_file', roles: ['courier'] },
                    { label: 'Validacao pelo administrador', route: '/entregador', icon: 'verified', roles: ['courier'] },
                    { label: 'Aceitar corrida', route: '/entregador', icon: 'check_circle', roles: ['courier'] },
                    { label: 'Recusar corrida', route: '/entregador', icon: 'cancel', roles: ['courier'] },
                    { label: 'GPS', route: '/entregador', icon: 'my_location', roles: ['courier'] },
                    { label: 'Mapa', route: '/entregador', icon: 'map', roles: ['courier'] },
                    { label: 'Ganhos diarios', route: '/entregador', icon: 'today', roles: ['courier'] },
                    { label: 'Ganhos mensais', route: '/entregador', icon: 'calendar_month', roles: ['courier'] },
                    { label: 'Extrato', route: '/entregador', icon: 'account_balance_wallet', roles: ['courier'] },
                    { label: 'Historico de entregas', route: '/entregador', icon: 'history', roles: ['courier'] },
                    { label: 'Disponivel / indisponivel', route: '/entregador', icon: 'toggle_on', roles: ['courier'] }
                ]
            },
            {
                title: 'Administrador',
                links: [
                    { label: 'Painel administrativo', route: '/admin/dashboard', icon: 'admin_panel_settings', roles: ['admin'] },
                    { label: 'CRUD de lojas', route: '/admin/lojas', icon: 'storefront', roles: ['admin'] },
                    { label: 'CRUD de categorias', route: '/admin/categorias', icon: 'category', roles: ['admin'] },
                    { label: 'CRUD de banners', route: '/admin/banners', icon: 'image', roles: ['admin'] },
                    { label: 'CRUD de cidades', route: '/admin/cidades', icon: 'location_city', roles: ['admin'] },
                    { label: 'CRUD de cupons', route: '/admin/cupons', icon: 'sell', roles: ['admin'] },
                    { label: 'CRUD de taxas', route: '/admin/taxas', icon: 'percent', roles: ['admin'] },
                    { label: 'CRUD de administradores', route: '/admin/administradores', icon: 'manage_accounts', roles: ['admin'] },
                    { label: 'Aprovar estabelecimentos', route: '/admin/aprovacoes/estabelecimentos', icon: 'verified', roles: ['admin'] },
                    { label: 'Aprovar entregadores', route: '/admin/aprovacoes/entregadores', icon: 'two_wheeler', roles: ['admin'] },
                    { label: 'Aprovar novos ADMIN', route: '/admin/aprovacoes/admins', icon: 'shield_person', roles: ['admin'] },
                    { label: 'Todos os pedidos', route: '/admin/pedidos', icon: 'receipt_long', roles: ['admin'] },
                    { label: 'Gestao financeira', route: '/admin/financeiro', icon: 'payments', roles: ['admin'] },
                    { label: 'Dashboard', route: '/admin/dashboard', icon: 'dashboard', roles: ['admin'] },
                    { label: 'Auditoria', route: '/admin/auditoria', icon: 'policy', roles: ['admin'] },
                    { label: 'Logs', route: '/admin/logs', icon: 'article', roles: ['admin'] },
                    { label: 'Configuracoes gerais', route: '/admin/configuracoes', icon: 'settings', roles: ['admin'] }
                ]
            },
            {
                title: 'Conta',
                links: [
                    { label: 'Meu perfil', route: '/perfil', icon: 'person', roles: ['auth'] },
                    { label: 'Alterar senha', route: '/alterar-senha', icon: 'lock_reset', roles: ['auth'] }
                ]
            }
        ];
    }
    toggleMobileMenu() {
        this.mobileMenuOpen.update((open) => !open);
    }
    closeMobileMenu() {
        this.mobileMenuOpen.set(false);
    }
    logout() {
        this.auth.logout();
        this.closeMobileMenu();
        void this.router.navigateByUrl('/login');
    }
    canSee(roles) {
        const authenticated = this.auth.isAuthenticated();
        if (roles.includes('guest') && !authenticated) {
            return true;
        }
        if (roles.includes('auth') && authenticated) {
            return true;
        }
        if (roles.includes('admin') && this.auth.isAdmin()) {
            return true;
        }
        if (roles.includes('store') && (this.auth.isStoreUser() || this.auth.isAdmin())) {
            return true;
        }
        if (roles.includes('courier') && (this.auth.hasRole('COURIER') || this.auth.isAdmin())) {
            return true;
        }
        return roles.includes('customer') && authenticated;
    }
    static { this.ɵfac = function ShellLayoutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ShellLayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShellLayoutComponent, selectors: [["elide-shell-layout"]], hostAttrs: ["ngSkipHydration", "true"], decls: 74, vars: 9, consts: [[1, "site-header"], [1, "header-inner"], ["routerLink", "/", "aria-label", "ELIDE inicio", 1, "brand-link"], ["src", "/assets/brand/elide-logo.svg", "alt", "ELIDE"], ["aria-label", "Navegacao principal", 1, "main-nav"], ["mat-button", "", "routerLinkActive", "active-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "header-actions"], ["mat-button", "", "routerLink", "/loja", 1, "partner-pill"], ["mat-button", "", "routerLink", "/entregador", 1, "partner-pill"], ["mat-stroked-button", "", "routerLink", "/login", 1, "login-pill"], ["mat-icon-button", "", "routerLink", "/carrinho", "aria-label", "Carrinho", 1, "cart-button"], ["mat-icon-button", "", "type", "button", "aria-label", "Alternar tema", 1, "ghost-icon", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Abrir menu", 1, "menu-button", 3, "click"], ["type", "button", "aria-label", "Fechar menu", 1, "mobile-backdrop", 3, "click"], ["aria-label", "Menu mobile", 1, "mobile-drawer"], [1, "mobile-drawer-header"], ["routerLink", "/", "aria-label", "ELIDE inicio", 1, "drawer-brand", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Fechar menu", 1, "drawer-close", 3, "click"], ["aria-label", "Navegacao mobile", 1, "mobile-menu-section"], [1, "drawer-user"], [1, "menu-group"], ["type", "button", 1, "drawer-logout"], [1, "site-footer"], [1, "footer-inner"], ["aria-label", "ELIDE", 1, "footer-brand"], ["routerLink", "/", "aria-label", "ELIDE inicio", 1, "brand-link", "footer-logo"], [1, "footer-contact"], ["href", "tel:+5511948562875"], ["href", "mailto:leonardocosta028@icloud.com"], [1, "footer-links"], [1, "footer-bottom"], ["mat-stroked-button", "", "routerLink", "/perfil", 1, "login-pill", "user-pill"], ["mat-icon-button", "", "routerLink", "/admin/dashboard", "aria-label", "Painel admin", 1, "ghost-icon"], ["mat-icon-button", "", "type", "button", "aria-label", "Sair", 1, "ghost-icon", "logout-button", 3, "click"], [3, "routerLink"], [3, "click", "routerLink"], ["type", "button", 1, "drawer-logout", 3, "click"]], template: function ShellLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "span")(5, "strong");
            i0.ɵɵtext(6, "ELIDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "small");
            i0.ɵɵtext(8, "Mais que entrega. Conexao.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "nav", 4);
            i0.ɵɵrepeaterCreate(10, ShellLayoutComponent_For_11_Template, 2, 4, "a", 5, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 6)(13, "a", 7);
            i0.ɵɵtext(14, "Loja");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 8);
            i0.ɵɵtext(16, "Entregador");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(17, ShellLayoutComponent_Conditional_17_Template, 8, 2)(18, ShellLayoutComponent_Conditional_18_Template, 4, 0, "a", 9);
            i0.ɵɵelementStart(19, "a", 10)(20, "mat-icon");
            i0.ɵɵtext(21, "shopping_bag");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "button", 11);
            i0.ɵɵlistener("click", function ShellLayoutComponent_Template_button_click_22_listener() { return ctx.theme.toggle(); });
            i0.ɵɵelementStart(23, "mat-icon");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "button", 12);
            i0.ɵɵlistener("click", function ShellLayoutComponent_Template_button_click_25_listener() { return ctx.toggleMobileMenu(); });
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "menu");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(28, "button", 13);
            i0.ɵɵlistener("click", function ShellLayoutComponent_Template_button_click_28_listener() { return ctx.closeMobileMenu(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "aside", 14)(30, "div", 15)(31, "a", 16);
            i0.ɵɵlistener("click", function ShellLayoutComponent_Template_a_click_31_listener() { return ctx.closeMobileMenu(); });
            i0.ɵɵelement(32, "img", 3);
            i0.ɵɵelementStart(33, "span")(34, "strong");
            i0.ɵɵtext(35, "ELIDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "small");
            i0.ɵɵtext(37, "Mais que entrega. Conexao.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(38, "button", 17);
            i0.ɵɵlistener("click", function ShellLayoutComponent_Template_button_click_38_listener() { return ctx.closeMobileMenu(); });
            i0.ɵɵelementStart(39, "mat-icon");
            i0.ɵɵtext(40, "close");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(41, "nav", 18);
            i0.ɵɵconditionalCreate(42, ShellLayoutComponent_Conditional_42_Template, 8, 2, "div", 19);
            i0.ɵɵrepeaterCreate(43, ShellLayoutComponent_For_44_Template, 5, 1, "div", 20, _forTrack1);
            i0.ɵɵconditionalCreate(45, ShellLayoutComponent_Conditional_45_Template, 5, 0, "button", 21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "main");
            i0.ɵɵelement(47, "router-outlet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "footer", 22)(49, "div", 23)(50, "section", 24)(51, "a", 25);
            i0.ɵɵelement(52, "img", 3);
            i0.ɵɵelementStart(53, "span")(54, "strong");
            i0.ɵɵtext(55, "ELIDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "small");
            i0.ɵɵtext(57, "Mais que entrega. Conexao.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(58, "p");
            i0.ɵɵtext(59, "Mais que entrega. Conexao. Delivery rapido e confiavel para cidades pequenas e medias de todo o Brasil.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 26)(61, "a", 27)(62, "mat-icon");
            i0.ɵɵtext(63, "call");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(64, " (11) 94856-2875");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "a", 28)(66, "mat-icon");
            i0.ɵɵtext(67, "mail");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(68, " leonardocosta028@icloud.com");
            i0.ɵɵelementEnd()()();
            i0.ɵɵrepeaterCreate(69, ShellLayoutComponent_For_70_Template, 5, 2, "nav", 29, _forTrack1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "div", 30)(72, "span");
            i0.ɵɵtext(73, "\u00A9 2026 ELIDE - Mais que entrega. Conexao.");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.mainLinks);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.auth.isAuthenticated() ? 17 : 18);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.theme.darkMode() ? "light_mode" : "dark_mode");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-expanded", ctx.mobileMenuOpen());
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("is-open", ctx.mobileMenuOpen());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-open", ctx.mobileMenuOpen());
            i0.ɵɵadvance(13);
            i0.ɵɵconditional(ctx.auth.isAuthenticated() ? 42 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.visibleMenuGroups());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.auth.isAuthenticated() ? 45 : -1);
            i0.ɵɵadvance(24);
            i0.ɵɵrepeater(ctx.footerGroups);
        } }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, i1.MatButton, i1.MatIconButton, MatIconModule, i2.MatIcon], styles: ["[_nghost-%COMP%] {\n      display: flex;\n      min-height: 100vh;\n      overflow-x: clip;\n      flex-direction: column;\n    }\n\n    .site-header[_ngcontent-%COMP%] {\n      position: sticky;\n      top: 0;\n      z-index: 50;\n      border-bottom: 1px solid var(--elide-border);\n      background: rgba(255, 255, 255, .9);\n      color: var(--elide-ink);\n      backdrop-filter: blur(12px);\n    }\n\n    .mobile-backdrop[_ngcontent-%COMP%] {\n      position: fixed;\n      inset: 0;\n      z-index: 60;\n      display: block;\n      border: 0;\n      padding: 0;\n      pointer-events: none;\n      opacity: 0;\n      background: rgba(0, 0, 0, .62);\n      transition: opacity 180ms ease;\n    }\n\n    .mobile-backdrop.is-open[_ngcontent-%COMP%] {\n      pointer-events: auto;\n      opacity: 1;\n    }\n\n    .header-inner[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      width: min(1180px, calc(100% - 2rem));\n      min-width: 0;\n      min-height: 64px;\n      margin: 0 auto;\n      gap: 1rem;\n    }\n\n    main[_ngcontent-%COMP%] {\n      flex: 1 0 auto;\n    }\n\n    .brand-link[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      flex: 0 1 auto;\n      min-width: 0;\n      gap: .6rem;\n      color: var(--elide-ink);\n      text-decoration: none;\n    }\n\n    .brand-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      border-radius: 8px;\n      object-fit: cover;\n    }\n\n    .brand-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .brand-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      display: block;\n      line-height: 1.05;\n    }\n\n    .brand-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      font-size: 1rem;\n      font-weight: 950;\n      letter-spacing: 0;\n    }\n\n    .brand-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      margin-top: .15rem;\n      color: var(--elide-muted);\n      font-size: .72rem;\n      font-weight: 700;\n    }\n\n    .main-nav[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: .15rem;\n      margin-left: auto;\n      min-width: 0;\n    }\n\n    .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .partner-pill[_ngcontent-%COMP%], \n   .login-pill[_ngcontent-%COMP%] {\n      border-radius: 999px !important;\n      color: var(--elide-muted) !important;\n      font-size: .86rem;\n      font-weight: 800 !important;\n    }\n\n    .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n   .main-nav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%], \n   .partner-pill[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 107, 0, .08) !important;\n      color: var(--elide-ink) !important;\n    }\n\n    .header-actions[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      flex: 0 1 auto;\n      gap: .35rem;\n      min-width: 0;\n    }\n\n    .login-pill[_ngcontent-%COMP%] {\n      height: 34px !important;\n      border-color: rgba(30, 30, 30, .18) !important;\n      background: rgba(255, 255, 255, .7) !important;\n      color: var(--elide-ink) !important;\n      padding: 0 .85rem !important;\n      box-shadow: 0 1px 3px rgba(30, 30, 30, .06);\n    }\n\n    .login-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      width: 17px;\n      height: 17px;\n      font-size: 17px;\n    }\n\n    .user-pill[_ngcontent-%COMP%] {\n      max-width: 178px;\n    }\n\n    .user-pill[_ngcontent-%COMP%]     .mdc-button__label {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .cart-button[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      background: var(--elide-gradient) !important;\n      color: white !important;\n      box-shadow: var(--elide-shadow-card);\n    }\n\n    .ghost-icon[_ngcontent-%COMP%] {\n      color: var(--elide-ink) !important;\n    }\n\n    .menu-button[_ngcontent-%COMP%] {\n      display: none !important;\n      color: var(--elide-ink) !important;\n    }\n\n    .mobile-drawer[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 70;\n      display: block;\n      width: min(276px, calc(100vw - 64px));\n      max-width: calc(100vw - 56px);\n      max-height: none;\n      overflow-y: auto;\n      border-left: 1px solid rgba(30, 30, 30, .08);\n      background: #ffffff;\n      padding: 1.25rem 1.05rem 1.5rem;\n      box-shadow: none;\n      transform: translateX(100%);\n      visibility: hidden;\n      pointer-events: none;\n      contain: layout paint;\n      transition: transform 220ms ease, visibility 0s linear 220ms, box-shadow 220ms ease;\n    }\n\n    .mobile-drawer.is-open[_ngcontent-%COMP%] {\n      box-shadow: -26px 0 50px -34px rgba(0, 0, 0, .6);\n      transform: translateX(0);\n      visibility: visible;\n      pointer-events: auto;\n      transition-delay: 0s;\n    }\n\n    .mobile-drawer-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: .75rem;\n      margin-bottom: 1.15rem;\n    }\n\n    .drawer-brand[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      min-width: 0;\n      gap: .55rem;\n      color: var(--elide-ink);\n      text-decoration: none;\n    }\n\n    .drawer-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      width: 34px;\n      height: 34px;\n      border-radius: 8px;\n      object-fit: cover;\n    }\n\n    .drawer-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .drawer-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      display: block;\n      line-height: 1.05;\n    }\n\n    .drawer-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      color: var(--elide-ink);\n      font-size: .98rem;\n      font-weight: 950;\n    }\n\n    .drawer-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      margin-top: .16rem;\n      max-width: 132px;\n      overflow: hidden;\n      color: var(--elide-muted);\n      font-size: .55rem;\n      font-weight: 700;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .drawer-close[_ngcontent-%COMP%] {\n      flex: 0 0 22px;\n      width: 22px !important;\n      height: 22px !important;\n      border: 1px solid rgba(255, 107, 0, .48) !important;\n      color: var(--elide-orange) !important;\n      padding: 0 !important;\n      line-height: 22px !important;\n    }\n\n    .drawer-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      width: 14px;\n      height: 14px;\n      font-size: 14px;\n      line-height: 14px;\n    }\n\n    .mobile-menu-section[_ngcontent-%COMP%] {\n      display: grid;\n      gap: .85rem;\n    }\n\n    .menu-group[_ngcontent-%COMP%] {\n      display: grid;\n      gap: .15rem;\n      border-top: 1px solid rgba(30, 30, 30, .1);\n      padding-top: .8rem;\n    }\n\n    .menu-group[_ngcontent-%COMP%]:first-child {\n      border-top: 0;\n      padding-top: 0;\n    }\n\n    .menu-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0 0 .25rem;\n      padding: 0 .6rem;\n      color: #7c7c7c;\n      font-size: .72rem;\n      font-weight: 850;\n      letter-spacing: .04em;\n      text-transform: uppercase;\n    }\n\n    .mobile-menu-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .drawer-logout[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      min-height: 36px;\n      gap: .65rem;\n      border: 0;\n      border-radius: 8px;\n      padding: 0 .6rem;\n      background: transparent;\n      color: #161616;\n      font-size: .88rem;\n      font-weight: 500;\n      line-height: 1.2;\n      text-decoration: none;\n      text-align: left;\n    }\n\n    .mobile-menu-section[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n   .drawer-logout[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      flex: 0 0 19px;\n      width: 19px;\n      height: 19px;\n      color: var(--elide-orange);\n      font-size: 19px;\n      line-height: 19px;\n    }\n\n    .mobile-menu-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .drawer-logout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      min-width: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .mobile-menu-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n   .drawer-logout[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 107, 0, .08);\n      color: var(--elide-orange);\n    }\n\n    .drawer-user[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: .65rem;\n      border: 1px solid rgba(255, 107, 0, .16);\n      border-radius: 14px;\n      background: rgba(255, 107, 0, .06);\n      padding: .7rem .75rem;\n    }\n\n    .drawer-user[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n      color: var(--elide-orange);\n    }\n\n    .drawer-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .drawer-user[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      display: block;\n      min-width: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .drawer-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      color: var(--elide-ink);\n      font-size: .9rem;\n      font-weight: 950;\n    }\n\n    .drawer-user[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n      color: var(--elide-muted);\n      font-size: .72rem;\n      font-weight: 750;\n    }\n\n    .drawer-logout[_ngcontent-%COMP%] {\n      width: 100%;\n      min-height: 40px;\n      margin-top: .25rem;\n      color: var(--elide-orange);\n      cursor: pointer;\n    }\n\n    .site-footer[_ngcontent-%COMP%] {\n      flex-shrink: 0;\n      border-top: 1px solid var(--elide-border);\n      background: rgba(250, 248, 245, .68);\n      color: var(--elide-ink);\n    }\n\n    .footer-inner[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: minmax(250px, 1.4fr) repeat(3, minmax(140px, .7fr));\n      width: min(1180px, calc(100% - 2rem));\n      margin: 0 auto;\n      gap: 2rem;\n      padding: 3rem 0 2rem;\n    }\n\n    .footer-brand[_ngcontent-%COMP%] {\n      display: grid;\n      align-content: start;\n      gap: 1rem;\n    }\n\n    .footer-logo[_ngcontent-%COMP%] {\n      justify-self: start;\n    }\n\n    .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      max-width: 380px;\n      margin: 0;\n      color: var(--elide-muted);\n      line-height: 1.6;\n    }\n\n    .footer-contact[_ngcontent-%COMP%] {\n      display: grid;\n      gap: .5rem;\n    }\n\n    .footer-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: .4rem;\n      color: var(--elide-muted);\n      text-decoration: none;\n      transition: color 180ms ease, transform 180ms ease;\n    }\n\n    .footer-contact[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      width: 18px;\n      height: 18px;\n      color: var(--elide-orange);\n      font-size: 18px;\n    }\n\n    .footer-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      color: var(--elide-orange);\n      transform: translateX(2px);\n    }\n\n    .footer-links[_ngcontent-%COMP%] {\n      display: grid;\n      align-content: start;\n      gap: .7rem;\n    }\n\n    .footer-links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0 0 .25rem;\n      color: var(--elide-ink);\n      font-size: 1rem;\n      font-weight: 900;\n      letter-spacing: 0;\n    }\n\n    .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      justify-self: start;\n      font-size: .95rem;\n      font-weight: 650;\n    }\n\n    .footer-bottom[_ngcontent-%COMP%] {\n      width: min(1180px, calc(100% - 2rem));\n      margin: 0 auto;\n      border-top: 1px solid var(--elide-border);\n      padding: 1.1rem 0 1.25rem;\n      color: var(--elide-muted);\n      font-size: .88rem;\n    }\n\n    .dark[_nghost-%COMP%]   .site-header[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .site-header[_ngcontent-%COMP%] {\n      background: rgba(23, 23, 23, .88);\n    }\n\n    .dark[_nghost-%COMP%]   .site-footer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .site-footer[_ngcontent-%COMP%] {\n      background: rgba(17, 17, 17, .74);\n    }\n\n    .dark[_nghost-%COMP%]   .mobile-drawer[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .mobile-drawer[_ngcontent-%COMP%] {\n      border-left-color: rgba(255, 255, 255, .1);\n      background: #171717;\n    }\n\n    .dark[_nghost-%COMP%]   .drawer-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .drawer-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .dark[_nghost-%COMP%]   .mobile-menu-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .mobile-menu-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: white;\n    }\n\n    .dark[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%] {\n      border-top-color: rgba(255, 255, 255, .12);\n    }\n\n    .dark[_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .menu-group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      color: rgba(255, 255, 255, .65);\n    }\n\n    .dark[_nghost-%COMP%]   .drawer-user[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .drawer-user[_ngcontent-%COMP%] {\n      border-color: rgba(255, 255, 255, .12);\n      background: rgba(255, 255, 255, .06);\n    }\n\n    .dark[_nghost-%COMP%]   .drawer-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .drawer-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      color: white;\n    }\n\n    .dark[_nghost-%COMP%]   .brand-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .brand-link[_ngcontent-%COMP%], \n   .dark[_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%], \n   .dark[_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n   .dark[_nghost-%COMP%]   .partner-pill[_ngcontent-%COMP%]:hover, .dark   [_nghost-%COMP%]   .partner-pill[_ngcontent-%COMP%]:hover, \n   .dark[_nghost-%COMP%]   .ghost-icon[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .ghost-icon[_ngcontent-%COMP%], \n   .dark[_nghost-%COMP%]   .menu-button[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .menu-button[_ngcontent-%COMP%], \n   .dark[_nghost-%COMP%]   .footer-links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .footer-links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      color: white !important;\n    }\n\n    .dark[_nghost-%COMP%]   .login-pill[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   .login-pill[_ngcontent-%COMP%] {\n      border-color: rgba(255, 255, 255, .16) !important;\n      background: rgba(23, 23, 23, .78) !important;\n      color: white !important;\n    }\n\n    @media (max-width: 1120px) {\n      .main-nav[_ngcontent-%COMP%] {\n        gap: 0;\n      }\n\n      .partner-pill[_ngcontent-%COMP%] {\n        display: none;\n      }\n    }\n\n    @media (max-width: 920px) {\n      .header-inner[_ngcontent-%COMP%] {\n        width: min(100% - 1rem, 1180px);\n      }\n\n      .main-nav[_ngcontent-%COMP%] {\n        display: none;\n      }\n\n      .header-actions[_ngcontent-%COMP%] {\n        margin-left: auto;\n      }\n\n      .menu-button[_ngcontent-%COMP%] {\n        display: inline-grid !important;\n      }\n\n      .footer-inner[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n      }\n\n      .footer-brand[_ngcontent-%COMP%] {\n        grid-column: 1 / -1;\n      }\n    }\n\n    @media (max-width: 640px) {\n      .header-inner[_ngcontent-%COMP%] {\n        min-height: 64px;\n        gap: .5rem;\n      }\n\n      .brand-link[_ngcontent-%COMP%] {\n        min-width: 0;\n      }\n\n      .brand-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 38px;\n        height: 38px;\n      }\n\n      .brand-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        min-width: 0;\n      }\n\n      .brand-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n        font-size: .98rem;\n      }\n\n      .brand-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n        max-width: 142px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        font-size: .68rem;\n      }\n\n      .cart-button[_ngcontent-%COMP%] {\n        width: 40px;\n        height: 40px;\n      }\n\n      .footer-inner[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n        width: min(100% - 2rem, 1180px);\n        gap: 1.5rem;\n        padding: 2.25rem 0 1.5rem;\n      }\n\n      .footer-bottom[_ngcontent-%COMP%] {\n        width: min(100% - 2rem, 1180px);\n      }\n    }\n\n    @media (max-width: 920px) {\n      .login-pill[_ngcontent-%COMP%], \n   .ghost-icon[_ngcontent-%COMP%] {\n        display: none !important;\n      }\n    }"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShellLayoutComponent, [{
        type: Component,
        args: [{ selector: 'elide-shell-layout', host: { ngSkipHydration: 'true' }, imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButtonModule, MatIconModule], template: `
    <header class="site-header">
      <div class="header-inner">
        <a routerLink="/" class="brand-link" aria-label="ELIDE inicio">
          <img src="/assets/brand/elide-logo.svg" alt="ELIDE">
          <span>
            <strong>ELIDE</strong>
            <small>Mais que entrega. Conexao.</small>
          </span>
        </a>

        <nav class="main-nav" aria-label="Navegacao principal">
          @for (item of mainLinks; track item.route) {
            <a mat-button [routerLink]="item.route" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
              {{ item.label }}
            </a>
          }
        </nav>

        <div class="header-actions">
          <a mat-button routerLink="/loja" class="partner-pill">Loja</a>
          <a mat-button routerLink="/entregador" class="partner-pill">Entregador</a>

          @if (auth.isAuthenticated()) {
            <a mat-stroked-button routerLink="/perfil" class="login-pill user-pill"><mat-icon>person</mat-icon> {{ userName() }}</a>
            @if (auth.isAdmin()) {
              <a mat-icon-button routerLink="/admin/dashboard" aria-label="Painel admin" class="ghost-icon"><mat-icon>admin_panel_settings</mat-icon></a>
            }
            <button mat-icon-button type="button" aria-label="Sair" class="ghost-icon logout-button" (click)="logout()">
              <mat-icon>logout</mat-icon>
            </button>
          } @else {
            <a mat-stroked-button routerLink="/login" class="login-pill"><mat-icon>person</mat-icon> Entrar</a>
          }

          <a mat-icon-button routerLink="/carrinho" aria-label="Carrinho" class="cart-button"><mat-icon>shopping_bag</mat-icon></a>
          <button mat-icon-button type="button" (click)="theme.toggle()" aria-label="Alternar tema" class="ghost-icon">
            <mat-icon>{{ theme.darkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
          </button>
          <button
            mat-icon-button
            type="button"
            aria-label="Abrir menu"
            class="menu-button"
            [attr.aria-expanded]="mobileMenuOpen()"
            (click)="toggleMobileMenu()">
            <mat-icon>menu</mat-icon>
          </button>
        </div>
      </div>
    </header>

    <button
      type="button"
      class="mobile-backdrop"
      [class.is-open]="mobileMenuOpen()"
      aria-label="Fechar menu"
      (click)="closeMobileMenu()">
    </button>

    <aside class="mobile-drawer" [class.is-open]="mobileMenuOpen()" aria-label="Menu mobile">
      <div class="mobile-drawer-header">
        <a routerLink="/" class="drawer-brand" aria-label="ELIDE inicio" (click)="closeMobileMenu()">
          <img src="/assets/brand/elide-logo.svg" alt="ELIDE">
          <span>
            <strong>ELIDE</strong>
            <small>Mais que entrega. Conexao.</small>
          </span>
        </a>
        <button mat-icon-button type="button" class="drawer-close" aria-label="Fechar menu" (click)="closeMobileMenu()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <nav class="mobile-menu-section" aria-label="Navegacao mobile">
        @if (auth.isAuthenticated()) {
          <div class="drawer-user">
            <mat-icon>account_circle</mat-icon>
            <span>
              <strong>{{ userName() }}</strong>
              <small>{{ userRoleLabel() }}</small>
            </span>
          </div>
        }

        @for (group of visibleMenuGroups(); track group.title) {
          <div class="menu-group">
            <h2>{{ group.title }}</h2>
            @for (link of group.links; track link.route + link.label) {
              <a [routerLink]="link.route" (click)="closeMobileMenu()">
                <mat-icon>{{ link.icon }}</mat-icon>
                <span>{{ link.label }}</span>
              </a>
            }
          </div>
        }

        @if (auth.isAuthenticated()) {
          <button type="button" class="drawer-logout" (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Sair da conta</span>
          </button>
        }
      </nav>
    </aside>

    <main>
      <router-outlet />
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <section class="footer-brand" aria-label="ELIDE">
          <a routerLink="/" class="brand-link footer-logo" aria-label="ELIDE inicio">
            <img src="/assets/brand/elide-logo.svg" alt="ELIDE">
            <span>
              <strong>ELIDE</strong>
              <small>Mais que entrega. Conexao.</small>
            </span>
          </a>
          <p>Mais que entrega. Conexao. Delivery rapido e confiavel para cidades pequenas e medias de todo o Brasil.</p>
          <div class="footer-contact">
            <a href="tel:+5511948562875"><mat-icon>call</mat-icon> (11) 94856-2875</a>
            <a href="mailto:leonardocosta028@icloud.com"><mat-icon>mail</mat-icon> leonardocosta028&#64;icloud.com</a>
          </div>
        </section>

        @for (group of footerGroups; track group.title) {
          <nav class="footer-links" [attr.aria-label]="group.title">
            <h2>{{ group.title }}</h2>
            @for (link of group.links; track link.route + link.label) {
              <a [routerLink]="link.route">{{ link.label }}</a>
            }
          </nav>
        }
      </div>
      <div class="footer-bottom">
        <span>© 2026 ELIDE - Mais que entrega. Conexao.</span>
      </div>
    </footer>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    :host {\n      display: flex;\n      min-height: 100vh;\n      overflow-x: clip;\n      flex-direction: column;\n    }\n\n    .site-header {\n      position: sticky;\n      top: 0;\n      z-index: 50;\n      border-bottom: 1px solid var(--elide-border);\n      background: rgba(255, 255, 255, .9);\n      color: var(--elide-ink);\n      backdrop-filter: blur(12px);\n    }\n\n    .mobile-backdrop {\n      position: fixed;\n      inset: 0;\n      z-index: 60;\n      display: block;\n      border: 0;\n      padding: 0;\n      pointer-events: none;\n      opacity: 0;\n      background: rgba(0, 0, 0, .62);\n      transition: opacity 180ms ease;\n    }\n\n    .mobile-backdrop.is-open {\n      pointer-events: auto;\n      opacity: 1;\n    }\n\n    .header-inner {\n      display: flex;\n      align-items: center;\n      width: min(1180px, calc(100% - 2rem));\n      min-width: 0;\n      min-height: 64px;\n      margin: 0 auto;\n      gap: 1rem;\n    }\n\n    main {\n      flex: 1 0 auto;\n    }\n\n    .brand-link {\n      display: inline-flex;\n      align-items: center;\n      flex: 0 1 auto;\n      min-width: 0;\n      gap: .6rem;\n      color: var(--elide-ink);\n      text-decoration: none;\n    }\n\n    .brand-link img {\n      width: 40px;\n      height: 40px;\n      border-radius: 8px;\n      object-fit: cover;\n    }\n\n    .brand-link strong,\n    .brand-link small {\n      display: block;\n      line-height: 1.05;\n    }\n\n    .brand-link strong {\n      font-size: 1rem;\n      font-weight: 950;\n      letter-spacing: 0;\n    }\n\n    .brand-link small {\n      margin-top: .15rem;\n      color: var(--elide-muted);\n      font-size: .72rem;\n      font-weight: 700;\n    }\n\n    .main-nav {\n      display: flex;\n      align-items: center;\n      gap: .15rem;\n      margin-left: auto;\n      min-width: 0;\n    }\n\n    .main-nav a,\n    .partner-pill,\n    .login-pill {\n      border-radius: 999px !important;\n      color: var(--elide-muted) !important;\n      font-size: .86rem;\n      font-weight: 800 !important;\n    }\n\n    .main-nav a:hover,\n    .main-nav .active-link,\n    .partner-pill:hover {\n      background: rgba(255, 107, 0, .08) !important;\n      color: var(--elide-ink) !important;\n    }\n\n    .header-actions {\n      display: flex;\n      align-items: center;\n      flex: 0 1 auto;\n      gap: .35rem;\n      min-width: 0;\n    }\n\n    .login-pill {\n      height: 34px !important;\n      border-color: rgba(30, 30, 30, .18) !important;\n      background: rgba(255, 255, 255, .7) !important;\n      color: var(--elide-ink) !important;\n      padding: 0 .85rem !important;\n      box-shadow: 0 1px 3px rgba(30, 30, 30, .06);\n    }\n\n    .login-pill mat-icon {\n      width: 17px;\n      height: 17px;\n      font-size: 17px;\n    }\n\n    .user-pill {\n      max-width: 178px;\n    }\n\n    .user-pill ::ng-deep .mdc-button__label {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .cart-button {\n      width: 40px;\n      height: 40px;\n      background: var(--elide-gradient) !important;\n      color: white !important;\n      box-shadow: var(--elide-shadow-card);\n    }\n\n    .ghost-icon {\n      color: var(--elide-ink) !important;\n    }\n\n    .menu-button {\n      display: none !important;\n      color: var(--elide-ink) !important;\n    }\n\n    .mobile-drawer {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      z-index: 70;\n      display: block;\n      width: min(276px, calc(100vw - 64px));\n      max-width: calc(100vw - 56px);\n      max-height: none;\n      overflow-y: auto;\n      border-left: 1px solid rgba(30, 30, 30, .08);\n      background: #ffffff;\n      padding: 1.25rem 1.05rem 1.5rem;\n      box-shadow: none;\n      transform: translateX(100%);\n      visibility: hidden;\n      pointer-events: none;\n      contain: layout paint;\n      transition: transform 220ms ease, visibility 0s linear 220ms, box-shadow 220ms ease;\n    }\n\n    .mobile-drawer.is-open {\n      box-shadow: -26px 0 50px -34px rgba(0, 0, 0, .6);\n      transform: translateX(0);\n      visibility: visible;\n      pointer-events: auto;\n      transition-delay: 0s;\n    }\n\n    .mobile-drawer-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: .75rem;\n      margin-bottom: 1.15rem;\n    }\n\n    .drawer-brand {\n      display: inline-flex;\n      align-items: center;\n      min-width: 0;\n      gap: .55rem;\n      color: var(--elide-ink);\n      text-decoration: none;\n    }\n\n    .drawer-brand img {\n      width: 34px;\n      height: 34px;\n      border-radius: 8px;\n      object-fit: cover;\n    }\n\n    .drawer-brand strong,\n    .drawer-brand small {\n      display: block;\n      line-height: 1.05;\n    }\n\n    .drawer-brand strong {\n      color: var(--elide-ink);\n      font-size: .98rem;\n      font-weight: 950;\n    }\n\n    .drawer-brand small {\n      margin-top: .16rem;\n      max-width: 132px;\n      overflow: hidden;\n      color: var(--elide-muted);\n      font-size: .55rem;\n      font-weight: 700;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .drawer-close {\n      flex: 0 0 22px;\n      width: 22px !important;\n      height: 22px !important;\n      border: 1px solid rgba(255, 107, 0, .48) !important;\n      color: var(--elide-orange) !important;\n      padding: 0 !important;\n      line-height: 22px !important;\n    }\n\n    .drawer-close mat-icon {\n      width: 14px;\n      height: 14px;\n      font-size: 14px;\n      line-height: 14px;\n    }\n\n    .mobile-menu-section {\n      display: grid;\n      gap: .85rem;\n    }\n\n    .menu-group {\n      display: grid;\n      gap: .15rem;\n      border-top: 1px solid rgba(30, 30, 30, .1);\n      padding-top: .8rem;\n    }\n\n    .menu-group:first-child {\n      border-top: 0;\n      padding-top: 0;\n    }\n\n    .menu-group h2 {\n      margin: 0 0 .25rem;\n      padding: 0 .6rem;\n      color: #7c7c7c;\n      font-size: .72rem;\n      font-weight: 850;\n      letter-spacing: .04em;\n      text-transform: uppercase;\n    }\n\n    .mobile-menu-section a,\n    .drawer-logout {\n      display: flex;\n      align-items: center;\n      min-height: 36px;\n      gap: .65rem;\n      border: 0;\n      border-radius: 8px;\n      padding: 0 .6rem;\n      background: transparent;\n      color: #161616;\n      font-size: .88rem;\n      font-weight: 500;\n      line-height: 1.2;\n      text-decoration: none;\n      text-align: left;\n    }\n\n    .mobile-menu-section mat-icon,\n    .drawer-logout mat-icon {\n      flex: 0 0 19px;\n      width: 19px;\n      height: 19px;\n      color: var(--elide-orange);\n      font-size: 19px;\n      line-height: 19px;\n    }\n\n    .mobile-menu-section span,\n    .drawer-logout span {\n      min-width: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .mobile-menu-section a:hover,\n    .drawer-logout:hover {\n      background: rgba(255, 107, 0, .08);\n      color: var(--elide-orange);\n    }\n\n    .drawer-user {\n      display: flex;\n      align-items: center;\n      gap: .65rem;\n      border: 1px solid rgba(255, 107, 0, .16);\n      border-radius: 14px;\n      background: rgba(255, 107, 0, .06);\n      padding: .7rem .75rem;\n    }\n\n    .drawer-user > mat-icon {\n      color: var(--elide-orange);\n    }\n\n    .drawer-user strong,\n    .drawer-user small {\n      display: block;\n      min-width: 0;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .drawer-user strong {\n      color: var(--elide-ink);\n      font-size: .9rem;\n      font-weight: 950;\n    }\n\n    .drawer-user small {\n      color: var(--elide-muted);\n      font-size: .72rem;\n      font-weight: 750;\n    }\n\n    .drawer-logout {\n      width: 100%;\n      min-height: 40px;\n      margin-top: .25rem;\n      color: var(--elide-orange);\n      cursor: pointer;\n    }\n\n    .site-footer {\n      flex-shrink: 0;\n      border-top: 1px solid var(--elide-border);\n      background: rgba(250, 248, 245, .68);\n      color: var(--elide-ink);\n    }\n\n    .footer-inner {\n      display: grid;\n      grid-template-columns: minmax(250px, 1.4fr) repeat(3, minmax(140px, .7fr));\n      width: min(1180px, calc(100% - 2rem));\n      margin: 0 auto;\n      gap: 2rem;\n      padding: 3rem 0 2rem;\n    }\n\n    .footer-brand {\n      display: grid;\n      align-content: start;\n      gap: 1rem;\n    }\n\n    .footer-logo {\n      justify-self: start;\n    }\n\n    .footer-brand p {\n      max-width: 380px;\n      margin: 0;\n      color: var(--elide-muted);\n      line-height: 1.6;\n    }\n\n    .footer-contact {\n      display: grid;\n      gap: .5rem;\n    }\n\n    .footer-contact a,\n    .footer-links a {\n      display: inline-flex;\n      align-items: center;\n      gap: .4rem;\n      color: var(--elide-muted);\n      text-decoration: none;\n      transition: color 180ms ease, transform 180ms ease;\n    }\n\n    .footer-contact mat-icon {\n      width: 18px;\n      height: 18px;\n      color: var(--elide-orange);\n      font-size: 18px;\n    }\n\n    .footer-contact a:hover,\n    .footer-links a:hover {\n      color: var(--elide-orange);\n      transform: translateX(2px);\n    }\n\n    .footer-links {\n      display: grid;\n      align-content: start;\n      gap: .7rem;\n    }\n\n    .footer-links h2 {\n      margin: 0 0 .25rem;\n      color: var(--elide-ink);\n      font-size: 1rem;\n      font-weight: 900;\n      letter-spacing: 0;\n    }\n\n    .footer-links a {\n      justify-self: start;\n      font-size: .95rem;\n      font-weight: 650;\n    }\n\n    .footer-bottom {\n      width: min(1180px, calc(100% - 2rem));\n      margin: 0 auto;\n      border-top: 1px solid var(--elide-border);\n      padding: 1.1rem 0 1.25rem;\n      color: var(--elide-muted);\n      font-size: .88rem;\n    }\n\n    :host-context(.dark) .site-header {\n      background: rgba(23, 23, 23, .88);\n    }\n\n    :host-context(.dark) .site-footer {\n      background: rgba(17, 17, 17, .74);\n    }\n\n    :host-context(.dark) .mobile-drawer {\n      border-left-color: rgba(255, 255, 255, .1);\n      background: #171717;\n    }\n\n    :host-context(.dark) .drawer-brand strong,\n    :host-context(.dark) .mobile-menu-section a {\n      color: white;\n    }\n\n    :host-context(.dark) .menu-group {\n      border-top-color: rgba(255, 255, 255, .12);\n    }\n\n    :host-context(.dark) .menu-group h2 {\n      color: rgba(255, 255, 255, .65);\n    }\n\n    :host-context(.dark) .drawer-user {\n      border-color: rgba(255, 255, 255, .12);\n      background: rgba(255, 255, 255, .06);\n    }\n\n    :host-context(.dark) .drawer-user strong {\n      color: white;\n    }\n\n    :host-context(.dark) .brand-link,\n    :host-context(.dark) .main-nav .active-link,\n    :host-context(.dark) .main-nav a:hover,\n    :host-context(.dark) .partner-pill:hover,\n    :host-context(.dark) .ghost-icon,\n    :host-context(.dark) .menu-button,\n    :host-context(.dark) .footer-links h2 {\n      color: white !important;\n    }\n\n    :host-context(.dark) .login-pill {\n      border-color: rgba(255, 255, 255, .16) !important;\n      background: rgba(23, 23, 23, .78) !important;\n      color: white !important;\n    }\n\n    @media (max-width: 1120px) {\n      .main-nav {\n        gap: 0;\n      }\n\n      .partner-pill {\n        display: none;\n      }\n    }\n\n    @media (max-width: 920px) {\n      .header-inner {\n        width: min(100% - 1rem, 1180px);\n      }\n\n      .main-nav {\n        display: none;\n      }\n\n      .header-actions {\n        margin-left: auto;\n      }\n\n      .menu-button {\n        display: inline-grid !important;\n      }\n\n      .footer-inner {\n        grid-template-columns: 1fr 1fr;\n      }\n\n      .footer-brand {\n        grid-column: 1 / -1;\n      }\n    }\n\n    @media (max-width: 640px) {\n      .header-inner {\n        min-height: 64px;\n        gap: .5rem;\n      }\n\n      .brand-link {\n        min-width: 0;\n      }\n\n      .brand-link img {\n        width: 38px;\n        height: 38px;\n      }\n\n      .brand-link span {\n        min-width: 0;\n      }\n\n      .brand-link strong {\n        font-size: .98rem;\n      }\n\n      .brand-link small {\n        max-width: 142px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        font-size: .68rem;\n      }\n\n      .cart-button {\n        width: 40px;\n        height: 40px;\n      }\n\n      .footer-inner {\n        grid-template-columns: 1fr;\n        width: min(100% - 2rem, 1180px);\n        gap: 1.5rem;\n        padding: 2.25rem 0 1.5rem;\n      }\n\n      .footer-bottom {\n        width: min(100% - 2rem, 1180px);\n      }\n    }\n\n    @media (max-width: 920px) {\n      .login-pill,\n      .ghost-icon {\n        display: none !important;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ShellLayoutComponent, { className: "ShellLayoutComponent", filePath: "src/app/layouts/shell-layout.component.ts", lineNumber: 772 }); })();
//# sourceMappingURL=shell-layout.component.js.map