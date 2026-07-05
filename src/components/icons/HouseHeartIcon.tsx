import type { SVGProps } from 'react';
import homeIcon from '@/assets/images/home-icon.png';

export function HouseHeartIcon({ className }: SVGProps<SVGSVGElement>) {
  return <img src={homeIcon} alt="" className={className} />;
}
