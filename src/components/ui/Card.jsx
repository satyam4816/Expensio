import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const variants = {
  default: 'bg-surface border border-border text-text shadow-soft',
  accent: 'bg-primary/[0.08] border border-primary/25 text-text shadow-soft',
};

export const Card = forwardRef(({
  children,
  variant = 'default',
  className = '',
  hoverEffect = false,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-card p-5 transition-all duration-200',
        variants[variant] || variants.default,
        hoverEffect && 'hover:shadow-md hover:border-primary/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
