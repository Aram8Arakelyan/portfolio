import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center">
      <p className="text-muted-foreground text-sm font-medium">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted-foreground max-w-prose text-pretty">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link href="/" className={cn(buttonVariants({ variant: 'outline' }), 'mt-2')}>
        Back home
      </Link>
    </div>
  )
}
