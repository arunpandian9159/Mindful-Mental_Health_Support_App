"use client";

import { useRouter } from "next/navigation";
import { StatusBar } from "@/components/StatusBar";
import { SmileyIcon, LeafIcon, UsersIcon } from "@phosphor-icons/react";

export default function OnboardingFeatures() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <StatusBar />
      <div className="flex-1 flex flex-col w-full relative pt-16 pb-6">
        <div className="w-full px-8 flex justify-center mb-8">
          <div className="w-full max-w-70 aspect-square relative overflow-hidden rounded-4xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-white dark:bg-gray-800 p-3">
            <div className="w-full h-full rounded-3xl overflow-hidden relative">
              <div
                className="absolute inset-0 bg-center bg-cover bg-no-repeat transform scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrNm3fYNRLCGv0taFopq60tAJjBffkiz0ZJozmo_PIwjgEbM87zzs3kNRZh0sjrAngAjeGHsUpNq4Pua85QwcCSkXCi_tuxtw5cnaJHHQQBGKovNpTngeQGGPibvNefCm6Y1I_nvdOOUQulsIyHgpwnRTNJmVg_e8JPzdRH8ECgJ8l2QvdqdGWmjtmlyiW2jX1lDvQUYnZuJyYPWGqCA_mGYbtPogyNmZqvADWDQjJCT8Zh63e1zCCw-3QfR-9ulXquIdzxMH1PH-y")',
                }}
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col items-center">
          <h1 className="font-display text-[#101519] dark:text-white text-2xl font-bold text-center mb-8 tracking-tight">
            What Mindful Helps You Do
          </h1>
          <div className="w-full flex flex-col gap-7 pl-2">
            <div className="flex items-center gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#EAF4FC] dark:bg-primary/20 flex items-center justify-center text-primary">
                <SmileyIcon size={24} />
              </div>
              <span className="text-[17px] font-medium text-gray-800 dark:text-gray-100 leading-snug">
                Track your mood gently
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#EAF4FC] dark:bg-primary/20 flex items-center justify-center text-primary">
                <LeafIcon size={24} />
              </div>
              <span className="text-[17px] font-medium text-gray-800 dark:text-gray-100 leading-snug">
                Use calming tools anytime
              </span>
            </div>
            <div className="flex items-center gap-5">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#EAF4FC] dark:bg-primary/20 flex items-center justify-center text-primary">
                <UsersIcon size={24} />
              </div>
              <span className="text-[17px] font-medium text-gray-800 dark:text-gray-100 leading-snug">
                Connect with a safe community
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 pb-10 pt-2 flex flex-col items-center gap-6 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/20 dark:bg-white/20"></div>
          <div className="w-8 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20 dark:bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20 dark:bg-white/20"></div>
        </div>
        <button
          onClick={() => router.push("/onboarding/privacy")}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-[17px] font-bold leading-normal tracking-wide shadow-lg"
        >
          <span className="truncate">Next</span>
        </button>
      </div>
    </div>
  );
}
