import { HeroSection } from '@/components/features/landing/hero-section';
import { FeatureSection } from '@/components/features/landing/feature-section';
import { CTASection } from '@/components/features/landing/cta-section';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <CTASection />
    </div>
  );
};