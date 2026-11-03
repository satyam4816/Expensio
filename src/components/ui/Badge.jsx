import React from 'react';
import { cn } from '../../utils/cn';

const variants = {
  default: 'bg-bg text-text border border-border',
  primary: 'bg-primary/10 text-primary border border-primary/20',
  accent: 'bg-accent/15 text-emerald-600 dark:text-accent border border-accent/30',
  warning: 'bg-warning/15 text-warning border border-warning/30',
  danger: 'bg-danger/15 text-danger border border-danger/30',
  neutral: 'bg-surface text-muted border border-border',
};

export function Badge({
  children,
  variant = 'default',
  color,
  dot = false,
  className = '',
  icon: Icon,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium select-none',
        variants[variant] || variants.default,
        className
      )}
      style={color ? { backgroundColor: `${color}1A`, color: color, borderColor: `${color}33` } : undefined}
      {...props}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: color || 'currentColor' }}
        />
      )}
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  );
}

export default Badge;

