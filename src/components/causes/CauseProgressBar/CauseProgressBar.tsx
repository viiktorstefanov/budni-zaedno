import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import { LOCALE_MAP } from '@/types/language';
import './CauseProgressBar.scss';

interface CauseProgressBarProps {
  goalAmount: number;
  raisedAmount: number;
}

export function CauseProgressBar({ goalAmount, raisedAmount }: CauseProgressBarProps) {
  const { language } = useLanguage();
  const t = useTranslation();
  const percent = Math.min(100, Math.round((raisedAmount / goalAmount) * 100));

  const currencyFormatter = new Intl.NumberFormat(LOCALE_MAP[language], {
    maximumFractionDigits: 0,
    numberingSystem: 'latn',
  });

  return (
    <div className="cause-progress">
      <div className="cause-progress__track">
        <div className="cause-progress__fill" style={{ width: `${percent}%` }} />
      </div>
      <div className="cause-progress__meta">
        <span className="cause-progress__raised">
          {currencyFormatter.format(raisedAmount)} {t.common.currency} {t.common.raisedSuffix}
        </span>
        <span className="cause-progress__goal">
          {t.common.goalPrefix} {currencyFormatter.format(goalAmount)} {t.common.currency}
        </span>
      </div>
    </div>
  );
}
