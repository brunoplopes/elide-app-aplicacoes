# Local setup

Requirements:

- Docker and Docker Compose.
- Java 21 and Gradle for backend development outside Docker.
- Node 22 and pnpm for frontend development outside Docker.

Run everything:

```bash
docker compose up
```

Backend environment variables:

- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`
- `REDIS_HOST`
- `RABBITMQ_HOST`
- `JWT_SECRET`
- `ELIDE_BOOTSTRAP_ADMIN_USERNAME`
- `ELIDE_BOOTSTRAP_ADMIN_PASSWORD`
