import React from 'react';
import NewsTicker from '@/components/NewsTicker';
import LiveScoreSlider from '@/components/LiveScoreSlider';
import FeaturedStory from '@/components/FeaturedStory';
import PromotionalBanner from '@/components/PromotionalBanner';
import LatestNewsSection from '@/components/LatestNewsSection';
import AnalysisBanner from '@/components/AnalysisBanner';
import { ARTICLES } from '@/lib/content';

export default function HomePage() {
  const featuredArticles = ARTICLES.slice(0, 5);
  const sidebarArticles = ARTICLES.filter((a) => !featuredArticles.some((f) => f.id === a.id)).slice(0, 4);

  return (
    <>
      {/* 1. Sports News Ticker */}
      <NewsTicker />

      {/* 2. Live Score Slider (First Section Match Center) */}
      <LiveScoreSlider />

      {/* 3. Featured Story Hero Slider */}
      <FeaturedStory
        featuredArticles={featuredArticles}
        sidebarArticles={sidebarArticles.length > 0 ? sidebarArticles : ARTICLES.slice(1, 5)}
      />

      {/* 4. Promotional Banner */}
      <PromotionalBanner />

      {/* 5. Latest News Section with search & category filters */}
      <LatestNewsSection />

      {/* 6. Analysis Feature Banner */}
      <AnalysisBanner />
    </>
  );
}
