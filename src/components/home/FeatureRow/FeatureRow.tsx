import { features } from '@/data/features';
import { FeatureCard } from '@/components/home/FeatureCard/FeatureCard';
import './FeatureRow.scss';

export function FeatureRow() {
  return (
    <section className="feature-row">
      <div className="container feature-row__grid">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
