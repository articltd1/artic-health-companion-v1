import Link from 'next/link';
import { getPatients } from '@/src/lib/api';
import { PatientLayout } from '@/src/layouts/PatientLayout';
import { PatientCard } from '@/src/components/PatientCard';
import { Card } from '@/src/components/Card';

export default async function PatientPage() {
  const { data: patients } = await getPatients();

  return (
    <PatientLayout>
      <div className="grid gap-8">
        <Card title="Patient Dashboard" description="A care hub built from reusable components for patient summaries and appointments.">
          <p className="text-slate-600">
            Clinical summaries, appointment details, and AI guidance are easier to maintain when screens reuse shared primitives.
          </p>
          <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
            Back to home
          </Link>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {patients.map((patient: { id: string; name: string; age: number; condition: string; lastVisit: string }) => (
            <PatientCard
              key={patient.id}
              name={patient.name}
              age={patient.age}
              condition={patient.condition}
              lastVisit={patient.lastVisit}
            />
          ))}
        </div>
      </div>
    </PatientLayout>
  );
}
