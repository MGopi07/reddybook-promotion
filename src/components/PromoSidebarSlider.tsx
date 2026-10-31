'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Zap,
  Trophy,
  Gift,
  Flame,
  Crown,
  Coins,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { PROMOTION_CARDS, PromoCard } from '@/lib/promotions';
import JoinModal from './JoinModal';
import '@/styles/promoslider.css';

export default function PromoSidebarSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedPromo, setSelectedPromo] = useState<PromoCard | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const total = PROMOTION_CARDS.length;

  // Show exactly 2 cards at any time
  const card1 = PROMOTION_CARDS[startIndex % total];
  const card2 = PROMOTION_CARDS[(startIndex + 1) % total];

  // Auto-change continuously every 4.2 seconds
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % total);
    }, 4200);

    return () => clearInterval(timer);
  }, [isHovered, total]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handleAction = (promo: PromoCard, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedPromo(promo);
    setIsModalOpen(true);
  };

  const renderIcon = (name: PromoCard['icon']) => {
    const props = { size: 18 };
    switch (name) {
      case 'Gift':
        return <Gift {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Crown':
        return <Crown {...props} />;
      case 'Coins':
        return <Coins {...props} />;
      case 'Trophy':
        return <Trophy {...props} />;
      case 'Flame':
      default:
        return <Flame {...props} />;
    }
  };

  return (
    <aside
      className="promo-sidebar-widget"
      aria-label="Online Promotions & Game Offers"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sidebar Header */}
      <div className="promo-sidebar-header">
        <div className="promo-sidebar-title-wrap">
          <span className="promo-live-pulse-dot" />
          <h2 className="promo-sidebar-heading">
            <Sparkles size={16} color="#E5B842" />
            Online Promotions
          </h2>
        </div>

        <div className="promo-sidebar-controls">
          <span className="promo-slider-counter">
            0{((startIndex) % total) + 1}-0{((startIndex + 1) % total) + 1} / 0{total}
          </span>
          <button
            className="promo-sidebar-nav-btn"
            onClick={handlePrev}
            aria-label="Previous promotional card"
            title="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            className="promo-sidebar-nav-btn"
            onClick={handleNext}
            aria-label="Next promotional card"
            title="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 2 Visible Cards (Rotating Continuously) */}
      <div className="promo-cards-viewport">
        {[card1, card2].map((card, idx) => (
          <article
            key={`${card.id}-${startIndex}-${idx}`}
            className="promo-ad-card has-bg-image"
            style={{
              backgroundImage: card.bgImage
                ? `linear-gradient(105deg, rgba(10, 16, 28, 0.72) 0%, rgba(10, 16, 28, 0.28) 54%, rgba(10, 16, 28, 0.04) 100%), url(${card.bgImage})`
                : card.bgGradient,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={(e) => handleAction(card, e)}
          >
            <div className="promo-card-top">
              <span className={`promo-badge-tag badge-${card.badgeType}`}>
                {card.badge}
              </span>
              <div
                className="promo-card-icon-pill"
                style={{ background: card.accentGradient }}
              >
                {renderIcon(card.icon)}
              </div>
            </div>

            <div className="promo-card-body">
              <h3 className="promo-card-title">{card.title}</h3>
              <div
                className="promo-card-highlight"
                style={{
                  background: card.accentGradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {card.highlight}
              </div>
              <p className="promo-card-desc">{card.description}</p>
            </div>

            <div className="promo-card-action-bar">
              <button
                className="btn-promo-action"
                style={{ background: card.accentGradient }}
                onClick={(e) => handleAction(card, e)}
              >
                <ArrowUpRight size={15} strokeWidth={2.5} />
                <span>{card.ctaText}</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Slide Progress Indicator Dots */}
      <div className="promo-dots-bar" role="tablist">
        {PROMOTION_CARDS.map((_, i) => (
          <button
            key={i}
            className={`promo-dot ${i === startIndex % total || i === (startIndex + 1) % total ? 'active' : ''}`}
            onClick={() => setStartIndex(i)}
            aria-label={`Jump to promotion ${i + 1}`}
          />
        ))}
      </div>

      {/* Join/Play Modal */}
      {selectedPromo && (
        <JoinModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`CLAIM: ${selectedPromo.title}`}
          destinationUrl="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+join+the+club.&type=phone_number&app_absent=0"
        />
      )}
    </aside>
  );
}
