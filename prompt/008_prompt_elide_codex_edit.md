Leia docs/PROMPT_MASTER.md.

Execute apenas as próximas tarefas.

Você é um engenheiro de software sênior. Altere minha aplicação para suportar busca eficiente de lojas próximas usando PostgreSQL + PostGIS.

Contexto:
A tabela existente é:

stores:
- id uuid primary key
- owner_id uuid references users(id)
- city_id uuid references cities(id)
- name varchar(160)
- document varchar(18)
- segment varchar(80)
- status varchar(40)
- delivery_fee numeric(12,2)
- minimum_order numeric(12,2)
- open boolean
- created_at timestamptz
- updated_at timestamptz
- deleted_at timestamptz

store_categories:
- store_id uuid references stores(id)
- category_id uuid references categories(id)

Objetivo:
Implementar geolocalização escalável para buscar lojas próximas do usuário.

Tarefas:

1. Criar uma migration SQL para habilitar PostGIS:
   CREATE EXTENSION IF NOT EXISTS postgis;

2. Alterar a tabela stores adicionando:
    - latitude NUMERIC(10,7)
    - longitude NUMERIC(10,7)
    - location geography(Point, 4326)

3. Criar constraints:
    - latitude entre -90 e 90
    - longitude entre -180 e 180

4. Criar função e trigger para manter location atualizado automaticamente sempre que latitude ou longitude forem inseridas ou alteradas.

5. Popular location para registros já existentes quando latitude e longitude não forem nulos.

6. Criar índices:
    - GIST em stores(location)
    - índice parcial em stores(status, open) WHERE deleted_at IS NULL
    - índice em store_categories(category_id, store_id)

7. Criar/alterar o repository/service responsável por listar lojas próximas.

A query deve:
- Receber latitude, longitude, raio em metros e limite.
- Buscar apenas lojas com deleted_at IS NULL.
- Buscar apenas lojas com status = 'ACTIVE'.
- Buscar apenas lojas abertas: open = true.
- Usar ST_DWithin para filtrar pelo raio.
- Usar ST_Distance para retornar distance_meters.
- Ordenar pelas lojas mais próximas.
- Aplicar LIMIT.

Query base:

    SELECT
    s.id,
    s.name,
    s.segment,
    s.delivery_fee,
    s.minimum_order,
    s.open,
    ST_Distance(
    s.location,
    ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geography
    ) AS distance_meters
    FROM stores s
    WHERE s.deleted_at IS NULL
    AND s.status = 'ACTIVE'
    AND s.open = true
    AND ST_DWithin(
    s.location,
    ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geography,
    :radius_meters
    )
    ORDER BY
    s.location <-> ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geography
    LIMIT :limit;

8. Criar também uma busca opcional por categoria usando store_categories:

    SELECT
    s.id,
    s.name,
    s.segment,
    s.delivery_fee,
    s.minimum_order,
    s.open,
    ST_Distance(
    s.location,
    ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geography
    ) AS distance_meters
    FROM stores s
    JOIN store_categories sc ON sc.store_id = s.id
    WHERE s.deleted_at IS NULL
    AND s.status = 'ACTIVE'
    AND s.open = true
    AND sc.category_id = :category_id
    AND ST_DWithin(
    s.location,
    ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geography,
    :radius_meters
    )
    ORDER BY
    s.location <-> ST_SetSRID(ST_MakePoint(:longitude, :latitude), 4326)::geography
    LIMIT :limit;

9. Criar ou ajustar endpoint REST:
   GET /stores/nearby

Parâmetros:
- latitude
- longitude
- radiusMeters
- limit
- categoryId opcional

Exemplo:
GET /stores/nearby?latitude=-23.5505&longitude=-46.6333&radiusMeters=5000&limit=50

10. Validar entrada:
- latitude obrigatória entre -90 e 90
- longitude obrigatória entre -180 e 180
- radiusMeters obrigatório e maior que 0
- limit com valor padrão 50 e máximo 100

11. Atualizar DTO/model de Store para incluir:
- latitude
- longitude
- distanceMeters no retorno da busca

12. Criar testes:
- migration criada corretamente
- busca retorna apenas lojas ativas, abertas e não deletadas
- busca respeita raio
- busca ordena por distância
- busca por categoria funciona
- validações de latitude/longitude funcionam

13. Manter compatibilidade com o código existente.
    Não remover campos atuais.
    Não recriar a tabela stores.
    Usar migrations incrementais.

Entregue:
- migration SQL
- alterações no repository/service/controller
- DTOs necessários
- testes automatizados
- instruções no README explicando como habilitar PostGIS localmente
