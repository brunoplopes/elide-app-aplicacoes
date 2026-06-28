import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

export const MATERIAL = [
  CommonModule,
  CurrencyPipe,
  ReactiveFormsModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule
];

export type PageAction = {
  label: string;
  path: string;
  icon: string;
  description?: string;
};

export type PageMetric = {
  label: string;
  value: string;
  icon: string;
};

export type PageCard = {
  title: string;
  description: string;
  icon: string;
  action?: string;
  path?: string;
  meta?: string;
};

export type OrderCard = {
  id: string;
  store: string;
  status: string;
  total: string;
  progress: number;
};

export type FeaturePageVm = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel?: string;
  actionLink?: string;
  actionIcon?: string;
  metrics?: PageMetric[];
  actions?: PageAction[];
  cards?: PageCard[];
};

export const heroImageUrl = 'https://elide-fast-delivery.lovable.app/assets/hero-delivery-jH3Y-QwP.jpg';

export const customerStats: PageMetric[] = [
  { label: 'Pedidos', value: '18', icon: 'receipt_long' },
  { label: 'Cupons ativos', value: '4', icon: 'sell' },
  { label: 'Saldo', value: 'R$ 86,40', icon: 'account_balance_wallet' },
  { label: 'Favoritos', value: '9', icon: 'favorite' }
];

export const customerActions: PageAction[] = [
  { label: 'Editar perfil', path: '/perfil', icon: 'person', description: 'Dados pessoais e contato' },
  { label: 'Alterar senha', path: '/alterar-senha', icon: 'lock_reset', description: 'Seguranca da conta' },
  { label: 'Enderecos', path: '/enderecos', icon: 'location_on', description: 'Locais de entrega' },
  { label: 'Historico', path: '/meus-pedidos', icon: 'receipt_long', description: 'Pedidos e recompra' },
  { label: 'Favoritos', path: '/favoritos', icon: 'favorite', description: 'Lojas preferidas' },
  { label: 'Cupons', path: '/cupons', icon: 'sell', description: 'Descontos ativos' },
  { label: 'Carteira', path: '/carteira', icon: 'account_balance_wallet', description: 'Saldo e extrato' },
  { label: 'Avaliacoes', path: '/avaliacoes', icon: 'star', description: 'Notas e comentarios' },
  { label: 'Notificacoes', path: '/notificacoes', icon: 'notifications', description: 'Alertas importantes' },
  { label: 'Pagamentos', path: '/pagamentos', icon: 'payments', description: 'Central de metodos' },
  { label: 'PIX', path: '/pagamentos/pix', icon: 'qr_code_2', description: 'QR Code e copia e cola' },
  { label: 'Cartao', path: '/pagamentos/cartao', icon: 'credit_card', description: 'Credito ou debito' },
  { label: 'Dinheiro', path: '/pagamentos/dinheiro', icon: 'payments', description: 'Troco na entrega' },
  { label: 'Rastreamento', path: '/rastreamento', icon: 'near_me', description: 'Entrega ao vivo' }
];

export const orders: OrderCard[] = [
  { id: 'ELD-1029', store: 'Cantina ELIDE', status: 'Saiu para entrega', total: 'R$ 48,80', progress: 78 },
  { id: 'ELD-1024', store: 'Mercado Central', status: 'Entregue', total: 'R$ 92,10', progress: 100 },
  { id: 'ELD-1017', store: 'Padaria Aurora', status: 'Entregue', total: 'R$ 31,50', progress: 100 }
];

export const featuredStores = [
  { name: 'Leo', segment: 'Restaurante', fee: 'R$ 6,90', eta: '25-35 min', rating: '4.9' },
  { name: 'Mata sua fome', segment: 'Lanchonete', fee: 'R$ 5,90', eta: '20-30 min', rating: '4.8' },
  { name: 'Burguer House', segment: 'Hamburgueria', fee: 'R$ 7,90', eta: '30-40 min', rating: '4.7' },
  { name: 'Farmacia Saude+', segment: 'Farmacia', fee: 'R$ 4,90', eta: '18-28 min', rating: '4.9' },
  { name: 'Pizzaria Bella Napoli', segment: 'Pizzaria', fee: 'R$ 8,90', eta: '35-45 min', rating: '4.8' },
  { name: 'Mercado Central', segment: 'Mercado', fee: 'R$ 9,90', eta: '40-55 min', rating: '4.6' }
];

