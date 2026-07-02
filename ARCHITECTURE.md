# ARTIC Health Companion Architecture

## Overview
ARTIC Health Companion is a Node.js/Express web application using EJS views, PostgreSQL storage, Passport authentication, and modular middleware for validation and logging. The app is designed to support two user roles: normal users and doctors.

## High-Level Layers

1. **Presentation Layer**
   - `views/` contains EJS templates for pages and partials.
   - `public/` contains static assets: CSS, JS, images, and Select2.
   - Frontend form submissions and AJAX calls drive disease prediction, appointments, and chatbot interactions.

2. **Application Layer**
   - `index.js` bootstraps Express, loads environment config, session and Passport, and mounts routes.
   - `src/routes/user.routes.js` handles user auth, profile, news, appointments, disease prediction, and chatbot endpoints.
   - `src/routes/doctor.routes.js` handles doctor auth, dashboard, and profile.

3. **Domain/Controller Layer**
   - `controllers/auth.js` configures user Passport strategy and session serialization/deserialization.
   - `controllers/doctorauth.js` configures doctor Passport strategy.
   - `controllers/symp.js` handles symptom/disease logic and external API integration.
   - `controllers/chatbot.js` handles AI query processing.

4. **Infrastructure Layer**
   - `src/common/db.js` exports a shared PostgreSQL connection pool.
   - `src/common/services/logger.service.js` configures Winston logging.
   - `src/config/environment.js` validates required env vars and exports configuration.

5. **Cross-Cutting Concerns**
   - `src/common/middleware/authenticate.js` protects routes for authenticated users and doctors.
   - `src/common/middleware/validate.js` validates request payloads against Joi schemas.
   - `src/common/validation/schemas.js` defines Joi schemas for registration, login, appointment creation, and disease prediction.
   - `src/errors/AppError.js` provides a custom error class for application errors.

## Authentication and Sessions

- Passport is used for local authentication.
- Session state is managed with `express-session`.
- User and doctor identities are serialized into session data, then deserialized on each request.
- `ensureAuthenticated()` middleware redirects unauthenticated visitors to the correct login route.

## Routing and User Flows

- User-facing routes:
  - `/` homepage
  - `/login`, `/register`
  - `/logout`
  - `/profile`
  - `/doctor/list` and appointment booking
  - `/user-appointments`
  - `/symptoms` and `/predict-disease`
  - `/api/query` for chatbot requests

- Doctor-facing routes:
  - `/doctor/login`, `/doctor/register`
  - `/doctor/dashboard`
  - `/doctor/profile`

## Database Model

- `users` stores normal user accounts and profile data.
- `doctors` stores doctor accounts, contact details, and specializations.
- `appointment` stores scheduled appointments, linked to `patient_id` and `doctor_id`.

## Logging and Monitoring

- The app uses a logging service for structured logs.
- Requests and important events are logged with context.
- Logs are written to the `logs/` folder and can be rotated by configuration.

## Final Notes

- Temporary verification and cookie files have been cleaned from the repository.
- The app now resolves `controllers/symptoms.json` using a runtime-safe path.
- The doctor dashboard and appointment modal now correctly bind doctor IDs and preserve authentication state.
- This document provides a high-level architectural summary to support maintenance, onboarding, or further extension of the ARTIC Health Companion application.
