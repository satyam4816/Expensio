import React, { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Select = forwardRef(({
  label,
  error,
  options = [],
  children,
  className = '',
  containerClassName = '',
  id: customId,
  ...props
}, ref) => {
  const generatedId = useId();
  const id = customId || generatedId;

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', containerClassName)}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold text-text tracking-wide"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        <select
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            'w-full appearance-none bg-surface text-text border border-border rounded-input px-3.5 py-2.5 pr-10 text-sm transition-all duration-150',
            'outline-none cursor-pointer',
            'focus:border-primary focus:ring-2 focus:ring-primary/20',
            'disabled:opacity-50 disabled:bg-bg disabled:cursor-not-allowed',
            error && 'border-danger focus:border-danger focus:ring-danger/20',
            className
          )}
          {...props}
        >
          {children || options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3.5 pointer-events-none text-muted">
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      {error && (
        <span id={`${id}-error`} className="text-xs text-danger font-medium">
          {error}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';
export default Select;

