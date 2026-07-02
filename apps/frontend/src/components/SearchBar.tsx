'use client';

import { InputHTMLAttributes } from 'react';
import { classNames } from '@/src/utils/classNames';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function SearchBar({ label = 'Search', className, ...props }: SearchBarProps) {
  return (
    <label className={classNames('block text-sm text-slate-600', className)}>
      <span className="sr-only">{label}</span>
      <input
        type="search"
        placeholder={label}
        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-artic-blue focus:outline-none focus:ring-2 focus:ring-artic-blue/10"
        {...props}
      />
    </label>
  );
}
