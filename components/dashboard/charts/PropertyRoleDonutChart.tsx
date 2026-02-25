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

interface PropertyRoleDonutChartProps {
  series: number[];
}

export default function PropertyRoleDonutChart({ series }: PropertyRoleDonutChartProps) {
  const [isOpen, setIsOpen] = useState(false);

  const options: ApexOptions = {
    colors: ["#3641f5", "#7592ff", "#dde9ff"],
    labels: ["Homeowner", "Authorized Agent", "Other"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "donut",
      height: 290,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            value: { show: true, offsetY: 0 },
          },
        },
      },
    },
    states: {
      hover: { filter: { type: "none" } },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: { type: "darken" },
      },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    stroke: { show: false, width: 4 },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontFamily: "Outfit",
      fontSize: "14px",
      fontWeight: 400,
      markers: { size: 4, shape: "circle", strokeWidth: 0 },
      itemMargin: { horizontal: 10, vertical: 0 },
      labels: { useSeriesColors: true },
    },
    responsive: [
      {
        breakpoint: 640,
        options: { chart: { width: 300, height: 260 } },
      },
    ],
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Leads by Role
        </h3>
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
              All time
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      <div className="flex justify-center" id="chartDarkStyle">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={290}
        />
      </div>
    </div>
  );
}
