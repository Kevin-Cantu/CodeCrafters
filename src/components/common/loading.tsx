import { cn } from '@/lib/utils'
//dskdskd
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Loading({ size = 'md', className }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
          sizeClasses[size]
        )}
      />
    </div>
  )
}

export function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loading size="lg" />
    </div>
  )
}

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn('inline-block', className)}>
      <Loading size="sm" />
    </div>
  )
}