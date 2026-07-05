import type { LocalizedText } from '@/types/language';

export interface ContactInfo {
  address: LocalizedText;
  email: string;
  phone: string;
}
