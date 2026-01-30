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
} from "@/data/data";

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
    <div className="relative flex h-full min-h-screen w-full flex-col pb-20 bg-background-light dark:bg-background-dark">
      <header className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 pt-12 justify-between sticky top-0 z-10">
        <button
          onClick={() => router.push("/")}
          className="flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-12">
          Mood Trends
        </h2>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar">
        <div className="flex px-4 py-3">
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
          <div className="flex flex-col gap-1">
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Average Mood Score
            </p>
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold leading-none">4.2</p>
              <span className="text-green-500 text-sm font-medium mb-1.5 flex items-center">
                <TrendUpIcon size={14} className="mr-0.5" />
                +12%
              </span>
            </div>
          </div>

          {/* Line Chart View */}
          {activeView === "chart" && (
            <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden h-60 flex items-center justify-center">
              <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                Mood Chart Visualization
              </div>
              {/* Simple CSS-based Sparkline - values clamped to 0-5 scale */}
              <div className="absolute bottom-10 left-0 right-0 h-24 flex items-end justify-between px-8">
                {moodChartData.map((h, i) => {
                  // Clamp values to 0-5 range to match mood scale
                  const clampedValue = Math.min(Math.max(h, 0), 5);
                  return (
                    <div
                      key={i}
                      className="w-4 bg-primary/20 rounded-t-sm animate-pulse"
                      style={{ height: `${clampedValue * 20}%` }}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Heatmap View */}
          {activeView === "heatmap" && (
            <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-800">
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

        <div className="flex items-center justify-between px-6 py-2 mt-2">
          <h3 className="text-base font-bold">Recent History</h3>
          <button className="text-primary text-sm font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="flex flex-col gap-3 px-4 pb-6">
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
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => router.push("/mood/log")}
          className="size-16 bg-primary rounded-full flex items-center justify-center shadow-fab text-white hover:scale-105 active:scale-95 transition-transform"
        >
          <PlusIcon size={32} weight="bold" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
