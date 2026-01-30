"use client";

import { useRouter, useParams } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import {
  ArrowLeftIcon,
  PencilSimpleIcon,
  TrashIcon,
  SmileyBlankIcon,
  SmileyIcon,
  SmileySadIcon,
  SmileyWinkIcon,
} from "@phosphor-icons/react";
import { journalEntries } from "@/data/data";

// Define mood type for type safety
type Mood = "neutral" | "satisfied" | "sad" | "happy";

const moodIcons: Record<Mood, typeof SmileyBlankIcon> = {
  neutral: SmileyBlankIcon,
  satisfied: SmileyIcon,
  sad: SmileySadIcon,
  happy: SmileyWinkIcon,
};

const moodColors: Record<Mood, string> = {
  neutral: "text-gray-400 bg-gray-50",
  satisfied: "text-green-400 bg-green-50",
  sad: "text-red-400 bg-red-50",
  happy: "text-green-400 bg-green-50",
};

export default function JournalEntryDetail() {
  const router = useRouter();
  const params = useParams();
  const entryId = Number(params.id);

  const entry = journalEntries.find((e) => e.id === entryId);

  if (!entry) {
    return (
      <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto items-center justify-center p-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Entry Not Found
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          This journal entry doesn&apos;t exist or has been deleted.
        </p>
        <button
          onClick={() => router.push("/journal")}
          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Journal
        </button>
      </div>
    );
  }

  // Safe lookup with fallbacks for unknown mood values
  const MoodIcon = moodIcons[entry.mood as Mood] ?? SmileyBlankIcon;
  const moodColor = moodColors[entry.mood as Mood] ?? moodColors.neutral;

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <header className="w-full px-4 pt-12 pb-4 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0">
        <button
          onClick={() => router.back()}
          aria-label="Go back"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeftIcon size={24} />
        </button>
        <div className="flex items-center gap-2">
          <button
            aria-label="Edit entry"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
          >
            <PencilSimpleIcon size={22} />
          </button>
          <button
            aria-label="Delete entry"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-red-500"
          >
            <TrashIcon size={22} />
          </button>
        </div>
      </header>

      <main className="flex-1 w-full px-6 pb-24 flex flex-col gap-6 overflow-y-auto no-scrollbar">
        <div className="flex items-center gap-3">
          <div
            className={`size-12 rounded-xl flex items-center justify-center ${moodColor}`}
          >
            <MoodIcon size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {entry.date}
            </span>
            <h1 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
              {entry.title}
            </h1>
          </div>
        </div>

        <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-display text-base">
            {entry.excerpt}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-display text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-display text-base mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Anxiety
            </span>
            <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
              Reflection
            </span>
            <span className="px-3 py-1.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium rounded-full">
              Growth
            </span>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
