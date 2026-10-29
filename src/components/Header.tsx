'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Flame } from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/content';
import JoinModal from './JoinModal';
import '@/styles/header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'Videos', href: '/videos' },
    { label: 'Match Previews', href: '/news?category=Match+Previews' },
    { label: 'Analysis', href: '/news?category=Analysis' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.includes('?')) {
      return pathname.startsWith('/news') && typeof window !== 'undefined' && window.location.search.includes(href.split('?')[1]);
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          {/* Brand Logo */}
          <Link href="/" className="brand-logo" aria-label="Reddy Book Cricket Home">
            <img
              src="/images/reddybook-logo.png"
              alt="Reddy Book"
              className="brand-logo-img"
            />
           
          </Link>

          {/* Desktop Navigation */}
          <nav className="main-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <button
              className="login-link"
              onClick={() => setIsJoinModalOpen(true)}
            >
              Explore
            </button>
            <button
              className="btn-join"
              onClick={() => setIsJoinModalOpen(true)}
              aria-label="Join Redhot Sports"
            >
              <span>Join Now</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mobile-nav-actions">
            <button
              className="btn-join"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsJoinModalOpen(true);
              }}
            >
              <span>Join Now</span>
              <ArrowUpRight size={18} />
            </button>
            <button
              className="login-link"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsJoinModalOpen(true);
              }}
            >
              Member Login
            </button>
          </div>
        </div>
      </header>

      {/* Reusable Join Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        destinationUrl={BRAND_CONFIG.joinNowUrl}
      />
    </>
  );
}
