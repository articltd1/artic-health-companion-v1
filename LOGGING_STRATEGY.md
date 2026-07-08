# Logging Strategy and Audit Logs

Goals
- Structured logs for debugging and audit trails for critical actions.

Levels
- `error`, `warn`, `info`, `debug` — controlled by `LOG_LEVEL`.

Format
- JSON structured logs in production for ingestion by log aggregators.

Audit Logs
- Record security-relevant events (auth, role changes, critical data access) to an append-only audit log store.
- Audit entries should include actor, timestamp, action, target, and metadata (no secrets).

Retention & Access
- Define retention policy per environment and ensure restricted access to audit logs.

Redaction
- Before persisting logs containing user data, run a PII redaction step.
