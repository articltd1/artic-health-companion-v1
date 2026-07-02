'use client';

export function NotificationBell() {
  return (
    <button className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-artic-blue/30">
      <span className="sr-only">Notifications</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2a3 3 0 00-3 3v1.1a5.002 5.002 0 00-1.5 3.5V12l-1 1v1h12v-1l-1-1v-2.4a5.002 5.002 0 00-1.5-3.5V5a3 3 0 00-3-3zM8 16a2 2 0 104 0H8z" />
      </svg>
      <span className="absolute right-2 top-2 inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
    </button>
  );
}
