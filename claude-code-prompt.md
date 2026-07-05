# Prompt for Claude Code

Copy the block below, fill in the bracketed `[...]` parts, and paste it into Claude Code along with your logo PNG and design JPEG.

---

## Project overview

I want you to build a **React + TypeScript** application called **Будни заедно**.

**What it does:** [1-2 sentences describing the app's purpose and core functionality]

**Target users:** [who will use this app]

**Key features (in priority order):**
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]
4. [Add more as needed]

## Design assets

I'm providing two files:
- `logo.png` — the app logo. Use it in the header/nav and favicon.
- `design.jpeg` — a reference screenshot/mockup of the intended look and feel.

Please:
- Match the **layout, spacing, color palette, and typography** shown in `design.jpeg` as closely as possible.
- Extract the dominant colors from the design to build a Tailwind/CSS theme (primary, secondary, background, accent, text colors).
- Use the logo exactly as provided — do not recolor or redraw it.
- If any part of the UI isn't covered by the mockup, design something that stays visually consistent with it.

## Tech stack

- React (latest stable) + TypeScript
- Vite
- Styling: SCSS
- Routing: React Router
- State management: React Context
- No backend for now — use **mock/static data** (local JSON or in-memory arrays) so the UI is fully functional and demoable without an API.
-later application will be deployed using firebase 

## Structure & code quality expectations

- Organize code with a clear folder structure: `components/`, `pages/`, `types/`, `data/` (for mock data), `assets/`.
- Use TypeScript types/interfaces for all props and data models — no `any`.
- Make components reusable and reasonably small/focused.
- Responsive design: should look good on both desktop and mobile.
- Add basic accessibility (semantic HTML, alt text, labels).
- Include a short `README.md` explaining how to install and run the project.

## Deliverable

A working app I can run locally with `npm install && npm run dev` (or equivalent), matching the provided design as closely as possible, using the logo, and using mock data for all dynamic content.

---

**Before you start, ask me any clarifying questions if something about the design, features, or scope is unclear.**
