'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Gamepad2,
  Trophy,
  Clock,
  ArrowRight,
  Flame,
  Sparkles,
  Zap,
  Newspaper,
  Sun,
  MapPin,
  Calendar,
  Play,
  Video,
  Radio,
  Send,
} from 'lucide-react';
import TeamFlag from './TeamFlag';
import EditorialImage from './EditorialImage';
import JoinModal from './JoinModal';
import '@/styles/crickethub.css';

interface GameItem {
  id: string;
  name: string;
  subtitle: string;
  badge: 'HOT' | 'NEW';
  image: string;
}

const FEATURED_GAMES: GameItem[] = [
  {
    id: 'cricket-clash',
    name: 'CRICKET CLASH',
    subtitle: 'Real Cricket Action',
    badge: 'HOT',
    image: '/images/game_cricket_clash.jpg',
  },
  {
    id: 'stadium-kings',
    name: 'STADIUM KINGS',
    subtitle: 'Build Your Team',
    badge: 'NEW',
    image: '/images/game_stadium_kings.jpg',
  },
  {
    id: 'power-play',
    name: 'POWER PLAY',
    subtitle: 'Fast. Fun. Free to play.',
    badge: 'NEW',
    image: '/images/game_power_play.jpg',
  },
  {
    id: 'super-over',
    name: 'SUPER OVER',
    subtitle: 'One Over. Big Thrill.',
    badge: 'HOT',
    image: '/images/game_super_over.jpg',
  },
];

const COMPACT_NEWS = [
  {
    id: 'hub-news-1',
    title: 'Rohit Sharma hints at Test comeback in 2026',
    time: '2 hours ago',
    tag: 'TEST',
    image: '/images/batsman_pullshot.jpg',
    href: '/news/india-vs-england-test-series-analysis',
  },
  {
    id: 'hub-news-2',
    title: 'India Women eye series win in final ODI decider',
    time: '4 hours ago',
    tag: 'ODI',
    image: '/images/match_action.jpg',
    href: '/news/ipl-auction-tactical-breakdown',
  },
  {
    id: 'hub-news-3',
    title: 'Australia name strong 16-member squad for 2026 tour',
    time: '6 hours ago',
    tag: 'TOUR',
    image: '/images/bowler_runup.jpg',
    href: '/news/t20-world-cup-pitch-report',
  },
  {
    id: 'hub-news-4',
    title: 'Bangladesh prepare for high-stakes West Indies Test series',
    time: '8 hours ago',
    tag: 'TEST',
    image: '/images/tactical_field.jpg',
    href: '/news/modern-fast-bowling-workload-biomechanics',
  },
];

const MORE_NEWS = [
  {
    id: 'more-1',
    title: 'Pakistan eye strong start in T20 series opener',
    time: '10 hours ago',
    image: '/images/bowler_runup.jpg',
    href: '/news/t20-world-cup-pitch-report',
  },
  {
    id: 'more-2',
    title: 'England announce 15-man squad for West Indies tour',
    time: '12 hours ago',
    image: '/images/match_action.jpg',
    href: '/news/ipl-auction-tactical-breakdown',
  },
  {
    id: 'more-3',
    title: 'New Zealand build momentum ahead of the World Cup',
    time: '14 hours ago',
    image: '/images/tactical_field.jpg',
    href: '/news/india-vs-england-test-series-analysis',
  },
];

