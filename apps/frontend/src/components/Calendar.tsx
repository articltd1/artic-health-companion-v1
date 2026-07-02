'use client';

interface CalendarProps {
  month: string;
  year: number;
  children?: React.ReactNode;
}

export function Calendar({ month, year, children }: CalendarProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{month} {year}</p>
          <p className="mt-1 text-sm text-slate-500">Schedule and availability overview</p>
        </div>
      </div>
      <div className="grid gap-4">{children}</div>
    </div>
  );
}
