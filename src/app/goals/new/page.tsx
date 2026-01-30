"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ArrowLeftIcon, PencilSimpleIcon } from "@phosphor-icons/react";
import { goalInspirations } from "@/data/data";

export default function NewGoal() {
  const router = useRouter();
  const [goal, setGoal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const inspirations = goalInspirations;

  const handleSaveGoal = async () => {
    // Validate input
    if (!goal.trim()) {
      setError("Please enter a goal");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Attempt to save via API, fallback to localStorage
      try {
        const response = await fetch("/api/goals", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: goal.trim() }),
        });

        if (!response.ok) {
          throw new Error("API request failed");
        }
      } catch {
        // Fallback to localStorage if API is not available
        const existingGoals = JSON.parse(
          localStorage.getItem("mindful_goals") || "[]",
        );
        const newGoal = {
          id: Date.now(),
          title: goal.trim(),
          createdAt: new Date().toISOString(),
        };
        localStorage.setItem(
          "mindful_goals",
          JSON.stringify([...existingGoals, newGoal]),
        );
      }

      router.push("/home");
    } catch {
      setError("Failed to save goal. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInspirationClick = (title: string) => {
    setGoal(title);
    setError("");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark items-center">
      <div className="flex-1 flex flex-col w-full max-w-5xl px-6 pt-5 pb-6 overflow-y-auto no-scrollbar">
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex cols">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <ArrowLeftIcon size={24} />
          </button>
          <h1 className="font-serif tracking-tight text-[24px] md:text-5xl font-bold leading-tight mb-8 text-gray-900 dark:text-white">
            Set a New Wellness Goal
          </h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="goalInput"
                className="text-sm font-semibold ml-1 text-gray-700 dark:text-gray-300"
              >
                What is your goal?
              </label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <PencilSimpleIcon size={20} />
                </span>
                <input
                  id="goalInput"
                  className={`w-full bg-white dark:bg-surface-dark border ${error ? "border-red-500" : "border-gray-200 dark:border-gray-700"} rounded-2xl py-4 pl-12 pr-4 shadow-sm text-base outline-none focus:border-primary transition-colors`}
                  placeholder="e.g. Walk outside"
                  type="text"
                  value={goal}
                  onChange={(e) => {
                    setGoal(e.target.value);
                    if (error) setError("");
                  }}
                />
              </div>
              {error && (
                <p className="text-red-500 text-sm ml-1 mt-1">{error}</p>
              )}
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">
                SMART Inspirations
              </h2>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
              {inspirations.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleInspirationClick(item.title)}
                  className="min-w-37.5 p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all text-left group"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${item.bg} dark:bg-opacity-10 ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl px-6 pb-8 pt-4 flex flex-col gap-3 z-10">
        <button
          onClick={handleSaveGoal}
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-full h-14 px-5 bg-goal-green hover:bg-opacity-90 text-white text-[17px] font-bold shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Saving..." : "Save Goal"}
        </button>
      </div>
    </div>
  );
}
