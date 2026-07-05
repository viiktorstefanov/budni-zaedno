import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface BaseProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  type?: never;
  onClick?: () => void;
}

interface ButtonAsButton extends BaseProps {
  to?: never;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ children, icon, className, to, type, onClick }: ButtonProps) {
  const classes = ['btn', className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type ?? 'button'} className={classes} onClick={onClick}>
      {children}
      {icon}
    </button>
  );
}
