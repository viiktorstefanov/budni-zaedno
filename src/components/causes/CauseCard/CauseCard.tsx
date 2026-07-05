import { Link } from 'react-router-dom';
import type { Cause } from '@/types/cause';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder/ImagePlaceholder';
import { Badge } from '@/components/common/Badge/Badge';
import { CauseProgressBar } from '@/components/causes/CauseProgressBar/CauseProgressBar';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import './CauseCard.scss';

interface CauseCardProps {
  cause: Cause;
}

export function CauseCard({ cause }: CauseCardProps) {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <Link to={`/causes/${cause.id}`} className="cause-card">
      <ImagePlaceholder label={cause.title[language]} />
      <div className="cause-card__body">
        <div className="cause-card__meta">
          <span className="cause-card__category">{cause.category[language]}</span>
          <Badge tone={cause.status}>{cause.status === 'active' ? t.common.statusActive : t.common.statusCompleted}</Badge>
        </div>
        <h3 className="cause-card__title">{cause.title[language]}</h3>
        <p className="cause-card__summary">{cause.summary[language]}</p>
        <CauseProgressBar goalAmount={cause.goalAmount} raisedAmount={cause.raisedAmount} />
      </div>
    </Link>
  );
}
