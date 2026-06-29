alter table addresses add column if not exists label varchar(80) not null default 'Endereco';

create table customer_favorites (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  store_id uuid not null references stores(id) on delete cascade,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz,
  unique (user_id, store_id)
);

create table customer_payment_methods (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  type varchar(40) not null,
  label varchar(120) not null,
  last4 varchar(4),
  default_method boolean not null default false,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table customer_wallet_entries (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  icon varchar(80) not null,
  title varchar(160) not null,
  amount numeric(12,2) not null,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create index idx_customer_favorites_user on customer_favorites(user_id);
create index idx_customer_payment_methods_user on customer_payment_methods(user_id);
create index idx_customer_wallet_entries_user_created on customer_wallet_entries(user_id, created_at desc);
