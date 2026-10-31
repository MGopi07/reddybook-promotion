export interface PromoCard {
  id: string;
  badge: string;
  badgeType: 'gold' | 'red' | 'green' | 'cyan' | 'purple';
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  icon: 'Zap' | 'Trophy' | 'Gift' | 'Flame' | 'Crown' | 'Coins';
  accentGradient: string;
  bgGradient: string;
  bgImage?: string;
  destinationUrl?: string;
}

export const PROMOTION_CARDS: PromoCard[] = [
  {
    id: 'promo-1',
    badge: '🔥 WELCOME OFFER',
    badgeType: 'gold',
    title: '100% Welcome Sports Bonus',
    highlight: 'GET UP TO ₹10,000',
    description: 'Welcome reward package for new community members with transparent terms and sports pass credits.',
    ctaText: 'KNOW MORE',
    icon: 'Gift',
    accentGradient: 'linear-gradient(135deg, #F5D77F 0%, #E5B842 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(229, 184, 66, 0.12) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_bonus_coins.webp',
  },
  {
    id: 'promo-2',
    badge: '⚡ LIVE MATCH BOOST',
    badgeType: 'red',
    title: 'India vs Australia Tactical Odds',
    highlight: '2.5X VALUE ODDS',
    description: 'Analytical value insights on powerplay boundary projections and sixes metrics today.',
    ctaText: 'KNOW MORE',
    icon: 'Zap',
    accentGradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(238, 82, 83, 0.14) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_cricket_action.webp',
  },
  {
    id: 'promo-3',
    badge: '👑 VIP PRIVILEGE',
    badgeType: 'purple',
    title: 'Reddy Book VIP Elite Pass',
    highlight: 'PERSONAL MANAGER & PERKS',
    description: 'Dedicated 24/7 priority support, sports telemetry updates, community perks, and priority event access.',
    ctaText: 'KNOW MORE',
    icon: 'Crown',
    accentGradient: 'linear-gradient(135deg, #A29BFE 0%, #6C5CE7 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.14) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_vip_card.webp',
  },
  {
    id: 'promo-4',
    badge: '💰 WEEKLY REBATE PROGRAM',
    badgeType: 'green',
    title: '10% Weekly Loyalty Program',
    highlight: '10% LOYALTY REBATE',
    description: 'Structured weekly membership perks and reward points calculated across major cricket fixtures.',
    ctaText: 'KNOW MORE',
    icon: 'Coins',
    accentGradient: 'linear-gradient(135deg, #00B894 0%, #00CEC9 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(0, 184, 148, 0.12) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_bonus_coins.webp',
  },
  {
    id: 'promo-5',
    badge: '🏆 PREDICTOR CONTEST',
    badgeType: 'gold',
    title: 'World Cup Match Predictor',
    highlight: '₹5,00,000 CONTEST POOL',
    description: 'Forecast the top batter and highest wicket-taker in today’s matches in our community contest.',
    ctaText: 'KNOW MORE',
    icon: 'Trophy',
    accentGradient: 'linear-gradient(135deg, #FDCB6E 0%, #E5B842 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(253, 203, 110, 0.13) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_trophy_gold.webp',
  },
  {
    id: 'promo-6',
    badge: '⚡ EXPRESS PROCESSING',
    badgeType: 'cyan',
    title: 'Fast & Secure Account Processing',
    highlight: 'UPI & IMPS PROCESSING',
    description: 'Streamlined digital settlement verification and 24/7 dedicated member payment assistance.',
    ctaText: 'KNOW MORE',
    icon: 'Flame',
    accentGradient: 'linear-gradient(135deg, #74B9FF 0%, #0984E3 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(9, 132, 227, 0.14) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_cricket_action.webp',
  },
];
