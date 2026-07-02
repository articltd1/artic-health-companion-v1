import Link from 'next/link';
import { Button } from '@/src/components/Button';
import { Card } from '@/src/components/Card';
import { Sidebar } from '@/src/components/Sidebar';

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <Sidebar />
        </aside>

        <section className="space-y-8">
          <Card title="Component Library" description="A shared component showcase for ARTIC frontend architecture.">
            <p className="text-slate-600">
              Every feature should compose from this foundation: buttons, cards, tables, alerts, layout shells, and data-driven UI patterns.
            </p>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Buttons">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </Card>

            <Card title="Page Shells">
              <p className="text-sm text-slate-600">
                Use `PublicLayout`, `PatientLayout`, `DoctorLayout`, and `AdminLayout` to keep role-based routes consistent.
              </p>
            </Card>
          </div>

          <Card title="Navigation" description="Shared navigation patterns should stay in reusable UI primitives.">
            <div className="flex gap-3 flex-wrap">
              <Link href="/patient" className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
                Patient
              </Link>
              <Link href="/doctor" className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
                Doctor
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
