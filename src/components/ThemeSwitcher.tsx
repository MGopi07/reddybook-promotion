'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Palette, Check, RotateCcw, X, Sparkles } from 'lucide-react';
import '@/styles/themeswitcher.css';

export interface ThemePreset {
  id: string;
  name: string;
  primary: string;
  light: string;
  dark: string;
  hover: string;
  gradient: string;
  gradientHover: string;
}

const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'gold',
    name: 'Signature Gold',
    primary: '#E5B842',
    light: '#F7D572',
    dark: '#C6931E',
    hover: '#FFE082',
    gradient: 'linear-gradient(135deg, #FBE08E 0%, #E5B842 50%, #B8851B 100%)',
    gradientHover: 'linear-gradient(135deg, #FFF0B8 0%, #F5C755 50%, #CE9622 100%)',
  },
  {
    id: 'emerald',
    name: 'Emerald Arena',
    primary: '#10B981',
    light: '#34D399',
    dark: '#059669',
    hover: '#6EE7B7',
    gradient: 'linear-gradient(135deg, #6EE7B7 0%, #10B981 50%, #047857 100%)',
    gradientHover: 'linear-gradient(135deg, #A7F3D0 0%, #34D399 50%, #059669 100%)',
  },
  {
    id: 'crimson',
    name: 'Crimson Strike',
    primary: '#EF4444',
    light: '#F87171',
    dark: '#DC2626',
    hover: '#FCA5A5',
    gradient: 'linear-gradient(135deg, #FCA5A5 0%, #EF4444 50%, #B91C1C 100%)',
    gradientHover: 'linear-gradient(135deg, #FECACA 0%, #F87171 50%, #DC2626 100%)',
  },
  {
    id: 'cyan',
    name: 'Cyber Royal',
    primary: '#06B6D4',
    light: '#22D3EE',
    dark: '#0891B2',
    hover: '#67E8F9',
    gradient: 'linear-gradient(135deg, #67E8F9 0%, #06B6D4 50%, #0E7490 100%)',
    gradientHover: 'linear-gradient(135deg, #A5F3FC 0%, #22D3EE 50%, #0891B2 100%)',
  },
  {
    id: 'purple',
    name: 'Neon Amethyst',
    primary: '#8B5CF6',
    light: '#A78BFA',
    dark: '#7C3AED',
    hover: '#C4B5FD',
    gradient: 'linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 50%, #6D28D9 100%)',
    gradientHover: 'linear-gradient(135deg, #DDD6FE 0%, #A78BFA 50%, #7C3AED 100%)',
  },
  {
    id: 'orange',
    name: 'Solar Blaze',
    primary: '#F97316',
    light: '#FB923C',
    dark: '#EA580C',
    hover: '#FDBA74',
    gradient: 'linear-gradient(135deg, #FDBA74 0%, #F97316 50%, #C2410C 100%)',
    gradientHover: 'linear-gradient(135deg, #FED7AA 0%, #FB923C 50%, #EA580C 100%)',
  },
  {
    id: 'pink',
    name: 'Viper Pink',
    primary: '#EC4899',
    light: '#F472B6',
    dark: '#DB2777',
    hover: '#F9A8D4',
    gradient: 'linear-gradient(135deg, #F9A8D4 0%, #EC4899 50%, #BE185D 100%)',
    gradientHover: 'linear-gradient(135deg, #FCE7F3 0%, #F472B6 50%, #DB2777 100%)',
  },
  {
    id: 'silver',
    name: 'Stealth Silver',
    primary: '#CBD5E1',
    light: '#F1F5F9',
    dark: '#94A3B8',
    hover: '#FFFFFF',
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #CBD5E1 50%, #64748B 100%)',
    gradientHover: 'linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 50%, #94A3B8 100%)',
  },
];

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    return {
      r: parseInt(cleanHex[0] + cleanHex[0], 16),
      g: parseInt(cleanHex[1] + cleanHex[1], 16),
      b: parseInt(cleanHex[2] + cleanHex[2], 16),
    };
  }
  if (cleanHex.length === 6) {
    return {
      r: parseInt(cleanHex.substring(0, 2), 16),
      g: parseInt(cleanHex.substring(2, 4), 16),
      b: parseInt(cleanHex.substring(4, 6), 16),
    };
  }
  return null;
}

