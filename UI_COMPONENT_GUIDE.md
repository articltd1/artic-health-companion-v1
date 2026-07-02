# UI Component Guide

This guide describes the reusable components for ARTIC Health Companion.

## Button System
### Primary Button
- Use for main actions such as `Book appointment`, `Start chat`, `Submit`.
- Strong medical blue background, white text, rounded corner.

### Secondary Button
- Use for secondary actions, navigation, or negative states.
- Soft green or subtle white outline.

### Ghost Button
- Use for tertiary actions or low-priority links.
- Transparent fill with colored border.

### Icon Button
- Circular or rounded square
- For quick actions, search, notifications, settings

## Card System
### Metric Card
- Highlight key statistics: Health Score, Upcoming Appointment, Vital Signs.
- Title, big value, small supporting label.

### Summary Card
- Use for clinical summary, AI assistant, quick actions.
- Includes icon, heading, body text, button.

### Table Card
- Use for appointment lists, patient queue, medical records.
- Wide layout with zebra rows and clear headers.

### Info Card
- Use for news, alerts, patient details.
- Contains title, caption, and action area.

## Form Components
### Input field
- Always use labels above fields.
- Support helper text and error text below the field.

### Select field
- Use full-width text selects with clear placeholders.
- Support multi-select chips for symptom input.

### Textarea
- Use for patient notes, problem descriptions, and AI prompts.
- Keep line height comfortable and use subtle border.

### Checkbox / Radio
- Use for discrete settings and filter controls.
- Large touch target.

## Navigation Components
### Sidebar
- Primary navigation container.
- Includes collapsible sections and icons.
- Shows active route state.

### Topbar
- Contains page title, search, notifications, and profile/update quick actions.

### Tabs
- Use for switching between appointment statuses and record tabs.
- Minimal underline style.

## Feedback Components
### Alert
- Use for success, warning, error, and info messages.
- Soft background with clear icon and strong headline.

### Empty State
- Use when lists are empty.
- Provide icon, explanation, and CTA.

### Loading State
- Use skeleton cards and spinner overlays.
- Keep content layout stable while data loads.

## AI Companion Components
### Chat bubble
- Distinct patient vs AI bubble styles.
- Use avatar, timestamp, and quick action pills.

### Suggested questions
- Display as pill buttons below the chat input.
- Provide fast guidance and reduce friction.

### Health card preview
- Use mini cards to show vitals or appointment summaries within the chat experience.

## Iconography
- Use simple line icons with moderate stroke weight.
- Icons should be consistent across nav, actions, and status.
- Examples: dashboard, appointment, records, chat, news, profile, settings, bell.

## Layout Components
### Grid panel
- Two-column layout for dashboard summary + detail panels.
- Use responsive stacking for tablet/mobile.

### Section header
- Use a compact header with subtitle and right-side action.
- Example: `Recent Visits` + `View all`.

### Badge
- Use for status labels such as `Active`, `Pending`, `Completed`, `Urgent`.
- Rounded pill shapes.

## Notes
- Components should be consistent with the ARTIC color palette and typography.
- Keep interactions intuitive and maintain a calm, clinical aesthetic.
- Ensure all components are usable in both light and dark modes.