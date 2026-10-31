'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/content';
import '@/styles/footer.css';

export default function Footer() {

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link href="/" className="brand-logo" aria-label="Reddy Book Cricket Home">
              <img
                src="/images/reddybook-logo.webp"
                alt="Reddy Book"
                className="brand-logo-img"
                loading="lazy"
                decoding="async"
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
                <a
                  href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+Latest+Stories.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Latest Stories
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Previews.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Match Previews
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Reviews.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Match Reviews
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+Match+Analysis.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  Tactical Analysis
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+IPL+Hub+Updates.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link"
                >
                  IPL Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Media & Gaming Hub */}
          <div>
            <h4 className="footer-heading">Company &amp; Legal</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/about-us" className="footer-nav-link">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us" className="footer-nav-link">Contact Support</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="footer-nav-link">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/videos" className="footer-nav-link">Highlights &amp; Videos</Link>
              </li>
            </ul>
          </div>

          {/* VIP Club Column */}
          <div className="footer-join-col">
            <h4 className="footer-heading">REDDY BOOK VIP Club</h4>
            <p className="footer-join-desc">
              Join India&apos;s leading sports intelligence &amp; tournament analytics portal. Join the Reddybook Sports Community for 24/7 match analysis &amp; dedicated member support.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+join+the+club.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-join-now-btn"
              aria-label="Join Reddy Book VIP Club on WhatsApp"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight size={16} />
            </a>
            
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            © {new Date().getFullYear()} {BRAND_CONFIG.name}. All rights reserved. Reddy Book is an independent editorial cricket publication and gaming promotion destination. All trademarks and player names belong to their respective copyright holders.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/about-us" className="footer-nav-link">About Us</Link>
            <Link href="/contact-us" className="footer-nav-link">Contact Us</Link>
            <Link href="/privacy-policy" className="footer-nav-link">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="footer-nav-link">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
