'use client';

interface AlertProps {
  title: string;
  message: string;
  type?: 'success' | 'warning' | 'error' | 'info';
}

const alertStyles: Record<NonNullable<AlertProps['type']>, string> = {
  success: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  warning: 'bg-amber-50 text-amber-900 border-amber-200',
  error: 'bg-red-50 text-red-900 border-red-200',
  info: 'bg-slate-50 text-slate-900 border-slate-200',
};

export function Alert({ title, message, type = 'info' }: AlertProps) {
  return (
    <div className={`rounded-[28px] border px-6 py-4 ${alertStyles[type]}`}>
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6">{message}</p>
    </div>
  );
}
