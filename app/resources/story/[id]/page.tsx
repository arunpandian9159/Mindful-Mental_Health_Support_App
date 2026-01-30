"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CaretLeftIcon,
  QuotesIcon,
  MapPinIcon,
  CalendarIcon,
  LightbulbIcon,
  SparkleIcon,
} from "@phosphor-icons/react";
import { recoveryStories } from "@/data/data";

export default function StoryDetail() {
  const { id } = useParams();
  const router = useRouter();
  const story = recoveryStories.find((s) => s.id === id);

  if (!story) return <div className="p-10 text-center">Story not found</div>;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-2xl mx-auto">
        <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-30 border-b border-gray-100 dark:border-gray-800 px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="size-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all active:scale-95"
          >
            <CaretLeftIcon size={20} weight="bold" />
          </button>
          <div className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full">
            <SparkleIcon size={14} weight="fill" />
            RECOVERY STORY
          </div>
        </header>

        <main className="px-6 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-text-primary dark:text-white leading-tight italic">
                &quot;{story.title}&quot;
              </h1>
              <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400 text-sm font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPinIcon size={16} /> {story.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarIcon size={16} /> {story.duration}
                </span>
              </div>
              <div className="text-xl font-bold text-primary">
                — {story.author}
              </div>
            </div>

            <div className="bg-white dark:bg-surface-dark p-8 rounded-[40px] shadow-xl border border-gray-100 dark:border-gray-800 relative">
              <div className="absolute top-8 left-8 opacity-10 text-primary">
                <QuotesIcon size={64} weight="fill" />
              </div>
              <div className="relative z-10 whitespace-pre-line text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-serif">
                {story.story}
              </div>
            </div>

            <section className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-emerald-50 dark:bg-emerald-900/10 p-6 rounded-3xl border border-emerald-100 dark:border-emerald-900/20">
                <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center gap-2">
                  <SparkleIcon size={20} weight="fill" />
                  Key Moments
                </h3>
                <ul className="space-y-3">
                  {story.keyMoments.map((moment, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-emerald-500 font-bold">•</span>
                      {moment}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-3xl border border-purple-100 dark:border-purple-900/20">
                <h3 className="text-lg font-bold text-purple-800 dark:text-purple-400 mb-4 flex items-center gap-2">
                  <LightbulbIcon size={20} weight="fill" />
                  Advice for Others
                </h3>
                <ul className="space-y-3">
                  {story.adviceForOthers.map((advice, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-purple-500 font-bold">•</span>
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
