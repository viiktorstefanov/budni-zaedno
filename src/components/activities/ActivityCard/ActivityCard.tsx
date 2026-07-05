import type { Activity } from '@/types/activity';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder/ImagePlaceholder';
import { Badge } from '@/components/common/Badge/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import { LOCALE_MAP } from '@/types/language';
import './ActivityCard.scss';

interface ActivityCardProps {
  activity: Activity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const { language } = useLanguage();
  const t = useTranslation();
  const dateFormatter = new Intl.DateTimeFormat(LOCALE_MAP[language], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    numberingSystem: 'latn',
  });

  return (
    <article className="activity-card">
      <ImagePlaceholder label={activity.title[language]} ratio="square" />
      <div className="activity-card__body">
        <div className="activity-card__meta">
          <span className="activity-card__category">{activity.category[language]}</span>
          <Badge tone={activity.status}>
            {activity.status === 'upcoming' ? t.common.statusUpcoming : t.common.statusPast}
          </Badge>
        </div>
        <h3 className="activity-card__title">{activity.title[language]}</h3>
        <p className="activity-card__description">{activity.description[language]}</p>
        <div className="activity-card__footer">
          <span>{dateFormatter.format(new Date(activity.date))}</span>
          <span>{activity.location[language]}</span>
        </div>
      </div>
    </article>
  );
}
