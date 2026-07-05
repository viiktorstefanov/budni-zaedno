import { causes } from '@/data/causes';
import { Button } from '@/components/common/Button/Button';
import { HeartIcon } from '@/components/icons/HeartIcon';
import { useDonateContext } from '@/pages/DonatePage/DonateContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import './DonationSuccess.scss';

export function DonationSuccess() {
  const { state, dispatch } = useDonateContext();
  const { language } = useLanguage();
  const t = useTranslation();
  const submission = state.submission;

  if (!submission) return null;

  const cause = causes.find((item) => item.id === submission.causeId);

  return (
    <div className="donation-success" role="status">
      <div className="donation-success__icon">
        <HeartIcon />
      </div>
      <h2>
        {t.donate.successGreetingPrefix}, {submission.donorName}!
      </h2>
      <p className="donation-success__amount">
        {t.donate.successAmountPrefix} {submission.amount} {t.donate.successAmountSuffix}
      </p>
      {cause && (
        <p className="donation-success__cause">
          {t.donate.successCausePrefix} {cause.title[language]}
        </p>
      )}
      <p className="donation-success__reference">
        {t.donate.successReferencePrefix} {submission.referenceId}
      </p>
      <p className="donation-success__note">
        {t.donate.successNotePrefix} {submission.donorEmail}. {t.donate.successNoteSuffix}
      </p>
      <Button onClick={() => dispatch({ type: 'RESET' })} type="button">
        {t.donate.newDonationCta}
      </Button>
    </div>
  );
}
