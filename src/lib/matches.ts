export interface TeamScore {
  name: string;
  shortName: string;
  flagUrl?: string;
  color?: string;
  score?: string;
  overs?: string;
}

export interface MatchScore {
  id: string;
  series: string;
  leagueLogo?: string;
  format: string; // 'T20I' | 'IPL' | 'ODI' | 'TEST'
  matchNumber: string;
  venue: string;
  status: 'LIVE' | 'UPCOMING' | 'RESULT';
  statusText: string;
  team1: TeamScore;
  team2: TeamScore;
  crr?: string;
  rrr?: string;
  requiredEquation?: string;
  linkText?: string;
  isLiveStreamCard?: boolean;
  streamImage?: string;
  streamViewers?: string;
  streamTitle?: string;
  streamSubtitle?: string;
}

export const SAMPLE_MATCHES: MatchScore[] = [
  {
    id: 'm-1',
    series: "ICC MEN'S T20 WORLD CUP",
    format: 'T20I',
    matchNumber: 'Super 8 • Match 42',
    venue: 'Kensington Oval, Barbados',
    status: 'LIVE',
    statusText: 'India need 24 runs in 16 balls to win',
    crr: '9.42',
    rrr: '9.00',
    requiredEquation: 'Target 186',
    team1: {
      name: 'Australia',
      shortName: 'AUS',
      color: '#00843D',
      score: '185/6',
      overs: '20.0',
    },
    team2: {
      name: 'India',
      shortName: 'IND',
      color: '#0055A5',
      score: '162/3',
      overs: '17.2',
    },
  },
  {
    id: 'm-2',
    series: 'ENGLAND TOUR OF WEST INDIES',
    format: '3rd ODI',
    matchNumber: '3rd ODI (D/N)',
    venue: 'Bridgetown, Barbados',
    status: 'LIVE',
    statusText: 'West Indies need 48 runs in 38 balls to win',
    crr: '6.45',
    rrr: '7.57',
    requiredEquation: 'Target 298',
    team1: {
      name: 'England',
      shortName: 'ENG',
      color: '#CE1124',
      score: '297/8',
      overs: '50.0',
    },
    team2: {
      name: 'West Indies',
      shortName: 'WI',
      color: '#7B002C',
      score: '250/5',
      overs: '43.4',
    },
  },
  {
    id: 'm-3',
    series: "ICC MEN'S T20 WORLD CUP",
    format: 'T20I',
    matchNumber: 'Super 8 • Match 43',
    venue: 'Sir Vivian Richards Stadium, Antigua',
    status: 'LIVE',
    statusText: 'Rain delay • Covers coming off (Target TBD)',
    crr: '7.81',
    team1: {
      name: 'South Africa',
      shortName: 'SA',
      color: '#007749',
      score: '112/4',
      overs: '14.2',
    },
    team2: {
      name: 'New Zealand',
      shortName: 'NZ',
      color: '#111111',
      score: 'Yet to bat',
    },
  },
  {
    id: 'm-6',
    series: 'OFFICIAL 4K BROADCAST',
    format: 'LIVE STREAM',
    matchNumber: 'Multi-Cam • Stadium Feed',
    venue: 'Kensington Oval, Barbados',
    status: 'LIVE',
    statusText: 'Broadcasting in 4K HDR • Multi-Language Audio Feed',
    isLiveStreamCard: true,
    streamImage: '/images/live_stream_card_bg.jpg',
    streamViewers: '248.5K',
    streamTitle: 'INDIA VS AUSTRALIA',
    streamSubtitle: 'Super 8 Marquee Clash • Watch Every Ball Live in 4K',
    team1: {
      name: 'Australia',
      shortName: 'AUS',
      color: '#00843D',
      score: '185/6',
      overs: '20.0',
    },
    team2: {
      name: 'India',
      shortName: 'IND',
      color: '#0055A5',
      score: '162/3',
      overs: '17.2',
    },
  },
  {
    id: 'm-4',
    series: 'PAKISTAN TOUR OF AUSTRALIA',
    format: '2nd T20I',
    matchNumber: '2nd T20I (Night)',
    venue: 'Sydney Cricket Ground, Sydney',
    status: 'UPCOMING',
    statusText: 'Match starts today at 7:00 PM IST (Toss 6:30 PM)',
    team1: {
      name: 'Australia',
      shortName: 'AUS',
      color: '#00843D',
      score: 'Starts in 2h 45m',
    },
    team2: {
      name: 'Pakistan',
      shortName: 'PAK',
      color: '#01411C',
      score: 'Lineups TBA',
    },
  },
  {
    id: 'm-5',
    series: 'BORDER-GAVASKAR TROPHY',
    format: '1st Test',
    matchNumber: 'Day 1 • 1st Test',
    venue: 'Perth Stadium, Perth',
    status: 'UPCOMING',
    statusText: 'Tomorrow, 7:50 AM IST • Pitch Report live',
    team1: {
      name: 'Australia',
      shortName: 'AUS',
      color: '#00843D',
      score: 'Tomorrow 7:50 AM',
    },
    team2: {
      name: 'India',
      shortName: 'IND',
      color: '#0055A5',
      score: 'Trophy Opener',
    },
  },
];
