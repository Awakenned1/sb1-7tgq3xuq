import { Card } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'

const leaderboardData = [
  {
    rank: 1,
    name: 'Sarah Johnson',
    points: 3200,
    avatar: '/avatars/sarah.jpg',
    badge: '🏆',
  },
  {
    rank: 2,
    name: 'Michael Chen',
    points: 2900,
    avatar: '/avatars/michael.jpg',
    badge: '🥈',
  },
  // Add more mock data
]

export const Leaderboard = () => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Local Leaders</h2>
        <div className="space-y-4">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold w-6">{user.rank}</span>
                <Avatar src={user.avatar} alt={user.name} />
                <span className="font-medium">{user.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">{user.badge}</span>
                <span className="font-semibold">{user.points.toLocaleString()} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}