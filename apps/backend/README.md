# ARTIC Backend Track

This folder contains the backend API services for ARTIC.

## Goals
- Maintain and extend the existing Express backend
- Provide stable REST APIs for patient, doctor, admin, EMR, telemedicine, notifications, and AI
- Optimize PostgreSQL queries and schema
- Secure APIs with authentication and authorization
- Support versioned endpoints for frontend migration

## Structure
- `src/` for backend source code
- `controllers/` for request handlers
- `routes/` for API routing
- `services/` for business logic
- `models/` or `db/` for database layer
- `middleware/` for auth, validation, logging

## Next steps
1. Define API contract documents
2. Create API versioning layer
3. Add separate services for EMR, labs, prescriptions, notifications, and AI
4. Build integration tests for REST endpoints
