import { Award, Users, Calendar, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'

const stats = [
  {
    label: 'Total Points',
    value: '2,450',
    icon: TrendingUp,
    trend: '+15%',
    trendUp: true,
  },
  {
    label: 'Events Attended',
    value: '12',
    icon: Calendar,
    trend: '+2',
    trendUp: true,
  },
  {
    label: 'Friends Invited',
    value: '24',
    icon: Users,
    trend: '+3',
    trendUp: true,
  },
  {
    label: 'Badges Earned',
    value: '8',
    icon: Award,
    trend: 'New',
    trendUp: true,
  },
]

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
            </div>
            <div className="rounded-full p-3 bg-primary-100">
              <stat.icon className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4">
            <span className={`text-sm ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
              {stat.trend}
            </span>
          </div>
        </Card>
      ))}
    </div>
  )
}