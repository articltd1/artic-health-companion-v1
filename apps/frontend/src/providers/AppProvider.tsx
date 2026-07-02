'use client';

import { ThemeProvider } from '@/src/contexts/ThemeContext';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
