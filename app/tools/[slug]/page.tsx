"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon,
  HeadphonesIcon,
  VideoCameraIcon,
  ClockIcon,
  SpeakerHighIcon,
  ArrowCounterClockwiseIcon,
} from "@phosphor-icons/react";
import { wellnessTools } from "@/data/data";
import Image from "next/image";

export default function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const tool = wellnessTools.find(
    (t) => t.id === slug || t.href === `/tools/${slug}`,
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.1, 100));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, progress]);

  if (!tool) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background-light dark:bg-background-dark p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
        <button
          onClick={() => router.push("/tools")}
          className="px-6 py-2 bg-primary text-white rounded-full font-bold"
        >
          Back to Library
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark items-center font-sans">
      {/* Immersive Background Header */}
      <div className="relative h-[55vh] w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src={tool.image}
            alt={tool.title}
            fill
            className={`object-cover transition-all duration-1000 ${isActive ? "scale-110 blur-xl brightness-50" : "scale-100 blur-sm brightness-75"}`}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60"></div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-0 w-full max-w-5xl flex justify-between items-center px-6 pt-8 z-30">
          <button
            onClick={() => router.back()}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
          >
            <ArrowLeftIcon size={24} weight="bold" />
          </button>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/90">
            <ClockIcon size={18} weight="bold" />
            <span className="text-sm font-bold tracking-tight">
              {tool.duration}
            </span>
          </div>
        </div>

        {/* Central Visualization */}
        <div className="relative z-20 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative size-48 md:size-64"
          >
            {/* Pulsing rings when active */}
            <AnimatePresence>
              {isActive && (
                <>
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                  />
                  <motion.div
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    className="absolute inset-0 rounded-full border border-white/20"
                  />
                </>
              )}
            </AnimatePresence>

            {/* Main Image/Logo Container */}
            <div className="relative size-full rounded-full border-4 border-white/20 overflow-hidden shadow-2xl">
              <Image
                src={tool.image}
                alt={tool.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Type Overlay */}
              <div className="absolute bottom-0 left-0 w-full py-4 text-center bg-black/40 backdrop-blur-sm border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-white/90">
                  {tool.type === "audio" ? (
                    <HeadphonesIcon size={20} weight="fill" />
                  ) : (
                    <VideoCameraIcon size={20} weight="fill" />
                  )}
                  <span className="text-xs font-black uppercase tracking-widest">
                    {tool.type}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-center px-6"
          >
            <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg mb-2">
              {tool.title}
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xs mx-auto line-clamp-2 md:line-clamp-none font-medium italic">
              &quot;{tool.description}&quot;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-t-[3rem] -mt-12 relative z-30 w-full max-w-5xl shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center">
        <div className="w-12 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 mb-8" />

        <div className="w-full px-8 flex-1 flex flex-col justify-between pb-12">
          {/* Audio Controls Section */}
          <div className="flex flex-col items-center gap-10">
            {/* Progress Bar */}
            <div className="w-full space-y-3">
              <div className="flex justify-between text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                <span>0:00</span>
                <span>{tool.duration}</span>
              </div>
              <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-primary"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
            </div>

            {/* Play/Pause/Skip */}
            <div className="flex items-center gap-10">
              <button
                onClick={() => setProgress(0)}
                className="p-3 text-slate-400 hover:text-primary transition-colors"
              >
                <ArrowCounterClockwiseIcon size={28} weight="bold" />
              </button>

              <button
                onClick={() => setIsActive(!isActive)}
                className={`size-20 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 ${
                  isActive
                    ? "bg-slate-100 dark:bg-slate-800 text-primary border-4 border-primary"
                    : "bg-primary text-white hover:bg-primary-dark"
                }`}
              >
                {isActive ? (
                  <PauseIcon size={36} weight="fill" />
                ) : (
                  <PlayIcon size={36} weight="fill" className="ml-1" />
                )}
              </button>

              <button className="p-3 text-slate-400 hover:text-primary transition-colors">
                <SpeakerHighIcon size={28} weight="bold" />
              </button>
            </div>
          </div>

          {/* Additional Info / Benefits */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-widest block mb-1">
                Focus Area
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                Mental Clarity
              </span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-primary dark:text-primary-light uppercase tracking-widest block mb-1">
                Benefit
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                Instant Calm
              </span>
            </div>
          </div>

          <button
            onClick={() => router.push("/tools")}
            className="mt-8 text-center text-slate-400 dark:text-slate-500 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            View More Tools
          </button>
        </div>
      </div>
    </div>
  );
}
