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
  const rawNote = (fixture.note || '').trim();
  const lowerStatus = rawStatus.toLowerCase();
  const lowerNote = rawNote.toLowerCase();

  const isNotStarted =
    lowerStatus === 'ns' ||
    lowerStatus === 'not started' ||
    lowerStatus === 'scheduled' ||
    lowerStatus === 'delayed';

  const isFinished =
    ['finished', 'aban.', 'postp.', 'cancl.', 'ft', 'ended', 'concluded', 'result'].some((s) =>
      lowerStatus.includes(s)
    ) ||
    lowerNote.includes('won by') ||
    lowerNote.includes('won the') ||
    lowerNote.includes('match tied') ||
    lowerNote.includes('no result') ||
    (fixture.winner_team_id !== null && fixture.winner_team_id !== undefined);

  const isLive =
    !isNotStarted &&
    !isFinished &&
    (
      ['1st innings', '2nd innings', '3rd innings', '4th innings', 'innings break', 'lunch', 'tea', 'stumps', 'rain delay', 'super over'].some(
        (s) => lowerStatus.includes(s)
      ) ||
      (fixture.live === true && !isNotStarted && !isFinished)
    );

  let matchStatus: 'LIVE' | 'UPCOMING' | 'RESULT' = 'UPCOMING';
  if (isFinished) {
    matchStatus = 'RESULT';
  } else if (isLive) {
    matchStatus = 'LIVE';
  } else {
    matchStatus = 'UPCOMING';
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
  let statusText = fixture.note || '';
  if (!statusText || statusText.toUpperCase() === 'NS') {
    if (matchStatus === 'UPCOMING') {
      if (fixture.starting_at) {
        try {
          const startTime = new Date(fixture.starting_at);
          statusText = `Starts at ${startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        } catch {
          statusText = 'Match Starts Soon';
        }
      } else {
        statusText = 'Match Scheduled';
      }
    } else if (matchStatus === 'RESULT') {
      statusText = 'Match Concluded';
    } else {
      statusText = fixture.status && fixture.status !== 'NS' ? fixture.status : 'Match in Progress';
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
