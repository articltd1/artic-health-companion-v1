# ARTIC Development Tracks

## Overview
The ARTIC product suite will be developed in two parallel tracks:

- **Team A — Backend**
- **Team B — Frontend**

Each track is independent and communicates through well-defined REST API contracts.

## Team A — Backend
### Scope
- Electronic Medical Records (EMR)
- AI APIs
- Telemedicine APIs
- Notifications
- Security
- PostgreSQL optimization

### Architecture
- Node.js / Express.js
- PostgreSQL database
- REST API endpoints under `/api/v1/`
- Auth using sessions / secure tokens
- Input validation and logging
- Role-based access control for patient, doctor, admin

### Responsibilities
- Deliver stable data contracts for frontend consumption
- Implement domain services for records, appointments, labs, prescriptions, notifications
- Secure all sensitive endpoints and maintain data privacy
- Optimize database queries and indices for performance
- Provide API documentation and versioning

## Team B — Frontend
### Scope
- Next.js / React
- Tailwind CSS
- shadcn/ui
- Responsive layouts
- Charts and visualizations
- Mobile-first design
- Dark mode
- Accessibility

### Architecture
- Next.js application with role-aware pages
- Tailwind CSS utility classes and design tokens
- Component library based on ADL
- Data fetching from backend APIs using fetch/axios
- UI state management with React Query or equivalent
- Light/dark theme support and accessible patterns

### Responsibilities
- Build a premium ARTIC UI experience
- Implement patient, doctor, admin, and AI interfaces
- Maintain design consistency with ARTIC Design Language
- Implement accessible forms, tables, dashboards, and notifications
- Consume backend APIs without direct coupling to backend views

## Communication Contract
### API conventions
- Use `/api/v1/` endpoints
- Support JSON request and response payloads
- Return consistent error shapes and status codes
- Maintain feature flags or versioned endpoints for migration

### Example API domains
- `auth`
- `patients`
- `doctors`
- `appointments`
- `records`
- `labs`
- `prescriptions`
- `notifications`
- `analytics`
- `ai`

## Recommended Workflow
- Backend owns schema, API contract, and business rules.
- Frontend owns presentation, state, and client interactions.
- Both teams use shared documentation and API specs.
- Conduct regular integration checkpoints after each sprint.

## Project Layout
- `frontend/` — Version 2 UI app and design system
- `backend/` — API services and backend-only work
- `legacy/` — existing EJS app (if preservation is required)

## Next steps
1. Bootstrap the frontend app structure
2. Bootstrap the backend API service structure
3. Define API contract documents
4. Start independent MVP work in parallel
