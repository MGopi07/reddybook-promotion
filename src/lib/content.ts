export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  subheadings?: { title: string; text: string }[];
  pullQuote?: string;
  category: 'Cricket News' | 'Match Previews' | 'Match Reviews' | 'Analysis' | 'T20' | 'IPL';
  image: string;
  imageCaption?: string;
  publishedAt: string;
  readTime: string;
  author: Author;
  featured?: boolean;
  tags: string[];
}

export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  keyTakeaways: string[];
  category: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  author: Author;
  featured?: boolean;
}

export const CATEGORIES = [
  'All',
  'Cricket News',
  'Match Previews',
  'Match Reviews',
  'Analysis',
  'T20',
  'IPL',
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const AUTHORS: Record<string, Author> = {
  ravi: {
    name: 'Ravi Shankaran',
    role: 'Senior Cricket Analyst & Former First-Class Strategist',
    avatar: '/images/author_1.jpg',
  },
  sarah: {
    name: 'Sarah Mitchell',
    role: 'International Cricket Correspondent',
    avatar: '/images/author_2.jpg',
  },
  arjun: {
    name: 'Arjun Dasgupta',
    role: 'Data & Performance Analytics Lead',
    avatar: '/images/author_3.jpg',
  },
  marcus: {
    name: 'Marcus Vance',
    role: 'Pace Bowling Specialist & Features Writer',
    avatar: '/images/author_4.jpg',
  },
};

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'india-vs-australia-t20-the-key-battles-to-watch',
    title: 'India vs Australia T20: The Key Battles to Watch',
    excerpt: 'From Bumrah’s toe-crushers in the powerplay to Head’s relentless aggression against left-arm spin, here is how the marquee clash will be won.',
    pullQuote: 'Modern T20 matches aren’t won with blanket tactics; they are decided by three-ball sequences between specialized combatants.',
    category: 'Match Previews',
    image: '/images/stadium_floodlights.jpg',
    imageCaption: 'The stage is set under the floodlights for another high-voltage India-Australia encounter.',
    publishedAt: '2 hours ago',
    readTime: '6 min read',
    author: AUTHORS.ravi,
    featured: true,
    tags: ['INDvAUS', 'T20 Cricket', 'Match Preview', 'Bumrah', 'Tactics'],
    content: [
      'When two of world cricket’s most dominant white-ball powers collide under the lights, micro-matchups dictate the ultimate destiny of the game. Neither team relies on intuition alone anymore; every field position, bowling change, and boundary option is backed by terabytes of tracking data.',
      'The headline duel starts right at the top: Travis Head against Jasprit Bumrah. In the last twelve months, Head has attacked deliveries pitching on good length with a boundary percentage exceeding 28%. Yet against Bumrah’s scrambled seamers angling back into the right-hander or holding line to the southpaw, Head has been restricted to a strike rate of 114 with four dismissals.',
      'The secondary battlefield lies in overs 7 through 11. Australia’s leg-spin weapon, Adam Zampa, has historically slowed India’s surge through flatter trajectories and subtle variations in pace. If Suryakumar Yadav and Hardik Pandya can destabilize Zampa’s rhythm early without losing wickets, the death overs tilt sharply in India’s favor.',
      'Fielding efficiency in the ring will also prove decisive. In high-stakes fixtures between these sides, saving 12 to 15 runs in the first six overs often separates victory from heartbreak.',
    ],
    subheadings: [
      {
        title: 'Phase 1: The New Ball Blitzkrieg',
        text: 'Both sides possess openers who look to clear the 30-yard circle within the first three balls. Bowlers who can bowl the hard length at 140kph without offering width will dictate which side claims the crucial powerplay cushion.',
      },
      {
        title: 'Phase 2: The Middle Overs Standoff',
        text: 'Australia will look to squeeze with dual spin options, while India’s middle order will test boundary riders with calculated lofted drives against the turn.',
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'why-the-middle-overs-are-becoming-a-t20-chess-match',
    title: 'Why the Middle Overs Are Becoming a T20 Chess Match',
    excerpt: 'The era of consolidation between overs 7 and 15 is dead. How modern teams use entry points, matchup analytics, and field manipulation to break games open.',
    pullQuote: 'The team that manages 85+ runs in overs 7–15 with fewer than two wickets lost wins more than 81% of night games.',
    category: 'Analysis',
    image: '/images/tactical_field.jpg',
    imageCaption: 'Batsmen now alter their guard and stance to exploit vacant areas in the deep.',
    publishedAt: '4 hours ago',
    readTime: '8 min read',
    author: AUTHORS.arjun,
    featured: false,
    tags: ['Analytics', 'T20 Strategy', 'Middle Overs', 'Cricket Science'],
    content: [
      'For the first decade of T20 cricket, coaches preached a simplistic formula: explode in the powerplay, nudge singles through the middle, and launch an all-out assault in the final four overs. That conventional wisdom has been completely discarded in elite competitions.',
      'Today, the middle overs (7–15) have evolved into the most mathematically dense period of play. Teams no longer view wickets as assets to preserve at all costs, but as currency to spend in pursuit of maximizing run rate per phase.',
      'Captains are employing counter-intuitive field settings: keeping deep third-man up, packing the leg-side boundary, and offering the off-side gap while ordering bowlers to execute knuckleballs and wide yorkers.',
      'As data analytics teams gain greater real-time influence, batting orders have become dynamic rather than rigid. Left-right combinations are deployed specifically to disrupt spin bowlers who rely on orthodox wrist angles.',
    ],
    subheadings: [
      {
        title: 'The Inning-Weighted Strike Rate Metric',
        text: 'Statistical models now prove that a 35 off 18 balls in overs 9 to 13 provides greater win-probability value than an anchor 65 off 50 balls.',
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'five-young-players-ready-to-make-a-statement',
    title: 'Five Young Players Ready to Make a Statement',
    excerpt: 'Raw pace, unorthodox wrist spin, and fearless 360-degree power hitting: meet the breakout talents poised to dominate the upcoming season.',
    pullQuote: 'Fearlessness is no longer an occasional trait in youth cricket; it is the default baseline for the next generation.',
    category: 'Cricket News',
    image: '/images/cricket_ball_turf.jpg',
    imageCaption: 'Young players are entering international setups equipped with years of franchise academy prep.',
    publishedAt: '6 hours ago',
    readTime: '5 min read',
    author: AUTHORS.sarah,
    featured: false,
    tags: ['Young Stars', 'Scouting', 'Future Talent', 'IPL Prospects'],
    content: [
      'Every generation witnesses a technological leap in how youngsters are discovered and nurtured. Today’s teenage cricket prodigies arrive on the international circuit having faced automated bowling machines firing at 155kph since age fourteen.',
      'From Rajasthan’s latest fast-bowling sensation who clocked 149kph in domestic trials to Guyana’s teenage left-hander who hits sixes over extra cover with nonchalant flick of the wrists, the pipeline of raw skill has never been more vibrant.',
      'Franchise scouts now monitor biometric markers, release velocity, ball RPMs, and bat speed indices before a player even makes their first-class debut. We profile five distinct talents who possess the athletic ceiling to redefine their respective national squads.',
    ],
  },
  {
    id: 'art-4',
    slug: 'the-small-decisions-that-build-a-successful-chase',
    title: 'The Small Decisions That Build a Successful Chase',
    excerpt: 'Chasing 200+ in T20 is no longer a miracle—it is an engineering problem. Deconstructing the micro-tactics of elite finishing squads.',
    pullQuote: 'A chase of 210 isn’t conquered in the 19th over; it is constructed in the two quiet overs where eight singles are turned into twelve runs.',
    category: 'Analysis',
    image: '/images/batsman_pullshot.jpg',
    imageCaption: 'The art of pacing a high chase requires calculated risks on specific deliveries.',
    publishedAt: '8 hours ago',
    readTime: '7 min read',
    author: AUTHORS.ravi,
    featured: false,
    tags: ['Chase Masterclass', 'Run Chase', 'T20 Tactics', 'Match Pressure'],
    content: [
      'Target chasing in modern cricket is won or lost in the margins between boundary balls. While television packages highlight the towering sixes over long-on, dressing rooms review the frequency of dot balls and the conversion of ones into twos.',
      'The modern chaser calculates required run rates not as an aggregate over 20 overs, but as target boundaries per bowler allotment. By identifying the weakest link in the opposition attack and taking 18 runs from their solitary over, batters reduce the pressure against frontline strike bowlers.',
      'Another critical factor is boundary distance asymmetry. In stadiums with short square boundaries and massive straight hits, chasing sides proactively manipulate strike to ensure their designated hitters target the 62-meter rope.',
    ],
  },
  {
    id: 'art-5',
    slug: 'the-stadium-moments-that-make-cricket-unforgettable',
    title: 'The Stadium Moments That Make Cricket Unforgettable',
    excerpt: 'Roars that shake the concrete, collective silences before the final delivery, and the visceral energy that lives inside world-class cricket grounds.',
    pullQuote: 'When 90,000 voices gasp in unison at an edge flying towards slip, sports transforms into theater.',
    category: 'Cricket News',
    image: '/images/stadium_crowd.jpg',
    imageCaption: 'Stadium atmospheres in Melbourne, Kolkata and London provide unmatched acoustic intensity.',
    publishedAt: '12 hours ago',
    readTime: '4 min read',
    author: AUTHORS.marcus,
    featured: false,
    tags: ['Stadiums', 'Fan Culture', 'Atmosphere', 'Cricket Passion'],
    content: [
      'There is an acoustic resonance unique to cricket stadiums. Unlike continuous football chants or basketball sirens, cricket operates in rhythmic pulses: three minutes of tense stillness as fielders adjust, punctuated by volcanic explosions of sound.',
      'Whether it is the Melbourne Cricket Ground under twilight, Eden Gardens illuminated during a World Cup semi-final, or the historic Pavilion at Lord’s, physical venues hold the emotional memory of generations.',
      'In an era where millions consume games through mobile screens and digital highlights, the visceral presence of live cricket reminds us why the sport endures as a global cultural phenomenon.',
    ],
  },
  {
    id: 'art-6',
    slug: 'ipl-tactical-evolution-death-bowling-yorker-vs-wide-bouncer',
    title: 'IPL Tactical Evolution: Why the Wide Yorker is Yielding to the Hard Bouncer',
    excerpt: 'Batters moving deep in their crease forced bowlers to abandon the conventional blockhole. How the high bumper became cricket’s premier defensive weapon.',
    pullQuote: 'When the batter stands on their stumps waiting for the yorker, the best delivery is the one that forces their chest backward.',
    category: 'IPL',
    image: '/images/bowler_runup.jpg',
    imageCaption: 'Fast bowlers now practice heavy-ball bouncers with pinpoint accuracy to stifle boundary hitters.',
    publishedAt: '14 hours ago',
    readTime: '7 min read',
    author: AUTHORS.marcus,
    featured: false,
    tags: ['IPL', 'Bowling Tactics', 'Fast Bowling', 'Death Overs'],
    content: [
      'For over two decades, the toe-crushing yorker was considered the undisputed king of death bowling. If a bowler could land three out of six deliveries within two inches of the popping crease, they were guaranteed a lucrative multi-million rupee franchise contract.',
      'However, modern bat design, ramp innovation, and batters adopting deep stances right on top of their bails turned the yorker into a full toss or a slot ball with minimal margin for error. A miss by two inches now results in a 95-meter six over midwicket.',
      'Enter the modern tactical antidote: the hard cross-seam bouncer angled into the armpit at 142kph, combined with knuckle-ball off-cutters wide outside off stump. Bowlers who possess steep bounce have regained control of the final overs.',
    ],
  },
  {
    id: 'art-7',
    slug: 'match-review-england-vs-south-africa-super-over-thriller',
    title: 'Match Review: England vs South Africa Super Over Thriller',
    excerpt: 'Anatomy of an instant classic: how tactical courage and ice-cold nerve in the 41st over decided an epic clash in Cape Town.',
    pullQuote: 'In the Super Over, there is no time for regrets. You commit to your target length and live with the result.',
    category: 'Match Reviews',
    image: '/images/team_huddle.jpg',
    imageCaption: 'The dramatic final over concluded with all 11 fielders inside the inner circle.',
    publishedAt: '1 day ago',
    readTime: '6 min read',
    author: AUTHORS.sarah,
    featured: false,
    tags: ['ENGvSA', 'Match Review', 'Super Over', 'Thriller'],
    content: [
      'Cape Town witnessed one of the most heart-stopping conclusions in modern T20 history as England and South Africa could not be separated after forty overs of relentless hitting and extraordinary fielding.',
      'Tied on 194 apiece, the match went into an electric Super Over. South Africa turned to their seasoned yorker specialist, while England opted for a left-arm seamer renowned for deceptive changes of pace.',
      'The decisive play occurred on the fifth ball of England’s chase: a deliberate ramp shot played with open face past the short third man that touched the boundary rope by two inches.',
    ],
  },
  
  {
    id: 'art-8',
    slug: 'ipl-auction-dynamics-how-algorithms-shape-franchise-bidding',
    title: 'IPL Auction Dynamics: How Algorithms Shape Franchise Bidding',
    excerpt: 'Inside the war rooms where data scientists, former captains, and franchise owners calculate the exact financial ceiling for every squad member.',
    pullQuote: 'The auction isn’t won by spending the most on the marquee icon; it is won by securing four high-efficiency domestic role players at base price.',
    category: 'IPL',
    image: '/images/stadium_trophy.jpg',
    imageCaption: 'The auction paddle battles represent months of statistical modeling and scenario planning.',
    publishedAt: '2 days ago',
    readTime: '8 min read',
    author: AUTHORS.ravi,
    featured: false,
    tags: ['IPL Auction', 'Economics', 'Analytics', 'Strategy'],
    content: [
      'Months before the auctioneer raises the gavel, franchise war rooms run millions of Monte Carlo simulations to model every possible bidding sequence.',
      'Every player is assigned a "Value Over Replacement Player" (VORP) score tailored to the home stadium’s pitch characteristics. A team playing seven matches on a sluggish red-soil surface values a left-arm orthodox spinner substantially higher than a team playing on a true bouncy track.',
      'We go behind the curtain to explore how behavioral economics, bidding traps, and salary-cap optimization dictate cricket’s most dramatic financial spectacle.',
    ],
  },
  {
    id: 'art-9',
    slug: 'captaincy-under-pressure-the-mindset-of-championship-leaders',
    title: 'Captaincy Under Pressure: The Mindset of Championship Leaders',
    excerpt: 'What separates great tacticians from good ones when 80,000 fans are roaring and 12 runs are needed off the final over?',
    pullQuote: 'Calmness is contagious. When the captain projects clarity, the bowler can execute without second-guessing.',
    category: 'Cricket News',
    image: '/images/cricket_pitch_warm.jpg',
    imageCaption: 'Leadership in high-pressure cricket requires balancing statistical plans with gut instinct.',
    publishedAt: '2 days ago',
    readTime: '5 min read',
    author: AUTHORS.sarah,
    featured: false,
    tags: ['Leadership', 'Captaincy', 'Mindset', 'Pressure'],
    content: [
      'When the noise inside a stadium peaks and the momentum is slipping away, a cricket captain’s job is one of the loneliest leadership positions in professional sports.',
      'Unlike football or basketball, where coaches can call timeouts or substitute players in real time, a cricket captain stands alone in the middle of the field with eleven athletes looking to them for conviction.',
      'Studying the greatest modern leaders reveals a consistent pattern: they prioritize field clarity over emotional reactions, and ensure their bowlers are committed 100% to a chosen delivery plan.',
    ],
  },
];

export const VIDEOS: Video[] = [
  {
    id: 'vid-1',
    slug: 't20-match-highlights-the-biggest-moments',
    title: 'T20 Match Highlights: The Biggest Moments & Turning Points',
    description: 'Relive the high-octane drama of the latest super-over thriller with complete tactical commentary, multi-angle replays, and dugout reactions.',
    keyTakeaways: [
      'How the bowling side defended 9 runs in the final over',
      'The critical boundary catch at deep mid-wicket',
      'Field placements that forced false attacking shots',
    ],
    category: 'Highlights',
    duration: '12:40',
    publishedAt: '3 hours ago',
    thumbnail: '/images/match_action.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: '142K',
    author: AUTHORS.ravi,
    featured: true,
  },
  {
    id: 'vid-2',
    slug: 'inside-the-training-ground-pace-bowlers-prep',
    title: 'Inside the Training Ground: Fast Bowlers Prep for High Velocity',
    description: 'Go behind the scenes as elite pacers hit the gym, test run-up biomechanics with wearable sensors, and fine-tune reverse swing in the nets.',
    keyTakeaways: [
      'Biomechanics of shoulder rotation at 145kph',
      'Recovery routines between back-to-back matches',
      'Grip calibrations for the scrambled-seam variation',
    ],
    category: 'Features',
    duration: '08:15',
    publishedAt: '6 hours ago',
    thumbnail: '/images/training_athletes.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: '98K',
    author: AUTHORS.marcus,
    featured: false,
  },
  {
    id: 'vid-3',
    slug: 'bowling-plans-reading-the-batters-trigger-movement',
    title: 'Bowling Plans: Reading the Batter’s Trigger Movement in Real Time',
    description: 'An elite masterclass examining how international bowlers spot initial shuffles to adjust length, line, and pace before the ball leaves the hand.',
    keyTakeaways: [
      'Spotting back-and-across movement vs front-foot press',
      'Targeting top-of-off against batters who walk across',
      'Using the crease angle to exploit technical blindspots',
    ],
    category: 'Masterclass',
    duration: '06:50',
    publishedAt: '12 hours ago',
    thumbnail: '/images/fitness_workout.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    views: '65K',
    author: AUTHORS.marcus,
    featured: false,
  },
  {
    id: 'vid-4',
    slug: 'classic-finishes-that-went-down-to-the-wire',
    title: 'Classic Finishes That Went Down to the Wire',
    description: 'A nostalgic look back at the most dramatic last-ball finishes in modern cricket history, analyzed with modern data metrics.',
    keyTakeaways: [
      'The psychology of defending 6 off 1 ball',
      'Batting composure against pinpoint death yorkers',
      'How fielders handle the pressure of the final rope',
    ],
    category: 'Archive',
    duration: '15:22',
    publishedAt: '1 day ago',
    thumbnail: '/images/arena_lights.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    views: '210K',
    author: AUTHORS.sarah,
    featured: false,
  },
  {
    id: 'vid-5',
    slug: 'tactical-room-how-captains-defend-the-ramp-shot',
    title: 'Tactical Room: How Captains Set Defenses Against the Ramp Shot',
    description: 'Watch former coaches and data analysts break down field geometry on the digital whiteboard to neutralize 360-degree batters.',
    keyTakeaways: [
      'Fine leg positioning inside vs outside the ring',
      'Pace-off deliveries into the pitch to prevent pace generation',
      'Wide lines that turn ramps into miscued slices',
    ],
    category: 'Tactics',
    duration: '09:30',
    publishedAt: '2 days ago',
    thumbnail: '/images/batsman_pullshot.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    views: '84K',
    author: AUTHORS.arjun,
    featured: false,
  },
  {
    id: 'vid-6',
    slug: 'post-match-debrief-deciphering-pitch-conditions',
    title: 'Post-Match Debrief: Deciphering the Pitch Conditions in Ahmedabad',
    description: 'Soil moisture, red clay vs black soil, and dew factor: how environmental variables shaped the outcome of the marquee tournament match.',
    keyTakeaways: [
      'Difference in bounce between red and black soil wickets',
      'Managing wet ball conditions with sawdust and towel work',
      'Toss impact on winning percentages under lights',
    ],
    category: 'Analysis',
    duration: '11:05',
    publishedAt: '3 days ago',
    thumbnail: '/images/cricket_pitch_warm.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    views: '118K',
    author: AUTHORS.ravi,
    featured: false,
  },
];

export const TICKER_ITEMS = [
  'ICC T20 Super 8: Tactical breakdown of death bowling trends now published',
  'Pitch Report: Red clay surface expected to offer true bounce in Ahmedabad tonight',
  'Injury Update: Lead fast bowler cleared for selection following fitness test',
  'Editorial Special: Why 200 is the new psychological par score in franchise cricket',
  'Statistical Deep Dive: Left-arm wrist spin emerging as the most economical middle-overs weapon',
];

export const BRAND_CONFIG = {
  name: 'REDDY BOOK',
  tagline: 'Premium Cricket Intelligence & Sports Entertainment',
  shortDesc: 'The authoritative destination for sharp cricket journalism, in-depth match analysis, tactical breakdowns and exclusive Reddy Book sports entertainment.',
  joinNowUrl: '#join-reddybook',
  exploreUrl: '#explore-reddybook',
};
