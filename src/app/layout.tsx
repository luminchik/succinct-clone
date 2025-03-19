import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Succinct Clone - Crisis of Trust',
  description: 'Клон Succinct Testnet Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        {children}
      </body>
    </html>
  );
}