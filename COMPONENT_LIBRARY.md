# Component Library

## Overview
This component library defines the reusable building blocks for ARTIC Health Companion. Components should be designed to support both patient and clinician workflows while preserving consistency, accessibility, and premium polish.

## Core Components

### Navigation
- `SidebarNav`
  - Logo section
  - Primary navigation links
  - Status quick links
  - Secondary actions
- `Topbar`
  - Page title
  - Contextual breadcrumbs
  - Profile quick action
  - Notification indicator

### Cards
- `SummaryCard`
  - Metric number, label, and trend indicator
- `FeatureCard`
  - Icon, title, description, CTA
- `ContentCard`
  - Title, body, action row
- `ActionCard`
  - Callout for the AI health companion or urgent tasks

### Data Display
- `AppointmentCard`
  - Patient name, status, time, reason, actions
- `PatientRecordCard`
  - Key medical data, visit summary, risk status
- `DoctorCard`
  - Photo/avatar, specialization, rating, availability
- `NewsCard`
  - Headline, snippet, source, read CTA

### Forms
- `FormField`
  - Label, helper text, input/select/textarea, validation state
- `MultiSelectField`
  - Tokenized symptoms selector with accessible search results
- `SegmentedControl`
  - Status filter for appointment views
- `FormSection`
  - Grouped fields with section header and description

### Buttons
- `PrimaryButton`
  - Bold filled CTA
- `SecondaryButton`
  - Outline style CTA
- `TertiaryButton`
  - Text-only action link
- `IconButton`
  - Circular icon action for quick tasks

### Feedback States
- `EmptyState`
  - Illustration, title, body text, CTA
- `ErrorState`
  - Clear error message, retry or return action
- `LoadingState`
  - Skeleton cards, spinner, or progress bar
- `Toast`
  - Brief alert for success/error feedback

### Modals & Panels
- `ModalDialog`
  - Title, content body, footer actions
- `SlidingPanel`
  - Right-hand contextual panel for record details
- `ConfirmationDialog`
  - Critical action confirmation with clear secondary/primary choices

## Page-Level Components
- `PatientDashboard`
  - Health summary, AI feed, upcoming care, quick actions
- `DoctorDashboard`
  - Work queue, patient risk summary, unresolved cases
- `AppointmentList`
  - Status tabs, appointment cards, filter tools
- `MedicalRecordOverview`
  - Patient vitals, history, care plan, recent visits
- `DiseasePredictionFlow`
  - Symptoms input, intelligence summary, result insights

## Interaction Patterns
- Consistent hover, focus, and pressed states for all interactive controls
- Primary actions should always be visually distinct and grouped at the top-right or bottom of cards
- Use progressive disclosure for complex workflows (show fewer fields, reveal more details on demand)
- Support keyboard-first form navigation and accessible list controls

## Notes
- All components should reuse the same design tokens from `DESIGN_SYSTEM.md`.
- Components must support responsive behavior and real content sizes.
- Components should reference clinical credibility through spacing, labeling, and data clarity.
