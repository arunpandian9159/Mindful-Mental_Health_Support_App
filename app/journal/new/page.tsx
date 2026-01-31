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
    color: "text-blue-600",
    bg: "bg-blue-50",
    activeBg: "bg-blue-600",
    label: "Anxious",
  },
  {
    id: "happy",
    icon: SunIcon,
    color: "text-orange-600",
    bg: "bg-orange-50",
    activeBg: "bg-orange-600",
    label: "Happy",
  },
  {
    id: "productive",
    icon: BrainIcon,
    color: "text-purple-600",
    bg: "bg-purple-50",
    activeBg: "bg-purple-600",
    label: "Productive",
  },
  {
    id: "satisfied",
    icon: SmileyIcon,
    color: "text-green-600",
    bg: "bg-green-50",
    activeBg: "bg-green-600",
    label: "Satisfied",
  },
  {
    id: "neutral",
    icon: SmileyBlankIcon,
    color: "text-gray-600",
    bg: "bg-gray-50",
    activeBg: "bg-gray-600",
    label: "Neutral",
  },
  {
    id: "sad",
    icon: HeartIcon,
    color: "text-red-600",
    bg: "bg-red-50",
    activeBg: "bg-red-600",
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
      <main className="flex-1 w-full max-w-2xl px-4 md:px-6 pt-4 md:pt-5 pb-32">
        <button
          onClick={() => router.back()}
          className="p-1.5 md:p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeftIcon className="size-5 md:size-6" weight="bold" />
        </button>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 md:mb-10">
          How are you
          <br />
          feeling today?
        </h1>

        <div className="flex flex-col gap-6 md:gap-10">
          {/* Mood Selection */}
          <div className="flex flex-col gap-4">
            <label className="text-[10px] md:text-sm font-bold text-[#7C8B9E] uppercase tracking-widest">
              Current Mood
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {moodOptions.map((mood) => {
                const isSelected = selectedMood === mood.id;
                return (
                  <button
                    key={mood.id}
                    onClick={() => setSelectedMood(mood.id)}
                    className={`flex flex-col items-center gap-1 md:gap-2 p-3 md:p-4 rounded-2xl md:rounded-3xl transition-all ${
                      isSelected
                        ? `${mood.activeBg} shadow-lg md:shadow-xl scale-105`
                        : "bg-white dark:bg-white/5 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`size-10 md:size-12 rounded-full transition-colors ${
                        isSelected
                          ? "bg-white/20"
                          : `${mood.bg} dark:bg-opacity-20`
                      } flex items-center justify-center ${
                        isSelected ? "text-white" : mood.color
                      }`}
                    >
                      <mood.icon
                        className="size-5 md:size-7"
                        weight={isSelected ? "fill" : "regular"}
                      />
                    </div>
                    <span
                      className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider transition-colors ${
                        isSelected ? "text-white" : "text-gray-500"
                      }`}
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
            <label className="text-[10px] md:text-sm font-bold text-[#7C8B9E] uppercase tracking-widest">
              Entry Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your reflection a name..."
              className="w-full bg-white dark:bg-surface-dark rounded-2xl md:rounded-3xl py-4 md:py-6 px-6 md:px-8 text-lg md:text-xl font-serif text-gray-900 dark:text-white border-none shadow-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none"
            />
          </div>

          {/* Content Input */}
          <div className="flex flex-col gap-4">
            <label className="text-[10px] md:text-sm font-bold text-[#7C8B9E] uppercase tracking-widest">
              Your Thoughts
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Start writing..."
              rows={8}
              className="w-full bg-white dark:bg-surface-dark rounded-3xl md:rounded-4xl py-6 md:py-8 px-6 md:px-8 text-base md:text-lg leading-relaxed text-[#2D3436] dark:text-gray-300 border-none shadow-sm focus:ring-4 focus:ring-primary/5 transition-all outline-none resize-none font-display"
            />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 md:bottom-10 left-0 right-0 px-6 flex justify-center z-50">
        <button
          onClick={handleSave}
          disabled={isLoading || !title.trim() || !content.trim()}
          className="w-full max-w-md h-14 md:h-16 rounded-full bg-primary hover:bg-primary-dark text-white text-base md:text-lg font-bold shadow-2xl shadow-primary/30 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale flex items-center justify-center gap-3"
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
