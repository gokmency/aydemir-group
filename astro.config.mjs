import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.durmusaydemirinsaat.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  build: { format: 'directory' }
});
