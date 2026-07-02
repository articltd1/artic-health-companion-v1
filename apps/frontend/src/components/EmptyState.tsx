'use client';

import { Button } from '@/src/components/Button';

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
      <p className="text-base font-semibold text-slate-900">{title}</p>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      {actionLabel && onAction ? (
        <div className="mt-6">
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
