import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const variants = {
  ghost: 'bg-transparent text-muted hover:text-text hover:bg-bg focus-visible:ring-primary/30',
  secondary: 'bg-surface text-text border border-border hover:bg-bg focus-visible:ring-primary/30',
  primary: 'bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary/40',
  danger: 'bg-transparent text-muted hover:text-danger hover:bg-danger/10 focus-visible:ring-danger/30',
};

const sizes = {
  sm: 'w-7 h-7 p-1 text-xs',
  md: 'w-9 h-9 p-2 text-sm',
  lg: 'w-11 h-11 p-2.5 text-base',
};

export const IconButton = forwardRef(({
  icon: Icon,
  children,
  variant = 'ghost',
  size = 'md',
  className = '',
  'aria-label': ariaLabel,
  disabled = false,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center rounded-button transition-all duration-150 outline-none',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'disabled:opacity-50 disabled:cursor-not-allowed active:scale-95',
        variants[variant] || variants.ghost,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {Icon ? <Icon className="w-full h-full shrink-0" /> : children}
    </button>
  );
});

IconButton.displayName = 'IconButton';
export default IconButton;

