import type { SVGProps } from 'react';
import familyIcon from '@/assets/images/family-icon.png';

export function FamilyIcon({ className }: SVGProps<SVGSVGElement>) {
  return <img src={familyIcon} alt="" className={className} />;
}
