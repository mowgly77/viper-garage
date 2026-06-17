# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

No test runner is configured.

## Architecture

**Viper Garage** is a static marketing website for a Mexican auto shop in Querétaro. Next.js App Router with full static generation — no server-side logic, no database, no API routes, no auth.

### Data Layer (no external dependencies)

All content is hardcoded in `src/lib/`:

- `site.ts` — Single source of truth for all business data (phone, address, hours, social URLs, ratings). Changing values here propagates to the header, footer, contact page, JSON-LD schema, and OpenGraph metadata automatically.
- `services.ts` — The 6 services as a typed static array (`Service[]`). Each service has a `slug`, display copy, FAQ entries, and a Lucide icon name. `featured: true` on *Servicio Mayor* makes it the hero featured service. Add/edit/remove services here.
- `posts.ts` — Reads Markdown files from `src/content/posts/*.md` at build time using `gray-matter`. Exports `getAllPosts()` and `getPostBySlug()`.
- `markdown.ts` — Custom Markdown-to-HTML renderer (no external HTML lib). Handles headings, bold, italic, links, lists, and blockquotes.

### Content

Blog posts live in `src/content/posts/` as `.md` files with YAML front matter (`title`, `date`, `description`, `tags`). The slug is derived from the filename.

### Styling

- Tailwind CSS v4 (configured via PostCSS — no `tailwind.config.js`).
- Dark theme with custom design tokens defined in `src/app/globals.css` under `@theme`. Key tokens: `--color-viper-red` (`#e11d2e`), `--color-dark` (`#0a0a0b`), `--color-dark-card` (`#111114`).
- Fonts: **Orbitron** (headings/brand) and **Rajdhani** (body), loaded via `next/font/google` in the root layout.

### SEO

- JSON-LD `AutoRepair` schema is injected in `src/app/layout.tsx`.
- Dynamic sitemap at `src/app/sitemap.ts` — includes all service slugs and blog post slugs.
- `src/app/robots.ts` controls crawler access.
- Each page sets its own `metadata` export for title/description/OpenGraph.
