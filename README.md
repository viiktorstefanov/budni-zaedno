# Будни заедно

A React + TypeScript website for the "Будни заедно" (Awake Together) nonprofit foundation — an informational site for a children & family charity, including causes, activities, news, and a donation flow.

## Tech stack

- React 19 + TypeScript
- Vite
- SCSS (no CSS-in-JS, no Tailwind)
- React Router (v6)
- React Context (`useReducer`) — scoped to the donation flow only

All content is **mock data** defined in `src/data/`. There is no backend, and the donation form does not process real payments — submitting it shows a mock confirmation with a generated reference number.

## Prerequisites

- Node.js 18+ (developed against Node 20)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Other scripts

```bash
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
  assets/images/    # logo.jpeg, used as-is in Header/Footer
  components/
    common/         # Button, Badge, SectionHeading, ImagePlaceholder, WaveDivider, LeafAccent
    icons/          # small inline SVG icon components
    layout/         # Header, Nav, Footer, Layout
    home/           # Hero, FeatureRow, FeatureCard, QuoteBanner
    causes/         # CauseCard, CauseGrid, CauseProgressBar
    activities/      # ActivityCard, ActivityList
    news/           # NewsCard, NewsGrid
    about/          # TeamMemberCard
    donation/       # DonationForm, AmountPresetSelector, DonationSuccess
  data/             # mock content: causes, activities, news, team, navigation, features
  pages/            # one folder per route
  styles/           # SCSS variables, typography, breakpoints, mixins, reset, global
  types/            # TypeScript interfaces for every data model
reference/          # original design mockups (design.jpeg, design-2.jpeg) — not shipped in the app
```

The `@` import alias points to `src/` (e.g. `@/data/causes`, `@/styles/variables`).

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About the foundation & team |
| `/causes` | Fundraising causes (list) |
| `/causes/:causeId` | Cause detail |
| `/activities` | Programs & events (upcoming / past) |
| `/news` | News (list) |
| `/news/:articleId` | News article detail |
| `/contacts` | Contact info + mock contact form |
| `/donate` | Donation form (supports `?cause=<id>` to preselect a cause) |

## Fonts & assets

- Headings/UI: [Poppins](https://fonts.google.com/specimen/Poppins)
- Body text: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Script accents: [Marck Script](https://fonts.google.com/specimen/Marck+Script)

All three are loaded from Google Fonts with Cyrillic subsets. Photography is mocked with a brand-gradient `ImagePlaceholder` component rather than stock images, so the app runs fully offline.

## Deploying to Firebase Hosting

The repo already includes `firebase.json` (points hosting at `dist/`, adds the SPA rewrite so deep links like `/causes/school-supplies` resolve correctly, and sets long-cache headers for hashed assets) and `.firebaserc` (points at the `budni-zaedno` project).

One-time setup:

```bash
npx firebase login       # opens a browser to sign in to your Firebase account
```

If `.firebaserc` doesn't match the project you want to deploy to, repoint it:

```bash
npx firebase use --add
```

Then deploy:

```bash
npm run deploy            # runs `npm run build` then `firebase deploy --only hosting`
```

Or step by step:

```bash
npm run build
npx firebase deploy --only hosting
```

Firebase prints the live Hosting URL when the deploy finishes.
