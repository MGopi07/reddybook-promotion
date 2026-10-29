'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import LatestNewsSection from '@/components/LatestNewsSection';
import { CategoryFilter, CATEGORIES } from '@/lib/content';

export default function NewsCatalogClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const initialCategory: CategoryFilter =
    categoryParam && (CATEGORIES as readonly string[]).includes(categoryParam)
      ? (categoryParam as CategoryFilter)
      : 'All';

  return <LatestNewsSection key={initialCategory} initialCategory={initialCategory} />;
}
