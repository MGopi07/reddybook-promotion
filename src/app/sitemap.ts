import { MetadataRoute } from 'next';
import { ARTICLES, VIDEOS } from '@/lib/content';

export const revalidate = 3600; // Automatically regenerate sitemap every hour in background

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://reddybook.club';

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/videos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic news articles automatically indexed from content registry
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => {
    const pubDate = article.publishedAt ? new Date(article.publishedAt) : new Date();
    const lastMod = isNaN(pubDate.getTime()) ? new Date() : pubDate;
    return {
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // Dynamic video pages
  const videoRoutes: MetadataRoute.Sitemap = VIDEOS.map((video) => ({
    url: `${baseUrl}/videos/${video.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...videoRoutes];
}
