import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { NotificationBar } from '../features/notifications/notification-bar'
import { useNotifications } from '@/hooks/use-notifications'

export const Layout = () => {
  const { notifications } = useNotifications()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar className="hidden md:block" />
        <main className="flex-1 p-4 md:p-8">
          {notifications.length > 0 && <NotificationBar />}
          <Outlet />
        </main>
      </div>
    </div>
  )
}