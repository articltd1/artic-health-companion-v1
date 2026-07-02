'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Avatar } from '@/src/components/Avatar';

export function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-3 rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-artic-blue/30"
      >
        <Avatar name="Jane Doe" />
      </button>

      {open ? (
        <div className="absolute right-0 mt-3 w-56 rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <Link href="/profile" className="block rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">
            Profile
          </Link>
          <Link href="/settings" className="mt-2 block rounded-2xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50">
            Settings
          </Link>
          <button className="mt-2 w-full rounded-2xl px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50">Sign out</button>
        </div>
      ) : null}
    </div>
  );
}
