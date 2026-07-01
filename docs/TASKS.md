# ELIDE UX Task Control

Este documento organiza as proximas tarefas de UX e frontend em ordem de execucao. Execute uma task por vez, valide, registre o resultado e so entao avance para a proxima.

## Regras Gerais

- Manter design premium, moderno, minimalista, elegante e inspirado em apps de delivery.
- Usar componentes reutilizaveis e arquitetura consistente do projeto.
- Dentro de `frontend/src/app/pages`, manter cada pagina com `component.ts`, `component.html` e `component.css`.
- Nao criar `service.ts` dentro de `pages`.
- Nao executar `docker build`.
- Quando validar frontend, usar `ng build --configuration development`.
- Corrigir qualquer overflow horizontal antes de considerar uma task concluida.
- Validar desktop e mobile nas paginas afetadas.

## Status

Use estes status:

- `TODO`: ainda nao iniciada.
- `DOING`: em execucao.
- `DONE`: concluida e validada.
- `BLOCKED`: bloqueada por dependencia ou erro externo.

## Task 1 - Layout Global, Header, Footer e Menu

Status: `DONE`

Objetivo:
Corrigir a base global de navegacao e eliminar problemas visuais compartilhados por todas as paginas.

Escopo:

- `frontend/src/app/layouts/shell-layout.component.ts`
- Header
- Footer
- Drawer mobile
- Menu por tipo de usuario
- Nome do usuario logado
- Logout

Checklist:

- Corrigir overflow horizontal em desktop e mobile.
- Garantir que o drawer mobile fechado nao gere largura extra.
- Exibir botao de menu apenas no responsivo.
- Manter header legivel em desktop e mobile.
- Organizar drawer mobile por grupos de contexto.
- Preservar icones das rotas.
- Garantir nome do usuario logado e logout.
- Garantir footer com rotas corretas.

Validacao:

- Rodar `ng build --configuration development`.
- Revisar `/`, `/login`, `/restaurantes`, `/cliente`, `/loja`, `/entregador`, `/admin/dashboard`.
- Validar em largura mobile.

Prompt recomendado:

```text
Leia o frontend do projeto ELIDE.

Execute apenas a Task 1 de docs/UX_TASKS.md.

Objetivo:
Corrigir a usabilidade global do layout, header, footer e menu lateral, mantendo o estilo premium, moderno, minimalista, elegante e inspirado em apps de delivery.

Regras:
- Nao alterar backend.
- Nao executar docker build.
- Manter componentes reutilizaveis.
- Preservar icones existentes nas rotas.

Valide no final com ng build --configuration development e revisao responsiva.
```

## Task 2 - Home e Busca de Delivery

Status: `DONE`

Objetivo:
Transformar a Home em uma experiencia real de delivery, com busca, localizacao, categorias e lojas proximas.

Escopo:

- `frontend/src/app/pages/home`
- `frontend/src/app/pages/search`
- componentes compartilhados necessarios

Checklist:

- Criar barra de localizacao com texto como "Entregar em..." e acao "Alterar".
- Fazer busca da Home navegar para `/busca?q=termoDigitado`.
- Exibir categorias principais: Restaurantes, Mercados, Farmacias, Padarias, Lanchonetes, Acougues, Pet Shops.
- Exibir secoes de lojas proximas, lojas abertas e ofertas.
- Melhorar estados vazios e loading.
- Garantir responsividade.

Validacao:

- Rodar `ng build --configuration development`.
- Validar `/` e `/busca` em desktop e mobile.
- Confirmar navegacao da busca para `/busca?q=...`.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 2.

Revise e melhore a Home e a busca do frontend ELIDE para uma experiencia real de app de delivery.

Regras:
- Nao alterar backend.
- Nao executar docker build.
- Manter arquitetura de componentes reutilizaveis.

Valide no final com ng build --configuration development.
```

## Task 3 - Catalogo, Listas e Busca

Status: `DONE`

Objetivo:
Melhorar a navegacao por lojas e produtos nas paginas de catalogo.

Escopo:

- `/restaurantes`
- `/mercados`
- `/farmacias`
- `/padarias`
- `/lanchonetes`
- `/acougues`
- `/pet-shops`
- `/busca`
- `frontend/src/app/pages/shared/catalog-view.component.ts`

Checklist:

- Padronizar cards de loja.
- Exibir nome, segmento, status, taxa de entrega, pedido minimo, distancia quando disponivel e CTA.
- Adicionar filtros visuais: aberto agora, mais perto, menor entrega, promocoes.
- Usar API de lojas proximas quando latitude/longitude estiverem disponiveis.
- Manter fallback para catalogo atual.
- Criar estados de loading, erro e vazio.
- Garantir responsividade.

Validacao:

- Rodar `ng build --configuration development`.
- Validar rotas de catalogo em desktop e mobile.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 3.

Revise as paginas de catalogo e busca do frontend ELIDE, aproximando o comportamento de apps de delivery.

Regras:
- Nao executar docker build.
- Nao alterar backend, exceto bug claro de contrato existente.
- Manter fallback quando geolocalizacao nao estiver disponivel.

Valide no final com ng build --configuration development.
```

