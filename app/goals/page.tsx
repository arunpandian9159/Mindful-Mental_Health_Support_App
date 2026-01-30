"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  PlusIcon,
  CheckCircleIcon,
  FlameIcon,
  CalendarIcon,
  ChartLineUpIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";
import { userGoals, currentUser } from "@/data/data";
import { BottomNav } from "@/components/BottomNav";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function GoalsDashboard() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<
    "all" | "active" | "completed"
  >("all");

  const filteredGoals = userGoals.filter((goal) => {
    if (activeFilter === "active") return !goal.isCompleted;
    if (activeFilter === "completed") return goal.isCompleted;
    return true;
  });

  const totalGoals = userGoals.length;
  const completedToday = userGoals.filter((g) => g.isCompleted).length;
  const completionRate = Math.round((completedToday / totalGoals) * 100);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <SubPageHeader
        title="Goals"
        rightIcon={<PlusIcon size={20} weight="bold" />}
        rightAction={() => router.push("/goals/new")}
      />

      <main className="max-w-md mx-auto px-6 pt-24 space-y-8">
        {/* Welcome & Daily Progress */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-text-primary dark:text-white mb-1">
            Keep it up, {currentUser.name}!
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium">
            You&apos;ve completed {completedToday} of your {totalGoals} daily
            goals.
          </p>

          <div className="bg-white dark:bg-surface-dark p-6 rounded-4xl border border-gray-100 dark:border-gray-800 shadow-soft relative overflow-hidden">
            <div className="flex justify-between items-end mb-4 relative z-10">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Daily Completion
                </p>
                <p className="text-3xl font-serif font-bold text-text-primary dark:text-white">
                  {completionRate}%
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-primary mb-1">
                  <FlameIcon size={20} weight="fill" />
                  <span className="font-bold text-lg">7</span>
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Day Streak
                </p>
              </div>
            </div>

            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full relative z-10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${completionRate}%` }}
                className="h-full bg-primary"
              />
            </div>

            {/* Decorative Background Icon */}
            <ChartLineUpIcon
              size={120}
              weight="thin"
              className="absolute -right-6 -bottom-6 text-gray-50 dark:text-gray-800/20 -rotate-12 pointer-events-none"
            />
          </div>
        </section>

        {/* Weekly View Mini */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-text-primary dark:text-white">
              This Week
            </h3>
            <CalendarIcon size={20} className="text-gray-400" />
          </div>
          <div className="flex justify-between">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-gray-400">
                  {day}
                </span>
                <div
                  className={`size-10 rounded-2xl flex items-center justify-center border transition-all ${
                    i === 4
                      ? "bg-primary text-white border-primary shadow-md font-bold"
                      : i < 4
                        ? "bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900/20 text-green-500"
                        : "bg-white dark:bg-surface-dark border-gray-100 dark:border-gray-800 text-gray-300"
                  }`}
                >
                  {i < 4 ? (
                    <CheckCircleIcon size={20} weight="fill" />
                  ) : (
                    <span className="text-xs">{26 + i}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Goals List */}
        <section className="space-y-4">
          <div className="flex items-center gap-4 mb-2 overflow-x-auto no-scrollbar pb-2">
            {(["all", "active", "completed"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md"
                    : "bg-white dark:bg-surface-dark text-gray-500 border border-gray-100 dark:border-gray-800"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filteredGoals.map((goal) => (
              <motion.div
                layout
                key={goal.id}
                className="bg-white dark:bg-surface-dark p-4 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-soft flex items-center gap-4 group"
              >
                <button
                  className={`size-12 rounded-2xl flex items-center justify-center transition-all ${
                    goal.isCompleted
                      ? "bg-primary text-white shadow-inner scale-95"
                      : `${goal.bg} ${goal.color} border border-transparent`
                  }`}
                >
                  {goal.isCompleted ? (
                    <CheckCircleIcon size={28} weight="fill" />
                  ) : (
                    <goal.icon size={28} />
                  )}
                </button>

                <div className="flex-1">
                  <h4
                    className={`font-bold text-sm transition-all ${
                      goal.isCompleted
                        ? "text-gray-400 line-through"
                        : "text-text-primary dark:text-white"
                    }`}
                  >
                    {goal.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="h-1.5 flex-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden max-w-20">
                      <div
                        className={`h-full ${goal.color.replace("text", "bg")}`}
                        style={{
                          width: `${(goal.currentCount / goal.targetCount) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-gray-400">
                      {goal.currentCount}/{goal.targetCount} {goal.unit}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div
                    className={`flex items-center gap-1 font-bold text-xs ${goal.isCompleted ? "text-green-500" : "text-gray-400"}`}
                  >
                    <TrendUpIcon size={14} weight="bold" />
                    <span>3d</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Insights Link */}
        <section className="pb-12">
          <div className="bg-linear-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-6 rounded-4xl border border-primary/10 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
            <div>
              <h3 className="font-bold text-text-primary dark:text-white mb-1">
                View Progress Insights
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                See your monthly patterns and achievements.
              </p>
            </div>
            <div className="size-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-primary shadow-sm group-hover:translate-x-1 transition-transform">
              <TrendUpIcon size={20} weight="bold" />
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
