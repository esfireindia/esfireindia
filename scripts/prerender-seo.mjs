import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const vite = await createServer({
  configFile: path.join(root, 'vite.config.js'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

try {
  const [{ default: App }, { getSeo, getStructuredData, seoPaths, siteOrigin }] = await Promise.all([
    vite.ssrLoadModule('/src/App.jsx'),
    vite.ssrLoadModule('/src/seo.js'),
  ]);

  for (const route of seoPaths) {
    const seo = getSeo(route);
    const markup = renderToString(createElement(MemoryRouter, { initialEntries: [route] }, createElement(App)));
    const tags = [
      `<link rel="canonical" href="${escapeHtml(seo.url)}" />`,
      '<meta name="robots" content="index,follow" />',
      '<meta property="og:type" content="website" />',
      '<meta property="og:site_name" content="Esfire India" />',
      `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
      `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
      `<meta property="og:url" content="${escapeHtml(seo.url)}" />`,
      `<meta property="og:image" content="${escapeHtml(seo.image || '')}" />`,
      '<meta name="twitter:card" content="summary_large_image" />',
      `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
      `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(seo.image || '')}" />`,
      `<script id="page-structured-data" type="application/ld+json">${JSON.stringify(getStructuredData(route)).replace(/</g, '\\u003c')}</script>`,
    ].join('\n    ');
    const html = template
      .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
      .replace(/<meta name="description"[^>]*\/>/, `<meta name="description" content="${escapeHtml(seo.description)}" />`)
      .replace('</head>', `    ${tags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    const output = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${seoPaths.map((route) => `  <url><loc>${escapeHtml(`${siteOrigin}${route === '/' ? '/' : route}`)}</loc></url>`).join('\n')}\n</urlset>\n`;
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap);
  console.log(`Prerendered ${seoPaths.length} SEO pages and sitemap.xml`);
} finally {
  await vite.close();
}
