'use client';

import { classNames } from '@/src/utils/classNames';
import type { AvatarProps } from '@/src/types';

export function Avatar({ name, imageSrc, status }: AvatarProps) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="inline-flex items-center gap-3">
      <div className={classNames('flex h-11 w-11 items-center justify-center rounded-full bg-artic-blue text-sm font-semibold text-white', imageSrc ? 'overflow-hidden' : '')}>
        {imageSrc ? <img src={imageSrc} alt={name} className="h-full w-full object-cover" /> : initials}
      </div>
      {status ? <span className="text-sm text-slate-500">{status}</span> : null}
    </div>
  );
}
