'use client';

import { classNames } from '@/src/utils/classNames';

interface HealthCardProps {
  title: string;
  value: string;
  trend?: string;
  status?: string;
}

export function HealthCard({ title, value, trend, status }: HealthCardProps) {
  return (
    <div className={classNames('rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft')}>
      <p className="text-sm font-semibold text-slate-500">{title}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
        {trend ? <span>{trend}</span> : null}
        {status ? <span className="rounded-full bg-slate-100 px-3 py-1">{status}</span> : null}
      </div>
    </div>
  );
}
