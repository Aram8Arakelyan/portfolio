# Portfolio

My personal website and blog — a fast, statically-generated site built with
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui,
with a file-based MDX blog.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

| Script              | Purpose                    |
| ------------------- | -------------------------- |
| `npm run build`     | Production build           |
| `npm run start`     | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | `tsc --noEmit`             |
| `npm run format`    | Prettier                   |

## Editing content

All personal content — name, role, bio, socials, projects, skills, experience,
education — lives in [`lib/site.ts`](lib/site.ts). Edit it there; every page reads
from it.

## Writing a blog post

Drop an `.mdx` file into [`content/posts/`](content/posts) with frontmatter:

```mdx
---
title: 'My post title'
description: 'One-line summary used in the listing and SEO.'
date: '2026-07-03'
tags: ['react', 'next.js']
---

Your content here. Code blocks are syntax-highlighted at build time.
```

Set `draft: true` in the frontmatter to keep a post out of the index, sitemap, and RSS feed.

## Stack

- **Next.js 16** (App Router, React Server Components) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **shadcn/ui** (Base UI) · **next-themes** (light/dark)
- **MDX** via `next-mdx-remote-client` · **Shiki** syntax highlighting
- RSS feed, `sitemap.xml`, `robots.txt`, and a dynamic OpenGraph image

## Deployment

Optimized for [Vercel](https://vercel.com) (zero-config for Next.js). Set the
production domain in `site.url` before deploying.
