import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#080B12',
};

export const metadata: Metadata = {
  title: 'REDDY BOOK | Cricket Intelligence, Match News & Video Highlights',
  description:
    'The premier destination for in-depth cricket journalism, verified match analysis, tactical breakdowns, pitch telemetry and game day intelligence powered by Reddy Book.',
  keywords: [
    'Reddy Book',
    'ReddyBook Cricket',
    'Cricket News',
    'T20 World Cup',
    'Match Previews',
    'Tactical Analysis',
    'IPL',
    'Cricket Videos',
  ],
  openGraph: {
    title: 'REDDY BOOK | Cricket Intelligence & Tactical Analysis',
    description:
      'The premier destination for in-depth cricket journalism, verified match analysis and tactical breakdowns.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
