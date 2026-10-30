'use client';

import React from 'react';
import '@/styles/whatsapp.css';

interface WhatsAppButtonProps {
  url?: string;
  label?: string;
}

export default function WhatsAppButton({
  url = 'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+help.&type=phone_number&app_absent=0',
}: WhatsAppButtonProps) {
  const whatsappUrl = url;

  return (
    <div className="whatsapp-float-container" aria-label="WhatsApp VIP Support">
      {/* Floating Circular Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp with REDDY BOOK support"
        title="Chat on WhatsApp (Instant ID)"
      >
        {/* Pulsing Ripple Wave */}
        <span className="whatsapp-pulse-wave" />

        {/* WhatsApp Official SVG Logo */}
        <svg
          className="whatsapp-svg-icon"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 0.003c-8.837 0-16 7.163-16 16 0 2.825 0.738 5.588 2.143 8.025l-2.145 7.972 8.163-2.14c2.355 1.285 5.012 1.963 7.839 1.963 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16.002 29.333c-2.483 0-4.912-0.667-7.037-1.928l-0.505-0.3-5.23 1.372 1.397-5.097-0.33-0.525c-1.385-2.203-2.117-4.757-2.117-7.375 0-7.618 6.198-13.818 13.822-13.818 7.625 0 13.825 6.2 13.825 13.818 0 7.622-6.2 13.822-13.825 13.822zM23.577 19.518c-0.415-0.208-2.46-1.213-2.842-1.352s-0.658-0.208-0.935 0.208c-0.277 0.415-1.073 1.352-1.317 1.628-0.242 0.278-0.485 0.312-0.9 0.105s-1.758-0.648-3.35-2.068c-1.238-1.103-2.073-2.467-2.317-2.882-0.242-0.415-0.025-0.64 0.182-0.847 0.187-0.187 0.415-0.485 0.623-0.728 0.208-0.242 0.277-0.415 0.415-0.692s0.070-0.52-0.035-0.728c-0.103-0.208-0.935-2.25-1.282-3.082-0.338-0.81-0.68-0.7-0.935-0.713-0.242-0.012-0.52-0.015-0.798-0.015s-0.728 0.105-1.108 0.52c-0.382 0.415-1.455 1.423-1.455 3.47s1.49 4.025 1.698 4.302c0.208 0.277 2.932 4.477 7.103 6.28 0.992 0.428 1.767 0.685 2.37 0.877 0.997 0.317 1.903 0.272 2.62 0.165 0.8-0.12 2.46-1.005 2.805-1.975s0.347-1.802 0.242-1.975c-0.103-0.173-0.38-0.277-0.797-0.485z" />
        </svg>

        {/* 1 Unread Notification Attention Badge */}
        <span className="whatsapp-notif-badge">1</span>
      </a>
    </div>
  );
}
