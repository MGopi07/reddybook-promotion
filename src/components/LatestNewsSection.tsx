'use client';

import React, { useState, useMemo } from 'react';
import { Newspaper, RefreshCw } from 'lucide-react';
import { ARTICLES, CategoryFilter } from '@/lib/content';
import CategoryFilters from './CategoryFilters';
import SearchInput from './SearchInput';
import NewsCard from './NewsCard';
import '@/styles/news.css';

interface LatestNewsSectionProps {
  initialCategory?: CategoryFilter;
}

export default function LatestNewsSection({
  initialCategory = 'All',
}: LatestNewsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        article.author.name.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <section className="news-section" id="news-section" aria-label="Latest Cricket Stories">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Editorial Desk</span>
            <h2 className="section-title">Latest Stories</h2>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'dispatch' : 'dispatches'}
          </span>
        </div>

        {/* Toolbar: Category Filters and Search */}
        <div className="news-toolbar">
          <div className="news-filter-row">
            <CategoryFilters
              activeCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
            <SearchInput
              query={searchQuery}
              onChange={setSearchQuery}
              placeholder="Filter by headline, topic, or player..."
            />
          </div>
        </div>

        {/* Grid or Empty State */}
        <div className="news-grid">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))
          ) : (
            <div className="empty-state">
              <Newspaper className="empty-state-icon" aria-hidden="true" />
              <h3 className="empty-state-title">No Stories Found</h3>
              <p className="empty-state-desc">
                We couldn’t find any editorial dispatches matching &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category.
              </p>
              <button onClick={handleReset} className="btn btn-outline btn-sm">
                <RefreshCw size={14} />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
