import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eshannaik.github.io',
  base: '/technology_leader_portfolio',
  vite: { plugins: [tailwindcss()] },
});
