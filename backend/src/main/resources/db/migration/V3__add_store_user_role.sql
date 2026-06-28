insert into roles (id, name, created_at, updated_at)
select gen_random_uuid(), 'STORE_USER', now(), now()
where not exists (
  select 1 from roles where name = 'STORE_USER'
);
