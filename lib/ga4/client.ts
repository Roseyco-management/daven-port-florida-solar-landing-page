import { BetaAnalyticsDataClient } from "@google-analytics/data";

function createGA4Client() {
  return new BetaAnalyticsDataClient({
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      type: "authorized_user",
    },
  });
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

const PROPERTY_ID = process.env.GA4_PROPERTY_ID!;

export async function getGA4Summary(
  startDate: string,
  endDate: string
): Promise<GA4SummaryMetrics> {
  try {
    const client = createGA4Client();
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate }],
      metrics: [
        { name: "sessions" },
        { name: "totalUsers" },
        { name: "screenPageViews" },
        { name: "bounceRate" },
      ],
    });
    const row = response.rows?.[0];
    return {
      sessions: parseInt(row?.metricValues?.[0]?.value || "0"),
      users: parseInt(row?.metricValues?.[1]?.value || "0"),
      pageviews: parseInt(row?.metricValues?.[2]?.value || "0"),
      bounceRate: parseFloat(row?.metricValues?.[3]?.value || "0"),
    };
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
    const client = createGA4Client();
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ dimension: { dimensionName: "date" } }],
    });
    return (response.rows || []).map((row) => ({
      date: formatGA4Date(row.dimensionValues?.[0]?.value || ""),
      sessions: parseInt(row.metricValues?.[0]?.value || "0"),
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
    const client = createGA4Client();
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 8,
    });
    return (response.rows || []).map((row) => ({
      channel: row.dimensionValues?.[0]?.value || "Unknown",
      sessions: parseInt(row.metricValues?.[0]?.value || "0"),
    }));
  } catch (err) {
    console.error("GA4 channel breakdown error:", err);
    return [];
  }
}

function formatGA4Date(raw: string): string {
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}
