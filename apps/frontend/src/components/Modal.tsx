'use client';

import { ReactNode } from 'react';
import { Button } from '@/src/components/Button';

interface ModalProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onClose: () => void;
  onAction?: () => void;
  children: ReactNode;
}

export function Modal({ title, description, actionLabel = 'Confirm', onClose, onAction, children }: ModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-2xl rounded-[32px] bg-white p-8 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
            {description ? <p className="mt-2 text-sm text-slate-600">{description}</p> : null}
          </div>
          <button className="text-slate-500 hover:text-slate-900" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="mt-6">{children}</div>

        <div className="mt-8 flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
