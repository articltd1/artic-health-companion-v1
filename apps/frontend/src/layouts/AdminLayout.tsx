'use client';

import { ReactNode } from 'react';
import { Sidebar } from '@/src/components/Sidebar';
import { TopNavigation } from '@/src/components/TopNavigation';

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <TopNavigation title="Admin Console" />
          <main className="flex-1 px-6 py-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
