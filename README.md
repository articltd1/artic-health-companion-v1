# ARTIC Health Companion

![ARTIC Health Companion Logo](docs/logo-placeholder.png)

ARTIC Health Companion is an AI-powered digital healthcare ecosystem built by ARTIC LTD. It combines intelligent patient workflows, secure clinician collaboration, clinical content, and digital assistant services into a unified platform for modern healthcare delivery.

## Project Vision
To improve healthcare accessibility, quality, and efficiency by combining Artificial Intelligence, modern software engineering, digital health technologies, and future robotics into one integrated healthcare platform.

## Mission
To become Africa's leading AI-powered healthcare ecosystem, empowering patients, healthcare professionals, hospitals, researchers, and governments with intelligent digital health solutions.

## Core Values
- Patient-centric design
- Data privacy and security
- Clinical collaboration
- AI-powered insights
- Scalable enterprise architecture
- Continuous innovation

## Long-term Goals
- Build a secure clinical workflow engine for patient and doctor management
- Enable AI-driven decision support for care teams
- Expand into telemedicine, medical analytics, and digital therapeutics
- Integrate connected devices, pharmacy, lab systems, and robotics
- Deliver a unified mobile and web healthcare experience

## Project Architecture
ARTIC Health Companion is structured as a modular Node.js/Express application with a PostgreSQL backend, EJS front-end rendering, and a layered service architecture. See `PROJECT_ARCHITECTURE.md` for detailed system diagrams.

## Monorepo Layout
The repository is now organized as a monorepo to support future multi-platform expansion:

- `apps/`
  - `apps/frontend/` — Next.js frontend application
  - `apps/backend/` — Express API backend
- `mobile/` — mobile application workspace and future native apps
- `packages/ui/` — shared UI library for web and mobile components
- `packages/shared/` — shared utilities and cross-platform helpers
- `types/` — shared TypeScript definitions and type contracts
- `docs/` — product and engineering documentation
- `infrastructure/` — deployment, CI/CD, and environment configuration

## Technology Stack
- Backend: Node.js, Express, Passport
- Frontend: EJS, Bootstrap, jQuery, Select2
- Database: PostgreSQL
- Authentication: Passport Local, express-session
- AI / Automation: Puppeteer, Axios, external inference APIs
- Logging: Winston, daily rotated log transport
- Validation: Joi

## Current MVP Status
The current MVP delivers a professional healthcare platform for authenticated users and doctors with:
- Authentication and session management
- Patient profile management
- Doctor portal and dashboard
- Appointment scheduling and tracking
- Health news aggregation
- AI chat assistant integration

## Features
### Current Features
- ✓ Authentication
- ✓ Patient Profiles
- ✓ Doctor Portal
- ✓ Appointment Booking
- ✓ Health News
- ✓ AI Chatbot

### Future Features
- Electronic Medical Records
- AI Clinical Assistant
- Video Consultation
- Medical Imaging
- Laboratory Results
- Medication Tracking
- Vaccination Records
- Personal Health Dashboard
- Wearable Device Integration
- Smart Health Monitoring
- IoT Sensors
- Healthcare Robotics

## Future Roadmap
Phase 1: Authentication, Patient Management, Doctor Management, Appointment Scheduling, Health News, AI Chat Assistant

Phase 2: Electronic Medical Records

Phase 3: Telemedicine

Phase 4: AI Health Companion

Phase 5: Health Analytics

Phase 6: Medication Management

Phase 7: Laboratory Integration

Phase 8: Pharmacy Integration

Phase 9: Hospital Administration

Phase 10: Mobile Application

Phase 11: IoT Health Monitoring

Phase 12: Healthcare Robotics

## Installation Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/artic-health-companion.git
   cd artic-health-companion
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment template:
   ```bash
   cp .env.example .env
   ```
4. Set environment values for database, session, API keys, and platform configuration.
5. Start the application:
   ```bash
   npm start
   ```

## Development Guide
- Use Node.js 18+ and npm 10+
- Follow the codebase structure in `src/`
- Use `npm install` after adding dependencies
- Keep UI and backend features separated by route modules and controller services
- Protect sensitive configuration with environment variables

## Screenshots
![Dashboard Placeholder](docs/screenshots/dashboard-placeholder.png)

## Folder Structure
- `controllers/` - business logic and route handlers
- `src/common/` - shared services, middleware, validation, and database access
- `src/config/` - environment and application configuration
- `views/` - EJS templates and UI page rendering
- `public/` - static assets, styles, and frontend libraries
- `logs/` - application logging output

## API Overview
### User Endpoints
- `GET /login`
- `GET /register`
- `POST /register`
- `POST /login`
- `GET /profile`
- `POST /editProfile`
- `GET /logout`
- `GET /` (home)
- `GET /symptoms`
- `POST /predict-disease`
- `POST /api/query`
- `GET /news`
- `POST /book-appointment`
- `GET /user-appointments`

### Doctor Endpoints
- `GET /doctor/login`
- `GET /doctor/register`
- `POST /doctor/register`
- `POST /doctor/login`
- `GET /doctor/dashboard`
- `GET /doctor/profile`

## Security Principles
- Authentication and session management using secure cookies
- Password hashing with bcrypt
- Input validation using Joi schemas
- Environment-driven configuration for secrets and keys
- Principle of least privilege for database access

## Contribution Guide
- Open issues for new features or bugs
- Create feature branches: `feature/<name>`
- Use descriptive commit messages
- Submit pull requests with clear summaries and testing notes
- Maintain code quality and documentation standards

## License
This project is licensed under the ISC License.

## Contact
ARTIC LTD
Email: contact@articltd.ai
Website: https://articltd.ai
