import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/components/organism/Footer';
import Header from '@/components/organism/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Opera AI Assistant',
  description: 'AI-powered sales assistant for Opera',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen font-sans antialiased',
          'text-foreground bg-neutral-50',
          geistSans.variable,
          geistMono.variable
        )}
      >
        <NextTopLoader color="#737373" shadow={false} showSpinner={false} />
        <Header />
        <div className="relative min-h-[calc(100vh-8rem)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
