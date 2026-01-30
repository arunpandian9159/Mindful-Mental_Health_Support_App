"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import Image from "next/image";
import {
  LeafIcon,
  BellIcon,
  PencilLineIcon,
  PlayCircleIcon,
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
      <header className="flex items-center justify-between px-6 py-6 pt-10 sticky top-0 z-20 glass backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <LeafIcon size={18} weight="fill" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
            <BellIcon size={24} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-400 border-2 border-background-light dark:border-background-dark"></span>
          </button>
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm">
            <Image
              alt="Profile"
              className="h-full w-full object-cover"
              src={currentUser.avatar}
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-12 pt-8">
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
          <div className="glass rounded-3xl shadow-xl p-6 transition-all hover:scale-[1.01]">
            <h3 className="text-lg font-serif font-semibold text-text-primary dark:text-white mb-6">
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
                    className={`p-4 rounded-full ${item.bg} dark:bg-opacity-20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${item.color}`}
                  >
                    <item.icon size={36} weight="duotone" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 grid grid-cols-2 gap-6">
          <Link
            href="/goals/new"
            className="glass rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:scale-[1.02] transition-all"
          >
            <div className="relative h-24 w-24 mb-4">
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
            className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-6 flex flex-col justify-between border border-primary/10 group hover:scale-[1.02] transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-3 text-primary font-bold text-xs uppercase tracking-widest">
                <PencilLineIcon size={16} />
                <span>Prompt</span>
              </div>
              <p className="text-base font-serif text-text-primary dark:text-gray-100 font-medium leading-relaxed">
                {journalPrompt.text}
              </p>
            </div>
            <button className="mt-6 w-full py-2.5 bg-white dark:bg-white/10 text-primary text-xs font-bold rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
              Write Now
            </button>
          </Link>
        </section>

        <section className="px-6 mb-8">
          <h3 className="text-xl font-serif font-bold text-text-primary dark:text-white mb-4 flex items-center justify-between">
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
            className="block group relative overflow-hidden rounded-3xl glass shadow-lg hover:scale-[1.01] transition-all"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex flex-col justify-between p-6 order-2 md:order-1 flex-1">
                <div>
                  <div className="inline-flex items-center rounded-full bg-goal-green/10 px-3 py-1 text-xs font-bold text-goal-green mb-3 uppercase tracking-wider">
                    Recommended
                  </div>
                  <h4 className="text-xl font-serif font-bold text-text-primary dark:text-white">
                    {suggestedContent.title}
                  </h4>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    {suggestedContent.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-xl group-hover:bg-primary-dark transition-all active:scale-95">
                    <PlayCircleIcon size={22} weight="fill" /> Play
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {suggestedContent.duration}
                  </span>
                </div>
              </div>
              <div className="relative h-60 md:h-auto md:w-2/5 order-1 md:order-2 overflow-hidden">
                <Image
                  src={suggestedContent.image}
                  alt={suggestedContent.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  fill
                />
              </div>
            </div>
          </Link>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
