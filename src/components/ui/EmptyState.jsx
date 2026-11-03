import React from 'react';
import { Inbox } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../utils/cn';

export function EmptyState({
  icon: Icon = Inbox,
  title = 'No items yet',
  description = 'Get started by creating your first entry.',
  actionLabel,
  onAction,
  action,
  className = '',
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8 sm:p-12 border border-dashed border-border rounded-card bg-surface/50',
        className
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-bg border border-border flex items-center justify-center text-muted mb-4 shadow-subtle">
        <Icon className="w-6 h-6 stroke-[1.5]" />
      </div>
      <h3 className="text-base font-semibold text-text mb-1">{title}</h3>
      <p className="text-sm text-muted max-w-sm mb-5">{description}</p>
      {action || (actionLabel && onAction && (
        <Button variant="primary" size="md" onClick={onAction}>
          {actionLabel}
        </Button>
      ))}
    </div>
  );
}

export default EmptyState;

