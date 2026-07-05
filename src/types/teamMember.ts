import type { LocalizedText } from '@/types/language';

export interface TeamMember {
  id: string;
  name: LocalizedText;
  role: LocalizedText;
  bio: LocalizedText;
}
