import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/i18n/useTranslation';
import type { Language } from '@/types/language';
import './LanguageSwitcher.scss';

const OPTIONS: { code: Language; label: string }[] = [
  { code: 'bg', label: 'BG' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <div className="language-switcher" role="group" aria-label={t.header.languageSwitcher}>
      {OPTIONS.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`language-switcher__option${language === option.code ? ' language-switcher__option--active' : ''}`}
          aria-pressed={language === option.code}
          onClick={() => setLanguage(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
