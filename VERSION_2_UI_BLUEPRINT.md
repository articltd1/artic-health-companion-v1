# ARTIC Health Companion — Version 2 UI Blueprint

## Purpose
This document describes the future ARTIC Health Companion frontend experience for Version 2.
It preserves the current legacy EJS interface while defining a new premium UI architecture, page structure, component system, and API integration approach.

## 1. Design Principles
- Modern: clean, elevated surfaces and intuitive visual hierarchy.
- Minimal: reduce clutter, focus on core patient and clinician tasks.
- Medical: professional clinical tone with trusted health cues.
- AI-first: intelligent recommendations, contextual assistant, and explainable insights.
- Responsive: mobile-first breakpoints and fluid layouts.
- Accessible: high contrast, keyboard-first navigation, aria-friendly components.
- Enterprise-grade: scalable, secure, and analytics-ready.

## 2. Frontend Architecture
### Stack
- React + TypeScript
- Tailwind CSS for utility-first theming
- shadcn/ui for composable accessible primitives
- Lucide Icons for consistent system iconography
- Framer Motion for motion, page transitions, and micro-interactions
- Vite or Next.js for modern build and routing

### Structure
- `app/` or `src/` for app pages and layouts
- `components/` for reusable UI primitives
- `lib/` for data helpers, API clients, and formatters
- `hooks/` for state and query abstractions
- `styles/` for Tailwind config, themes, and custom tokens

### Deployment model
- Separate frontend repo or subfolder, built independently from Express backend.
- Built frontend served statically by Express or by a dedicated CDN.
- Backend becomes REST API provider only; no server-side rendering dependency for UI.

## 3. Component Library
### Core components
- `Button` (primary, secondary, outline, ghost, icon)
- `Card` (surface, metric, action, summary)
- `Input` / `Textarea` / `Select` / `Switch` / `Radio` / `Checkbox`
- `Table` with sortable headers, sticky columns, and responsive row expansion
- `Badge` / `Pill` / `Tag`
- `Tabs` / `Accordion`
- `Tooltip` / `Popover`
- `Alert` / `Banner`
- `Avatar` / `UserCircle`
- `ChartCard` / `MetricChip`

### Layout primitives
- `Shell` with collapsible Sidebar + Topbar
- `SectionHeader` with title, subtitle, and action button
- `PanelGrid` for dashboards
- `GlassCard` for elevated glassmorphism panels
- `InfoBlock` for health insights and key metrics

### AI-specific components
- `ChatPanel` with bubble groups and suggested questions
- `AssistantCard` for AI recommendations
- `ConfidenceBadge` and `InsightTooltip`

## 4. Wireframes
### Landing Page
- Full-width hero with glassmorphism CTA panel.
- 3 hero cards: AI Diagnostics, Care Coordination, Clinical Confidence.
- Feature grid for Patient, Doctor, Admin.
- Highlight section with clean icon cards: Appointments, Records, Labs, Prescriptions.
- Footer with trust badges and enterprise callout.

### Authentication
- Centered auth shell with side panel for brand story.
- Light and dark mode toggle.
- Social proof strip and security badges.
- Simple form cards with floating labels and validation helper text.

### Patient Dashboard
- Two-column hero summary:
  - Left: Health Score, Next Appointment, Latest AI insight.
  - Right: Patient vitals and quick actions.
- `Metrics strip` with `Activity`, `Recent labs`, `Med adherence`, `Risk level`.
- `Appointments panel` lower left, `AI Companion preview` lower right.

### Doctor Dashboard
- Overview hero with `Today's caseload`, `Urgent alerts`, and `Avg consult time`.
- `Schedule panel` with timeline cards.
- `Patient queue` table with status chips and quick actions.
- Side panel for `AI recommendations`, `Lab results pending`, and `Messages`.

### Admin Dashboard
- Analytics hero with patient volume, appointment utilization, and system health.
- Multi-card grid for `Care capacity`, `Doctor availability`, `Region performance`.
- `Alerts panel` for compliance, data quality, and operational flags.
- `Provider roster` table with filter chips.

