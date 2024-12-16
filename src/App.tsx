import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/landing-page'
import { Dashboard } from './pages/dashboard'
import { EventsPage } from './pages/events-page'
import { Layout } from './components/layout'
import { AuthProvider } from './contexts/auth-context'
import { NotificationProvider } from './contexts/notification-context'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<EventsPage />} />
          </Route>
        </Routes>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App