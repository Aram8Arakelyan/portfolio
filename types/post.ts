export type PostFrontmatter = {
  /** Post title, shown as the H1 and in metadata. */
  title: string
  /** One-line summary, used for the listing and SEO description. */
  description: string
  /** Publish date as an ISO string, e.g. "2026-06-28". */
  date: string
  /** Optional topic tags. */
  tags?: string[]
  /** When true, the post is hidden from the index, sitemap, and feed. */
  draft?: boolean
}

export type Post = {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  /** Human-readable estimate, e.g. "4 min read". */
  readingTime: string
}

/** A post without its compiled body — enough for cards, the index, and feeds. */
export type PostMeta = Omit<Post, 'content'>
