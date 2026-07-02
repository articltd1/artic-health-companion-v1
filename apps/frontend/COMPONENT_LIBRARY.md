# ARTIC Component Library

This document describes the reusable frontend architecture and shared components built for Version 2.

## Core UI Primitives

- `Button` — primary, secondary, danger variants for actions and links.
- `Card` — content container with title, description, and body.
- `Table` — data grid for rows and columns with custom renderers.
- `Badge` — status label for pills and metadata.
- `Alert` — inline feedback for warnings, errors, and success states.
- `Modal` — overlay panel for dialogs, forms, and confirmations.
- `Toast` — transient notification tray for system messages.
- `LoadingSpinner` — inline loading indicator.
- `SkeletonLoader` — placeholder state for asynchronously loaded content.
- `EmptyState` / `ErrorState` — fallback screens for no content or failure.

## Layout Shells

- `PublicLayout` — public-facing pages and marketing flows.
- `AuthLayout` — login/register forms and authentication screens.
- `PatientLayout` — patient portal shell with sidebar and top navigation.
- `DoctorLayout` — doctor workspace shell with sidebar and top navigation.
- `AdminLayout` — admin console shell for management pages.

## Navigation & Shell Patterns

- `Sidebar` — role-aware menu for patient, doctor, and admin routes.
- `TopNavigation` — header area with page title and utility actions.
- `Breadcrumb` — hierarchical page path navigation.
- `SearchBar` — search field with clear actions.
- `NotificationBell` / `ProfileMenu` — user utility controls.

## Data & Domain Components

- `AppointmentCard` — appointment summary card.
- `PatientCard` — patient overview with condition and history.
- `DoctorCard` — clinician summary card.
- `MedicalRecordCard` — medical record preview card.
- `HealthCard` / `StatCard` — metrics and health status cards.
- `Chart` / `Timeline` / `Calendar` — visual data displays.

## Shared Services

- `src/lib/api.ts` — low-level fetch helpers for API endpoints.
- `src/services/apiService.ts` — domain service wrappers for health, patients, doctors, and telemedicine.

## Usage Guidelines

- Every new feature page should use the shared `components/` and `layouts/` folders.
- Avoid creating page-specific UI patterns outside the shared component layer.
- Keep presentation and layout consistent by reusing `Card`, `Button`, `Sidebar`, and `TopNavigation`.
- Use `AppProvider` to compose global state or theme providers.

## Next Steps

- Add `AdminLayout` pages for admin workflows.
- Add `AuthLayout` pages for login and registration.
- Add guided design tokens, color palettes, and theming support in `globals.css`.
