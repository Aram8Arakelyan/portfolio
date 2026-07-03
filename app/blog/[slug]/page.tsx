import { ArrowLeftIcon } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote-client/rsc'

import { mdxComponents } from '@/components/mdx-components'
import { mdxOptions } from '@/lib/mdx-options'
import { getAllPosts, getPost } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

// Only real posts are prerendered; any other slug 404s.
export const dynamicParams = false

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post || post.frontmatter.draft) return {}

  const { title, description, date, tags } = post.frontmatter
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: 'article',
      title,
      description,
      url: `/blog/${slug}`,
      publishedTime: new Date(date).toISOString(),
      tags,
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post || post.frontmatter.draft) notFound()

  const { frontmatter, content, readingTime } = post

  return (
    <article>
      <Link
        href="/blog"
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
      >
        <ArrowLeftIcon className="size-4" />
        Blog
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight text-balance">{frontmatter.title}</h1>
        <div className="text-muted-foreground mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          <span aria-hidden>·</span>
          <span>{readingTime}</span>
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert prose-headings:scroll-mt-20 prose-headings:font-semibold prose-a:font-medium prose-img:rounded-lg mt-8 max-w-none">
        <MDXRemote source={content} options={mdxOptions} components={mdxComponents} />
      </div>
    </article>
  )
}
