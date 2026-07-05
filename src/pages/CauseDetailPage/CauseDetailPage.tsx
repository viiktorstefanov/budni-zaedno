import { Link, Navigate, useParams } from 'react-router-dom';
import { causes } from '@/data/causes';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder/ImagePlaceholder';
import { Badge } from '@/components/common/Badge/Badge';
import { Button } from '@/components/common/Button/Button';
import { CauseProgressBar } from '@/components/causes/CauseProgressBar/CauseProgressBar';
import { HeartIcon } from '@/components/icons/HeartIcon';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import './CauseDetailPage.scss';

export function CauseDetailPage() {
  const { causeId } = useParams<{ causeId: string }>();
  const cause = causes.find((item) => item.id === causeId);
  const { language } = useLanguage();
  const t = useTranslation();

  if (!cause) {
    return <Navigate to="/causes" replace />;
  }

  return (
    <div className="cause-detail">
      <div className="container cause-detail__inner">
        <Link to="/causes" className="cause-detail__back">
          {t.common.backArrow} {t.causeDetail.backLink}
        </Link>

        <div className="cause-detail__layout">
          <div className="cause-detail__media">
            <ImagePlaceholder label={cause.title[language]} icon={<HeartIcon />} />
          </div>

          <div className="cause-detail__content">
            <div className="cause-detail__meta">
              <span className="cause-detail__category">{cause.category[language]}</span>
              <Badge tone={cause.status}>{cause.status === 'active' ? t.common.statusActive : t.common.statusCompleted}</Badge>
            </div>
            <h1 className="cause-detail__title">{cause.title[language]}</h1>

            {cause.description[language].map((paragraph, index) => (
              <p key={index} className="cause-detail__paragraph">
                {paragraph}
              </p>
            ))}

            <div className="cause-detail__progress">
              <CauseProgressBar goalAmount={cause.goalAmount} raisedAmount={cause.raisedAmount} />
            </div>

            {cause.status === 'active' && (
              <Button to={`/donate?cause=${cause.id}`} icon={<HeartIcon />}>
                {t.causeDetail.donateCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
