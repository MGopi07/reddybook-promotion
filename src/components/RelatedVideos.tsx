'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Clock } from 'lucide-react';
import { Video } from '@/lib/content';
import EditorialImage from './EditorialImage';

interface RelatedVideosProps {
  videos: Video[];
  title?: string;
}

export default function RelatedVideos({
  videos,
  title = 'Related Videos',
}: RelatedVideosProps) {
  return (
    <div className="sidebar-box">
      <h3 className="sidebar-title" style={{ marginBottom: 16 }}>
        <span className="sidebar-dot" />
        {title}
      </h3>
      <div className="sidebar-list">
        {videos.slice(0, 4).map((video) => (
          <article key={video.id} className="sidebar-item">
            <Link href={`/videos/${video.slug}`} className="sidebar-thumb" style={{ position: 'relative' }}>
              <EditorialImage
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}
              >
                <Play size={16} fill="#FFFFFF" color="#FFFFFF" />
              </div>
            </Link>
            <div className="sidebar-item-info">
              <span className="sidebar-category">{video.category}</span>
              <Link href={`/videos/${video.slug}`}>
                <h4 className="sidebar-item-title">{video.title}</h4>
              </Link>
              <span className="sidebar-time">
                <Clock size={10} style={{ display: 'inline', marginRight: 4 }} />
                {video.duration} • {video.publishedAt}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
