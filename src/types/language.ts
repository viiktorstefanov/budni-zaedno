export type Language = 'bg' | 'en' | 'ar';

export type LocalizedText = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export const RTL_LANGUAGES: readonly Language[] = ['ar'];

export const LOCALE_MAP: Record<Language, string> = {
  bg: 'bg-BG',
  en: 'en-US',
  ar: 'ar-EG',
};
