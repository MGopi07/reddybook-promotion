'use client';

import React, { useState } from 'react';
import JoinModal from './JoinModal';
import '@/styles/ticker.css';

interface BreakingNewsItem {
  id: string;
  tag: string;
  tagColor: 'gold' | 'red' | 'blue' | 'emerald';
  headline: string;
  time: string;
}

const BREAKING_NEWS: BreakingNewsItem[] = [
  {
    id: 'news-1',
    tag: 'T20 WORLD CUP',
    tagColor: 'red',
    headline: 'India vs Australia Super 8: Bumrah and Head set for high-voltage powerplay duel under lights',
    time: 'JUST IN',
  },
  {
    id: 'news-2',
    tag: 'IPL 2025',
    tagColor: 'gold',
    headline: 'Mega Auction Retentions: Franchises submit official core player lists ahead of 5 PM deadline',
    time: '8m ago',
  },
  {
    id: 'news-3',
    tag: 'BORDER-GAVASKAR',
    tagColor: 'blue',
    headline: 'Perth Pitch Report: Curator promises traditional carry and sharp bounce for 1st Test',
    time: '22m ago',
  },
  {
    id: 'news-4',
    tag: 'TEAM INTEL',
    tagColor: 'emerald',
    headline: 'England vs West Indies: Rain clears in Bridgetown; covers removed for revised 38-over chase',
    time: '35m ago',
  },
  {
    id: 'news-5',
    tag: 'ANALYSIS',
    tagColor: 'gold',
    headline: 'Middle-Overs Revolution: Why modern T20 analytics completely discarded the anchor role',
    time: '1h ago',
  },
  {
    id: 'news-6',
    tag: 'CHAMPIONS TROPHY',
    tagColor: 'red',
    headline: 'ICC Executive Summit concludes in Dubai with venue scheduling confirmations',
    time: '2h ago',
  },
];

export default function NewsTicker() {
  const [selectedNews, setSelectedNews] = useState<BreakingNewsItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewsClick = (item: BreakingNewsItem) => {
    setSelectedNews(item);
    setIsModalOpen(true);
  };

  return (
    <div className="breaking-news-ticker-bar" role="region" aria-label="Breaking Sports News">
      <div className="container breaking-news-inner">
        {/* Left Fixed Pill Badge: BREAKING NEWS */}
        <div className="breaking-news-badge">
          <span className="breaking-pulse-dot" />
          <span className="breaking-badge-text">BREAKING NEWS</span>
        </div>

        {/* Marquee Track: Seamless Infinite Scrolling */}
        <div className="breaking-news-scroll-container">
          <div className="breaking-news-track">
            {/* Duplicated list for seamless, gap-free loop */}
            {[...BREAKING_NEWS, ...BREAKING_NEWS].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="breaking-news-item"
                onClick={() => handleNewsClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleNewsClick(item);
                  }
                }}
              >
                <span className={`news-tag-pill tag-${item.tagColor}`}>
                  {item.tag}
                </span>
                <span className="news-headline-text">{item.headline}</span>
                <span className="news-time-badge">{item.time}</span>
                <span className="news-item-separator">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reader / VIP Intel Modal */}
      {selectedNews && (
        <JoinModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`BREAKING INTEL: ${selectedNews.headline}`}
          destinationUrl="https://reddybook.club"
        />
      )}
    </div>
  );
}
