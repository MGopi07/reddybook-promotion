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
    title: '100% Welcome Cricket Bonus',
    highlight: 'GET UP TO ₹10,000',
    description: 'Double your first match deposit with zero rollover requirements + 50 free game credits.',
    ctaText: 'JOIN NOW',
    icon: 'Gift',
    accentGradient: 'linear-gradient(135deg, #F5D77F 0%, #E5B842 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(229, 184, 66, 0.12) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_bonus_coins.jpg',
  },
  {
    id: 'promo-2',
    badge: '⚡ LIVE MATCH BOOST',
    badgeType: 'red',
    title: 'India vs Australia Mega Odds',
    highlight: '2.5X BOOSTED ODDS',
    description: 'Exclusive boosted return on all powerplay boundary and sixes predictions today.',
    ctaText: 'PLAY NOW',
    icon: 'Zap',
    accentGradient: 'linear-gradient(135deg, #FF6B6B 0%, #EE5253 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(238, 82, 83, 0.14) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_cricket_action.jpg',
  },
  {
    id: 'promo-3',
    badge: '👑 VIP PRIVILEGE',
    badgeType: 'purple',
    title: 'Reddy Book VIP Elite Pass',
    highlight: 'PERSONAL MANAGER & PERKS',
    description: 'Instant 24/7 dedicated support, higher limits, luxury merchandise, and private game rooms.',
    ctaText: 'JOIN NOW',
    icon: 'Crown',
    accentGradient: 'linear-gradient(135deg, #A29BFE 0%, #6C5CE7 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.14) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_vip_card.jpg',
  },
  {
    id: 'promo-4',
    badge: '💰 ZERO-RISK CASHBACK',
    badgeType: 'green',
    title: '10% Weekly Cricket Refund',
    highlight: '10% INSTANT BACK',
    description: 'Never walk away empty-handed. Automated cashback credited to your wallet every Monday.',
    ctaText: 'PLAY NOW',
    icon: 'Coins',
    accentGradient: 'linear-gradient(135deg, #00B894 0%, #00CEC9 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(0, 184, 148, 0.12) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_bonus_coins.jpg',
  },
  {
    id: 'promo-5',
    badge: '🏆 PREDICTOR JACKPOT',
    badgeType: 'gold',
    title: 'World Cup Match Predictor',
    highlight: '₹5,00,000 PRIZE POOL',
    description: 'Predict the top batter and highest wicket-taker in today’s matches to win mega rewards.',
    ctaText: 'PLAY NOW',
    icon: 'Trophy',
    accentGradient: 'linear-gradient(135deg, #FDCB6E 0%, #E5B842 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(253, 203, 110, 0.13) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_trophy_gold.jpg',
  },
  {
    id: 'promo-6',
    badge: '⚡ EXPRESS PAYOUT',
    badgeType: 'cyan',
    title: '90-Second Instant Withdrawal',
    highlight: 'UPI & IMPS UNDER 90s',
    description: 'Enjoy guaranteed lightning-speed settlements anytime directly into your bank or UPI account.',
    ctaText: 'JOIN NOW',
    icon: 'Flame',
    accentGradient: 'linear-gradient(135deg, #74B9FF 0%, #0984E3 100%)',
    bgGradient: 'linear-gradient(135deg, rgba(9, 132, 227, 0.14) 0%, rgba(15, 22, 34, 0.95) 100%)',
    bgImage: '/images/promo_cricket_action.jpg',
  },
];
