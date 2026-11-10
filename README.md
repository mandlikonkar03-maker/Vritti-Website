# Vritti website

Built with [Astro](https://astro.build). Pages are plain static HTML; only the
demo-request form runs server code.

## Run locally

```bash
npm install
cp .env.example .env   # fill in where demo requests should go
npm run dev            # http://localhost:4321/technology/ekatm-erp
```

`npm run build && npm start` runs the production server (`PORT` and `HOST` env vars).

## Where things live

| What | Where |
| --- | --- |
| Header, footer, shared layout | `src/layouts/BaseLayout.astro`, `src/components/Header.astro`, `src/components/Footer.astro` |
| Main navigation links | `src/data/site.ts` |
| Colours, fonts, buttons, spacing | `src/styles/global.css` |
| Ekatm ERP page | `src/pages/technology/ekatm-erp.astro` (layout) + `src/data/ekatm-erp.ts` (all text) |
| Reusable blocks | `src/components/` – `DemoForm`, `Faq`, `Breadcrumbs` |
| Demo form backend | `src/pages/api/demo-request.ts`, `src/lib/demo-request.ts` |
| Images | `public/images/` (cropped from the Figma export – replace with originals) |

## Adding a page

Create `src/pages/<path>.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Careers | Vritti">
  <section class="section"><div class="container">…</div></section>
</BaseLayout>
```

The URL follows the file path (`src/pages/careers.astro` → `/careers`).

## Demo request form

`POST /api/demo-request` validates the fields (name, email, location and mobile
are required), blocks simple bots (honeypot + 5 requests per 10 minutes per IP),
then:

- emails the request to `DEMO_REQUEST_TO` via SMTP when `SMTP_HOST` is set
  (reply-to is the visitor, so you can answer directly), and/or
- appends it as JSON to `DEMO_REQUEST_LOG` (Node server hosting only).

With neither set, requests are printed to the server log. See `.env.example`.

## Deploying

The project currently uses the Node adapter (any VPS, Render, Railway…).
For Vercel: `npm i @astrojs/vercel` and in `astro.config.mjs` replace
`node({ mode: 'standalone' })` with `vercel()` imported from `@astrojs/vercel`;
set the SMTP env vars in the Vercel project settings. Netlify works the same
way with `@astrojs/netlify`.
