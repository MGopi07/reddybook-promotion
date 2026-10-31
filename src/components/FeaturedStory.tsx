'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Flame, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Article } from '@/lib/content';
import EditorialImage from './EditorialImage';
import JoinModal from './JoinModal';
import PromoSidebarSlider from './PromoSidebarSlider';
import '@/styles/hero.css';

interface FeaturedStoryProps {
  featuredArticle?: Article;
  featuredArticles?: Article[];
  sidebarArticles?: Article[];
}

export default function FeaturedStory({
  featuredArticle,
  featuredArticles = [],
  sidebarArticles = [],
}: FeaturedStoryProps) {
  // If a list of articles is provided, use it; otherwise fallback to single article wrapped in array
  const slides = featuredArticles.length > 0
    ? featuredArticles
    : (featuredArticle ? [featuredArticle] : sidebarArticles.slice(0, 5));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentArticle = slides[currentIndex] || slides[0];

  // Auto-slide every 5.5s, pause on mouse hover
  useEffect(() => {
    if (isHovered || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <section className="hero-section" aria-label="Featured Cricket Stories">
      <div className="container hero-grid">
        {/* Left Column: Big Featured Story Slider */}
        <article
          className="featured-card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Image with smooth transition */}
          <div className="featured-media">
            <EditorialImage
              key={currentArticle.id}
              src={currentArticle.image}
              alt={currentArticle.title}
              className="featured-img hero-slider-fade"
              loading="eager"
            />
            <div className="featured-overlay" />
          </div>

          {/* Floating Slider Controls (Top-Right) */}
          {slides.length > 1 && (
            <div className="hero-slider-nav">
              <span className="hero-slider-counter">
                0{currentIndex + 1} / 0{slides.length}
              </span>
              <button
                className="hero-slider-btn"
                onClick={handlePrev}
                aria-label="Previous slide"
                title="Previous slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="hero-slider-btn"
                onClick={handleNext}
                aria-label="Next slide"
                title="Next slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Main Card Content */}
          <div className="featured-content">
            <div className="featured-meta">
              <span className="badge hero-badge-featured">
                <Flame size={13} className="hero-badge-fire" />
                Featured Story
              </span>
              <span className="badge hero-badge-category">{currentArticle.category}</span>
              <span className="story-index-indicator">
                {`STORY 0${currentIndex + 1} // 0${slides.length}`}
              </span>
              <span className="featured-time">
                <Clock size={12} />
                {currentArticle.publishedAt}
              </span>
            </div>

            <h1 className="featured-title">
              <Link href={`/news/${currentArticle.slug}`}>
                {currentArticle.title}
              </Link>
            </h1>

            <p className="featured-excerpt">{currentArticle.excerpt}</p>

            {/* CTA Group with KNOW MORE Button */}
            <div className="hero-cta-group">
              <button
                className="btn-hero-play-now"
                onClick={() => setIsModalOpen(true)}
                aria-label="Know more about Reddy Book Club"
              >
                <span className="play-icon-circle">
                  <ArrowUpRight size={13} color="var(--accent-gold)" strokeWidth={2.5} />
                </span>
                <span>KNOW MORE</span>
              </button>

              <Link href={`/news/${currentArticle.slug}`} className="featured-cta">
                <span>Read Story</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Pagination Progress Dots */}
            {slides.length > 1 && (
              <div className="hero-slider-dots" role="tablist" aria-label="Slider pagination">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    className={`hero-slider-dot ${idx === currentIndex ? 'active' : ''}`}
                    onClick={(e) => handleDotClick(idx, e)}
                    aria-label={`Go to slide ${idx + 1}`}
                    role="tab"
                    aria-selected={idx === currentIndex}
                  />
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Right Column: Online Promotion Ad Showcase (2 cards continuously rotating through 6 offers) */}
        <PromoSidebarSlider />
      </div>

      {/* Play Now / VIP Gaming Modal */}
      <JoinModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="REDDY BOOK • PLAY CRICKET & WIN"
        destinationUrl="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+join+the+club.&type=phone_number&app_absent=0"
      />
    </section>
  );
}
