import { getHealth } from '@/src/lib/api';

export default async function ApiTest() {
  const health = await getHealth();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-slate-900">API Status</h2>
      <p className="mt-3 text-sm text-slate-600">{JSON.stringify(health)}</p>
    </div>
  );
}