export default function CricketHubSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
  }>({
    isOpen: false,
    title: 'PLAY ON REDDY BOOK CLUB',
  });

  const handleOpenClubModal = (title: string) => {
    setModalState({
      isOpen: true,
      title,
    });
  };

  return (
    <section className="cricket-hub-section" aria-label="Cricket Hub & Featured Games">
      <div className="container">
        <div className="cricket-portal-grid">

          {/* ================================================================
              LEFT SIDEBAR
             ================================================================ */}
          <aside className="portal-sidebar portal-sidebar-left">
            {/* 1. Weather Widget */}
            <div className="portal-weather-card">
              <div className="weather-content">
                <div className="weather-icon-sun">
                  <Sun size={26} />
                </div>
                <div className="weather-info">
                  <h4 className="weather-location">
                    Chennai <MapPin size={13} style={{ display: 'inline' }} />
                  </h4>
                  <span className="weather-meta">Nov 12, 2024 • 32°C Sunny</span>
                </div>
              </div>
            </div>

            {/* 2. Live Match Card */}
            <div className="portal-card portal-live-match-box">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  <span className="badge-live-pulse-dot" />
                  Live Match
                </h4>
                <span className="badge-live" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>
                  + LIVE
                </span>
              </div>
              <span className="portal-match-series-tag">ICC T20 WORLD CUP 2024</span>

              <div className="portal-score-row">
                <div className="portal-team-info">
                  <TeamFlag shortName="IND" size={20} />
                  <span className="portal-team-code">IND</span>
                </div>
                <div className="portal-team-score-num">
                  178/4 <span className="portal-overs-txt">(18.2 ov)</span>
                </div>
              </div>

              <div className="portal-score-row">
                <div className="portal-team-info">
                  <TeamFlag shortName="AUS" size={20} />
                  <span className="portal-team-code">AUS</span>
                </div>
                <div className="portal-team-score-num">
                  176/6 <span className="portal-overs-txt">(20 ov)</span>
                </div>
              </div>

              <div className="portal-match-equation">
                India need 3 runs from 10 balls
              </div>

              <button
                type="button"
                onClick={() => handleOpenClubModal('LIVE MATCH CENTER - IND VS AUS')}
                className="portal-view-score-btn"
              >
                View Full Score <ArrowRight size={13} />
              </button>
            </div>

            {/* 3. Upcoming Matches */}
            <div className="portal-card">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  <Calendar size={15} />
                  Upcoming Matches
                </h4>
                <Link href="/news" className="portal-card-link">
                  View All <ArrowRight size={12} />
                </Link>
              </div>

              <div className="upcoming-matches-list">
                {/* Match 1 */}
                <div className="upcoming-match-item">
                  <div className="upcoming-flags-pair">
                    <TeamFlag shortName="IND" size={20} />
                    <TeamFlag shortName="AUS" size={20} />
                  </div>
                  <div className="upcoming-info">
                    <span className="upcoming-teams-label">IND vs AUS</span>
                    <span className="upcoming-time-txt">2nd ODI • 12 Nov, 1:30 PM</span>
                  </div>
                </div>

                {/* Match 2 */}
                <div className="upcoming-match-item">
                  <div className="upcoming-flags-pair">
                    <TeamFlag shortName="ENG" size={20} />
                    <TeamFlag shortName="SA" size={20} />
                  </div>
                  <div className="upcoming-info">
                    <span className="upcoming-teams-label">ENG vs SA</span>
                    <span className="upcoming-time-txt">3rd T20I • 14 Nov, 7:00 PM</span>
                  </div>
                </div>

                {/* Match 3 */}
                <div className="upcoming-match-item">
                  <div className="upcoming-flags-pair">
                    <TeamFlag shortName="PAK" size={20} />
                    <TeamFlag shortName="NZ" size={20} />
                  </div>
                  <div className="upcoming-info">
                    <span className="upcoming-teams-label">PAK vs NZ</span>
                    <span className="upcoming-time-txt">1st T20I • 16 Nov, 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. T20 World Cup Promo Banner */}
            <div className="portal-t20-promo">
              <Trophy size={28} color="#FDE047" />
              <h4 className="t20-promo-title">T20 World Cup 2024</h4>
              <p className="t20-promo-sub">Big Matches. Bigger Moments.</p>
              <button
                type="button"
                onClick={() => handleOpenClubModal('T20 WORLD CUP FIXTURES')}
                className="t20-promo-btn"
              >
                View Schedule <ArrowRight size={12} />
              </button>
            </div>

            {/* 5. Latest Videos */}
            <div className="portal-card">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  <Video size={15} />
                  Latest Videos
                </h4>
                <Link href="/videos" className="portal-card-link">
                  View All <ArrowRight size={12} />
                </Link>
              </div>

              <div
                className="portal-video-thumb-wrap"
                onClick={() => handleOpenClubModal('WATCH T20 WORLD CUP HIGHLIGHTS')}
              >
                <EditorialImage
                  src="/images/match_action.jpg"
                  alt="Best Moments • T20 World Cup 2024"
                  loading="lazy"
                />
                <div className="portal-play-overlay">
                  <div className="portal-play-circle-small">
                    <Play size={14} fill="#070A0F" stroke="#070A0F" style={{ marginLeft: 2 }} />
                  </div>
                </div>
                <span className="portal-video-duration">4:32</span>
              </div>
              <h5 className="portal-video-title">Best Moments • T20 World Cup 2024</h5>
            </div>

            
          </aside>


          {/* ================================================================
              CENTER COLUMN
             ================================================================ */}
          <main className="cricket-hub-center-col">
            {/* Quick Access Bar */}
            <div className="hub-block">
              <div className="hub-block-header">
                <h3 className="hub-block-title">
                  <Zap size={18} />
                  Quick Access
                </h3>
                <Link href="/news" className="hub-view-all">
                  View All <ArrowRight size={13} />
                </Link>
              </div>

              <div className="quick-access-grid-4">
                {/* 1. India - Men */}
                <Link href="/news" className="quick-access-pill-card">
                  <TeamFlag shortName="IND" size={24} />
                  <span className="quick-access-pill-label">India – Men</span>
                </Link>

                {/* 2. India - Women */}
                <Link href="/news" className="quick-access-pill-card">
                  <TeamFlag shortName="IND" size={24} />
                  <span className="quick-access-pill-label">India – Women</span>
                </Link>

                {/* 3. Games */}
                <button
                  type="button"
                  onClick={() => handleOpenClubModal('REDDY BOOK GAMING ARENA')}
                  className="quick-access-pill-card"
                >
                  <div className="quick-access-icon-wrapper quick-access-icon-games" style={{ width: 28, height: 28 }}>
                    <Gamepad2 size={16} />
                  </div>
                  <span className="quick-access-pill-label">Games</span>
                </button>

                {/* 4. Series */}
                <Link href="/news" className="quick-access-pill-card">
                  <div className="quick-access-icon-wrapper quick-access-icon-series" style={{ width: 28, height: 28 }}>
                    <Trophy size={16} />
                  </div>
                  <span className="quick-access-pill-label">Series</span>
                </Link>
              </div>
            </div>

            {/* News Split Grid: Compact Feed (Left) + Featured Editorial (Right) */}
            <div className="hub-news-split-center">
              {/* Left: Latest News List */}
              <div className="hub-news-list-card">
                <div className="hub-card-header">
                  <h4 className="hub-card-title">
                    <Newspaper size={17} color="var(--accent-gold)" />
                    Latest News
                  </h4>
                  <Link href="/news" className="hub-view-all">
                    View All <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="hub-news-items-col">
                  {COMPACT_NEWS.map((item) => (
                    <Link key={item.id} href={item.href} className="hub-news-item-row">
                      <div className="hub-news-item-thumb">
                        <EditorialImage
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="hub-news-item-info">
                        <h5 className="hub-news-item-headline">{item.title}</h5>
                        <div className="hub-news-item-meta">
                          <span className="hub-news-badge">{item.tag}</span>
                          <span>
                            <Clock size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: '-1px' }} />
                            {item.time}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right: Featured Test Match Spotlight Card */}
              <article className="hub-featured-editorial-card">
                <div className="hub-featured-media">
                  <EditorialImage
                    src="/images/stadium_floodlights.jpg"
                    alt="India eye series win after dominant performance"
                    loading="lazy"
                  />
                  <div className="hub-featured-media-overlay" />
                  <span className="hub-tag-badge">TEST</span>
                </div>

                <div className="hub-featured-body">
                  <Link href="/news/india-vs-england-test-series-analysis">
                    <h4 className="hub-featured-title">
                      India eye series win after dominant performance
                    </h4>
                  </Link>
                  <p className="hub-featured-desc">
                    India are on the verge of a series win after a commanding performance in the 2nd Test against Australia, driven by clinical bowling and top-order resilience.
                  </p>

                  <div className="hub-featured-footer">
                    <div className="hub-featured-time">
                      <Clock size={13} />
                      <span>2 hours ago</span>
                    </div>
                    <Link href="/news/india-vs-england-test-series-analysis" className="hub-read-more-btn">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Featured Games Grid (4 Cards) */}
            <div className="hub-block">
              <div className="hub-block-header">
                <h3 className="hub-block-title">
                  <Gamepad2 size={20} />
                  Featured Games
                </h3>
                <button
                  type="button"
                  onClick={() => handleOpenClubModal('REDDY BOOK CASINO & GAMING')}
                  className="hub-view-all"
                >
                  View All <ArrowRight size={13} />
                </button>
              </div>

              <div className="hub-games-grid-4">
                {FEATURED_GAMES.map((game) => (
                  <div key={game.id} className="hub-game-card">
                    <div className="hub-game-artwork-wrap">
                      <span
                        className={`hub-game-badge ${
                          game.badge === 'HOT' ? 'hub-badge-hot' : 'hub-badge-new'
                        }`}
                      >
                        {game.badge === 'HOT' ? (
                          <>
                            <Flame size={10} style={{ display: 'inline', marginRight: 3, verticalAlign: '-1px' }} />
                            HOT
                          </>
                        ) : (
                          <>
                            <Sparkles size={10} style={{ display: 'inline', marginRight: 3, verticalAlign: '-1px' }} />
                            NEW
                          </>
                        )}
                      </span>
                      <EditorialImage
                        src={game.image}
                        alt={game.name}
                        loading="lazy"
                      />
                    </div>

                    <div className="hub-game-info">
                      <div className="hub-game-meta">
                        <h5 className="hub-game-name">{game.name}</h5>
                        <span className="hub-game-sub">{game.subtitle}</span>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleOpenClubModal(`PLAY ${game.name}`)}
                        className="hub-play-now-btn"
                      >
                        Play Now <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* More News Section */}
            <div className="hub-block">
              <div className="hub-block-header">
                <h3 className="hub-block-title">
                  <Newspaper size={18} />
                  More News
                </h3>
                <Link href="/news" className="hub-view-all">
                  View All <ArrowRight size={13} />
                </Link>
              </div>

              <div className="portal-more-news-grid">
                {MORE_NEWS.map((news) => (
                  <Link key={news.id} href={news.href} className="portal-more-news-item">
                    <div className="portal-more-news-thumb">
                      <EditorialImage
                        src={news.image}
                        alt={news.title}
                        loading="lazy"
                      />
                    </div>
                    <h5 className="portal-more-news-title">{news.title}</h5>
                    <span className="portal-more-news-time">
                      <Clock size={11} style={{ display: 'inline', marginRight: 4, verticalAlign: '-1px' }} />
                      {news.time}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </main>


          {/* ================================================================
              RIGHT SIDEBAR
             ================================================================ */}
          <aside className="portal-sidebar portal-sidebar-right">
            {/* 1. Live Scores Widget */}
            <div className="portal-card">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  <span className="badge-live-pulse-dot" />
                  Live Scores
                </h4>
                <Link href="/news" className="portal-card-link">
                  View All <ArrowRight size={12} />
                </Link>
              </div>

              {/* Match 1: South Africa vs New Zealand */}
              <div className="portal-live-match-box" style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="portal-match-series-tag">ICC T20 WORLD CUP 2024</span>
                  <span className="badge-live" style={{ fontSize: '0.65rem', padding: '1px 5px' }}>
                    + LIVE
                  </span>
                </div>
                <div className="portal-score-row">
                  <div className="portal-team-info">
                    <TeamFlag shortName="SA" size={18} />
                    <span className="portal-team-code">SA</span>
                  </div>
                  <div className="portal-team-score-num">
                    168/4 <span className="portal-overs-txt">(17.3 ov)</span>
                  </div>
                </div>
                <div className="portal-score-row">
                  <div className="portal-team-info">
                    <TeamFlag shortName="NZ" size={18} />
                    <span className="portal-team-code">NZ</span>
                  </div>
                  <div className="portal-team-score-num">
                    165/7 <span className="portal-overs-txt">(20 ov)</span>
                  </div>
                </div>
                <div className="portal-match-equation" style={{ fontSize: '0.74rem' }}>
                  South Africa need 8 runs from 15 balls
                </div>
              </div>

              {/* Match 2: England vs West Indies */}
              <div className="portal-live-match-box" style={{ paddingTop: 10, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="portal-match-series-tag">3RD ODI (D/N)</span>
                  <span className="badge-live" style={{ fontSize: '0.65rem', padding: '1px 5px' }}>
                    + LIVE
                  </span>
                </div>
                <div className="portal-score-row">
                  <div className="portal-team-info">
                    <TeamFlag shortName="ENG" size={18} />
                    <span className="portal-team-code">ENG</span>
                  </div>
                  <div className="portal-team-score-num">
                    297/8 <span className="portal-overs-txt">(50 ov)</span>
                  </div>
                </div>
                <div className="portal-score-row">
                  <div className="portal-team-info">
                    <TeamFlag shortName="WI" size={18} />
                    <span className="portal-team-code">WI</span>
                  </div>
                  <div className="portal-team-score-num">
                    250/5 <span className="portal-overs-txt">(43.4 ov)</span>
                  </div>
                </div>
                <div className="portal-match-equation" style={{ fontSize: '0.74rem' }}>
                  West Indies need 48 runs from 38 balls
                </div>
              </div>
            </div>

            {/* 2. Trending Stories */}
            <div className="portal-card">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  <Flame size={15} color="#EF4444" />
                  Trending Stories
                </h4>
                <Link href="/news" className="portal-card-link">
                  View All <ArrowRight size={12} />
                </Link>
              </div>

              <div className="trending-stories-list">
                {COMPACT_NEWS.map((item) => (
                  <Link key={item.id} href={item.href} className="trending-story-row">
                    <div className="trending-story-thumb">
                      <EditorialImage
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="trending-story-info">
                      <h5 className="trending-story-headline">{item.title}</h5>
                      <span className="trending-story-time">
                        <Clock size={10} style={{ display: 'inline', marginRight: 3, verticalAlign: '-1px' }} />
                        {item.time}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. Popular Games Banner */}
            <div className="portal-card">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  <Gamepad2 size={15} />
                  Popular Games
                </h4>
                <button
                  type="button"
                  onClick={() => handleOpenClubModal('POPULAR ESPORTS GAMES')}
                  className="portal-card-link"
                >
                  View All <ArrowRight size={12} />
                </button>
              </div>

              <div className="portal-popular-game-banner">
                <div className="popular-game-thumb">
                  <EditorialImage
                    src="/images/game_cricket_clash.jpg"
                    alt="Cricket Clash"
                    loading="lazy"
                  />
                </div>
                <div className="popular-game-cta-col">
                  <span className="popular-game-txt">Play Real Cricket Action</span>
                  <button
                    type="button"
                    onClick={() => handleOpenClubModal('PLAY CRICKET CLASH')}
                    className="popular-game-btn"
                  >
                    Play Now <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* 4. Follow Us Social Links */}
            <div className="portal-card">
              <div className="portal-card-header">
                <h4 className="portal-card-title">
                  Follow Us
                </h4>
                <Link href="/news" className="portal-card-link">
                  View All <ArrowRight size={12} />
                </Link>
              </div>

              <div className="portal-social-row">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-social-btn social-fb"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-social-btn social-x"
                  aria-label="X / Twitter"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-social-btn social-ig"
                  aria-label="Instagram"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-social-btn social-yt"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portal-social-btn social-tg"
                  aria-label="Telegram"
                >
                  <Send size={16} />
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Interactive Modal */}
      <JoinModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
      />
    </section>
  );
}
