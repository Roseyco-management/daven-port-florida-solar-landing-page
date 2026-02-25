import { createServerSupabaseClient } from "@/lib/supabase/server";
import {
  getGA4Summary,
  getGA4DailySessions,
  getGA4ChannelBreakdown,
  getGSCSummary,
} from "@/lib/roseyco/analytics";
import LeadMetricsCards from "@/components/dashboard/metrics/LeadMetricsCards";
import GA4MetricsCards from "@/components/dashboard/metrics/GA4MetricsCards";
import GSCMetricsCards from "@/components/dashboard/metrics/GSCMetricsCards";
import LeadsOverTimeChart from "@/components/dashboard/charts/LeadsOverTimeChart";
import TrafficSourcesChart from "@/components/dashboard/charts/TrafficSourcesChart";
import PropertyRoleDonutChart from "@/components/dashboard/charts/PropertyRoleDonutChart";
import LeadsTable from "@/components/dashboard/tables/LeadsTable";

export const dynamic = "force-dynamic";

async function getDashboardData() {
  const supabase = createServerSupabaseClient();

  const start = "30daysAgo";
  const end = "today";
  const startIso = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];
  const endIso = new Date().toISOString().split("T")[0];

  const [leadsResult, ga4Summary, ga4Daily, ga4Channels, gsc] =
    await Promise.all([
      supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false }),
      getGA4Summary(startIso, endIso),
      getGA4DailySessions(startIso, endIso),
      getGA4ChannelBreakdown(startIso, endIso),
      getGSCSummary(startIso, endIso),
    ]);

  const leads = leadsResult.data || [];
  const totalLeads = leads.length;
  const homeowners = leads.filter((l) => l.property_role === "homeowner").length;
  const authorizedAgents = leads.filter(
    (l) =>
      l.property_role === "authorized_agent" ||
      l.property_role === "authorized"
  ).length;

  const conversionRate =
    ga4Summary.sessions > 0
      ? ((totalLeads / ga4Summary.sessions) * 100).toFixed(2)
      : "0.00";

  return {
    leads,
    totalLeads,
    homeowners,
    authorizedAgents,
    conversionRate,
    ga4Summary,
    ga4Daily,
    ga4Channels,
    gsc,
  };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-1">
          Overview
        </h2>
        <p className="text-theme-sm text-gray-500 dark:text-gray-400 mb-4">
          Davenport Florida Solar — last 30 days
        </p>
      </div>

      {/* Lead KPIs */}
      <div className="col-span-12">
        <LeadMetricsCards
          totalLeads={data.totalLeads}
          homeowners={data.homeowners}
          authorizedAgents={data.authorizedAgents}
          conversionRate={data.conversionRate}
        />
      </div>

      {/* GA4 KPIs */}
      <div className="col-span-12">
        <GA4MetricsCards {...data.ga4Summary} />
      </div>

      {/* GSC KPIs */}
      <div className="col-span-12">
        <GSCMetricsCards {...data.gsc} />
      </div>

      {/* Sessions bar chart */}
      <div className="col-span-12 xl:col-span-8">
        <LeadsOverTimeChart data={data.ga4Daily} />
      </div>

      {/* Leads by role donut */}
      <div className="col-span-12 xl:col-span-4">
        <PropertyRoleDonutChart
          series={[
            data.homeowners,
            data.authorizedAgents,
            Math.max(
              0,
              data.totalLeads - data.homeowners - data.authorizedAgents
            ),
          ]}
        />
      </div>

      {/* Traffic sources */}
      <div className="col-span-12 xl:col-span-6">
        <TrafficSourcesChart data={data.ga4Channels} />
      </div>

      {/* Leads table */}
      <div className="col-span-12">
        <LeadsTable leads={data.leads} />
      </div>
    </div>
  );
}
