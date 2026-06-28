# Deployment guide

## AWS target

- ECS/Fargate for backend and frontend containers.
- RDS PostgreSQL for relational data.
- ElastiCache Redis for cache and rate limiting.
- Amazon MQ or managed RabbitMQ for events.
- S3 for uploaded files and generated assets.
- CloudFront in front of frontend assets and public files.

## Production notes

- Replace `JWT_SECRET` with a strong secret managed by AWS Secrets Manager.
- Disable bootstrap admin creation after the first production deploy.
- Enable HTTPS at the load balancer.
- Configure CORS to the public frontend domain only.
- Use private subnets for database, cache, and broker.

