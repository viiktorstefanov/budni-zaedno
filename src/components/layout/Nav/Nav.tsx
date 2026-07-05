import { NavLink } from 'react-router-dom';
import { navItems } from '@/data/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import './Nav.scss';

interface NavProps {
  onNavigate?: () => void;
}

export function Nav({ onNavigate }: NavProps) {
  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <nav className="nav" aria-label={t.header.mainNav}>
      <ul className="nav__list">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
              onClick={onNavigate}
            >
              {item.label[language]}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
