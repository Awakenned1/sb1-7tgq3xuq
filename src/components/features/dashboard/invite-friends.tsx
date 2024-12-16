import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users } from 'lucide-react'

export const InviteFriends = () => {
  return (
    <Card className="p-6">
      <div className="text-center">
        <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-6 h-6 text-primary-600" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Invite Friends</h2>
        <p className="text-gray-600 mb-4">
          Help grow our community by inviting your friends to join VoteConnect
        </p>
        <Button className="w-full">
          Send Invites
        </Button>
      </div>
    </Card>
  )
}