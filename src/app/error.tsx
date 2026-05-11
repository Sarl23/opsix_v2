'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Next.js Global Error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <h2 className="text-3xl font-headline font-bold text-foreground">Something went wrong!</h2>
      <p className="text-muted-foreground">{error.message || 'An unexpected error occurred.'}</p>
      <Button
        onClick={() => reset()}
        className="rounded-full px-8"
      >
        Try again
      </Button>
    </div>
  )
}
