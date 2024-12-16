import { Card } from '@/components/ui/card'
import { Calendar, MapPin, Users } from 'lucide-react'
import { format } from 'date-fns'

const mockEvents = [
  {
    id: '1',
    name: 'Voter Registration Drive',
    date: new Date('2024-03-15'),
    location: 'Central Community Center',
    attendees: 45,
    description: 'Help register new voters in our community!',
  },
  {
    id: '2',
    name: 'Youth Voter Workshop',
    date: new Date('2024-03-20'),
    location: 'City Library',
    attendees: 30,
    description: 'Learn about the voting process and your rights.',
  },
]

export const EventList = () => {
  return (
    <div className="space-y-4">
      {mockEvents.map((event) => (
        <Card key={event.id} className="p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{format(event.date, 'PPP')}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}