'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Home,
  Newspaper,
  Video,
  Calendar,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_CONFIG } from '@/lib/content';
import JoinModal from './JoinModal';
import '@/styles/header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'News', href: '/news', icon: <Newspaper size={18} /> },
    { label: 'Videos', href: '/videos', icon: <Video size={18} /> },
    { label: 'Match Previews', href: '/news?category=Match+Previews', icon: <Calendar size={18} /> },
    { label: 'Analysis', href: '/news?category=Analysis', icon: <TrendingUp size={18} /> },
  ];

  // Prevent background scrolling when offcanvas is open & support Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

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
      </header>

      {/* Offcanvas Backdrop */}
      <div
        className={`offcanvas-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Offcanvas Side Drawer */}
      <aside
        className={`offcanvas-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Offcanvas Header */}
        <div className="offcanvas-header">
          <Link
            href="/"
            className="offcanvas-brand"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Reddy Book Home"
          >
            <img
              src="/images/reddybook-logo.png"
              alt="Reddy Book"
              className="offcanvas-logo-img"
            />
          </Link>
          <button
            type="button"
            className="offcanvas-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Offcanvas Body */}
        <div className="offcanvas-body">
          <div className="offcanvas-nav-group">
            <span className="offcanvas-section-label">Navigation</span>
            <nav className="offcanvas-nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`offcanvas-nav-link ${isActive(link.href) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="offcanvas-link-left">
                    <span className="offcanvas-link-icon">{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight size={16} className="offcanvas-chevron" />
                </Link>
              ))}
            </nav>
          </div>

          {/* VIP Trust Card */}
          <div className="offcanvas-vip-card">
            <div className="offcanvas-vip-badge">
              <ShieldCheck size={14} />
              <span>Verified Cricket Portal</span>
            </div>
            <p className="offcanvas-vip-text">
              Instant cricket ID refilling, fast withdrawals & 24/7 dedicated assistance.
            </p>
          </div>
        </div>

        {/* Offcanvas Footer */}
        <div className="offcanvas-footer">
          <button
            className="btn-join offcanvas-btn-primary"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsJoinModalOpen(true);
            }}
          >
            <span>Join Now</span>
            <ArrowUpRight size={18} />
          </button>
          <button
            className="login-link offcanvas-btn-secondary"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsJoinModalOpen(true);
            }}
          >
            Member Login
          </button>
        </div>
      </aside>

      {/* Reusable Join Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        destinationUrl={BRAND_CONFIG.joinNowUrl}
      />
    </>
  );
}
