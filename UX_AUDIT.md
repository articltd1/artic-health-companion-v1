# UX Audit

## Overview
This audit evaluates the HealthCare Companion application from the perspective of patients, doctors, hospital administrators, investors, and government health officials. The goal is to identify experience gaps, trust issues, and opportunities to evolve the product from a generic Bootstrap UI into a premium AI-powered healthcare platform.

## Scope
- Shared application shell and navigation
- Patient-facing pages: Home, Login, Register, Profile, Appointments, Disease Prediction, News, Patient Record
- Doctor-facing pages: Doctor Login, Doctor Register, Doctor Dashboard, Doctor Profile
- Service pages: Error page

## Cross-Cutting Problems
### Visual Problems
- The UI still feels like a standard Bootstrap theme rather than a bespoke healthcare product.
- Color usage is inconsistent: gradients on patient home, dark doctor pages, and plain white forms create a fractured experience.
- Typography is uneven: multiple heading scales, default Bootstrap font sizes, and inconsistent text weight usage.
- Brand identity is inconsistent: `ARTIC`, `MediConnect`, and generic Bootstrap labels appear together.

### Navigation Problems
- Navigation is split between a shared shell for authenticated pages and standalone login/register pages.
- Critical pages like Doctor Dashboard, patient record, and login flows use different navigation paradigms.
- No clear product structure or hierarchy: users cannot immediately understand the difference between AI prediction, appointment management, and medical records.

### Information Hierarchy Problems
- The homepage is dense with text and lacks clear visual breaks for the platform’s core value propositions.
- Patient and doctor pages are presented as long content blocks rather than prioritized tasks and outcomes.
- Important actions such as booking a doctor or viewing medical records are buried beneath generic cards and hero sections.

### Accessibility Issues
- Some pages rely on Bootstrap defaults without accessible alternatives.
- Links and buttons are mixed incorrectly (anchor wrapping button), which can confuse assistive tech.
- Form fields use duplicate IDs and inconsistent labels.
- No explicit focus management on modal forms or content transitions.

### Mobile Issues
- The app shell is not optimized for small screens: the sidebar hides but there is no mobile-first action bar or bottom nav.
- Login / register forms are fixed width and may be cramped on narrow screens.
- Cards and timelines do not adapt gracefully in several pages.

### Empty State Problems
- `news.ejs` only renders content when `news` exists; there is no empty state for no articles.
- Appointment list and medical record pages do not provide guidance when no data is available.
- Error page is minimal and offers no pathway back into the platform other than a text link.

### Dashboard Usability
- The doctor dashboard is a simple appointment list with tabs; there is no summary of load, priority, or patient risk.
- The patient profile page is a static card without actionable next steps.
- The appointment view is purely chronological and lacks urgency or context.

### Color Consistency
- The current palette mixes saturated brand blues with Bootstrap defaults and dark theme fragments.
- There is no clear distinction between primary, secondary, warning, and neutral application roles.
- The result is a visually noisy experience that undermines professionalism.

### Typography Consistency
- The application uses Bootstrap heading classes inconsistently.
- Body copy sizes vary from `1.4rem` hero text to default small label text.
- Headings and body text do not follow a coherent scale.

### Button Consistency
- Buttons vary between `btn-primary`, `btn-danger`, and custom classes without consistent shape or spacing.
- Some CTAs are nested inside anchors; others are plain buttons.
- Text button hierarchy is unclear: primary actions and secondary actions look similar.

### Form Usability
- The disease prediction form is functional but visually overloaded, and it uses a large multi-select in a single panel.
- Register forms use floating labels inconsistently and custom JS to show/hide labels.
- There is no inline validation or helper text guidance.

### Table / List Usability
- Appointments and medical records are displayed with raw cards and paragraphs rather than structured tables, timelines, or data grids.
- Doctor listing cards are visually heavy and do not support search or filtering.
- News cards are basic and lack categorization.

### Overall Professionalism
- The platform lacks a coherent brand voice and trust signals.
- There are mismatched page templates and visual systems for patients vs. doctors.
- Generic default titles and document metadata reduce the perception of polish.

## Page-by-Page Audit

### Home Page (`index.ejs`)
- Visual Problems:
  - Overly long hero copy with generic language.
  - Mixed imagery and Bootstrap spacing create a brochure-like feel.
- Navigation Problems:
  - Home page uses shell navigation, but CTA placement is not prioritized.
- Information Hierarchy Problems:
  - Feature sections feel equal instead of leading with the most important user goal.
- Accessibility Issues:
  - Decorative images lack meaningful alt text.
- Mobile Issues:
  - Large multi-column hero layout may compress badly on mobile.
- Empty State Problems: N/A
- Dashboard Usability: N/A

### Login / Register Pages (`login.ejs`, `register.ejs`, `doctor/login.ejs`, `doctor/register.ejs`)
- Visual Problems:
  - Separate pages use a different layout and lack the shared brand shell.
  - Forms still feel utilitarian and Bootstrap-native.
- Navigation Problems:
  - Users are not reminded of the product’s value or trust signals during sign in.
