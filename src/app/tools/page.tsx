"use client";

import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";

import {
  MagnifyingGlassIcon,
  HandHeartIcon,
  HeadphonesIcon,
  PlayIcon,
  VideoCameraIcon,
  ArrowLeft,
} from "@phosphor-icons/react";
import Image from "next/image";
import { toolCategories, wellnessTools } from "@/data/data";

export default function WellnessLibrary() {
  const router = useRouter();

  const categories = toolCategories;

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-4 pt-12 pb-2 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0">
        <button
          onClick={() => router.push("/")}
          className="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center">
          Wellness Library
        </h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar pb-24">
        <div className="px-4 py-2 sticky top-14 bg-background-light dark:bg-background-dark z-10 pb-4">
          <div className="relative flex items-center w-full h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 focus-within:border-primary/50 transition-colors">
            <div className="grid place-items-center h-full w-12 text-slate-400">
              <MagnifyingGlassIcon size={20} />
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-slate-700 dark:text-slate-200 pr-2 bg-transparent placeholder-slate-400 font-medium"
              placeholder="Search tools..."
              type="text"
            />
          </div>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar px-4 pb-4">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${i === 0 ? "bg-primary text-white shadow-md" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary/5"}`}
              >
                {cat}
              </button>
            ))}
            <button
              onClick={() => router.push("/crisis")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-coral text-white shadow-md hover:scale-105 transition-transform"
            >
              <HandHeartIcon size={18} weight="bold" />
              <span className="text-sm font-bold">Crisis</span>
            </button>
          </div>
        </div>

        <div className="px-4 flex flex-col gap-4">
          <h3 className="text-slate-900 dark:text-white font-bold text-lg mt-2 mb-1">
            Recommended for you
          </h3>

          {wellnessTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => router.push(tool.href)}
              className="group relative flex items-center gap-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-soft border border-slate-100 dark:border-slate-700 cursor-pointer hover:border-primary/30 transition-all"
            >
              <div className="shrink-0 relative overflow-hidden rounded-xl">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  width={80}
                  height={80}
                  className="size-20 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              <div className="flex flex-col flex-1 justify-center min-w-0">
                <h4 className="text-slate-900 dark:text-white text-base font-semibold leading-tight mb-1 truncate">
                  {tool.title}
                </h4>
                <div
                  className={`flex items-center gap-2 ${tool.type === "audio" ? "text-primary dark:text-primary/80" : "text-violet-500 dark:text-violet-400"} text-xs font-semibold uppercase tracking-wide`}
                >
                  {tool.type === "audio" ? (
                    <HeadphonesIcon size={16} weight="bold" />
                  ) : (
                    <VideoCameraIcon size={16} weight="bold" />
                  )}
                  <span>
                    {tool.type.charAt(0).toUpperCase() + tool.type.slice(1)} •{" "}
                    {tool.duration}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 line-clamp-1">
                  {tool.description}
                </p>
              </div>
              <div className="shrink-0 pr-2">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <PlayIcon size={20} weight="fill" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
