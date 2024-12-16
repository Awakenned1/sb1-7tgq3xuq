import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export const CTASection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of young voters who are already making their voices heard.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="animate-slide-up shadow-lg hover:shadow-xl"
            as={Link} 
            to="/signup"
          >
            Join VoteConnect Today
          </Button>
        </div>
      </Container>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 opacity-50"></div>
    </section>
  );
};