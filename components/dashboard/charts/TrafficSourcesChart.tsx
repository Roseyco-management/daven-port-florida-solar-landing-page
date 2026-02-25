"use client";
import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Dropdown } from "../ui/Dropdown";
import { DropdownItem } from "../ui/DropdownItem";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const MoreDotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="5" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
  </svg>
);

interface ChannelRow {
  channel: string;
  sessions: number;
}

interface TrafficSourcesChartProps {
  data: ChannelRow[];
}

export default function TrafficSourcesChart({ data }: TrafficSourcesChartProps) {
  const [isOpen, setIsOpen] = useState(false);

  const categories = data.map((d) => d.channel);
  const seriesData = data.map((d) => d.sessions);

  const options: ApexOptions = {
    colors: ["#465fff"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 315,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "55%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: { fontSize: "13px", fontFamily: "Outfit, sans-serif" },
      },
    },
    grid: {
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
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
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Traffic Sources
          </h3>
          <span className="block text-gray-500 text-theme-sm dark:text-gray-400">
            Last 30 days — Google Analytics
          </span>
        </div>
        <div className="relative h-fit">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="dropdown-toggle text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <MoreDotIcon />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            className="w-40 p-2"
          >
            <DropdownItem
              onItemClick={() => setIsOpen(false)}
              className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Last 30 days
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[400px] xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={315}
          />
        </div>
      </div>
    </div>
  );
}
