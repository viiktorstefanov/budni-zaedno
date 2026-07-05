import { useCallback, useEffect, useState } from 'react';
import { ArrowUpIcon } from '@/components/icons/ArrowUpIcon';
import { useTranslation } from '@/i18n/useTranslation';
import './ScrollToTopButton.scss';

const VISIBILITY_THRESHOLD = 120;

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const t = useTranslation();

  const checkPosition = useCallback(() => {
    setVisible(window.scrollY > VISIBILITY_THRESHOLD);
  }, []);

  useEffect(() => {
    checkPosition();
    window.addEventListener('scroll', checkPosition, { passive: true });
    return () => window.removeEventListener('scroll', checkPosition);
  }, [checkPosition]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top-btn"
      onClick={handleClick}
      aria-label={t.scrollTop.label}
    >
      <ArrowUpIcon />
    </button>
  );
}
