# How to add a new blog post

Each post lives in its own folder under `/posts/`, named with the slug:

```
posts/
└── YYYY-MM-DD-slug/
    ├── en.md      English version
    └── pt.md      Portuguese version (European Portuguese)
```

The folder name is the **slug** used in the URL:
`https://celiaagoncalves.github.io/p/{slug}.{lang}.html`

## Steps

1. **Copy this whole `_template/` folder** and rename it to your post's slug, e.g. `2026-06-15-titulo-do-post`.
   - Use kebab-case (lowercase, hyphen-separated).
   - Prefix with the publish date (`YYYY-MM-DD-`) — the listing sorts posts by folder name descending.
2. Edit `en.md` and `pt.md` inside that folder: keep the frontmatter format, replace title / date / summary / tags / body.
3. Commit and push to `master`. The deploy workflow regenerates `/p/{slug}.{lang}.html` and redeploys the site automatically.

## Conventions

- **European Portuguese** in `pt.md` (not Brazilian).
- Both locales should exist; if only one does, the blog listing falls back to it and shows a `PT`/`EN` badge on the card.
- `title` and `summary` from the frontmatter feed the social-media share preview (LinkedIn / Twitter / Facebook / WhatsApp). Write them with that in mind — `summary` shows up under the title.
- The Open Graph image is always the default blog thumbnail (`/images/blog-thumbnail.png`). Per-post images aren't supported yet.

## Folders starting with `_` are ignored

The blog listing and the pre-render script skip any folder under `/posts/` whose name starts with `_` (like this one). Use that prefix for drafts or other non-published material.
