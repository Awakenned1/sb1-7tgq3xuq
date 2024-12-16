import { EventForm } from '@/components/features/events/event-form'
import { EventList } from '@/components/features/events/event-list'
import { Container } from '@/components/ui/container'

export const EventsPage = () => {
  return (
    <Container>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Event Management</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EventList />
        </div>
        <div>
          <EventForm />
        </div>
      </div>
    </Container>
  )
}