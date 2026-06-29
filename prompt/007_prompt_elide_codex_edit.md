## Funcionalidades Principais

Clientes devem conseguir pesquisar:

- Restaurantes
- Mercados
- Farmácias
- Padarias
- Lanchonetes
- Açougues
- Pet Shops
- Produtos
- Categorias

Carrinho:

- Adicionar itens
- Remover itens
- Alterar quantidade
- Observações por item
- Adicionais
- Cupons
- Cálculo de frete
- Resumo do pedido

Pedido:

- Criar pedido
- Cancelar pedido
- Acompanhar pedido
- Histórico de pedidos
- Solicitar reembolso
- Avaliar pedido

---

## Mapa e Geolocalização

Preparar integração com:

- Google Maps
- OpenStreetMap

Calcular:

- Rota
- Distância
- Tempo estimado
- Localização do entregador em tempo real

---

## Pagamentos

Preparar arquitetura para integração com:

- PIX
- Pagamento na entrega

Criar abstrações para facilitar troca de gateway de pagamento.

---

## Notificações

Implementar arquitetura para:

- WebSocket
- Firebase Cloud Messaging
- WhatsApp

Eventos que devem gerar notificações:

- Pedido criado
- Pedido aceito
- Pedido em preparo ou em separacao
- Pedido saiu para entrega
- Pedido entregue
- Pedido cancelado
- Novo cupom disponível
- Entregador aceitou corrida

---

## Segurança

Implementar:

- Refresh Token
- HTTPS Ready
- Validação de entrada
- Controle de sessão
- Logs de auditoria
- Controle de permissões por usuário

Proteger contra:

- XSS
- SQL Injection
- CSRF
- Clickjacking
- Brute Force
- Mass Assignment
- Exposição indevida de dados sensíveis

---


## Performance

Utilizar:

- Cache Redis
- Compressão HTTP
- Lazy Loading no front-end
- Paginação no back-end
- Infinite Scroll quando fizer sentido
- Virtual Scroll em listas grandes
- Imagens WebP
- Estratégia CDN Ready
- Índices no banco
- Queries otimizadas

---

## Dashboards

### Administrador

Exibir:

- Total de vendas
- Total de pedidos
- Total de usuários
- Faturamento
- Crescimento por cidade
- Lojas ativas
- Entregadores ativos
- Pedidos por status
- Taxas cobradas das lojas
- Gráficos dinâmicos

### Estabelecimento

Exibir:

- Vendas
- Ticket médio
- Produtos mais vendidos
- Clientes recorrentes
- Pedidos por status
- Avaliações

### Entregador

Exibir:

- Total de entregas
- Ganhos diários
- Ganhos mensais
- Tempo médio de entrega
- Histórico de corridas

---

## Páginas

Criar as seguintes páginas:

- Landing Page
- Home
- Login
- Cadastro
- Recuperação de senha
- Perfil
- Restaurantes
- Mercados
- Farmácias
- Produto
- Carrinho
- Checkout
- Meus Pedidos
- Favoritos
- Área do Cliente
- Área da Loja
- Área do Entregador
- Painel Administrativo
- Contato
- Sobre
- Termos de Uso
- Política de Privacidade

---


