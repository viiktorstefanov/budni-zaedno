import type { ReactNode } from 'react';
import './ImagePlaceholder.scss';

interface ImagePlaceholderProps {
  label: string;
  icon?: ReactNode;
  ratio?: 'square' | 'wide' | 'tall';
}

export function ImagePlaceholder({ label, icon, ratio = 'wide' }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder image-placeholder--${ratio}`} role="img" aria-label={label}>
      {icon ?? <span className="image-placeholder__initial">{label.charAt(0)}</span>}
    </div>
  );
}
