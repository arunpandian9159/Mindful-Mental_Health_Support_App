"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import { SubPageHeader } from "@/components/SubPageHeader";

import {
  PlusIcon,
  MagnifyingGlassIcon,
  SmileyBlankIcon,
  SmileyIcon,
  NotebookIcon,
  SunIcon,
  BrainIcon,
  CloudIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import { journalEntries } from "@/data/data";

const moodConfig = {
  anxious: {
    icon: CloudIcon,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  happy: {
    icon: SunIcon,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
  },
  productive: {
    icon: BrainIcon,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  satisfied: {
    icon: SmileyIcon,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  neutral: {
    icon: SmileyBlankIcon,
    color: "text-gray-500",
    bg: "bg-gray-50 dark:bg-gray-800/40",
  },
  sad: {
    icon: HeartIcon,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
};

export default function Journal() {
  const router = useRouter();
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    journalEntries.forEach((entry) =>
      entry.tags.forEach((tag) => tags.add(tag)),
    );
    return ["All", ...Array.from(tags)];
  }, []);

  const filteredEntries = useMemo(() => {
    return journalEntries.filter((entry) => {
      const matchesSearch =
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = activeTag === "All" || entry.tags.includes(activeTag);
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, activeTag]);

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
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#F8F9FA] dark:bg-background-dark items-center pt-16">
      <SubPageHeader
        title="Journal"
        rightIcon={<PlusIcon size={20} weight="bold" />}
        rightAction={() => router.push("/journal/new")}
      />
      <header className="w-full px-6 py-6 flex flex-col gap-4 bg-white/40 dark:bg-background-dark/40 backdrop-blur-md sticky items-center border-b border-gray-100 dark:border-gray-800">
        <div className="w-full max-w-2xl">
          <div className="relative w-full max-w-2xl mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <MagnifyingGlassIcon size={20} />
            </span>
            <input
              className="block w-full pl-10 pr-3 py-3 border-none rounded-2xl bg-white dark:bg-surface-dark shadow-sm text-sm md:text-base outline-none focus:ring-2 focus:ring-primary/20 transition-all text-[#2D3436] dark:text-white"
              placeholder="Search entries..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-3 mt-6 overflow-x-auto no-scrollbar py-1">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeTag === tag
                    ? "bg-[#7C8B9E] text-white shadow-lg shadow-gray-200 dark:shadow-none"
                    : "bg-white dark:bg-surface-dark text-[#7C8B9E] hover:bg-gray-50 border border-gray-100 dark:border-gray-800"
                }`}
              >
                {tag === "All" ? tag : `#${tag}`}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl px-5 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 overflow-y-auto no-scrollbar pt-2">
        {filteredEntries.map((entry) => {
          const config =
            moodConfig[entry.mood as keyof typeof moodConfig] ||
            moodConfig.neutral;
          const MoodIcon = config.icon;

          return (
            <div
              key={entry.id}
              role="button"
              tabIndex={0}
              onClick={() => handleEntryClick(entry.id)}
              onKeyDown={(e) => handleEntryKeyDown(e, entry.id)}
              className="bg-white dark:bg-surface-dark p-5 rounded-4xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-50 dark:border-gray-800 flex flex-col gap-2 group cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 h-fit"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#7C8B9E] uppercase tracking-[0.15em]">
                    {entry.date}
                  </span>
                  <h2 className="font-serif text-xl md:text-2xl font-bold mt-2 text-[#2D3436] dark:text-white group-hover:text-primary transition-colors leading-tight">
                    {entry.title}
                  </h2>
                </div>
                <div
                  className={`size-11 rounded-full ${config.bg} flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <MoodIcon size={24} weight="fill" className={config.color} />
                </div>
              </div>

              <p className="text-sm md:text-base text-[#7C8B9E] dark:text-gray-400 leading-relaxed font-display">
                {entry.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#F8F9FA] dark:bg-white/5 text-[#7C8B9E] dark:text-gray-500 text-[10px] uppercase font-bold tracking-wider rounded-lg border border-gray-100 dark:border-gray-800 transition-colors group-hover:bg-white dark:group-hover:bg-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {filteredEntries.length === 0 && (
          <div className="mt-4 flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-4xl md:col-span-2">
            <NotebookIcon
              size={64}
              weight="thin"
              className="mb-4 text-gray-300"
            />
            <p className="text-lg font-medium text-gray-400">
              No entries match your search...
            </p>
          </div>
        )}
      </main>
      <BottomNav />
    </div>
  );
}
