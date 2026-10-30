import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          gold: 'var(--accent-gold)',
          'gold-light': 'var(--accent-gold-light)',
          'gold-dark': 'var(--accent-gold-dark)',
          'gold-hover': 'var(--accent-gold-hover)',
          red: 'var(--accent-red)',
        },
        bg: {
          primary: 'var(--bg-primary)',
          card: 'var(--bg-card)',
          'card-elevated': 'var(--bg-card-elevated)',
          surface: 'var(--bg-surface)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          light: 'var(--border-light)',
          hover: 'var(--border-hover)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          gold: 'var(--text-gold)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'var(--gold-gradient)',
        'gold-gradient-hover': 'var(--gold-gradient-hover)',
      },
    },
  },
  plugins: [],
};

export default config;
