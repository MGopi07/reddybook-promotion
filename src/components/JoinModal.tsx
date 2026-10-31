'use client';

import React from 'react';
import { X, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import '@/styles/modal.css';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  destinationUrl?: string;
}

const WHATSAPP_JOIN_URL =
  'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+join+the+club.&type=phone_number&app_absent=0';

export default function JoinModal({
  isOpen,
  onClose,
  title = 'JOIN REDDY BOOK CLUB',
  destinationUrl = WHATSAPP_JOIN_URL,
}: JoinModalProps) {
  if (!isOpen) return null;

  const targetUrl =
    !destinationUrl ||
    destinationUrl === 'https://reddybook.club' ||
    destinationUrl.startsWith('#')
      ? WHATSAPP_JOIN_URL
      : destinationUrl;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <img
            src="/images/reddybook-icon.png"
            alt="Reddy Book Icon"
            style={{ width: 28, height: 28, borderRadius: '50%' }}
          />
          <div className="modal-badge" style={{ margin: 0 }}>VIP Sports Intelligence</div>
        </div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-desc">
          Get direct access to verified pitch reports, deep data analytics, tactical field maps, and priority match notifications.
        </p>

        <div className="modal-feature-list">
          <div className="modal-feature-item">
            <Zap className="modal-feature-icon" size={18} />
            <span>Exclusive match previews & death-over probability models</span>
          </div>
          <div className="modal-feature-item">
            <CheckCircle className="modal-feature-icon" size={18} />
            <span>Real-time player matchups and tactical scouting notes</span>
          </div>
          <div className="modal-feature-item">
            <ShieldCheck className="modal-feature-icon" size={18} />
            <span>Ad-free sports editorial experience & game-day events</span>
          </div>
        </div>

        <div className="modal-actions">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={onClose}
          >
            Continue to REDDY BOOK Club
          </a>
          <button className="btn btn-outline" onClick={onClose}>
            Back to Editorial
          </button>
        </div>

        <div className="modal-footer-note">
          100% Free editorial registration. No credit card required.
        </div>
      </div>
    </div>
  );
}
