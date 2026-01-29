"use client";

import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import { StatusBar } from "@/components/StatusBar";
import {
  ArrowLeftIcon,
  TrendUpIcon,
  CaretRightIcon,
  PlusIcon,
} from "@phosphor-icons/react";

export default function MoodHistory() {
  const router = useRouter();

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col pb-20 bg-background-light dark:bg-background-dark">
      <StatusBar />
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
            <button className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 bg-white dark:bg-surface-dark shadow-sm">
              <span className="text-primary font-medium text-sm">
                Line Chart
              </span>
            </button>
            <button className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2">
              <span className="text-gray-500 font-medium text-sm">Heatmap</span>
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
          <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-soft border border-gray-100 dark:border-gray-800 relative overflow-hidden h-60 flex items-center justify-center">
            <div className="text-gray-400 text-xs font-medium uppercase tracking-widest">
              Mood Chart Visualization
            </div>
            {/* Simple CSS-based Sparkline or Placeholder */}
            <div className="absolute bottom-10 left-0 right-0 h-24 flex items-end justify-between px-8">
              {[3, 5, 4, 6, 5, 7, 6].map((h, i) => (
                <div
                  key={i}
                  className="w-4 bg-primary/20 rounded-t-sm animate-pulse"
                  style={{ height: `${h * 15}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-2 mt-2">
          <h3 className="text-base font-bold">Recent History</h3>
          <button className="text-primary text-sm font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="flex flex-col gap-3 px-4 pb-6">
          <div className="flex items-center justify-between bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-2xl">
                😊
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Feeling Great</span>
                <span className="text-xs text-gray-500">Today, 9:00 AM</span>
              </div>
            </div>
            <CaretRightIcon size={20} className="text-gray-400" />
          </div>

          <div className="flex items-center justify-between bg-white dark:bg-surface-dark p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl">
                🙂
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Feeling Okay</span>
                <span className="text-xs text-gray-500">
                  Yesterday, 8:45 PM
                </span>
              </div>
            </div>
            <CaretRightIcon size={20} className="text-gray-400" />
          </div>
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
