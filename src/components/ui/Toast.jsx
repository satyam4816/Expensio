import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const styles = {
  success: 'bg-surface border-accent/40 text-text shadow-soft',
  error: 'bg-surface border-danger/40 text-text shadow-soft',
  danger: 'bg-surface border-danger/40 text-text shadow-soft',
  warning: 'bg-surface border-warning/40 text-text shadow-soft',
  info: 'bg-surface border-primary/40 text-text shadow-soft',
};

const iconColors = {
  success: 'text-accent',
  error: 'text-danger',
  danger: 'text-danger',
  warning: 'text-warning',
  info: 'text-primary',
};

export function Toast({
  id,
  type = 'success',
  title,
  message,
  duration = 4000,
  onClose,
  className = '',
}) {
  const Icon = icons[type] || icons.info;

  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'flex items-start gap-3 p-3.5 rounded-button border shadow-soft transition-all duration-200 animate-slide-down min-w-[280px] max-w-sm',
        styles[type] || styles.info,
        className
      )}
    >
      <Icon className={cn('w-5 h-5 shrink-0 mt-0.5', iconColors[type] || iconColors.info)} />
      <div className="flex-1 text-sm">
        {title && <p className="font-semibold text-text leading-tight">{title}</p>}
        {message && <p className="text-muted text-xs mt-0.5">{message}</p>}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={() => onClose(id)}
          className="text-muted hover:text-text p-1 rounded-md transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default Toast;

