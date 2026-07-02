# ARTIC Frontend Track

This folder contains the Version 2 frontend application architecture for ARTIC.

## Goals
- Next.js + TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Responsive, mobile-first UI
- Dark mode and accessibility
- API-driven data layer

## Structure
- `app/` or `src/` for Next.js pages
- `components/` for reusable UI components
- `lib/` for API client and helpers
- `styles/` for Tailwind config and design tokens

## Next steps
1. Initialize Next.js app
2. Add Tailwind and shadcn/ui
3. Create shared shell and component library
4. Define API client and domain services

## Run locally
- `cd frontend`
- `npm install`
- `npm run dev`

## API connection
- Uses `NEXT_PUBLIC_API_BASE_URL` to connect to the backend API.
- Default backend url: `http://localhost:4000`

## Architecture
- `src/components/` for reusable UI components
- `src/layouts/` for role-based page shells
- `src/hooks/` for reusable React hooks
- `src/contexts/` for shared React state
- `src/providers/` for composition of providers
- `src/services/` for API and domain services
- `src/types/` for shared TypeScript models
- `src/utils/` for utility helpers
- `src/constants/` for routes and API settings

## Component Library
- `COMPONENT_LIBRARY.md` documents the shared UI primitives and how to compose them.
- `app/components/page.tsx` is a showcase route for shared components and page shells.
