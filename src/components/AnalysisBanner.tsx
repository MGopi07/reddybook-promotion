'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Crosshair, Zap, TrendingUp, Activity, ShieldCheck } from 'lucide-react';
import '@/styles/analysisbanner.css';

export default function AnalysisBanner() {
  return (
    <section className="analysis-feature-section" aria-label="Tactical Cricket Analysis Feature">
      <div className="container">
        <div className="analysis-feature-card">
          {/* Ambient Lighting & Glow Backdrop */}
          <div className="analysis-ambient-glow" />

          {/* Left Column: Analytical Story Content */}
          <div className="analysis-feature-content">
            <div className="analysis-badge-pill">
              <span className="analysis-pulse-dot" />
              <Crosshair size={13} />
              <span>TACTICAL MASTERCLASS</span>
            </div>

            <h2 className="analysis-headline">
              EVERY MATCH HAS A <span className="highlight-gold">STORY</span>.
            </h2>

            <p className="analysis-body">
              Behind every boundary and wicket lies a complex network of bowler release angles, field geometry, pitch degradation, and real-time matchup data. We deconstruct the moments that television broadcasts overlook.
            </p>

            {/* 3 High-Tech Metric Cards */}
            <div className="analysis-highlights-grid">
              <div className="analysis-highlight-card">
                <div className="highlight-icon-wrap">
                  <Zap size={16} />
                </div>
                <div className="highlight-data-col">
                  <span className="highlight-number">0.42s</span>
                  <span className="highlight-label">Batter Reaction Window</span>
                </div>
              </div>

              <div className="analysis-highlight-card">
                <div className="highlight-icon-wrap highlight-icon-green">
                  <TrendingUp size={16} />
                </div>
                <div className="highlight-data-col">
                  <span className="highlight-number">81%</span>
                  <span className="highlight-label">Middle Overs Win Rate</span>
                </div>
              </div>

              <div className="analysis-highlight-card">
                <div className="highlight-icon-wrap highlight-icon-cyan">
                  <Activity size={16} />
                </div>
                <div className="highlight-data-col">
                  <span className="highlight-number">145kph</span>
                  <span className="highlight-label">Release Velocity</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="analysis-cta-row">
              <Link
                href="/news/why-the-middle-overs-are-becoming-a-t20-chess-match"
                className="btn-tactical-cta"
              >
                <span>Explore Tactical Breakdown</span>
                <ArrowUpRight size={18} />
              </Link>
              <span className="analysis-verified-note">
                <ShieldCheck size={14} />
                Hawk-Eye & Telemetry Grounded
              </span>
            </div>
          </div>

          {/* Right Column: Visual Telemetry Art */}
          <div className="analysis-feature-visual">
            <img
              src="/images/tactical_cricket_analysis.jpg"
              alt="Fast bowler delivery stride with live pitch trajectory and speed telemetry"
              className="analysis-feature-img"
              loading="lazy"
            />
            <div className="analysis-visual-overlay" />

            {/* Live Telemetry HUD Badge */}
            <div className="analysis-tactical-badge">
              <div className="tactical-badge-header">
                <span className="tactical-pulse-dot" />
                <span className="tactical-title">PITCH TELEMETRY • LIVE</span>
              </div>
              <div className="tactical-badge-metrics">
                <span className="tactical-metric-val">145 KPH</span>
                <span className="tactical-subtitle">Trajectory: Hard Cross-Seam Bouncer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