## Task 4 - Login, Cadastro e Formularios

Status: `DONE`

Objetivo:
Melhorar conversao, legibilidade e consistencia visual dos formularios.

Escopo:

- `/login`
- `/cadastro`
- `/recuperar-senha`
- `/alterar-senha`
- `/perfil`
- `/enderecos`
- `/checkout`
- paginas de pagamento
- `frontend/src/styles.scss`

Checklist:

- No mobile, priorizar formulario antes do texto promocional.
- Corrigir bordas, labels e linhas internas de inputs.
- Consolidar padrao reutilizavel de formulario.
- Melhorar mensagens de erro e sucesso.
- Botao principal deve ter estado loading/disabled claro.
- Garantir altura, espacamento e labels consistentes.
- Garantir responsividade.

Validacao:

- Rodar `ng build --configuration development`.
- Validar visualmente todos os formularios.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 4.

Revise a experiencia de autenticacao e formularios do frontend ELIDE.

Regras:
- Nao alterar backend.
- Nao executar docker build.
- Corrigir especificamente problemas de mat-label, bordas e linhas internas nos inputs.

Valide no final com ng build --configuration development.
```

## Task 5 - Carrinho e Checkout

Status: `DONE`

Objetivo:
Criar uma experiencia de compra mais proxima de apps de delivery.

Escopo:

- `/carrinho`
- `/checkout`
- `/pagamentos`
- `/pagamentos/pix`
- `/pagamentos/cartao`
- `/pagamentos/dinheiro`

Checklist:

- Bloquear checkout quando carrinho estiver vazio.
- Criar resumo claro: subtotal, frete, cupom, desconto e total.
- No mobile, manter CTA facil de acessar.
- Permitir observacao por item quando ja existir suporte.
- Exibir adicionais quando disponiveis.
- Melhorar aplicacao de cupom.
- Melhorar escolha de pagamento.
- Melhorar estados de erro e sucesso.

Validacao:

- Rodar `ng build --configuration development`.
- Testar adicionar, remover, alterar quantidade e seguir para checkout.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 5.

Revise e melhore o fluxo de Carrinho e Checkout do frontend ELIDE.

Regras:
- Nao executar docker build.
- Manter chamadas de API existentes.
- Garantir responsividade.

Valide no final com ng build --configuration development.
```

## Task 6 - Area do Cliente

Status: `DONE`

Objetivo:
Organizar a experiencia do cliente autenticado com navegacao clara e acoes uteis.

Escopo:

- `/cliente`
- `/perfil`
- `/enderecos`
- `/meus-pedidos`
- `/favoritos`
- `/cupons`
- `/carteira`
- `/avaliacoes`
- `/notificacoes`
- `/rastreamento`

Checklist:

- Criar navegacao contextual do cliente.
- Exibir nome do usuario logado.
- Exibir logout acessivel.
- Melhorar cards de acoes.
- Padronizar estados de loading, vazio e erro.
- Usar chamadas de API existentes corretamente.
- Garantir responsividade.

Validacao:

- Rodar `ng build --configuration development`.
- Validar todas as rotas do cliente.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 6.

Revise a Area do Cliente do frontend ELIDE.

Regras:
- Nao executar docker build.
- Nao alterar backend.
- Garantir nome do usuario logado e logout.

Valide no final com ng build --configuration development.
```

## Task 7 - Area da Loja

Status: `DONE`

Objetivo:
Transformar `/loja` em uma central operacional clara para estabelecimentos.

Escopo:

- `/loja`
- componentes compartilhados necessarios

Checklist:

- Organizar secoes: Dashboard, Cadastro, Documentos, Produtos, Categorias, Complementos, Horarios, Estoque, Promocoes, Pedidos, Financeiro, Relatorios, Avaliacoes.
- Melhorar hierarquia visual de cards e tabelas.
- Destacar acoes principais: atualizar, ativar/pausar produto, alterar status do pedido.
- Melhorar estados de loading, vazio e erro.
- Usar chamadas de API existentes.
- Garantir responsividade.

Validacao:

- Rodar `ng build --configuration development`.
- Validar `/loja` em desktop e mobile.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 7.

Revise a Area do Estabelecimento no frontend ELIDE.

Regras:
- Nao executar docker build.
- Usar chamadas de API ja existentes.
- Manter arquitetura atual de pages.

Valide no final com ng build --configuration development.
```

