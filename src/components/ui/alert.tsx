import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  className?: string
  children: React.ReactNode
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg p-4 border',
          {
            'bg-blue-50 border-blue-200 text-blue-800': variant === 'info',
            'bg-green-50 border-green-200 text-green-800': variant === 'success',
            'bg-yellow-50 border-yellow-200 text-yellow-800': variant === 'warning',
            'bg-red-50 border-red-200 text-red-800': variant === 'error',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)