export const categories: PageCard[] = [
  { title: 'Restaurantes', description: 'Pratos completos perto de voce.', icon: 'restaurant', path: '/restaurantes' },
  { title: 'Lanchonetes', description: 'Lanches, combos e porcoes.', icon: 'lunch_dining', path: '/restaurantes' },
  { title: 'Pizzarias', description: 'Pizzas e massas para hoje.', icon: 'local_pizza', path: '/restaurantes' },
  { title: 'Mercados', description: 'Compra rapida para casa.', icon: 'shopping_cart', path: '/mercados' },
  { title: 'Farmacias', description: 'Saude, beleza e conveniencia.', icon: 'medication', path: '/farmacias' }
];

export const coupons: PageCard[] = [
  { title: 'ELIDE10', description: '10% OFF no primeiro pedido.', icon: 'local_offer', action: 'Usar no carrinho' },
  { title: 'FRETEGRATIS', description: 'Entrega gratis em lojas selecionadas.', icon: 'moped', action: 'Aplicar' },
  { title: 'PIX15', description: 'Desconto para pagamento via PIX.', icon: 'qr_code_2', action: 'Gerar PIX' },
  { title: 'MERCADO20', description: 'Oferta especial para mercados.', icon: 'shopping_basket', action: 'Ver ofertas' }
];

export const favoriteCards: PageCard[] = [
  { title: 'Cantina ELIDE', description: 'Aberto agora, entrega estimada em 35 min.', icon: 'favorite', action: 'Ver loja' },
  { title: 'Mercado Central', description: 'Produtos do dia e ofertas de bairro.', icon: 'favorite', action: 'Ver loja' },
  { title: 'Padaria Aurora', description: 'Cafe, doces e paes sempre frescos.', icon: 'favorite', action: 'Ver loja' },
  { title: 'Farmacia Boa Vida', description: 'Medicamentos e conveniencia.', icon: 'favorite', action: 'Ver loja' },
  { title: 'Pet Prime', description: 'Produtos para pets com entrega rapida.', icon: 'favorite', action: 'Ver loja' }
];

export const addressCards: PageCard[] = [
  { title: 'Casa', description: 'Rua das Acacias, 124 - entrega padrao.', icon: 'home_pin', action: 'Editar' },
  { title: 'Trabalho', description: 'Av. Brasil, 900 - portaria comercial.', icon: 'business', action: 'Editar' },
  { title: 'Familia', description: 'Rua Sete de Setembro, 44 - finais de semana.', icon: 'location_on', action: 'Editar' }
];

export const notifications: PageCard[] = [
  { title: 'Pedido saiu para entrega', description: 'ELD-1029 esta a caminho.', icon: 'notifications_active', meta: 'Agora' },
  { title: 'Cupom PIX15 disponivel', description: 'Use hoje em pagamentos via PIX.', icon: 'sell', meta: 'Hoje' },
  { title: 'Reembolso aprovado', description: 'Credito adicionado a carteira.', icon: 'account_balance_wallet', meta: 'Ontem' },
  { title: 'Favorito abriu agora', description: 'Cantina ELIDE esta aceitando pedidos.', icon: 'restaurant', meta: 'Agora' }
];

export const paymentMethods: PageCard[] = [
  { title: 'PIX', icon: 'qr_code_2', description: 'Pagamento instantaneo com QR Code e copia e cola.', action: 'Gerar PIX', path: '/pagamentos/pix' },
  { title: 'Cartao', icon: 'credit_card', description: 'Credito e debito com tokenizacao preparada.', action: 'Adicionar cartao', path: '/pagamentos/cartao' },
  { title: 'Dinheiro', icon: 'payments', description: 'Pagamento na entrega com campo para troco.', action: 'Definir troco', path: '/pagamentos/dinheiro' }
];
