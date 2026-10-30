import { MatchScore } from './matches';

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
  pp1?: string;
  pp2?: string;
  pp3?: string;
  updated_at?: string;
}

export interface SportmonksFixture {
  id: number;
  resource: 'fixtures';
  league_id?: number;
  season_id?: number;
  stage_id?: number;
  round?: string;
  localteam_id?: number;
  visitorteam_id?: number;
  starting_at?: string;
  type?: string;
  live?: boolean;
  status?: string;
  note?: string;
  venue_id?: number;
  toss_won_team_id?: number;
  winner_team_id?: number;
  elected?: string;
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
    capacity?: number;
    image_path?: string;
  };
  localteam?: SportmonksTeam;
  visitorteam?: SportmonksTeam;
  runs?: SportmonksRun[];
  scoreboards?: Array<{
    id: number;
    team_id: number;
    type: string;
    scoreboard: string;
  }>;
}

/**
 * Transforms a Sportmonks fixture object into our frontend MatchScore structure.
 */
export function transformSportmonksToMatchScore(fixture: SportmonksFixture): MatchScore {
  const localId = fixture.localteam_id || fixture.localteam?.id;
  const visitorId = fixture.visitorteam_id || fixture.visitorteam?.id;

  const localRuns = (fixture.runs || []).filter((r) => r.team_id === localId);
  const visitorRuns = (fixture.runs || []).filter((r) => r.team_id === visitorId);

  // Take the most recent inning for each team
  const latestLocal = localRuns[localRuns.length - 1];
  const latestVisitor = visitorRuns[visitorRuns.length - 1];

  // Status mapping
  const rawStatus = (fixture.status || '').trim();
  const isLive =
    fixture.live === true ||
    ['1st Innings', '2nd Innings', '3rd Innings', '4th Innings', 'Innings Break', 'Lunch', 'Tea', 'Stumps', 'Rain Delay'].some(
      (s) => rawStatus.toLowerCase().includes(s.toLowerCase())
    );

  const isFinished =
    ['Finished', 'Aban.', 'Postp.', 'Cancl.'].some((s) =>
      rawStatus.toLowerCase().includes(s.toLowerCase())
    ) || fixture.winner_team_id !== null && fixture.winner_team_id !== undefined;

  let matchStatus: 'LIVE' | 'UPCOMING' | 'RESULT' = 'UPCOMING';
  if (isLive) {
    matchStatus = 'LIVE';
  } else if (isFinished) {
    matchStatus = 'RESULT';
  }

  // Format series / league title
  const seriesName =
    fixture.league?.name ||
    (fixture.type ? `${fixture.type} International Series` : 'Cricket Tournament');

  // Format venue text
  const venueText = fixture.venue
    ? `${fixture.venue.name}${fixture.venue.city ? `, ${fixture.venue.city}` : ''}`
    : 'International Stadium';

  // Format status headline
  let statusText = fixture.note || fixture.status || 'Match Scheduled';
  if (matchStatus === 'UPCOMING' && fixture.starting_at) {
    try {
      const startTime = new Date(fixture.starting_at);
      statusText = `Starts at ${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } catch {
      statusText = 'Starts Soon';
    }
  }

  // Local Team
  const team1Name = fixture.localteam?.name || 'Local Team';
  const team1Code =
    fixture.localteam?.code ||
    (team1Name.length <= 4 ? team1Name.toUpperCase() : team1Name.substring(0, 3).toUpperCase());

  // Visitor Team
  const team2Name = fixture.visitorteam?.name || 'Visitor Team';
  const team2Code =
    fixture.visitorteam?.code ||
    (team2Name.length <= 4 ? team2Name.toUpperCase() : team2Name.substring(0, 3).toUpperCase());

  return {
    id: `sm-${fixture.id}`,
    series: seriesName.toUpperCase(),
    leagueLogo: fixture.league?.image_path,
    format: fixture.type?.toUpperCase() || 'T20',
    matchNumber: fixture.round || (matchStatus === 'LIVE' ? 'LIVE NOW' : 'Match Preview'),
    venue: venueText,
    status: matchStatus,
    statusText: statusText,
    team1: {
      name: team1Name,
      shortName: team1Code,
      flagUrl: fixture.localteam?.image_path,
      score: latestLocal ? `${latestLocal.score}/${latestLocal.wickets}` : undefined,
      overs: latestLocal ? `${latestLocal.overs}` : undefined,
      color: '#0055A5',
    },
    team2: {
      name: team2Name,
      shortName: team2Code,
      flagUrl: fixture.visitorteam?.image_path,
      score: latestVisitor ? `${latestVisitor.score}/${latestVisitor.wickets}` : undefined,
      overs: latestVisitor ? `${latestVisitor.overs}` : undefined,
      color: '#E5B842',
    },
    linkText: 'Match Center',
  };
}
