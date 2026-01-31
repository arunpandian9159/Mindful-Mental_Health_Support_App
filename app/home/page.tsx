"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import Image from "next/image";
import {
  BellIcon,
  PencilLineIcon,
  PlayCircleIcon,
  ClockIcon,
  PillIcon,
} from "@phosphor-icons/react";
import {
  currentUser,
  moodOptions,
  dailyGoalsProgress,
  journalPrompt,
  suggestedContent,
} from "@/data/data";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden pb-32 bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between px-6 pt-3 sticky top-0 z-20 glass backdrop-blur-md">
        <div className="flex items-center justify-between w-full max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/mindful-icon.png"
                alt="Mindful"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
              <BellIcon size={24} />
              <span 
              onClick={() => router.push("/notifications")} 
              className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-400 border-2 border-background-light dark:border-background-dark"></span>
            </button>
            <Link
              href="/profile"
              className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm active:scale-90 transition-transform cursor-pointer"
            >
              <Image
                alt="Profile"
                className="h-full w-full object-cover"
                src={currentUser.avatar}
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-9 pt-8 max-w-5xl mx-auto w-full">
        <section className="px-6">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-text-primary dark:text-white">
            Good morning,{" "}
            <span className="text-primary">{currentUser.name}</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mt-2">
            Ready to start your day mindfully?
          </p>
        </section>

        <section className="px-6">
          <div className="glass rounded-3xl shadow-xl p-5 transition-all hover:scale-[1.01]">
            <h3 className="text-lg font-serif font-semibold text-text-primary dark:text-white mb-3">
              How are you feeling?
            </h3>
            <div className="flex justify-between items-center px-2">
              {moodOptions.map((item, i) => (
                <button
                  key={i}
                  onClick={() => router.push("/mood/log")}
                  className="group flex flex-col items-center gap-2 transition-all active:scale-90 focus:outline-none"
                >
                  <div
                    className={`p-2 rounded-full ${item.bg} dark:bg-opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.color}`}
                  >
                    <item.icon size={24} weight="duotone" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 grid grid-cols-2 gap-6">
          <Link
            href="/goals"
            className="glass rounded-3xl shadow-lg p-4 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group hover:scale-[1.02] transition-all"
          >
            <div className="relative h-20 w-20 mb-4">
              <svg
                className="h-full w-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-100 dark:text-white/10"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                ></path>
                <path
                  className="text-primary"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={`${(dailyGoalsProgress.completed / dailyGoalsProgress.total) * 100}, 100`}
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-text-primary dark:text-white">
                  {dailyGoalsProgress.completed}
                  <span className="text-gray-400 text-sm font-normal">
                    /{dailyGoalsProgress.total}
                  </span>
                </span>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-text-primary dark:text-white">
              Daily Goals
            </h4>
          </Link>

          <Link
            href={journalPrompt.href}
            className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-4 aspect-square flex flex-col justify-between border border-primary/10 group hover:scale-[1.02] transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 text-primary font-bold text-xs uppercase tracking-widest">
                <PencilLineIcon size={16} />
                <span>Journal</span>
              </div>
              <p className="text-xs font-serif text-text-primary dark:text-gray-100 font-medium leading-relaxed">
                {journalPrompt.text}
              </p>
            </div>
            <button className="mt-2 w-full py-1.5 bg-white dark:bg-white/10 text-primary text-xs font-bold rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              Write Now
            </button>
          </Link>
        </section>

        <section className="px-4 grid grid-cols-2 gap-4">
          <Link
            href="/medication"
            className="p-3 rounded-3xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-soft flex items-center gap-3 hover:border-primary/30 transition-all group"
          >
            <div className="size-10 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
              <PillIcon size={20} weight="fill" />
            </div>
            <span className="font-bold text-sm text-text-primary dark:text-white group-hover:text-primary transition-colors">
              Medication
            </span>
          </Link>
          <Link
            href="/resources"
            className="p-4 rounded-3xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-soft flex items-center gap-3 hover:border-primary/30 transition-all group"
          >
            <div className="size-10 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600">
              <PlayCircleIcon size={20} weight="fill" />
            </div>
            <span className="font-bold text-sm text-text-primary dark:text-white group-hover:text-primary transition-colors">
              Resources
            </span>
          </Link>
        </section>

        <section className="px-6 py-4 mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-between">
            Suggested for you
            <Link
              href="/tools"
              className="text-primary text-xs font-bold hover:underline"
            >
              See all
            </Link>
          </h3>
          <Link
            href={suggestedContent.href}
            className="block bg-surface-light dark:bg-surface-dark rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all active:scale-[0.98]"
          >
            <div className="flex p-3 gap-4">
              <div className="w-32 h-32 shrink-0 m-auto">
                <div className="w-full h-full rounded-lg shadow-lg shadow-gray-300 dark:shadow-gray-800 overflow-hidden relative">
                  <Image
                    src={suggestedContent.image}
                    alt={suggestedContent.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between py-0.5 flex-1">
                <div>
                  <div className="inline-flex items-center rounded-full bg-green-500/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700 dark:text-green-300 mb-1.5">
                    Recommended
                  </div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                    {suggestedContent.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-normal line-clamp-2">
                    {suggestedContent.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 text-gray-400">
                    <ClockIcon size={14} weight="bold" />
                    <span className="text-[11px] font-medium uppercase tracking-wide">
                      {suggestedContent.duration}
                    </span>
                  </div>
                  <button className="flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors">
                    <PlayCircleIcon size={16} weight="fill" />
                    <span>Play</span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
