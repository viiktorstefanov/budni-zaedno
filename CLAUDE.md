# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nonprofit foundation website for "Будни заедно" (Awake Together), a Bulgarian children & family charity. The site is a static SPA with no backend — all content is mock data and the donation form generates a fake reference number (`BZ-{random}`) without processing real payments.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Type-check (tsc -b) then bundle → dist/
npm run preview    # Serve the production build locally
npm run lint       # Run ESLint across all files
npm run deploy     # Build + firebase deploy --only hosting
```

There are no tests.

## Architecture

**Stack:** React 19, TypeScript 5.6, Vite 5.4, React Router DOM v6, SCSS (no CSS-in-JS, no Tailwind), Firebase Hosting.

**Entry points:**
- `src/main.tsx` — mounts React with `BrowserRouter`
- `src/App.tsx` — all route definitions

**Routes:**
```
/                   → HomePage
/about              → AboutPage
/causes             → CausesPage
/causes/:causeId    → CauseDetailPage
/activities         → ActivitiesPage
/news               → NewsPage
/news/:articleId    → NewsDetailPage
/contacts           → ContactsPage
/donate?cause=<id>  → DonatePage (optional cause preselection)
*                   → NotFoundPage
```

**Directory structure:**
```
src/
├── components/
│   ├── common/      # Button, Badge, SectionHeading, WaveDivider, LeafAccent, ImagePlaceholder
│   ├── icons/       # Inline SVG components
│   ├── layout/      # Header, Nav, Footer, Layout (root shell)
│   ├── home/        # Hero, FeatureRow, FeatureCard, QuoteBanner
│   ├── causes/      # CauseCard, CauseGrid, CauseProgressBar
│   ├── activities/  # ActivityCard, ActivityList
│   ├── news/        # NewsCard, NewsGrid
│   ├── about/       # TeamMemberCard
│   └── donation/    # DonationForm, AmountPresetSelector, DonationSuccess
├── data/            # Mock content (causes, activities, news, team, navigation, features)
├── pages/           # One folder per route, co-located with its SCSS
├── styles/          # Global SCSS: _variables, _typography, _mixins, _breakpoints, _reset
└── types/           # TypeScript interfaces for all data models
```

**State management:** React Context + `useReducer`, used only for the donation flow (`src/pages/DonatePage/DonateContext.tsx`). Actions: `SET_PRESET_AMOUNT`, `SET_CUSTOM_AMOUNT`, `SET_FIELD`, `SET_CAUSE`, `SUBMIT`, `RESET`.

## Styling Conventions

- SCSS files are co-located with their component (e.g., `Button.tsx` + `Button.scss`)
- Global design tokens live in `src/styles/_variables.scss`: color palette (purple `#5b2a86`, pink `#e23f6d`, orange `#e8792a`), spacing scale (4–96px), border-radius, shadows
- Fonts: Poppins (headings), Nunito Sans (body), Marck Script (accents) — all loaded via Google Fonts with Cyrillic subset
- Reusable SCSS mixins in `_mixins.scss`: `container`, `pill-button`, `heading-font`
- Breakpoints defined in `_breakpoints.scss` — use these mixins for responsive design
- The `@` alias resolves to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`)

## TypeScript

Strict mode is on. Unused locals and parameters are errors. All data shapes have interfaces in `src/types/` — use them rather than inline types or `any`.

## Content / Data

All content is in `src/data/` as typed arrays. To add a cause, activity, news article, etc., add an entry to the relevant data file — no backend or API calls involved.
