# Backup and restore

Daily backups should run:

```bash
BACKUP_DIR=./backups RETENTION_DAYS=14 scripts/backup.sh
```

Restore:

```bash
scripts/restore.sh backups/elide-YYYYMMDD-HHMMSS.dump
```

For production, schedule backups through RDS automated backups and retain manual snapshots before destructive migrations.