- Information Hierarchy Problems:
  - Form fields are grouped inconsistently.
- Accessibility Issues:
  - Labels and placeholders are not tightly coupled; select field label logic is fragile.
- Mobile Issues:
  - Form width is constrained and may produce horizontal scroll.
- Empty State Problems: N/A
- Dashboard Usability: N/A

### Patient Profile (`profile.ejs`)
- Visual Problems:
  - The card layout is heavy and has inconsistent spacing.
  - Profile picture is small and decorative rather than informative.
- Navigation Problems:
  - Profile actions are mixed without clear priority.
- Information Hierarchy Problems:
  - Important profile details are at the same level as action buttons.
- Accessibility Issues:
  - Image alt text is not descriptive.
- Mobile Issues:
  - Two-column profile card may stack awkwardly.
- Empty State Problems: N/A

### User Appointments (`user-appointments.ejs`)
- Visual Problems:
  - The tabbed list looks generic and hard to scan.
- Navigation Problems:
  - Filtering is limited to hard-coded status links instead of dynamic controls.
- Information Hierarchy Problems:
  - Appointment cards do not communicate urgency, status, or next action prominently.
- Accessibility Issues:
  - The tabs rely on Bootstrap classes but lack ARIA states for the active panel.
- Mobile Issues:
  - Card spacing is not optimized for phone screens.
- Empty State Problems:
  - No friendly empty state message or suggested next steps.

### Disease Prediction (`disease-prediction.ejs`)
- Visual Problems:
  - Form panel is dense and lacks a clear AI-driven narrative.
- Navigation Problems:
  - No breadcrumb or progress indicator for the prediction journey.
- Information Hierarchy Problems:
  - Symptom selection, gender, and year are presented with equal weight.
- Accessibility Issues:
  - Select2 integration may not be keyboard-friendly by default.
- Mobile Issues:
  - Long form and result panels are not optimized for compact screens.
- Empty State Problems:
  - No state for results not available or prediction pending.

### Doctors Listing (`doctors.ejs`)
- Visual Problems:
  - Cards feel dated and do not convey doctor credibility.
- Navigation Problems:
  - No search, filter, or sorting for specialization.
- Information Hierarchy Problems:
  - Doctor biography is minimal and contact details are overly prominent.
- Accessibility Issues:
  - Image `alt` is generic.
- Mobile Issues:
  - Card width and modal form may create cramped presentation.
- Empty State Problems:
  - No fallback when no doctors are available.

### News (`news.ejs`)
- Visual Problems:
  - News cards are unbranded and lack consistent spacing.
- Navigation Problems:
  - No category or topical filtering.
- Information Hierarchy Problems:
  - Article preview text is clipped without clear CTA hierarchy.
- Accessibility Issues:
  - Cards rely on images without descriptive alt text.
- Mobile Issues:
  - Fixed card width is not responsive.
- Empty State Problems:
  - No empty article message or educational placeholder.

### Patient Medical Record (`emr/patient-record.ejs`)
- Visual Problems:
  - Page is browser-default and not aligned with application styling.
- Navigation Problems:
  - No contextual navigation to other patient tools.
- Information Hierarchy Problems:
  - Medical record fields are presented in raw paragraph form.
- Accessibility Issues:
  - No semantic landmarks or ARIA roles in the record details.
- Mobile Issues:
  - Layout is not responsive and may overflow.
- Empty State Problems:
  - Basic alert is shown, but without guidance or next step.

### Doctor Dashboard (`doctor/dashboard.ejs`)
- Visual Problems:
  - Simple tabbed cards do not convey workload or patient risk.
- Navigation Problems:
  - Desktop nav is minimal and inconsistent with patient shell.
- Information Hierarchy Problems:
  - Appointment entries are repetitive and do not surface high-value data.
- Accessibility Issues:
  - Tabs and buttons are not fully ARIA-annotated.
- Mobile Issues:
  - Not designed for small screens; behavior is unclear.
- Empty State Problems:
  - No message when no appointments exist.

### Doctor Profile (`doctor/profile.ejs`)
- Visual Problems:
  - Layout is sparse and resembles a static information sheet.
- Navigation Problems:
  - No clear call to action for availability or schedule settings.
- Information Hierarchy Problems:
  - Contact details and specialization are shown with equal emphasis.
- Accessibility Issues:
  - No keyboard-friendly interaction hints.
- Mobile Issues:
  - Simple layout, but spacing is still rigid.
- Empty State Problems: N/A

### Error Page (`error.ejs`)
- Visual Problems:
  - The page is plain and lacks product context.
- Navigation Problems:
  - Only a single text link back to home.
- Information Hierarchy Problems:
  - Error message is not surfaced with emotional reassurance.
- Accessibility Issues:
  - Minimal structure and no semantic landmarks.
- Mobile Issues:
  - Layout will render simply but lacks responsiveness cues.
- Empty State Problems: N/A

## Summary
The current application experience is functional, but it lacks a unified premium healthcare product identity. A redesign should focus on strengthening trust, simplifying navigation, clarifying hierarchy, and creating a consistent brand system for patients, doctors, administrators, and external stakeholders.