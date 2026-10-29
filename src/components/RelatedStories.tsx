'use client';

import React from 'react';
import Link from 'next/link';
import { Article } from '@/lib/content';
import EditorialImage from './EditorialImage';

interface RelatedStoriesProps {
  articles: Article[];
  title?: string;
}

export default function RelatedStories({
  articles,
  title = 'Related Stories',
}: RelatedStoriesProps) {
  return (
    <div className="sidebar-box">
      <h3 className="sidebar-title" style={{ marginBottom: 16 }}>
        <span className="sidebar-dot" />
        {title}
      </h3>
      <div className="sidebar-list">
        {articles.slice(0, 4).map((story) => (
          <article key={story.id} className="sidebar-item">
            <Link href={`/news/${story.slug}`} className="sidebar-thumb">
              <EditorialImage
                src={story.image}
                alt={story.title}
                loading="lazy"
              />
            </Link>
            <div className="sidebar-item-info">
              <span className="sidebar-category">{story.category}</span>
              <Link href={`/news/${story.slug}`}>
                <h4 className="sidebar-item-title">{story.title}</h4>
              </Link>
              <span className="sidebar-time">{story.publishedAt}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
