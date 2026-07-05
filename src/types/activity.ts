import type { LocalizedText } from '@/types/language';

export type ActivityStatus = 'upcoming' | 'past';

export interface Activity {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  date: string;
  location: LocalizedText;
  imageUrl: string;
  status: ActivityStatus;
  category: LocalizedText;
}
