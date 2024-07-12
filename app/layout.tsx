import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Right Paper",
  description: "Youtube Fake News Detect Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-w-screen min-h-screen bg-gray-200 justify-center px-5">
          {children}
        </main>
      </body>
    </html>
  );
}
