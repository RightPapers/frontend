import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Right Paper',
  description: 'Youtube Fake News Detect Service',
  openGraph: {
    title: 'Right Paper',
    description: 'Youtube Fake News Detect Service',
    url: 'https://right-paper.vercel.app/',
    images: [
      {
        url: '/android-chrome-512x512.png',
        alt: 'Right Paper logo which symbolizes a dashboard',
      },
    ],
    siteName: 'Right Paper',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
