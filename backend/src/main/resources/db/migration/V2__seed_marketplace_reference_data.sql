insert into cities (id, name, state, active, created_at, updated_at)
values
  ('00000000-0000-0000-0000-000000000101', 'Limeira', 'SP', true, now(), now()),
  ('00000000-0000-0000-0000-000000000102', 'Americana', 'SP', true, now(), now())
on conflict do nothing;

insert into categories (id, name, icon, active, created_at, updated_at)
values
  ('00000000-0000-0000-0000-000000000201', 'Restaurantes', 'restaurant', true, now(), now()),
  ('00000000-0000-0000-0000-000000000202', 'Mercados', 'shopping_basket', true, now(), now()),
  ('00000000-0000-0000-0000-000000000203', 'Farmacias', 'local_pharmacy', true, now(), now()),
  ('00000000-0000-0000-0000-000000000204', 'Padarias', 'bakery_dining', true, now(), now()),
  ('00000000-0000-0000-0000-000000000205', 'Pet Shops', 'pets', true, now(), now())
on conflict do nothing;

insert into stores (id, city_id, name, document, segment, status, delivery_fee, minimum_order, open, created_at, updated_at)
values
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000101', 'Cantina ELIDE', '12.345.678/0001-90', 'Restaurante', 'APPROVED', 6.90, 20.00, true, now(), now()),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000101', 'Mercado Central', '98.765.432/0001-10', 'Mercado', 'APPROVED', 4.90, 30.00, true, now(), now())
on conflict do nothing;

insert into store_categories (store_id, category_id)
values
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000201'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000202')
on conflict do nothing;

insert into products (id, store_id, category_id, name, description, price, stock_quantity, active, created_at, updated_at)
values
  ('00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000201', 'Combo artesanal', 'Hamburguer, batata e bebida.', 34.90, 100, true, now(), now()),
  ('00000000-0000-0000-0000-000000000011', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000201', 'Marmita executiva', 'Arroz, feijao, salada e proteina do dia.', 24.90, 80, true, now(), now()),
  ('00000000-0000-0000-0000-000000000012', '00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000202', 'Cesta rapida', 'Itens essenciais para o dia a dia.', 59.90, 40, true, now(), now())
on conflict do nothing;

insert into coupons (id, code, discount_value, active, created_at, updated_at)
values ('00000000-0000-0000-0000-000000000301', 'ELIDE10', 10.00, true, now(), now())
on conflict do nothing;

insert into banners (id, title, image_url, active, created_at, updated_at)
values ('00000000-0000-0000-0000-000000000401', 'Seu pedido, na sua porta.', '/assets/brand/banner.webp', true, now(), now())
on conflict do nothing;

insert into fees (id, name, value, percentage, created_at, updated_at)
values ('00000000-0000-0000-0000-000000000501', 'Comissao padrao', 12.00, true, now(), now())
on conflict do nothing;

insert into system_settings (id, key_name, value, created_at, updated_at)
values
  ('00000000-0000-0000-0000-000000000601', 'platform.name', 'ELIDE', now(), now()),
  ('00000000-0000-0000-0000-000000000602', 'platform.slogan', 'Seu pedido, na sua porta.', now(), now())
on conflict do nothing;

