# Database Migration Strategy

Goals
- Safe, repeatable, reversible migrations for EMR schema.

Approach
- Use SQL migration files stored in `migrations/` and apply with a migration runner (e.g., `node-pg-migrate` or `knex` in later sprints).
- Keep migrations idempotent and include a `down` step where possible.
- Use separate schemas for dev/staging/production.

Process
1. Create migration file under `migrations/` following naming convention `NNN_description.sql`.
2. Run locally against a disposable database and review results.
3. Create PR with migration and tests; include rollback verification steps.

Backups & Rollback
- Take backups or snapshots before applying to production.
- Prefer backward-compatible changes when possible.
