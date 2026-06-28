create table store_documents (
  id uuid primary key,
  store_id uuid not null references stores(id) on delete cascade,
  type varchar(80) not null,
  file_url varchar(500) not null,
  status varchar(40) not null default 'PENDING_REVIEW',
  rejection_reason varchar(500),
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz
);

create table store_hours (
  id uuid primary key,
  store_id uuid not null references stores(id) on delete cascade,
  day_of_week integer not null check (day_of_week between 0 and 6),
  opens_at time not null,
  closes_at time not null,
  active boolean not null default true,
  created_at timestamptz not null,
  updated_at timestamptz not null,
  deleted_at timestamptz,
  unique (store_id, day_of_week)
);

create index idx_store_documents_store_status on store_documents(store_id, status);
create index idx_store_hours_store_day on store_hours(store_id, day_of_week);
