import Link from 'next/link';
import { Card } from '@/src/components/Card';
import { Button } from '@/src/components/Button';
import { PublicLayout } from '@/src/layouts/PublicLayout';
import { ROUTES } from '@/src/constants/routes';
import ApiTest from './api-test';

export default function Home() {
  return (
    <PublicLayout>
      <div className="grid gap-10">
        <Card title="ARTIC Experience" description="A reusable frontend foundation for premium healthcare journeys.">
          <p className="text-slate-600">
            Build fast, accessible, medical-grade experiences with shared UI primitives, role-based shells, and API-driven services.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={ROUTES.patient} legacyBehavior>
              <Button>Patient Dashboard</Button>
            </Link>
            <Link href={ROUTES.doctor} legacyBehavior>
              <Button variant="secondary">Doctor Portal</Button>
            </Link>
            <Link href={ROUTES.telemedicine} legacyBehavior>
              <Button variant="secondary">Telemedicine Hub</Button>
            </Link>
          </div>
        </Card>

        <Card title="Component Library" description="All future screens should compose these shared components and layout shells.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Buttons</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Cards</p>
              <p className="mt-2 text-sm text-slate-600">Reusable data and content containers.</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Layouts</p>
              <p className="mt-2 text-sm text-slate-600">Role-based shells for patient, doctor, admin, and public pages.</p>
            </div>
          </div>
        </Card>

        <ApiTest />
      </div>
    </PublicLayout>
  );
}
