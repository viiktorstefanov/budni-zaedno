import type { SVGProps } from 'react';
import leafIcon from '@/assets/images/leaf-icon.png';

export function SproutIcon({ className }: SVGProps<SVGSVGElement>) {
  return <img src={leafIcon} alt="" className={className} />;
}
