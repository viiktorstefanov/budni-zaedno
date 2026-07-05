import type { Cause } from '@/types/cause';
import { CauseCard } from '@/components/causes/CauseCard/CauseCard';
import './CauseGrid.scss';

interface CauseGridProps {
  causes: Cause[];
}

export function CauseGrid({ causes }: CauseGridProps) {
  return (
    <div className="cause-grid">
      {causes.map((cause) => (
        <CauseCard key={cause.id} cause={cause} />
      ))}
    </div>
  );
}
