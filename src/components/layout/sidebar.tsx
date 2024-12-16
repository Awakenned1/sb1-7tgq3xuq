import { Link } from 'react-router-dom'
import { Home, Calendar, Award, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Events', icon: Calendar, href: '/events' },
  { name: 'Leaderboard', icon: Award, href: '/leaderboard' },
  { name: 'Community', icon: Users, href: '/community' },
]

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn('w-64 bg-white border-r border-gray-200 p-4', className)}>
      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center px-4 py-2 text-gray-600 rounded-md hover:bg-gray-50"
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}