# Vritti website

Built with [Astro](https://astro.build). Pages are plain static HTML; only the
demo-request form runs server code.

## Run locally

```bash
npm install
cp .env.example .env   # fill in where demo requests should go
npm run dev            # http://localhost:4321/technology/ekatm-erp
```

`npm run build` builds the site for Vercel.

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

- emails the request to `DEMO_REQUEST_TO` (default `enquiry@vritti.co.in`) via SMTP when `SMTP_HOST` is set
  (reply-to is the visitor, so you can answer directly), and/or
- appends it as JSON to `DEMO_REQUEST_LOG` (local development only).

With neither set, requests are printed to the server log. See `.env.example`.

## Deploying (Vercel)

1. In Vercel, **Add New → Project**, import this GitHub repository. The Astro preset is detected automatically.
2. Under **Settings → Environment Variables**, add `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS` and optionally `SMTP_FROM` / `DEMO_REQUEST_TO` (see `.env.example`).
3. Every push to `main` deploys automatically; pull requests get preview URLs.

To host on a plain Node server instead, swap `@astrojs/vercel` for `@astrojs/node` in `astro.config.mjs`.
