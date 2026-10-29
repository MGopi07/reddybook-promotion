'use client';

import React, { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  articleTitle: string;
}

export default function ShareButton({ articleTitle }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;

    const currentUrl = window.location.href;

    // Use Web Share API if supported on mobile
    if (navigator.share && /mobile|android|iphone/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: articleTitle,
          url: currentUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    // Fallback to copying to clipboard
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Manual fallback
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`share-btn ${copied ? 'copied' : ''}`}
      aria-label="Share or copy article link"
      title="Copy article URL"
    >
      {copied ? (
        <>
          <Check size={16} />
          <span>Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 size={16} />
          <span>Share Story</span>
        </>
      )}
    </button>
  );
}
