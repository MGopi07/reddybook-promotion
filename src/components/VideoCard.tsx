'use client';

import React from 'react';
import Link from 'next/link';
import { Play, Clock, Eye } from 'lucide-react';
import { Video } from '@/lib/content';
import EditorialImage from './EditorialImage';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="video-card">
      <Link href={`/videos/${video.slug}`} className="video-card-thumb" aria-label={`Watch video: ${video.title}`}>
        <EditorialImage
          src={video.thumbnail}
          alt={video.title}
          className="video-card-img"
          loading="lazy"
        />
        <div className="video-card-overlay">
          <div className="video-play-btn" aria-hidden="true">
            <Play size={18} fill="#070A0F" color="#070A0F" />
          </div>
        </div>
        <span className="video-category-tag">{video.category}</span>
        <div className="video-duration-badge">
          <Clock size={11} />
          <span>{video.duration}</span>
        </div>
      </Link>

      <div className="video-card-body">
        <Link href={`/videos/${video.slug}`}>
          <h3 className="video-card-title">{video.title}</h3>
        </Link>

        <div className="video-card-meta">
          <span>{video.publishedAt}</span>
          <span>
            <Eye size={12} style={{ display: 'inline', marginRight: 4 }} />
            {video.views} views
          </span>
        </div>
      </div>
    </article>
  );
}