### Medical Records
- Patient summary banner with photo/avatar, key demographics, and risk label.
- Tabbed content: `Summary`, `Visits`, `Medications`, `Labs`, `Imaging`.
- Timeline-style cards for visits and encounters.
- Glass cards for `Allergies`, `Chronic conditions`, and `Care plan`.

### Appointments
- Responsive table with status pill, provider, location, and actions.
- `Date filter` bar and status tabs.
- Modal or slide-over for `Reschedule`, `Cancel`, and `Check-in`.
- Empty state with CTA to `Book a doctor`.

### Laboratory
- Data table for lab orders, status, and results.
- Visual result cards for key biomarkers.
- `Add lab order` action with compact form.
- Lab history timeline with trending chips.

### Prescriptions
- Prescription ledger with `Issued`, `Refill`, `Expired` statuses.
- `Medication card` with dosage, frequency, and prescriber.
- `Refill request` button and `Pharmacy pickup` details.

### AI Health Companion
- Desktop layout with left conversation list, center chat, right context panel.
- Chat bubbles differentiated by user vs AI, with health summary chips.
- Suggested question pills under input.
- Context panel showing `Current concern`, `Recommended follow-up`, and `Confidence score`.

### Notifications
- Lightweight notifications center with tabs: `All`, `Unread`, `Alerts`, `Messages`.
- Each notification row includes icon, title, timestamp, and action.
- In-app toast system for quick success/error feedback.

### Settings
- Account and security sections.
- Theme & accessibility toggles.
- Notification preferences and privacy controls.
- Organization settings for admins.

### Analytics
- Chart-rich dashboard with area charts, donut metrics, and KPI cards.
- Filter row for timeframe, provider, and region.
- Data cards for `Appointment conversion`, `Patient retention`, `AI usage`.

### Emergency Dashboard
- Full-screen alert hero with `Emergency cases`, `Nearest providers`, and `Resource status`.
- Rapid response cards: `Critical alerts`, `Ambulance ETA`, `Bed availability`.
- High-contrast red/yellow accents for urgent states.

## 5. Navigation Flow
### Global structure
- Persistent sidebar on desktop with:
  - Dashboard
  - Appointments
  - Medical Records
  - Laboratory
  - Prescriptions
  - AI Companion
  - Analytics
  - Notifications
  - Settings
  - Emergency Dashboard (admin/clinical escalation)
- Topbar includes search, notifications, role switcher, user menu.
- Mobile bottom sheet or collapsible drawer on phones.

### Role-aware routing
- Patient: `Home`, `My Health`, `Doctors`, `Appointments`, `AI Companion`, `Settings`
- Doctor: `Dashboard`, `My Schedule`, `Patients`, `Labs`, `Messages`, `Settings`
- Admin: `Operations`, `Reports`, `Providers`, `Settings`, `Emergency`

### Interaction flow
- Onboarding ends at dashboard.
- Primary CTA always surfaces the next meaningful task.
- Secondary flow remains accessible from feature cards.

## 6. Dashboard Layouts
### Patient dashboard layout
- `Hero row`: Health score, upcoming appointment card, AI insight card.
- `Secondary row`: Two panels — `Recent labs` and `Medication adherence`.
- `Action row`: Quick actions for `Book appointment`, `Predict condition`, `View records`.

### Doctor dashboard layout
- `Hero row`: caseload, next patient, priority alert.
- `Content row`: `Appointment queue` table + `Patient summary` cards.
- `Insight row`: `AI suggestions`, `Lab orders pending`, `Team availability`.

### Admin dashboard layout
- `Hero row`: enterprise KPIs.
- `Analytics grid`: volume, utilization, outcome.
- `Operational row`: alerts, provider workload, resource capacity.

## 7. Color Palette
### Primary
- `#0F4BB4` — Deep clinical blue
- `#3B7BE6` — Soft blue accent

### Secondary
- `#16A085` — Healthcare green
- `#55C9A3` — supportive accent

### Neutral
- `#FFFFFF` — Surface
- `#F5F7FB` — Surface alt
- `#E4E9F2` — Border
- `#1F2937` — Text dark
- `#52637A` — Text muted

