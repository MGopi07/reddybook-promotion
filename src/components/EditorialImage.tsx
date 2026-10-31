'use client';

import React, { useState, useEffect } from 'react';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

function getOptimizedSrc(s?: string, fallback = '/images/fallback.svg') {
  if (!s) return fallback;
  if (s.startsWith('/images/') && /\.(jpg|jpeg|png)$/i.test(s)) {
    return s.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return s;
}

export default function EditorialImage({
  src,
  alt = '',
  className,
  fallbackSrc = '/images/fallback.svg',
  loading = 'lazy',
  decoding = 'async',
  ...rest
}: EditorialImageProps) {
  const [imgSrc, setImgSrc] = useState(getOptimizedSrc(src, fallbackSrc));
  const [triedFallbackToOrig, setTriedFallbackToOrig] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(getOptimizedSrc(src, fallbackSrc));
    setTriedFallbackToOrig(false);
    setHasError(false);
  }, [src, fallbackSrc]);

  return (
    <img
      src={hasError ? fallbackSrc : (imgSrc || fallbackSrc)}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={() => {
        if (!triedFallbackToOrig && src && imgSrc !== src) {
          // If webp fails, try original image format
          setTriedFallbackToOrig(true);
          setImgSrc(src);
        } else if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
      {...rest}
    />
  );
}
