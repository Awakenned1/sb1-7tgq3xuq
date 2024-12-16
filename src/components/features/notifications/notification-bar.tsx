import { useNotifications } from '@/hooks/use-notifications'
import { Alert } from '@/components/ui/alert'
import { X } from 'lucide-react'

export const NotificationBar = () => {
  const { notifications, dismissNotification } = useNotifications()

  return (
    <div className="fixed top-0 right-0 p-4 space-y-2 max-w-sm z-50">
      {notifications.map((notification) => (
        <Alert
          key={notification.id}
          variant={notification.type}
          className="animate-slide-left"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{notification.title}</h4>
              <p className="text-sm">{notification.message}</p>
            </div>
            <button
              onClick={() => dismissNotification(notification.id)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </Alert>
      ))}
    </div>
  )
}