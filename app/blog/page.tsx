import type { Metadata } from 'next'

import { PostCard } from '@/components/post-card'
import { getAllPosts } from '@/lib/posts'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog',
  description: `Writing by ${site.name} on engineering, the web, and things worth sharing.`,
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': [{ url: '/feed.xml', title: `${site.name} — Blog` }],
    },
  },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="text-muted-foreground mt-2">
          Thoughts on engineering, the web, and what I’m learning.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet — check back soon.</p>
      ) : (
        <div className="divide-border divide-y">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
