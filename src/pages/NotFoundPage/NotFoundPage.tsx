import { Button } from '@/components/common/Button/Button';
import { useTranslation } from '@/i18n/useTranslation';
import './NotFoundPage.scss';

export function NotFoundPage() {
  const t = useTranslation();

  return (
    <div className="not-found-page">
      <div className="container not-found-page__inner">
        <span className="not-found-page__code">404</span>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.text}</p>
        <Button to="/">{t.notFound.cta}</Button>
      </div>
    </div>
  );
}
