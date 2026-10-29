'use client';

import React, { useState } from 'react';

interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function EditorialImage({
  src,
  alt = '',
  className,
  fallbackSrc = '/images/fallback.svg',
  loading = 'lazy',
  ...rest
}: EditorialImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={hasError ? fallbackSrc : (imgSrc || fallbackSrc)}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(fallbackSrc);
        }
      }}
      {...rest}
    />
  );
}
