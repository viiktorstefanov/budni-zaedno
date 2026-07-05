import type { SVGProps } from 'react';
import careIcon from '@/assets/images/care-icon.png';

export function HandsIcon({ className }: SVGProps<SVGSVGElement>) {
  return <img src={careIcon} alt="" className={className} />;
}
