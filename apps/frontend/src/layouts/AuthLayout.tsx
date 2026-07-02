'use client';

import { ReactNode } from 'react';

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-artic-blue/10 via-slate-50 to-white text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full rounded-[32px] border border-slate-200 bg-white/95 p-10 shadow-soft">
          {children}
        </div>
      </div>
    </div>
  );
}