### Semantic
- Success: `#14A248`
- Warning: `#F59E0B`
- Danger: `#D64545`
- Info: `#3B82F6`

### Dark mode
- Surface: `#0F172A`
- Card: `#111827`
- Border: `rgba(148, 163, 184, 0.16)`
- Text: `#E2E8F0`
- Accent: `#60A5FA`

### Glassmorphism
- Transparent white: `rgba(255,255,255,0.14)`
- Frosted dark: `rgba(15,23,42,0.62)`
- Blur: `backdrop-filter: blur(18px)`

## 8. Typography Guide
### Font families
- Primary: `Inter`, sans-serif
- Secondary headings/body: `Plus Jakarta Sans`, sans-serif

### Scale
- Display / hero: `4rem` / `3rem`
- H1: `2.5rem`
- H2: `2rem`
- H3: `1.5rem`
- Body: `1rem`
- Small/caps: `0.875rem`

### Weight usage
- Bold for section headings and CTA labels.
- Medium for cards, table headings, and nav.
- Regular for body copy.
- Semi-bold for button text, status labels.

## 9. Spacing Guide
- `xs`: 0.25rem
- `sm`: 0.5rem
- `md`: 1rem
- `lg`: 1.5rem
- `xl`: 2rem
- `2xl`: 3rem
- `3xl`: 4rem

### Layout rhythm
- Use modular spacing in multiples of `0.5rem`.
- Card padding: `1.5rem` / `2rem`.
- Section gap: `2rem`.
- Grid gutter: `1.5rem`.

## 10. Animation Guide
- Motion tokens:
  - `motion-fast`: 120ms ease-out
  - `motion-medium`: 220ms ease-out
  - `motion-smooth`: 320ms ease-out

### Use cases
- Page transitions: fade + slide from 8px.
- Card hover: subtle lift and shadow growth.
- Buttons: scale `1.02` on hover, ripple-style focus.
- Sidebar open/close: smooth spring animation.
- Alerts: slide in from top with ease-out.
- Chart load: fade in and gentle axis reveal.

### Framer Motion patterns
- `AnimatePresence` for content replacement.
- `motion.div` for list stagger and card reveal.
- `hover` + `tap` states for interactive controls.
- Reduced motion: respect OS preference by disabling motion where needed.

## 11. Accessibility Guide
- Keyboard navigation: all controls reachable by Tab.
- Focus ring: visible distinct outline for all interactive elements.
- Contrast: ensure 4.5:1 for normal text, 3:1 for large text.
- Labels: every form control has associated label text.
- Aria roles: proper roles on dialogs, banners, alerts, navigation.
- Screen readers: announce status changes and notifications.
- Color blindness: avoid meaning conveyed by color alone.
- Responsive text: fluid scaling on smaller screens.
- Reduced motion: provide `prefers-reduced-motion` alternative.

## 12. Feature Blueprints
### Landing Page
- Premium hero with AI health narrative.
- Benefits section: `Care coordination`, `Predictive health`, `Trusted doctors`, `Clinical insights`.
- Role-specific cards: patient, doctor, admin.
- Data-driven counters and trust panel.
- CTA area with signup and request demo.

### Authentication
- Clean brand lockup and secure trust messaging.
- Simple login / register with password help.
- Accessible field validation and error alerts.
- Use of `Card` and `GlassCard` surfaces to separate form from brand story.

### Patient Dashboard
- Health summary hero + quick actions.
- AI insight card with key recommendation.
- Appointments table and upcoming session card.
- Medical snapshot cards for vitals, recent labs, prescriptions.

### Doctor Dashboard
- Workload view with timeline and patient queue.
- Clinical priority panel for urgent cases and follow-ups.
- AI-suggested care actions.
- Appointment roster and lab order summary.

### Admin Dashboard
- Executive summary of system health.
- Operational cards for patient volume, provider capacity, appointment fulfillment.
- Alerts panel for critical operational issues.
- Analytics charting with filter controls.

