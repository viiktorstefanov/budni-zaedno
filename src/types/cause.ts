import type { LocalizedList, LocalizedText } from '@/types/language';

export type CauseStatus = 'active' | 'completed';

export interface Cause {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  description: LocalizedList;
  imageUrl: string;
  category: LocalizedText;
  goalAmount: number;
  raisedAmount: number;
  status: CauseStatus;
  startDate: string;
}
