'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Trophy } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/content';
import JoinModal from './JoinModal';
import '@/styles/promobanner.css';

interface PromotionalBannerProps {
  onExploreClick?: () => void;
}

export default function PromotionalBanner({ onExploreClick }: PromotionalBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      <section className="promo-strip" aria-label="Brand Promotion">
        <div className="container">
          <div className="promo-container">
            <div className="promo-left">
              <span className="promo-badge">
                <Trophy size={14} />
                Game Day Promotion
              </span>
              <h2 className="promo-title">
                STAY FOR THE STORIES. PLAY FOR THE MOMENT.
              </h2>
              <p className="promo-subtitle">
                Level up your match-day experience with real-time tactical intelligence, pitch telemetry, and exclusive promotion rewards tailored for dedicated cricket followers.
              </p>
            </div>

            <div className="promo-cta-box">
              <button
                className="btn btn-primary"
                onClick={handleClick}
                aria-label="Explore Redhot promotions"
              >
                <span>Explore Now</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <JoinModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="EXPLORE REDHOT CLUB"
        destinationUrl={BRAND_CONFIG.exploreUrl}
      />
    </>
  );
}
