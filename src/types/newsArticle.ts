import type { LocalizedList, LocalizedText } from '@/types/language';

export interface NewsArticle {
  id: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedList;
  imageUrl: string;
  publishedDate: string;
  author: LocalizedText;
  category: LocalizedText;
}
