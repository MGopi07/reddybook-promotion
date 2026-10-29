import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import NewsTicker from '@/components/NewsTicker';
import PromotionalBanner from '@/components/PromotionalBanner';
import NewsCatalogClient from './NewsCatalogClient';

export const metadata: Metadata = {
  title: 'Cricket News & Match Analysis | REDHOT SPORTS',
  description:
    'Comprehensive cricket news, match reviews, tactical breakdowns, and T20 analysis from leading sports journalists.',
};

export default function NewsPage() {
  return (
    <>
      <NewsTicker />

      <div className="container" style={{ paddingTop: 28 }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current" aria-current="page">
            News & Analysis
          </span>
        </nav>
      </div>

      <Suspense fallback={<div className="container" style={{ padding: 40, color: 'var(--text-muted)' }}>Loading cricket dispatches...</div>}>
        <NewsCatalogClient />
      </Suspense>

      <PromotionalBanner />
    </>
  );
}
