# ARTIC Style Guide

## Brand Fundamentals
- Tone: Calm, precise, confident.
- Personality: Modern clinical intelligence.
- Voice: Clear, helpful, professional.

## Color Tokens
| Token | Purpose | Example |
|---|---|---|
| `--color-primary` | Primary brand color | #0B4D91 |
| `--color-secondary` | Success / action | #1FA97B |
| `--color-accent` | Highlights / links | #36D7F1 |
| `--color-surface` | Page background | #FFFFFF |
| `--color-surface-alt` | Cards / panels | #F6F8FB |
| `--color-border` | Dividers / borders | #E3E8EF |
| `--color-text` | Primary text | #111827 |
| `--color-muted` | Secondary text | #5B6776 |
| `--color-danger` | Error / critical | #DC3F3F |
| `--color-warning` | Warning / caution | #F59E0B |
| `--color-info` | Informational status | #1366D6 |

## Typography
### Font stack
- `font-family: 'Inter', 'Plus Jakarta Sans', system-ui, sans-serif;`

### Heading scale
- `h1`: 2.5rem / 40px
- `h2`: 2rem / 32px
- `h3`: 1.5rem / 24px
- `h4`: 1.25rem / 20px
- `body`: 1rem / 16px
- `small`: 0.875rem / 14px

### Text usage
- Headings: bold or semibold.
- Body: regular weight.
- Labels: uppercase small caps for section labels.

## Spacing
- `space-1`: 0.5rem
- `space-2`: 1rem
- `space-3`: 1.5rem
- `space-4`: 2rem
- `space-5`: 3rem

## Elevation
- Surface: `box-shadow: 0 18px 35px rgba(15, 23, 42, 0.05)`
- Elevated: `0 24px 45px rgba(15, 23, 42, 0.1)`
- Focus: `0 0 0 4px rgba(56, 139, 255, 0.16)`

## Border radius
- Largest: `24px` for hero panels
- Standard: `18px` for cards and containers
- Small: `12px` for buttons and inputs

## Iconography
- Use consistent line icons.
- Maintain a 24px grid.
- Use color sparingly for semantic meaning.

## Interaction states
- Hover: subtle brighten or soft lift.
- Active: stronger accent background.
- Disabled: muted border and text.
- Focus: high-contrast outline.

## Accessibility
- Contrast ratio >= 4.5:1 for body text.
- Use ARIA labels on form controls and buttons.
- Maintain a keyboard order for navigation and modals.
- Reduce motion support: prefer still transitions.

## Responsive behavior
- Desktop: `3-4 column` dashboard cards.
- Tablet: `2-column` layout.
- Mobile: single column with sticky nav.
- Sidebar collapses to icon-only on smaller screens.

## UI Patterns
### Page structure
- Header: page title + secondary action.
- Body: clear section cards, compact visual hierarchy.
- Footer: subtle brand / support links.

### Forms
- Field group spacing: `1rem` between fields.
- Label placement: top-aligned.
- Input height: `48px`.

### Tables
- Use alternate row shading.
- Sticky headers.
- Action column aligned right.

## Visual style notes
- Avoid heavy gradients; use subtle glass and soft color fills.
- Use whitespace intentionally.
- Keep text blocks short and readable.
- Use weight and color for emphasis instead of decoration.
