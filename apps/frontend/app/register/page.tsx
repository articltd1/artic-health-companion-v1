import { AuthLayout } from '@/src/layouts/AuthLayout';
import { AuthForm } from '@/src/components/AuthForm';

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm title="Create your account" description="Register to access patient insights, care coordination, and clinician workflows." submitLabel="Create account">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Full name
            <input
              type="text"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-artic-blue focus:ring-2 focus:ring-artic-blue/20"
              placeholder="Jane Doe"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-artic-blue focus:ring-2 focus:ring-artic-blue/20"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              type="password"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-artic-blue focus:ring-2 focus:ring-artic-blue/20"
              placeholder="••••••••"
            />
          </label>
        </div>
      </AuthForm>
    </AuthLayout>
  );
}
