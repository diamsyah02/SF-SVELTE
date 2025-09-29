// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: '200.html' // optional, hanya jika pakai CSR fallback
    }),
	alias: {
		"@/*": "./src/*",
	},
    prerender: {
      entries: ['*'] // atau sesuai kebutuhan
    }
  }
};
