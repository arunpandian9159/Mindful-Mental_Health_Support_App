"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  CheckIcon,
  CloudIcon,
  SunIcon,
  BrainIcon,
  SmileyIcon,
  SmileyBlankIcon,
  HeartIcon,
} from "@phosphor-icons/react";

const moodOptions = [
  {
    id: "anxious",
    icon: CloudIcon,
    color: "text-blue-500",
    bg: "bg-blue-50",
    label: "Anxious",
  },
  {
    id: "happy",
    icon: SunIcon,
    color: "text-orange-500",
    bg: "bg-orange-50",
    label: "Happy",
  },
  {
    id: "productive",
    icon: BrainIcon,
    color: "text-purple-500",
    bg: "bg-purple-50",
    label: "Productive",
  },
  {
    id: "satisfied",
    icon: SmileyIcon,
    color: "text-green-500",
    bg: "bg-green-50",
    label: "Satisfied",
  },
  {
    id: "neutral",
    icon: SmileyBlankIcon,
    color: "text-gray-500",
    bg: "bg-gray-50",
    label: "Neutral",
  },
  {
    id: "sad",
    icon: HeartIcon,
    color: "text-red-500",
    bg: "bg-red-50",
    label: "Sad",
  },
];

export default function NewJournalEntry() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedMood, setSelectedMood] = useState("neutral");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return;

    setIsLoading(true);
    // Simulate save
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/journal");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#F8F9FA] dark:bg-background-dark items-center">
      <main className="flex-1 w-full max-w-2xl px-6 pt-5 pb-32">
        <button
          onClick={() => router.back()}
          className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon size={24} weight="bold" />
        </button>

        <h1 className="font-serif text-4xl font-bold text-gray-900 dark:text-white mb-10">
          How are you
          <br />
          feeling today?
        </h1>

        <div className="flex flex-col gap-10">
          {/* Mood Selection */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-bold text-[#7C8B9E] uppercase tracking-widest">
              Current Mood
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {moodOptions.map((mood) => {
                const isSelected = selectedMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-3xl transition-all ${
                      isSelected
                        ? "bg-white dark:bg-surface-dark shadow-xl scale-105 ring-2 ring-primary/10"
                        : "bg-white/50 dark:bg-white/5 grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    <div
                      className={`size-12 rounded-full ${mood.bg} dark:bg-opacity-20 flex items-center justify-center ${mood.color}`}
                    >
                      <mood.icon
                        size={28}
                        weight={isSelected ? "fill" : "regular"}
                      />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? "text-primary" : "text-gray-400"}`}
                    >
                      {mood.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Title Input */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-bold text-[#7C8B9E] uppercase tracking-widest">
              Entry Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your reflection a name..."
              className="w-full bg-white dark:bg-surface-dark rounded-3xl py-6 px-8 text-xl font-serif text-gray-900 dark:text-white border-none shadow-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none"
            />
          </div>

          {/* Content Input */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-bold text-[#7C8B9E] uppercase tracking-widest">
              Your Thoughts
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing..."
              rows={8}
              className="w-full bg-white dark:bg-surface-dark rounded-4xl py-8 px-8 text-lg leading-relaxed text-[#2D3436] dark:text-gray-300 border-none shadow-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none font-display"
            />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 left-0 right-0 px-6 flex justify-center z-50">
        <button
          onClick={handleSave}
          disabled={isLoading || !title.trim() || !content.trim()}
          className="w-full max-w-md h-16 rounded-full bg-primary hover:bg-primary-dark text-white text-lg font-bold shadow-2xl shadow-primary/30 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-3"
        >
          {isLoading ? (
            <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <CheckIcon size={24} weight="bold" />
              <span>Save Reflection</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
