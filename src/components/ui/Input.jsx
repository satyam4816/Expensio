import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

export const Input = forwardRef(({
  label,
  error,
  prefix,
  suffix,
  className = '',
  containerClassName = '',
  id: customId,
  type = 'text',
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
        {prefix && (
          <div className="absolute left-3.5 flex items-center pointer-events-none text-muted font-medium select-none">
            {prefix}
          </div>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            'w-full bg-surface text-text border border-border rounded-input px-3.5 py-2.5 text-sm transition-all duration-150',
            'placeholder:text-muted/60 outline-none',
            'focus:border-primary focus:ring-2 focus:ring-primary/20',
            'disabled:opacity-50 disabled:bg-bg disabled:cursor-not-allowed',
            prefix && 'pl-9',
            suffix && 'pr-9',
            error && 'border-danger focus:border-danger focus:ring-danger/20',
            className
          )}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3.5 flex items-center pointer-events-none text-muted select-none">
            {suffix}
          </div>
        )}
      </div>
      {error && (
        <span id={`${id}-error`} className="text-xs text-danger font-medium">
          {error}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;

