# Main flows

## Customer order

1. Customer searches stores/products by city, category, and text.
2. Customer adds products, addons, coupon, address, and payment method to the cart.
3. Backend validates store availability, stock, delivery fee, coupon, and payment intent.
4. Order is created as `CREATED` and an event is published.
5. Store accepts and moves the order through preparation statuses.
6. Courier accepts delivery and location updates are streamed through WebSocket.
7. Customer receives notifications until order delivery and can review it.

## Store operation

1. Store account submits documentation.
2. Admin approves the store.
3. Store manages categories, products, addons, hours, stock, promotions, and orders.
4. Financial dashboards aggregate orders, fees, payouts, and ticket averages.

## Courier operation

1. Courier submits documents and vehicle data.
2. Admin approves the courier.
3. Courier toggles availability.
4. Courier accepts or refuses available runs.
5. Delivery route and earnings are tracked.

