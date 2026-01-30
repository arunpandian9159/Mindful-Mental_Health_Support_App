"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { LockKeyIcon } from "@phosphor-icons/react";

export default function OnboardingPrivacy() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-6 w-full px-8 text-center relative z-0">
        <div className="w-32 h-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center mb-10 shadow-sm transition-transform hover:scale-105 duration-300">
          <LockKeyIcon size={64} weight="fill" className="text-primary" />
        </div>
        <h1 className="font-serif text-[#101519] dark:text-white tracking-tight text-[28px] font-bold leading-tight mb-4">
          Your Privacy Comes First
        </h1>
        <p className="text-[#566370] dark:text-gray-400 text-base font-normal leading-relaxed max-w-xs mx-auto mb-8">
          Your data is encrypted, secure, and never shared without permission.
        </p>
        <Link
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors border-b border-primary/20 pb-0.5"
        >
          View privacy policy
        </Link>
      </div>
      <div className="w-full px-6 pb-10 pt-4 flex flex-col gap-6 z-10">
        <div className="flex justify-center items-center gap-2">
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-1.5 w-8 rounded-full bg-primary transition-all duration-300"></div>
          <div className="h-1.5 w-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300"></div>
        </div>
        <button
          onClick={() => router.push("/onboarding/reminders")}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-[17px] font-bold leading-normal tracking-wide shadow-lg"
        >
          <span className="truncate">Next</span>
        </button>
      </div>
    </div>
  );
}
