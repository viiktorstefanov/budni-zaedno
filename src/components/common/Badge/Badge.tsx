import type { ReactNode } from 'react';
import './Badge.scss';

type BadgeTone = 'active' | 'completed' | 'upcoming' | 'past' | 'neutral';

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
