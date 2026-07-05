import { Button } from '@/components/common/Button/Button';
import { useTranslation } from '@/i18n/useTranslation';
import heroImage from '@/assets/images/hero.png';
import './Hero.scss';

export function Hero() {
  const t = useTranslation();

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__media">
          <img className="hero__image" src={heroImage} alt={t.brand.name} />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            {t.brand.name}
            <span className="hero__title-accent">{t.home.heroTitleLine1}</span>
            <span className="hero__title-accent">{t.home.heroTitleLine2}</span>
          </h1>
          <p className="hero__text">{t.home.heroText}</p>
          <div className="hero__actions">
            <Button to="/about">{t.home.heroCta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
