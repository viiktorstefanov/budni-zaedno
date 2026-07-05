import type { ComponentType, SVGProps } from 'react';
import type { LocalizedText } from '@/types/language';

export type FeatureColor = 'purple' | 'green' | 'orange' | 'blue';

export interface FeatureItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  color: FeatureColor;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
