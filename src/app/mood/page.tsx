"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import {
  heatmapData,
  getMoodColor,
  dayLabels,
  moodChartData,
  moodHistory,
  moodLevels,
} from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowLeftIcon,
  TrendUpIcon,
  CaretRightIcon,
  PlusIcon,
} from "@phosphor-icons/react";

export default function MoodHistory() {
  const router = useRouter();
  const [activeView, setActiveView] = useState<"chart" | "heatmap">("chart");
  const [selectedCell, setSelectedCell] = useState<{
    weekIndex: number;
    dayIndex: number;
    value: number;
  } | null>(null);

  const handleCellClick = (
    weekIndex: number,
    dayIndex: number,
    value: number,
  ) => {
    setSelectedCell({ weekIndex, dayIndex, value });
    // You can also navigate to a detail page or show a modal
    // router.push(`/mood/detail?week=${weekIndex}&day=${dayIndex}`);
  };

  const closeSelectedCell = () => {
    setSelectedCell(null);
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-20 bg-background-light dark:bg-background-dark items-center">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 pt-5 justify-between sticky top-0 z-10 w-full max-w-5xl">
        <button
          onClick={() => router.push("/")}
          className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <h2 className="text-xl md:text-2xl font-bold flex-1 text-center pr-12">
          Mood Trends
        </h2>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar w-full max-w-5xl">
        <div className="flex px-4 py-3 max-w-md mx-auto">
          <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-200 dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveView("chart")}
              className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 transition-all ${
                activeView === "chart"
                  ? "bg-white dark:bg-surface-dark shadow-sm"
                  : ""
              }`}
            >
              <span
                className={`font-medium text-sm ${
                  activeView === "chart" ? "text-primary" : "text-gray-500"
                }`}
              >
                Line Chart
              </span>
            </button>
            <button
              onClick={() => setActiveView("heatmap")}
              className={`flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 transition-all ${
                activeView === "heatmap"
                  ? "bg-white dark:bg-surface-dark shadow-sm"
                  : ""
              }`}
            >
              <span
                className={`font-medium text-sm ${
                  activeView === "heatmap" ? "text-primary" : "text-gray-500"
                }`}
              >
                Heatmap
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-4 py-4">
          <div className="flex flex-col gap-1 items-center md:items-start max-w-2xl mx-auto w-full">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Average Mood Score
            </p>
            <div className="flex items-end gap-2">
              <p className="text-3xl md:text-5xl font-bold leading-none">4.2</p>
              <span className="text-green-500 text-sm font-medium mb-1.5 flex items-center">
                <TrendUpIcon size={14} className="mr-0.5" />
                +12%
              </span>
            </div>
          </div>

          {/* Line Chart View */}
          {activeView === "chart" && (
            <div className="w-full max-w-3xl mx-auto bg-white dark:bg-surface-dark rounded-2xl p-2 shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden">
              <MoodChart
                data={moodChartData}
                labels={dayLabels}
                levels={moodLevels}
              />
            </div>
          )}

          {/* Heatmap View */}
          {activeView === "heatmap" && (
            <div className="w-full max-w-3xl mx-auto bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-800">
              <div className="flex flex-col gap-3">
                {/* Day labels header */}
                <div className="flex gap-1.5 pl-12">
                  {dayLabels.map((day) => (
                    <div
                      key={day}
                      className="flex-1 text-center text-xs text-gray-400 font-medium"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Heatmap grid */}
                <div className="flex flex-col gap-1.5">
                  {heatmapData.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex items-center gap-1.5">
                      <div className="w-10 text-xs text-gray-400 font-medium text-right pr-2">
                        W{weekIndex + 1}
                      </div>
                      {week.map((value, dayIndex) => (
                        <button
                          key={dayIndex}
                          onClick={() =>
                            handleCellClick(weekIndex, dayIndex, value)
                          }
                          className={`flex-1 aspect-square rounded-md ${getMoodColor(value)} transition-colors hover:ring-2 hover:ring-primary/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary`}
                          title={`${dayLabels[dayIndex]}, Week ${weekIndex + 1}: Mood ${value}/5`}
                          aria-label={`${dayLabels[dayIndex]}, Week ${weekIndex + 1}: Mood ${value} out of 5`}
                        ></button>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Selected Cell Detail */}
                {selectedCell && (
                  <div className="mt-3 p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">
                          {dayLabels[selectedCell.dayIndex]}, Week{" "}
                          {selectedCell.weekIndex + 1}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Mood Score: {selectedCell.value}/5
                        </p>
                      </div>
                      <button
                        onClick={closeSelectedCell}
                        className="text-xs text-primary font-medium hover:underline"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                {/* Legend */}
                <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-400 mr-1">Low</span>
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-5 h-5 rounded ${getMoodColor(level)}`}
                    ></div>
                  ))}
                  <span className="text-xs text-gray-400 ml-1">High</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-6 py-2 mt-2 max-w-2xl mx-auto w-full">
          <h3 className="text-base font-bold">Recent History</h3>
          <button className="text-primary text-sm font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="flex flex-col gap-3 px-4 pb-6 max-w-2xl mx-auto w-full">
          {moodHistory.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`size-10 rounded-full ${entry.bgColor} flex items-center justify-center text-2xl`}
                >
                  {entry.emoji}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{entry.label}</span>
                  <span className="text-xs text-gray-500">{entry.time}</span>
                </div>
              </div>
              <CaretRightIcon size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </main>

      {/* Center FAB for Logging */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-full max-w-5xl pointer-events-none px-6">
        <button
          onClick={() => router.push("/mood/log")}
          className="float-right size-16 bg-primary rounded-full flex items-center justify-center shadow-fab text-white hover:scale-105 active:scale-95 transition-transform pointer-events-auto"
        >
          <PlusIcon size={32} weight="bold" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

function MoodChart({
  data,
  labels,
  levels,
}: {
  data: number[];
  labels: string[];
  levels: string[];
}) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const width = 400;
  const height = 200;
  const padding = { top: 20, right: 30, bottom: 40, left: 60 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const points = data.map((val, i) => ({
    x: padding.left + (i / (labels.length - 1)) * chartWidth,
    y: padding.top + chartHeight - ((val - 1) / 4) * chartHeight, // Assumes 1-5 scale
  }));

  // Cubic Bezier curve algorithm (Catmull-Rom like)
  const getPath = (pts: { x: number; y: number }[]) => {
    if (pts.length < 2) return "";
    let path = `M ${pts[0].x},${pts[0].y}`;

    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? i : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;

      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;

      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;

      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return path;
  };

  const linePath = getPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x},${padding.top + chartHeight} L ${points[0].x},${padding.top + chartHeight} Z`;

  return (
    <div className="relative w-full aspect-2/1">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible"
        onMouseLeave={() => setHoveredPoint(null)}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-primary)"
              stopOpacity="0.3"
            />
            <stop
              offset="100%"
              stopColor="var(--color-primary)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        {/* Grid Lines */}
        {levels.map((level, i) => {
          const y =
            padding.top + chartHeight - (i / (levels.length - 1)) * chartHeight;
          return (
            <g key={level}>
              <text
                x={padding.left - 10}
                y={y}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-gray-400 text-[16px] font-medium"
              >
                {level}
              </text>
              <line
                x1={padding.left}
                y1={y}
                x2={width - padding.right}
                y2={y}
                stroke="currentColor"
                className="text-gray-100 dark:text-gray-800"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </g>
          );
        })}

        {/* X Axis Labels */}
        {labels.map((label, i) => {
          const x = padding.left + (i / (labels.length - 1)) * chartWidth;
          return (
            <text
              key={label}
              x={x}
              y={height - 10}
              textAnchor="middle"
              className="fill-gray-400 text-[16px] font-medium"
            >
              {label}
            </text>
          );
        })}

        {/* Area Fill */}
        <motion.path
          d={areaPath}
          fill="url(#chartGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Line */}
        <motion.path
          d={linePath}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Points */}
        {points.map((pt, i) => (
          <g key={i}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r="20"
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredPoint(i)}
              onTouchStart={() => setHoveredPoint(i)}
            />
            <motion.circle
              cx={pt.x}
              cy={pt.y}
              r="5"
              fill="white"
              stroke="var(--color-primary)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            />
          </g>
        ))}
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredPoint !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute z-10 bg-white dark:bg-surface-dark shadow-xl border border-gray-100 dark:border-gray-800 px-3 py-2 rounded-lg pointer-events-none"
            style={{
              left: `${(points[hoveredPoint].x / width) * 100}%`,
              top: `${(points[hoveredPoint].y / height) * 100}%`,
              transform: "translate(-50%, -120%)",
            }}
          >
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              {labels[hoveredPoint]}
            </p>
            <p className="text-sm font-bold text-primary">
              Mood: {data[hoveredPoint].toFixed(1)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
