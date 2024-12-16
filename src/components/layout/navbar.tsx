import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary-600">
            VoteConnect
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" as={Link} to="/login">
              Login
            </Button>
            <Button as={Link} to="/signup">
              Sign Up
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  )
}