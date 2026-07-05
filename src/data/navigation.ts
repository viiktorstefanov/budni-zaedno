import type { NavItem } from '@/types/navigation';

export const navItems: NavItem[] = [
  { label: { bg: 'Начало', en: 'Home', ar: 'الرئيسية' }, path: '/' },
  { label: { bg: 'За нас', en: 'About', ar: 'من نحن' }, path: '/about' },
  { label: { bg: 'Каузи', en: 'Causes', ar: 'القضايا' }, path: '/causes' },
  { label: { bg: 'Дейности', en: 'Activities', ar: 'الأنشطة' }, path: '/activities' },
  { label: { bg: 'Новини', en: 'News', ar: 'الأخبار' }, path: '/news' },
  { label: { bg: 'Контакти', en: 'Contact', ar: 'اتصل بنا' }, path: '/contacts' },
];
