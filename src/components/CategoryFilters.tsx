'use client';

import React from 'react';
import { CATEGORIES, CategoryFilter } from '@/lib/content';

interface CategoryFiltersProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

export default function CategoryFilters({
  activeCategory,
  onSelectCategory,
}: CategoryFiltersProps) {
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
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
