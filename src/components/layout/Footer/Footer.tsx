import { Link } from 'react-router-dom';
import { navItems } from '@/data/navigation';
import { contactInfo } from '@/data/contactInfo';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import logo from '@/assets/images/logo.png';
import { MapPinIcon } from '@/components/icons/MapPinIcon';
import { MailIcon } from '@/components/icons/MailIcon';
import { PhoneIcon } from '@/components/icons/PhoneIcon';
import './Footer.scss';

export function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__brand-link">
            <img src={logo} alt={t.brand.name} className="footer__logo" />
            <span className="footer__brand-text">
              <span className="footer__brand-eyebrow">{t.brand.foundation}</span>
              <span className="footer__brand-name">{t.brand.name}</span>
            </span>
          </Link>
        </div>

        <nav className="footer__links" aria-label={t.footer.bottomNav}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label[language]}
            </Link>
          ))}
        </nav>

        <div className="footer__contact">
          <p>
            <MapPinIcon aria-hidden="true" />
            <span>{contactInfo.address[language]}</span>
          </p>
          <p>
            <MailIcon aria-hidden="true" />
            <span>{contactInfo.email}</span>
          </p>
          <p>
            <PhoneIcon aria-hidden="true" />
            <span>{contactInfo.phone}</span>
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          {t.footer.copyright.replace('{year}', String(year))}
          <span className="footer__bottom-dot">.</span> <br className="footer__bottom-break" />
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