function adjustColor(hex: string, percent: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const modify = (val: number) => {
    const res = Math.min(255, Math.max(0, Math.round(val + (val * percent) / 100)));
    return res.toString(16).padStart(2, '0');
  };
  return `#${modify(rgb.r)}${modify(rgb.g)}${modify(rgb.b)}`;
}

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePresetId, setActivePresetId] = useState<string>('gold');
  const [customColor, setCustomColor] = useState<string>('#E5B842');
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const createCustomPreset = useCallback((color: string): ThemePreset => {
    const light = adjustColor(color, 25);
    const dark = adjustColor(color, -25);
    const hover = adjustColor(color, 35);
    return {
      id: 'custom',
      name: 'Custom',
      primary: color,
      light,
      dark,
      hover,
      gradient: `linear-gradient(135deg, ${light} 0%, ${color} 50%, ${dark} 100%)`,
      gradientHover: `linear-gradient(135deg, ${hover} 0%, ${light} 50%, ${dark} 100%)`,
    };
  }, []);

  // Apply CSS variables to root (keeping the luxury background uniform)
  const applyTheme = useCallback((preset: ThemePreset) => {
    const root = document.documentElement;
    const rgb = hexToRgb(preset.primary) || { r: 229, g: 184, b: 66 };

    // Set accent colors
    root.style.setProperty('--accent-gold', preset.primary);
    root.style.setProperty('--accent-gold-light', preset.light);
    root.style.setProperty('--accent-gold-dark', preset.dark);
    root.style.setProperty('--accent-gold-hover', preset.hover);
    root.style.setProperty('--accent-gold-subtle', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`);
    root.style.setProperty('--accent-gold-glow', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.28)`);
    root.style.setProperty('--accent-gold-border', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.38)`);
    root.style.setProperty('--gold-gradient', preset.gradient);
    root.style.setProperty('--gold-gradient-hover', preset.gradientHover);

    // Set matching red/accent aliases
    root.style.setProperty('--accent-red', preset.primary);
    root.style.setProperty('--accent-red-hover', preset.hover);
    root.style.setProperty('--accent-red-subtle', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`);
    root.style.setProperty('--accent-red-glow', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.28)`);
    root.style.setProperty('--accent-red-border', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.38)`);
    root.style.setProperty('--text-gold', preset.light);

    // Ensure background canvas is 100% unified and consistent across all sections
    root.style.setProperty('--bg-primary', '#070A0F');
    root.style.setProperty('--bg-card', '#0F1520');
    root.style.setProperty('--bg-card-elevated', '#141C2B');
    root.style.setProperty('--bg-surface', '#1A2436');
    root.style.setProperty('--border-subtle', '#202B3C');

    // Save to localStorage
    try {
      localStorage.setItem(
        'reddybook_theme_config',
        JSON.stringify({
          presetId: preset.id,
          customColor: preset.id === 'custom' ? preset.primary : undefined,
        })
      );
    } catch {
      // storage unavailable in some private windows
    }
  }, []);

  const selectCustomColor = useCallback((color: string) => {
    setCustomColor(color);
    setActivePresetId('custom');
    const customPreset = createCustomPreset(color);
    applyTheme(customPreset);
  }, [applyTheme, createCustomPreset]);

  // Load saved theme on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('reddybook_theme_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.presetId === 'custom' && parsed.customColor) {
          selectCustomColor(parsed.customColor);
        } else {
          const match = THEME_PRESETS.find((p) => p.id === parsed.presetId);
          if (match) {
            setActivePresetId(match.id);
            applyTheme(match);
          } else {
            applyTheme(THEME_PRESETS[0]);
          }
        }
      } else {
        applyTheme(THEME_PRESETS[0]);
      }
    } catch {
      applyTheme(THEME_PRESETS[0]);
    }
  }, [applyTheme, selectCustomColor]);

  // Handle outside click & escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectPreset = (preset: ThemePreset) => {
    setActivePresetId(preset.id);
    setCustomColor(preset.primary);
    applyTheme(preset);
  };

  const resetDefaults = () => {
    const defaultPreset = THEME_PRESETS[0];
    setActivePresetId(defaultPreset.id);
    setCustomColor(defaultPreset.primary);
    applyTheme(defaultPreset);
  };

  const activePreset =
    THEME_PRESETS.find((p) => p.id === activePresetId) ||
    (activePresetId === 'custom'
      ? { name: 'Custom Palette', primary: customColor }
      : THEME_PRESETS[0]);

  return (
    <>
      {/* Floating Theme Button on Left Side */}
      <aside className="theme-float-container" aria-label="Theme Color Customizer">
        {/* Floating Circular Action Button */}
        <button
          type="button"
          className="theme-float-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label="Change website theme color"
          title="Change Theme Color"
        >
          {/* Pulsing Ripple Wave */}
          <span className="theme-pulse-wave" />

          {/* Palette Icon */}
          <Palette className="theme-btn-icon" />

          {/* Active Color Dot Badge */}
          <span
            className="theme-active-badge"
            style={{
              background: mounted ? activePreset.primary : '#E5B842',
            }}
          />
        </button>

      </aside>

      {/* Theme Studio Popover / Dialog */}
      {isOpen && (
        <>
          <div
            className="theme-panel-backdrop"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            ref={panelRef}
            className="theme-panel-card"
            role="dialog"
            aria-modal="true"
            aria-label="Theme Color Palette Studio"
          >
            {/* Header */}
            <div className="theme-panel-header">
              <div className="theme-panel-title-wrap">
                <div className="theme-panel-icon-wrap">
                  <Palette size={18} />
                </div>
                <div>
                  <h3 className="theme-panel-title">Theme Color</h3>
                  <span className="theme-panel-badge">
                    Active: {activePreset.name}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="theme-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close theme studio"
              >
                <X size={16} />
              </button>
            </div>

            {/* Presets Section */}
            <div className="theme-section-title">
              <span>Accent Color Palettes</span>
              <span className="active-tag">8 Curated</span>
            </div>

            <div className="theme-presets-grid">
              {THEME_PRESETS.map((preset) => {
                const isActive = activePresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    className={`theme-preset-card ${isActive ? 'active' : ''}`}
                    onClick={() => selectPreset(preset)}
                    title={`Select ${preset.name} theme`}
                  >
                    <div className="theme-preset-preview">
                      <div
                        className="theme-preset-preview-inner"
                        style={{ background: preset.gradient }}
                      />
                    </div>
                    <div className="theme-preset-info">
                      <span className="theme-preset-name">{preset.name}</span>
                      <span className="theme-preset-tag">{preset.primary}</span>
                    </div>
                    {isActive && <Check className="theme-check-icon" />}
                  </button>
                );
              })}
            </div>

            {/* Custom Color Input Row */}
            <div className="theme-custom-row">
              <div className="theme-custom-label">
                <span className="theme-custom-title">Custom Accent Color</span>
                <span className="theme-custom-desc">
                  Pick any custom color hex
                </span>
              </div>
              <div className="theme-custom-input-wrap">
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => selectCustomColor(e.target.value)}
                  className="theme-color-input"
                  title="Choose custom theme color"
                  aria-label="Custom color picker"
                />
                <span className="theme-hex-badge">{customColor.toUpperCase()}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="theme-panel-footer">
              <button
                type="button"
                className="theme-reset-btn"
                onClick={resetDefaults}
                title="Reset to Signature Gold"
              >
                <RotateCcw size={12} />
                Reset Defaults
              </button>
              <span className="theme-status-tag">
                <Sparkles size={11} style={{ color: 'var(--accent-gold)' }} />
                Instant Live Sync
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
