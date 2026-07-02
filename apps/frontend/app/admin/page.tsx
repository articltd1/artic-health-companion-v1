import { AdminLayout } from '@/src/layouts/AdminLayout';
import { Card } from '@/src/components/Card';
import { Button } from '@/src/components/Button';

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="grid gap-8">
        <Card title="Admin Console" description="A reusable administration shell for user, clinician, and system management.">
          <p className="text-slate-600">
            Admin experiences should reuse shared page shells, cards, and action controls for consistent operations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">User management</Button>
            <Button variant="secondary">Doctor approvals</Button>
            <Button variant="secondary">System settings</Button>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
}
