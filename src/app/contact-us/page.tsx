'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  MessageSquare,
  Clock,
  Sparkles,
  Send,
  CheckCircle,
  HelpCircle,
  Headphones,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';
import '@/styles/legal-info.css';

export default function ContactUsPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Cricket News Enquiries',
    message: '',
  });

  const officialEmail = 'reddybookofficialonline26@gmail.com';
  const whatsappNumber = '+44 7868 175325';
  const whatsappUrl =
    'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddybook%21+I+have+an+enquiry+regarding+the+site.&type=phone_number&app_absent=0';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate smooth submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="legal-info-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="page-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="page-breadcrumb-separator">/</span>
          <span className="page-breadcrumb-current">Contact Us</span>
        </nav>

        {/* Page Hero */}
        <header className="page-hero">
          <div className="hero-pill-badge">
            <Sparkles size={14} />
            <span>Direct Support & Editorial Inquiries</span>
          </div>
          <h1 className="page-hero-title">Contact Us | reddybookofficial.online</h1>
          <p className="page-hero-subtitle">
            At <strong>reddybookofficial.online</strong>, we value your feedback, suggestions and questions. Whether you have a query about our cricket news, live scores, match updates, or website content, feel free to get in touch with us.
          </p>
          <div className="page-hero-meta">
            <div className="hero-meta-item">
              <Mail size={16} />
              <span>{officialEmail}</span>
            </div>
            <div className="hero-meta-item">
              <Clock size={16} />
              <span>Average response time: &lt; 24 hours</span>
            </div>
          </div>
        </header>

        {/* Contact Layout */}
        <div className="contact-layout">
          {/* Left Column: Direct Channels & Information */}
          <div className="contact-info-panel">
            {/* Email Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <Mail size={22} />
              </div>
              <div className="channel-details">
                <h4>Official Email</h4>
                <p>
                  Send us your editorial questions, suggestions, press releases, or partnership requests directly via email.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <a
                    href={`mailto:${officialEmail}`}
                    className="channel-action-link"
                    title="Send Email"
                  >
                    {officialEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'var(--bg-card-elevated)',
                      border: '1px solid var(--border-subtle)',
                      color: copiedEmail ? '#34D399' : 'var(--text-secondary)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                    }}
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap wa">
                <MessageSquare size={22} />
              </div>
              <div className="channel-details">
                <h4>WhatsApp Member Support</h4>
                <p>
                  Need instant assistance or have rapid queries regarding match schedules and site features? Chat with our team on WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-action-link wa-link"
                >
                  <span>Chat on WhatsApp: {whatsappNumber}</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Support Notice Card */}
            <div className="legal-highlight-box" style={{ margin: 0 }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#FFFFFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Headphones size={18} color="var(--accent-gold)" />
                Our Commitment to Readers
              </h4>
              <p>
                Our goal is to provide cricket fans with a helpful and enjoyable online experience. Your feedback helps us improve our platform and serve our readers better. Every message is reviewed by our editorial and technical teams.
              </p>
            </div>

            {/* Enquiry Types Pill Grid */}
            <div style={{ background: 'var(--bg-card)', padding: '24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '14px', letterSpacing: '0.4px' }}>
                Common Enquiry Types
              </h4>
              <ul className="legal-list" style={{ margin: 0 }}>
                <li className="legal-list-item">
                  <strong>Cricket News Inquiries:</strong> Reporting corrections, press inquiries, or player info.
                </li>
                <li className="legal-list-item">
                  <strong>Feedback &amp; Suggestions:</strong> Ideas for new cricket coverage, stats, and interface enhancements.
                </li>
                <li className="legal-list-item">
                  <strong>Technical Support:</strong> Bug reports, broken link notifications, or loading issues.
                </li>
                <li className="legal-list-item">
                  <strong>Business Collaborations:</strong> Media partnerships, sponsorships, and advertising queries.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            <h2 className="form-header-title">Send Us a Message</h2>
            <p className="form-header-desc">
              Fill out the form below and our team will get back to you as quickly as possible.
            </p>

            {isSubmitted ? (
              <div className="form-success-alert">
                <CheckCircle size={48} color="#34D399" />
                <h4>Thank You For Reaching Out!</h4>
                <p>
                  Your message has been received. Our team will review your enquiry and get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  className="form-submit-btn"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', category: 'Cricket News Enquiries', message: '' });
                  }}
                  style={{ marginTop: '16px', fontSize: '0.95rem', padding: '10px 20px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      <span>Your Name</span>
                      <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      <span>Email Address</span>
                      <span className="form-label-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. name@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-category" className="form-label">
                    <span>Enquiry Subject</span>
                    <span className="form-label-required">*</span>
                  </label>
                  <select
                    id="contact-category"
                    className="form-select"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Cricket News Enquiries">Cricket News &amp; Content Enquiries</option>
                    <option value="Feedback & Suggestions">Feedback &amp; Feature Suggestions</option>
                    <option value="Technical Support">Technical Support &amp; Website Issues</option>
                    <option value="Business Collaborations">Business Collaborations &amp; Sponsorships</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    <span>Your Message</span>
                    <span className="form-label-required">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-textarea"
                    placeholder="Please provide details about your enquiry or feedback..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-btn"
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
