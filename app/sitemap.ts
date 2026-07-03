import type { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/posts'
import { site } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = ['', '/about', '/projects', '/blog', '/contact'].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
    }),
  )

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
  }))

  return [...staticRoutes, ...postRoutes]
}
