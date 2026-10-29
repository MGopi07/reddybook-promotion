'use client';

import React from 'react';
import Link from 'next/link';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { VIDEOS } from '@/lib/content';
import VideoCard from './VideoCard';
import '@/styles/videos.css';

export default function LatestVideosSection() {
  return (
    <section className="videos-section" id="videos-section" aria-label="Cricket Videos & Highlights">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <span className="section-eyebrow">
              <PlayCircle size={14} style={{ display: 'inline', marginRight: 4 }} />
              Video Desk
            </span>
            <h2 className="section-title">Latest Videos & Masterclasses</h2>
          </div>
          <Link href="/videos" className="sidebar-view-all" style={{ fontSize: '1rem' }}>
            <span>View All Videos</span>
            <ArrowRight size={14} style={{ display: 'inline', marginLeft: 4 }} />
          </Link>
        </div>

        {/* 4 Cards per Row Grid */}
        <div className="videos-grid">
          {VIDEOS.slice(0, 4).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
