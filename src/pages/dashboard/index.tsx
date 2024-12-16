import { StatsGrid } from '@/components/features/dashboard/stats-grid'
import { Leaderboard } from '@/components/features/dashboard/leaderboard'
import { BadgesDisplay } from '@/components/features/dashboard/badges-display'
import { InviteFriends } from '@/components/features/dashboard/invite-friends'
import { Container } from '@/components/ui/container'

export const Dashboard = () => {
  return (
    <Container>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Impact Dashboard</h1>
      <div className="space-y-6">
        <StatsGrid />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Leaderboard />
          </div>
          <div className="space-y-6">
            <BadgesDisplay />
            <InviteFriends />
          </div>
        </div>
      </div>
    </Container>
  )
}