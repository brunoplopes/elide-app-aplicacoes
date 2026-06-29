create table courier_documents (
  id uuid primary key,
  courier_id uuid not null references couriers(id) on delete cascade,
  type varchar(80) not null,
  file_url varchar(500) not null,
  status varchar(40) not null default 'PENDING_REVIEW',
  rejection_reason varchar(500),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table courier_locations (
  id uuid primary key,
  courier_id uuid not null references couriers(id) on delete cascade,
  order_id uuid references orders(id) on delete set null,
  latitude numeric(10,7) not null,
  longitude numeric(10,7) not null,
  heading numeric(8,2),
  speed numeric(8,2),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table courier_delivery_decisions (
  id uuid primary key,
  courier_id uuid not null references couriers(id) on delete cascade,
  order_id uuid not null references orders(id) on delete cascade,
  accepted boolean not null default false,
  reason varchar(300),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz,
  unique (courier_id, order_id)
);

create index idx_courier_documents_courier_status on courier_documents(courier_id, status);
create index idx_courier_locations_courier_created on courier_locations(courier_id, created_at desc);
create index idx_courier_decisions_courier_order on courier_delivery_decisions(courier_id, order_id);
