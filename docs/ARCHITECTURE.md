# Architecture

ELIDE is split into frontend, backend, data, and platform concerns.

## Backend

The backend follows hexagonal architecture:

- `domain`: entities, value objects, enums, and domain rules.
- `application`: use cases, command/query DTOs, and ports.
- `infrastructure`: persistence, security, messaging, configuration, and external adapters.
- `interfaces`: REST controllers, WebSocket endpoints, and API DTOs.

Spring Security protects APIs with JWT access tokens, refresh tokens, RBAC roles, and method-level authorization. Admin routes require `ROLE_ADMIN` or `ROLE_MASTER_ADMIN`.

## Frontend

The Angular app uses standalone components, signals, lazy routes, Angular Material, Tailwind utility classes, and a shell layout. Feature areas are separated into customer, store, courier, and admin surfaces.

## Integrations

Payments, maps, notifications, and delivery assignment are represented through ports so Mercado Pago, PagSeguro, Stripe, Google Maps, OpenStreetMap, Firebase, SMS, email, and WhatsApp providers can be swapped without rewriting use cases.

## Scalability

- PostgreSQL remains the source of truth.
- Redis is used for cache and rate limiting.
- RabbitMQ carries order and notification events.
- WebSocket streams order and courier-location updates.
- AWS target: ECS, RDS, S3, CloudFront, ElastiCache, and Amazon MQ/RabbitMQ.

