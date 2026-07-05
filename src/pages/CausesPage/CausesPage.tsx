import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { CauseGrid } from '@/components/causes/CauseGrid/CauseGrid';
import { causes } from '@/data/causes';
import { useTranslation } from '@/i18n/useTranslation';
import './CausesPage.scss';

export function CausesPage() {
  const t = useTranslation();

  return (
    <div className="causes-page">
      <div className="container">
        <SectionHeading eyebrow={t.causes.eyebrow} title={t.causes.title} subtitle={t.causes.subtitle} />
        <CauseGrid causes={causes} />
      </div>
    </div>
  );
}
