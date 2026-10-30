# Sportmonks Cricket API v2.0 — Complete Integration Guide

A complete, production-ready guide to integrating real-time live cricket scores, ball-by-ball updates, tournament badges, and fixture schedules into any **Next.js / React / Node.js** website using the **Sportmonks Cricket API v2.0**.

---

## Table of Contents
1. [Architecture & Security Overview](#1-architecture--security-overview)
2. [Authentication & Base URL](#2-authentication--base-url)
3. [The Key Secret: Include Parameters](#3-the-key-secret-include-parameters)
4. [Core Endpoints Cheat Sheet](#4-core-endpoints-cheat-sheet)
5. [Step-by-Step Implementation](#5-step-by-step-implementation)
   - [Step 1: Environment Variables](#step-1-environment-variables)
   - [Step 2: TypeScript Interfaces & Data Transformer](#step-2-typescript-interfaces--data-transformer)
   - [Step 3: Secure Backend API Route Handler](#step-3-secure-backend-api-route-handler)
   - [Step 4: Frontend React Hook / Polling Component](#step-4-frontend-react-hook--polling-component)
6. [HTTP Status Codes & Troubleshooting](#6-http-status-codes--troubleshooting)
7. [Production Best Practices & Rate-Limit Shield](#7-production-best-practices--rate-limit-shield)

---

## 1. Architecture & Security Overview

```
[Sportmonks Cricket API]
        ▲
        │  (Secure Server-to-Server HTTPS with api_token)
        ▼
[Your Backend / Next.js API Route (/api/cricket/livescores)]
        │  • Protects API Token from client exposure
        │  • In-Memory / ISR Caching (15s - 30s)
        │  • Normalizes Sportmonks schema to clean frontend JSON
        ▼
[Frontend UI: Sliders, Scorecards, Match Centers]
        │  • Client-side polling every 20-30s
        │  • Instant UI updates without full page reload
```

> **CRITICAL RULE**: Never call Sportmonks directly from frontend browser JavaScript. Doing so exposes your secret token in the browser's Network tab and risks third-party abuse or quota theft. Always proxy requests through your own backend.

---

## 2. Authentication & Base URL

* **Base URL**: `https://cricket.sportmonks.com/api/v2.0`
* **Authentication**: Pass your API token as a query parameter on every request:
  ```http
  ?api_token=YOUR_SPORTMONKS_API_TOKEN
  ```
* **Default Rate Limit**: Typically 180 requests per minute (plan-dependent).

---

## 3. The Key Secret: Include Parameters

By default, Sportmonks only returns IDs (`localteam_id: 42`, `venue_id: 77`, etc.). To get team names, flags, scores, overs, and tournament logos in a single request, you **must append the `include` query parameter**.

### Recommended Master Include String:
```text
localteam,visitorteam,runs,league,venue,batting,bowling
```

> **Warning (Common Gotcha)**: In Sportmonks v2.0, batting and bowling includes are **singular** (`batting`, `bowling`), not plural (`battings`, `bowlings`). Requesting plural names returns an `HTTP 400 Bad Request`.

---

## 4. Core Endpoints Cheat Sheet

### 1. Active In-Play Live Matches Only
Returns matches being played on the field at this exact second:
```http
GET https://cricket.sportmonks.com/api/v2.0/livescores/now?api_token={TOKEN}&include=localteam,visitorteam,runs,league,venue
```

### 2. Today's Matches (Live + Completed Today + Scheduled Today)
```http
GET https://cricket.sportmonks.com/api/v2.0/livescores?api_token={TOKEN}&include=localteam,visitorteam,runs,league,venue
```

### 3. Date Range Fixtures (Upcoming & Recent)
To populate upcoming schedules or recent results:
```http
GET https://cricket.sportmonks.com/api/v2.0/fixtures?api_token={TOKEN}&filter[starts_between]=YYYY-MM-DD,YYYY-MM-DD&include=localteam,visitorteam,runs,league,venue&sort=starting_at
```

### 4. Matches for a Specific Tournament (e.g. IPL or BBL)
Filter by `league_id` (e.g., `league_id: 5` for Big Bash League):
```http
GET https://cricket.sportmonks.com/api/v2.0/fixtures?api_token={TOKEN}&filter[league_id]=5&include=localteam,visitorteam,runs,venue
```

### 5. All Cricket Leagues & Badges
```http
GET https://cricket.sportmonks.com/api/v2.0/leagues?api_token={TOKEN}
```

---

## 5. Step-by-Step Implementation

### Step 1: Environment Variables (`.env.local`)

Create or update the `.env.local` file in the **root directory** of your Next.js / Node.js project:

```env
# ==============================================================================
# SPORTMONKS CRICKET API CONFIGURATION
# ==============================================================================

# Your Active Sportmonks Cricket API Token (keep this confidential)
SPORTMONKS_CRICKET_API_TOKEN=qyD4zS59ecTdXh5R8ct8N9FCpXRw4woWV5RBxybol6MK4RcbBk7sbGOgXGPQ

# Optional Base URL override (defaults to v2.0)
SPORTMONKS_API_BASE_URL=https://cricket.sportmonks.com/api/v2.0
```

#### Security Notice (`.gitignore`):
Make sure your `.gitignore` file includes `.env*.local` so your private API key is never committed to GitHub or public version control:

```gitignore
# local environment files
.env*.local
.env.production.local
```

#### Deploying to Production (Vercel / Netlify / VPS):
When deploying to **Vercel**, **Netlify**, or **AWS**:
1. Go to your Project **Settings** → **Environment Variables**.
2. Add Key: `SPORTMONKS_CRICKET_API_TOKEN`
3. Add Value: `qyD4zS59ecTdXh5R8ct8N9FCpXRw4woWV5RBxybol6MK4RcbBk7sbGOgXGPQ`
4. Redeploy your site. No code changes needed!

---

### Step 2: TypeScript Interfaces & Data Transformer
Save this file as `src/lib/sportmonks.ts`:

```typescript
// src/lib/sportmonks.ts

export interface SportmonksTeam {
  id: number;
  name: string;
  code?: string;
  image_path?: string;
  national_team?: boolean;
}

export interface SportmonksRun {
  id: number;
  fixture_id: number;
  team_id: number;
  inning: number;
  score: number;
  wickets: number;
  overs: number;
  updated_at?: string;
}

export interface SportmonksFixture {
  id: number;
  resource: 'fixtures';
  league_id?: number;
  round?: string;
  localteam_id?: number;
  visitorteam_id?: number;
  starting_at?: string;
  type?: string;
  live?: boolean;
  status?: string;
  note?: string;
  venue_id?: number;
  winner_team_id?: number;
  league?: {
    id: number;
    name: string;
    code?: string;
    image_path?: string;
  };
  venue?: {
    id: number;
    name: string;
    city?: string;
    image_path?: string;
  };
  localteam?: SportmonksTeam;
  visitorteam?: SportmonksTeam;
  runs?: SportmonksRun[];
  batting?: Array<{
    player_id: number;
    score: number;
    ball: number;
    four_x: number;
    six_x: number;
    rate: number;
    active: boolean;
  }>;
  bowling?: Array<{
    player_id: number;
    overs: number;
    maidens: number;
    runs: number;
    wickets: number;
    rate: number;
    active: boolean;
  }>;
}

export interface CleanMatchCard {
  id: string;
  series: string;
  leagueLogo?: string;
  format: string;
  matchNumber: string;
  venue: string;
  status: 'LIVE' | 'UPCOMING' | 'RESULT';
  statusText: string;
  team1: {
    name: string;
    shortName: string;
    flagUrl?: string;
    score?: string;
    overs?: string;
  };
  team2: {
    name: string;
    shortName: string;
    flagUrl?: string;
    score?: string;
    overs?: string;
  };
}

/**
 * Normalizes complex Sportmonks fixture relations into a clean, flat frontend card object
 */
export function transformSportmonksToMatchScore(fixture: SportmonksFixture): CleanMatchCard {
  const localId = fixture.localteam_id || fixture.localteam?.id;
  const visitorId = fixture.visitorteam_id || fixture.visitorteam?.id;

  const localRuns = (fixture.runs || []).filter((r) => r.team_id === localId);
  const visitorRuns = (fixture.runs || []).filter((r) => r.team_id === visitorId);

  const latestLocal = localRuns[localRuns.length - 1];
  const latestVisitor = visitorRuns[visitorRuns.length - 1];

  const rawStatus = (fixture.status || '').trim();
  const isLive =
    fixture.live === true ||
    ['1st Innings', '2nd Innings', 'Innings Break', 'Super Over', 'Rain Delay'].some((s) =>
      rawStatus.toLowerCase().includes(s.toLowerCase())
    );

  const isFinished =
    ['Finished', 'Aban.', 'Postp.', 'Cancl.'].some((s) =>
      rawStatus.toLowerCase().includes(s.toLowerCase())
    ) || (fixture.winner_team_id !== null && fixture.winner_team_id !== undefined);

  let matchStatus: 'LIVE' | 'UPCOMING' | 'RESULT' = 'UPCOMING';
  if (isLive) {
    matchStatus = 'LIVE';
  } else if (isFinished) {
    matchStatus = 'RESULT';
  }

  const seriesName = fixture.league?.name || (fixture.type ? `${fixture.type} Tournament` : 'Cricket Series');
  const venueText = fixture.venue ? `${fixture.venue.name}${fixture.venue.city ? `, ${fixture.venue.city}` : ''}` : 'Cricket Ground';

  let statusText = fixture.note || fixture.status || 'Match Scheduled';
  if (matchStatus === 'UPCOMING' && fixture.starting_at) {
    try {
      const dt = new Date(fixture.starting_at);
      statusText = `Starts at ${dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } catch {
      statusText = 'Scheduled';
    }
  }

  const team1Name = fixture.localteam?.name || 'Local Team';
  const team1Code = fixture.localteam?.code || (team1Name.length <= 4 ? team1Name : team1Name.substring(0, 3).toUpperCase());

  const team2Name = fixture.visitorteam?.name || 'Visitor Team';
  const team2Code = fixture.visitorteam?.code || (team2Name.length <= 4 ? team2Name : team2Name.substring(0, 3).toUpperCase());

  return {
    id: `sm-${fixture.id}`,
    series: seriesName.toUpperCase(),
    leagueLogo: fixture.league?.image_path,
    format: fixture.type?.toUpperCase() || 'T20',
    matchNumber: fixture.round || (matchStatus === 'LIVE' ? 'LIVE NOW' : 'Scheduled Match'),
    venue: venueText,
    status: matchStatus,
    statusText,
    team1: {
      name: team1Name,
      shortName: team1Code,
      flagUrl: fixture.localteam?.image_path,
      score: latestLocal ? `${latestLocal.score}/${latestLocal.wickets}` : undefined,
      overs: latestLocal ? `${latestLocal.overs}` : undefined,
    },
    team2: {
      name: team2Name,
      shortName: team2Code,
      flagUrl: fixture.visitorteam?.image_path,
      score: latestVisitor ? `${latestVisitor.score}/${latestVisitor.wickets}` : undefined,
      overs: latestVisitor ? `${latestVisitor.overs}` : undefined,
    },
  };
}
```

---

### Step 3: Secure Backend API Route Handler
Save this file as `src/app/api/cricket/livescores/route.ts`:

```typescript
// src/app/api/cricket/livescores/route.ts
import { NextResponse } from 'next/server';
import { transformSportmonksToMatchScore, SportmonksFixture, CleanMatchCard } from '@/lib/sportmonks';

const API_TOKEN = process.env.SPORTMONKS_CRICKET_API_TOKEN;
const BASE_URL = 'https://cricket.sportmonks.com/api/v2.0';
const INCLUDES = 'localteam,visitorteam,runs,league,venue,batting,bowling';

export async function GET() {
  if (!API_TOKEN) {
    return NextResponse.json(
      { error: 'API token not configured', data: [] },
      { status: 500 }
    );
  }

  try {
    const allMatches: CleanMatchCard[] = [];
    const seenIds = new Set<string>();

    const addUniqueMatch = (m: CleanMatchCard) => {
      const key = `${m.team1.shortName}-${m.team2.shortName}-${m.series}`;
      if (!seenIds.has(m.id) && !seenIds.has(key)) {
        seenIds.add(m.id);
        seenIds.add(key);
        allMatches.push(m);
      }
    };

    // 1. Fetch In-Play / Live Matches
    const liveUrl = `${BASE_URL}/livescores?api_token=${API_TOKEN}&include=${INCLUDES}`;
    const liveRes = await fetch(liveUrl, {
      next: { revalidate: 15 }, // Next.js ISR: Cache for 15 seconds
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

    // 2. Fetch Surrounding Fixtures (Last 6 days to Next 8 days) for Upcoming & Recent Tabs
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
      fixtures.slice(0, 6).forEach((f) => addUniqueMatch(transformSportmonksToMatchScore(f)));
    }

    if (pastRes.ok) {
      const pastJson = await pastRes.json();
      const fixtures: SportmonksFixture[] = Array.isArray(pastJson.data) ? pastJson.data : [];
      fixtures.slice(0, 5).forEach((f) => addUniqueMatch(transformSportmonksToMatchScore(f)));
    }

    // 3. Priority Sort: LIVE matches first, followed by UPCOMING, followed by RESULT
    const priorityOrder: Record<string, number> = { LIVE: 1, UPCOMING: 2, RESULT: 3 };
    allMatches.sort((a, b) => (priorityOrder[a.status] || 4) - (priorityOrder[b.status] || 4));

    return NextResponse.json({
      data: allMatches,
      count: allMatches.length,
      liveCount: allMatches.filter((m) => m.status === 'LIVE').length,
      upcomingCount: allMatches.filter((m) => m.status === 'UPCOMING').length,
      resultCount: allMatches.filter((m) => m.status === 'RESULT').length,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, data: [] }, { status: 500 });
  }
}
```

---

### Step 4: Frontend React Hook / Polling Component
Create this custom React hook (e.g. `src/hooks/useCricketLiveScores.ts`):

```typescript
// src/hooks/useCricketLiveScores.ts
import { useState, useEffect } from 'react';
import { CleanMatchCard } from '@/lib/sportmonks';

export function useCricketLiveScores(pollIntervalMs = 25000) {
  const [matches, setMatches] = useState<CleanMatchCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchMatches = async () => {
      try {
        const res = await fetch('/api/cricket/livescores');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (isMounted && Array.isArray(json.data)) {
          setMatches(json.data);
          setError(null);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchMatches();
    const interval = setInterval(fetchMatches, pollIntervalMs);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [pollIntervalMs]);

  return {
    matches,
    liveMatches: matches.filter((m) => m.status === 'LIVE'),
    upcomingMatches: matches.filter((m) => m.status === 'UPCOMING'),
    recentMatches: matches.filter((m) => m.status === 'RESULT'),
    isLoading,
    error,
  };
}
```

#### How to Render in Any React Component:
```tsx
import { useCricketLiveScores } from '@/hooks/useCricketLiveScores';

export default function MatchTicker() {
  const { matches, liveMatches, isLoading } = useCricketLiveScores();

  if (isLoading) return <div>Loading live cricket scores...</div>;

  return (
    <div className="match-slider">
      {matches.map((match) => (
        <div key={match.id} className={`match-card ${match.status === 'LIVE' ? 'is-live' : ''}`}>
          {/* League Logo & Series */}
          <div className="match-header">
            {match.leagueLogo && <img src={match.leagueLogo} alt="" width={16} height={16} />}
            <span>{match.series}</span>
            {match.status === 'LIVE' && <span className="live-pill">🔴 LIVE</span>}
          </div>

          {/* Teams & Scores */}
          <div className="team-row">
            <span>{match.team1.name}</span>
            <strong>{match.team1.score || '-'} {match.team1.overs && `(${match.team1.overs} ov)`}</strong>
          </div>

          <div className="team-row">
            <span>{match.team2.name}</span>
            <strong>{match.team2.score || 'Yet to bat'} {match.team2.overs && `(${match.team2.overs} ov)`}</strong>
          </div>

          <div className="match-status-text">{match.statusText}</div>
        </div>
      ))}
    </div>
  );
}
```

---

## 6. HTTP Status Codes & Troubleshooting

| Code | Meaning | What to Check |
| :---: | :--- | :--- |
| **`200`** | **Success** | Data retrieved successfully. |
| **`400`** | **Bad Request** | You passed an invalid include. Remember to use `batting,bowling` (singular). |
| **`401`** | **Unauthenticated** | Invalid `api_token`. Check that the key in `.env.local` matches your dashboard token. |
| **`403`** | **Plan Restriction** | Your current Sportmonks plan does not cover this endpoint or tournament tier. |
| **`429`** | **Rate Limit Exceeded** | More than 180 requests/min. Increase your backend server cache (`revalidate: 15` or higher). |
| **`500`** | **Server Error** | Sportmonks temporary downtime. Use fallback data. |

---

## 7. Production Best Practices & Rate-Limit Shield

1. **Next.js ISR Caching**: Set `{ next: { revalidate: 15 } }` on live endpoints and `{ next: { revalidate: 60 } }` on fixture queries. Even with 100,000 active users, only 4 API calls per minute will hit Sportmonks.
2. **Graceful Fallbacks**: If Sportmonks returns `[]` (during midnight/off-hours when no international games are playing), always retain cached fixtures or provide fallback cards so the slider never appears empty.
3. **Image Fallbacks**: When displaying team flags from Sportmonks CDN (`image_path`), attach an `onError={(e) => e.currentTarget.style.display = 'none'}` handler so broken links never degrade UI aesthetics.
