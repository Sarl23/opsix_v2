import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <h2 className="text-4xl font-headline font-bold text-foreground">404 - Not Found</h2>
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>
      <Button asChild className="rounded-full px-8">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
