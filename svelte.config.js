// svelte.config.js
import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter(),
    alias: {
      "@/*": "./src/*",
    },
    prerender: {
      entries: ['*'] // kalau kamu mau prerender semua halaman yang bisa
    }
  }
};
