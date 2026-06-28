## No tipo de Usuário

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

Funcionalidades e ermissões do administrador:

- CRUD de lojas
- CRUD de categorias
- CRUD de banners
- CRUD de cidades
- CRUD de cupons
- CRUD de taxas
- CRUD de administradores
- Cadastro e Aprovação de estabelecimentos
- Cadastro e Aprovação de entregadores
- Visualização de todos os pedidos
- Gestão financeira
- Dashboard
- Auditoria
- Logs
- Configurações gerais do sistema

Regras de acesso:

- Somente administradores podem acessar o painel administrativo.
- Somente o administrador MASTER pode criar novos administradores ADMIN.
- Nenhum usuário comum pode acessar o painel administrativo.
- Implementar controle de permissões baseado em papéis, usando RBAC.
- O administrador principal deve ter acesso total ao sistema ELIDE.
