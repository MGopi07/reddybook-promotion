'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
    image: '/images/banner/1.webp',
    alt: 'Reddy Book Sportsbook - Comprehensive Cricket & Sports Hub',
    title: 'REDDY BOOK SPORTSBOOK',
  },
  {
    id: 'banner-cricket',
    image: '/images/banner/2.webp',
    alt: 'Reddy Book Cricket - Match Analytics & Fixture Coverage',
    title: 'REDDY BOOK CRICKET',
  },
  {
    id: 'banner-badminton',
    image: '/images/banner/3.webp',
    alt: 'Reddy Book Sports - Live Sports Updates & Editorial Analysis',
    title: 'REDDY BOOK SPORTS',
  },
];

export default function TopPromoBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
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
    const waUrl = `https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+claim+${encodeURIComponent(slide.title)}.&type=phone_number&app_absent=0`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
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
                    decoding="async"
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
  );
}
