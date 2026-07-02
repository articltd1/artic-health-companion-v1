'use client';

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="mt-1 flex h-3 w-3 items-center justify-center rounded-full bg-artic-blue" />
          <div>
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="text-xs text-slate-500">{item.date}</p>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
