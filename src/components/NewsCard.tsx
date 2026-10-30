'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/content';
import EditorialImage from './EditorialImage';

interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <div className="news-card-media">
        <Link href={`/news/${article.slug}`}>
          <EditorialImage
            src={article.image}
            alt={article.title}
            className="news-card-img"
            loading="lazy"
          />
        </Link>
        <span className="badge news-card-badge" data-category={article.category}>
          <span className="news-badge-dot" />
          <span>{article.category}</span>
        </span>
      </div>

      <div className="news-card-body">
        <div className="news-card-meta">
          <span>
            <Clock size={12} />
            {article.publishedAt}
          </span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <Link href={`/news/${article.slug}`}>
          <h3 className="news-card-title">{article.title}</h3>
        </Link>

        <p className="news-card-excerpt">{article.excerpt}</p>

        <div className="news-card-footer">
          <div className="author-chip">
            <div className="author-avatar">
              <EditorialImage
                src={article.author.avatar}
                alt={article.author.name}
                fallbackSrc="/images/author_1.jpg"
              />
            </div>
            <span className="author-name">{article.author.name}</span>
          </div>

          <Link href={`/news/${article.slug}`} className="read-more-link" aria-label={`Read ${article.title}`}>
            <span>Read</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
