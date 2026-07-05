import type { FeatureItem } from '@/types/feature';
import { useLanguage } from '@/context/LanguageContext';
import './FeatureCard.scss';

interface FeatureCardProps {
  feature: FeatureItem;
}

export function FeatureCard({ feature }: FeatureCardProps) {
  const { Icon, title, description, color } = feature;
  const { language } = useLanguage();

  return (
    <div className={`feature-card feature-card--${color}`}>
      <div className="feature-card__icon">
        <Icon />
      </div>
      <h3 className="feature-card__title">{title[language]}</h3>
      <p className="feature-card__description">{description[language]}</p>
    </div>
  );
}
