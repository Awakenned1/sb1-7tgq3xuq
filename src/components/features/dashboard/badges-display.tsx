import { Card } from '@/components/ui/card'

const badges = [
  {
    id: '1',
    name: 'First Event',
    icon: '🎯',
    description: 'Attended your first voter engagement event',
  },
  {
    id: '2',
    name: 'Community Leader',
    icon: '👑',
    description: 'Organized 5 successful events',
  },
  {
    id: '3',
    name: 'Social Butterfly',
    icon: '🦋',
    description: 'Invited 10 friends to join',
  },
]

export const BadgesDisplay = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your Badges</h2>
      <div className="grid grid-cols-2 gap-4">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
          >
            <span className="text-3xl mb-2">{badge.icon}</span>
            <h3 className="font-medium text-sm text-center">{badge.name}</h3>
          </div>
        ))}
      </div>
    </Card>
  )
}