# Harvey Delaney Portfolio

This repository contains the refreshed portfolio site for https://www.harveydelaney.com.

The codebase is focused on the live homepage experience, its content, and the supporting site metadata.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Sass modules

## Development

Install dependencies and start the local dev server:

```bash
npm install
npm run dev
```

The main scripts are:

```bash
npm run build
npm run lint
npm run test
npm run typecheck
```

## Project Structure

- `app/`: app router entrypoints, layout, robots, and sitemap
- `components/site/`: homepage implementation and styling
- `components/ui/`: shared icons and theme toggle
- `data/portfolio-content.ts`: site content used by the homepage
- `public/images/`: portfolio imagery and project assets

## Editing Content

Most copy, links, projects, writing entries, and contact details live in `data/portfolio-content.ts`.

Site-wide metadata and crawl settings live in:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`

## Notes

- Theme preference is stored in `localStorage` under `harvey-portfolio-theme`.
- The homepage styling is concentrated in `components/site/homepage.module.scss` and `app/globals.scss`.