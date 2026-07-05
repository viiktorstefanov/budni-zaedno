import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/i18n/ui';

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}
