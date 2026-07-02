import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/src/providers/AppProvider';

export const metadata: Metadata = {
  title: 'ARTIC Frontend',
  description: 'Next.js frontend for ARTIC products',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
