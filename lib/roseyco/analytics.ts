import { createClient } from "@supabase/supabase-js";

const CLIENT_ID = "003e933d-b544-4788-b279-db36bf2f168b";

function getRoseyCoClient() {
  return createClient(
    process.env.ROSEYCO_SUPABASE_URL!,
    process.env.ROSEYCO_SUPABASE_SERVICE_ROLE_KEY!
  );
}

export interface GA4SummaryMetrics {
  sessions: number;
  users: number;
  pageviews: number;
  bounceRate: number;
}

export interface GA4DailyPoint {
  date: string;
  sessions: number;
}

export interface GA4ChannelRow {
  channel: string;
  sessions: number;
}

export interface ClarityMetrics {
  totalSessions: number;
  distinctUsers: number;
  rageclicks: number;
  deadClicks: number;
  scrollDepth: number;
}

export async function getGA4Summary(
  startDate: string,
  endDate: string
): Promise<GA4SummaryMetrics> {
  try {
    const db = getRoseyCoClient();
    const { data } = await db
      .from("ga4_daily_metrics")
      .select("sessions, users, bounce_rate")
      .eq("client_id", CLIENT_ID)
      .gte("date", startDate)
      .lte("date", endDate);

    if (!data || data.length === 0)
      return { sessions: 0, users: 0, pageviews: 0, bounceRate: 0 };

    const sessions = data.reduce((s, r) => s + (r.sessions || 0), 0);
    const users = data.reduce((s, r) => s + (r.users || 0), 0);
    const bounceRate =
      data.reduce((s, r) => s + (r.bounce_rate || 0), 0) / data.length;

    return { sessions, users, pageviews: 0, bounceRate };
  } catch (err) {
    console.error("GA4 summary error:", err);
    return { sessions: 0, users: 0, pageviews: 0, bounceRate: 0 };
  }
}

export async function getGA4DailySessions(
  startDate: string,
  endDate: string
): Promise<GA4DailyPoint[]> {
  try {
    const db = getRoseyCoClient();
    const { data } = await db
      .from("ga4_daily_metrics")
      .select("date, sessions")
      .eq("client_id", CLIENT_ID)
      .gte("date", startDate)
      .lte("date", endDate)
      .order("date", { ascending: true });

    return (data || []).map((r) => ({
      date: r.date,
      sessions: r.sessions || 0,
    }));
  } catch (err) {
    console.error("GA4 daily sessions error:", err);
    return [];
  }
}

export async function getGA4ChannelBreakdown(
  startDate: string,
  endDate: string
): Promise<GA4ChannelRow[]> {
  try {
    const db = getRoseyCoClient();
    const { data } = await db
      .from("ga4_channels")
      .select("channel, sessions")
      .eq("client_id", CLIENT_ID)
      .gte("date", startDate)
      .lte("date", endDate);

    if (!data || data.length === 0) return [];

    // Aggregate sessions by channel across date range
    const totals: Record<string, number> = {};
    for (const row of data) {
      totals[row.channel] = (totals[row.channel] || 0) + (row.sessions || 0);
    }

    return Object.entries(totals)
      .map(([channel, sessions]) => ({ channel, sessions }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 8);
  } catch (err) {
    console.error("GA4 channel breakdown error:", err);
    return [];
  }
}

export async function getClarityMetrics(
  startDate: string,
  endDate: string
): Promise<ClarityMetrics> {
  try {
    const db = getRoseyCoClient();
    const { data } = await db
      .from("clarity_daily_metrics")
      .select(
        "total_sessions, distinct_users, rage_clicks, dead_clicks, scroll_depth"
      )
      .eq("client_id", CLIENT_ID)
      .gte("date", startDate)
      .lte("date", endDate);

    if (!data || data.length === 0)
      return {
        totalSessions: 0,
        distinctUsers: 0,
        rageclicks: 0,
        deadClicks: 0,
        scrollDepth: 0,
      };

    return {
      totalSessions: data.reduce((s, r) => s + (r.total_sessions || 0), 0),
      distinctUsers: data.reduce((s, r) => s + (r.distinct_users || 0), 0),
      rageclicks: data.reduce((s, r) => s + (r.rage_clicks || 0), 0),
      deadClicks: data.reduce((s, r) => s + (r.dead_clicks || 0), 0),
      scrollDepth:
        data.reduce((s, r) => s + (r.scroll_depth || 0), 0) / data.length,
    };
  } catch (err) {
    console.error("Clarity metrics error:", err);
    return {
      totalSessions: 0,
      distinctUsers: 0,
      rageclicks: 0,
      deadClicks: 0,
      scrollDepth: 0,
    };
  }
}
