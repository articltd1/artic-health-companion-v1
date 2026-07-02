'use client';

interface ChartProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Chart({ title, description, children }: ChartProps) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          {description ? <p className="mt-1 text-sm text-slate-500">{description}</p> : null}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
