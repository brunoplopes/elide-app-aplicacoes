create table order_item_addons (
  id uuid primary key default gen_random_uuid(),
  order_item_id uuid not null references order_items(id) on delete cascade,
  product_addon_id uuid not null references product_addons(id),
  name varchar(120) not null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null check (unit_price >= 0),
  total numeric(12,2) not null check (total >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index idx_order_item_addons_item on order_item_addons(order_item_id);
create index idx_order_item_addons_addon on order_item_addons(product_addon_id);
