import { AuthLayout } from '@/src/layouts/AuthLayout';
import { AuthForm } from '@/src/components/AuthForm';
import { Button } from '@/src/components/Button';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm title="Welcome back" description="Sign in to continue using the ARTIC interface." submitLabel="Sign in">
        <div className="space-y-4">
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
        <div className="flex items-center justify-between text-sm text-slate-500">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-artic-blue focus:ring-artic-blue/40" />
            Remember me
          </label>
          <Button type="button" variant="secondary">
            Forgot password?
          </Button>
        </div>
      </AuthForm>
    </AuthLayout>
  );
}
