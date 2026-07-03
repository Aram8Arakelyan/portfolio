import type { Metadata } from 'next'

import { ProjectCard } from '@/components/project-card'
import { projects, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description: `Things ${site.name} has built.`,
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground mt-2">
          A selection of things I’ve built and worked on.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
