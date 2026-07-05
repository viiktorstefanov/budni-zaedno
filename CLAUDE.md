# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nonprofit foundation website for "Будни заедно" (Budni Zaedno / Awake Together), a Bulgarian children & family charity. The site is a static SPA with no backend — all content is mock data and the donation form generates a fake reference number (`BZ-{random}`) without processing real payments.

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
- `src/main.tsx` — provider tree: `LanguageProvider > ThemeProvider > BrowserRouter > App`
- `src/App.tsx` — all route definitions; wraps everything in `<ScrollToTop />` + `<Layout />`

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
│   ├── common/      # Button, Badge, SectionHeading, WaveDivider, LeafAccent, ImagePlaceholder, ScrollToTop
│   ├── icons/       # Inline SVG components (including SunIcon, MoonIcon)
│   ├── layout/      # Header, Nav, Footer, Layout, LanguageSwitcher
│   ├── home/        # Hero, FeatureRow, FeatureCard, QuoteBanner
│   ├── causes/      # CauseCard, CauseGrid, CauseProgressBar
│   ├── activities/  # ActivityCard, ActivityList
│   ├── news/        # NewsCard, NewsGrid
│   ├── about/       # TeamMemberCard
│   └── donation/    # DonationForm, AmountPresetSelector, DonationSuccess
├── context/         # ThemeContext, LanguageContext
├── data/            # Mock content (causes, activities, news, team, navigation, features, contactInfo)
├── i18n/            # ui.ts (all UI string translations), useTranslation.ts hook
├── pages/           # One folder per route, co-located with its SCSS
├── styles/          # Global SCSS: _variables, _theme, _typography, _mixins, _breakpoints, _reset, global.scss
└── types/           # TypeScript interfaces for all data models (including Language, LocalizedText)
```

**State management:**
- `ThemeContext` (`src/context/ThemeContext.tsx`) — `light`/`dark` toggle, persisted to `localStorage` under `bz-theme`, applied as `data-theme` attribute on `<html>`.
- `LanguageContext` (`src/context/LanguageContext.tsx`) — active `Language` (`'bg' | 'en' | 'ar'`), persisted under `bz-lang`, sets `<html lang>` and `dir` (RTL for Arabic).
- `DonateContext` (`src/pages/DonatePage/DonateContext.tsx`) — local to the donate flow via `useReducer`. Actions: `SET_PRESET_AMOUNT`, `SET_CUSTOM_AMOUNT`, `SET_FIELD`, `SET_CAUSE`, `SUBMIT`, `RESET`.

## i18n System

The site supports three languages: Bulgarian (`bg`, default), English (`en`), and Arabic (`ar`, RTL).

- All UI strings live in `src/i18n/ui.ts` as a `translations` record keyed by `Language`. The `UIStrings` interface defines every translatable string.
- Components consume translations via `const t = useTranslation()` (from `src/i18n/useTranslation.ts`).
- All content data (`causes`, `activities`, `news`, `team`, etc.) uses `LocalizedText` (`Record<Language, string>`) and `LocalizedList` (`Record<Language, string[]>`) from `src/types/language.ts`. Components must read the active language from context to render the correct locale field.
- To add a UI string: add it to the `UIStrings` interface in `ui.ts` and provide translations for all three locales (`bg`, `en`, `ar`).
- To add a new language: add the locale to the `Language` union in `src/types/language.ts`, extend `RTL_LANGUAGES` if needed, add a translation object in `ui.ts`, and update all data files.

## Styling Conventions

- SCSS files are co-located with their component (e.g., `Button.tsx` + `Button.scss`).
- `src/styles/global.scss` is the single global import (loaded in `main.tsx`); it pulls in `_reset`, `_theme`, variables, typography, and mixins.
- Themeable colors use CSS custom properties defined in `src/styles/_theme.scss`: `--color-bg`, `--color-bg-alt`, `--color-text`, `--color-text-muted`, `--color-border`, `--shadow-card`, `--shadow-card-hover`. Override these for dark mode via `:root[data-theme='dark']`.
- Static design tokens live in `src/styles/_variables.scss`: brand colors (purple `#5b2a86`, pink `#e23f6d`, orange `#e8792a`), spacing scale (4–96px), border-radius, shadows.
- Fonts: Poppins (headings), Nunito Sans (body), Marck Script (accents) — loaded via Google Fonts with Cyrillic subset.
- Reusable SCSS mixins in `_mixins.scss`: `container`, `pill-button`, `heading-font`.
- Breakpoints defined in `_breakpoints.scss` — use these mixins for responsive design.
- RTL: `global.scss` applies `letter-spacing: normal !important` inside `[dir='rtl']` to prevent Arabic glyph-joining breakage. Avoid fixed letter-spacing on any element that may appear in RTL.
- The `@` alias resolves to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

## TypeScript

Strict mode is on. Unused locals and parameters are errors. All data shapes have interfaces in `src/types/` — use them rather than inline types or `any`. Key types: `Language`, `LocalizedText`, `LocalizedList` (in `language.ts`).

## Content / Data

All content is in `src/data/` as typed arrays. Every translatable field is a `LocalizedText` or `LocalizedList` object — not a plain string. To add a cause, activity, news article, etc., add an entry to the relevant data file with values for all three languages.
