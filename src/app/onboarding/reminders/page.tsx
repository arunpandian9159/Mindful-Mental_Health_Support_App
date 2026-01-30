"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { BellRingingIcon } from "@phosphor-icons/react";

export default function OnboardingReminders() {
  const router = useRouter();
  const [selected, setSelected] = useState("Once daily");

  const handleFinish = async () => {
    // Persist reminder preference before navigating
    try {
      // Try to save via API first
      try {
        await fetch("/api/settings/reminders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ frequency: selected }),
        });
      } catch {
        // Fallback to localStorage if API is not available
        localStorage.setItem(
          "mindful_reminder_frequency",
          JSON.stringify({
            frequency: selected,
            updatedAt: new Date().toISOString(),
          }),
        );
      }
    } catch (error) {
      console.error("Failed to save reminder preference:", error);
    }

    // Navigate to home after persisting
    router.push("/home");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark items-center">
      <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-6 w-full max-w-md px-8 text-center relative z-0">
        <div className="w-32 h-32 rounded-[2.5rem] bg-secondary/10 flex items-center justify-center mb-10 shadow-sm">
          <BellRingingIcon size={64} weight="fill" className="text-secondary" />
        </div>
        <h1 className="font-serif text-[#101519] dark:text-white tracking-tight text-[28px] md:text-4xl font-bold leading-tight mb-4 transition-all">
          Set Daily Check-ins
        </h1>
        <div className="w-full max-w-xs flex flex-col gap-3 mt-4">
          {["None", "Once daily", "Twice daily"].map((opt) => (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`w-full py-4 rounded-xl text-lg font-medium transition-all ${selected === opt ? "bg-primary text-white shadow-md" : "bg-white dark:bg-surface-dark text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full max-w-md px-6 pb-10 pt-4 flex flex-col gap-6 z-10">
        <div className="flex justify-center items-center gap-2">
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
        </div>
        <button
          onClick={handleFinish}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-[17px] font-bold leading-normal tracking-wide shadow-lg"
        >
          <span className="truncate">Finish</span>
        </button>
      </div>
    </div>
  );
}
