import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#080B12',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://reddybook.club'),
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var raw = localStorage.getItem('reddybook_theme_config');
                  if (!raw) return;
                  var data = JSON.parse(raw);
                  var presets = {
                    gold: { p: '#E5B842', l: '#F7D572', d: '#C6931E', h: '#FFE082', g: 'linear-gradient(135deg, #FBE08E 0%, #E5B842 50%, #B8851B 100%)', gh: 'linear-gradient(135deg, #FFF0B8 0%, #F5C755 50%, #CE9622 100%)' },
                    emerald: { p: '#10B981', l: '#34D399', d: '#059669', h: '#6EE7B7', g: 'linear-gradient(135deg, #6EE7B7 0%, #10B981 50%, #047857 100%)', gh: 'linear-gradient(135deg, #A7F3D0 0%, #34D399 50%, #059669 100%)' },
                    crimson: { p: '#EF4444', l: '#F87171', d: '#DC2626', h: '#FCA5A5', g: 'linear-gradient(135deg, #FCA5A5 0%, #EF4444 50%, #B91C1C 100%)', gh: 'linear-gradient(135deg, #FECACA 0%, #F87171 50%, #DC2626 100%)' },
                    cyan: { p: '#06B6D4', l: '#22D3EE', d: '#0891B2', h: '#67E8F9', g: 'linear-gradient(135deg, #67E8F9 0%, #06B6D4 50%, #0E7490 100%)', gh: 'linear-gradient(135deg, #A5F3FC 0%, #22D3EE 50%, #0891B2 100%)' },
                    purple: { p: '#8B5CF6', l: '#A78BFA', d: '#7C3AED', h: '#C4B5FD', g: 'linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 50%, #6D28D9 100%)', gh: 'linear-gradient(135deg, #DDD6FE 0%, #A78BFA 50%, #7C3AED 100%)' },
                    orange: { p: '#F97316', l: '#FB923C', d: '#EA580C', h: '#FDBA74', g: 'linear-gradient(135deg, #FDBA74 0%, #F97316 50%, #C2410C 100%)', gh: 'linear-gradient(135deg, #FED7AA 0%, #FB923C 50%, #EA580C 100%)' },
                    pink: { p: '#EC4899', l: '#F472B6', d: '#DB2777', h: '#F9A8D4', g: 'linear-gradient(135deg, #F9A8D4 0%, #EC4899 50%, #BE185D 100%)', gh: 'linear-gradient(135deg, #FCE7F3 0%, #F472B6 50%, #DB2777 100%)' },
                    silver: { p: '#CBD5E1', l: '#F1F5F9', d: '#94A3B8', h: '#FFFFFF', g: 'linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 50%, #64748B 100%)', gh: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)' }
                  };
                  var root = document.documentElement;
                  var p = presets[data.presetId];
                  if (p) {
                    root.style.setProperty('--accent-gold', p.p);
                    root.style.setProperty('--accent-gold-light', p.l);
                    root.style.setProperty('--accent-gold-dark', p.d);
                    root.style.setProperty('--accent-gold-hover', p.h);
                    root.style.setProperty('--gold-gradient', p.g);
                    root.style.setProperty('--gold-gradient-hover', p.gh);
                    root.style.setProperty('--accent-red', p.p);
                    root.style.setProperty('--accent-red-hover', p.h);
                    root.style.setProperty('--text-gold', p.l);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ThemeSwitcher />
      </body>
    </html>
  );
}

