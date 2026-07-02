'use client';

import { Button } from '@/src/components/Button';
import type { PaginationProps } from '@/src/types';

export function Pagination({ currentPage, pageCount, onPageChange }: PaginationProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
      <Button variant="secondary" onClick={() => onPageChange(Math.max(1, currentPage - 1))}>
        Prev
      </Button>
      <span className="text-sm text-slate-700">
        Page {currentPage} of {pageCount}
      </span>
      <Button variant="secondary" onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}>
        Next
      </Button>
    </div>
  );
}
