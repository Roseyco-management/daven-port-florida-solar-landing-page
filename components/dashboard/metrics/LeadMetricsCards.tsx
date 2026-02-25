import React from "react";
import Badge from "../ui/Badge";

interface LeadMetricsCardsProps {
  totalLeads: number;
  homeowners: number;
  authorizedAgents: number;
  conversionRate: string;
}

const LeadMetricsCards: React.FC<LeadMetricsCardsProps> = ({
  totalLeads,
  homeowners,
  authorizedAgents,
  conversionRate,
}) => {
  const metrics = [
    {
      id: 1,
      title: "Total Leads",
      value: totalLeads.toString(),
      badge: null,
      subtitle: "All time form submissions",
    },
    {
      id: 2,
      title: "Homeowners",
      value: homeowners.toString(),
      badge: { color: "success" as const, text: `${totalLeads > 0 ? Math.round((homeowners / totalLeads) * 100) : 0}%` },
      subtitle: "of all leads",
    },
    {
      id: 3,
      title: "Authorized Agents",
      value: authorizedAgents.toString(),
      badge: { color: "info" as const, text: `${totalLeads > 0 ? Math.round((authorizedAgents / totalLeads) * 100) : 0}%` },
      subtitle: "of all leads",
    },
    {
      id: 4,
      title: "Conversion Rate",
      value: `${conversionRate}%`,
      badge: null,
      subtitle: "Leads / GA4 Sessions (30d)",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {metrics.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
        >
          <p className="text-gray-500 text-theme-sm dark:text-gray-400">
            {item.title}
          </p>
          <div className="flex items-end justify-between mt-3">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
              {item.value}
            </h4>
            <div className="flex items-center gap-1">
              {item.badge && (
                <Badge color={item.badge.color} size="sm">
                  {item.badge.text}
                </Badge>
              )}
              <span className="text-gray-500 text-theme-xs dark:text-gray-400">
                {item.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadMetricsCards;
