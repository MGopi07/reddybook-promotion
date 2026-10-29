'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/content';
import JoinModal from './JoinModal';
import '@/styles/footer.css';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link href="/" className="brand-logo" aria-label="Reddy Book Cricket Home">
              <img
                src="/images/reddybook-logo.png"
                alt="Reddy Book"
                className="brand-logo-img"
              />
              
            </Link>

            <p className="footer-tagline">
              {BRAND_CONFIG.shortDesc}
            </p>

            <div className="footer-socials">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="X (formerly Twitter)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Editorial Navigation */}
          <div>
            <h4 className="footer-heading">Editorial</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/news" className="footer-nav-link">Latest Stories</Link>
              </li>
              <li>
                <Link href="/news?category=Match+Previews" className="footer-nav-link">Match Previews</Link>
              </li>
              <li>
                <Link href="/news?category=Match+Reviews" className="footer-nav-link">Match Reviews</Link>
              </li>
              <li>
                <Link href="/news?category=Analysis" className="footer-nav-link">Tactical Analysis</Link>
              </li>
              <li>
                <Link href="/news?category=IPL" className="footer-nav-link">IPL Hub</Link>
              </li>
            </ul>
          </div>

          {/* Media & Gaming Hub */}
          <div>
            <h4 className="footer-heading">Media & Club</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/videos" className="footer-nav-link">Video Highlights</Link>
              </li>
              <li>
                <Link href="/videos" className="footer-nav-link">Masterclasses</Link>
              </li>
              <li>
                <Link href="/news?category=T20" className="footer-nav-link">T20 Tournaments</Link>
              </li>
              <li>
                <a href="#join-redhot" className="footer-nav-link">REDDY BOOK VIP Club</a>
              </li>
              <li>
                <a href="#promotions" className="footer-nav-link">Game Day Offers</a>
              </li>
            </ul>
          </div>

          {/* VIP Club Column */}
          <div className="footer-join-col">
            <h4 className="footer-heading">REDDY BOOK VIP Club</h4>
            <p className="footer-join-desc">
              Join India&apos;s leading sports intelligence &amp; gaming platform. Get your instant VIP ID with 24/7 dedicated support.
            </p>
            <button
              className="footer-join-now-btn"
              onClick={() => setIsModalOpen(true)}
              aria-label="Join Reddy Book VIP Club"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight size={16} />
            </button>
            <a
              href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+help.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-quick-link"
              title="Instant WhatsApp Support"
            >
              <span className="footer-wa-dot" />
              <span>WhatsApp: +44 7868 175325</span>
            </a>
          </div>
        </div>

        {/* VIP Join Modal */}
        <JoinModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="JOIN REDDY BOOK VIP CLUB"
          destinationUrl="https://reddybook.club"
        />

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved. Reddy Book is an independent editorial cricket publication and gaming promotion destination. All trademarks and player names belong to their respective copyright holders.
          </p>

          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="/news" className="footer-nav-link">Privacy Policy</Link>
            <Link href="/news" className="footer-nav-link">Terms of Service</Link>
            <Link href="/news" className="footer-nav-link">Editorial Guidelines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
