alter table stores
  add column latitude numeric(10,7),
  add column longitude numeric(10,7),
  add column location geography(Point, 4326);

alter table stores
  add constraint chk_stores_latitude_range check (latitude between -90 and 90),
  add constraint chk_stores_longitude_range check (longitude between -180 and 180);

create or replace function update_store_location()
returns trigger as $$
begin
  if new.latitude is not null and new.longitude is not null then
    new.location = st_setsrid(st_makepoint(new.longitude::double precision, new.latitude::double precision), 4326)::geography;
  else
    new.location = null;
  end if;
  return new;
end;
$$ language plpgsql;

create trigger trg_stores_location
before insert or update of latitude, longitude on stores
for each row
execute function update_store_location();

update stores
set location = st_setsrid(st_makepoint(longitude::double precision, latitude::double precision), 4326)::geography
where latitude is not null
  and longitude is not null;

create index idx_stores_location_gist on stores using gist(location);
create index idx_stores_status_open_live on stores(status, open) where deleted_at is null;
create index idx_store_categories_category_store on store_categories(category_id, store_id);
