'use client';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center rounded-full bg-slate-100 p-4">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-artic-blue" />
    </div>
  );
}
