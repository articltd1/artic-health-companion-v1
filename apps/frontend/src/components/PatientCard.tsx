'use client';

interface PatientCardProps {
  name: string;
  age: number;
  condition: string;
  lastVisit: string;
}

export function PatientCard({ name, age, condition, lastVisit }: PatientCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold text-slate-900">{name}</p>
      <p className="mt-1 text-sm text-slate-600">Age {age} • {condition}</p>
      <p className="mt-4 text-sm text-slate-500">Last visit: {lastVisit}</p>
    </div>
  );
}
