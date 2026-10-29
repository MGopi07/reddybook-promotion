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
        'brand-gold': '#E5B842',
        'brand-dark': '#070A0F',
        'brand-card': '#0F1520',
      },
    },
  },
  plugins: [],
};

export default config;
