'use client';

interface DoctorCardProps {
  name: string;
  specialty: string;
  availability: string;
}

export function DoctorCard({ name, specialty, availability }: DoctorCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold text-slate-900">{name}</p>
      <p className="mt-2 text-sm text-slate-600">{specialty}</p>
      <p className="mt-4 text-sm text-slate-500">Availability: {availability}</p>
    </div>
  );
}
