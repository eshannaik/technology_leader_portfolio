# Technology Leader Portfolio

A personal portfolio built with Astro, TypeScript and Tailwind CSS. Designed to position its owner around technology leadership, enterprise architecture, data platforms and business outcomes.

## Stack
- Astro (static-first site framework)
- TypeScript
- Tailwind CSS v4
- Markdown for future articles
- GitHub for source control
- Azure Static Web Apps for hosting (deployment phase)

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Validation and production build

```bash
npm run check
npm run build
npm run preview
```

## Before publishing
1. Replace the placeholder name, biography, links and experience in `src/data/site.ts`.
2. Replace project descriptions in `src/data/projects.ts` with accurate, non-confidential case studies.
3. Add an approved resume PDF to `public/` if desired.
4. Replace `https://example.com` in `astro.config.mjs` after choosing a domain.
5. Configure Azure Static Web Apps in Phase 3.

## Project structure

```text
src/
  components/       Reusable navigation, footer and content components
  content/insights/ Markdown articles (future)
  data/             Site identity and project content
  layouts/          Shared page shell and metadata
  pages/            Route-level pages
  styles/           Global design tokens and styles
public/             Static assets, resume and favicon
```
