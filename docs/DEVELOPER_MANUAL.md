# Developer manual

## Backend conventions

- Put business rules in application use cases.
- Keep JPA entities and repositories in infrastructure.
- Expose only DTOs at the controller boundary.
- Protect admin APIs with RBAC.
- Add a Flyway migration for every schema change.

## Frontend conventions

- Prefer standalone components with `ChangeDetectionStrategy.OnPush`.
- Use signals for local state and RxJS for async streams.
- Keep route-level features lazy loaded.
- Reuse shared components for cards, empty states, and status badges.

## Testing

The intended minimum coverage is 80%. Backend tests cover controllers, repositories, security, and use cases. Frontend tests cover services, guards, and major smart components.

