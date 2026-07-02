'use client';

import { useTheme } from '@/src/contexts/ThemeContext';
import { Button } from '@/src/components/Button';

export function TopNavigation({ title }: { title: string }) {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="flex flex-col gap-6 border-b border-slate-200 bg-white px-6 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-artic-blue">Dashboard</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </Button>
      </div>
    </div>
  );
}
