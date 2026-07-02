'use client';

import Link from 'next/link';
import { ROUTES } from '@/src/constants/routes';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Patients', href: ROUTES.patient },
  { label: 'Doctors', href: ROUTES.doctor },
  { label: 'Telemedicine', href: ROUTES.telemedicine },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-72 flex-col gap-8 border-r border-slate-200 bg-slate-50 p-6">
      <div>
        <p className="text-lg font-semibold text-slate-900">ARTIC</p>
        <p className="mt-2 text-sm text-slate-600">Healthcare Companion</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-white hover:text-artic-blue">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
