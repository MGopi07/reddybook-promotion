import { NextResponse } from 'next/server';
import { transformSportmonksToMatchScore, SportmonksFixture } from '@/lib/sportmonks';
import { SAMPLE_MATCHES, MatchScore } from '@/lib/matches';

const API_TOKEN = process.env.SPORTMONKS_CRICKET_API_TOKEN;
const BASE_URL = 'https://cricket.sportmonks.com/api/v2.0';

// Optimal include relations: teams, innings runs, league crest, venue, and batting/bowling cards
const INCLUDES = 'localteam,visitorteam,runs,league,venue,batting,bowling';

export async function GET() {
  // If no API token is configured in .env.local, render sample matches
  if (!API_TOKEN) {
    return NextResponse.json({
      data: SAMPLE_MATCHES,
      source: 'mock-sample',
      isLiveApiConfigured: false,
      message: 'Add SPORTMONKS_CRICKET_API_TOKEN to .env.local to activate live Sportmonks streaming.',
    });
  }

  try {
    const allMatches: MatchScore[] = [];
    const seenIds = new Set<string>();

    const addUniqueMatch = (m: MatchScore) => {
      // Deduplicate by team names if id differs
      const key = `${m.team1.shortName}-${m.team2.shortName}-${m.series}`;
      if (!seenIds.has(m.id) && !seenIds.has(key)) {
        seenIds.add(m.id);
        seenIds.add(key);
        allMatches.push(m);
      }
    };

    // 1. Fetch Live inplay matches
    const liveUrl = `${BASE_URL}/livescores?api_token=${API_TOKEN}&include=${INCLUDES}`;
    const liveRes = await fetch(liveUrl, {
      next: { revalidate: 15 },
      headers: { Accept: 'application/json' },
    });

    if (liveRes.ok) {
      const liveJson = await liveRes.json();
      const liveFixtures: SportmonksFixture[] = Array.isArray(liveJson.data) ? liveJson.data : [];
      liveFixtures.forEach((f) => {
        const transformed = transformSportmonksToMatchScore(f);
        if (f.winner_team_id || (f.status && ['Finished', 'Aban.', 'Cancl.'].some((s) => f.status.includes(s)))) {
          transformed.status = 'RESULT';
        } else if (f.live || ['1st Innings', '2nd Innings', 'Innings Break', 'Super Over'].some((s) => (f.status || '').includes(s))) {
          transformed.status = 'LIVE';
        }
        addUniqueMatch(transformed);
      });
    }

    // 2. Fetch past results and upcoming fixtures in parallel
    // so Upcoming and Recent tabs are completely populated with real matches (10+ cards)
    const now = new Date();
    const pastDate = new Date(now);
    pastDate.setDate(now.getDate() - 6);
    const futureDate = new Date(now);
    futureDate.setDate(now.getDate() + 8);

    const formatYMD = (d: Date) => d.toISOString().split('T')[0];
    const pastRange = `${formatYMD(pastDate)},${formatYMD(now)}`;
    const futureRange = `${formatYMD(now)},${formatYMD(futureDate)}`;

    const [futureRes, pastRes] = await Promise.all([
      fetch(`${BASE_URL}/fixtures?api_token=${API_TOKEN}&filter%5Bstarts_between%5D=${futureRange}&include=${INCLUDES}&sort=starting_at`, {
        next: { revalidate: 60 },
        headers: { Accept: 'application/json' },
      }),
      fetch(`${BASE_URL}/fixtures?api_token=${API_TOKEN}&filter%5Bstarts_between%5D=${pastRange}&include=${INCLUDES}&sort=-starting_at`, {
        next: { revalidate: 60 },
        headers: { Accept: 'application/json' },
      }),
    ]);

    if (futureRes.ok) {
      const futureJson = await futureRes.json();
      const fixtures: SportmonksFixture[] = Array.isArray(futureJson.data) ? futureJson.data : [];
      fixtures.slice(0, 6).forEach((f) => {
        addUniqueMatch(transformSportmonksToMatchScore(f));
      });
    }

    if (pastRes.ok) {
      const pastJson = await pastRes.json();
      const fixtures: SportmonksFixture[] = Array.isArray(pastJson.data) ? pastJson.data : [];
      fixtures.slice(0, 5).forEach((f) => {
        addUniqueMatch(transformSportmonksToMatchScore(f));
      });
    }

    // 3. If Sportmonks returned fewer than 8 total matches, supplement with high-interest marquee matches
    if (allMatches.length < 8) {
      SAMPLE_MATCHES.forEach((sample) => {
        addUniqueMatch(sample);
      });
    }

    // 4. Sort: LIVE matches always at the front, followed by UPCOMING, followed by RESULT
    const priorityOrder: Record<string, number> = { LIVE: 1, UPCOMING: 2, RESULT: 3 };
    allMatches.sort((a, b) => {
      const orderA = priorityOrder[a.status] || 4;
      const orderB = priorityOrder[b.status] || 4;
      return orderA - orderB;
    });

    return NextResponse.json({
      data: allMatches,
      source: 'sportmonks-multi-fixture-feed',
      count: allMatches.length,
      liveCount: allMatches.filter((m) => m.status === 'LIVE').length,
      upcomingCount: allMatches.filter((m) => m.status === 'UPCOMING').length,
      resultCount: allMatches.filter((m) => m.status === 'RESULT').length,
      isLiveApiConfigured: true,
      status: 200,
    });
  } catch (error: any) {
    console.error('Failed to proxy Sportmonks multi-fixture request:', error);
    return NextResponse.json({
      data: SAMPLE_MATCHES,
      source: 'exception-fallback',
      error: error.message,
    });
  }
}
