import { promises as fs } from 'node:fs'
import path from 'node:path'

import { getFrontmatter } from 'next-mdx-remote-client/utils'

import type { Post, PostFrontmatter } from '@/types/post'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

async function readPost(slug: string): Promise<Post | null> {
  try {
    const raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.mdx`), 'utf8')
    const { frontmatter, strippedSource } = getFrontmatter<PostFrontmatter>(raw)
    return {
      slug,
      frontmatter,
      content: strippedSource,
      readingTime: estimateReadingTime(strippedSource),
    }
  } catch {
    // Missing or unreadable file — treat as "no such post".
    return null
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR)
    return files.filter((file) => file.endsWith('.mdx')).map((file) => file.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  return readPost(slug)
}

export async function getAllPosts({ includeDrafts = false } = {}): Promise<Post[]> {
  const slugs = await getPostSlugs()
  const posts = (await Promise.all(slugs.map(readPost))).filter(
    (post): post is Post => post !== null,
  )

  return posts
    .filter((post) => includeDrafts || !post.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}
