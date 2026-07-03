import type { MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

// Dual themes: each token gets `--shiki-light` / `--shiki-dark` CSS vars,
// which globals.css consumes to switch colors with the `.dark` class.
const prettyCodeOptions: PrettyCodeOptions = {
  theme: { light: 'github-light', dark: 'github-dark' },
  keepBackground: false,
  defaultLang: 'plaintext',
}

// These plugins run in our own Node/RSC code at build time — NOT through
// Turbopack's Rust MDX loader — so object-based plugin options work normally.
export const mdxOptions: MDXRemoteOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, prettyCodeOptions],
      [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['no-underline'] } }],
    ],
  },
}
