#!/usr/bin/env bash
set -euo pipefail

if [ "${1:-}" = "" ]; then
  echo "Usage: scripts/restore.sh backups/elide-YYYYMMDD-HHMMSS.dump"
  exit 1
fi

docker compose exec -T postgres dropdb -U elide --if-exists elide
docker compose exec -T postgres createdb -U elide elide
docker compose exec -T postgres pg_restore -U elide -d elide --clean --if-exists < "$1"

echo "Restore completed from $1"

