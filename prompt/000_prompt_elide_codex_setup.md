# Prompt para Codex — Projeto ELIDE

Você é um arquiteto de software sênior especializado em Angular, Java Spring Boot, PostgreSQL e sistemas de marketplace de delivery.

Seu objetivo é construir um sistema completo chamado **ELIDE**, inspirado no conceito do iFood, porém projetado para atender inicialmente cidades pequenas e médias do Brasil.

O projeto deve ser desenvolvido como se fosse um produto comercial pronto para produção, utilizando boas práticas de arquitetura, segurança, escalabilidade, performance e código limpo.

Não gere código simplificado ou apenas exemplos.

Quero um projeto completo.

---

## Objetivo

Construir uma plataforma profissional de delivery semelhante ao iFood.

A plataforma deverá atender:

- Clientes
- Estabelecimentos
- Entregadores
- Administradores

O sistema deverá ser preparado para milhares de usuários simultâneos e permitir expansão futura para qualquer cidade do Brasil.

---

## Tecnologias

### Front-end

Utilizar:

- Angular 20
- TypeScript
- Angular Material
- Tailwind CSS
- RxJS
- Signals
- Standalone Components
- Lazy Loading
- SSR / Angular Universal
- PWA
- Responsive Design
- Dark Mode

Arquitetura:

```text
src/app/core
src/app/shared
src/app/features
src/app/layouts
src/app/guards
src/app/resolvers
src/app/services
src/app/models
src/app/pages
src/app/components
src/app/interceptors
src/app/pipes
src/app/directives
```

Boas práticas:

- SOLID
- Clean Architecture
- Componentização
- Smart/Dumb Components
- ChangeDetectionStrategy.OnPush
- Signals
- Lazy Loading
- Reutilização máxima

---

### Back-end

Utilizar:

- Java 21
- Spring Boot 3
- Gradle
- Arquitetura Hexagonal
- DDD
- Use Cases
- Ports and Adapters
- JWT
- Refresh Token
- OAuth2
- Spring Security
- Bean Validation
- OpenAPI / Swagger
- Flyway
- JPA / Hibernate
- Redis
- RabbitMQ
- WebSocket
- MapStruct
- Lombok
- Micrometer
- Actuator
- Docker
- Docker Compose
- Testcontainers
- JUnit
- Mockito

---

### Banco de Dados

Utilizar PostgreSQL.

Criar:

- Scripts SQL
- Migrations Flyway
- Índices
- Constraints
- Relacionamentos
- Otimizações

---

## Identidade Visual

Nome: **ELIDE**

Slogan: **Seu pedido, na sua porta.**

Paleta:

Cor primária:

```text
#FF6B00
```

Cor secundária:

```text
#FFFFFF
```

Cores neutras:

```text
#1E1E1E
#F5F5F5
```

Design:

- Premium
- Moderno
- Minimalista
- Elegante
- Inspirado em aplicativos de delivery
- Excelente UX
- Animações suaves

Criar:

- Logo minimalista
- Favicon
- Ícones
- Identidade visual

---

## Tipos de Usuários

### Cliente

Funcionalidades:

- Cadastro
- Login
- Esqueci minha senha
- Alterar senha
- Editar perfil
- Favoritos
- Endereços
- Histórico de pedidos
- Cupons
- Carteira
- Avaliações
- Notificações
- Pagamento via PIX
- Pagamento via cartão
- Pagamento em dinheiro
- Rastreamento em tempo real

---

### Estabelecimento

Funcionalidades:

- Cadastro
- Envio de documentação
- Aprovação pelo administrador
- Gestão de produtos
- Gestão de categorias
- Gestão de complementos
- Gestão de horários
- Controle de estoque
- Promoções
- Recebimento de pedidos
- Alteração de status do pedido
- Financeiro
- Relatórios
- Dashboard
- Avaliações

---

### Entregador

Funcionalidades:

- Cadastro
- Envio de documentos
- Validação pelo administrador
- Aceitar corrida
- Recusar corrida
- GPS
- Mapa
- Ganhos diários
- Ganhos mensais
- Extrato
- Histórico de entregas
- Status disponível/indisponível

---

### Administrador

Criar painel administrativo completo e protegido por login e senha.

Administrador inicial:

```text
Usuário: leonardo_admin
Senha: elide.com.leo.2026
```

A senha inicial deve ser criada apenas para bootstrap do sistema.

Na aplicação, ela deve ser armazenada **criptografada com BCrypt**.

