'use client';

import { classNames } from '@artic/shared';

export interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-artic-blue">{title}</p>
        {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
      </div>
      <div className={classNames('space-y-4')}>{children}</div>
    </div>
  );
}
