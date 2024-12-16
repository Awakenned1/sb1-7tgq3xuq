import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { DatePicker } from '@/components/ui/date-picker'
import { LocationPicker } from '@/components/ui/location-picker'

export const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: null,
    location: null,
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Create Voter Engagement Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Date & Time</label>
          <DatePicker
            selected={formData.date}
            onChange={(date) => setFormData({ ...formData, date })}
            className="mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <LocationPicker
            onSelect={(location) => setFormData({ ...formData, location })}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1"
          />
        </div>

        <Button type="submit" className="w-full">
          Create Event
        </Button>
      </form>
    </Card>
  )
}