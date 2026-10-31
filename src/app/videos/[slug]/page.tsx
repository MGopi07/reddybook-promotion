import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ChevronRight, Clock, Eye, AlertCircle, Sparkles } from 'lucide-react';
import { VIDEOS } from '@/lib/content';
import VideoPlayer from '@/components/VideoPlayer';
import RelatedVideos from '@/components/RelatedVideos';
import VideoCard from '@/components/VideoCard';
import EditorialImage from '@/components/EditorialImage';
import '@/styles/videopage.css';

interface VideoDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return VIDEOS.map((video) => ({
    slug: video.slug,
  }));
}

export function generateMetadata({ params }: VideoDetailPageProps): Metadata {
  const video = VIDEOS.find((v) => v.slug === params.slug);
  if (!video) {
    return {
      title: 'Video Not Found | REDDY BOOK',
    };
  }
  return {
    title: `${video.title} | REDDY BOOK Videos`,
    description: video.description,
    authors: [{ name: video.author.name }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `/videos/${video.slug}`,
    },
    openGraph: {
      title: video.title,
      description: video.description,
      images: [video.thumbnail],
      type: 'video.other',
    },
  };
}

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const video = VIDEOS.find((v) => v.slug === params.slug);

  if (!video) {
    notFound();
  }

  const relatedVideosList = VIDEOS.filter((v) => v.id !== video.id).slice(0, 4);
  const moreVideosBottom = VIDEOS.filter((v) => v.id !== video.id).slice(0, 4);

  return (
    <article className="video-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link href="/videos">Videos</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current" aria-current="page">
            {video.title}
          </span>
        </nav>

        {/* Video Grid Layout */}
        <div className="video-layout">
          {/* Main Video & Details */}
          <div>
            {/* 16:9 Video Player */}
            <VideoPlayer
              videoUrl={video.videoUrl}
              poster={video.thumbnail}
              title={video.title}
            />

            {/* Video Details Card */}
            <div className="video-info-box">
              <div className="video-header-meta">
                <span className="badge">{video.category}</span>
                <span className="badge neutral">
                  <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
                  {video.duration}
                </span>
              </div>

              <h1 className="video-title">{video.title}</h1>

              <div className="video-stats-bar">
                <div className="video-stats-left">
                  <span>Published {video.publishedAt}</span>
                  <span>•</span>
                  <span>
                    <Eye size={14} style={{ display: 'inline', marginRight: 4 }} />
                    {video.views} Views
                  </span>
                </div>

                <div className="author-chip">
                  <div className="author-avatar">
                    <EditorialImage
                      src={video.author.avatar}
                      alt={video.author.name}
                      fallbackSrc="/images/author_1.webp"
                    />
                  </div>
                  <span className="author-name">{video.author.name}</span>
                </div>
              </div>

              <p className="video-desc">{video.description}</p>

              {/* Key Takeaways */}
              {video.keyTakeaways && video.keyTakeaways.length > 0 && (
                <div className="key-takeaways-box">
                  <h2 className="key-takeaways-title">Tactical Key Takeaways</h2>
                  <ul className="key-takeaways-list">
                    {video.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="key-takeaway-item">
                        <span className="key-takeaway-bullet">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Demo player notice */}
              <div className="demo-player-disclaimer">
                <AlertCircle size={16} style={{ color: 'var(--accent-red)', flexShrink: 0 }} />
                <span>
                  Authorized Sports Media Demo Stream. This video demo uses open test media assets for evaluation and does not stream third-party proprietary broadcast feeds.
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="video-sidebar" aria-label="Related Videos Sidebar">
            {/* Promo Card */}
            <div className="sidebar-promo-card">
              <span className="sidebar-promo-badge">
                <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} />
                Redhot Masterclasses
              </span>
              <h3 className="sidebar-promo-title">Learn from the Pros</h3>
              <p className="sidebar-promo-text">
                Stream in-depth video clinics on seam orientation, grip mechanics, and field strategy from top international bowlers.
              </p>
              <a href="#join-redhot" className="btn btn-primary btn-sm">
                Unlock All Clinics
              </a>
            </div>

            {/* Related Videos List */}
            <RelatedVideos videos={relatedVideosList} />
          </aside>
        </div>

        {/* More Videos Section Below */}
        <section style={{ paddingTop: 48, borderTop: '1px solid var(--border-subtle)' }} aria-label="More Cricket Videos">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Explore More Content</span>
              <h2 className="section-title">More Cricket Videos</h2>
            </div>
            <Link href="/videos" className="sidebar-view-all">
              View All Videos
            </Link>
          </div>

          <div className="videos-grid">
            {moreVideosBottom.map((item) => (
              <VideoCard key={item.id} video={item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
