'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap, Trophy, Play, Pause, MapPin, Eye, Radio } from 'lucide-react';
import { SAMPLE_MATCHES, MatchScore } from '@/lib/matches';
import JoinModal from '@/components/JoinModal';
import TeamFlag from '@/components/TeamFlag';
import '@/styles/livescores.css';

type FilterType = 'ALL' | 'LIVE' | 'UPCOMING' | 'RESULT';

export default function LiveScoreSlider() {
  const [filter, setFilter] = useState<FilterType>('ALL');
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMatch, setSelectedMatch] = useState<MatchScore | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  const sliderRef = useRef<HTMLDivElement>(null);
  const userInteractedTimeout = useRef<NodeJS.Timeout | null>(null);

  // Responsive cardsPerView tracking
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setCardsPerView(1);
      } else if (width <= 1099) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Filtered matches
  const filteredMatches = SAMPLE_MATCHES.filter((m) => {
    if (filter === 'ALL') return true;
    return m.status === filter;
  });

  const liveCount = SAMPLE_MATCHES.filter((m) => m.status === 'LIVE').length;
  const upcomingCount = SAMPLE_MATCHES.filter((m) => m.status === 'UPCOMING').length;
  const resultCount = SAMPLE_MATCHES.filter((m) => m.status === 'RESULT').length;

  const maxScrollIndex = Math.max(0, filteredMatches.length - cardsPerView);
  const totalDots = filteredMatches.length > cardsPerView ? maxScrollIndex + 1 : 0;

  // Track scroll position to update active index
  const handleScroll = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, children } = sliderRef.current;
    if (children.length === 0) return;

    const firstCard = children[0] as HTMLElement;
    const cardWidth = firstCard.offsetWidth + 14;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), maxScrollIndex));
  }, [maxScrollIndex]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);

  // Smooth Auto-sliding Engine (loops smoothly within scrollable range)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || maxScrollIndex <= 0) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const children = sliderRef.current.children;
      if (children.length === 0) return;

      setActiveIndex((prev) => {
        const nextIdx = prev >= maxScrollIndex ? 0 : prev + 1;
        const target = children[nextIdx] as HTMLElement;
        if (target && sliderRef.current) {
          sliderRef.current.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
        }
        return nextIdx;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, maxScrollIndex]);

  const handleManualNav = (direction: 'left' | 'right') => {
    if (!sliderRef.current || maxScrollIndex <= 0) return;
    const children = sliderRef.current.children;
    if (children.length === 0) return;

    let targetIdx = direction === 'right' ? activeIndex + 1 : activeIndex - 1;
    if (targetIdx > maxScrollIndex) targetIdx = 0;
    if (targetIdx < 0) targetIdx = maxScrollIndex;

    const target = children[targetIdx] as HTMLElement;
    if (target) {
      sliderRef.current.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
      setActiveIndex(targetIdx);
    }

    // Pause auto-play for 6 seconds on user interaction
    setIsHovered(true);
    if (userInteractedTimeout.current) clearTimeout(userInteractedTimeout.current);
    userInteractedTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 6000);
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    const clampedIndex = Math.min(Math.max(0, index), maxScrollIndex);
    const children = sliderRef.current.children;
    if (children[clampedIndex]) {
      const target = children[clampedIndex] as HTMLElement;
      sliderRef.current.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
      setActiveIndex(clampedIndex);
    }

    // Pause auto-play for 6 seconds on user interaction
    setIsHovered(true);
    if (userInteractedTimeout.current) clearTimeout(userInteractedTimeout.current);
    userInteractedTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 6000);
  };

  const handleMatchClick = (match: MatchScore) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  return (
    <section className="match-center-section" aria-label="Cricket Match Center">
      <div className="match-center-container">
        {/* Header Bar */}
        <div className="match-center-header">
          {/* Left Title & Live Pulse */}
          <div className="match-center-title-group">
            <span className="match-center-heading">
              <Trophy size={16} color="#E5B842" />
              Match Center
            </span>

            {liveCount > 0 && (
              <span className="match-center-live-pulse">
                <span className="match-center-live-dot" />
                {liveCount} Live
              </span>
            )}

            <button
              className="match-auto-slide-btn"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              title={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              aria-label={isAutoPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
            >
              {isAutoPlaying ? (
                <>
                  <span className="auto-slide-pulse-ring" />
                  <Pause size={10} />
                  <span>Auto</span>
                </>
              ) : (
                <>
                  <Play size={10} />
                  <span>Paused</span>
                </>
              )}
            </button>
          </div>

          {/* Right Filters & Nav Arrows */}
          <div className="match-header-actions">
            <div className="match-filter-tabs" role="tablist">
              <button
                className={`match-filter-btn ${filter === 'ALL' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('ALL');
                  setActiveIndex(0);
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
              >
                All Matches ({SAMPLE_MATCHES.length})
              </button>
              <button
                className={`match-filter-btn ${filter === 'LIVE' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('LIVE');
                  setActiveIndex(0);
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
              >
                🔴 Live ({liveCount})
              </button>
              <button
                className={`match-filter-btn ${filter === 'UPCOMING' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('UPCOMING');
                  setActiveIndex(0);
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
              >
                Upcoming ({upcomingCount})
              </button>
              <button
                className={`match-filter-btn ${filter === 'RESULT' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('RESULT');
                  setActiveIndex(0);
                  if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }}
              >
                Recent ({resultCount})
              </button>
            </div>

            <div className="match-nav-controls">
              <button
                className="match-nav-arrow"
                onClick={() => handleManualNav('left')}
                aria-label="Previous match"
                title="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="match-nav-arrow"
                onClick={() => handleManualNav('right')}
                aria-label="Next match"
                title="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Viewport Track */}
        <div
          className="match-slider-viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="match-slider-track" ref={sliderRef}>
            {filteredMatches.length === 0 ? (
              <div className="match-slider-empty">
                No matches found in this category.
              </div>
            ) : (
              filteredMatches.map((match) => {
                if (match.isLiveStreamCard) {
                  return (
                    <article
                      key={match.id}
                      className="match-card match-card-stream is-live"
                      onClick={() => handleMatchClick(match)}
                      aria-label="Watch Live Cricket Stream"
                    >
                      {/* Top Stream Header */}
                      <div className="stream-card-header">
                        <span className="stream-badge-live">
                          <span className="stream-live-beacon" />
                          LIVE STREAM
                        </span>
                        <span className="stream-badge-viewers">
                          <Eye size={12} />
                          {match.streamViewers || '248.5K'}
                        </span>
                      </div>

                      {/* Center Play Button & Title */}
                      <div className="stream-card-body">
                        <div className="stream-play-circle">
                          <span className="stream-play-ring" />
                          <Play size={16} fill="#070A0F" stroke="#070A0F" style={{ marginLeft: 2 }} />
                        </div>
                        <h4 className="stream-match-title">{match.streamTitle || 'INDIA VS AUSTRALIA'}</h4>
                        <p className="stream-match-sub">{match.streamSubtitle || 'Super 8 Marquee Clash • 4K Live Broadcast'}</p>
                      </div>

                      {/* Stream Card Footer */}
                      <div className="match-card-footer stream-card-footer">
                        <span className="stream-spec-pill">
                          <Radio size={11} style={{ marginRight: 3, display: 'inline', verticalAlign: '-1px' }} />
                          4K HDR • Multi-Cam
                        </span>
                        <span className="btn-match-action btn-stream-action">
                          <Play size={10} fill="#070A0F" stroke="#070A0F" />
                          <span>Watch Now</span>
                        </span>
                      </div>
                    </article>
                  );
                }

                return (
                  <article
                    key={match.id}
                    className={`match-card ${match.status === 'LIVE' ? 'is-live' : ''}`}
                    onClick={() => handleMatchClick(match)}
                  >
                  {/* Two-Row Card Header: Clean & Never Clipped */}
                  <div className="match-card-header">
                    <div className="match-card-top-row">
                      <span className="match-card-series-name" title={match.series}>
                        {match.series}
                      </span>
                      <span
                        className={`match-status-badge badge-${match.status.toLowerCase()}`}
                      >
                        {match.status === 'LIVE' ? (
                          <>
                            <span className="badge-live-pulse-dot" />
                            LIVE
                          </>
                        ) : (
                          match.status
                        )}
                      </span>
                    </div>

                    <div className="match-card-sub-row">
                      <span className="match-card-format-tag">{match.format}</span>
                      <span className="match-card-match-num">{match.matchNumber}</span>
                    </div>
                  </div>

                  {/* Teams & Scores */}
                  <div className="match-card-teams">
                    {/* Team 1 */}
                    <div className="match-team-row">
                      <div className="match-team-info">
                        <TeamFlag
                          shortName={match.team1.shortName}
                          name={match.team1.name}
                          size={24}
                          className="match-team-flag"
                        />
                        <span className="match-team-name">{match.team1.name}</span>
                      </div>
                      <div className="match-team-score-group">
                        <span className="match-team-score">{match.team1.score || '-'}</span>
                        {match.team1.overs && (
                          <span className="match-team-overs">({match.team1.overs} ov)</span>
                        )}
                      </div>
                    </div>

                    {/* Team 2 */}
                    <div className="match-team-row">
                      <div className="match-team-info">
                        <TeamFlag
                          shortName={match.team2.shortName}
                          name={match.team2.name}
                          size={24}
                          className="match-team-flag"
                        />
                        <span className="match-team-name">{match.team2.name}</span>
                      </div>
                      <div className="match-team-score-group">
                        <span className="match-team-score">{match.team2.score || '-'}</span>
                        {match.team2.overs && (
                          <span className="match-team-overs">({match.team2.overs} ov)</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Match Equation & Run Rates */}
                  <div className="match-card-equation-box">
                    <div className={`match-equation-text ${match.status.toLowerCase()}`}>
                      {match.statusText}
                    </div>

                    {(match.crr || match.rrr || match.requiredEquation) && (
                      <div className="match-metrics-pills">
                        {match.crr && (
                          <span className="metric-pill">
                            CRR <strong>{match.crr}</strong>
                          </span>
                        )}
                        {match.rrr && (
                          <span className="metric-pill">
                            RRR <strong>{match.rrr}</strong>
                          </span>
                        )}
                        {match.requiredEquation && (
                          <span className="metric-pill gold">
                            {match.requiredEquation}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Venue & Action */}
                  <div className="match-card-footer">
                    <span className="match-footer-venue" title={match.venue}>
                      <MapPin size={11} style={{ marginRight: 3, display: 'inline', verticalAlign: '-1px' }} />
                      {match.venue}
                    </span>
                    <span className="btn-match-action">
                      <Zap size={11} />
                      <span>{match.status === 'LIVE' ? 'VIP Odds' : 'Preview'}</span>
                    </span>
                  </div>
                </article>
                  );
                })
              )}
          </div>
        </div>

        {/* Carousel Position Indicator Dots */}
        {totalDots > 1 && (
          <div className="match-slider-dots-row">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                className={`match-slider-dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => scrollToCard(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Match Details / VIP Modal */}
      {selectedMatch && (
        <JoinModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`PREMIUM INTEL: ${selectedMatch.team1.shortName} vs ${selectedMatch.team2.shortName}`}
          destinationUrl="https://reddybook.club"
        />
      )}
    </section>
  );
}
