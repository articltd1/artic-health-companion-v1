# Sprint 1 Baseline

Date: 2026-07-08

Overview
- Legacy web app: listening on port 3000 (EJS, `index.js`)
- Backend API: listening on port 4000 (`apps/backend/src/server.js`)
- Git branch: `main`
- Node: v24.x

Key runtime status
- Legacy UI: `node index.js` or `npm run start` (port 3000)
- Backend API: `npm run dev:backend` (nodemon) or `node apps/backend/src/server.js` (port 4000)

Database & migrations
- Migrations present in `migrations/001_create_emr_schema.sql`
- Local DB config via `.env` referenced in `src/config/environment.js`

Known issues & risks
- `OPENAI_API_KEY` is not set; chatbot controller requires API key for AI queries.
- `npm install` reported vulnerabilities (28) — review in `DEPENDENCY_REVIEW.md`.
- `apps/frontend` workspace was removed by project decision — verify no remaining references.

Dependencies snapshot (root)
- See `npm ls --depth=0` for current installed packages.

Verification steps performed
- Confirmed servers start on ports 3000 and 4000 locally.
- Confirmed core routes return expected status for health endpoints.

Notes
- No functional changes made to chatbot or validation schemas during Sprint 1.
# SPRINT 1 BASELINE

## Current running status
- The legacy Express application starts successfully with `node index.js`.
- The app listens on port `3000`.
- The current runtime path is the legacy Express + EJS application at the repository root.

## Current routes
- Legacy web routes are served from `src/routes/user.routes.js` and `src/routes/doctor.routes.js`.
- EMR routes are served from `src/emr/routes/emr.routes.js`.
- The main app entry point is `index.js`.

## Current database status
- The app expects PostgreSQL configuration via environment variables.
- The current baseline run did not report a database connection failure during startup.
- Database-backed routes may still require a valid local PostgreSQL instance for full runtime validation.

## Current known issues
- Environment handling relies on required variables and does not yet provide a strongly centralized runtime validation pattern beyond the current config module.
- Security defaults are minimal and do not yet include common response headers.
- Error responses are functional but not fully standardized across all routes.
- Some legacy routes still depend on direct `res.status(...).send(...)` patterns.

## Current git branch
- `main`

## Current dependencies
- Runtime dependencies include Express, EJS, Passport, PostgreSQL client, dotenv, Joi, Axios, bcrypt, winston, and related middleware.
- The repository also includes workspace packages under `apps/`, `packages/`, and `mobile/`.
