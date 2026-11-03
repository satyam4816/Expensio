import React from 'react';
import { cn } from '../../utils/cn';

export function ProgressBar({
  value = 0,
  max = 100,
  colorOverride,
  height = 'h-2.5',
  className = '',
  showLabel = false,
}) {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  const clampedDisplayWidth = Math.min(Math.max(percentage, 0), 100);

  // Dynamic color threshold:
  // Primary under 80%, amber/warning from 80% to 100%, red/danger above 100%
  let fillColor = 'bg-primary';
  if (percentage > 100) {
    fillColor = 'bg-danger';
  } else if (percentage >= 80) {
    fillColor = 'bg-warning';
  }

  const activeColor = colorOverride || fillColor;

  return (
    <div className={cn('w-full', className)}>
      <div
        className={cn(
          'w-full bg-[#E2E5EE] dark:bg-[#252A38] rounded-full overflow-hidden p-0.5',
          height
        )}
      >
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          className={cn('h-full rounded-full transition-all duration-500 ease-out', activeColor)}
          style={{ width: `${clampedDisplayWidth}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between items-center text-xs text-muted mt-1.5 font-medium">
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
}

export default ProgressBar;
