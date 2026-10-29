import React from 'react';

interface TeamFlagProps {
  shortName: string;
  name?: string;
  size?: number;
  className?: string;
}

export default function TeamFlag({ shortName, name = '', size = 22, className = '' }: TeamFlagProps) {
  const code = (shortName || name || '').toUpperCase().trim();

  // India
  if (code === 'IND' || code === 'INDIA') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="India flag"
      >
        <clipPath id="flag-circle">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#flag-circle)">
          <rect width="36" height="12" fill="#FF9933" />
          <rect y="12" width="36" height="12" fill="#FFFFFF" />
          <rect y="24" width="36" height="12" fill="#138808" />
          {/* Ashoka Chakra */}
          <circle cx="18" cy="18" r="4.2" fill="none" stroke="#000080" strokeWidth="0.8" />
          <circle cx="18" cy="18" r="0.9" fill="#000080" />
          {/* Chakra Spokes */}
          <line x1="18" y1="13.8" x2="18" y2="22.2" stroke="#000080" strokeWidth="0.5" />
          <line x1="13.8" y1="18" x2="22.2" y2="18" stroke="#000080" strokeWidth="0.5" />
          <line x1="15" y1="15" x2="21" y2="21" stroke="#000080" strokeWidth="0.5" />
          <line x1="15" y1="21" x2="21" y2="15" stroke="#000080" strokeWidth="0.5" />
        </g>
      </svg>
    );
  }

  // Australia
  if (code === 'AUS' || code === 'AUSTRALIA') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="Australia flag"
      >
        <clipPath id="aus-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#aus-clip)">
          <rect width="36" height="36" fill="#00008B" />
          {/* Union Jack canton */}
          <g transform="scale(0.5)">
            <rect width="36" height="18" fill="#00247D" />
            <path d="M0,0 L36,18 M36,0 L0,18" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M0,0 L36,18 M36,0 L0,18" stroke="#CF142B" strokeWidth="1.5" />
            <path d="M18,0 V18 M0,9 H36" stroke="#FFFFFF" strokeWidth="4.5" />
            <path d="M18,0 V18 M0,9 H36" stroke="#CF142B" strokeWidth="2.5" />
          </g>
          {/* Commonwealth Star */}
          <polygon points="9,24 10.5,27.5 14,26.5 11.5,29.5 14,32 10.2,31.2 9,34.5 7.8,31.2 4,32 6.5,29.5 4,26.5 7.5,27.5" fill="#FFFFFF" />
          {/* Southern Cross */}
          <circle cx="27" cy="8" r="1.3" fill="#FFFFFF" />
          <circle cx="31" cy="15" r="1.3" fill="#FFFFFF" />
          <circle cx="23" cy="17" r="1.3" fill="#FFFFFF" />
          <circle cx="26" cy="21" r="0.9" fill="#FFFFFF" />
          <circle cx="27" cy="27" r="1.5" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  // England
  if (code === 'ENG' || code === 'ENGLAND') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="England flag"
      >
        <clipPath id="eng-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#eng-clip)">
          <rect width="36" height="36" fill="#FFFFFF" />
          <rect x="15" width="6" height="36" fill="#CF142B" />
          <rect y="15" width="36" height="6" fill="#CF142B" />
        </g>
      </svg>
    );
  }

  // West Indies (Maroon with Gold palm tree and sun crest)
  if (code === 'WI' || code === 'WEST INDIES' || code === 'WIN') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="West Indies cricket flag"
      >
        <clipPath id="wi-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#wi-clip)">
          <rect width="36" height="36" fill="#7B002C" />
          {/* Golden Sun & Island */}
          <circle cx="18" cy="15" r="8" fill="#F5B041" opacity="0.3" />
          <ellipse cx="18" cy="26" rx="12" ry="5" fill="#F5B041" />
          {/* Palm tree trunk */}
          <path d="M17,26 Q17.5,18 19,13 L17,13 Q16,18 16,26 Z" fill="#4A2306" />
          {/* Palm Fronds */}
          <path d="M18,13 Q13,9 8,13 Q13,12 18,14 Z" fill="#27AE60" />
          <path d="M18,13 Q23,9 28,13 Q23,12 18,14 Z" fill="#27AE60" />
          <path d="M18,13 Q15,7 18,3 Q19,8 18,13 Z" fill="#2ECC71" />
          <path d="M18,13 Q12,14 10,18 Q14,16 18,14 Z" fill="#27AE60" />
          <path d="M18,13 Q24,14 26,18 Q22,16 18,14 Z" fill="#27AE60" />
          {/* Cricket Stumps on island */}
          <line x1="14" y1="21" x2="14" y2="25" stroke="#FFFFFF" strokeWidth="0.8" />
          <line x1="15.5" y1="21" x2="15.5" y2="25" stroke="#FFFFFF" strokeWidth="0.8" />
          <line x1="17" y1="21" x2="17" y2="25" stroke="#FFFFFF" strokeWidth="0.8" />
          <line x1="13.5" y1="21" x2="17.5" y2="21" stroke="#FFFFFF" strokeWidth="0.8" />
        </g>
      </svg>
    );
  }

  // South Africa
  if (code === 'SA' || code === 'RSA' || code === 'SOUTH AFRICA') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="South Africa flag"
      >
        <clipPath id="sa-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#sa-clip)">
          <rect width="36" height="18" fill="#E03C31" />
          <rect y="18" width="36" height="18" fill="#001489" />
          {/* White border Y */}
          <polygon points="0,0 15,18 0,36 6,36 19,18 6,0" fill="#FFFFFF" />
          <polygon points="12,13 36,13 36,23 12,23 15,18" fill="#FFFFFF" />
          {/* Green Y */}
          <polygon points="0,3 12,18 0,33 4,33 16,18 4,3" fill="#007749" />
          <rect x="13" y="15" width="23" height="6" fill="#007749" />
          {/* Yellow border & Black Triangle */}
          <polygon points="0,5 10,18 0,31" fill="#FFB81C" />
          <polygon points="0,7 8,18 0,29" fill="#000000" />
        </g>
      </svg>
    );
  }

  // New Zealand
  if (code === 'NZ' || code === 'NEW ZEALAND') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="New Zealand flag"
      >
        <clipPath id="nz-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#nz-clip)">
          <rect width="36" height="36" fill="#00247D" />
          {/* Union Jack canton */}
          <g transform="scale(0.5)">
            <rect width="36" height="18" fill="#00247D" />
            <path d="M0,0 L36,18 M36,0 L0,18" stroke="#FFFFFF" strokeWidth="3" />
            <path d="M0,0 L36,18 M36,0 L0,18" stroke="#CF142B" strokeWidth="1.5" />
            <path d="M18,0 V18 M0,9 H36" stroke="#FFFFFF" strokeWidth="4.5" />
            <path d="M18,0 V18 M0,9 H36" stroke="#CF142B" strokeWidth="2.5" />
          </g>
          {/* 4 Red Stars with White Borders */}
          <g fill="#CC142B" stroke="#FFFFFF" strokeWidth="0.6">
            <circle cx="28" cy="9" r="1.4" />
            <circle cx="32" cy="18" r="1.6" />
            <circle cx="24" cy="20" r="1.3" />
            <circle cx="28" cy="28" r="1.8" />
          </g>
        </g>
      </svg>
    );
  }

  // Pakistan
  if (code === 'PAK' || code === 'PAKISTAN') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="Pakistan flag"
      >
        <clipPath id="pak-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#pak-clip)">
          <rect width="36" height="36" fill="#01411C" />
          <rect width="9" height="36" fill="#FFFFFF" />
          {/* Crescent */}
          <circle cx="23" cy="18" r="7.5" fill="#FFFFFF" />
          <circle cx="25" cy="16.5" r="6.5" fill="#01411C" />
          {/* Star */}
          <polygon points="26,13 27,15.5 29.5,15.5 27.5,17 28.2,19.5 26,18 23.8,19.5 24.5,17 22.5,15.5 25,15.5" fill="#FFFFFF" />
        </g>
      </svg>
    );
  }

  // Sri Lanka
  if (code === 'SL' || code === 'SRI LANKA') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        className={`team-flag-svg ${className}`}
        aria-label="Sri Lanka flag"
      >
        <clipPath id="sl-clip">
          <circle cx="18" cy="18" r="18" />
        </clipPath>
        <g clipPath="url(#sl-clip)">
          <rect width="36" height="36" fill="#FFBE29" />
          <rect x="2" y="2" width="5" height="32" fill="#00534E" />
          <rect x="8" y="2" width="5" height="32" fill="#EB7400" />
          <rect x="14" y="2" width="20" height="32" fill="#8D153A" />
          {/* Golden Lion representation */}
          <circle cx="24" cy="18" r="4.5" fill="#FFBE29" />
          <path d="M22,14 Q27,13 28,17 L25,18 Z" fill="#FFBE29" />
          <line x1="26" y1="13" x2="28" y2="10" stroke="#FFBE29" strokeWidth="1.2" />
        </g>
      </svg>
    );
  }

  // Generic fallback: styled round initial badge with gold border
  return (
    <div
      className={`team-flag-fallback ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E293B',
        color: '#FFFFFF',
        fontSize: Math.max(9, Math.round(size * 0.42)),
        fontWeight: 850,
        boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.18)',
        flexShrink: 0,
      }}
    >
      {code.slice(0, 3)}
    </div>
  );
}
