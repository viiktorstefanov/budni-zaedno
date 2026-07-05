import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { TeamMemberCard } from '@/components/about/TeamMemberCard/TeamMemberCard';
import { team } from '@/data/team';
import { useTranslation } from '@/i18n/useTranslation';
import './AboutPage.scss';

export function AboutPage() {
  const t = useTranslation();

  return (
    <div className="about-page">
      <section className="container about-page__intro">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
        <div className="about-page__intro-grid">
          <p>{t.about.introParagraph1}</p>
          <p>{t.about.introParagraph2}</p>
        </div>
      </section>

      <section className="container about-page__values">
        <h2>{t.about.valuesHeading}</h2>
        <ul className="about-page__values-list">
          <li>
            <strong>{t.about.value1Title}</strong> {t.about.value1Text}
          </li>
          <li>
            <strong>{t.about.value2Title}</strong> {t.about.value2Text}
          </li>
          <li>
            <strong>{t.about.value3Title}</strong> {t.about.value3Text}
          </li>
        </ul>
      </section>

      <section className="container about-page__team">
        <SectionHeading eyebrow={t.about.teamEyebrow} title={t.about.teamTitle} />
        <div className="about-page__team-grid">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
