import Link from 'next/link'

import { formatDate } from '@/lib/utils'
import type { Post } from '@/types/post'

export function PostCard({ post }: { post: Post }) {
  const { slug, frontmatter, readingTime } = post

  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block py-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="group-hover:text-foreground/70 font-medium transition-colors">
            {frontmatter.title}
          </h3>
          <time
            dateTime={frontmatter.date}
            className="text-muted-foreground shrink-0 text-sm tabular-nums"
          >
            {formatDate(frontmatter.date)}
          </time>
        </div>
        <p className="text-muted-foreground mt-1 text-sm text-pretty">{frontmatter.description}</p>
        <p className="text-muted-foreground mt-1 text-xs">{readingTime}</p>
      </Link>
    </article>
  )
}
