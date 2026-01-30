"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowsOutIcon,
  ArrowsInIcon,
  LeafIcon,
} from "@phosphor-icons/react";

export default function BreathingDetail() {
  const router = useRouter();
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale" | "rest">(
    "inhale",
  );
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const sequence = [
      { name: "inhale", duration: 4000 },
      { name: "hold", duration: 4000 },
      { name: "exhale", duration: 4000 },
      { name: "rest", duration: 4000 },
    ] as const;

    let currentIndex = 0;

    const runSequence = () => {
      const current = sequence[currentIndex];
      setPhase(current.name);

      const timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        runSequence();
      }, current.duration);

      return timer;
    };

    const timer = runSequence();
    return () => clearTimeout(timer);
  }, [isActive]);

  const getPhaseText = () => {
    switch (phase) {
      case "inhale":
        return "Inhale...";
      case "hold":
        return "Hold...";
      case "exhale":
        return "Exhale...";
      case "rest":
        return "Rest...";
    }
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-white dark:bg-background-dark">
      <div
        className={`relative h-[45vh] min-h-90 w-full flex flex-col items-center justify-start overflow-hidden transition-colors duration-1000 ${isActive ? "bg-secondary" : "bg-primary"}`}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent mix-blend-multiply opacity-50"></div>
        <div className="w-full flex justify-between items-center px-6 pt-14 pb-2 z-20">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
          >
            <ArrowLeftIcon size={24} />
          </button>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center mt-8">
          <motion.div
            animate={
              isActive
                ? {
                    scale:
                      phase === "inhale"
                        ? 1.5
                        : phase === "exhale"
                          ? 1
                          : phase === "hold"
                            ? 1.5
                            : 1,
                  }
                : { scale: 1 }
            }
            transition={{ duration: 4, ease: "easeInOut" }}
            className="w-28 h-28 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
          >
            <div className="text-secondary">
              {phase === "inhale" ? (
                <ArrowsOutIcon size={48} />
              ) : phase === "exhale" ? (
                <ArrowsInIcon size={48} />
              ) : (
                <LeafIcon size={48} weight="fill" />
              )}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-white/90 text-lg mt-8 font-medium tracking-wide bg-black/10 px-6 py-2 rounded-full backdrop-blur-sm min-w-30 text-center"
            >
              {isActive ? getPhaseText() : "Ready?"}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex-1 bg-white dark:bg-background-dark rounded-t-[2.5rem] -mt-10 relative z-20 flex flex-col overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex-1 overflow-y-auto px-6 pt-10 pb-24 no-scrollbar">
          <h1 className="font-serif text-[26px] font-bold leading-tight mb-4">
            Square Breathing
          </h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            A powerful technique used by athletes and professionals to calm the
            nervous system and manage stress.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { title: "Inhale", desc: "Slowly breathe in for 4 seconds" },
              { title: "Hold", desc: "Gently hold your breath for 4 seconds" },
              { title: "Exhale", desc: "Slowly release for 4 seconds" },
              { title: "Rest", desc: "Pause for 4 seconds before next cycle" },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 group">
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${isActive && i === ["inhale", "hold", "exhale", "rest"].indexOf(phase) ? "bg-primary text-white" : "bg-gray-100 text-gray-400 group-hover:bg-primary/10"}`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-slate-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md z-30">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex w-full items-center justify-center rounded-2xl h-14 font-bold shadow-xl transition-all ${isActive ? "bg-danger text-white" : "bg-secondary text-white"}`}
          >
            {isActive ? "Stop Practice" : "Start Practice"}
          </button>
        </div>
      </div>
    </div>
  );
}
