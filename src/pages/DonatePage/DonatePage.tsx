import { useSearchParams } from 'react-router-dom';
import { SectionHeading } from '@/components/common/SectionHeading/SectionHeading';
import { DonationForm } from '@/components/donation/DonationForm/DonationForm';
import { DonationSuccess } from '@/components/donation/DonationSuccess/DonationSuccess';
import { causes } from '@/data/causes';
import { useTranslation } from '@/i18n/useTranslation';
import { DonateProvider, useDonateContext } from './DonateContext';
import './DonatePage.scss';

function DonatePageContent() {
  const { state } = useDonateContext();
  const t = useTranslation();

  return (
    <div className="donate-page">
      <div className="container donate-page__inner">
        <SectionHeading
          eyebrow={t.donate.eyebrow}
          title={state.step === 'form' ? t.donate.titleForm : t.donate.titleSuccess}
          subtitle={state.step === 'form' ? t.donate.subtitle : undefined}
        />
        {state.step === 'form' ? <DonationForm /> : <DonationSuccess />}
      </div>
    </div>
  );
}

export function DonatePage() {
  const [searchParams] = useSearchParams();
  const causeParam = searchParams.get('cause');
  const initialCauseId = causes.some((cause) => cause.id === causeParam) ? causeParam : null;

  return (
    <DonateProvider initialCauseId={initialCauseId}>
      <DonatePageContent />
    </DonateProvider>
  );
}
