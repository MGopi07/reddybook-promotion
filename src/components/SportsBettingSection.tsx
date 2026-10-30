'use client';

import React, { useState } from 'react';
import { Trophy, Users, Globe, Activity, ShieldCheck, Ticket } from 'lucide-react';
import JoinModal from './JoinModal';
import '@/styles/sportsbetting.css';

type SportKey = 'cricket' | 'kabaddi' | 'football' | 'tennis' | 'basketball';

interface OddsMarket {
  label: string;
  backOdds: string;
  layOdds: string;
}

interface SportContent {
  sportName: string;
  tabLabel: string;
  iconType: 'trophy' | 'users' | 'football' | 'tennis' | 'basketball';
  heading: string;
  intro: string;
  calloutTitle: string;
  calloutDesc: string;
  bottomNote: string;
  liveMatch: {
    tournament: string;
    title: string;
    score: string;
    equation: string;
    markets: OddsMarket[];
  };
}

const SPORTS_DATA: Record<SportKey, SportContent> = {
  cricket: {
    sportName: 'Cricket',
    tabLabel: 'CRICKET',
    iconType: 'trophy',
    heading: 'CRICKET BETTING ON REDDYBOOK',
    intro:
      'Reddybook provides comprehensive cricket sports telemetry and analytical match previews for sports enthusiasts. Cricket is deeply followed due to year-round tournament schedules. Followers can evaluate major events including the IPL, ICC tournaments, Asia Cup, and international T20 leagues.',
    calloutTitle: 'ANALYTICAL MARKETS & LIVE METRICS',
    calloutDesc:
      'Explore multiple analysis dimensions such as match outcome probabilities, projected session runs, total boundaries, top batter strike rates, and dynamic powerplay shifts.',
    bottomNote:
      'Sports analysts leverage real-time telemetry, competitive projections, and structured match reports. By studying team form, pitch conditions, and player statistics, fans can make well-informed observations.',
    liveMatch: {
      tournament: 'ICC T20 World Cup — Live Match',
      title: 'INDIA VS AUSTRALIA',
      score: '184/4 (18.2 Ov)',
      equation: 'Target: 192 | Run Rate: 10.04',
      markets: [
        { label: 'Match Odds (IND)', backOdds: '1.82', layOdds: '1.83' },
        { label: 'Match Odds (AUS)', backOdds: '2.15', layOdds: '2.20' },
        { label: 'Next Over Runs (Over 19)', backOdds: '1.90', layOdds: '1.95' },
      ],
    },
  },
  kabaddi: {
    sportName: 'Kabaddi',
    tabLabel: 'KABADDI',
    iconType: 'users',
    heading: 'PRO KABADDI BETTING ON REDDYBOOK',
    intro:
      'Kabaddi has grown into a premier spectator sport across India. Reddybook provides comprehensive in-play markets for the Pro Kabaddi League (PKL), National Championships, and international tournaments with instantaneous raid telemetry.',
    calloutTitle: 'RAID POINTS & SUPER TACKLE MARKETS',
    calloutDesc:
      'Bettors on Reddybook can predict total match raid points, super tackle successes, do-or-die raid conversions, and team point spreads. Live micro-betting updates delivery-by-delivery as each raid unfolds on the mat.',
    bottomNote:
      'Analyze starting 7 defender formations, raider strike-rates, and historical head-to-head records on Reddybook to execute high-value live kabaddi bets with fast payouts.',
    liveMatch: {
      tournament: 'Pro Kabaddi League — Live Match',
      title: 'PATNA PIRATES VS PUNERI PALTAN',
      score: '32 - 29 (34th Min)',
      equation: 'Super Tackle Active | Bonus Line On',
      markets: [
        { label: 'Match Winner (Patna)', backOdds: '1.75', layOdds: '1.78' },
        { label: 'Match Winner (Puneri)', backOdds: '2.25', layOdds: '2.30' },
        { label: 'Total Points Over 62.5', backOdds: '1.88', layOdds: '1.92' },
      ],
    },
  },
  football: {
    sportName: 'Football',
    tabLabel: 'FOOTBALL',
    iconType: 'football',
    heading: 'FOOTBALL BETTING ON REDDYBOOK',
    intro:
      'From the Premier League, UEFA Champions League, and La Liga to FIFA World Cup qualifiers, Reddybook delivers round-the-clock football coverage with industry-leading odds margins and deep Asian handicaps.',
    calloutTitle: 'GOAL TOTALS & IN-PLAY CORNER MARKETS',
    calloutDesc:
      'Explore live betting on next goal scorer, both teams to score (BTTS), total yellow cards, and half-time/full-time outcomes with instant live cash-out capability throughout the full 90 minutes.',
    bottomNote:
      'Reddybook incorporates live expected goals (xG) metrics, team possession trends, and tactical substitution alerts so bettors can place well-timed football wagers.',
    liveMatch: {
      tournament: 'UEFA Champions League — Live Match',
      title: 'REAL MADRID VS MANCHESTER CITY',
      score: '2 - 1 (68th Min)',
      equation: 'Dangerous Attacks: 44 - 39 | On Target: 6 - 5',
      markets: [
        { label: 'Match Winner (Real Madrid)', backOdds: '1.65', layOdds: '1.68' },
        { label: 'Match Winner (Man City)', backOdds: '4.20', layOdds: '4.40' },
        { label: 'Total Goals Over 3.5', backOdds: '2.05', layOdds: '2.12' },
      ],
    },
  },
  tennis: {
    sportName: 'Tennis',
    tabLabel: 'TENNIS',
    iconType: 'tennis',
    heading: 'TENNIS BETTING ON REDDYBOOK',
    intro:
      'Follow all four Grand Slams (Wimbledon, US Open, Roland Garros, Australian Open) plus ATP and WTA tours point-by-point with real-time serve velocity and break point betting markets on Reddybook.',
    calloutTitle: 'SET HANDICAPS & GAME-BY-GAME PROPS',
    calloutDesc:
      'Wager on individual game winners, tie-break predictions, total aces, and exact set scores. Odds recalculate instantaneously after every baseline rally and second-serve opportunity.',
    bottomNote:
      'Court surface telemetry and player fatigue metrics on Reddybook empower tennis enthusiasts to capitalize on live momentum shifts with precision.',
    liveMatch: {
      tournament: 'Wimbledon Championships — Live Match',
      title: 'ALCARAZ VS DJOKOVIC',
      score: '6-4, 3-6, 4-3 (Deuce)',
      equation: 'Set 3 Serving: Alcaraz | 40-40 Deuce',
      markets: [
        { label: 'Match Winner (Alcaraz)', backOdds: '1.85', layOdds: '1.88' },
        { label: 'Match Winner (Djokovic)', backOdds: '2.10', layOdds: '2.15' },
        { label: 'Set 3 Winner (Alcaraz)', backOdds: '1.60', layOdds: '1.64' },
      ],
    },
  },
  basketball: {
    sportName: 'Basketball',
    tabLabel: 'BASKETBALL',
    iconType: 'basketball',
    heading: 'BASKETBALL & NBA BETTING ON REDDYBOOK',
    intro:
      'Immerse yourself in fast-paced NBA, EuroLeague, and international basketball betting. Reddybook provides real-time quarter lines, points over/under, and player prop combinations.',
    calloutTitle: 'QUARTER SPREADS & PLAYER PROP COMBOS',
    calloutDesc:
      'Predict player performance milestones (points + rebounds + assists), three-pointers converted, and dynamic live fourth-quarter point spreads with lightning settlement.',
    bottomNote:
      'Detailed pace-of-play analytics, offensive ratings, and live injury trackers give Reddybook users the edge on every high-scoring hardwood contest.',
    liveMatch: {
      tournament: 'NBA Championship — Live Match',
      title: 'LAKERS VS CELTICS',
      score: '94 - 91 (Q4 3:45)',
      equation: 'Time Remaining: 3:45 | Shot Clock: 14s',
      markets: [
        { label: 'Moneyline (Lakers)', backOdds: '1.70', layOdds: '1.74' },
        { label: 'Moneyline (Celtics)', backOdds: '2.30', layOdds: '2.36' },
        { label: 'Total Points Over 215.5', backOdds: '1.92', layOdds: '1.96' },
      ],
    },
  },
};

