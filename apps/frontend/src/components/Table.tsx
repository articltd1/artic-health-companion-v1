'use client';

import { classNames } from '@/src/utils/classNames';
import type { TableColumn } from '@/src/types';

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
}

export function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-slate-50">
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4 text-sm text-slate-700">
                  {column.render ? column.render(item) : (item as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
