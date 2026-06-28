#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR="${BACKUP_DIR:-./backups}"
RETENTION_DAYS="${RETENTION_DAYS:-7}"
TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"

docker compose exec -T postgres pg_dump -U elide -d elide -Fc > "$BACKUP_DIR/elide-$TIMESTAMP.dump"
find "$BACKUP_DIR" -name "elide-*.dump" -mtime "+$RETENTION_DAYS" -delete

echo "Backup created at $BACKUP_DIR/elide-$TIMESTAMP.dump"

