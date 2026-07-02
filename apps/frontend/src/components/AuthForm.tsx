'use client';

import { Button } from '@/src/components/Button';

interface AuthFormProps {
  title: string;
  description: string;
  submitLabel: string;
  children: React.ReactNode;
}

export function AuthForm({ title, description, submitLabel, children }: AuthFormProps) {
  return (
    <div className="space-y-8 rounded-[32px] border border-slate-200 bg-white p-10 shadow-soft">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-3 text-slate-600">{description}</p>
      </div>
      <form className="space-y-6">
        {children}
        <Button type="submit">{submitLabel}</Button>
      </form>
    </div>
  );
}
