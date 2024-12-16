import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-secondary-500 text-white overflow-hidden">
      <Container className="relative z-10">
        <div className="py-24 lg:py-32">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Empowering Youth to Get the Vote Out!
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Join the movement to make every voice heard through community action and engagement.
            </p>
            <div className="space-x-4 animate-slide-up">
              <Button 
                variant="secondary" 
                size="lg" 
                className="shadow-lg hover:shadow-xl"
                as={Link} 
                to="/signup"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                as={Link} 
                to="/about"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white"></div>
    </section>
  );
};