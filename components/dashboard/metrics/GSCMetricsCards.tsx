import React from "react";

interface GSCMetricsCardsProps {
  clicks: number;
  impressions: number;
  ctr: number;
  avgPosition: number;
}

const GSCMetricsCards: React.FC<GSCMetricsCardsProps> = ({
  clicks,
  impressions,
  ctr,
  avgPosition,
}) => {
  const metrics = [
    { id: 1, title: "Clicks (30d)", value: clicks.toLocaleString(), icon: "🖱️", subtitle: "GSC" },
    { id: 2, title: "Impressions (30d)", value: impressions.toLocaleString(), icon: "👁️", subtitle: "GSC" },
    { id: 3, title: "Avg CTR", value: `${(ctr * 100).toFixed(1)}%`, icon: "📊", subtitle: "GSC" },
    { id: 4, title: "Avg Position", value: avgPosition > 0 ? avgPosition.toFixed(1) : "—", icon: "🔍", subtitle: "GSC" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
      {metrics.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-5"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-500 text-theme-sm">{item.title}</p>
            <span className="text-lg">{item.icon}</span>
          </div>
          <div className="flex items-end justify-between mt-3">
            <h4 className="text-2xl font-bold text-gray-800">{item.value}</h4>
            <span className="text-gray-400 text-theme-xs bg-gray-100 px-2 py-0.5 rounded-full">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GSCMetricsCards;
