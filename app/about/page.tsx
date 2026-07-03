import type { Metadata } from 'next'

import { Badge } from '@/components/ui/badge'
import { bio, certifications, education, experience, languages, site, skills } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name} — ${site.role}.`,
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">About</h1>
        <p className="text-muted-foreground mt-2 text-sm">
          {site.role} · {site.location}
        </p>
      </header>

      <section className="flex flex-col gap-4 leading-relaxed text-pretty">
        {bio.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </section>

      <section>
        <h2 className="text-muted-foreground mb-3 text-sm font-medium">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium">Experience</h2>
        <ol className="flex flex-col gap-6">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="flex flex-col gap-1 sm:flex-row sm:gap-6"
            >
              <span className="text-muted-foreground shrink-0 text-sm tabular-nums sm:w-44">
                {item.period}
              </span>
              <div>
                <h3 className="font-medium">
                  {item.role} · {item.company}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm text-pretty">{item.description}</p>
                {item.tech && item.tech.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-muted-foreground bg-muted rounded-md px-1.5 py-0.5 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium">Education</h2>
        <ol className="flex flex-col gap-6">
          {education.map((item) => (
            <li key={item.school} className="flex flex-col gap-1 sm:flex-row sm:gap-6">
              <span className="text-muted-foreground shrink-0 text-sm tabular-nums sm:w-44">
                {item.period}
              </span>
              <div>
                <h3 className="font-medium">{item.school}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{item.degree}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-12 sm:grid-cols-2">
        <section>
          <h2 className="text-muted-foreground mb-3 text-sm font-medium">Languages</h2>
          <ul className="flex flex-col gap-1 text-sm">
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-muted-foreground mb-3 text-sm font-medium">Certifications</h2>
          <ul className="text-muted-foreground flex flex-col gap-1 text-sm">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
