import { ArrowRightIcon, SendIcon } from 'lucide-react'
import Link from 'next/link'

import { PostCard } from '@/components/post-card'
import { ProjectCard } from '@/components/project-card'
import { buttonVariants } from '@/components/ui/button'
import { getAllPosts } from '@/lib/posts'
import { channel, projects, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export default async function HomePage() {
  const latestPosts = (await getAllPosts()).slice(0, 3)
  const featured = projects.filter((project) => project.featured)

  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight text-balance">{site.name}</h1>
        <p className="text-muted-foreground text-lg">{site.role}</p>
        <p className="max-w-prose leading-relaxed text-pretty">{site.description}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <Link href="/projects" className={cn(buttonVariants({ size: 'lg' }))}>
            View projects
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
            Get in touch
          </Link>
        </div>
      </section>

      <section className="border-border bg-muted/30 rounded-xl border p-6">
        <h2 className="text-muted-foreground text-sm font-medium">Now</h2>
        <p className="mt-2 leading-relaxed text-pretty">{site.now}</p>
      </section>

      {featured.length > 0 && (
        <section>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Featured projects</h2>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground inline-flex shrink-0 items-center gap-1 text-sm transition-colors"
            >
              All projects
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      )}

      {latestPosts.length > 0 && (
        <section>
          <div className="mb-2 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Latest writing</h2>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground inline-flex shrink-0 items-center gap-1 text-sm transition-colors"
            >
              All posts
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <div className="divide-border divide-y">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      <section className="border-border bg-muted/30 rounded-xl border p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-medium">{channel.name}</h2>
            <p className="text-muted-foreground mt-1 max-w-prose text-sm text-pretty">
              {channel.description}
            </p>
          </div>
          <a
            href={channel.url}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: 'lg' }), 'shrink-0')}
          >
            <SendIcon />
            Join on Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
