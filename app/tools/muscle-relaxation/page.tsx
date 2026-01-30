"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/BottomNav";
import {
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon,
  CheckCircleIcon,
} from "@phosphor-icons/react";
import { muscleGroups } from "@/data/data";

export default function MuscleRelaxation() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [timerStarted, setTimerStarted] = useState(false);
  const currentStepRef = useRef(currentStep);

  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (isPlaying && timeRemaining === 0 && timerStarted) {
      const step = currentStepRef.current;
      setCompletedSteps((prev) => [...prev, muscleGroups[step].id]);
      if (step < muscleGroups.length - 1) {
        setCurrentStep(step + 1);
        setTimeRemaining(muscleGroups[step + 1].duration);
      } else {
        setIsPlaying(false);
        setTimerStarted(false);
      }
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeRemaining, timerStarted]);

  const handleStart = () => {
    if (completedSteps.length === muscleGroups.length) {
      setCompletedSteps([]);
      setCurrentStep(0);
      setTimeRemaining(muscleGroups[0].duration);
      setTimerStarted(true);
    } else {
      // Use the correct step index for timeRemaining
      const startIndex = currentStep;
      setTimeRemaining(muscleGroups[startIndex].duration);
      setTimerStarted(true);
    }
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleStepClick = (index: number) => {
    if (!isPlaying) {
      setCurrentStep(index);
      setTimeRemaining(muscleGroups[index].duration);
      setTimerStarted(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Fixed progress calculation: return 0% when not started
  const progress =
    !timerStarted || timeRemaining === muscleGroups[currentStep].duration
      ? 0
      : Math.min(
          100,
          Math.max(
            0,
            ((muscleGroups[currentStep].duration - timeRemaining) /
              muscleGroups[currentStep].duration) *
              100,
          ),
        );

  const isComplete =
    completedSteps.length === muscleGroups.length && !isPlaying;

  // Button text logic: show Resume only if timer was started and is paused
  const getButtonText = () => {
    if (isComplete) return "Start Again";
    if (timerStarted && !isPlaying && timeRemaining > 0) return "Resume";
    return "Start";
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark items-center">
      <header className="w-full px-4 pt-12 pb-4 flex items-center justify-between bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10 sticky top-0 md:justify-center">
        <div className="w-full max-w-5xl flex items-center justify-between">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowLeftIcon size={24} />
          </button>
          <h2 className="text-xl md:text-3xl font-bold transition-all">
            Muscle Relaxation
          </h2>
          <div className="w-10" />
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl px-6 pb-24 flex flex-col gap-6 overflow-y-auto no-scrollbar pt-4">
        <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-soft border border-gray-100 dark:border-gray-800 flex flex-col items-center max-w-xl mx-auto w-full">
          {isComplete ? (
            <>
              <div className="size-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <CheckCircleIcon
                  size={48}
                  className="text-green-500"
                  weight="fill"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-all">
                Session Complete!
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center">
                Great job! You&apos;ve completed all muscle groups.
              </p>
            </>
          ) : (
            <>
              <div className="relative size-32 md:size-40 mb-4 transition-all">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-gray-100 dark:text-gray-800"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${progress * 2.83} 283`}
                    className="text-primary transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white transition-all">
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-all">
                {muscleGroups[currentStep].name}
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center leading-relaxed px-4">
                {muscleGroups[currentStep].instruction}
              </p>
            </>
          )}
        </div>

        <button
          onClick={isPlaying ? handlePause : handleStart}
          className="w-full max-w-xl mx-auto py-4 rounded-2xl bg-primary text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all"
        >
          {isPlaying ? (
            <>
              <PauseIcon size={24} weight="fill" />
              Pause
            </>
          ) : (
            <>
              <PlayIcon size={24} weight="fill" />
              {getButtonText()}
            </>
          )}
        </button>

        <div className="flex flex-col gap-2 max-w-xl mx-auto w-full">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Muscle Groups
          </h4>
          <div className="flex flex-col gap-2">
            {muscleGroups.map((group, index) => {
              const isCompleted = completedSteps.includes(group.id);
              const isCurrent = currentStep === index && !isComplete;
              return (
                <button
                  key={group.id}
                  onClick={() => handleStepClick(index)}
                  disabled={isPlaying}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${isCurrent ? "bg-primary/10 border-2 border-primary" : isCompleted ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800" : "bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/20"} ${isPlaying ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`size-8 md:size-10 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all ${isCompleted ? "bg-green-500 text-white" : isCurrent ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500"}`}
                    >
                      {isCompleted ? (
                        <CheckCircleIcon size={18} weight="fill" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span
                      className={`font-medium md:text-lg transition-all ${isCurrent ? "text-primary" : isCompleted ? "text-green-600 dark:text-green-400" : "text-gray-700 dark:text-gray-300"}`}
                    >
                      {group.name}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-gray-400">
                    {Math.floor(group.duration / 60)}:
                    {(group.duration % 60).toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
