import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { glob } from 'glob';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Path project
const __dirname = dirname(fileURLToPath(import.meta.url));

// Domain website kamu
const domain = 'https://synchronizefest.asyncawait.my.id/';

// Cari semua file +page.svelte atau +page.js di src/routes
const files = glob.sync('src/routes/**/+page.{svelte,js,ts}', {
  nodir: true
});

// Ubah jadi URL path
const urls = files.map(file => {
  // hapus `src/routes` dan `+page.svelte`
  let path = file
    .replace('src/routes', '')
    .replace('/+page.svelte', '')
    .replace('/+page.js', '')
    .replace('/+page.ts', '');
  if (path === '/index') path = '/';
  return path || '/';
});

// Buat sitemap stream
const sitemap = new SitemapStream({ hostname: domain });

// Tulis hasil ke file di static/sitemap.xml
const writeStream = createWriteStream(resolve(__dirname, 'static/sitemap.xml'));
sitemap.pipe(writeStream);

urls.forEach(url => {
  sitemap.write({ url });
});

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ sitemap.xml generated automatically');
});