No primeiro acesso, o administrador deve ser obrigado a alterar a senha inicial.

Permissões do administrador:

- CRUD de lojas
- CRUD de categorias
- CRUD de banners
- CRUD de cidades
- CRUD de cupons
- CRUD de taxas
- CRUD de administradores
- Aprovação de estabelecimentos
- Aprovação de entregadores
- Visualização de todos os pedidos
- Gestão financeira
- Dashboard
- Auditoria
- Logs
- Configurações gerais do sistema

Regras de acesso:

- Somente administradores podem acessar o painel administrativo.
- Somente o administrador MASTER pode criar novos administradores.
- Nenhum usuário comum pode acessar o painel administrativo.
- Implementar controle de permissões baseado em papéis, usando RBAC.
- O administrador principal deve ter acesso total ao sistema ELIDE.

---

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
- Cartão de crédito
- Cartão de débito
- Mercado Pago
- PagSeguro
- Stripe
- Pagamento na entrega

Criar abstrações para facilitar troca de gateway de pagamento.

---

## Notificações

Implementar arquitetura para:

- WebSocket
- Firebase Cloud Messaging
- E-mail
- SMS
- WhatsApp

Eventos que devem gerar notificações:

- Pedido criado
- Pedido aceito
- Pedido em preparo
- Pedido saiu para entrega
- Pedido entregue
- Pedido cancelado
- Novo cupom disponível
- Entregador aceitou corrida

---

## Banco de Dados

Criar modelagem completa com as seguintes entidades:

- Usuários
- Clientes
- Papéis
- Permissões
- Lojas
- Categorias
- Produtos
- Complementos
- Pedidos
- Itens do pedido
- Pagamentos
- Entregadores
- Veículos
- Rotas
- Cupons
- Promoções
- Financeiro
- Avaliações
- Endereços
- Logs
- Notificações
- Banners
- Arquivos
- Cidades
- Taxas
- Configurações
- Auditoria

Criar também:

- DER completo
- Relacionamentos entre tabelas
- Índices para consultas frequentes
- Constraints de integridade
- Campos de auditoria
- Soft delete quando fizer sentido

---

## Segurança

Implementar:

- BCrypt
- JWT
- Refresh Token
- HTTPS Ready
- CORS configurado corretamente
- CSRF quando aplicável
- Rate Limiting
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

Todas as senhas devem ser armazenadas de forma criptografada.

Nunca armazenar senha em texto puro.

---

## Backup

Implementar estratégia para:

- Backup automático diário
- Retenção de backups
- Script de restauração
- Documentação do processo de restore

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

## Testes

Criar:

- Testes unitários
- Testes de integração
- Testes E2E
- Testes de segurança básicos
- Testes de repositories
- Testes de use cases
- Testes de controllers

Cobertura mínima esperada:

```text
80%
```

---

## Documentação

Gerar:

- README.md
- Documentação de arquitetura
- Fluxos principais
- DER
- Swagger/OpenAPI
- Coleção Postman
- Docker Compose
- Scripts de instalação
- Guia de deploy
- Manual do desenvolvedor
- Manual do administrador
- Guia de configuração local

---

## Entregáveis

O projeto deve estar completamente funcional e organizado.

Gerar:

1. Front-end Angular completo.
2. Back-end Spring Boot completo.
3. Banco PostgreSQL com migrations Flyway.
4. Docker Compose.
5. Swagger.
6. Testes automatizados.
7. Seeds iniciais.
8. Usuário administrador bootstrap.
9. Scripts de instalação.
10. Projeto pronto para execução local com um único comando:

```bash
docker compose up
```

11. Estrutura preparada para futura publicação em AWS, considerando:

- ECS
- RDS
- S3
- CloudFront
- ElastiCache
- Amazon MQ ou RabbitMQ gerenciado

---

## Critérios de Aceite

O projeto só será considerado concluído se:

- O front-end executar corretamente.
- O back-end executar corretamente.
- O banco subir via Docker Compose.
- As migrations forem aplicadas automaticamente.
- O administrador inicial conseguir acessar o painel.
- Usuários comuns não conseguirem acessar o painel administrativo.
- Clientes conseguirem criar pedidos.
- Lojas conseguirem gerenciar produtos e pedidos.
- Entregadores conseguirem visualizar e aceitar corridas.
- O dashboard administrativo exibir gráficos reais ou mockados com estrutura pronta.
- A documentação explicar como executar, testar e evoluir o sistema.
- O código estiver organizado, limpo, testável e preparado para crescimento.

