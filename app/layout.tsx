import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MswProvider from '@/components/provider/MswProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Right Paper',
  description: 'Youtube Fake News Detect Service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='min-w-screen flex min-h-screen justify-center bg-gray-200 px-5'>
          <MswProvider>{children}</MswProvider>
        </main>
      </body>
    </html>
  );
}
