'use client';

export function SkeletonLoader() {
  return (
    <div className="space-y-4">
      <div className="h-5 w-3/4 animate-pulse rounded-full bg-slate-200" />
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded-full bg-slate-200" />
        <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-200" />
      </div>
    </div>
  );
}
