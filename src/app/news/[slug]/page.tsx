import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Clock, ChevronRight, Sparkles } from 'lucide-react';
import { ARTICLES } from '@/lib/content';
import RelatedStories from '@/components/RelatedStories';
import NewsCard from '@/components/NewsCard';
import EditorialImage from '@/components/EditorialImage';
import ShareButton from './ShareButton';
import '@/styles/article.css';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Article Not Found | REDHOT SPORTS',
    };
  }
  return {
    title: `${article.title} | REDHOT SPORTS`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      type: 'article',
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const sidebarStories = ARTICLES.filter((a) => a.id !== article.id).slice(0, 4);
  const bottomRelated = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="article-page">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumbs" aria-label="Breadcrumbs">
          <Link href="/">Home</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link href="/news">News</Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <Link href={`/news?category=${encodeURIComponent(article.category)}`}>
            {article.category}
          </Link>
          <ChevronRight size={14} className="breadcrumb-separator" />
          <span className="breadcrumb-current" aria-current="page">
            {article.title}
          </span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div className="article-header-meta">
            <span className="badge">{article.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <Clock size={12} style={{ display: 'inline', marginRight: 4 }} />
              {article.publishedAt} • {article.readTime}
            </span>
          </div>

          <h1 className="article-headline">{article.title}</h1>
          <p className="article-deck">{article.excerpt}</p>

          {/* Author and Action Bar */}
          <div className="article-author-bar">
            <div className="author-profile">
              <div className="author-profile-img">
                <EditorialImage
                  src={article.author.avatar}
                  alt={article.author.name}
                  fallbackSrc="/images/author_1.jpg"
                />
              </div>
              <div className="author-profile-text">
                <span className="author-profile-name">{article.author.name}</span>
                <span className="author-profile-role">{article.author.role}</span>
              </div>
            </div>

            <div className="article-action-box">
              <ShareButton articleTitle={article.title} />
            </div>
          </div>
        </header>

        {/* Article Grid Layout */}
        <div className="article-layout">
          {/* Main Article Content */}
          <div className="article-main">
            {/* Cover Image */}
            <figure className="article-cover-figure">
              <EditorialImage
                src={article.image}
                alt={article.title}
                className="article-cover-img"
              />
              {article.imageCaption && (
                <figcaption className="article-caption">
                  {article.imageCaption}
                </figcaption>
              )}
            </figure>

            {/* Formatted Paragraphs & Subheadings */}
            <div className="article-body">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Editorial Pull Quote */}
              {article.pullQuote && (
                <aside className="pull-quote">
                  <p className="pull-quote-text">
                    &ldquo;{article.pullQuote}&rdquo;
                  </p>
                  <span className="pull-quote-attribution">
                    — Editorial Insight, RedHot Sports Desk
                  </span>
                </aside>
              )}

              {/* Subheadings and deep analysis blocks */}
              {article.subheadings &&
                article.subheadings.map((sub, idx) => (
                  <div key={idx}>
                    <h2 className="article-subheading">{sub.title}</h2>
                    <p>{sub.text}</p>
                  </div>
                ))}
            </div>

            {/* Tags */}
            <div className="article-tags">
              <span className="tags-label">Tags:</span>
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/news?search=${encodeURIComponent(tag)}`}
                  className="article-tag"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar" aria-label="Related Dispatches">
            {/* Promotional Card in Sidebar */}
            <div className="sidebar-promo-card">
              <span className="sidebar-promo-badge">
                <Sparkles size={14} style={{ display: 'inline', marginRight: 4 }} />
                Redhot Club VIP
              </span>
              <h3 className="sidebar-promo-title">Get Closer to the Action</h3>
              <p className="sidebar-promo-text">
                Unlock exclusive bowler tracking data, live match telemetry and pitch maps before every major game.
              </p>
              <a href="#join-redhot" className="btn btn-primary btn-sm">
                Join VIP Club
              </a>
            </div>

            {/* Related Stories */}
            <RelatedStories articles={sidebarStories} />
          </aside>
        </div>

        {/* Related Articles Section Below */}
        <section className="related-articles-section" aria-label="More Stories You Might Like">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Continue Reading</span>
              <h2 className="section-title">Related Cricket Stories</h2>
            </div>
            <Link href="/news" className="sidebar-view-all">
              View All News
            </Link>
          </div>

          <div className="news-grid">
            {bottomRelated.map((item) => (
              <NewsCard key={item.id} article={item} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
