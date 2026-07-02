'use client';

import { Button } from '@/src/components/Button';

interface ErrorStateProps {
  title: string;
  description: string;
  retryLabel?: string;
  onRetry?: () => void;
}

export function ErrorState({ title, description, retryLabel = 'Retry', onRetry }: ErrorStateProps) {
  return (
    <div className="rounded-[28px] border border-red-200 bg-red-50 p-10 text-center">
      <p className="text-base font-semibold text-red-900">{title}</p>
      <p className="mt-3 text-sm text-red-700">{description}</p>
      {onRetry ? (
        <div className="mt-6">
          <Button variant="danger" onClick={onRetry}>
            {retryLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
