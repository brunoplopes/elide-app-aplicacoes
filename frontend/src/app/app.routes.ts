import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { ShellLayoutComponent } from './layouts/shell-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/pages').then((m) => m.HomePageComponent) },
      { path: 'landing', loadComponent: () => import('./pages/pages').then((m) => m.LandingPageComponent) },
      { path: 'login', loadComponent: () => import('./pages/pages').then((m) => m.LoginPageComponent) },
      { path: 'cadastro', loadComponent: () => import('./pages/pages').then((m) => m.RegisterPageComponent) },
      { path: 'recuperar-senha', loadComponent: () => import('./pages/pages').then((m) => m.ForgotPasswordPageComponent) },
      { path: 'perfil', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.ProfilePageComponent) },
      { path: 'restaurantes', loadComponent: () => import('./pages/pages').then((m) => m.RestaurantsPageComponent) },
      { path: 'mercados', loadComponent: () => import('./pages/pages').then((m) => m.MarketsPageComponent) },
      { path: 'farmacias', loadComponent: () => import('./pages/pages').then((m) => m.PharmaciesPageComponent) },
      { path: 'produto/:id', loadComponent: () => import('./pages/pages').then((m) => m.ProductPageComponent) },
      { path: 'carrinho', loadComponent: () => import('./pages/pages').then((m) => m.CartPageComponent) },
      { path: 'checkout', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.CheckoutPageComponent) },
      { path: 'meus-pedidos', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.MyOrdersPageComponent) },
      { path: 'favoritos', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.FavoritesPageComponent) },
      { path: 'cliente', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.CustomerAreaPageComponent) },
      { path: 'loja', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.StoreAreaPageComponent) },
      { path: 'entregador', canActivate: [authGuard], loadComponent: () => import('./pages/pages').then((m) => m.CourierAreaPageComponent) },
      { path: 'admin', canActivate: [adminGuard], loadComponent: () => import('./pages/pages').then((m) => m.AdminPanelPageComponent) },
      { path: 'contato', loadComponent: () => import('./pages/pages').then((m) => m.ContactPageComponent) },
      { path: 'sobre', loadComponent: () => import('./pages/pages').then((m) => m.AboutPageComponent) },
      { path: 'termos', loadComponent: () => import('./pages/pages').then((m) => m.TermsPageComponent) },
      { path: 'privacidade', loadComponent: () => import('./pages/pages').then((m) => m.PrivacyPageComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];

