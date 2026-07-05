import { HeartIcon } from '@/components/icons/HeartIcon';
import { useTranslation } from '@/i18n/useTranslation';
import './QuoteBanner.scss';

export function QuoteBanner() {
  const t = useTranslation();

  return (
    <section className="quote-banner">
      <div className="container quote-banner__inner">
        <p className="quote-banner__text">{t.home.quote}</p>
        <HeartIcon className="quote-banner__icon" />
      </div>
    </section>
  );
}
