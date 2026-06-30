# ELIDE

**Seu pedido, na sua porta.**

ELIDE is a production-oriented delivery marketplace for Brazilian small and mid-sized cities. The repository is organized as a monorepo with an Angular 20 frontend, Spring Boot 3 backend, PostgreSQL, Redis, RabbitMQ, Flyway migrations, Swagger/OpenAPI, and operational scripts.

## Stack

- Frontend: Angular 20, TypeScript, Angular Material, Tailwind CSS, RxJS, Signals, standalone components, lazy loading, PWA-ready layout.
- Backend: Java 21, Spring Boot 3, Gradle, Spring Security, JWT, BCrypt, JPA/Hibernate, Flyway, Redis, RabbitMQ, WebSocket, MapStruct, Lombok, Micrometer, Actuator.
- Data: PostgreSQL with migrations, indexes, constraints, audit fields, soft-delete fields where useful.
- Ops: Docker Compose, backup/restore scripts, local and AWS-ready documentation.

## Run locally

```bash
docker compose up
```

Services:

- Frontend: http://localhost:4200
- Backend API: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html
- PostgreSQL: localhost:5432
- RabbitMQ UI: http://localhost:15672

### PostGIS

Store proximity search uses PostgreSQL + PostGIS. The local Docker Compose stack uses the `postgis/postgis:16-3.4-alpine` image so the extension files are available when Flyway runs:

```sql
CREATE EXTENSION IF NOT EXISTS postgis;
```

If you already had the old `postgres:16-alpine` container running, recreate only the database container before starting the backend again:

```bash
docker compose up -d postgres
```

For a PostgreSQL installed directly on your machine, install PostGIS in that PostgreSQL server first, then run the backend. The application cannot create the extension if the server does not have PostGIS installed.

The application migrations add `stores.latitude`, `stores.longitude`, `stores.location`, keep `location` updated through a trigger, and create the spatial/index support for nearby searches.

Nearby stores endpoint:

```http
GET /api/v1/stores/nearby?latitude=-23.5505&longitude=-46.6333&radiusMeters=5000&limit=50
```

Optional category filter:

```http
GET /api/v1/stores/nearby?latitude=-23.5505&longitude=-46.6333&radiusMeters=5000&limit=50&categoryId=<uuid>
```

Initial administrator:

- User: `leonardo_admin`
- Password: `elide.com.leo.2026`

The backend stores the initial password with BCrypt and marks the account with `must_change_password = true`. Change it on first access.

## Local development

Backend:

```bash
cd backend
gradle bootRun
```

Frontend:

```bash
cd frontend
pnpm install
pnpm start
```

## Tests

Backend:

```bash
cd backend
gradle test
```

Frontend:

```bash
cd frontend
pnpm test
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Database ERD](docs/ERD.md)
- [Local setup](docs/LOCAL_SETUP.md)
- [Developer manual](docs/DEVELOPER_MANUAL.md)
- [Administrator manual](docs/ADMIN_MANUAL.md)
- [Deployment guide](docs/DEPLOYMENT.md)
- [Backup and restore](docs/BACKUP_RESTORE.md)
- [Main flows](docs/FLOWS.md)
