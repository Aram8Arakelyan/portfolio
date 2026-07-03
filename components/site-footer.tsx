import Link from 'next/link'

import { site } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-border border-t">
      <div className="text-muted-foreground mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <nav className="flex flex-wrap items-center gap-4">
          {site.socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="me noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {social.label}
            </a>
          ))}
          <Link href="/feed.xml" className="hover:text-foreground transition-colors">
            RSS
          </Link>
        </nav>
      </div>
    </footer>
  )
}
