'use client';

interface AppointmentCardProps {
  patientName: string;
  doctorName: string;
  status: string;
  date: string;
  time: string;
  reason: string;
}

export function AppointmentCard({ patientName, doctorName, status, date, time, reason }: AppointmentCardProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{patientName}</p>
          <p className="text-sm text-slate-500">with {doctorName}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{status}</span>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Date</p>
          <p className="mt-1 text-sm text-slate-900">{date}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Time</p>
          <p className="mt-1 text-sm text-slate-900">{time}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-600">{reason}</p>
    </div>
  );
}
