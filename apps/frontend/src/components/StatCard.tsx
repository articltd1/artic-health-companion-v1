'use client';

interface StatCardProps {
  label: string;
  value: string;
  helper?: string;
}

export function StatCard({ label, value, helper }: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
      {helper ? <p className="mt-2 text-sm text-slate-600">{helper}</p> : null}
    </div>
  );
}
