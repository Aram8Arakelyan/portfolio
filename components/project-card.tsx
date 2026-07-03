import { ArrowUpRightIcon, CodeIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Project } from '@/lib/site'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="justify-between">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-pretty">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-4 text-sm">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
            >
              <ArrowUpRightIcon className="size-4" />
              Visit
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
            >
              <CodeIcon className="size-4" />
              Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
