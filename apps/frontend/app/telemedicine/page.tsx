import Link from 'next/link';
import { getTelemedicineSessions } from '@/src/lib/api';
import { PatientLayout } from '@/src/layouts/PatientLayout';
import { Card } from '@/src/components/Card';

export default async function TelemedicinePage() {
  const { data: sessions } = await getTelemedicineSessions();

  return (
    <PatientLayout>
      <div className="grid gap-8">
        <Card title="Telemedicine Hub" description="Remote consultation scheduling and session history in a reusable interface.">
          <p className="text-slate-600">
            This screen is built from shared layout and UI primitives so future telemedicine experiences stay consistent.
          </p>
          <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
            Back to home
          </Link>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {sessions.map((session: { id: string; patient: string; doctor: string; status: string; startsAt: string }) => (
            <Card key={session.id} title={`${session.patient} → ${session.doctor}`} description={`Status: ${session.status}`}>
              <p className="text-sm text-slate-600">Starts at: {new Date(session.startsAt).toLocaleString()}</p>
            </Card>
          ))}
        </div>
      </div>
    </PatientLayout>
  );
}
