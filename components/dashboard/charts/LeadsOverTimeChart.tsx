"use client";
import React from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DataPoint {
  date: string;
  sessions: number;
}

interface LeadsOverTimeChartProps {
  data: DataPoint[];
}

export default function LeadsOverTimeChart({ data }: LeadsOverTimeChartProps) {
  const categories = data.map((d) => {
    const date = new Date(d.date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });

  const seriesData = data.map((d) => d.sessions);

  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 350,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories,
      tickPlacement: "on",
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        rotate: -45,
        style: { fontSize: "11px" },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    grid: {
      yaxis: { lines: { show: true } },
    },
    fill: { opacity: 1 },
    tooltip: {
      x: { show: false },
      y: { formatter: (val: number) => `${val} sessions` },
    },
  };

  const series = [{ name: "Sessions", data: seriesData }];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Daily Sessions
          </h3>
          <span className="block text-gray-500 text-theme-sm dark:text-gray-400">
            Last 30 days — Google Analytics
          </span>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[600px] xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
