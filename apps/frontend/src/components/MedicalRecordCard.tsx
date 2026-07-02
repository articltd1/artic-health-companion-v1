'use client';

interface MedicalRecordCardProps {
  title: string;
  summary: string;
  status: string;
}

export function MedicalRecordCard({ title, summary, status }: MedicalRecordCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{status}</span>
      </div>
      <p className="mt-4 text-sm text-slate-600">{summary}</p>
    </div>
  );
}
