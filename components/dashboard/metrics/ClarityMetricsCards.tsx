import React from "react";

interface ClarityMetricsCardsProps {
  totalSessions: number;
  distinctUsers: number;
  rageclicks: number;
  deadClicks: number;
  scrollDepth: number;
}

const ClarityMetricsCards: React.FC<ClarityMetricsCardsProps> = ({
  totalSessions,
  distinctUsers,
  rageclicks,
  deadClicks,
  scrollDepth,
}) => {
  const metrics = [
    { id: 1, title: "Clarity Sessions (30d)", value: totalSessions.toLocaleString(), icon: "🎥", subtitle: "Clarity" },
    { id: 2, title: "Distinct Users (30d)", value: distinctUsers.toLocaleString(), icon: "👤", subtitle: "Clarity" },
    { id: 3, title: "Rage Clicks (30d)", value: rageclicks.toLocaleString(), icon: "😤", subtitle: "Clarity" },
    { id: 4, title: "Dead Clicks (30d)", value: deadClicks.toLocaleString(), icon: "💀", subtitle: "Clarity" },
    { id: 5, title: "Avg Scroll Depth", value: `${(scrollDepth * 100).toFixed(0)}%`, icon: "📜", subtitle: "Clarity" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:grid-cols-5">
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
            <span className="text-gray-400 text-theme-xs bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClarityMetricsCards;
