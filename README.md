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