export default function SportsBettingSection() {
  const [activeTab, setActiveTab] = useState<SportKey>('cricket');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('REGISTER & PLACE LIVE BET - REDDYBOOK');

  const content = SPORTS_DATA[activeTab];

  const handleOddsClick = (market: OddsMarket, type: 'BACK' | 'LAY', odds: string) => {
    setModalTitle(`BET SLIP: ${market.label} [${type} @ ${odds}] - REDDYBOOK`);
    setIsModalOpen(true);
  };

  const handleRegisterClick = () => {
    setModalTitle(`REGISTER & PLACE BET: ${content.liveMatch.title} - REDDYBOOK`);
    setIsModalOpen(true);
  };

  const renderTabIcon = (key: SportKey) => {
    switch (key) {
      case 'cricket':
        return <Trophy size={15} />;
      case 'kabaddi':
        return <Users size={15} />;
      case 'football':
        return <span style={{ fontSize: '14px' }}>⚽</span>;
      case 'tennis':
        return <Activity size={15} />;
      case 'basketball':
        return <Globe size={15} />;
    }
  };

  return (
    <section className="sports-betting-section" aria-label="Sports You Can Bet On At Reddybook">
      <div className="sports-betting-container">
        {/* Header & Eyebrow */}
        <div className="sports-betting-header">
          <div className="sports-betting-eyebrow">
            <span>⚽</span>
            <span>SPORTS COVERAGE</span>
          </div>

          <h2 className="sports-betting-title">
            SPORTS YOU CAN BET ON AT <span className="brand-gold-text">REDDYBOOK</span>
          </h2>

          {/* Sports Navigation Tabs (Pills) */}
          <div className="sports-tabs-wrapper" role="tablist">
            {(Object.keys(SPORTS_DATA) as SportKey[]).map((key) => {
              const item = SPORTS_DATA[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  className={`sports-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(key)}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="tab-icon">{renderTabIcon(key)}</span>
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Two-Column Container */}
        <div className="sports-feature-box">
          {/* Left Column: Editorial Information */}
          <div className="sports-info-col">
            <div>
              <div className="sports-info-title-group">
                <div className="sports-info-icon-badge">
                  <Trophy size={22} color="#E5B842" />
                </div>
                <h3 className="sports-info-heading">{content.heading}</h3>
              </div>

              <p className="sports-info-intro">{content.intro}</p>

              {/* Callout with Gold Left Border */}
              <div className="sports-info-callout">
                <div className="sports-callout-title">{content.calloutTitle}</div>
                <p className="sports-callout-desc">{content.calloutDesc}</p>
              </div>
            </div>

            {/* Bottom Note Box */}
            <div className="sports-info-bottom-note">
              {content.bottomNote}
            </div>
          </div>

          {/* Right Column: Live Match & Odds Widget */}
          <div className="sports-widget-col">
            <div>
              {/* Widget Header */}
              <div className="sports-widget-header">
                <div className="sports-widget-live-tag">
                  <span className="widget-live-dot" />
                  <span>LIVE MATCH</span>
                </div>
                <span className="sports-widget-series">
                  {content.liveMatch.tournament}
                </span>
              </div>

              {/* Match Score Box */}
              <div className="sports-widget-match-box">
                <div className="widget-match-title">{content.liveMatch.title}</div>
                <div className="widget-match-score">{content.liveMatch.score}</div>
                <div className="widget-match-equation">{content.liveMatch.equation}</div>
              </div>

              {/* Odds Market Options Table */}
              <div className="sports-odds-table">
                <div className="odds-table-header">
                  <span className="odds-col-market">MARKET OPTIONS</span>
                  <span className="odds-col-back">BACK</span>
                  <span className="odds-col-lay">LAY</span>
                </div>

                <div className="odds-table-rows">
                  {content.liveMatch.markets.map((m, idx) => (
                    <div key={idx} className="odds-row">
                      <span className="odds-row-label" title={m.label}>
                        {m.label}
                      </span>
                      <button
                        className="btn-odds-back"
                        onClick={() => handleOddsClick(m, 'BACK', m.backOdds)}
                        title={`Back ${m.label} at ${m.backOdds}`}
                      >
                        {m.backOdds}
                      </button>
                      <button
                        className="btn-odds-lay"
                        onClick={() => handleOddsClick(m, 'LAY', m.layOdds)}
                        title={`Lay ${m.label} at ${m.layOdds}`}
                      >
                        {m.layOdds}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Register & Explore CTA */}
            <button
              className="btn-register-place-bet"
              onClick={handleRegisterClick}
              aria-label="Explore sports telemetry on Reddybook"
            >
              <Ticket size={16} />
              <span>EXPLORE SPORTS TELEMETRY</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bet Slip / Register Modal */}
      <JoinModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        destinationUrl="https://reddybook.club"
      />
    </section>
  );
}
