import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { ActivityList } from '@/components/activities/ActivityList/ActivityList';
import { activities } from '@/data/activities';
import { useTranslation } from '@/i18n/useTranslation';
import './ActivitiesPage.scss';

export function ActivitiesPage() {
  const t = useTranslation();

  return (
    <div className="activities-page">
      <div className="container">
        <SectionHeading eyebrow={t.activities.eyebrow} title={t.activities.title} subtitle={t.activities.subtitle} />
        <ActivityList activities={activities} />
      </div>
    </div>
  );
}
