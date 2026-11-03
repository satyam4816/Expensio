import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary/40 shadow-sm border border-transparent',
  secondary: 'bg-surface text-text border border-border hover:bg-bg hover:border-text-muted/40 focus-visible:ring-primary/30 shadow-subtle',
  ghost: 'bg-transparent text-text border-0 hover:bg-bg active:bg-border/30 focus-visible:ring-primary/30',
  danger: 'bg-danger text-white hover:opacity-90 focus-visible:ring-danger/40 shadow-sm border border-transparent',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs font-medium h-8',
  md: 'px-4 py-2.5 text-sm font-medium h-10',
  lg: 'px-5 py-3 text-base font-medium h-12',
};

export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  icon: Icon,
  ...props
}, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-button font-medium transition-all duration-150 outline-none',
        'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]',
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
