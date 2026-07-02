'use client';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'danger';
}

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-slate-100 text-slate-700',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
};

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[variant]}`}>{label}</span>;
}
