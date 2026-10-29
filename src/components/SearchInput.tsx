'use client';

import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchInputProps {
  query: string;
  onChange: (query: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  query,
  onChange,
  placeholder = 'Search cricket stories, tactical reviews...',
}: SearchInputProps) {
  return (
    <div className="search-wrapper">
      <Search className="search-icon" size={16} aria-hidden="true" />
      <input
        type="search"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
        aria-label="Search stories"
      />
      {query && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="search-clear-btn"
          aria-label="Clear search query"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
