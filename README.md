# lawmaluki — Portfolio

<img width="1440" height="779" alt="Portfolio homepage" src="https://github.com/user-attachments/assets/47776914-b7f3-47cf-ab78-f2e2dd3745b3" />

Personal portfolio of Lawrence Maluki, a product designer who designs and builds digital products end-to-end.

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-themes

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
app/
  page.tsx               Homepage (hero + projects)
  projects/[slug]/       Case study pages, statically generated from config
  terms/                 Terms page
  sitemap.ts             Sitemap built from site URL and project slugs
components/
  sections/              Hero, Projects, Testimonials
  layouts/               Header, Footer, MainLayout
config/index.ts          All site content: projects, testimonials, site metadata, contact links
```

## Editing content

Everything lives in [`config/index.ts`](config/index.ts).

- **Case study**: add a `Project` with `category: 'Project'`, a unique `slug`, and the page body as an HTML string in `description`. It is published at `/projects/<slug>` and added to the sitemap.
- **Spotlight**: add an entry with `category: 'Spotlight'` and an image URL in `link` (other fields can be empty).
- **Reading**: add an entry with `category: 'Reading'`, a `title`, and the article `link`.
- **Site name, URL, SEO and contact links**: edit `site`, `EMAIL`, `SCHEDULE_URL`, `DRIBBLE_URL` and `FIGMA_URL`.
