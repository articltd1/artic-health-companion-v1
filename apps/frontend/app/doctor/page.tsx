import Link from 'next/link';
import { getDoctors } from '@/src/lib/api';
import { DoctorLayout } from '@/src/layouts/DoctorLayout';
import { DoctorCard } from '@/src/components/DoctorCard';
import { Card } from '@/src/components/Card';

export default async function DoctorPage() {
  const { data: doctors } = await getDoctors();

  return (
    <DoctorLayout>
      <div className="grid gap-8">
        <Card title="Doctor Portal" description="A clinician workspace built with shared UI primitives and layout shells.">
          <p className="text-slate-600">
            Patient charts, telemedicine scheduling, and clinical workflows should be composed from reusable components.
          </p>
          <Link href="/" className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white">
            Back to home
          </Link>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          {doctors.map((doctor: { id: string; name: string; specialty: string; availability: string }) => (
            <DoctorCard key={doctor.id} name={doctor.name} specialty={doctor.specialty} availability={doctor.availability} />
          ))}
        </div>
      </div>
    </DoctorLayout>
  );
}
