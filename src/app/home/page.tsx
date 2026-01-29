"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import { GlobalHelpFAB } from "@/components/GlobalHelpFAB";
import { StatusBar } from "@/components/StatusBar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden pb-24 bg-background-light dark:bg-background-dark">
      <StatusBar />

      <header className="flex items-center justify-between px-6 py-6 pt-10 sticky top-0 z-20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-lg">spa</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-400 border-2 border-background-light dark:border-background-dark"></span>
          </button>
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border-2 border-white dark:border-gray-600 shadow-sm">
            <img
              alt="Profile"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU-_SYT0qaSxH6lDtb_P0g6umnFWWZLjDxu-MjtxkNm1ea2zs9jQUjN-uT7L3qtzXwb-YAAZVz0s5DA-LX2_Myo1czEUJKE_HR-RteTFCs7801_LLdbzlm8IjvLVKaXBkb6ZG0Uiuel_n7C7jEi35Q9B7jwTknxV6fQoi9i2lvJV2WrAkURNBXdcbrMvhOF9Trhqfrifp5q1bFUnhOtITQ9uR1MO6rLwTxABjD9hUiCQrEzTic6IND0puSTUpAnKjChb51a0Br0fx8"
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 pb-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Good morning, <span className="text-primary">Sarah</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Ready to start your day mindfully?
          </p>
        </section>

        <section className="px-6 py-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-soft p-5 border border-gray-100 dark:border-gray-800 transition-all hover:border-primary/20">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
              How are you feeling?
            </h3>
            <div className="flex justify-between items-center px-2">
              {[
                {
                  icon: "sentiment_very_dissatisfied",
                  color: "text-red-400",
                  bg: "bg-red-50",
                },
                {
                  icon: "sentiment_dissatisfied",
                  color: "text-red-400",
                  bg: "bg-red-50",
                },
                {
                  icon: "sentiment_neutral",
                  color: "text-gray-400",
                  bg: "bg-gray-50",
                },
                {
                  icon: "sentiment_satisfied",
                  color: "text-green-400",
                  bg: "bg-green-50",
                },
                {
                  icon: "sentiment_very_satisfied",
                  color: "text-green-400",
                  bg: "bg-green-50",
                },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => router.push("/mood/log")}
                  className="group flex flex-col items-center gap-2 transition-all active:scale-90 focus:outline-none"
                >
                  <div
                    className={`p-3 rounded-full ${item.bg} dark:bg-opacity-10 transition-colors group-hover:bg-primary/10 group-hover:text-primary ${item.color}`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {item.icon}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-2 grid grid-cols-2 gap-4">
          <Link
            href="/goals"
            className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm p-4 flex flex-col items-center justify-center text-center border border-gray-100 dark:border-gray-800 relative overflow-hidden group hover:border-primary/30 transition-all"
          >
            <div className="relative h-24 w-24 mb-3">
              <svg
                className="h-full w-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-100 dark:text-gray-700"
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
                  strokeDasharray="60, 100"
                  strokeLinecap="round"
                  strokeWidth="3"
                ></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  3<span className="text-gray-400 text-sm font-normal">/5</span>
                </span>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              Daily Goals
            </h4>
          </Link>

          <Link
            href="/journal"
            className="bg-[#F0F7FF] dark:bg-primary/10 rounded-xl p-4 flex flex-col justify-between border border-blue-100 dark:border-blue-900/30 group hover:border-primary/50 transition-all"
          >
            <div>
              <div className="flex items-center gap-1.5 mb-2 text-primary font-medium text-xs uppercase tracking-wide">
                <span className="material-symbols-outlined text-sm">
                  edit_note
                </span>
                <span>Prompt</span>
              </div>
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium leading-snug">
                What are you grateful for today?
              </p>
            </div>
            <button className="mt-4 w-full py-2 bg-white dark:bg-background-dark text-primary text-xs font-semibold rounded-lg shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
              Write Now
            </button>
          </Link>
        </section>

        <section className="px-6 py-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center justify-between">
            Suggested for you
            <Link
              href="/tools"
              className="text-primary text-xs font-semibold hover:underline"
            >
              See all
            </Link>
          </h3>
          <Link
            href="/tools/breathing"
            className="block group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all"
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex flex-col justify-between p-5 order-2 md:order-1 flex-1">
                <div>
                  <div className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-300 mb-2">
                    Recommended
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    5-Minute Breathing
                  </h4>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Reset your focus and calm your mind.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg group-hover:bg-primary-dark transition-colors">
                    <span className="material-symbols-outlined text-[20px]">
                      play_circle
                    </span>{" "}
                    Play
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    5 min
                  </span>
                </div>
              </div>
              <div className="relative h-48 md:h-auto md:w-2/5 order-1 md:order-2 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMnu5DlzaJbe8b4Gx6hkgBNcoYGgp7dGcv86DDzLv41Mn4w33_JKrY4dnYYeHbllcaFVMQ-4qYL7lJhlrr52dnPDo7D7y0D-cxOycNG1M-lz5WNDzu9M0S9IVOr47F9LUcF9aCQQFoWzkSKwZUj_jkAoGlLQqVcgSdhqaxJcK806xRj5zTyjLJcqTdyjTtDF4-qBKQP-oMUms9Cmd1M2x9QtwwKL2B4YWwXZox0o_tEZQzTaqCjPvthx4rcGPLS0p-oCJopPCYm63P"
                  alt="Breathing exercise"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </Link>
        </section>
      </main>

      <GlobalHelpFAB />
      <BottomNav />
    </div>
  );
}
