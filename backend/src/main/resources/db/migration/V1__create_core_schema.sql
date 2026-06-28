create extension if not exists pgcrypto;

create table roles (
  id uuid primary key,
  name varchar(40) not null unique,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table permissions (
  id uuid primary key default gen_random_uuid(),
  code varchar(120) not null unique,
  description varchar(240) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table role_permissions (
  role_id uuid not null references roles(id) on delete cascade,
  permission_id uuid not null references permissions(id) on delete cascade,
  primary key (role_id, permission_id)
);

create table users (
  id uuid primary key,
  username varchar(120) not null unique,
  email varchar(180) not null unique,
  password_hash varchar(255) not null,
  full_name varchar(160) not null,
  enabled boolean not null default true,
  must_change_password boolean not null default false,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table user_roles (
  user_id uuid not null references users(id) on delete cascade,
  role_id uuid not null references roles(id) on delete cascade,
  primary key (user_id, role_id)
);

create table refresh_tokens (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  token_hash varchar(128) not null unique,
  expires_at timestamptz not null,
  revoked boolean not null default false,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table cities (
  id uuid primary key,
  name varchar(120) not null,
  state varchar(2) not null,
  active boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz,
  unique (name, state)
);

create table customers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references users(id),
  cpf varchar(14) unique,
  phone varchar(20),
  wallet_balance numeric(12,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table addresses (
  id uuid primary key,
  user_id uuid not null references users(id),
  city_id uuid references cities(id),
  street varchar(120) not null,
  number varchar(30) not null,
  district varchar(80) not null,
  zip_code varchar(10) not null,
  latitude numeric(10,7),
  longitude numeric(10,7),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table categories (
  id uuid primary key,
  name varchar(100) not null,
  icon varchar(80) not null,
  active boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table stores (
  id uuid primary key,
  owner_id uuid references users(id),
  city_id uuid references cities(id),
  name varchar(160) not null,
  document varchar(18) not null unique,
  segment varchar(80) not null,
  status varchar(40) not null,
  delivery_fee numeric(12,2) not null default 0,
  minimum_order numeric(12,2) not null default 0,
  open boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table store_categories (
  store_id uuid not null references stores(id) on delete cascade,
  category_id uuid not null references categories(id) on delete cascade,
  primary key (store_id, category_id)
);

create table products (
  id uuid primary key,
  store_id uuid not null references stores(id),
  category_id uuid not null references categories(id),
  name varchar(160) not null,
  description varchar(600) not null,
  price numeric(12,2) not null check (price >= 0),
  stock_quantity integer not null check (stock_quantity >= 0),
  active boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table product_addons (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references products(id) on delete cascade,
  name varchar(120) not null,
  price numeric(12,2) not null default 0,
  required boolean not null default false,
  max_quantity integer not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table coupons (
  id uuid primary key,
  code varchar(40) not null unique,
  discount_value numeric(12,2) not null,
  active boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table couriers (
  id uuid primary key,
  user_id uuid not null unique references users(id),
  document varchar(14) not null,
  vehicle_type varchar(40) not null,
  status varchar(40) not null,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table vehicles (
  id uuid primary key default gen_random_uuid(),
  courier_id uuid not null references couriers(id) on delete cascade,
  plate varchar(10),
  model varchar(80) not null,
  type varchar(40) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table orders (
  id uuid primary key,
  customer_id uuid not null references users(id),
  store_id uuid not null references stores(id),
  courier_id uuid references couriers(id),
  status varchar(40) not null,
  payment_method varchar(40) not null,
  subtotal numeric(12,2) not null default 0,
  delivery_fee numeric(12,2) not null default 0,
  discount numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table order_items (
  id uuid primary key,
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  quantity integer not null check (quantity > 0),
  unit_price numeric(12,2) not null,
  total numeric(12,2) not null,
  note varchar(500),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table payments (
  id uuid primary key,
  order_id uuid not null unique references orders(id),
  status varchar(40) not null,
  amount numeric(12,2) not null,
  provider varchar(120),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table routes (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references orders(id),
  provider varchar(40) not null,
  distance_meters integer not null,
  estimated_seconds integer not null,
  encoded_polyline text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table promotions (
  id uuid primary key default gen_random_uuid(),
  store_id uuid not null references stores(id),
  name varchar(120) not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table financial_entries (
  id uuid primary key default gen_random_uuid(),
  store_id uuid references stores(id),
  courier_id uuid references couriers(id),
  order_id uuid references orders(id),
  type varchar(60) not null,
  amount numeric(12,2) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table reviews (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id),
  user_id uuid not null references users(id),
  store_id uuid references stores(id),
  courier_id uuid references couriers(id),
  rating integer not null check (rating between 1 and 5),
  comment varchar(800),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table notifications (
  id uuid primary key,
  user_id uuid not null references users(id),
  title varchar(120) not null,
  message varchar(800) not null,
  read boolean not null default false,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table banners (
  id uuid primary key,
  title varchar(120) not null,
  image_url varchar(500) not null,
  active boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table files (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references users(id),
  bucket varchar(120) not null,
  object_key varchar(500) not null,
  content_type varchar(120) not null,
  size_bytes bigint not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table fees (
  id uuid primary key,
  name varchar(80) not null,
  value numeric(12,2) not null,
  percentage boolean not null,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table system_settings (
  id uuid primary key,
  key_name varchar(120) not null unique,
  value varchar(1200) not null,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table audit_logs (
  id uuid primary key,
  actor_id uuid references users(id),
  action varchar(120) not null,
  resource varchar(120) not null,
  ip_address varchar(45) not null,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create index idx_users_username on users(username);
create index idx_users_email on users(email);
create index idx_stores_status_city on stores(status, city_id);
create index idx_products_store_active on products(store_id, active);
create index idx_orders_customer_created on orders(customer_id, created_at desc);
create index idx_orders_store_status on orders(store_id, status);
create index idx_orders_courier_status on orders(courier_id, status);
create index idx_addresses_user on addresses(user_id);
create index idx_notifications_user_read on notifications(user_id, read);
create index idx_audit_logs_actor_created on audit_logs(actor_id, created_at desc);

