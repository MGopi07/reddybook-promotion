import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  Flame,
  Globe,
  Radio,
  FileText,
  BarChart3,
  Trophy,
  Video,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import '@/styles/legal-info.css';

export const metadata: Metadata = {
  title: 'About Us | reddybookofficial.online Your Cricket Information Hub',
  description:
    'Learn about reddybookofficial.online, your destination for live cricket scores, match updates, breaking cricket news, player statistics and match highlights.',
  keywords: [
    'reddybookofficial.online',
    'about us',
    'cricket website',
    'cricket information',
    'live cricket scores',
    'latest cricket news',
    'cricket updates',
    'match highlights',
    'cricket statistics',
  ],
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Us | reddybookofficial.online Your Cricket Information Hub',
    description:
      'Learn about reddybookofficial.online, your premier destination for live cricket scores, breaking news, player telemetry and match highlights.',
    type: 'website',
  },
};

export default function AboutUsPage() {
  const offerings = [
    {
      title: 'Live Cricket Scores',
      desc: 'Follow ongoing international and franchise matches with instantaneous ball-by-ball score telemetry.',
      icon: <Radio size={24} />,
    },
    {
      title: 'Latest Cricket News',
      desc: 'Stay informed about breaking cricket news, team announcements, squad changes, and tournament developments.',
      icon: <FileText size={24} />,
    },
    {
      title: 'Match Updates & Reports',
      desc: 'Get useful, in-depth reports and insights covering both international series and major domestic leagues.',
      icon: <Zap size={24} />,
    },
    {
      title: 'Ball-by-Ball Commentary',
      desc: 'Keep track of granular match progress, run rates, boundary wagon-wheels, and game-defining moments.',
      icon: <Activity size={24} />,
    },
    {
      title: 'Player Statistics & Records',
      desc: 'Explore comprehensive batsman and bowler performances, head-to-head records, and historical cricket metrics.',
      icon: <BarChart3 size={24} />,
    },
    {
      title: 'Match Results & Tables',
      desc: 'Check completed match results, net run-rate calculations, and tournament points tables at a glance.',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Cricket Highlights & Media',
      desc: 'Discover video breakdowns, match turning points, batting masterclasses, and curated video updates.',
      icon: <Video size={24} />,
    },
    {
      title: 'Tactical Match Analysis',
      desc: 'Read pitch telemetry, ground conditions, matchup advantages, and strategic cricket projections.',
      icon: <Flame size={24} />,
    },
  ];

  const whyChoosePoints = [
    'Easy, friction-free access to cricket-related information 24 hours a day.',
    'Timely match news, pitch telemetry, and live score updates as the action unfolds.',
    'Comprehensive coverage of both marquee international clashes and domestic tournaments.',
    'Simple, responsive navigation crafted for seamless mobile and desktop browsing.',
    'Quality editorial content tailored for cricket fans of all experience levels.',
  ];

  return (
    <div className="legal-info-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-current">About Us</span>
        </nav>

        {/* Page Hero */}
        <header className="page-hero">
          <div className="hero-pill-badge">
            <Sparkles size={14} />
            <span>Cricket Information Hub</span>
          </div>
          <h1 className="page-hero-title">About Us Reddybookofficial.online</h1>
          <p className="page-hero-subtitle">
            Welcome to reddybookofficial.online, your online destination for the latest cricket news, live scores, match updates, and cricket-related information. Our goal is to keep cricket fans connected with the game by providing timely updates, useful insights, and easy access to important match information.
          </p>
          <div className="page-hero-meta">
            <div className="hero-meta-item">
              <Globe size={16} />
              <span>reddybookofficial.online</span>
            </div>
            <div className="hero-meta-item">
              <ShieldCheck size={16} />
              <span>Verified Cricket Intelligence Portal</span>
            </div>
          </div>
        </header>

        {/* Who We Are & Mission Cards */}
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-icon">
              <Globe size={26} />
            </div>
            <h2 className="about-card-title">Who We Are</h2>
            <p className="about-card-desc">
              At <strong>reddybookofficial.online</strong>, we understand the excitement and passion that cricket brings to millions of fans around the world. Whether it&apos;s an international series, a prestigious domestic tournament, or an electrifying T20 competition, we aim to bring you closer to the action with relevant cricket coverage and updates.
            </p>
            <p className="about-card-desc" style={{ marginTop: '12px' }}>
              We strive to make following cricket simple, convenient, and enjoyable for everyone, from casual followers to dedicated cricket enthusiasts.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <Flame size={26} />
            </div>
            <h2 className="about-card-title">Our Mission</h2>
            <p className="about-card-desc">
              Our mission is to make cricket information accessible to all through a simple and user-friendly platform. We aim to provide relevant, easy-to-understand, and regularly updated cricket content so readers can stay informed about their favourite teams, players, and tournaments.
            </p>
            <p className="about-card-desc" style={{ marginTop: '12px' }}>
              From fast live score feeds to comprehensive analytical journalism, we bridge the gap between match data and fan excitement.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">
              <ShieldCheck size={26} />
            </div>
            <h2 className="about-card-title">Our Commitment</h2>
            <p className="about-card-desc">
              We are committed to continually improving our platform and making cricket-related information easier to explore. We value our readers and aim to provide a reliable and enjoyable browsing experience through informative content and regular updates.
            </p>
            <p className="about-card-desc" style={{ marginTop: '12px' }}>
              Accuracy, reader transparency, and real-time coverage form the bedrock of our editorial standards.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <section style={{ margin: '48px 0' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px' }}>
            <span className="hero-pill-badge">Feature Offerings</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              What We Offer
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginTop: '8px' }}>
              Our platform focuses on delivering a comprehensive suite of cricket-related content designed to give fans an unbeatable edge.
            </p>
          </div>

          <div className="offerings-grid">
            {offerings.map((offering, idx) => (
              <div key={idx} className="offering-item">
                <div className="offering-icon">{offering.icon}</div>
                <div className="offering-text">
                  <h4>{offering.title}</h4>
                  <p>{offering.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose reddybookofficial.online? */}
        <section className="why-choose-banner">
          <h2 className="why-choose-title">Why Choose reddybookofficial.online?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '780px', marginBottom: '28px', lineHeight: '1.6' }}>
            We believe cricket fans deserve a convenient, fast, and clutter-free place to follow the latest happenings in the sport. That is why our entire platform is engineered around your passion:
          </p>

          <div className="why-choose-list">
            {whyChoosePoints.map((point, index) => (
              <div key={index} className="why-choose-item">
                <div className="why-choose-check">✓</div>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stay Connected With Cricket Banner */}
        <div className="legal-article-body" style={{ marginTop: '40px' }}>
          <h2 className="legal-section-title">Stay Connected With Cricket</h2>
          <p className="legal-paragraph">
            Whether you want to check the latest cricket scores, read match reports, follow player performances, or stay updated with cricket news, <strong>reddybookofficial.online</strong> aims to keep you informed every ball of the way.
          </p>
          <p className="legal-paragraph">
            Thank you for visiting <strong>reddybookofficial.online</strong> and being part of our cricket-loving community!
          </p>
          <div className="legal-highlight-box">
            <p>
              <strong>reddybookofficial.online</strong> – Your Destination for Cricket News, Scores, Stats and Updates.
            </p>
          </div>

          {/* Quick Action Navigation */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '28px' }}>
            <Link href="/news" className="info-contact-email-btn">
              <span>Read Latest Cricket News</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact-us"
              className="info-contact-email-btn"
              style={{ background: 'var(--bg-card-elevated)', color: 'var(--text-primary)', border: '1px solid var(--border-light)' }}
            >
              <span>Get in Touch With Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
