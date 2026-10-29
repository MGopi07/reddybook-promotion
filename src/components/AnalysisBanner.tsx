'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Crosshair } from 'lucide-react';
import '@/styles/analysisbanner.css';

export default function AnalysisBanner() {
  return (
    <section className="analysis-feature-section" aria-label="Tactical Cricket Analysis Feature">
      <div className="container">
        <div className="analysis-feature-card">
          <div className="analysis-feature-content">
            <span className="analysis-eyebrow">Tactical Masterclass</span>
            <h2 className="analysis-headline">
              EVERY MATCH HAS A <span>STORY</span>.
            </h2>
            <p className="analysis-body">
              Behind every boundary and wicket lies a complex network of bowler release angles, field geometry, pitch degradation, and real-time matchup data. We deconstruct the moments that television broadcasts overlook.
            </p>

            <div className="analysis-highlights-grid">
              <div className="analysis-highlight-item">
                <span className="highlight-number">0.42s</span>
                <span className="highlight-label">Batter Reaction Window</span>
              </div>
              <div className="analysis-highlight-item">
                <span className="highlight-number">81%</span>
                <span className="highlight-label">Middle Overs Win Rate</span>
              </div>
              <div className="analysis-highlight-item">
                <span className="highlight-number">142kph</span>
                <span className="highlight-label">Heavy Bouncer Metric</span>
              </div>
            </div>

            <Link
              href="/news/why-the-middle-overs-are-becoming-a-t20-chess-match"
              className="btn btn-primary"
            >
              <span>Explore Tactical Breakdown</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="analysis-feature-visual">
            <img
              src="/images/tactical_field.jpg"
              alt="Cricket batsman playing under intense tactical field settings"
              className="analysis-feature-img"
              loading="lazy"
            />
            <div className="analysis-visual-overlay" />
            
            <div className="analysis-tactical-badge">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--accent-red)' }}>
                <Crosshair size={14} />
                <span className="tactical-title">Field Geometry Map</span>
              </div>
              <span className="tactical-subtitle">Deep third-man up vs leg-side ring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
