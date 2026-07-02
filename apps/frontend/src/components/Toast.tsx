'use client';

import { ReactNode } from 'react';

interface ToastProps {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
}

const toastStyles: Record<NonNullable<ToastProps['type']>, string> = {
  success: 'bg-emerald-500 text-white',
  error: 'bg-red-500 text-white',
  info: 'bg-slate-900 text-white',
};

export function Toast({ title, description, type = 'info' }: ToastProps) {
  return (
    <div className={`rounded-3xl px-6 py-4 shadow-soft ${toastStyles[type]}`}>
      <p className="font-semibold">{title}</p>
      {description ? <p className="mt-1 text-sm opacity-90">{description}</p> : null}
    </div>
  );
}
