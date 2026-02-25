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

export interface GSCSummaryMetrics {
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
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

export async function getGSCSummary(
  startDate: string,
  endDate: string
): Promise<GSCSummaryMetrics> {
  try {
    const db = getRoseyCoClient();
    const { data } = await db
      .from("gsc_daily_metrics")
      .select("clicks, impressions, ctr, avg_position")
      .eq("client_id", CLIENT_ID)
      .gte("date", startDate)
      .lte("date", endDate);

    if (!data || data.length === 0)
      return { clicks: 0, impressions: 0, ctr: 0, avgPosition: 0 };

    const clicks = data.reduce((s, r) => s + (r.clicks || 0), 0);
    const impressions = data.reduce((s, r) => s + (r.impressions || 0), 0);
    const ctr = impressions > 0 ? clicks / impressions : 0;
    const avgPosition =
      data.reduce((s, r) => s + (r.avg_position || 0), 0) / data.length;

    return { clicks, impressions, ctr, avgPosition };
  } catch (err) {
    console.error("GSC summary error:", err);
    return { clicks: 0, impressions: 0, ctr: 0, avgPosition: 0 };
  }
}
