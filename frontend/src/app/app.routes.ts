import { Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';
import { authGuard } from './guards/auth.guard';
import { ShellLayoutComponent } from './layouts/shell-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then((m) => m.HomePageComponent) },
      { path: 'landing', loadComponent: () => import('./pages/landing/landing.component').then((m) => m.LandingPageComponent) },
      { path: 'login', loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginPageComponent) },
      { path: 'cadastro', loadComponent: () => import('./pages/register/register.component').then((m) => m.RegisterPageComponent) },
      { path: 'recuperar-senha', loadComponent: () => import('./pages/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordPageComponent) },
      { path: 'perfil', canActivate: [authGuard], loadComponent: () => import('./pages/profile/profile.component').then((m) => m.ProfilePageComponent) },
      { path: 'alterar-senha', canActivate: [authGuard], loadComponent: () => import('./pages/change-password/change-password.component').then((m) => m.ChangePasswordPageComponent) },
      { path: 'enderecos', canActivate: [authGuard], loadComponent: () => import('./pages/addresses/addresses.component').then((m) => m.AddressesPageComponent) },
      { path: 'restaurantes', loadComponent: () => import('./pages/restaurants/restaurants.component').then((m) => m.RestaurantsPageComponent) },
      { path: 'mercados', loadComponent: () => import('./pages/markets/markets.component').then((m) => m.MarketsPageComponent) },
      { path: 'mercado', redirectTo: 'mercados', pathMatch: 'full' },
      { path: 'farmacias', loadComponent: () => import('./pages/pharmacies/pharmacies.component').then((m) => m.PharmaciesPageComponent) },
      { path: 'farmacia', redirectTo: 'farmacias', pathMatch: 'full' },
      { path: 'produto/:id', loadComponent: () => import('./pages/product/product.component').then((m) => m.ProductPageComponent) },
      { path: 'carrinho', loadComponent: () => import('./pages/cart/cart.component').then((m) => m.CartPageComponent) },
      { path: 'checkout', canActivate: [authGuard], loadComponent: () => import('./pages/checkout/checkout.component').then((m) => m.CheckoutPageComponent) },
      { path: 'meus-pedidos', canActivate: [authGuard], loadComponent: () => import('./pages/my-orders/my-orders.component').then((m) => m.MyOrdersPageComponent) },
      { path: 'pedidos', redirectTo: 'meus-pedidos', pathMatch: 'full' },
      { path: 'favoritos', canActivate: [authGuard], loadComponent: () => import('./pages/favorites/favorites.component').then((m) => m.FavoritesPageComponent) },
      { path: 'cupons', canActivate: [authGuard], loadComponent: () => import('./pages/coupons/coupons.component').then((m) => m.CouponsPageComponent) },
      { path: 'carteira', canActivate: [authGuard], loadComponent: () => import('./pages/wallet/wallet.component').then((m) => m.WalletPageComponent) },
      { path: 'avaliacoes', canActivate: [authGuard], loadComponent: () => import('./pages/reviews/reviews.component').then((m) => m.ReviewsPageComponent) },
      { path: 'notificacoes', canActivate: [authGuard], loadComponent: () => import('./pages/notifications/notifications.component').then((m) => m.NotificationsPageComponent) },
      { path: 'pagamentos', canActivate: [authGuard], loadComponent: () => import('./pages/payments/payments.component').then((m) => m.PaymentsPageComponent) },
      { path: 'pagamentos/pix', canActivate: [authGuard], loadComponent: () => import('./pages/payment-pix/payment-pix.component').then((m) => m.PaymentPixPageComponent) },
      { path: 'pagamentos/cartao', canActivate: [authGuard], loadComponent: () => import('./pages/payment-card/payment-card.component').then((m) => m.PaymentCardPageComponent) },
      { path: 'pagamentos/dinheiro', canActivate: [authGuard], loadComponent: () => import('./pages/payment-cash/payment-cash.component').then((m) => m.PaymentCashPageComponent) },
      { path: 'rastreamento', canActivate: [authGuard], loadComponent: () => import('./pages/tracking/tracking.component').then((m) => m.TrackingPageComponent) },
      { path: 'cliente', canActivate: [authGuard], loadComponent: () => import('./pages/customer-area/customer-area.component').then((m) => m.CustomerAreaPageComponent) },
      { path: 'loja', canActivate: [authGuard], loadComponent: () => import('./pages/store-area/store-area.component').then((m) => m.StoreAreaPageComponent) },
      { path: 'area-loja', redirectTo: 'loja', pathMatch: 'full' },
      { path: 'entregador', canActivate: [authGuard], loadComponent: () => import('./pages/courier-area/courier-area.component').then((m) => m.CourierAreaPageComponent) },
      { path: 'admin', canActivate: [adminGuard], loadComponent: () => import('./pages/admin-panel/admin-panel.component').then((m) => m.AdminPanelPageComponent) },
      { path: 'contato', loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactPageComponent) },
      { path: 'sobre', loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutPageComponent) },
      { path: 'termos', loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsPageComponent) },
      { path: 'privacidade', loadComponent: () => import('./pages/privacy/privacy.component').then((m) => m.PrivacyPageComponent) }
    ]
  },
  { path: '**', redirectTo: '' }
];
