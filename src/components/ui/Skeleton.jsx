import React from 'react';
import { cn } from '../../utils/cn';

export function Skeleton({
  className = '',
  circle = false,
  shimmer = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-input',
        shimmer ? 'animate-shimmer' : 'animate-pulse bg-border/90',
        circle && 'rounded-full',
        className
      )}
      {...props}
    />
  );
}

export function SkeletonBars({ count = 3, className = '' }) {
  return (
    <div className={cn('space-y-2.5 w-full', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            i === 0 ? 'w-full' : i === 1 ? 'w-4/5' : i === 2 ? 'w-2/3' : 'w-1/2'
          )}
        />
      ))}
    </div>
  );
}

export default Skeleton;
