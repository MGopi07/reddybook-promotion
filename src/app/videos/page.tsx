import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { VIDEOS } from '@/lib/content';
import VideoCard from '@/components/VideoCard';
import NewsTicker from '@/components/NewsTicker';
import PromotionalBanner from '@/components/PromotionalBanner';
import '@/styles/videos.css';

export const metadata: Metadata = {
  title: 'Cricket Videos, Masterclasses & Highlights | REDHOT SPORTS',
  description:
    'Watch cricket tactical analysis videos, training ground footage, bowling masterclasses, and classic match finishes.',
};

export default function VideosPage() {
  return (
    <>
      <NewsTicker />

      <div className="container" style={{ paddingTop: 28, paddingBottom: 48 }}>
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current" aria-current="page">
            Videos & Highlights
          </span>
        </nav>

        {/* Section Header */}
        <div className="section-header" style={{ marginTop: 16 }}>
          <div>
            <span className="section-eyebrow">
              <PlayCircle size={14} style={{ display: 'inline', marginRight: 4 }} />
              Redhot Video Vault
            </span>
            <h1 className="section-title">All Cricket Videos & Masterclasses</h1>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing {VIDEOS.length} video releases
          </span>
        </div>

        {/* Video Grid */}
        <div className="videos-grid">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>

      <PromotionalBanner />
    </>
  );
}
