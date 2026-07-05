import { Hero } from '@/components/home/Hero/Hero';
import { FeatureRow } from '@/components/home/FeatureRow/FeatureRow';
import { QuoteBanner } from '@/components/home/QuoteBanner/QuoteBanner';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeatureRow />
      <QuoteBanner />
    </>
  );
}