### Medical Records
- Unified patient profile banner.
- Tabbed record viewer.
- Encounter timeline with details and follow-up.
- Clinical summary cards for conditions, medications, allergies.

### Appointments
- Robust appointment table with filtering and row actions.
- Quick status chips and provider detail.
- Slide-over detail panel for appointment actions.

### Laboratory
- Lab order list with result status and priority.
- Biomarker result cards with range indicators.
- Search/filter by test type and date.

### Prescriptions
- Prescription ledger with active/refill states.
- Medication detail cards with expiration.
- Refill and pharmacy pickup CTA.

### AI Health Companion
- Conversational workspace with health context.
- Suggested prompt chips and quick actions.
- Results preview and follow-up recommendations.

### Notifications
- Central feed grouped by type.
- Unread badge count and action buttons.
- Toast feedback for in-app actions.

### Settings
- Account, security, preferences.
- Theme toggle and accessibility controls.
- Notification preferences and connected services.

### Analytics
- KPI cards and trend charts.
- Drill-down filters and comparison views.
- Health, utilization, and AI adoption metrics.

### Emergency Dashboard
- High-priority alert dashboard.
- Critical case summary and resource availability.
- Red/yellow visual hierarchy for urgent states.
- Rapid response shortcuts.

## 13. Backend Integration Strategy
### Backend role
- Existing Express backend remains the data and auth provider.
- Frontend communicates with backend solely through REST APIs.
- The legacy EJS interface stays intact until Version 2 is approved.

### API layer
- Create an API client module such as `apiClient.ts`.
- Use fetch/axios with centralized error handling, auth token injection, and request retry logic.
- Separate service files by domain: `auth`, `patients`, `appointments`, `records`, `labs`, `prescriptions`, `notifications`, `analytics`.

### Example API contracts
- Auth
  - `POST /api/auth/login`
  - `POST /api/auth/register`
  - `GET /api/auth/me`
  - `POST /api/auth/logout`
- Patients
  - `GET /api/patients/me`
  - `GET /api/patients/:id/records`
  - `GET /api/patients/:id/appointments`
- Doctors
  - `GET /api/doctors`
  - `GET /api/doctors/:id`
  - `GET /api/doctors/:id/appointments`
- Appointments
  - `GET /api/appointments`
  - `POST /api/appointments`
  - `PATCH /api/appointments/:id`
  - `DELETE /api/appointments/:id`
- Medical Records
  - `GET /api/records/:id`
  - `GET /api/records/:id/visits`
- Lab
  - `GET /api/labs`
  - `POST /api/labs/orders`
- Prescriptions
  - `GET /api/prescriptions`
  - `POST /api/prescriptions`
- AI Companion
  - `POST /api/ai/query`
  - `GET /api/ai/explain/:sessionId`
- Analytics
  - `GET /api/analytics/dashboard`
  - `GET /api/analytics/appointments`

### Security
- Use secure cookies or bearer tokens for auth.
- Protect sensitive endpoints with server-side session validation.
- Prefer same-site cookie policy or JWT on HTTPS in production.

### Integration patterns
- Keep REST responses normalized and predictable.
- Implement frontend loading states, error states, and retries.
- Use a UI state layer (React Query, SWR, or custom hooks) to manage remote data.
- Preserve current Express route behavior by adding `/api/*` endpoints where needed.

### Migration path
- Phase 1: create the new frontend shell as a separate client.
- Phase 2: build patient/doctor dashboards and connect to backend APIs.
- Phase 3: move feature-by-feature from legacy EJS views to the new SPA.
- Phase 4: retire the legacy UI after full validation.

## 14. Approval checklist
- [ ] Premium UI blueprint documented
- [ ] Tailwind + shadcn/ui architecture proposed
- [ ] Role-aware dashboards and feature pages defined
- [ ] Color palette, typography, spacing, and motion guides created
- [ ] Accessibility and responsive principles included
- [ ] REST API integration strategy explained

---

This blueprint is intentionally design-focused and implementation-ready without modifying the current legacy interface.
Please review and approve before we begin Version 2 frontend execution.