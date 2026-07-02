# Abhijeet Gadegone — Portfolio

A bold, colorful full-stack developer portfolio built with React, Vite, and React Router.

## Design
- **Palette:** deep indigo background, amber (Java) and cyan (React) accents, violet highlights.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- **Signature element:** the "stack visual" on the home page — your tech stack rendered as layered blocks (Frontend / Backend / Database / Tooling), reused as chips throughout the site.

## Run locally
```bash
npm install
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173).

## Build for production
```bash
npm run build
```
Output goes to `dist/`. Deploy that folder to Vercel, Netlify, GitHub Pages, etc.

## Editing content
All resume content lives in one place: `src/data/resumeData.js`. Update your info there and it flows to every page automatically.

## Pages
- `/` — Home / hero
- `/about` — Summary, soft skills, certifications
- `/experience` — Internship timeline
- `/projects` — Project cards
- `/skills` — Skills grouped by category
- `/education` — Degrees
- `/contact` — Contact form (opens your email client) + direct contact links
