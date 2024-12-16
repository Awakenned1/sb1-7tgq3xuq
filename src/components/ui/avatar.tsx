import { cn } from '@/lib/utils'

interface AvatarProps {
  src: string
  alt: string
  className?: string
}

export const Avatar = ({ src, alt, className }: AvatarProps) => {
  return (
    <div className={cn('relative w-10 h-10 rounded-full overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = '/avatars/default.jpg'
        }}
      />
    </div>
  )
}