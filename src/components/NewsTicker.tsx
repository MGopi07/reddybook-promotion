'use client';

import React, { useState } from 'react';
import JoinModal from './JoinModal';
import '@/styles/ticker.css';

interface MarketItem {
  id: string;
  sport: string;
  sportType: 'cricket' | 'esports' | 'football' | 'tennis' | 'kabaddi';
  sportIcon: string;
  title: string;
  score: string;
  odds1Label: string;
  odds1Value: string;
  odds2Label: string;
  odds2Value: string;
}

const LIVE_MARKETS: MarketItem[] = [
  {
    id: 'mkt-1',
    sport: 'TENNIS',
    sportType: 'tennis',
    sportIcon: '🎾',
    title: 'Djokovic vs Alcaraz',
    score: '6-4, 3-6, 4-2',
    odds1Label: 'DJO',
    odds1Value: '1.80',
    odds2Label: 'ALC',
    odds2Value: '2.10',
  },
  {
    id: 'mkt-2',
    sport: 'IPL',
    sportType: 'cricket',
    sportIcon: '🏏',
    title: 'CSK vs MI',
    score: '178/2 • 16.4 ov',
    odds1Label: 'CSK',
    odds1Value: '1.62',
    odds2Label: 'MI',
    odds2Value: '2.40',
  },
  {
    id: 'mkt-3',
    sport: 'ESPORTS',
    sportType: 'esports',
    sportIcon: '🎮',
    title: 'Vitality vs G2',
    score: '10-8 • Map 2',
    odds1Label: 'VIT',
    odds1Value: '1.80',
    odds2Label: 'G2',
    odds2Value: '2.10',
  },
  {
    id: 'mkt-4',
    sport: 'CRICKET',
    sportType: 'cricket',
    sportIcon: '🏏',
    title: 'India vs Australia',
    score: '284/4 • 42.3 ov',
    odds1Label: 'IND',
    odds1Value: '1.45',
    odds2Label: 'AUS',
    odds2Value: '3.20',
  },
  {
    id: 'mkt-5',
    sport: 'FOOTBALL',
    sportType: 'football',
    sportIcon: '⚽',
    title: 'Real Madrid vs Man City',
    score: '2-1 • 74’',
    odds1Label: 'RMA',
    odds1Value: '1.65',
    odds2Label: 'MCI',
    odds2Value: '3.80',
  },
  {
    id: 'mkt-6',
    sport: 'KABADDI',
    sportType: 'kabaddi',
    sportIcon: '👥',
    title: 'Patna Pirates vs Puneri',
    score: '32-29 • 34m',
    odds1Label: 'PAT',
    odds1Value: '1.75',
    odds2Label: 'PUN',
    odds2Value: '2.25',
  },
];

export default function NewsTicker() {
  const [selectedBet, setSelectedBet] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOddsClick = (item: MarketItem, team: string, odds: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedBet(`LIVE BET: ${item.title} - ${team} @ ${odds}`);
    setIsModalOpen(true);
  };

  return (
    <div className="live-markets-ticker-bar" role="region" aria-label="Live Betting Markets Ticker">
      <div className="live-markets-inner">
        {/* Left Fixed Badge: LIVE MARKETS */}
        <div className="live-markets-label-badge">
          <span className="live-markets-dot" />
          <span className="live-markets-text">LIVE MARKETS</span>
        </div>

        {/* Marquee Track: Seamless Infinite Scrolling */}
        <div className="live-markets-scroll-container">
          <div className="live-markets-track">
            {/* Render items twice for an uninterrupted infinite loop */}
            {[...LIVE_MARKETS, ...LIVE_MARKETS].map((mkt, idx) => (
              <div key={`${mkt.id}-${idx}`} className="live-market-chip">
                {/* Live Tag */}
                <span className="market-live-tag">
                  <span className="market-live-dot" />
                  LIVE
                </span>

                {/* Sport Badge */}
                <span className={`market-sport-badge badge-${mkt.sportType}`}>
                  <span className="sport-icon">{mkt.sportIcon}</span>
                  <span>{mkt.sport}</span>
                </span>

                {/* Match Title */}
                <span className="market-match-title">
                  {mkt.title.includes(' vs ') ? (
                    <>
                      {mkt.title.split(' vs ')[0]} <span className="market-vs">vs</span> {mkt.title.split(' vs ')[1]}
                    </>
                  ) : (
                    mkt.title
                  )}
                </span>

                {/* Score & Timing */}
                <span className="market-match-score">{mkt.score}</span>

                {/* Blue Odds Button (Team 1) */}
                <button
                  className="btn-market-odds odds-blue"
                  onClick={(e) => handleOddsClick(mkt, mkt.odds1Label, mkt.odds1Value, e)}
                  title={`Back ${mkt.odds1Label} @ ${mkt.odds1Value}`}
                >
                  <span className="odds-team">{mkt.odds1Label}</span>
                  <span className="odds-val">{mkt.odds1Value}</span>
                </button>

                {/* Pink Odds Button (Team 2) */}
                <button
                  className="btn-market-odds odds-pink"
                  onClick={(e) => handleOddsClick(mkt, mkt.odds2Label, mkt.odds2Value, e)}
                  title={`Back ${mkt.odds2Label} @ ${mkt.odds2Value}`}
                >
                  <span className="odds-team">{mkt.odds2Label}</span>
                  <span className="odds-val">{mkt.odds2Value}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bet Slip Modal */}
      {selectedBet && (
        <JoinModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedBet}
          destinationUrl="https://reddybook.club"
        />
      )}
    </div>
  );
}
