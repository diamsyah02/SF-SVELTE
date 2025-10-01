// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: null
    }),
    alias: {
      "@/*": "./src/*",
    },
  }
};