## Task 8 - Area do Entregador

Status: `TODO`

Objetivo:
Criar uma experiencia objetiva para operacao de entregas.

Escopo:

- `/entregador`
- componentes compartilhados necessarios

Checklist:

- Organizar secoes: status disponivel/indisponivel, corrida atual, aceitar corrida, recusar corrida, GPS/Mapa, ganhos diarios, ganhos mensais, extrato, historico de entregas, documentos.
- Destacar a acao principal conforme contexto.
- Melhorar painel de ganhos.
- Melhorar estados de loading, vazio e erro.
- Usar chamadas de API existentes.
- Garantir responsividade.

Validacao:

- Rodar `ng build --configuration development`.
- Validar `/entregador`.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 8.

Revise a Area do Entregador no frontend ELIDE.

Regras:
- Nao executar docker build.
- Usar chamadas de API existentes.
- Garantir responsividade.

Valide no final com ng build --configuration development.
```

## Task 9 - Painel Administrativo

Status: `TODO`

Objetivo:
Criar uma experiencia administrativa completa, protegida e operacional.

Escopo:

- `/admin/dashboard`
- `/admin/lojas`
- `/admin/categorias`
- `/admin/banners`
- `/admin/cidades`
- `/admin/cupons`
- `/admin/taxas`
- `/admin/administradores`
- `/admin/aprovacoes/estabelecimentos`
- `/admin/aprovacoes/entregadores`
- `/admin/aprovacoes/admins`
- `/admin/pedidos`
- `/admin/financeiro`
- `/admin/auditoria`
- `/admin/logs`
- `/admin/configuracoes`

Checklist:

- Criar navegacao administrativa contextual.
- Usar sidebar no desktop e drawer no mobile.
- Adicionar busca, filtros e paginacao visual onde houver listas.
- Padronizar tabelas, cards, acoes e estados vazios.
- Garantir acesso apenas para admin.
- Exibir nome do admin logado e logout.
- Usar chamadas de API existentes.

Validacao:

- Rodar `ng build --configuration development`.
- Validar todas as rotas admin.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 9.

Revise o Painel Administrativo do frontend ELIDE.

Regras:
- Nao executar docker build.
- Usar chamadas de API existentes.
- Garantir protecao por adminGuard.

Valide no final com ng build --configuration development.
```

## Task 10 - Revisao Final de UX e Build

Status: `BLOCKED`

Nota de execucao:
Foram aplicadas correcoes globais de UX/responsividade no frontend. A validacao TypeScript passou com `./node_modules/.bin/tsc -p tsconfig.app.json --noEmit`. O build Angular foi tentado com `ng build --configuration development`, mas `ng` global nao estava no PATH deste ambiente. A tentativa com `./node_modules/.bin/ng build --configuration development` abortou com `exit 134` antes de emitir erro de codigo; a tentativa fora do sandbox foi bloqueada pelo limite de uso do ambiente. Reexecutar `ng build --configuration development` no terminal local.

Objetivo:
Validar consistencia visual, responsividade e experiencia entre todos os tipos de usuario.

Escopo:

- Todas as rotas principais do frontend.
- Build frontend.
- Testes frontend existentes, quando disponiveis.

Checklist:

- Revisar desktop e mobile das rotas principais.
- Corrigir textos visiveis sem acento quando adequado.
- Garantir consistencia de botoes, inputs, cards, tabelas, estados vazios, loading e erros.
- Corrigir qualquer overflow horizontal.
- Garantir navegacao clara por tipo de usuario.
- Validar logout e nome do usuario logado.

Validacao:

- Rodar `ng build --configuration development`.
- Rodar testes frontend existentes se estiverem configurados.
- Informar paginas revisadas e ajustes feitos.

Prompt recomendado:

```text
Leia docs/UX_TASKS.md.

Execute apenas a Task 10.

Faca uma revisao final de UX no frontend ELIDE.

Regras:
- Nao executar docker build.
- Corrigir inconsistencias visuais e responsivas encontradas.
- Nao alterar backend.

Valide no final com ng build --configuration development.
```
