import type { Activity } from '@/types/activity';
import { ActivityCard } from '@/components/activities/ActivityCard/ActivityCard';
import { useTranslation } from '@/i18n/useTranslation';
import './ActivityList.scss';

interface ActivityListProps {
  activities: Activity[];
}

export function ActivityList({ activities }: ActivityListProps) {
  const t = useTranslation();
  const upcoming = activities.filter((activity) => activity.status === 'upcoming');
  const past = activities.filter((activity) => activity.status === 'past');

  return (
    <div className="activity-list">
      <section className="activity-list__group">
        <h2 className="activity-list__heading">{t.activities.upcomingHeading}</h2>
        <div className="activity-list__items">
          {upcoming.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      <section className="activity-list__group">
        <h2 className="activity-list__heading">{t.activities.pastHeading}</h2>
        <div className="activity-list__items">
          {past.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
    </div>
  );
}
