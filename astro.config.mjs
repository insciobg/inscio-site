import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://inscio.com',
    integrations: [
          tailwind(),
        ],
});
