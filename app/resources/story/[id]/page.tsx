"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  MapPinIcon,
  CalendarIcon,
  LightbulbIcon,
  SparkleIcon,
  QuotesIcon,
} from "@phosphor-icons/react";
import { recoveryStories } from "@/data/data";
import { SubPageHeader } from "@/components/SubPageHeader";

export default function StoryDetail() {
  const { id } = useParams();
  const story = recoveryStories.find((s) => s.id === id);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!story) return <div className="p-10 text-center">Story not found</div>;

  const parseContent = (text: string) => {
    return text.split("\n\n").map((part, index) => {
      // Check if it's a sub-heading (ends with :)
      if (part.trim().endsWith(":")) {
        return (
          <h2
            key={index}
            className="text-2xl font-serif font-bold text-primary mt-12 mb-6 italic"
          >
            {part}
          </h2>
        );
      }

      // Check if it's a list (starts with • or 1.)
      if (part.includes("•") || /^\d+\./.test(part.trim())) {
        return (
          <div
            key={index}
            className="space-y-3 my-6 pl-4 border-l-2 border-primary/20"
          >
            {part.split("\n").map((line, lIdx) => (
              <p
                key={lIdx}
                className="text-gray-700 dark:text-gray-300 leading-relaxed font-sans"
              >
                {line.trim()}
              </p>
            ))}
          </div>
        );
      }

      // Regular paragraph
      return (
        <p
          key={index}
          className={`text-[17px] text-gray-800 dark:text-gray-200 leading-[1.8] font-sans mb-6 ${
            index === 0
              ? "first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none"
              : ""
          }`}
        >
          {part}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] dark:bg-background-dark selection:bg-primary/20 transition-colors duration-500">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <SubPageHeader title="RECOVERY STORY" backPath="/resources" />

      <div className="max-w-3xl mx-auto pb-32">
        <main className="px-6 pt-32 lg:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Header Section */}
            <header className="text-center space-y-8 relative">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary/10 select-none">
                <QuotesIcon size={120} weight="fill" />
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold text-text-primary dark:text-white leading-tight italic tracking-tight px-4">
                &quot;{story.title}&quot;
              </h1>

              <div className="flex flex-col items-center gap-4">
                <div className="text-2xl font-serif font-bold text-primary tracking-wide">
                  — {story.author}
                </div>

                <div className="flex items-center justify-center gap-6 text-gray-400 dark:text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2">
                    <MapPinIcon
                      size={16}
                      weight="bold"
                      className="text-primary/60"
                    />{" "}
                    {story.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarIcon
                      size={16}
                      weight="bold"
                      className="text-primary/60"
                    />{" "}
                    {story.duration}
                  </span>
                </div>
              </div>
            </header>

            {/* Content Section */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div className="relative">
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-linear-to-b from-primary/20 via-transparent to-primary/20 hidden lg:block" />
                <div className="whitespace-pre-line space-y-2">
                  {parseContent(story.story)}
                </div>
              </div>
            </article>

            {/* Enhanced Callouts */}
            <section className="grid lg:grid-cols-11 gap-8 mt-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-11 xl:col-span-5 bg-white dark:bg-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-none p-8 rounded-4xl border border-emerald-50 dark:border-emerald-900/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 text-emerald-500/10 group-hover:scale-110 transition-transform duration-500">
                  <SparkleIcon size={80} weight="fill" />
                </div>
                <h3 className="text-xl font-serif font-bold text-emerald-800 dark:text-emerald-400 mb-6 flex items-center gap-3">
                  <span className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                    <SparkleIcon size={24} weight="fill" />
                  </span>
                  Key Moments
                </h3>
                <ul className="space-y-4">
                  {story.keyMoments.map((moment, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed font-sans"
                    >
                      <span className="text-emerald-500 font-black mt-1">
                        0{idx + 1}
                      </span>
                      {moment}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-11 xl:col-span-6 bg-[#1A1A1A] p-5 rounded-4xl text-white relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute -bottom-10 -right-10 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <LightbulbIcon size={200} weight="fill" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 flex items-center gap-4">
                  <LightbulbIcon
                    size={32}
                    weight="duotone"
                    className="text-yellow-400"
                  />
                  Advice for Others
                </h3>
                <div className="space-y-5">
                  {story.adviceForOthers.map((advice, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-2 text-gray-300 font-sans italic relative z-10"
                    >
                      <span className="text-yellow-400 shrink-0 text-xl font-serif">
                        “
                      </span>
                      <p className="border-b border-white/10 pb-3 w-full leading-relaxed">
                        {advice}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Footer Sign-off */}
            <footer className="pt-20 border-t border-gray-100 dark:border-gray-800 text-center">
              <p className="font-serif italic text-gray-500 dark:text-gray-400 text-lg">
                Thank you for being part of this recovery journey.
              </p>
            </footer>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
