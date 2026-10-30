'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import JoinModal from './JoinModal';
import { BRAND_CONFIG } from '@/lib/content';
import '@/styles/toppromobanner.css';

interface BannerSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
}

const BANNER_SLIDES: BannerSlide[] = [
  {
    id: 'banner-sportsbook',
    image: '/images/banner/strip-1.png',
    alt: 'MY99EXCH Sportsbook - Bet On Your Passion',
    title: 'MY99EXCH Sportsbook',
  },
  {
    id: 'banner-cricket',
    image: '/images/banner/strip-2.png',
    alt: 'MY99EXCH Cricket Sportsbook - Bet, Play, Win',
    title: 'Cricket Sportsbook Action',
  },
  {
    id: 'banner-badminton',
    image: '/images/banner/strip-3.png',
    alt: 'MY99EXCH Badminton Sportsbook - Play Badminton Win Big',
    title: 'Badminton Championship Sportsbook',
  },
];

export default function TopPromoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('SPORTSBOOK PROMOTION');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = BANNER_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer (changes every 4.5 seconds, pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, nextSlide]);

  const handleBannerClick = (slide: BannerSlide) => {
    setSelectedTitle(slide.title);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        className="top-promo-banner-section"
        aria-label="Featured Sportsbook Promotions"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container">
          <div className="top-promo-banner-wrapper">
            {/* Slides Viewport */}
            <div
              className="top-promo-slides-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {BANNER_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`top-promo-slide-item ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => handleBannerClick(slide)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${slide.title} - Click to register or claim bonus`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleBannerClick(slide);
                    }
                  }}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="top-promo-banner-img"
                    loading={idx === 0 ? 'eager' : 'lazy'}
                  />
                  {/* Subtle click shine hover effect overlay */}
                  <span className="top-promo-shine-overlay" />
                </div>
              ))}
            </div>

            {/* Left Nav Arrow */}
            <button
              type="button"
              className="top-promo-nav-btn top-promo-nav-prev"
              onClick={prevSlide}
              aria-label="Previous promotional banner"
              title="Previous Banner"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Nav Arrow */}
            <button
              type="button"
              className="top-promo-nav-btn top-promo-nav-next"
              onClick={nextSlide}
              aria-label="Next promotional banner"
              title="Next Banner"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicator Dots Bar */}
            <div className="top-promo-dots" role="tablist" aria-label="Banner slide indicators">
              {BANNER_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`top-promo-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to ${slide.title}`}
                  role="tab"
                  aria-selected={idx === currentSlide}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reusable Join/Claim Modal */}
      <JoinModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedTitle}
        destinationUrl={BRAND_CONFIG.joinNowUrl}
      />
    </>
  );
}
