// @ts-check
import { defineConfig } from 'astro/config';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://adbahardz.github.io',
  base: isDev ? '/' : '/verone-web',
});
