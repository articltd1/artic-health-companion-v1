'use client';

import { classNames } from '@artic/shared';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const buttonStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-artic-blue text-white hover:bg-blue-600',
  secondary: 'bg-slate-50 text-slate-900 hover:bg-slate-100',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        buttonStyles[variant],
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-artic-blue focus:ring-offset-2',
        className
      )}
      {...props}
    />
  );
}
