"use client";

import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import { StatusBar } from "@/components/StatusBar";
import {
  GearIcon,
  MagnifyingGlassIcon,
  SmileyBlankIcon,
  SmileyIcon,
  NotebookIcon,
  PencilIcon,
} from "@phosphor-icons/react";

export default function Journal() {
  const router = useRouter();

  const entries = [
    {
      id: 1,
      date: "Today, 9:30 AM",
      title: "Morning Reflection",
      excerpt:
        "Woke up feeling a bit anxious about the presentation today, but the breathing exercise helped...",
      mood: "neutral",
    },
    {
      id: 2,
      date: "Yesterday, 8:45 PM",
      title: "Grateful Heart",
      excerpt:
        "Spent time with family and enjoyed a quiet dinner. Feeling much better than this morning.",
      mood: "satisfied",
    },
  ];

  const handleEntryClick = (entryId: number) => {
    router.push(`/journal/${entryId}`);
  };

  const handleEntryKeyDown = (event: React.KeyboardEvent, entryId: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleEntryClick(entryId);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark max-w-md mx-auto">
      <StatusBar />
      <div className="w-full px-6 pt-16 pb-4 flex flex-col gap-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">
            My Journal
          </h1>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 transition-colors">
            <GearIcon size={24} />
          </button>
        </div>
        <div className="relative w-full">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <MagnifyingGlassIcon size={20} />
          </span>
          <input
            className="block w-full pl-10 pr-3 py-3 border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-surface-dark shadow-sm text-sm outline-none focus:border-primary transition-colors"
            placeholder="Search entries..."
            type="text"
          />
        </div>
      </div>

      <main className="flex-1 w-full px-6 pb-24 flex flex-col gap-4 overflow-y-auto no-scrollbar pt-2">
        {entries.map((entry) => (
          <div
            key={entry.id}
            role="button"
            tabIndex={0}
            onClick={() => handleEntryClick(entry.id)}
            onKeyDown={(e) => handleEntryKeyDown(e, entry.id)}
            className="bg-white dark:bg-surface-dark p-5 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col gap-3 group cursor-pointer hover:border-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label={`Journal entry: ${entry.title}, ${entry.date}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                  {entry.date}
                </span>
                <h2 className="font-serif text-lg font-bold mt-1 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {entry.title}
                </h2>
              </div>
              <div className="size-8 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center">
                {entry.mood === "neutral" ? (
                  <SmileyBlankIcon size={20} className="text-gray-400" />
                ) : (
                  <SmileyIcon size={20} className="text-gray-400" />
                )}
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 italic font-display">
              &quot;{entry.excerpt}&quot;
            </p>
          </div>
        ))}

        <div className="mt-4 flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-3xl opacity-50">
          <NotebookIcon size={48} className="mb-2 text-gray-400" />
          <p className="text-sm font-medium text-gray-400">
            Write your thoughts away...
          </p>
        </div>
      </main>

      <div className="fixed bottom-24 right-6 z-30">
        <button className="h-16 w-16 bg-primary rounded-full shadow-fab flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform">
          <PencilIcon size={32} weight="bold" />
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
