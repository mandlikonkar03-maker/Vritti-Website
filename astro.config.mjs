// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Pages are pre-rendered to static HTML. Only /api/* routes run as
// serverless functions on Vercel.
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'ignore',
});
