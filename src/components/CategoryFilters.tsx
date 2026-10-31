'use client';

import React from 'react';
import { CATEGORIES, CategoryFilter } from '@/lib/content';

interface CategoryFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

const WHATSAPP_MATCH_PREVIEWS =
  'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Previews.&type=phone_number&app_absent=0';
const WHATSAPP_ANALYSIS =
  'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Analysis.&type=phone_number&app_absent=0';

export default function CategoryFilters({
  activeCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
  const handleClick = (category: CategoryFilter) => {
    if (category === 'Match Previews') {
      window.open(WHATSAPP_MATCH_PREVIEWS, '_blank', 'noopener,noreferrer');
      return;
    }
    if (category === 'Analysis') {
      window.open(WHATSAPP_ANALYSIS, '_blank', 'noopener,noreferrer');
      return;
    }
    onSelectCategory(category);
  };

  return (
    <div
      className="category-tabs"
      role="tablist"
      aria-label="Filter news by category"
    >
      {CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            className={`category-tab ${isActive ? 'active' : ''}`}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
