#!/usr/bin/env node
// Generates one static HTML per post locale at /p/{slug}.{lang}.html
// so that social-media scrapers (LinkedIn, Facebook, Twitter, WhatsApp, …)
// find post-specific Open Graph / Twitter meta tags when crawling the
// shared URL. The SPA route /post.html?slug=… is kept for back-compat.

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const POSTS_DIR = join(ROOT, 'posts');
const OUT_DIR = join(ROOT, 'p');
const TEMPLATE_PATH = join(ROOT, 'post.html');

const SITE = 'https://celiaagoncalves.github.io';
const DEFAULT_IMAGE = `${SITE}/images/blog-thumbnail.png`;
const DEFAULT_IMAGE_ALT = 'Blog · Célia Gonçalves';
const DEFAULT_SUMMARY = {
  en: 'Notes on product ownership, software quality, and mission-critical systems.',
  pt: 'Notas sobre product ownership, qualidade de software e sistemas de missão crítica.',
};

function parseFrontmatter(text) {
  const fm = {};
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { fm, body: text };
  m[1].split('\n').forEach((line) => {
    if (/^\s*-\s/.test(line)) return;
    const i = line.indexOf(':');
    if (i === -1) return;
    fm[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '');
  });
  return { fm, body: m[2] };
}

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildHead({ pageTitle, summary, canonical, lang }) {
  const ogLocale = lang === 'pt' ? 'pt_PT' : 'en_GB';
  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeAttr(pageTitle)}</title>
    <meta name="description" content="${escapeAttr(summary)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:title" content="${escapeAttr(pageTitle)}">
    <meta property="og:description" content="${escapeAttr(summary)}">
    <meta property="og:image" content="${DEFAULT_IMAGE}">
    <meta property="og:image:alt" content="${escapeAttr(DEFAULT_IMAGE_ALT)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:type" content="article">
    <meta property="og:locale" content="${ogLocale}">
    <meta property="og:site_name" content="Célia Gonçalves">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeAttr(pageTitle)}">
    <meta name="twitter:description" content="${escapeAttr(summary)}">
    <meta name="twitter:image" content="${DEFAULT_IMAGE}">
    <meta name="twitter:image:alt" content="${escapeAttr(DEFAULT_IMAGE_ALT)}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/portfolio.css">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">`;
}

function rewriteRelativePaths(html) {
  return html
    .replace(/href="(css|images)\//g, 'href="/$1/')
    .replace(/src="(css|images|js)\//g, 'src="/$1/')
    .replace(/href="favicon\.svg"/g, 'href="/favicon.svg"')
    .replace(/href="index\.html(#[^"]*)?"/g, (_m, hash = '') => `href="/index.html${hash}"`)
    .replace(/href="blog\.html"/g, 'href="/blog.html"');
}

async function main() {
  if (!existsSync(POSTS_DIR)) {
    console.log('No posts/ directory — skipping pre-render.');
    return;
  }

  // Layout: posts/{slug}/{en,pt}.md — folders starting with `_` are skipped
  // (e.g. _template, drafts).
  const entries = await readdir(POSTS_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith('_'))
    .map((e) => e.name);

  if (!slugs.length) {
    console.log('No posts to pre-render.');
    return;
  }

  // Wipe & recreate /p/ so removed posts don't linger in the deploy artifact.
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const template = await readFile(TEMPLATE_PATH, 'utf8');

  let count = 0;
  for (const slug of slugs) {
    for (const lang of ['en', 'pt']) {
      const mdPath = join(POSTS_DIR, slug, `${lang}.md`);
      if (!existsSync(mdPath)) continue;

      const text = await readFile(mdPath, 'utf8');
      const { fm } = parseFrontmatter(text);

      const title = fm.title || slug;
      const summary = fm.summary || DEFAULT_SUMMARY[lang];
      const pageTitle = `${title} · Célia Gonçalves`;
      const canonical = `${SITE}/p/${slug}.${lang}.html`;

      const head = buildHead({ pageTitle, summary, canonical, lang });

      let html = template.replace(
        /<head>[\s\S]*?<\/head>/,
        `<head>${head}\n</head>`
      );

      html = html.replace(
        /<html lang="[^"]*">/,
        `<html lang="${lang}">`
      );

      html = html.replace(
        /<body data-page="post">/,
        `<body data-page="post" data-slug="${escapeAttr(slug)}" data-lang="${lang}">`
      );

      html = rewriteRelativePaths(html);

      const outPath = join(OUT_DIR, `${slug}.${lang}.html`);
      await writeFile(outPath, html, 'utf8');
      count++;
    }
  }

  console.log(`Pre-rendered ${count} post page(s) to /p/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
