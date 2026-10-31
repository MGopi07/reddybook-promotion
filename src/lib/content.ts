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
    slug: 'australia-dominate-as-south-africa-batters-struggle-for-runs',
    title: 'Australia Dominate as South Africa Batters Struggle for Runs',
    excerpt: 'Australia’s fearsome fast-bowling attack exposes South Africa’s weakness against short balls at Newlands as Mitchell Starc, Pat Cummins, and Josh Hazlewood maintain relentless pressure.',
    pullQuote: 'Batting against quality fast bowling often comes down to split-second decisions, and a single mistake under pressure can bring an innings to an abrupt end.',
    category: 'Match Reviews',
    image: '/images/batsman_pullshot.jpg',
    imageCaption: 'South Africa batters faced relentless short-pitched bowling from Australia’s pace attack at Newlands.',
    publishedAt: 'October 30, 2026',
    readTime: '5 min read',
    author: AUTHORS.marcus,
    featured: true,
    tags: ['AUSvSA', 'Australia', 'South Africa', 'Test Cricket', 'Fast Bowling', 'Mitchell Starc', 'Pat Cummins', 'Josh Hazlewood'],
    content: [
      'South Africa’s batting line-up continued to struggle against Australia’s pace attack in the third Test at Newlands, with Mitchell Starc once again making life difficult for the home batters. Marques Ackerman became the latest victim of Australia’s aggressive short-ball strategy, highlighting a growing problem for the South African team in the series.',
      'The incident happened during Starc’s second over of his second spell. The Australian left-arm quick delivered a sharp bouncer that followed Ackerman as he attempted to play a ramp shot. The batter changed his approach and tried to pull away, but the ball took the edge of his bat before striking his helmet and travelling towards Cameron Green at slip.',
      'Ackerman took around 15 seconds before deciding to review the decision, only to discover that the review had been requested too late. Replays subsequently confirmed that the ball had touched his bat, meaning the dismissal stood. However, South Africa did not lose a review.',
      'While Ackerman’s dismissal came from an unplayable delivery, several of South Africa’s other wickets were the result of questionable shot selection under relentless bowling pressure. Aiden Markram drove straight into the hands of Travis Head, who was positioned as the only fielder in front of square on the off side. David Bedingham top-edged a pull shot against Josh Hazlewood, finding the fielder at deep square leg. Temba Bavuma then fell to Nathan Lyon late in the day’s play, attempting an aggressive cross-batted shot against a full delivery and getting bowled.',
      'Bavuma’s dismissal also raised concerns about his struggles against offspin. It was the third time in his last five innings that he had been dismissed by an offspinner, an area South Africa will urgently need to address before upcoming matches.',
    ],
    subheadings: [
      {
        title: "Australia's Short-Ball Strategy Continues to Trouble South Africa",
        text: 'The numbers underline just how effective Australia’s fast bowlers have been. With Ackerman’s dismissal included, South Africa have now lost 16 of their 43 wickets in the series to short-pitched deliveries. For a team that traditionally takes pride in handling fast bowling, Australia’s pace trio of Mitchell Starc, Josh Hazlewood and Pat Cummins have maintained relentless pressure, repeatedly exposing technical vulnerabilities.',
      },
      {
        title: 'David Bedingham Under Pressure After Disappointing Outing',
        text: 'David Bedingham’s five innings against Australia have produced scores of 49, 46, 0, 50 and 11. Although showing starts, his problems against short deliveries have been noticeable, including dismissals on pull shots in both innings at Newlands. With Tony de Zorzi nearing a return from injury, Bedingham faces stiff competition for the No. 3 spot.',
      },
      {
        title: "Simon Harmer Defends South Africa's Bowling Effort",
        text: 'South Africa offspinner Simon Harmer defended his side’s effort, explaining that judging dismissals from the dressing room is vastly different from facing thunderbolts in the middle. He also highlighted that South Africa bowled on Day 2 without Kagiso Rabada (stomach cramps) and Marco Jansen (back stiffness) at 100% capacity.',
      },
      {
        title: "Australia's Pace Attack Sets the Standard",
        text: 'The ongoing series has demonstrated the unmatched value of disciplined aggression in Test cricket. South Africa must formulate more decisive responses to short-pitched bowling if they are to counter the world’s premier fast-bowling unit.',
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'england-end-losing-streak-in-pakistan-with-55-run-win-over-sri-lanka',
    title: 'England End Losing Streak in Pakistan with 55-Run Win Over Sri Lanka',
    excerpt: 'Ben Duckett smashes a record-breaking 167 with 24 boundaries as England post 386/5 in Lahore to snap their six-match losing run in Pakistan despite Pavan Rathnayake’s fighting century.',
    pullQuote: 'Ben Duckett’s 167 is the second-highest individual score in men’s ODIs without a six, struck entirely through surgical ground placement and innovative sweeps.',
    category: 'Match Reviews',
    image: '/images/batsman_chase_action.jpg',
    imageCaption: 'Ben Duckett registered his second 150-plus ODI score in Lahore with an extraordinary boundary-hitting masterclass.',
    publishedAt: 'October 30, 2026',
    readTime: '6 min read',
    author: AUTHORS.ravi,
    featured: true,
    tags: ['ENGvSL', 'England Cricket', 'Sri Lanka', 'Ben Duckett', 'Lahore ODI', 'Record Chase', 'Pavan Rathnayake'],
    content: [
      'England finally brought an end to their six-match losing streak in Pakistan with a convincing 55-run victory over Sri Lanka in Lahore on Thursday. Their previous ODI win on Pakistani soil came during the 2005 series, making this an important and long-awaited result for the visitors.',
      'The six consecutive defeats represented England’s longest losing run in Pakistan in men’s ODIs. It was also their joint-second-longest losing streak in any single country, behind only seven successive defeats in England during 2005 and 2006.',
      'The match produced an avalanche of runs and several remarkable individual records, with England and Sri Lanka combining for 717 runs. Although this was the second-highest aggregate in a men’s ODI played in Pakistan, it followed the staggering 859-run spectacle set during their encounter in Rawalpindi the previous week.',
      'England posted an imposing 386 for 5, which ranks as the third-highest ODI total recorded on Pakistani soil, reaffirming their white-ball batting firepower.',
    ],
    subheadings: [
      {
        title: 'England Create a New Milestone Against Sri Lanka',
        text: 'England have now registered four ODI totals of 350 or more against Sri Lanka—with all four coming in 2026 alone. This makes England the first team in men’s ODI history to score four 350-plus totals against the same opposition in a single calendar year.',
      },
      {
        title: 'Ben Duckett Delivers a Record-Breaking 167',
        text: 'Duckett’s 167 was his second ODI score of 150 or more in Lahore, making him just the third batter to record multiple 150-plus knocks at the same venue alongside Brian Lara (Sharjah) and Hamilton Masakadza (Harare). Duckett struck 24 boundaries—the most ever by an Englishman in an ODI—without hitting a single six, second only to David Warner’s 173 (24 fours, 0 sixes) against South Africa in 2016.',
      },
      {
        title: 'Pavan Rathnayake Continues Sensational Form',
        text: 'Sri Lanka’s Pavan Rathnayake notched his third ODI century, all scored against England in 2026 and all while chasing 350-plus targets. He joins Virat Kohli and Rohit Sharma as the only batters with three centuries in 350+ chases, and became the fastest Sri Lankan to three ODI hundreds in just 12 innings.',
      },
      {
        title: "Joe Root's Rare Absence from the Crease",
        text: 'In a statistical quirk, Thursday’s run-fest marked only the second time in Joe Root’s storied ODI career that he did not bat in a completed England innings, the only previous instance being his debut match in Rajkot in 2013.',
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'mominul-haque-replaced-by-jaker-ali-as-bangladesh-concussion-substitute',
    title: 'Mominul Haque Replaced by Jaker Ali as Bangladesh’s Concussion Substitute',
    excerpt: 'Experienced left-hander Mominul Haque ruled out of Dhaka Test after sustaining a head blow at short leg; Jaker Ali returns to Test cricket after 16 months amid top-order crisis.',
    pullQuote: 'Mominul’s absence leaves Bangladesh with an uphill battle, but presents Jaker Ali with an unexpected stage to anchor a crucial second-innings fightback.',
    category: 'Cricket News',
    image: '/images/team_huddle.jpg',
    imageCaption: 'Bangladesh team management confirmed Jaker Ali as concussion substitute following medical assessments on Day 3 in Dhaka.',
    publishedAt: 'October 30, 2026',
    readTime: '4 min read',
    author: AUTHORS.sarah,
    featured: false,
    tags: ['BANvWI', 'Mominul Haque', 'Jaker Ali', 'Concussion Substitute', 'Bangladesh Cricket', 'Dhaka Test'],
    content: [
      'Bangladesh batter Mominul Haque has been ruled out of the remainder of the first Test against West Indies after sustaining a head injury while fielding on Day 3 in Dhaka. The team management named wicketkeeper-batter Jaker Ali as his official concussion substitute.',
      'The incident occurred shortly after the lunch break during the 78th over of West Indies’ first innings. Mominul was positioned at short leg when West Indies batter Joshua Bishop attempted to defend an off-spin delivery from Mehidy Hasan Miraz. The ball took an awkward bounce and deflection towards Mominul, who tried to grasp it but lost balance as he tumbled face-first onto the turf while wearing his helmet.',
      'He was immediately taken off the field for detailed medical assessment. Bangladesh team physiotherapist Bayjedul Islam Khan later confirmed that Mominul exhibited concussive symptoms, prompting match referee approval for Jaker Ali to step in.',
      'Jaker was called into action sooner than anticipated as Bangladesh’s top order crumbled. Captain Najmul Hossain Shanto fell to Roston Chase, leaving the hosts in disarray at 34 for 4 before rain brought an early tea.',
    ],
    subheadings: [
      {
        title: 'A Dramatic Test Recall After 16 Months',
        text: 'The substitution marked Jaker Ali’s return to the Test arena after an absence of 16 months, with his previous appearance dating back to June 2025 against Sri Lanka.',
      },
      {
        title: 'High-Stakes Rescue Mission for Bangladesh',
        text: 'With Bangladesh leading by just 61 runs and four wickets down, Jaker joined Litton Das at the crease with the immense responsibility of navigating West Indies’ spin burst and steering the hosts towards safety.',
      },
    ],
  },
  {
    id: 'art-4',
    slug: 'prasidh-krishna-to-miss-new-zealand-odis-due-to-hamstring-injury',
    title: 'Prasidh Krishna to Miss New Zealand ODIs Due to Hamstring Injury',
    excerpt: 'BCCI rules fast bowler Prasidh Krishna out of the upcoming five-match New Zealand ODI series to manage workload and red-ball preparation ahead of the marquee Test series.',
    pullQuote: 'With the upcoming Tests carrying heavy significance for India’s World Test Championship campaign, red-ball preparation has taken paramount priority over white-ball appearances.',
    category: 'Cricket News',
    image: '/images/bowler_runup.jpg',
    imageCaption: 'Prasidh Krishna will build his red-ball bowling workload with India A ahead of the two-Test series starting November 19.',
    publishedAt: 'October 30, 2026',
    readTime: '5 min read',
    author: AUTHORS.marcus,
    featured: false,
    tags: ['INDvNZ', 'Prasidh Krishna', 'BCCI', 'Indian Cricket Team', 'Team News', 'Injury Update', 'Squad Announcement'],
    content: [
      'India fast bowler Prasidh Krishna has been ruled out of the upcoming five-match ODI series against New Zealand as he continues his recovery from a left hamstring injury. Instead, he will join the India A squad for the third and final four-day match against New Zealand A, while Mohammed Siraj is set to feature in the second four-day fixture.',
      'The BCCI confirmed that Prasidh needs calibrated time to regain full bowling workloads for high-intensity competitive cricket. The board stated that resting him from the ODI series allows him to gain vital red-ball overs in preparation for the two-Test series beginning November 19. India’s ODI series against New Zealand takes place from November 4 to November 15.',
      'Prasidh sustained the injury during the second ODI against West Indies in Guwahati on September 30, where he bowled five overs before leaving the field. Selectors have opted not to name a direct replacement in the white-ball squad.',
      'India will also rest premier speedster Jasprit Bumrah for the ODIs to preserve his fitness for the Test championship fixtures, though Bumrah is slated to play the final four-day encounter for India A.',
      'Meanwhile, all-rounder Nitish Kumar Reddy will feature in the opening ODI on November 4 before linking up with India A on November 7 to sharpen his red-ball credentials.',
    ],
    subheadings: [
      {
        title: 'India Squad for First Three ODIs vs New Zealand',
        text: 'Shubman Gill (Captain), Rohit Sharma, Virat Kohli, Shreyas Iyer (Vice-Captain), KL Rahul (Wicketkeeper), Axar Patel, Naman Dhir, Anshul Kamboj, Gurnoor Brar, Ruturaj Gaikwad, Arshdeep Singh, Ishan Kishan (Wicketkeeper), Mohammed Siraj, Kuldeep Yadav, Nitish Kumar Reddy (First ODI only).',
      },
      {
        title: 'India Squad for Fourth & Fifth ODIs',
        text: 'Shreyas Iyer (Captain), Rohit Sharma, Virat Kohli, Tilak Varma, Ishan Kishan (Vice-Captain and Wicketkeeper), Axar Patel, Naman Dhir, Auqib Nabi, Gurnoor Brar, Ruturaj Gaikwad, Arshdeep Singh, Kumar Kushagra (Wicketkeeper), Mohammed Siraj, Yash Thakur, Kuldeep Yadav.',
      },
      {
        title: 'India A Squad for Second Four-Day Match',
        text: 'Yashasvi Jaiswal, B Sai Sudharsan, Devdutt Padikkal, Yash Rathod, R Smaran, Dhruv Jurel (Captain & Wicketkeeper), Washington Sundar, Mohammed Siraj, Akash Deep, Shikhar Mohan, Mukesh Choudhary, Mukesh Kumar, Manav Suthar, Kumar Kushagra.',
      },
    ],
  },
  {
    id: 'art-5',
    slug: 'rashid-khan-becomes-first-to-200-t20i-wickets-as-omarzai-creates-history',
    title: 'Rashid Khan Becomes First to 200 T20I Wickets as Omarzai Creates History',
    excerpt: 'From 5 for 4 to 221 for 7: Azmatullah Omarzai bludgeons 116 from No. 6 before Rashid Khan becomes the first bowler in history to capture 200 T20I wickets in an astonishing 423-run Sharjah thriller.',
    pullQuote: 'No team in T20 international history had ever reached 200 after losing four wickets for under twenty runs until Omarzai’s extraordinary counter-attack in Sharjah.',
    category: 'T20',
    image: '/images/arena_lights.jpg',
    imageCaption: 'Sharjah Cricket Stadium witnessed historic T20 milestones as Afghanistan and Zimbabwe shattered all-time scoring benchmarks.',
    publishedAt: 'October 30, 2026',
    readTime: '7 min read',
    author: AUTHORS.arjun,
    featured: true,
    tags: ['Rashid Khan', '200 T20I Wickets', 'Azmatullah Omarzai', 'Afghanistan Cricket', 'Sikandar Raza', 'Sharjah', 'T20 Records'],
    content: [
      'Afghanistan produced an astonishing batting resurrection against Zimbabwe in Sharjah on Thursday, setting a series of world records in T20 cricket. After collapsing to 5 for 4 in the initial overs, Afghanistan recovered with breathtaking ferocity to post 221 for 7, becoming the first team in T20I history to surpass 200 after losing four wickets for fewer than 20 runs.',
      'The previous T20I record belonged to India, who amassed 212 for 4 against Afghanistan in Bengaluru in 2024 after their fourth wicket fell at 22. In global franchise T20s, only Jamaica Tallawahs had previously surpassed 200 from a sub-20 position (225/6 from 16/4 in CPL 2018).',
      'The match culminated in legendary leg-spinner Rashid Khan achieving yet another milestone, becoming the first bowler in cricket history to capture 200 international wickets in men’s T20Is.',
    ],
    subheadings: [
      {
        title: 'Azmatullah Omarzai and Sikandar Raza Make History',
        text: 'Azmatullah Omarzai played one of the greatest T20 counter-attacks ever seen, smashing 116 from No. 6. It stands as the third-highest individual score from No. 6 or lower in T20I history, and the first century ever scored from outside the top five by a Full Member nation batter. Meanwhile, Zimbabwe captain Sikandar Raza struck a magnificent century at 40 years and 188 days, becoming the oldest player in men’s T20I history to score a hundred.',
      },
      {
        title: 'A Historic 176 Runs in the Final 10 Overs',
        text: 'Afghanistan obliterated the death overs, blasting 176 runs in their final 10 overs—breaking India’s Full Member record of 169 set against New Zealand. Combined with Zimbabwe’s 120 runs in their final 10 overs, the 296 runs scored across the last 10 overs represents the highest total ever recorded in T20I history, just three runs shy of the overall T20 record set by RCB and SRH in IPL 2024.',
      },
      {
        title: 'Two Century Partnerships in the Lower Order',
        text: 'The fixture became the first T20 contest in history to witness two separate century stands for the sixth wicket or lower, featuring Omarzai’s partnership and an unbeaten 120-run alliance between Sikandar Raza and Tafadzwa Tsiga.',
      },
      {
        title: 'Highest T20I Match Aggregate in the UAE (423 Runs)',
        text: 'With 423 runs scored on the night, Sharjah established a new record for the highest match aggregate in UAE cricket history, eclipsing the previous mark of 411 between UAE and Bangladesh.',
      },
    ],
  },
  {
    id: 'art-6',
    slug: 'roston-chase-dismantles-bangladesh-top-order-after-west-indies-trail',
    title: 'Roston Chase Dismantles Bangladesh Top Order After West Indies Trail',
    excerpt: 'Roston Chase claims three wickets in quick succession to leave Bangladesh reeling at 34 for 4 with a slender 61-run lead at tea after Nayeem Hasan’s 4 for 33 gave the hosts first-innings advantage.',
    pullQuote: 'In the space of just 14 deliveries, Roston Chase transformed West Indies’ deficit into an electrifying opportunity for a famous overseas victory.',
    category: 'Match Reviews',
    image: '/images/cricket_ball_turf.jpg',
    imageCaption: 'Roston Chase’s precision spin bowling turned the Dhaka Test on its head on the third afternoon.',
    publishedAt: 'October 30, 2026',
    readTime: '5 min read',
    author: AUTHORS.ravi,
    featured: false,
    tags: ['BANvWI', 'Roston Chase', 'West Indies Cricket', 'Bangladesh', 'Dhaka Test', 'Nayeem Hasan', 'Spin Bowling'],
    content: [
      'Bangladesh suffered a dramatic top-order collapse on the third afternoon of the first Test against West Indies in Dhaka, losing four wickets for just 34 runs in their second innings. West Indies off-spinner Roston Chase spearheaded the attack with three quick wickets, leaving the hosts clutching a slender overall lead of 61 runs at tea.',
      'Having bowled West Indies out for 245 shortly after lunch, Bangladesh appeared poised to build a match-winning lead. However, their top order capitulated against disciplined Caribbean spin and seam, leaving Litton Das (4*) and concussion substitute Jaker Ali (1*) to pick up the pieces before rain forced an early tea break.',
      'West Indies made their first incision in the second over when Shamar Joseph had Tanzid Hasan caught for a duck by Chase at gully. Chase then came into the attack in the seventh over and instantly seized command of the contest.',
    ],
    subheadings: [
      {
        title: "Roston Chase's Three-Wicket Hurricane",
        text: 'Chase clean-bowled first-innings centurion Shadman Islam with a delivery that drifted beautifully past the outside edge into off stump. On the very next ball, Towhid Hridoy holed out to Jayden Seales at mid-off with an ill-advised lofted drive. Chase capped his devastating spell by trapping Bangladesh captain Najmul Hossain Shanto lbw for 10.',
      },
      {
        title: "Nayeem Hasan Leads Bangladesh's Earlier Fightback",
        text: 'Earlier in the day, Bangladesh off-spinner Nayeem Hasan bowled with immaculate control, cleaning up the West Indies lower order by dismissing Justin Greaves (46), Shamar Joseph, Jomel Warrican, and Jayden Seales to finish with 4 for 33 and hand Bangladesh a 27-run first-innings buffer.',
      },
      {
        title: "Tagenarine Chanderpaul's Gritty Half-Century",
        text: 'West Indies had earlier mounted strong morning resistance thanks to opener Tagenarine Chanderpaul, who compiled a patient 56 off 184 balls and stitched a 51-run sixth-wicket partnership with Roston Chase before falling to Shoriful Islam.',
      },
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
  'Test Special: Australia fast-bowling trio exposes South Africa weakness against short deliveries at Newlands',
  'Lahore Run-Fest: Ben Duckett bludgeons 167 with 24 boundaries as England beat Sri Lanka by 55 runs',
  'Sharjah History: Rashid Khan reaches 200 T20I wickets as Omarzai blasts 116 from No. 6',
  'Dhaka Drama: Roston Chase triggers Bangladesh collapse with 3 wickets as West Indies fight back',
  'Squad Update: Prasidh Krishna to miss New Zealand ODIs to build red-ball workload with India A',
  'Injury Report: Jaker Ali named Bangladesh concussion substitute for Mominul Haque in 1st Test',
];

export const BRAND_CONFIG = {
  name: 'REDDY BOOK',
  tagline: 'Premium Cricket Intelligence & Sports Entertainment',
  shortDesc: 'The authoritative destination for sharp cricket journalism, in-depth match analysis, tactical breakdowns and exclusive Reddy Book sports entertainment.',
  whatsappUrl:
    'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+need+help.&type=phone_number&app_absent=0',
  joinNowUrl:
    'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+join+the+club.&type=phone_number&app_absent=0',
  exploreUrl:
    'https://api.whatsapp.com/send/?phone=447868175325&text=Hi+Reddy+Book%21+I+want+to+join+the+club.&type=phone_number&app_absent=0',
};
