import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '@/components/layout/Nav/Nav';
import { Button } from '@/components/common/Button/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher/LanguageSwitcher';
import { MenuIcon, CloseIcon } from '@/components/icons/MenuIcon';
import { SunIcon } from '@/components/icons/SunIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from '@/i18n/useTranslation';
import logo from '@/assets/images/logo.png';
import './Header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const t = useTranslation();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt={t.brand.name} className="header__logo" />
          <span className="header__brand-text">
            <span className="header__brand-eyebrow">{t.brand.foundation}</span>
            <span className="header__brand-name">{t.brand.name}</span>
          </span>
        </Link>

        <div className={`header__nav-panel${isMenuOpen ? ' header__nav-panel--open' : ''}`}>
          <Nav onNavigate={() => setIsMenuOpen(false)} />
          <LanguageSwitcher />
          <button
            type="button"
            className="header__theme-toggle"
            aria-label={theme === 'dark' ? t.header.switchToLight : t.header.switchToDark}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <Button to="/donate" className="header__cta" onClick={() => setIsMenuOpen(false)}>
            {t.header.cta}
          </Button>
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
