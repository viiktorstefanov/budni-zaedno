import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { RTL_LANGUAGES, type Language } from '@/types/language';

const STORAGE_KEY = 'bz-lang';

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'bg' || stored === 'en' || stored === 'ar') {
    return stored;
  }
  return 'bg';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isRtl = RTL_LANGUAGES.includes(language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRtl }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
