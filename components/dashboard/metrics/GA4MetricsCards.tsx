import React from "react";

interface GA4MetricsCardsProps {
  sessions: number;
  users: number;
  pageviews: number;
  bounceRate: number;
}

const GA4MetricsCards: React.FC<GA4MetricsCardsProps> = ({
  sessions,
  users,
  pageviews,
  bounceRate,
}) => {
  const formatNumber = (n: number) =>
    n >= 1000 ? `${(n / 1000).toFixed(1)}K` : n.toString();

  const metrics = [
    {
      id: 1,
      title: "Sessions (30d)",
      value: formatNumber(sessions),
      subtitle: "GA4",
      icon: "📊",
    },
    {
      id: 2,
      title: "Users (30d)",
      value: formatNumber(users),
      subtitle: "GA4",
      icon: "👥",
    },
    {
      id: 3,
      title: "Pageviews (30d)",
      value: formatNumber(pageviews),
      subtitle: "GA4",
      icon: "👁",
    },
    {
      id: 4,
      title: "Bounce Rate (30d)",
      value: `${(bounceRate * 100).toFixed(1)}%`,
      subtitle: "GA4",
      icon: "↩",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {metrics.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-theme-sm dark:text-gray-400">
              {item.title}
            </p>
            <span className="text-lg">{item.icon}</span>
          </div>
          <div className="flex items-end justify-between mt-3">
            <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
              {item.value}
            </h4>
            <span className="text-gray-400 text-theme-xs dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GA4MetricsCards;
