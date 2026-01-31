"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PencilSimpleIcon,
  CalendarIcon,
  CaretDownIcon,
} from "@phosphor-icons/react";
import { goalInspirations } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function NewGoal() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSaveGoal = async () => {
    if (!goal.trim()) {
      setError("Please enter a goal");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const payload = {
        title: goal.trim(),
        frequency,
        createdAt: new Date().toISOString(),
      };

      // Fallback to localStorage
      const existingGoals = JSON.parse(
        localStorage.getItem("mindful_goals") || "[]",
      );
      localStorage.setItem(
        "mindful_goals",
        JSON.stringify([...existingGoals, { ...payload, id: Date.now() }]),
      );

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      router.push("/home");
    } catch {
      setError("Failed to save goal. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const frequencies = ["Daily", "Weekly", "Bi-weekly", "Monthly"];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#F8F9FA] dark:bg-background-dark items-center pt-16">
      <SubPageHeader title="New Goal" />
      {/* Scrollable Content Area */}
      <main className="flex-1 w-full max-w-md px-5 pt-6 pb-40 overflow-y-auto no-scrollbar">
        <h1 className="font-serif text-3xl leading-tight font-bold text-gray-900 dark:text-white mb-8">
          Set a New
          <br />
          Wellness Goal
        </h1>

        <div className="flex flex-col gap-6">
          {/* Goal Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
              What is your goal?
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <PencilSimpleIcon size={20} />
              </span>
              <input
                type="text"
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value);
                  if (error) setError("");
                }}
                placeholder="e.g. Walk outside"
                className={`w-full bg-white dark:bg-surface-dark rounded-2xl py-4 pl-12 pr-5 text-base text-gray-900 dark:text-white placeholder:text-gray-300 border-none shadow-sm focus:ring-2 focus:ring-primary/20 transition-all`}
              />
            </div>
            {error && <p className="text-red-500 text-xs ml-2">{error}</p>}
          </div>

          {/* Frequency Select */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
              How often?
            </label>
            <button
              onClick={() => setIsFrequencyOpen(!isFrequencyOpen)}
              className="flex items-center justify-between w-full bg-white dark:bg-surface-dark rounded-2xl py-4 px-5 shadow-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <CalendarIcon size={20} className="text-gray-400" />
                <span className="text-base font-medium text-gray-900 dark:text-white">
                  {frequency}
                </span>
              </div>
              <CaretDownIcon
                size={18}
                className={`text-gray-400 transition-transform duration-300 ${isFrequencyOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isFrequencyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 z-50 overflow-hidden"
                >
                  {frequencies.map((freq) => (
                    <button
                      key={freq}
                      onClick={() => {
                        setFrequency(freq);
                        setIsFrequencyOpen(false);
                      }}
                      className="w-full text-left px-5 py-3.5 text-gray-700 dark:text-gray-300 hover:bg-primary/5 hover:text-primary transition-colors text-sm font-medium border-b border-gray-50 dark:border-white/5 last:border-none"
                    >
                      {freq}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SMART Inspirations */}
          <div className="mt-2">
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">
                SMART Inspirations
              </h2>
              <span className="px-2 py-0.5 bg-[#E7F3EF] dark:bg-primary/10 text-goal-green dark:text-goal-green text-[10px] font-bold rounded-md cursor-pointer hover:bg-goal-green/10 transition-colors">
                Tips
              </span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-5 px-5">
              {goalInspirations.map((item) => (
                <button
                  key={item.title}
                  onClick={() => setGoal(item.title)}
                  className="min-w-36 p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm hover:shadow-md border border-transparent hover:border-primary/10 transition-all text-left group"
                >
                  <div
                    className={`w-9 h-9 rounded-full ${item.bg} dark:bg-opacity-20 ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={20} weight="fill" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {item.subtext}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Persistent Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-linear-to-t from-[#F8F9FA] via-[#F8F9FA] to-transparent dark:from-background-dark dark:via-background-dark z-40 flex justify-center">
        <div className="w-full max-w-md">
          <button
            onClick={handleSaveGoal}
            disabled={isLoading}
            className="w-full h-14 rounded-full bg-goal-green hover:bg-goal-green/90 text-white text-base font-bold shadow-xl shadow-goal-green/20 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center"
          >
            {isLoading ? "Saving..." : "Save Goal"}
          </button>
        </div>
      </div>
    </div>
  );
}
