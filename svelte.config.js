// svelte.config.js
import adapter from '@sveltejs/adapter-static';

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
