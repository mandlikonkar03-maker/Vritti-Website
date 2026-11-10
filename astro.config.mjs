// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Pages are pre-rendered to static HTML. Only /api/* routes run on the server.
// To deploy on Vercel or Netlify instead of a Node server, swap this adapter
// for @astrojs/vercel or @astrojs/netlify (see README).
export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'ignore',
});
