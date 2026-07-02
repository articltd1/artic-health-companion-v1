'use client';

import { ReactNode } from 'react';

export function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
