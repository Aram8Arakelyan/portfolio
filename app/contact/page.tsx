import { MailIcon } from 'lucide-react'
import type { Metadata } from 'next'

import { buttonVariants } from '@/components/ui/button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name}.`,
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-muted-foreground mt-2 max-w-prose text-pretty">
          The best way to reach me is by email. I’m also around on the platforms below.
        </p>
      </header>

      <div>
        <a href={`mailto:${site.email}`} className={cn(buttonVariants({ size: 'lg' }))}>
          <MailIcon />
          {site.email}
        </a>
      </div>

      <ul className="flex flex-col gap-2">
        {site.socials.map((social) => (
          <li key={social.href}>
            <a
              href={social.href}
              target="_blank"
              rel="me noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              {social.label}
              <span aria-hidden className="text-xs">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
