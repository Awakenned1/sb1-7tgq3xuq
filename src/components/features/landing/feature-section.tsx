import { Users, Calendar, Award, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';

const features = [
  {
    icon: <Users className="h-8 w-8 text-primary-600" />,
    title: 'Community Driven',
    description: 'Connect with like-minded individuals and make a difference together.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary-600" />,
    title: 'Organized Events',
    description: 'Join and create local events to boost voter engagement.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary-600" />,
    title: 'Earn Rewards',
    description: 'Get recognized for your civic engagement with points and badges.',
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary-600" />,
    title: 'Social Impact',
    description: 'Share your achievements and inspire others to participate.',
  },
];

export const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose VoteConnect?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make civic engagement accessible, rewarding, and fun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};